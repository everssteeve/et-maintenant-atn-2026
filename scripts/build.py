"""Build a standalone HTML presentation and a speaker script from the deck sources.

Usage: python3 scripts/build.py
Outputs: presentation.html and SCRIPT.md (speaker reminder notes) at the repo root.
"""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DECK = ROOT / "deck"

ASIDE_RE = re.compile(r"<aside>(.*?)</aside>", re.S)
TEXT_RE = re.compile(r"<(p|h1|h2|h3)[^>]*>(.*?)</\1>", re.S)
TAG_RE = re.compile(r"<[^>]+>")


def load_deck() -> tuple[dict, list[tuple[str, str]]]:
    deck = json.loads((DECK / "deck.json").read_text(encoding="utf-8"))
    slides = [
        (sid, (DECK / "slides" / f"{sid}.html").read_text(encoding="utf-8"))
        for sid in deck["order"]
    ]
    return deck, slides


def notes_of(slide: str) -> str:
    match = ASIDE_RE.search(slide)
    return html.unescape(match.group(1).strip()) if match else ""


def screen_text(slide: str) -> list[str]:
    without_notes = ASIDE_RE.sub("", slide)
    return [
        html.unescape(TAG_RE.sub("", body)).strip()
        for _, body in TEXT_RE.findall(without_notes)
    ]


def build_script(deck: dict, slides: list[tuple[str, str]]) -> str:
    starts = {s["start"]: s["description"] for s in deck["sections"].values()}
    lines = [f"# {deck['title']} — notes de rappel", ""]
    total = 0
    for index, (sid, slide) in enumerate(slides, start=1):
        if sid in starts:
            lines += [f"## {starts[sid]}", ""]
        notes = notes_of(slide)
        words = len(notes.split())
        total += words
        title = " · ".join(screen_text(slide))
        lines += [f"### {index}. {title}", "", f"*`{sid}` · {words} mots*", "", notes, ""]
    lines.insert(2, "> Aide-mémoire par slide. Le texte intégral est dans SCRIPT-COMPLET.md.\n")
    return "\n".join(lines)


def build_presentation(deck: dict, slides: list[tuple[str, str]]) -> str:
    fonts = "\n".join(
        f'<link rel="stylesheet" href="{face["href"]}">'
        for face in deck["faces"].values()
        if "href" in face
    )
    body = "\n".join(
        re.sub(r'src="/_blob/([0-9a-f]+)"', r'src="deck/images/\1.jpg"', slide)
        for _, slide in slides
    )
    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(deck["title"])}</title>
{fonts}
<style>
  * {{ box-sizing: border-box; margin: 0; }}
  html, body {{ height: 100%; background: #000; overflow: hidden; }}
  #stage {{ position: absolute; width: 1920px; height: 1080px; left: 50%; top: 50%; transform-origin: center; }}
  section {{ position: absolute; inset: 0; width: 1920px; height: 1080px; overflow: hidden; opacity: 0; pointer-events: none; transition: opacity .5s; }}
  section.active {{ opacity: 1; pointer-events: auto; }}
  section > :not(aside) {{ position: relative; }}
  section > [style*="position:absolute"] {{ position: absolute; }}
  aside {{ display: none; }}
  #notes {{ position: fixed; left: 0; right: 0; bottom: 0; max-height: 40vh; overflow: auto; padding: 16px 24px; background: rgba(14,18,51,.95); color: #FDFBF3; font: 16px/1.5 'Public Sans', sans-serif; white-space: pre-wrap; display: none; }}
  #notes.open {{ display: block; }}
  #counter {{ position: fixed; right: 12px; bottom: 8px; color: #888; font: 12px sans-serif; }}
</style>
</head>
<body>
<div id="stage">
{body}
</div>
<div id="notes"></div>
<div id="counter"></div>
<script>
  const slides = [...document.querySelectorAll('#stage > section')];
  const stage = document.getElementById('stage');
  const notes = document.getElementById('notes');
  const counter = document.getElementById('counter');
  let current = Math.max(0, Math.min(slides.length - 1, (parseInt(location.hash.slice(1)) || 1) - 1));
  function fit() {{
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = `translate(-50%, -50%) scale(${{s}})`;
  }}
  function show(i) {{
    current = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((el, k) => el.classList.toggle('active', k === current));
    const aside = slides[current].querySelector('aside');
    notes.textContent = aside ? aside.textContent : '';
    counter.textContent = `${{current + 1}} / ${{slides.length}}`;
    history.replaceState(null, '', '#' + (current + 1));
  }}
  addEventListener('keydown', (e) => {{
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) show(current + 1);
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) show(current - 1);
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(slides.length - 1);
    else if (e.key === 'n') notes.classList.toggle('open');
    else if (e.key === 'f') document.documentElement.requestFullscreen?.();
  }});
  addEventListener('click', (e) => {{ if (!notes.contains(e.target)) show(current + 1); }});
  addEventListener('resize', fit);
  fit();
  show(current);
</script>
</body>
</html>
"""


def main() -> None:
    deck, slides = load_deck()
    (ROOT / "SCRIPT.md").write_text(build_script(deck, slides), encoding="utf-8")
    (ROOT / "presentation.html").write_text(build_presentation(deck, slides), encoding="utf-8")
    print(f"{len(slides)} slides → presentation.html, SCRIPT.md")


if __name__ == "__main__":
    main()
