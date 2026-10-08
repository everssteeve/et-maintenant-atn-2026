// Build a PowerPoint version of the deck, with the full speaker script in the notes.
// Usage: node scripts/build_pptx.js <spec.json> <assets dir> <out.pptx> <apply_theme.js>
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const [specPath, assets, outFile, applyThemePath] = process.argv.slice(2);
const { applyTheme } = require(applyThemePath);
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

const THEME = {
  name: "La traversée",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "0E1233", lt1: "FDFBF3", dk2: "1A1F4A", lt2: "E4E5F0",
    accent1: "FF8AC4", accent2: "B9BBD6", accent3: "2E3466",
    accent4: "6C73B8", accent5: "FFC2E0", accent6: "8A8FB8",
    hlink: "FF8AC4", folHlink: "B9BBD6",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in, i.e. the 1920x1080 canvas at 144 px/in
pres.title = "Et maintenant ? — La traversée";
pres.author = "Steeve Evers";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
const C = pres.SchemeColor;

const W = 13.333, H = 7.5, X = 0.889, TW = 11.6;

// ---- Layouts -------------------------------------------------------------
const kicker = (y) => ({
  placeholder: { options: { name: "kicker", type: "body", x: X, y, w: TW, h: 0.35, fontSize: 12, bold: true,
    charSpacing: 3, color: C.accent1, align: "left", valign: "bottom", margin: 0 }, text: "SURTITRE" },
});
const title = (y, size, h) => ({
  placeholder: { options: { name: "title", type: "title", x: X, y, w: TW, h, fontFace: THEME.headFontFace,
    fontSize: size, bold: true, color: C.background1, align: "left", valign: "top", margin: 0 }, text: "Titre" },
});
const subtitle = (y) => ({
  placeholder: { options: { name: "subtitle", type: "body", x: X, y, w: TW, h: 0.5, fontSize: 16,
    color: C.background2, align: "left", valign: "top", margin: 0 }, text: "Sous-titre" },
});
const master = (name, objects) => pres.defineSlideMaster({ title: name, background: { color: C.text1 }, objects });

master("COVER", [kicker(4.45), title(4.85, 48, 1.05), subtitle(5.95)]);
master("CHAPTER", [kicker(5.2), title(5.6, 48, 1.05)]);
master("PHOTO", [kicker(5.6), title(5.98, 32, 0.75)]);
master("PHOTO_SUB", [kicker(5.05), title(5.43, 32, 0.75), subtitle(6.28)]);
master("PHOTO_LIST", [kicker(2.3), title(2.68, 32, 0.75)]);
master("PLAIN", [kicker(1.0), title(1.38, 32, 0.75)]);

// ---- Helpers -------------------------------------------------------------
const backdrop = (slide, s, tall) => {
  slide.addImage({ path: s.img, x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H },
    altText: s.alt, objectName: "Photo" });
  const g = tall ? { file: "grad_tall.png", y: H - 800 / 144, h: 800 / 144 } : { file: "grad.png", y: H - 560 / 144, h: 560 / 144 };
  slide.addImage({ path: path.join(assets, g.file), x: 0, y: g.y, w: W, h: g.h, altText: "", objectName: "Dégradé" });
};
const fillTitles = (slide, s) => {
  slide.addText(s.kicker.toUpperCase(), { placeholder: "kicker" });
  slide.addText(s.title, { placeholder: "title" });
  if (s.subtitle) slide.addText(s.subtitle, { placeholder: "subtitle" });
};
const card = (slide, x, y, w, h, name) =>
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: C.text2 },
    line: { color: C.accent3, width: 0.75 }, objectName: name });

