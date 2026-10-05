# Et maintenant ? — La traversée

Conférence de Steeve Evers pour l'**Agile Tour Nantes 2026**.

> Ce que l'histoire de l'agilité nous dit de son avenir.

L'agilité n'est pas née en 2001 : elle est née d'un changement dans la façon de parler à la machine, la programmation objet. Les agents IA ouvrent une seconde rupture du même ordre. Que garder à bord ?

## Plan

| # | Chapitre | Période | Idée |
|---|----------|---------|------|
| — | Ouverture | | L'agilité n'est pas née en 2001 |
| 1 | Les étoiles | 1924 — 1986 | Les idées agiles existaient bien avant le logiciel |
| 2 | Le nouveau navire | 1989 — 2001 | L'objet crée le besoin et l'opportunité de l'agilité |
| 3 | L'armada | 2001 — 2024 | L'agilité se diffuse et perd ses pratiques techniques |
| 4 | La machine | 2025 — | Les agents IA ouvrent une seconde rupture |
| 5 | Le large | 2026 → | Ce qui vacille, ce qui se transforme, ce qui tient |

33 slides · ~4 600 mots de notes · ~33 min de parole à 140 mots/min.

## Contenu du repo

```
deck/
  deck.json          index du deck (ordre, sections, polices)
  slides/<id>.html   une slide par fichier, notes d'orateur dans <aside>
  images/<id>.jpg    illustrations plein écran
scripts/build.py     génère presentation.html et SCRIPT.md
presentation.html    version autonome, jouable hors ligne
SCRIPT.md            texte intégral des notes, slide par slide
```

`deck/` est la source : c'est le format du deck Claude Slides, conservé tel quel pour pouvoir le resynchroniser. `presentation.html` et `SCRIPT.md` sont générés.

## Utilisation

```sh
python3 scripts/build.py      # régénère presentation.html et SCRIPT.md
python3 -m http.server 8000   # puis ouvrir http://localhost:8000/presentation.html
```

Raccourcis dans la présentation : `→` / `←` ou clic pour naviguer, `n` pour afficher les notes, `f` pour le plein écran, `#12` dans l'URL pour aller à la slide 12.
