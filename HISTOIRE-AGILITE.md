# Une histoire de l'agilité

*Des précurseurs aux agents de codage, 1924-2026. Un récit sourcé.*

Document offert au public de la conférence « Et maintenant ? — La traversée », Agile Tour Nantes 2026, Steeve Evers.

---

## Sommaire

1. [À quoi sert ce document](#1-à-quoi-sert-ce-document)
2. [Le récit](#2-le-récit)
   - [Époque I — Les idées avant le logiciel agile (1924-1985)](#époque-i--les-idées-avant-le-logiciel-agile-1924-1985)
   - [Époque II — La mêlée, la spirale et l'objet (1986-1992)](#époque-ii--la-mêlée-la-spirale-et-lobjet-1986-1992)
   - [Époque III — La décennie des méthodes légères (1993-2000)](#époque-iii--la-décennie-des-méthodes-légères-1993-2000)
   - [Époque IV — Snowbird (février 2001)](#époque-iv--snowbird-février-2001)
   - [Époque V — La diffusion (2001-2010)](#époque-v--la-diffusion-2001-2010)
   - [Époque VI — L'échelle, l'industrie et la critique (2011-2019)](#époque-vi--léchelle-lindustrie-et-la-critique-2011-2019)
   - [Époque VII — Ce qui reste (2020-2024)](#époque-vii--ce-qui-reste-2020-2024)
   - [Époque VIII — La machine (2025-2026)](#époque-viii--la-machine-2025-2026)
3. [Chronologie synthétique](#3-chronologie-synthétique)
4. [Les personnes clés](#4-les-personnes-clés)
5. [Le Manifeste : valeurs et principes](#5-le-manifeste--valeurs-et-principes)
6. [Mythes et idées reçues corrigés](#6-mythes-et-idées-reçues-corrigés)
7. [Controverses et débats](#7-controverses-et-débats)
8. [Pour aller plus loin](#8-pour-aller-plus-loin)
9. [Bibliographie](#9-bibliographie)

---

## 1. À quoi sert ce document

On raconte souvent que l'agilité est née en février 2001, dans une station de ski de l'Utah. C'est vrai, et c'est trompeur. Ce document reprend l'histoire depuis le début, des idées des années 1920 jusqu'aux agents de codage de 2025-2026. Il s'adresse aux praticiens : coachs, Scrum Masters, développeuses et développeurs, managers. Il ne suppose aucune formation d'historien.

**Comment il est sourcé.** Chaque fait daté ou chiffré renvoie à une note entre crochets, par exemple [1]. Les notes renvoient à la bibliographie numérotée de la fin, avec auteur, titre, année et lien quand il existe. Les sources ont été croisées : un site documentaire sur l'histoire de l'agilité, le travail de vérification mené pour la conférence, et un corpus de fiches dont seules les fiches marquées comme vérifiées ont été retenues. Quand deux sources se contredisent, le texte le dit. Quand un fait n'a pas pu être confirmé, il est omis.

**Faits et lectures.** Le récit distingue deux registres. Les faits sont sourcés. Les interprétations sont annoncées comme telles, sous la mention « Lecture » ou « Interprétation de l'auteur ». La principale est la thèse de la conférence : l'agilité est née d'un changement dans la façon de programmer, la programmation orientée objet, et l'intelligence artificielle ouvre aujourd'hui une seconde rupture du même ordre. C'est une conviction. Elle s'appuie sur des faits, mais elle reste discutable, et le texte présente aussi les arguments contraires.

**Ce que ce document n'est pas.** Ce n'est ni un manuel de méthode ni un plaidoyer pour un cadre. Les citations sont traduites par nos soins, sauf le texte du Manifeste et de ses principes, qui suit la traduction française officielle.

---

## 2. Le récit

### Époque I — Les idées avant le logiciel agile (1924-1985)

#### Des idées de management qui précèdent le logiciel

L'histoire commence loin des ordinateurs. En 1924, Mary Parker Follett publie *Creative Experience* [2]. Elle y oppose le pouvoir exercé « sur » les autres au pouvoir partagé « avec » eux. Son vocabulaire parle de « power-with » et d'« integration » [2]. On lit souvent qu'elle aurait théorisé l'« intelligence collective » : l'expression est une glose moderne, pas la sienne.

La même année, chez Bell Labs, le statisticien Walter Shewhart invente la carte de contrôle [3]. En 1939, W. Edwards Deming édite et fait publier ses conférences sous le titre *Statistical Method from the Viewpoint of Quality Control* [3]. On y trouve une boucle : spécifier, produire, inspecter. Elle est l'ancêtre de ce qu'on appellera plus tard la roue de l'amélioration continue.

Deming part ensuite au Japon. De juin à août 1950, invité par l'union japonaise des scientifiques et ingénieurs (JUSE), il forme des centaines d'ingénieurs et de dirigeants à la maîtrise statistique des procédés [3]. Le prix Deming est créé dans la foulée pour le remercier [3]. Un point mérite d'être corrigé tout de suite : Deming parlait du « cycle de Shewhart », puis de PDSA (*Plan-Do-Study-Act*). Il a explicitement rejeté le sigle PDCA, qu'il qualifiait de « corruption » dans une lettre de 1990 [4]. Le PDCA vient du Japon, pas de lui.

Chez Toyota, entre 1948 et 1975, Taiichi Ohno et Eiji Toyoda construisent un système de production fondé sur le juste-à-temps, l'autonomation (*jidoka*) et les cartes *kanban* [5]. Ohno en publie la description en japonais en 1978 ; la traduction anglaise paraît en 1988 [5]. Le Lean et le Kanban viennent de là.

#### Le logiciel itératif existe dès les années 1950

Il faut maintenant démolir un récit commode : celui d'une industrie qui aurait toujours travaillé en cascade jusqu'à ce que dix-sept visionnaires la libèrent. Craig Larman et Victor Basili l'ont démonté dans un article de 2003, devenu la référence sur la question [1].

Dès 1957, à l'IBM Service Bureau Corporation de Los Angeles, une équipe dirigée par Bernie Dimsdale, où travaille Gerald Weinberg, développe déjà par incréments [1]. Au début des années 1960, l'équipe logicielle du projet Mercury, premier programme spatial habité américain, travaille en itérations d'une demi-journée, écrit les tests avant le code et revoit techniquement chaque changement [1]. Autrement dit, du développement piloté par les tests en cycles très courts, quarante ans avant que le mot n'existe.

Le séquentiel a pourtant ses propres racines. Le 29 juin 1956, Herbert Benington présente la première description connue d'un développement logiciel par phases, à partir du projet de défense aérienne SAGE [6]. Ironie de l'histoire : en republiant son texte en 1983, il précise que SAGE reposait en réalité sur du prototypage [6].

#### 1968 : la « crise du logiciel »

En octobre 1968, à Garmisch-Partenkirchen, une conférence financée par l'OTAN réunit une cinquantaine d'informaticiens [7]. Elle popularise deux expressions : « génie logiciel » et « crise du logiciel » [8][7]. Le constat est simple : les grands projets dépassent leurs budgets et leurs délais. La réponse dominante sera celle de l'ingénierie industrielle : plus de plan, plus de phases, plus de documents en amont [8].

La même année, Melvin Conway publie dans *Datamation* l'idée qu'une organisation produit des systèmes qui copient sa structure de communication [9]. La « loi de Conway » reviendra cinquante ans plus tard au centre du débat.

#### 1970 : le malentendu Royce

En août 1970, Winston Royce publie *Managing the Development of Large Software Systems* [10]. Sa figure 2 dessine l'enchaînement linéaire que tout le monde connaît : exigences, conception, codage, tests, exploitation. Puis il écrit que cette mise en œuvre est « risquée et invite à l'échec » [10].

Il faut être précis sur la suite. Royce ne propose pas de l'itératif au sens moderne. Il recommande des retours entre phases voisines et de « faire le travail deux fois » (*do it twice*) [10]. Larman et Basili jugent que ce n'est « clairement pas » du développement itératif et incrémental classique [1]. Retenez deux choses. Royce ne recommandait pas le modèle séquentiel pur. Et le mot « waterfall » n'apparaît pas dans son article : sa première trace connue date de 1976, chez Bell et Thayer [6].

#### Les années 1970 : des précurseurs isolés

En 1971, Gerald Weinberg publie *The Psychology of Computer Programming* [11]. Il y défend la programmation « sans ego » et traite le logiciel comme une activité humaine et sociale [11].

En 1976, Tom Gilb publie *Software Metrics*. Pour Larman et Basili, c'est le plus ancien livre qu'ils aient trouvé à défendre clairement le développement itératif et incrémental [1]. Gilb y prône la livraison de petits incréments mesurables au client, pilotée par des objectifs chiffrés [12]. Le nom « Evo » qu'on associe à sa méthode est postérieur [1], et son article de 1985 oppose explicitement l'« evolutionary delivery » au « waterfall model » [13].

De 1977 à 1980, l'IBM Federal Systems Division construit le logiciel de vol principal de la navette spatiale en dix-sept itérations sur trente et un mois [1][14]. L'équipe compte d'anciens ingénieurs du programme Mercury [15]. La rigueur n'exigeait donc pas le cycle en cascade.

#### 1985 : la cascade devient une norme

En 1985, le standard militaire américain DoD-STD-2167 impose aux fournisseurs de la Défense un cycle en phases documentées et validées [1]. Larman et Basili montrent que le modèle en cascade s'est diffusé d'abord par ces normes d'achat public [1]. C'est le paradoxe de l'époque : la norme fige le séquentiel au moment même où les chercheurs le critiquent.

> **Lecture.** En 1985, presque toutes les idées que nous appelons aujourd'hui « agiles » sont formulées : le pouvoir partagé, l'amélioration continue, la livraison par petits pas, l'attention aux personnes, la critique du séquentiel. Pourtant, dans l'industrie, rien ne prend. L'obstacle n'est pas seulement technique : il est contractuel et culturel. La conférence pose la question ainsi : qu'est-ce qui manquait ?

---

### Époque II — La mêlée, la spirale et l'objet (1986-1992)

#### 1986 : la mêlée de rugby

En janvier 1986, deux chercheurs japonais, Hirotaka Takeuchi et Ikujiro Nonaka, publient dans la *Harvard Business Review* « The New New Product Development Game » [16]. Ils étudient le développement de produits chez Fuji-Xerox, Canon, Honda, NEC et d'autres [16]. Des photocopieurs, des appareils photo, une voiture. Pas une ligne de logiciel.

Ils opposent deux façons de travailler. La course de relais, où chaque spécialiste passe le témoin au suivant. Et le rugby, où une équipe pluridisciplinaire avance ensemble, avec des phases qui se chevauchent [16]. Le mot « scrum » n'apparaît que dans un intertitre, « Moving the Scrum Downfield » [16]. Neuf ans plus tard, Ken Schwaber citera cet article pour justifier le nom de sa méthode [17].

La même année, Barry Boehm propose le modèle en spirale, publié dans sa version étendue en 1988 [18]. Chaque tour de spirale identifie les risques majeurs, prototype, évalue, puis décide de continuer [18]. C'est le premier modèle itératif à obtenir une pleine légitimité dans l'ingénierie académique.

#### 1989 : des cartes sur une table

En octobre 1989, à La Nouvelle-Orléans, se tient la conférence OOPSLA, consacrée à la programmation orientée objet. Kent Beck et Ward Cunningham, qui se sont connus chez Tektronix où ils écrivaient du Smalltalk, y présentent un article au titre modeste : « A Laboratory for Teaching Object-Oriented Thinking » [19]. Leur outil : des fiches bristol. Sur chacune, le nom d'une classe, ses responsabilités, ses collaborations. Ce sont les cartes CRC [19].

> **Lecture de l'auteur.** Ce qui compte n'est pas la fiche, c'est la scène. Des gens autour d'une table, qui déplacent des cartes, jouent le rôle des objets, et conçoivent un logiciel en se parlant avec les mots du métier. Ce n'est pas encore une méthode. C'est une nouvelle façon de converser. Et elle naît d'un besoin technique : apprendre à penser en objets.

#### Ce que l'objet change : un besoin et une opportunité

Voici le cœur de la thèse de la conférence. C'est une interprétation, mais elle s'appuie sur ce que les acteurs ont écrit eux-mêmes.

En 1992, à OOPSLA, Ward Cunningham publie un rapport d'expérience sur WyCash, un logiciel financier écrit en Smalltalk [20]. Il y invente la métaphore de la dette : livrer du code imparfait, c'est s'endetter, et l'on paie ensuite des intérêts [20]. Presque personne ne cite la phrase suivante : « Objects make the cost of this transaction tolerable », les objets rendent le coût de cette transaction supportable [20].

Kent Beck dira la même chose en 1999 : pour lui, les objets sont une technologie clé pour aplatir la courbe du coût du changement [21]. Il ajoute aussitôt qu'ils ne sont ni indispensables ni suffisants [21].

> **Interprétation de l'auteur.** Avant l'objet, l'humain parle la langue de la machine. L'intention se perd dans la traduction, et changer coûte cher. On spécifie donc tout, à l'avance, par écrit. Avec l'objet, deux choses changent. Le code peut porter les mots du métier. Et il devient plus facile à modifier. Si changer coûte moins cher, on peut ajuster en chemin. Mais ajuster suppose de se parler, souvent, entre ceux qui connaissent le métier et ceux qui écrivent le code. L'objet crée à la fois l'opportunité et le besoin de l'agilité.

Cette thèse a des arguments solides, et des limites. Elles sont détaillées plus loin, dans la section « Controverses ». Disons d'emblée que l'itératif précède l'objet de trente ans [1], et que DSDM, l'une des méthodes fondatrices, vient du développement rapide d'applications et non de l'objet [22].

#### Le reste du paysage

Au même moment, d'autres courants préparent le terrain. En 1990, *The Machine That Changed the World*, issu d'une étude du MIT sur l'industrie automobile, fait connaître la « production lean » [23]. En 1991, James Martin publie *Rapid Application Development* : prototypage, petites équipes, forte implication des utilisateurs [1]. En 1992, à l'université de l'Illinois, William Opdyke soutient une thèse sur le remaniement des frameworks orientés objet : le *refactoring* reçoit son premier traitement académique [24].

---

### Époque III — La décennie des méthodes légères (1993-2000)

#### 1993 : la première équipe Scrum

En 1993, chez Easel Corporation, Jeff Sutherland monte la première équipe Scrum [25]. Elle construit un outil de conception orientée objet, en Smalltalk [25]. Sutherland raconte qu'elle pratiquait déjà les tests, le refactoring et des builds multiples [25]. Les sources encyclopédiques nomment deux coéquipiers, John Scumniotales et Jeff McKenna [26] ; la vérification menée pour la conférence n'a pas pu confirmer ces noms à partir d'une source primaire.

#### 1994 : patterns, tests et consortium

En 1994, le livre *Design Patterns*, d'Erich Gamma, Richard Helm, Ralph Johnson et John Vlissides, est mis en vente à OOPSLA [27]. Il catalogue vingt-trois motifs de conception orientée objet [27]. La même année, Kent Beck publie dans *The Smalltalk Report* un article sur les tests unitaires en Smalltalk, qui donnera SUnit puis JUnit [28].

Toujours en 1994, en Grande-Bretagne, une association de fournisseurs et d'experts fonde le DSDM Consortium [22]. La *Dynamic Systems Development Method* donne un cadre commun aux pratiques de développement rapide : délais fixés (*time-boxing*), priorisation MoSCoW, implication continue des utilisateurs [22]. C'est la seule des méthodes fondatrices née d'un collectif d'entreprises plutôt que d'un auteur.

#### 1995 : le wiki et Scrum

Le 25 mars 1995, Ward Cunningham met en ligne le WikiWikiWeb, le premier wiki [29]. Il le crée pour que la communauté des patterns puisse écrire ensemble [29]. C'est là que les idées de XP vont se discuter, à ciel ouvert.

Le 16 octobre 1995, à Austin, au Texas, Ken Schwaber présente « SCRUM Development Process » dans un atelier d'OOPSLA consacré aux objets métier [17]. Précision importante : Schwaber est le seul auteur de l'article ; Jeff Sutherland co-organise l'atelier [17]. L'article décrit Scrum comme « une amélioration du cycle de développement orienté objet, itératif et incrémental, couramment utilisé » [17]. Les deux hommes fusionnent ensuite leurs approches.

#### 1996-1997 : Chrysler et l'Extreme Programming

En 1996, Kent Beck est appelé sur un projet de paie de Chrysler, le *Chrysler Comprehensive Compensation*, ou C3, écrit en Smalltalk [30][31]. Il fait venir Ron Jeffries comme coach [30]. L'équipe pousse à l'extrême des pratiques connues : tests écrits d'abord, programmation en binôme, intégration continue, remaniement permanent, client sur site [31]. Beck racontera que XP est né d'une idée simple : prendre ce qui semblait raisonnable, comme les tests et les revues, et pousser le curseur au maximum [31]. Le système part en production en 1997 [31].

En 1997, dans un avion entre Zurich et Atlanta, en route pour OOPSLA, Kent Beck et Erich Gamma écrivent JUnit [28]. Les tests automatisés deviennent un outil de tous les jours.

La même année, à Singapour, Jeff De Luca conçoit le *Feature-Driven Development* pour un projet bancaire de quinze mois et cinquante personnes, avec l'apport de la modélisation objet de Peter Coad [32]. Au même moment, Alistair Cockburn construit Crystal, une famille de méthodes calibrées selon la taille de l'équipe et la criticité du système, à partir d'entretiens avec des équipes réelles [33]. Jim Highsmith, de son côté, élabore l'*Adaptive Software Development*, qui remplace « planifier, construire, livrer » par « spéculer, collaborer, apprendre » [34].

#### 1999 : deux livres qui changent la pratique

En 1999 paraissent *Extreme Programming Explained* de Kent Beck [21] et *Refactoring* de Martin Fowler [35]. XP y apparaît comme un ensemble de douze pratiques : le jeu de la planification, les petites livraisons, la métaphore, la conception simple, les tests, le remaniement, la programmation en binôme, la propriété collective du code, l'intégration continue, la semaine de quarante heures, le client sur site, les standards de codage [21].

Parmi les méthodes qui se retrouveront autour du Manifeste, XP est celle qui prescrit le plus explicitement un ensemble complet de pratiques d'ingénierie. Scrum, lui, les laisse volontairement hors de son périmètre [36]. XP définit aussi un rôle : le coach. Dans le livre de 1999, c'est un membre de l'équipe, responsable du processus dans son ensemble, qui remarque quand l'équipe s'en écarte [21]. Beck précise qu'on mesure un bon coach au faible nombre de décisions techniques qu'il prend lui-même [21].

> **Lecture.** Le pari commun de Beck et Fowler est économique. Si le coût du changement peut être aplati par les tests automatisés et le remaniement outillé, alors décider tard devient rationnel. L'agilité n'est pas d'abord une préférence pour la souplesse. Elle est la conséquence d'une transformation de l'économie du logiciel.

Martin Fowler l'écrit dans *The New Methodology*, dont la première version paraît en juillet 2000 : les racines de XP sont dans la communauté Smalltalk, et l'essentiel de ces travaux vient de la communauté objet [37].

#### 2000 : des méthodes sans nom

À la fin de la décennie, ces gens se lisent mais ne se réunissent pas. Leur famille de méthodes n'a pas de nom. On parle de *lightweight methods*, « méthodes légères », un terme que personne n'aime [38].

Au printemps 2000, Kent Beck réunit au Rogue River Lodge, dans l'Oregon, des partisans d'XP et quelques invités d'autres horizons [38]. La rencontre ne produit aucun texte. Elle met les gens dans la même pièce. En juin, la première conférence internationale XP se tient à Cagliari, en Sardaigne [39]. En février de la même année, le projet C3 est arrêté après la fusion Daimler-Chrysler [31]. Le berceau de XP disparaît juste avant que la méthode ne devienne célèbre.

---

### Époque IV — Snowbird (février 2001)

#### Une réunion improbable

En septembre 2000, Robert C. Martin, d'Object Mentor à Chicago, envoie un courriel proposant une réunion des promoteurs des méthodes légères [38]. Du 11 au 13 février 2001, dix-sept personnes se retrouvent au Lodge de la station de Snowbird, dans les monts Wasatch, dans l'Utah [38]. Elles viennent d'XP, de Scrum, de DSDM, de l'*Adaptive Software Development*, de Crystal, du *Feature-Driven Development* et de la *Pragmatic Programming* [38].

Les dix-sept signataires sont Kent Beck, Mike Beedle, Arie van Bennekum, Alistair Cockburn, Ward Cunningham, Martin Fowler, James Grenning, Jim Highsmith, Andrew Hunt, Ron Jeffries, Jon Kern, Brian Marick, Robert C. Martin, Steve Mellor, Ken Schwaber, Jeff Sutherland et Dave Thomas [40].

La scène tient du paradoxe. Steve Mellor défend la modélisation exécutable, à peu près l'inverse de ce que prône Kent Beck [38]. Personne n'attend d'accord méthodologique, et il n'y en aura aucun. Highsmith écrira que la vraie surprise fut que ce groupe parvienne à s'entendre sur quoi que ce soit [38].

#### Un mot et quatre valeurs

Le groupe s'entend sur deux choses. Un mot d'abord : « agile », choisi pour remplacer « léger ». Mike Beedle revendique de l'avoir proposé, en s'inspirant du livre *Agile Competitors and Virtual Organizations* [41]. Selon le récit de Fowler et Highsmith, la seule réserve vint de Martin Fowler, qui craignait que les Américains ne sachent pas prononcer le mot [42].

Ensuite, quatre couples de valeurs, construits sur la formule « plus que » (« over » en anglais) [40]. Aucun texte n'était préparé : le Manifeste a été écrit sur place [43]. Les douze principes ont été rédigés dans les semaines suivantes, à distance [38]. Dans les mois qui suivent, les auteurs fondent l'Agile Alliance, une association à but non lucratif chargée de porter le mouvement [38][43]. Le texte, qui tient en soixante-huit mots en anglais, sera traduit dans plus de soixante langues [43].

> **Lecture.** Le groupe ne décide pas de créer un mouvement. Il constate qu'un mouvement existe, et il lui donne un nom et quatre valeurs. Le Manifeste ne crée rien : il cristallise. La formule « plus que » est son invention politique. Elle n'interdit ni les processus, ni la documentation, ni les contrats, ni les plans. Elle établit un ordre de préséance en cas de conflit. C'est ce qui a permis à dix-sept personnes en désaccord de signer. C'est aussi ce qui a rendu le texte facile à invoquer tout en faisant l'inverse.

Un mot sur les signataires, parce qu'il touche à la thèse de la conférence. Selon le décompte de l'auteur, établi à partir des biographies publiées sur le site du Manifeste et non publié ailleurs, au moins neuf des dix-sept viennent du monde de l'objet. Mais pas tous : DSDM vient du développement rapide d'applications [22]. Il serait malhonnête de prétendre que l'agilité a une seule origine.

> **Lecture de l'auteur.** Les idées existaient depuis longtemps. Le développement par incréments aussi. Ce que l'objet a apporté, ce sont des conditions : un code qui porte le sens, un changement moins coûteux, et donc à la fois le besoin et la possibilité de se parler en continu. L'agilité est l'art de l'équipage, et cet art est né avec ce navire. Quand une technologie change ce qu'on peut exprimer à la machine, elle change la façon dont les humains travaillent ensemble.

---

### Époque V — La diffusion (2001-2010)

#### L'invention continue

Après le Manifeste, l'invention ne s'arrête pas. On cartographie encore. Et presque tout ce qui paraît est technique.

En 2001, Ken Schwaber et Mike Beedle publient *Agile Software Development with Scrum*, le premier livre consacré à Scrum [44]. En 2002, James Grenning décrit le Planning Poker, pour sortir des estimations interminables [45]. En novembre 2002, Kent Beck publie *Test-Driven Development: By Example* [46]. En 2003, Mary et Tom Poppendieck publient *Lean Software Development: An Agile Toolkit*, qui transpose au logiciel les principes de Toyota [47], et Eric Evans publie *Domain-Driven Design* [48]. En 2004, Michael Feathers publie *Working Effectively with Legacy Code*, qui définit le code hérité comme du code sans tests [49]. En 2005, Alistair Cockburn publie l'architecture hexagonale, une idée qu'il dessinait déjà en 1994 dans un cours de programmation objet [50]. En mars 2006, Dan North présente le *Behaviour-Driven Development* [51].

La même année 2003, Craig Larman et Victor Basili publient leur histoire du développement itératif [1]. Elle prive le débat de son récit de rupture absolue : l'itératif est pratiqué depuis les années 1950.

> **Lecture.** Regardez la nature de ces travaux. Ce sont presque tous des travaux techniques : comment écrire, tester, structurer, reprendre du code. La communauté d'origine continue de creuser le même sillon.

#### La certification et la Scrum Alliance

Au début des années 2000, Ken Schwaber fonde, avec d'autres dont Mike Cohn, la Scrum Alliance, qui lance le *Certified ScrumMaster* [26][52]. L'année de fondation varie selon les sources : 2002 dans la plupart, mais 2001 ou 2004 dans d'autres. Les premières formations *Certified ScrumMaster* sont datées de 2002 ou de 2003 selon les sources ; le livre de Schwaber et Beedle leur aurait servi de support [44].

> **Lecture.** La décision est rationnelle. Pour diffuser une pratique dans des milliers d'entreprises, il faut un canal, et la formation certifiante en est un. Elle est aussi lourde de conséquences. Elle crée un marché dont l'intérêt est de vendre du dispositif, alors que le Manifeste valorise les individus plutôt que les processus.

#### Le Lean et le flux : Kanban

Le Lean entre explicitement dans l'agilité avec le livre des Poppendieck en 2003 [47]. Puis David J. Anderson expérimente. En 2004, au sein du service informatique de Microsoft, il conduit un projet fondé sur la théorie des contraintes de Goldratt [53]. Il ne change ni les rôles ni l'organisation : il agit sur le flux et limite le travail en cours [53]. En 2006-2007, chez Corbis, il identifie la méthode kanban comme applicable au logiciel [53][54]. Son livre de 2010, *Kanban: Successful Evolutionary Change for Your Technology Business*, consolide l'approche [53].

> **Lecture.** La proposition d'Anderson est subversive : ne changez pas d'organisation, commencez là où vous êtes, visualisez le travail, limitez le travail en cours, et laissez le système évoluer. C'est l'antithèse du « big bang » agile.

#### La complexité : Cynefin

En novembre 2007, Dave Snowden et Mary Boone publient dans la *Harvard Business Review* le cadre Cynefin [55]. Il distingue les domaines simple, compliqué, complexe et chaotique [55]. Dans le complexe, on ne peut pas analyser d'abord et agir ensuite : il faut sonder, observer, réagir [55]. L'agilité y trouve un argument théorique. Corollaire rarement cité : dans le domaine simple, elle est une lourdeur inutile.

#### Les premiers avertissements

En octobre 2006, Martin Fowler publie un court billet intitulé *AgileImposition* : imposer un processus à une équipe est, écrit-il, totalement contraire aux principes de l'agilité, et l'a toujours été [56].

En 2006 démarre aussi l'enquête annuelle *State of Agile*, publiée par l'éditeur d'outils VersionOne [57]. Précaution essentielle : ses répondants sont volontaires et recrutés par un éditeur d'outils. Le rapport précise lui-même qu'il ne mesure pas l'adoption globale [57]. C'est pourtant la série la plus longue dont on dispose. Dès la première édition, en 2006, 40 % des répondants disent suivre Scrum, contre 23 % pour XP [57]. En 2010, Scrum est à 58 %, XP à 4 % [57]. Scrum n'a donc pas « dépassé » XP vers 2007-2010 : il était déjà devant.

#### La mise à l'échelle et l'artisanat

En décembre 2008, Craig Larman et Bas Vodde publient *Scaling Lean & Agile Development*, premier livre de ce qui deviendra LeSS, issu d'un travail commencé en 2005 dans les télécoms, notamment chez Nokia Networks [58][59]. LeSS conserve un seul Product Owner et un seul backlog pour plusieurs équipes, et soutient que passer à l'échelle consiste à retirer de l'organisation plutôt qu'à en ajouter [59].

En août 2008, à la conférence Agile, Robert C. Martin propose « craftsmanship over crap » comme cinquième valeur du Manifeste [60]. En décembre 2008, un groupe se réunit à Libertyville, dans l'Illinois ; trois mois de discussion plus tard, le *Manifesto for Software Craftsmanship* est publié en 2009 [60]. Il réaffirme l'exigence technique, sous la forme « non seulement… mais aussi » [60].

En France, l'Agile Tour naît en 2008 : la première édition, en octobre, réunit sept villes en France et en Suisse [61]. Chaque édition est autonome et bénévole [61]. C'est le cadre de la présente conférence.

#### 2009 : DevOps, Scrum.org et « Flaccid Scrum »

Le 29 janvier 2009, Martin Fowler décrit le « Flaccid Scrum » [36]. Une équipe adopte Scrum, avance vite pendant quelques itérations, puis ralentit parce que sa base de code se dégrade [36]. Il note que Scrum omet délibérément les pratiques techniques, à la différence d'XP, et précise que les promoteurs de Scrum ont toujours dit qu'elles étaient nécessaires [36].

En 2009, à la conférence Velocity, John Allspaw et Paul Hammond présentent « 10+ Deploys per Day » chez Flickr [62]. Patrick Debois, qui suit la présentation à distance depuis la Belgique, organise en octobre à Gand le premier DevOpsDays [62][63]. Le nom, raccourci en mot-dièse, donne son nom au mouvement [63]. L'agilité, qui livrait tous les quinze jours à une équipe de recette, va apprendre à livrer aux utilisateurs.

Fin 2009, Ken Schwaber quitte la Scrum Alliance après un désaccord avec son conseil sur les évaluations, la certification et un programme destiné aux développeurs [52]. Il fonde Scrum.org et la filière *Professional Scrum* [52].

#### Le coach change de nature

En août 2009, Rachel Davies et Liz Sedley publient *Agile Coaching* [64]. En mai 2010, Lyssa Adkins publie *Coaching Agile Teams*, et cofonde la même année l'Agile Coaching Institute avec Michael Spayd [65]. En 2011, leur référentiel de compétences place au centre quatre postures : enseigner, mentorer, faciliter et coacher au sens professionnel. La maîtrise technique y devient un domaine d'expertise parmi trois, à côté du métier et de la transformation [65].

> **Interprétation de l'auteur.** Aucun historien ne la formule ainsi, mais il semble que le coach passe du geste à la posture. En 1999, le coach d'XP est dans l'équipe, souvent un développeur expérimenté, même si Beck note que la compétence technique n'est pas une exigence absolue [21]. Dix ans plus tard, il accompagne surtout un cadre et des relations. Ce n'est pas une critique du coaching. C'est le même mouvement que celui de la diffusion, vu depuis un métier.

#### 2010 : le Scrum Guide et la livraison continue

En 2010, Schwaber et Sutherland publient le premier *Scrum Guide*, court et gratuit, pour fixer une définition face à la prolifération des interprétations [66]. Il connaîtra des révisions en 2011, 2013, 2016, 2017 et novembre 2020 [66].

La même année, Jez Humble et David Farley publient *Continuous Delivery* [67]. L'idée de pipeline de déploiement, présentée dès 2006 à la conférence Agile, devient le cœur technique de la livraison fréquente [67].

---

### Époque VI — L'échelle, l'industrie et la critique (2011-2019)

#### SAFe et le Lean Startup

En 2011, Dean Leffingwell publie la première version du *Scaled Agile Framework*, décrit dès 2007 dans *Scaling Software Agility* [68][69]. Les premières certifications suivent en 2012 [68]. SAFe offre aux grandes organisations un modèle complet pour coordonner des dizaines d'équipes [70]. Il deviendra le cadre de mise à l'échelle le plus répandu, et le plus contesté [69]. Sa version 6.0 paraît en mars 2023 [69].

La même année, Eric Ries publie *The Lean Startup* : construire, mesurer, apprendre ; produit minimum viable ; pivot [71]. L'agilité déborde de l'ingénierie vers la question de savoir quoi construire.

Toujours en 2011, l'analyste Dave West, chez Forrester, nomme « Water-Scrum-Fall » la réalité dominante des entreprises : une planification en cascade en amont, des sprints au milieu, une mise en production séquentielle en aval [72].

#### Le « modèle Spotify »

Le 14 novembre 2012, Henrik Kniberg et Anders Ivarsson publient *Scaling Agile @ Spotify* [73]. Ils y décrivent squads, tribus, chapitres et guildes. Le texte se présentait comme un instantané, pas comme un modèle à copier [73]. Il sera pourtant copié dans le monde entier. En 2020, Jeremiah Lee, ancien de Spotify, rappellera que le modèle était « en partie une ambition, en partie une approximation », et que Spotify lui-même s'en est éloigné [74].

#### Les mesures arrivent

En 2012, Alanna Brown publie chez Puppet Labs le premier rapport *State of DevOps* [75]. L'équipe DORA publie les siens à partir de 2013 [75]. Les quatre métriques de livraison sont publiées en 2016 [75]. En 2018, Nicole Forsgren, Jez Humble et Gene Kim les consolident dans *Accelerate* [76]. Fréquence de déploiement, délai de livraison, taux d'échec des changements, temps de rétablissement : ces quatre indicateurs sont associés à la performance des organisations [76].

> **Lecture.** Pour la première fois, le débat dispose d'un arbitre autre que la conviction. Et son verdict est gênant pour le marché : ce qui distingue les organisations performantes relève surtout de capacités techniques, comme l'automatisation, l'intégration continue ou une architecture faiblement couplée.

#### La critique vient de l'intérieur

Les critiques les plus dures viennent des signataires eux-mêmes.

En août 2013, Ken Schwaber publie « unSAFe at any speed », une charge contre SAFe [77]. En mars 2014, Dave Thomas publie *Agile is Dead (Long Live Agility)* [78]. Son diagnostic est grammatical : « agile » était un adjectif, il est devenu un substantif marchand [78]. On ne peut pas « faire de l'agile » ; on peut travailler avec agilité. En avril 2014, David Heinemeier Hansson publie « TDD is dead. Long live testing. », qui déclenche une série de conversations publiques avec Kent Beck et Martin Fowler [79]. En mai 2015, Andy Hunt, autre signataire, publie *The Failure of Agile* : les équipes s'accrochent à des règles au lieu d'inspecter et d'adapter [80].

Puis viennent les tentatives de simplification. En 2015, Alistair Cockburn propose le *Heart of Agile* : quatre mots, Collaborer, Livrer, Réfléchir, Améliorer [81]. Le 3 novembre 2015, Joshua Kerievsky publie *Modern Agile* : rendre les utilisateurs formidables, faire de la sécurité un prérequis, expérimenter et apprendre vite, livrer de la valeur en continu [82]. Ni rôle, ni cérémonie, ni certification [82]. La même année, Scrum.org publie *Nexus*, un cadre pour trois à neuf équipes Scrum [83].

En septembre 2016, Ron Jeffries décrit le « Dark Scrum » : un Scrum retourné contre les développeurs, où le point quotidien devient surveillance [84]. Il l'impute en partie au silence de Scrum sur les pratiques d'ingénierie [84]. En 2018, il conseillera aux développeurs d'abandonner « l'Agile » d'entreprise, sans abandonner les valeurs [85].

#### Le « complexe agilo-industriel »

On trouve dès 2014 la trace d'une expression : l'« Agile Industrial Complex » [86]. Daniel Mezick la théorise le 12 décembre 2016 : un réseau d'institutions, de consultants et d'éditeurs qui rend normale l'imposition de l'agilité à des équipes qui n'y ont pas consenti [86].

Le 25 août 2018, à Melbourne, en ouverture d'Agile Australia, Martin Fowler la reprend sur scène, en reconnaissant qu'il en fait lui-même partie [87]. Il qualifie l'imposition de méthodes aux équipes de « travesty », une mascarade [87]. Il ajoute deux griefs : l'abandon de l'excellence technique, et l'organisation par projets plutôt que par produits [87]. Il regrette aussi que l'on parle si peu, dans les conférences agiles, des techniques d'écriture du logiciel [87].

#### Ce qui s'est diffusé, ce qui est resté à quai

Les enquêtes *State of Agile* donnent une indication, avec les mêmes réserves de méthode. En 2019, 85 % des répondants pratiquent la réunion quotidienne et 81 % la rétrospective [57]. Le développement piloté par les tests passe de 49 % en 2008 à 30 % en 2019 [57]. La programmation en binôme reste autour de 30 % [57].

Il faut nuancer. Les tests unitaires et l'intégration continue se sont largement répandus. Ce sont les pratiques les plus exigeantes d'XP qui sont restées minoritaires.

> **Lecture de l'auteur.** Ce qui s'est diffusé : les rituels et les rôles de Scrum, les certifications, les cadres à l'échelle, le vocabulaire. Ce qui est resté à quai : le développement piloté par les tests, le remaniement systématique, la programmation en binôme, l'architecture émergente. Scrum s'explique en quelques phrases et se certifie ; XP demande des années de pratique. Le marché a sélectionné le plus transmissible.

#### Le retour de l'organisation

En 2019, Matthew Skelton et Manuel Pais publient *Team Topologies* [88]. Ils remettent la loi de Conway au centre : la structure des équipes détermine l'architecture livrable [88]. Ils proposent quatre types d'équipes et trois modes d'interaction, et font de la charge cognitive le critère de dimensionnement [88].

En août 2019, le *Project Management Institute* rachète *Disciplined Agile*, la boîte à outils de Scott Ambler et Mark Lines [89]. Le PMI avait lancé une certification agile, le PMI-ACP, dès 2011 [89].

---

### Époque VII — Ce qui reste (2020-2024)

En novembre 2020, Schwaber et Sutherland publient une nouvelle édition du *Scrum Guide* [90]. Elle tient en treize pages, introduit un objectif de produit (*Product Goal*) et parle de trois « responsabilités » (*accountabilities*) plutôt que de rôles [90][91]. La formule courante « trois rôles, cinq événements, trois artefacts » est donc datée.

À partir de mars 2020, la pandémie impose le télétravail généralisé [92]. Des rituels conçus autour d'un mur, de post-it et d'une salle basculent d'un coup dans le distanciel. Le sixième principe du Manifeste, qui désigne le face-à-face comme le moyen le plus efficace de communiquer, devient impraticable [93].

En janvier 2023, la banque américaine Capital One supprime environ 1 100 postes de sa filière « agile », en expliquant que les pratiques sont désormais intégrées aux équipes [94]. L'affaire devient un symbole du reflux du métier d'agiliste.

Le 31 décembre 2024, l'Agile Alliance, fondée en 2001 par les auteurs du Manifeste, signe son rattachement au *Project Management Institute* [95]. Sa conférence historique s'appelle désormais PMI Agile [96].

> **Lecture.** On peut y lire une consécration : l'institution de la gestion de projet reconnaît que l'agilité est devenue un courant dominant. On peut aussi y lire une ironie de l'histoire : un mouvement rejoint l'institution contre laquelle il s'était construit. Les deux lectures ne s'excluent pas.

---

### Époque VIII — La machine (2025-2026)

Ici, les sources sont récentes et la prudence s'impose. Nous manquons de recul, et une bonne partie de ce qui se publie vient de ceux qui vendent les outils.

#### Des assistants aux agents

GitHub Copilot apparaît en juin 2021 [97]. À ce stade, c'est de la complétion : la machine propose la ligne suivante.

Le changement de nature date de 2025. En février, GitHub lance le mode agent de Copilot [98], et Cursor fait du sien le mode par défaut [99]. Le 24 février 2025, Anthropic publie Claude Code en aperçu de recherche, puis en disponibilité générale le 22 mai 2025 [100][101]. Un agent ne complète plus une ligne : on lui confie une tâche, il lit le code, le modifie, lance les tests et corrige.

Le même mois de février 2025, Andrej Karpathy forge l'expression « vibe coding » : s'abandonner aux « vibrations » et oublier que le code existe [102]. Il avait affirmé en 2023 que le langage de programmation le plus en vogue était l'anglais [103].

#### Un retour des spécifications

Une famille d'approches se réclame du développement piloté par les spécifications (*spec-driven development*). En 2025 apparaissent, entre autres, BMAD en avril, Kiro chez Amazon en juillet, OpenSpec en août et Spec Kit chez GitHub en septembre [104].

Les meilleures voix de la communauté y mettent des réserves. Fin 2025, le *Technology Radar* de Thoughtworks signale, à propos de ces approches, le risque de retomber dans de vieux travers : la grosse spécification en amont et la livraison en une fois [105]. Birgitta Böckeler, sur le site de Martin Fowler, se dit sceptique et rappelle que les petits pas itératifs restent le meilleur moyen de garder la maîtrise [106]. Kent Beck distingue deux attitudes : celle où l'on ne regarde plus le code, et celle qu'il appelle « programmation augmentée », où l'on continue de se soucier du code, de sa complexité et de ses tests [107].

En avril 2026, le Radar de Thoughtworks classe Spec Kit et OpenSpec dans sa catégorie « à évaluer », et note que deux camps se dessinent : ceux qui font confiance aux agents avec peu de structure, et ceux qui veulent des processus et des spécifications détaillés [105].

#### Les premières mesures

Le rapport DORA 2025 conclut que l'IA agit comme un amplificateur : elle renforce les forces d'une organisation, et ses faiblesses [108]. Il observe que l'adoption de l'IA va de pair avec un débit plus élevé, mais aussi avec une stabilité des livraisons plus faible [108]. Il cite le travail en petits lots parmi les capacités qui conditionnent les bénéfices de l'IA [108]. Ces deux derniers points viennent de la page de présentation du rapport, pas du rapport complet.

D'autres mesures, publiées par des éditeurs d'outils, vont dans le même sens. Selon GitClear, la part des lignes modifiées relevant du remaniement passe de 25 % en 2021 à moins de 10 % en 2024 [102]. Selon CodeRabbit, en décembre 2025, sur 470 demandes de fusion, le code co-écrit par IA présente 1,7 fois plus de problèmes significatifs et 2,74 fois plus de vulnérabilités [102].

Début 2026, Anthropic publie un rapport de tendances sur le développement agentique [109]. C'est un document d'éditeur, qui présente des prédictions et non une étude. Il affirme que le métier passe de l'écriture du code à l'orchestration d'agents qui l'écrivent [109]. Il contient aussi un chiffre qui tempère l'enthousiasme : les développeurs utilisent l'IA dans environ 60 % de leur travail, mais ne disent pouvoir déléguer entièrement que 0 à 20 % des tâches [109].

#### Un manifeste pour les directions générales

En mars 2026, pour le vingt-cinquième anniversaire de Snowbird, PMI Agile Alliance publie un *Manifesto for Enterprise Agility* : quatre valeurs et neuf principes, issus d'une enquête auprès de plus de sept cents dirigeants [110][111]. Le texte de 2001 s'adressait à des équipes de développement et parlait de logiciel opérationnel. Celui de 2026 s'adresse aux directions et parle de gouvernance : piloter par des garde-fous plutôt que par des gardiens, financer une intention plutôt qu'une activité, rapprocher l'autorité du lieu où la valeur se crée [110].

> **Lecture.** Ce déplacement ressemble à un aveu. Vingt-cinq ans d'expérience montrent que les pratiques d'équipe survivent mal à un système de décision qui les contredit. On peut faire des sprints de deux semaines dans une organisation qui budgète une fois par an et récompense la conformité au plan. Cela produit surtout de la fatigue et un vocabulaire.

#### La lecture de la conférence : une seconde rupture

Tout ce qui suit est l'interprétation de l'auteur, présentée comme telle lors de la conférence.

**Trois façons de parler à la machine.** Le procédural : l'humain parle la langue de la machine, on spécifie tout avant, parce que changer coûte cher. L'objet : le code porte le sens du métier et devient malléable ; les humains doivent se parler en continu, et cela donne l'agilité. L'IA : l'humain exprime son intention dans sa propre langue, et la machine produit le code. Écrire le code ne coûte presque plus rien. Ce qui devient rare, c'est de savoir dire clairement ce qu'on veut, et de vérifier ce qu'on obtient.

Est-ce la plus grande rupture depuis l'objet ? C'est une opinion, et aucune source d'autorité ne le dit en ces termes. Le rapport d'Anthropic, par exemple, parle du plus grand changement depuis l'interface graphique [109]. Chacun choisit son repère. Celui de la conférence est l'objet, parce que c'est lui qui a fait naître nos pratiques.

**2025, c'est 1993.** C'est une analogie, pas un fait. En 1993, l'objet est là depuis quelques années ; une équipe, chez Easel, essaie pour la première fois ce qui deviendra Scrum ; XP n'existe pas ; le Manifeste est à huit ans. Aujourd'hui, les agents sont là depuis un an ou deux, sans méthode partagée, et on ne sait pas bien qui fait quoi entre l'humain et l'agent.

**Les conditions de l'agilité bougent.** Le code était écrit par des humains, et c'était long : c'est ce qui justifiait d'estimer et de mesurer une vélocité ; un agent le produit en minutes. Une conversation valait mieux qu'un document : mais l'agent n'était pas dans la salle, il ne connaît que ce qui est écrit. Le retour d'information arrivait au rythme de l'itération ; il peut arriver dans l'heure. L'équipe coordonnait des humains qui codent ; qui coordonne quoi, quand une partie du travail est faite par des agents ?

**Ce qui vacille.** Les instruments qui servent à estimer et planifier la capacité à produire du code : points, vélocité, sprint pensé comme unité de production. La préférence systématique pour l'oral : non pour revenir aux cahiers des charges, mais parce qu'un contexte écrit, versionné et lisible par une machine redevient utile. Certains rituels conçus pour synchroniser des personnes qui écrivent du code à la main. Ce qui vacille n'est pas l'itération, c'est une partie de l'outillage construit autour.

**Ce qui se transforme.** La user story, promesse de conversation, tend à devenir une spécification vivante que l'humain et l'agent lisent tous les deux. Le binôme devient souvent une conversation entre un humain et un agent. Les rôles se recomposent, à mesure que la frontière avec le produit et le test se déplace.

**Ce qui tient.** Les tests, parce que c'est le test qui dit si l'on peut se fier à du code produit en masse. Le remaniement et l'architecture, parce qu'un agent peut produire beaucoup de code qui fonctionne et ne tient pas ensemble. L'intégration continue et les petits incréments. Le retour des utilisateurs. Et l'empirisme : regarder ce qui se passe, et ajuster.

> **Une observation de l'auteur.** Cette dernière liste ressemble beaucoup à ce que la diffusion avait laissé à quai. Le neuvième principe du Manifeste, « Une attention continue à l'excellence technique et à une bonne conception renforce l'Agilité » [93], n'a peut-être jamais été aussi actuel.

**Cinq leçons, pas cinq lois.** La réponse à une rupture technique n'a jamais été seulement technique : elle a été une façon de travailler. L'excellence technique doit rester au centre ; c'est ce qui s'est perdu une fois. Inviter, ne pas imposer, comme l'écrivaient Fowler en 2006 [56] et Mezick dix ans plus tard [86]. Rester une communauté d'idées : le wiki de 1995 était ouvert, et ce qui s'y est construit s'est construit en public. Avancer par essais, à petite échelle, en regardant les résultats.

Comme en 1993, plusieurs réponses prennent la mer dans des directions différentes. L'auteur de la conférence a lui-même proposé un cadre ouvert, AIAD. Aucune de ces tentatives n'est la réponse. XP non plus n'était pas la réponse en 1996 : c'étaient des expériences, menées par des praticiens, et publiées.

---

## 3. Chronologie synthétique

| Année | Événement | Source |
|---|---|---|
| 1924 | Mary Parker Follett publie *Creative Experience* (« power-with ») | [2] |
| 1924 | Walter Shewhart invente la carte de contrôle aux Bell Labs | [3] |
| 1939 | Deming fait publier les conférences de Shewhart (cycle spécifier-produire-inspecter) | [3] |
| 1948-1975 | Ohno et Eiji Toyoda construisent le Toyota Production System | [5] |
| 1950 | Deming forme ingénieurs et dirigeants au Japon (juin-août) | [3] |
| 1956 | Benington décrit un développement par phases (projet SAGE) | [6] |
| 1957 | Développement incrémental à l'IBM Service Bureau Corporation | [1] |
| Début des années 1960 | Projet Mercury : itérations d'une demi-journée, tests écrits avant le code | [1] |
| 1968 | Conférence de l'OTAN à Garmisch : « génie logiciel », « crise du logiciel » | [8][7] |
| 1968 | Melvin Conway énonce la loi qui porte son nom | [9] |
| 1970 | Royce publie *Managing the Development of Large Software Systems* | [10] |
| 1971 | Weinberg publie *The Psychology of Computer Programming* | [11] |
| 1976 | Gilb publie *Software Metrics* ; première trace connue du mot « waterfall » (Bell et Thayer) | [1][6] |
| 1977-1980 | Logiciel de vol de la navette : 17 itérations en 31 mois | [1][14] |
| 1978 / 1988 | Ohno publie *Toyota Production System* (japonais / anglais) | [5] |
| 1982 / 1986 | Deming publie *Quality, Productivity, and Competitive Position*, retitré *Out of the Crisis* | [3][4] |
| 1985 | Norme DoD-STD-2167 : la cascade devient contractuelle | [1] |
| 1985 | Gilb, « Evolutionary Delivery versus the waterfall model » | [13] |
| 1986 | Takeuchi et Nonaka, « The New New Product Development Game » (HBR) | [16] |
| 1986-1988 | Boehm, modèle en spirale | [18] |
| 1989 | Beck et Cunningham présentent les cartes CRC à OOPSLA | [19] |
| 1990 | *The Machine That Changed the World* fait connaître le Lean | [23] |
| 1992 | Cunningham invente la métaphore de la dette technique (OOPSLA) | [20] |
| 1992 | Thèse d'Opdyke sur le refactoring | [24] |
| 1993 | Première équipe Scrum chez Easel Corporation | [25] |
| 1994 | *Design Patterns* ; fondation du DSDM Consortium ; article de Beck sur les tests en Smalltalk | [27][22][28] |
| 25 mars 1995 | Ward Cunningham ouvre le WikiWikiWeb | [29] |
| 16 octobre 1995 | Schwaber présente « SCRUM Development Process » à OOPSLA | [17] |
| 1996-1997 | Projet C3 chez Chrysler : naissance d'Extreme Programming | [30][31] |
| 1997 | JUnit (Beck et Gamma) ; FDD à Singapour | [28][32] |
| 1999 | *Extreme Programming Explained* (Beck) ; *Refactoring* (Fowler) | [21][35] |
| 2000 | Rogue River Lodge ; arrêt du projet C3 (février) ; *The New Methodology* | [38][31][37] |
| 11-13 février 2001 | Snowbird : le Manifeste pour le développement agile de logiciels | [38][40] |
| 2001 | Douze principes ; fondation de l'Agile Alliance | [93][43] |
| Début des années 2000 | Fondation de la Scrum Alliance et du *Certified ScrumMaster* (année débattue) | [26][52] |
| 2002 | Planning Poker (Grenning) ; *Test-Driven Development: By Example* (Beck) | [45][46] |
| 2003 | *Lean Software Development* ; *Domain-Driven Design* ; article de Larman et Basili | [47][48][1] |
| 2004 | Anderson chez Microsoft : premiers pas de Kanban ; *Working Effectively with Legacy Code* | [53][49] |
| 2005 | Architecture hexagonale (Cockburn) | [50] |
| 2006 | BDD (Dan North) ; *AgileImposition* (Fowler) ; première enquête *State of Agile* | [51][56][57] |
| 2006-2007 | Kanban chez Corbis | [53] |
| 2007 | Cynefin dans la HBR | [55] |
| 2008 | *Scaling Lean & Agile Development* (LeSS) ; premier Agile Tour ; réunion de Libertyville | [58][61][60] |
| 2009 | « Flaccid Scrum » ; premier DevOpsDays à Gand ; Scrum.org ; *Agile Coaching* | [36][63][52][64] |
| 2010 | Premier *Scrum Guide* ; *Continuous Delivery* ; *Kanban* ; *Coaching Agile Teams* | [66][67][53][65] |
| 2011 | SAFe ; *The Lean Startup* ; « Water-Scrum-Fall » | [68][71][72] |
| 2012 | *Scaling Agile @ Spotify* ; premier *State of DevOps* | [73][75] |
| 2013 | Schwaber, « unSAFe at any speed » | [77] |
| 2014 | *Agile is Dead (Long Live Agility)* ; « TDD is dead » | [78][79] |
| 2015 | *The Failure of Agile* ; Heart of Agile ; Modern Agile (3 novembre) ; Nexus | [80][81][82][83] |
| 2016 | « Dark Scrum » ; Mezick théorise l'« Agile Industrial Complex » | [84][86] |
| 2018 | Keynote de Fowler à Agile Australia ; *Accelerate* | [87][76] |
| 2019 | *Team Topologies* ; le PMI rachète Disciplined Agile | [88][89] |
| 2020 | *Scrum Guide* 2020 ; bascule au télétravail | [90][92] |
| 2021 | GitHub Copilot (complétion) | [97] |
| 2023 | Capital One supprime sa filière « agile » ; SAFe 6.0 | [94][69] |
| 31 décembre 2024 | L'Agile Alliance rejoint le PMI | [95] |
| Février 2025 | Mode agent de Copilot ; Cursor ; aperçu de Claude Code ; « vibe coding » | [98][99][100][102] |
| Mai 2025 | Disponibilité générale de Claude Code | [101] |
| Avril-septembre 2025 | BMAD, Kiro, OpenSpec, Spec Kit | [104] |
| 2025 | Rapport DORA : l'IA comme amplificateur | [108] |
| Début 2026 | Rapport d'Anthropic sur les tendances du développement agentique | [109] |
| Mars 2026 | *Manifesto for Enterprise Agility* (PMI Agile Alliance) | [110][111] |
| Avril 2026 | Le Radar Thoughtworks place Spec Kit et OpenSpec en « à évaluer » | [105] |

---

## 4. Les personnes clés

Notices courtes, par ordre d'entrée dans l'histoire. Les dix-sept signataires du Manifeste sont marqués d'un astérisque (\*).

**Mary Parker Follett.** Penseuse du management. *Creative Experience* (1924) oppose le pouvoir « sur » au pouvoir « avec » [2].

**Walter Shewhart et W. Edwards Deming.** Statisticiens de la qualité. Shewhart invente la carte de contrôle (1924) ; Deming diffuse au Japon la maîtrise statistique des procédés à partir de 1950. Deming parlait de « cycle de Shewhart » puis de PDSA, et rejetait le sigle PDCA [3][4].

**Taiichi Ohno** (1912-1990). Père du Toyota Production System, dont dérivent le Lean, le juste-à-temps et le kanban [5].

**Melvin Conway.** Énonce en 1968 la loi selon laquelle les systèmes reproduisent la structure de communication de l'organisation qui les conçoit [9].

**Winston W. Royce** (1929-1995). Auteur de l'article de 1970 dont on a tiré le « waterfall », alors qu'il y jugeait le modèle séquentiel risqué [10][6].

**Gerald Weinberg** (1933-2018). *The Psychology of Computer Programming* (1971), programmation sans ego, le logiciel comme activité humaine [11].

**Tom Gilb.** Défend dès les années 1970 la livraison évolutive, par petits incréments mesurés sur des objectifs chiffrés [12][1].

**Barry Boehm** (1935-2022). Modèle en spirale piloté par le risque (1986-1988) [18].

**Hirotaka Takeuchi et Ikujiro Nonaka.** Leur article de 1986 sur la mêlée de rugby inspire le nom de Scrum [16][17].

**Kent Beck**\*. Co-invente les cartes CRC (1989), écrit les premiers frameworks de tests unitaires, crée XP sur le projet C3 et publie *Extreme Programming Explained* (1999) puis *Test-Driven Development: By Example* (2002) [19][28][21][46].

**Ward Cunningham**\*. Cartes CRC (1989), métaphore de la dette technique (1992), premier wiki (1995) [19][20][29].

**Jeff Sutherland**\*. Monte la première équipe Scrum chez Easel en 1993 ; co-auteur du *Scrum Guide* [25][90].

**Ken Schwaber**\*. Présente Scrum à OOPSLA en 1995, cofonde la Scrum Alliance, la quitte fin 2009 et fonde Scrum.org ; co-auteur du *Scrum Guide* [17][52].

**Ron Jeffries**\*. Coach de l'équipe C3, l'un des fondateurs d'XP ; auteur des textes sur le « Dark Scrum » (2016) [30][84].

**Martin Fowler**\*. *Refactoring* (1999), *The New Methodology* (2000), puis vigie critique du mouvement : *AgileImposition* (2006), « Flaccid Scrum » (2009), keynote d'Agile Australia (2018) [35][37][56][36][87].

**Alistair Cockburn**\*. Famille de méthodes Crystal, architecture hexagonale (2005), *Heart of Agile* (2015) [33][50][81].

**Jim Highsmith**\*. *Adaptive Software Development* ; rédacteur du récit officiel de Snowbird [34][38].

**Robert C. Martin**\*. Son courriel de septembre 2000 déclenche Snowbird ; promoteur du *software craftsmanship* [38][60].

**Mike Beedle**\* (1962-2018). Co-auteur du premier livre sur Scrum ; revendique la proposition du mot « agile » [41][44].

**Andrew Hunt**\* **et Dave Thomas**\*. Auteurs de *The Pragmatic Programmer* (1999). Thomas publie *Agile is Dead (Long Live Agility)* en 2014, Hunt *The Failure of Agile* en 2015 [78][80].

**James Grenning**\*. Décrit le Planning Poker en 2002 [45].

**Steve Mellor**\*. Promoteur de la modélisation exécutable ; sa présence montre que le Manifeste est un compromis entre traditions rivales [38].

**Arie van Bennekum**\*, **Jon Kern**\*, **Brian Marick**\*. Signataires venus respectivement de DSDM, du développement objet et du test [40][38].

**Jeff De Luca et Peter Coad.** Conçoivent le *Feature-Driven Development* à Singapour en 1997 [32].

**Craig Larman et Victor Basili.** Leur article de 2003 établit que l'itératif est pratiqué depuis les années 1950. Larman co-crée ensuite LeSS avec **Bas Vodde** [1][58].

**Mary et Tom Poppendieck.** *Lean Software Development* (2003) [47].

**David J. Anderson.** Crée la méthode Kanban pour le travail intellectuel, de Microsoft (2004) à Corbis (2006-2007) puis au livre de 2010 [53].

**Dave Snowden.** Cadre Cynefin (HBR, 2007, avec Mary Boone) [55].

**Patrick Debois.** Organise le premier DevOpsDays à Gand en 2009 [63].

**Jez Humble et David Farley.** *Continuous Delivery* (2010) [67].

**Rachel Davies, Liz Sedley et Lyssa Adkins.** Les premiers livres sur le coaching agile (2009, 2010) [64][65].

**Dean Leffingwell.** Crée SAFe (2011) [68].

**Eric Ries.** *The Lean Startup* (2011) [71].

**Henrik Kniberg et Anders Ivarsson.** Décrivent l'organisation de Spotify en 2012 [73].

**Joshua Kerievsky.** *Modern Agile* (2015) [82].

**Daniel Mezick.** Théorise l'« Agile Industrial Complex » (2016) [86].

**Nicole Forsgren.** Recherche DORA ; co-auteure d'*Accelerate* (2018) [76].

**Matthew Skelton et Manuel Pais.** *Team Topologies* (2019) [88].

**Andrej Karpathy.** Forge l'expression « vibe coding » en février 2025 [102].

**Birgitta Böckeler.** Analyse sur le site de Martin Fowler les outils de développement piloté par les spécifications [106].

---

## 5. Le Manifeste : valeurs et principes

### Les quatre valeurs

Traduction française officielle, publiée sur agilemanifesto.org [40]. Le connecteur anglais « over » y est rendu par « plus que ».

> Nous découvrons comment mieux développer des logiciels par la pratique et en aidant les autres à le faire. Ces expériences nous ont amenés à valoriser :
>
> - **Les individus et leurs interactions** plus que les processus et les outils
> - **Des logiciels opérationnels** plus qu'une documentation exhaustive
> - **La collaboration avec les clients** plus que la négociation contractuelle
> - **L'adaptation au changement** plus que le suivi d'un plan
>
> Nous reconnaissons la valeur des seconds éléments, mais privilégions les premiers.

### Les douze principes

Rédigés dans les semaines qui suivent Snowbird [38]. Traduction française officielle [93].

1. Notre plus haute priorité est de satisfaire le client en livrant rapidement et régulièrement des fonctionnalités à grande valeur ajoutée.
2. Accueillez positivement les changements de besoins, même tard dans le projet. Les processus agiles exploitent le changement pour donner un avantage compétitif au client.
3. Livrez fréquemment un logiciel opérationnel avec des cycles de quelques semaines à quelques mois et une préférence pour les plus courts.
4. Les utilisateurs ou leurs représentants et les développeurs doivent travailler ensemble quotidiennement tout au long du projet.
5. Réalisez les projets avec des personnes motivées. Fournissez-leur l'environnement et le soutien dont ils ont besoin et faites-leur confiance pour atteindre les objectifs fixés.
6. La méthode la plus simple et la plus efficace pour transmettre de l'information à l'équipe de développement et à l'intérieur de celle-ci est le dialogue en face à face.
7. Un logiciel opérationnel est la principale mesure d'avancement.
8. Les processus agiles encouragent un rythme de développement soutenable. Ensemble, les commanditaires, les développeurs et les utilisateurs devraient être capables de maintenir indéfiniment un rythme constant.
9. Une attention continue à l'excellence technique et à une bonne conception renforce l'Agilité.
10. La simplicité — c'est-à-dire l'art de minimiser la quantité de travail inutile — est essentielle.
11. Les meilleures architectures, spécifications et conceptions émergent d'équipes auto-organisées.
12. À intervalles réguliers, l'équipe réfléchit aux moyens de devenir plus efficace, puis règle et modifie son comportement en conséquence.

### Trois lectures

> **Lecture.** Les quatre valeurs sont un compromis. Les douze principes contiennent les engagements concrets : rythme soutenable, excellence technique, auto-organisation, remise en question régulière.

- **Le principe 9 est la condition des autres.** Sans tests, automatisation et remaniement, le coût du changement reste élevé, et itérer accélère seulement l'accumulation de dette. C'est le principe le plus souvent oublié des transformations, et celui que la conférence juge le plus actuel à l'ère des agents.
- **Le principe 5 interdit d'imposer l'agilité.** Une méthode déployée par mandat, sans consentement de l'équipe, contredit le texte au moment même où elle s'en réclame. C'est la contradiction que Fowler nomme en 2006 puis en 2018 [56][87].
- **Le principe 12 est le moteur.** C'est le seul qui permette au système de se modifier lui-même. Une équipe qui ne change rien après ses rétrospectives n'en fait pas.

**Ce que le Manifeste ne dit pas.** Rien sur l'exploitation (ce sera DevOps, 2009), rien sur la découverte produit (le Lean Startup, 2011), rien sur la mise à l'échelle (LeSS, SAFe), rien sur la structure des organisations (*Team Topologies*, 2019). Ces silences expliquent une bonne part de ce qui a été ajouté depuis [63][71][88].

---

## 6. Mythes et idées reçues corrigés

**« L'agilité est née en 2001. »** Le développement itératif et incrémental est pratiqué dès 1957, puis sur le projet Mercury au début des années 1960 [1]. Le Manifeste a donné un nom commun et une légitimité publique à des pratiques dispersées. Il n'a pas inventé l'itératif.

**« Royce a inventé le modèle en cascade. »** Royce dessine le modèle séquentiel pour le juger « risqué » et propice à l'échec [10]. Le mot « waterfall » n'apparaît pas dans son article ; sa première trace connue date de 1976, chez Bell et Thayer [6]. Le séquentiel s'est diffusé surtout par les normes d'achat public, dont DoD-STD-2167 en 1985 [1].

**« Royce prônait l'itératif. »** Inverse et symétrique du mythe précédent, et tout aussi excessif. Royce recommande des retours entre phases voisines et de « faire deux fois », ce que Larman et Basili ne qualifient pas d'itératif et incrémental classique [10][1].

**« Le PDCA de Deming. »** Deming parlait du « cycle de Shewhart », puis de PDSA. Il a rejeté le sigle PDCA, qu'il qualifiait de « corruption » en 1990 [4].

**« *Out of the Crisis*, 1982. »** En 1982 paraît *Quality, Productivity, and Competitive Position*. Le livre est retitré *Out of the Crisis* en 1986 [3][4].

**« Gilb, 1976 : EVO, première méthode agile formelle. »** En 1976 paraît *Software Metrics*, que Larman et Basili présentent comme le plus ancien livre défendant clairement l'itératif et incrémental. Le nom « Evo » est postérieur, et la pratique incrémentale est antérieure [1].

**« Le mot Scrum est né dans l'article de 1986. »** La métaphore est celle du rugby. Le mot « scrum » n'apparaît que dans un intertitre, « Moving the Scrum Downfield » [16]. Schwaber cite bien l'article pour justifier le nom [17].

**« Schwaber et Sutherland présentent Scrum à OOPSLA 1995. »** Schwaber est le seul auteur de l'article. Sutherland co-organise l'atelier [17].

**« Le wiki est lancé en 1994. »** Cunningham date lui-même le début au 25 mars 1995 [29].

**« Le refactoring et les tests unitaires sont nés à OOPSLA. »** Ils sont nés dans la communauté objet, mais pas à OOPSLA : le refactoring dans une thèse de l'université de l'Illinois (1992), les tests en Smalltalk dans un article de *The Smalltalk Report* (1994) [24][28].

**« Scrum a dépassé XP entre 2007 et 2010. »** Scrum est déjà en tête dans la première enquête *State of Agile*, en 2006 : 40 % contre 23 % [57].

**« XP est la seule méthode avec des pratiques techniques. »** Formulation trop forte. Scrum omet délibérément les pratiques techniques [36], mais la première équipe Scrum pratiquait tests, refactoring et builds multiples [25].

**« Scrum : trois rôles, cinq événements, trois artefacts. »** Le *Scrum Guide* 2020 parle de trois responsabilités (*accountabilities*), non de rôles [90].

**« Le modèle Spotify. »** Ses auteurs décrivaient un instantané, pas un modèle à copier [73]. Spotify s'en est lui-même éloigné [74].

**« Modern Agile, 2016. »** La proposition circule souvent sous cette date. Le billet fondateur de Joshua Kerievsky est daté du 3 novembre 2015 [82].

**« Fowler a inventé l'expression “Agile Industrial Complex”. »** On en trouve une trace dès 2014. Daniel Mezick la théorise en 2016 ; Fowler la reprend et la popularise en 2018 [86][87].

**« Claude Code est sorti en 2024. »** Faux : aperçu de recherche le 24 février 2025, disponibilité générale le 22 mai 2025 [100][101].

**« Follett et l'intelligence collective. »** L'expression est une glose moderne. Le vocabulaire de Follett est « power-with » et « integration » [2].

**Le principe 9 mal cité.** On lit souvent « …et à la qualité de la conception… ». Le texte officiel dit : « Une attention continue à l'excellence technique et à une bonne conception renforce l'Agilité » [93].

**« L'histoire ne se répète pas, mais elle rime » (Mark Twain).** Rien n'indique que Twain l'ait dit. La première attribution à Twain date de 1970 ; la forme la plus ancienne connue est du psychanalyste Theodor Reik, en 1965 [112]. La formule reste juste.

**Autres légendes signalées par les sources.** L'idée qu'Ohno aurait inventé le kanban en observant des supermarchés américains relève en partie du récit fondateur [5]. La citation « In God we trust; all others must bring data » n'a pas de source fiable dans les écrits de Deming [3]. Le « développeur 10x » vient d'une étude de 1968 qui comparait le temps partagé au traitement différé, et non les talents individuels [113]. Le chiffre de 16 % de projets réussis du *CHAOS Report* (1994) repose sur des définitions jugées trompeuses par Eveleens et Verhoef en 2010 [114].

---

## 7. Controverses et débats

### L'agilité est-elle née de l'objet ?

C'est la thèse de la conférence, et elle doit être discutée comme telle.

**Arguments pour.** Cunningham écrit en 1992 que les objets rendent le coût de la dette supportable [20]. Schwaber présente Scrum en 1995 comme une amélioration du cycle de développement orienté objet [17]. La première équipe Scrum construit un outil de conception objet en Smalltalk [25]. Fowler écrit que les racines d'XP sont dans la communauté Smalltalk [37]. Beck voit dans les objets une technologie clé pour aplatir le coût du changement [21].

**Arguments contre.** Le développement itératif et incrémental précède l'objet de trente ans [1]. DSDM vient du développement rapide d'applications [22]. Beck lui-même dit que les objets ne sont ni nécessaires ni suffisants [21].

**Formulation défendable.** La communauté objet a été le principal incubateur d'XP et des pratiques techniques de l'agilité, et le milieu où Scrum a été formalisé. Elle n'est pas l'origine unique des approches itératives.

### La certification

Le *Certified ScrumMaster* a fait de Scrum le cadre le plus enseigné, et sa certification la plus contestée [26]. Fin 2009, Ken Schwaber quitte la Scrum Alliance qu'il avait fondée, sur un désaccord portant précisément sur les évaluations et la certification [52]. Depuis, deux filières concurrentes certifient le même cadre.

### Les cadres à l'échelle, et SAFe en particulier

Le besoin de coordonner de nombreuses équipes est réel ; les réponses sont opposées. LeSS soutient que passer à l'échelle consiste à retirer de l'organisation [59]. SAFe propose un modèle complet, avec rôles et niveaux [68]. Depuis 2013, SAFe est attaqué par des figures majeures du mouvement : Ken Schwaber (« unSAFe at any speed ») et Ron Jeffries notamment [77][69]. Le reproche central : un cadre descendant qui vend de la conformité sous l'étiquette agile.

### « Agile is dead » et le post-agile

Plusieurs signataires cessent d'employer le mot ou le réinventent : Dave Thomas en 2014, Andy Hunt en 2015, Alistair Cockburn avec *Heart of Agile*, Joshua Kerievsky avec *Modern Agile* [78][80][81][82]. Martin Fowler, lui, refuse en 2018 d'abandonner le mot et appelle à en défendre le sens [87].

### L'excellence technique laissée à quai

C'est le fil rouge de la conférence. Fowler décrit le « Flaccid Scrum » en 2009 [36], Jeffries le « Dark Scrum » en 2016 [84]. Le *Manifesto for Software Craftsmanship* de 2009 naît du même constat [60]. Les enquêtes *State of Agile* montrent la baisse déclarée du développement piloté par les tests entre 2008 et 2019, avec les réserves de méthode déjà signalées [57].

Le débat technique existe aussi à l'intérieur de la communauté. En 2014, David Heinemeier Hansson attaque le dogme du « test d'abord », sans attaquer les tests automatisés, et en discute publiquement avec Beck et Fowler [79].

### Imposer l'agilité

Fowler en 2006 : imposer un processus à une équipe est contraire aux principes de l'agilité [56]. Mezick en 2016 : le complexe agilo-industriel rend cette imposition normale [86]. Fowler en 2018 : c'est une « travesty » [87]. La forme la plus répandue de ce compromis porte un nom depuis 2011 : « Water-Scrum-Fall » [72].

### Le culte du cargo

L'expression désigne l'imitation de formes vidées de leur cause : des points quotidiens, des sprints et des post-it sans les conditions qui les rendaient utiles [115]. Le « modèle Spotify » en est l'exemple le plus cité [74].

### Mesurer : vélocité, productivité, preuves

La vélocité a été conçue comme un outil interne de prévision. Utilisée pour comparer des équipes, elle mesure mal ce qu'elle prétend mesurer. Fowler soutenait dès 2003 qu'aucune mesure fiable de la productivité logicielle n'existe ; Ron Jeffries dit ne plus recommander l'estimation en points [116]. Côté preuves, les sources les plus citées ont leurs fragilités : échantillon auto-sélectionné pour *State of Agile* [57], définitions contestées pour le *CHAOS Report* [114]. Les travaux de DORA ont apporté une base statistique plus solide, mais leurs métriques ont elles-mêmes été discutées et remaniées [75].

### Dix-sept hommes

Les dix-sept signataires de Snowbird sont tous des hommes [40]. Cette homogénéité est devenue un objet de débat récurrent sur les angles morts du texte.

### L'institutionnalisation

Le PMI lance une certification agile en 2011, rachète Disciplined Agile en 2019 [89], puis accueille l'Agile Alliance fin 2024 [95]. Consécration ou absorption : les deux lectures coexistent.

### L'IA : retour de la spécification, qualité du code

Deux débats sont ouverts. Le premier porte sur la spécification. Les outils de développement piloté par les spécifications ramènent l'écrit au centre. Thoughtworks et Birgitta Böckeler mettent en garde contre le retour des grosses spécifications en amont [105][106]. Aucune source consultée ne soutient que la documentation l'emporterait désormais sur le logiciel qui fonctionne, ni que la conversation en face à face serait dépassée.

Le second porte sur la qualité du code produit par des agents. Les premières mesures, publiées par des éditeurs d'outils, signalent moins de remaniement, plus de duplication et plus de vulnérabilités [102]. DORA résume : l'IA amplifie l'existant [108].

---

## 8. Pour aller plus loin

### Les textes fondateurs, à lire en premier

- **Craig Larman et Victor Basili, « Iterative and Incremental Development: A Brief History » (2003).** L'article qui change la façon de voir l'histoire [1].
- **Winston Royce, « Managing the Development of Large Software Systems » (1970).** À lire en entier, au-delà de la figure 2 [10].
- **Hirotaka Takeuchi et Ikujiro Nonaka, « The New New Product Development Game » (1986).** L'image du rugby, sans une ligne de logiciel [16].
- **Ward Cunningham, « The WyCash Portfolio Management System » (1992).** Un court rapport d'expérience, et la phrase sur les objets que presque personne ne cite [20].
- **Ken Schwaber, « SCRUM Development Process » (1995).** La première description publiée de Scrum [17].
- **Le Manifeste, ses principes et son histoire.** Le texte, puis le récit de Highsmith et celui de Fowler [40][93][38][42].

### Les livres de la pratique

- Kent Beck, *Extreme Programming Explained* (1999) [21].
- Martin Fowler, *Refactoring* (1999) [35].
- Mary et Tom Poppendieck, *Lean Software Development* (2003) [47].
- Jez Humble et David Farley, *Continuous Delivery* (2010) [67].
- Nicole Forsgren, Jez Humble et Gene Kim, *Accelerate* (2018) [76].
- Matthew Skelton et Manuel Pais, *Team Topologies* (2019) [88].

### Les textes critiques

- Martin Fowler, *AgileImposition* (2006), *FlaccidScrum* (2009), *The State of Agile Software in 2018* [56][36][87].
- Dave Thomas, *Agile is Dead (Long Live Agility)* (2014) [78].
- Ron Jeffries, « Dark Scrum » (2016) [84].
- Daniel Mezick, *The Agile Industrial Complex* (2016) [86].

### Sur la période actuelle

- Le rapport DORA 2025 [108].
- Birgitta Böckeler sur les outils de développement piloté par les spécifications [106].
- Kent Beck, « Augmented Coding: Beyond the Vibes » (2025) [107].
- Le *Manifesto for Enterprise Agility* (2026), pour mesurer le chemin parcouru depuis 2001 [110].

### Pour apprendre en jouant

Deck Agile, une application pour apprendre l'histoire de l'agilité en jouant, présentée en fin de conférence : deck-agile.vercel.app. Plusieurs fiches vérifiées de son corpus ont servi à ce document.

---

## 9. Bibliographie

Les liens ont été relevés dans les sources de ce document ; certains peuvent avoir changé depuis. Les notices encyclopédiques (Wikipédia) sont citées quand elles sont la source des fiches vérifiées utilisées ; elles servent de point d'entrée, pas de preuve ultime.

1. Craig Larman et Victor R. Basili, « Iterative and Incremental Development: A Brief History », *IEEE Computer*, vol. 36, n° 6, juin 2003, p. 47-56. https://www.craiglarman.com/wiki/downloads/misc/history-of-iterative-larman-and-basili-ieee-computer.pdf (autre copie : https://www.cs.umd.edu/~basili/publications/journals/J90.pdf)
2. Mary Parker Follett, *Creative Experience*, Longmans, Green and Co., 1924. https://archive.org/details/creativeexperien00foll
3. Wikipedia, « W. Edwards Deming » et « Walter A. Shewhart » (notices consultées pour les fiches vérifiées Deck Agile). https://en.wikipedia.org/wiki/W._Edwards_Deming ; https://en.wikipedia.org/wiki/Walter_A._Shewhart
4. Ronald Moen, histoire du cycle PDSA (PDF), The W. Edwards Deming Institute. https://deming.org/wp-content/uploads/2020/06/PDSA_History_Ron_Moen.pdf
5. Wikipedia, « Taiichi Ohno » et « Toyota Production System ». https://en.wikipedia.org/wiki/Taiichi_Ohno ; https://en.wikipedia.org/wiki/Toyota_Production_System
6. Wikipedia, « Waterfall model ». https://en.wikipedia.org/wiki/Waterfall_model
7. Wikipedia, « NATO Software Engineering Conferences ». https://en.wikipedia.org/wiki/NATO_Software_Engineering_Conferences
8. Peter Naur et Brian Randell (dir.), *Software Engineering. Report on a conference sponsored by the NATO Science Committee*, Garmisch, octobre 1968, publié en 1969. http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF
9. Wikipedia, « Melvin Conway » et « Conway's law » (Melvin E. Conway, « How do Committees Invent? », *Datamation*, avril 1968). https://en.wikipedia.org/wiki/Conway%27s_law
10. Winston W. Royce, « Managing the Development of Large Software Systems », *Proceedings of IEEE WESCON*, août 1970. https://web.archive.org/web/2020/https://www.praxisframework.org/files/royce1970.pdf
11. Wikipedia, « Gerald Weinberg » (*The Psychology of Computer Programming*, 1971). https://en.wikipedia.org/wiki/Gerald_Weinberg
12. Wikipedia, « Tom Gilb ». https://en.wikipedia.org/wiki/Tom_Gilb
13. Tom Gilb, « Evolutionary Delivery versus the “waterfall model” », *ACM SIGSOFT Software Engineering Notes*, 1985. https://dl.acm.org/doi/10.1145/1012483.1012490
14. IBM, « The Space Shuttle program » (IBM Heritage). https://www.ibm.com/history/space-shuttle
15. Wikipedia, « Iterative and incremental development ». https://en.wikipedia.org/wiki/Iterative_and_incremental_development
16. Hirotaka Takeuchi et Ikujiro Nonaka, « The New New Product Development Game », *Harvard Business Review*, janvier-février 1986. https://hbr.org/1986/01/the-new-new-product-development-game
17. Ken Schwaber, « SCRUM Development Process », OOPSLA'95 Workshop on Business Object Design and Implementation, Austin, 16 octobre 1995. http://www.jeffsutherland.org/oopsla/schwapub.pdf
18. Barry W. Boehm, « A Spiral Model of Software Development and Enhancement », *IEEE Computer*, mai 1988 (première version 1986). https://www.cse.msu.edu/~cse435/Homework/HW3/boehm.pdf
19. Kent Beck et Ward Cunningham, « A Laboratory for Teaching Object-Oriented Thinking », OOPSLA, 1989. https://c2.com/doc/oopsla89/paper.html
20. Ward Cunningham, « The WyCash Portfolio Management System », rapport d'expérience, OOPSLA, 1992. https://c2.com/doc/oopsla92.html
21. Kent Beck, *Extreme Programming Explained: Embrace Change*, Addison-Wesley, 1999 (2e éd. 2004). https://www.oreilly.com/library/view/extreme-programming-explained/0201616416/
22. Agile Business Consortium, « DSDM Project Framework » ; Wikipedia, « Dynamic systems development method ». https://www.agilebusiness.org/dsdm-project-framework.html ; https://en.wikipedia.org/wiki/Dynamic_systems_development_method
23. James P. Womack, Daniel T. Jones et Daniel Roos, *The Machine That Changed the World*, 1990 (notice). https://en.wikipedia.org/wiki/The_Machine_That_Changed_the_World_(book)
24. William Opdyke, thèse de doctorat sur le refactoring des frameworks orientés objet, université de l'Illinois, 1992. https://www.laputan.org/pub/papers/opdyke-thesis.pdf
25. Jeff Sutherland, récit de la première équipe Scrum (« First Scrum »), 2004. https://jeffsutherland.com/scrum/FirstScrum2004.pdf
26. Wikipedia, « Scrum (software development) ». https://en.wikipedia.org/wiki/Scrum_(software_development)
27. Wikipedia, « Design Patterns » (Gamma, Helm, Johnson, Vlissides, Addison-Wesley, 1994). https://en.wikipedia.org/wiki/Design_Patterns
28. Martin Fowler, « Xunit » (bliki). https://martinfowler.com/bliki/Xunit.html
29. Ward Cunningham, « Wiki History », WikiWikiWeb (c2.com). https://c2.com/wiki/remodel/pages/WikiHistory
30. Martin Fowler, « C3 » (bliki). https://martinfowler.com/bliki/C3.html
31. Wikipedia, « Chrysler Comprehensive Compensation System », « Extreme programming » et « Kent Beck ». https://en.wikipedia.org/wiki/Chrysler_Comprehensive_Compensation_System ; https://en.wikipedia.org/wiki/Extreme_programming
32. Wikipedia, « Feature-driven development ». https://en.wikipedia.org/wiki/Feature-driven_development
33. Alistair Cockburn, biographie officielle. https://alistaircockburn.com/Bio
34. Wikipedia, « Adaptive software development » et « Jim Highsmith ». https://en.wikipedia.org/wiki/Adaptive_software_development
35. Martin Fowler, *Refactoring: Improving the Design of Existing Code*, Addison-Wesley, 1999. https://martinfowler.com/books/refactoring.html
36. Martin Fowler, « FlaccidScrum » (bliki), 29 janvier 2009. https://martinfowler.com/bliki/FlaccidScrum.html
37. Martin Fowler, « The New Methodology », juillet 2000, révisé en 2005. https://martinfowler.com/articles/newMethodology.html
38. Jim Highsmith, « History: The Agile Manifesto », agilemanifesto.org, 2001. https://agilemanifesto.org/history.html
39. DBLP, série de la conférence XP (International Conference on Agile Software Development) ; WikiWikiWeb, page « XpTwoThousand ». https://dblp.org/db/conf/xpu/ ; http://c2.com/wiki/remodel/pages/XpTwoThousand
40. *Manifeste pour le développement agile de logiciels*, 2001, et liste des signataires. https://agilemanifesto.org/iso/fr/manifesto.html
41. Wikipedia, « Mike Beedle ». https://en.wikipedia.org/wiki/Mike_Beedle
42. Martin Fowler et Jim Highsmith, « Writing The Agile Manifesto ». https://martinfowler.com/articles/agileStory.html
43. Agile Alliance, « 25 Years Ago, a Manifesto Was Born » et « The Agile Manifesto ». https://agilealliance.org/25-years-ago-a-manifesto-was-born/ ; https://www.agilealliance.org/agile101/the-agile-manifesto/
44. Ken Schwaber et Mike Beedle, *Agile Software Development with Scrum*, Prentice Hall, 2001 (notice éditeur). https://www.biblio.com/9780130676344
45. James Grenning, « Planning Poker or How to Avoid Analysis Paralysis While Release Planning », 2002. https://wingman-sw.com/articles/planning-poker
46. Kent Beck, *Test-Driven Development: By Example*, Addison-Wesley, 2002 (notice : Wikipedia, « Test-driven development »). https://en.wikipedia.org/wiki/Test-driven_development
47. Mary et Tom Poppendieck, *Lean Software Development: An Agile Toolkit*, Addison-Wesley, 2003. https://www.oreilly.com/library/view/lean-software-development/0321150783/
48. Eric Evans, *Domain-Driven Design*, Addison-Wesley, 2003. https://www.domainlanguage.com/ddd/
49. Michael Feathers, *Working Effectively with Legacy Code*, Prentice Hall, 2004 (notice). https://en.wikipedia.org/wiki/Working_Effectively_with_Legacy_Code
50. Alistair Cockburn, « Hexagonal Architecture », 2005. https://alistair.cockburn.us/hexagonal-architecture/
51. Dan North, « Introducing BDD », 2006. https://dannorth.net/introducing-bdd/
52. Wikipedia, « Ken Schwaber ». https://en.wikipedia.org/wiki/Ken_Schwaber
53. Wikipedia, « Kanban (development) ». https://en.wikipedia.org/wiki/Kanban_(development)
54. Kanban Tool, « History of Kanban » ; « How Kanban Got Hot », entretien avec David J. Anderson. https://kanbantool.com/kanban-guide/kanban-history ; https://kanbantool.com/kanban-library/introduction/how-kanban-got-hot-david-anderson-interview
55. Dave Snowden et Mary Boone, « A Leader's Framework for Decision Making », *Harvard Business Review*, novembre 2007. https://hbr.org/2007/11/a-leaders-framework-for-decision-making
56. Martin Fowler, « AgileImposition » (bliki), octobre 2006. https://martinfowler.com/bliki/AgileImposition.html
57. VersionOne / Digital.ai, *State of Agile* (rapports annuels 1 à 6 et 14), archive. https://www.eg.bucknell.edu/~cs479/common-files/resources/versionone-state-of-agile/
58. Craig Larman et Bas Vodde, *Scaling Lean & Agile Development*, Addison-Wesley, décembre 2008 ; site LeSS. https://less.works
59. Atlassian, « The Large-Scale Scrum (LeSS) framework ». https://www.atlassian.com/agile/agile-at-scale/less
60. Wikipedia, « Software craftsmanship ». https://en.wikipedia.org/wiki/Software_craftsmanship
61. Agile World Institute, « AgileTour - An International Event ». http://www.agile-world.com/agiletour_index.html
62. New Relic, « The Incredible True Story of How DevOps Got Its Name ». https://blog.newrelic.com/engineering/devops-name/
63. DevOps.com, « The Origins of DevOps: What's in a Name? » ; Wikipedia, « DevOps ». https://devops.com/the-origins-of-devops-whats-in-a-name/ ; https://en.wikipedia.org/wiki/DevOps
64. Rachel Davies et Liz Sedley, *Agile Coaching*, Pragmatic Bookshelf, 2009. https://pragprog.com/titles/sdcoach/agile-coaching/
65. Lyssa Adkins, *Coaching Agile Teams*, Addison-Wesley, 2010 ; page « About » ; Agile Coaching Institute, *Agile Coaching Competencies* (livre blanc, 2011). https://lyssaadkins.com/about-lyssa/ ; https://lyssaadkins.com/wp-content/uploads/2023/06/Agile-Coaching-Competencies-whitepaper-part-one.pdf
66. scrumguides.org, « Scrum Guide Revisions ». https://scrumguides.org/revisions.html
67. Jez Humble et David Farley, *Continuous Delivery*, Addison-Wesley, 2010. https://continuousdelivery.com/
68. Scaled Agile, « About SAFe ». https://framework.scaledagile.com/about/
69. Wikipedia, « Scaled agile framework ». https://en.wikipedia.org/wiki/Scaled_agile_framework
70. Scaled Agile, « A Decade in Adaptation: The Scaled Agile Framework, 10 Years Later ». https://scaledagile.com/blog/a-decade-in-adaptation-the-scaled-agile-framework-10-years-later/
71. Eric Ries, *The Lean Startup*, Crown Business, 2011. http://theleanstartup.com/principles
72. ADTmag, « Analyst: 'Water-Scrum-Fall' Is Current Agile Reality », 24 juin 2011. https://adtmag.com/articles/2011/06/24/water-scrum-fall-agile-reality.aspx
73. Henrik Kniberg et Anders Ivarsson, « Scaling Agile @ Spotify with Tribes, Squads, Chapters & Guilds », novembre 2012. https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf
74. Jeremiah Lee, « Failed #SquadGoals », avril 2020. https://www.jeremiahlee.com/posts/failed-squad-goals/
75. Wikipedia, « DevOps Research and Assessment ». https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment
76. Nicole Forsgren, Jez Humble et Gene Kim, *Accelerate*, IT Revolution, 2018 ; programme de recherche DORA. https://dora.dev/research/
77. Ken Schwaber, « unSAFe at any speed », 6 août 2013. https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/
78. Dave Thomas, « Agile is Dead (Long Live Agility) », 4 mars 2014. https://pragdave.me/thoughts/active/2014-03-04-time-to-kill-agile.html
79. David Heinemeier Hansson, « TDD is dead. Long live testing. », 23 avril 2014 ; Martin Fowler, « Is TDD Dead? ». https://dhh.dk/2014/tdd-is-dead-long-live-testing.html ; https://martinfowler.com/articles/is-tdd-dead/
80. Andy Hunt, « The Failure of Agile », 6 mai 2015. https://toolshed.com/2015/05/the-failure-of-agile.html
81. Alistair Cockburn, *Heart of Agile*. https://heartofagile.com/
82. Joshua Kerievsky, « Modern Agile », Industrial Logic, 3 novembre 2015 ; site modernagile.org. https://www.industriallogic.com/blog/modern-agile/ ; https://modernagile.org/
83. Ken Schwaber / Scrum.org, *Nexus Guide* v1.0, juin 2015. https://kenschwaber.wordpress.com/wp-content/uploads/2015/06/nexusguide_v1-0.pdf
84. Ron Jeffries, « Dark Scrum », série *In Defense of Scrum*, septembre 2016. https://ronjeffries.com/articles/016-09ff/defense/
85. Ron Jeffries, « Developers Should Abandon Agile », mai 2018. https://ronjeffries.com/articles/018-01ff/abandon-1/
86. Daniel Mezick, « The Agile Industrial Complex », décembre 2016, et historique du terme, New Technology Solutions. https://newtechusa.net/aic/ ; https://newtechusa.net/aic-history/
87. Martin Fowler, « The State of Agile Software in 2018 », keynote d'Agile Australia, Melbourne, 25 août 2018. https://martinfowler.com/articles/agile-aus-2018.html
88. Matthew Skelton et Manuel Pais, *Team Topologies*, IT Revolution, 2019. https://teamtopologies.com/
89. Wikipedia, « Disciplined agile delivery » et « Project Management Institute ». https://en.wikipedia.org/wiki/Disciplined_agile_delivery
90. Ken Schwaber et Jeff Sutherland, *The Scrum Guide*, édition de novembre 2020. https://scrumguides.org/scrum-guide.html
91. Kaizenko, « A Historical Look at The Scrum Guide From 1986 to 2020 ». https://www.kaizenko.com/the-scrum-guide-history/
92. Wikipedia, « Remote work ». https://en.wikipedia.org/wiki/Remote_work
93. *Principes sous-jacents au Manifeste agile*, traduction française officielle. https://agilemanifesto.org/iso/fr/principles.html
94. Banking Dive, « Capital One cuts 1,100 tech jobs », janvier 2023. https://www.bankingdive.com/news/capital-one-cuts-1100-tech-jobs-agile/640861/
95. Project Management Institute, « Agile Alliance Joins Project Management Institute », 2025 (accord signé le 31 décembre 2024). https://www.pmi.org/about/press-media/2025/agile-alliance-joins-project-management-institute
96. Agile Alliance, « The Alliance ». https://www.agilealliance.org/the-alliance/
97. Wikipedia, « GitHub Copilot ». https://en.wikipedia.org/wiki/GitHub_Copilot
98. GitHub, « GitHub Copilot: The agent awakens », février 2025. https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/
99. Cursor, changelog 0.46. https://cursor.com/changelog/0-46-x
100. Anthropic, annonce de Claude 3.7 Sonnet et de l'aperçu de Claude Code, 24 février 2025. https://www.anthropic.com/news/claude-3-7-sonnet
101. Anthropic, annonce de Claude 4 et de la disponibilité générale de Claude Code, 22 mai 2025. https://www.anthropic.com/news/claude-4
102. Wikipedia, « Vibe coding » (Karpathy, février 2025 ; mesures GitClear et CodeRabbit). https://en.wikipedia.org/wiki/Vibe_coding
103. Wikipedia, « Andrej Karpathy ». https://en.wikipedia.org/wiki/Andrej_Karpathy
104. GitHub Spec Kit ; Kiro (Amazon) ; BMAD-METHOD ; OpenSpec. https://github.com/github/spec-kit ; https://kiro.dev ; https://github.com/bmad-code-org/BMAD-METHOD ; https://openspec.dev
105. Thoughtworks, *Technology Radar*, « Spec-driven development » (vol. 33 et 34). https://www.thoughtworks.com/radar/techniques/spec-driven-development
106. Birgitta Böckeler, article sur trois outils de développement piloté par les spécifications, série « Exploring Generative AI », martinfowler.com, 2025. https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
107. Kent Beck, « Augmented Coding: Beyond the Vibes », 2025. https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes
108. DORA, rapport 2025 (page de présentation). https://dora.dev/research/2025/dora-report/
109. Anthropic, *2026 Agentic Coding Trends Report*, début 2026. https://resources.anthropic.com/2026-agentic-coding-trends-report
110. PMI Agile Alliance, « Manifesto for Enterprise Agility », mars 2026. https://www.pmi.org/learning/agile/manifesto-for-enterprise-agility
111. Communiqué, « PMI Agile Alliance unveils the Manifesto for Enterprise Agility », mars 2026. https://www.myjoyonline.com/pmi-agile-alliance-unveils-the-manifesto-for-enterprise-agility-a-bold-new-guide-to-power-enterprise-wide-reinvention/
112. Quote Investigator, enquête sur la citation « History rhymes », 12 janvier 2014. https://quoteinvestigator.com/2014/01/12/history-rhymes/
113. Steve McConnell, « Productivity Variations Among Software Developers and Teams: The Origin of 10x », Construx. https://www.construx.com/blog/productivity-variations-among-software-developers-and-teams-the-origin-of-10x/
114. Eveleens et Verhoef, « The Rise and Fall of the Chaos Report Figures », *IEEE Software*, vol. 27, n° 1, janvier 2010. https://www.cs.vu.nl/~x/the_rise_and_fall_of_the_chaos_report_figures.pdf
115. Wikipedia, « Cargo cult programming ». https://en.wikipedia.org/wiki/Cargo_cult_programming
116. Martin Fowler, « CannotMeasureProductivity » (bliki), 2003 ; Ron Jeffries, « Revisiting Story Points ». https://martinfowler.com/bliki/CannotMeasureProductivity.html ; https://ronjeffries.com/articles/019-01ff/story-points/Index.html