// ---- Slides --------------------------------------------------------------
let currentSection = null;
for (const s of spec) {
  if (s.section !== currentSection) { pres.addSection({ title: s.section }); currentSection = s.section; }
  let masterName;
  if (!s.img) masterName = "PLAIN";
  else if (s.id === "cover") masterName = "COVER";
  else if (s.items) masterName = "PHOTO_LIST";
  else if (s.level === "h1") masterName = "CHAPTER";
  else masterName = s.subtitle ? "PHOTO_SUB" : "PHOTO";
  const slide = pres.addSlide({ masterName, sectionTitle: s.section });

  if (s.img) backdrop(slide, s, !!s.items);
  fillTitles(slide, s);

  if (s.id === "lecons") {
    s.items.forEach((item, i) => {
      const y = 3.62 + i * 0.52, hi = i === s.highlight;
      slide.addText(String(i + 1), { x: X, y, w: 0.35, h: 0.42, fontFace: THEME.headFontFace, fontSize: 16, bold: true,
        color: C.accent1, margin: 0, valign: "middle", isTextBox: true, objectName: `Numéro ${i + 1}` });
      slide.addText(item, { x: X + 0.45, y, w: 10, h: 0.42, fontSize: 16, bold: hi, color: hi ? C.accent1 : C.background2,
        margin: 0, valign: "middle", isTextBox: true, objectName: `Leçon ${i + 1}` });
    });
  }
  if (s.id === "questions") {
    s.items.forEach((item, i) => {
      const y = 3.62 + i * 0.62;
      slide.addShape(pres.shapes.OVAL, { x: X, y: y + 0.16, w: 0.12, h: 0.12, fill: { color: C.accent1 }, line: { type: "none" },
        objectName: `Puce ${i + 1}` });
      slide.addText(item, { x: X + 0.3, y, w: 11, h: 0.45, fontSize: 16, color: C.background2, margin: 0, valign: "middle",
        isTextBox: true, objectName: `Question ${i + 1}` });
    });
  }
  if (s.id === "qui") {
    slide.addText("Laboratoire d'Expérimentations Digitales · BPCE SI", { x: X, y: 2.2, w: TW, h: 0.4, fontSize: 16,
      color: C.background2, margin: 0, isTextBox: true, objectName: "Laboratoire" });
    slide.addText("J'accompagne les initiatives innovantes de nos collaborateurs et partenaires.", { x: X, y: 2.62, w: TW, h: 0.4,
      fontSize: 16, bold: true, color: C.accent1, margin: 0, isTextBox: true, objectName: "Rôle" });
    const cw = 5.56, cy = 3.45, ch = 3.2;
    const cards = [
      { name: "BPCE SI", parts: [
        { text: "« Accélérer le business, en construisant ensemble des solutions technologiques performantes dans une entreprise IT de référence. »",
          options: { fontFace: THEME.headFontFace, italic: true, fontSize: 14, color: C.background1, paraSpaceAfter: 8, breakLine: true } },
        { text: "Une entreprise dédiée à l'innovation, au développement et à la maintenance des systèmes d'information des établissements bancaires et des métiers du Groupe BPCE.",
          options: { fontSize: 12, color: C.background2, paraSpaceAfter: 8, breakLine: true } },
        { text: "2 500 collaborateurs · 18 villes en France", options: { fontSize: 12, color: C.accent2 } } ] },
      { name: "Groupe BPCE", parts: [
        { text: "« Coopératif, banquier et assureur, notre modèle est au service de nos clients et de l'économie. »",
          options: { fontFace: THEME.headFontFace, italic: true, fontSize: 14, color: C.background2, paraSpaceAfter: 8, breakLine: true } },
        { text: "2e acteur bancaire en France", options: { fontSize: 12, color: C.accent2 } } ] },
    ];
    cards.forEach((c, i) => {
      const x = X + i * (cw + 0.44);
      card(slide, x, cy, cw, ch, `Carte ${c.name}`);
      slide.addText(c.name, { x: x + 0.28, y: cy + 0.28, w: cw - 0.56, h: 0.45, fontFace: THEME.headFontFace, fontSize: 20,
        bold: true, color: C.background1, margin: 0, isTextBox: true, objectName: `Titre ${c.name}` });
      slide.addText(c.parts, { x: x + 0.28, y: cy + 0.85, w: cw - 0.56, h: ch - 0.95, valign: "top", margin: 0,
        isTextBox: true, objectName: `Texte ${c.name}` });
    });
  }
  if (s.id === "cadeaux") {
    const cw = 5.56, cy = 2.75, ch = 2.9;
    const gifts = [
      { qr: "qr_deck.png", name: "Deck Agile", line: "Apprendre l'histoire de l'agilité en jouant", url: "deck-agile.vercel.app",
        link: "https://deck-agile.vercel.app" },
      { qr: "qr_hist.png", name: "L'histoire de l'agilité", line: "Le récit complet et sourcé, des précurseurs à l'IA",
        url: "github.com/everssteeve/et-maintenant-atn-2026",
        link: "https://github.com/everssteeve/et-maintenant-atn-2026/blob/main/HISTOIRE-AGILITE.md" },
    ];
    gifts.forEach((g, i) => {
      const x = X + i * (cw + 0.44);
      card(slide, x, cy, cw, ch, `Carte ${g.name}`);
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.28, y: cy + 0.28, w: 2.34, h: 2.34, rectRadius: 0.1,
        fill: { color: C.background1 }, line: { type: "none" }, objectName: `Fond QR ${g.name}` });
      slide.addImage({ path: path.join(assets, g.qr), x: x + 0.35, y: cy + 0.35, w: 2.2, h: 2.2,
        altText: `QR code vers ${g.url}`, objectName: `QR ${g.name}` });
      slide.addText([
        { text: g.name, options: { fontFace: THEME.headFontFace, fontSize: 20, bold: true, color: C.background1, paraSpaceAfter: 8, breakLine: true } },
        { text: g.line, options: { fontSize: 14, color: C.background2, paraSpaceAfter: 8, breakLine: true } },
        { text: g.url, options: { fontSize: 12, bold: true, color: C.accent1, hyperlink: { url: g.link } } },
      ], { x: x + 2.85, y: cy + 0.28, w: cw - 3.1, h: 2.34, valign: "middle", margin: 0, isTextBox: true,
        objectName: `Texte ${g.name}` });
    });
  }
  slide.addNotes(s.notes);
}

(async () => {
  await pres.writeFile({ fileName: outFile });
  await applyTheme(outFile, THEME);
  console.log("written", outFile);
})();
