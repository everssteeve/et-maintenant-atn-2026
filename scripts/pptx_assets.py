"""Prepare the inputs of build_pptx.js: slide spec (with the full script as notes), gradients, QR codes.

Usage: uv run --with segno --with pillow python3 scripts/pptx_assets.py <out dir>
The full speaker script is read from SCRIPT-COMPLET.md's source commit (FULL_SCRIPT_REV).
"""

from __future__ import annotations

import html
import json
import re
import subprocess
import sys
from pathlib import Path

import segno
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
FULL_SCRIPT_REV = "53c864c"  # last commit whose slide notes hold the full spoken text
QR_CODES = {
    "qr_deck": "https://deck-agile.vercel.app",
    "qr_hist": "https://github.com/everssteeve/et-maintenant-atn-2026/blob/main/HISTOIRE-AGILITE.md",
}


def gradient(out: Path, height: int, stops: list[tuple[float, float]]) -> None:
    """Navy vertical gradient; stops are (position from bottom 0..1, alpha 0..1)."""
    im = Image.new("RGBA", (1920, height))
    px = im.load()
    for y in range(height):
        t = 1 - y / (height - 1)
        alpha = 0.0
        for (p0, a0), (p1, a1) in zip(stops, stops[1:]):
            if p0 <= t <= p1:
                alpha = a0 + (a1 - a0) * (t - p0) / (p1 - p0)
                break
        for x in range(1920):
            px[x, y] = (14, 18, 51, int(alpha * 255))
    im.save(out)


def text(fragment: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def slide_spec(sid: str, section: str | None) -> dict:
    current = (ROOT / "deck" / "slides" / f"{sid}.html").read_text(encoding="utf-8")
    full = subprocess.run(
        ["git", "show", f"{FULL_SCRIPT_REV}:deck/slides/{sid}.html"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    notes = html.unescape(re.search(r"<aside>(.*?)</aside>", full, re.S).group(1).strip())
    body = re.sub(r"<aside>.*?</aside>", "", current, flags=re.S)
    img = re.search(r'src="/_blob/([0-9a-f]+)"', body)
    alt = re.search(r'alt="([^"]*)"', body)
    heading = re.search(r"<(h1|h2)[^>]*>(.*?)</\1>", body, re.S)
    spec: dict = {
        "id": sid,
        "section": section,
        "kicker": text(re.search(r"<p[^>]*uppercase[^>]*>(.*?)</p>", body, re.S).group(1)),
        "level": heading.group(1),
        "title": text(heading.group(2)),
        "notes": notes,
        "img": str(ROOT / "deck" / "images" / f"{img.group(1)}.jpg") if img else None,
        "alt": html.unescape(alt.group(1)) if alt else "",
    }
    after = body[heading.end():]
    sub = re.match(r'\s*<p style="font-size:32px;line-height:1.4;width:1500px;color:#E4E5F0[^>]*>(.*?)</p>', after, re.S)
    if sub:
        spec["subtitle"] = text(sub.group(1))
    if sid == "fin":
        spec["subtitle"] = text(re.findall(r"<p[^>]*>(.*?)</p>", after, re.S)[0])
    if sid == "lecons":
        rows = re.findall(r'<div style="display:flex;gap:24px;align-items:baseline">(.*?)</div>', body, re.S)
        spec["items"] = [text(re.findall(r"<p[^>]*>(.*?)</p>", row)[1]) for row in rows]
        spec["highlight"] = 2
    if sid == "questions":
        spec["items"] = [
            text(q) for q in re.findall(r'<p style="font-size:32px;line-height:1.4;color:#E4E5F0;border-left[^>]*>(.*?)</p>', body, re.S)
        ]
    return spec


def main() -> None:
    out = Path(sys.argv[1])
    out.mkdir(parents=True, exist_ok=True)
    gradient(out / "grad.png", 560, [(0, 0.96), (0.45, 0.82), (1, 0)])
    gradient(out / "grad_tall.png", 800, [(0, 0.97), (0.55, 0.90), (1, 0)])
    for name, url in QR_CODES.items():
        segno.make(url, error="m").save(out / f"{name}.png", scale=20, border=2, dark="#0e1233", light="#fdfbf3")
    deck = json.loads((ROOT / "deck" / "deck.json").read_text(encoding="utf-8"))
    starts = {s["start"]: s["description"].split(" :")[0] for s in deck["sections"].values()}
    specs, section = [], None
    for sid in deck["order"]:
        section = starts.get(sid, section)
        specs.append(slide_spec(sid, section))
    (out / "spec.json").write_text(json.dumps(specs, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(specs)} slides → {out}/spec.json")


if __name__ == "__main__":
    main()
