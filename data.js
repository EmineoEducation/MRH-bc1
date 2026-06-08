// ══════════════════════════════════════════════════════════════
//  data.js — MRH · BC01 · « Opération Pulse Horizon » · Mars 2025
//  Backbone narratif. Toutes les apps lisent depuis ici (schéma v2).
//  Univers : Lumio Health (medtech parisienne, wearables anti-stress).
//  Commanditaire : Théo Marczak (CEO). Étudiant·e : consultant·e RH externe.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  student: { name: "{{PRENOM}} {{NOM}}", role: "Consultant·e RH externe", email: "{{EMAIL_ETUDIANT}}", company: "Indépendant·e", initial: "?" },

  contexte: {
    title: "Fiche contexte — Lumio Health",
    subtitle: "À lire en premier si vous découvrez l'univers",
    body: "Lumio Health est une medtech parisienne fondée en 2018. Elle conçoit des wearables qui mesurent le stress chronique au travail et les vend en B2B à des DRH et des services de santé au travail. 180 entreprises clientes, 140 salariés, trois bureaux (Paris, Lyon, Berlin).\n\nEn janvier 2025, le fonds Northgate Capital (représenté par Jakob Rein) est entré au capital. Le term sheet prévoit un doublement des effectifs en 18 mois, une internationalisation accélérée et des exigences ESG strictes en contrepartie. Le CEO Théo Marczak doit livrer une stratégie RH capable de tenir cette croissance sans casser ce qui fait la valeur de l'entreprise.\n\nTrois voix se font entendre en interne. Sonia Ferracci (Directrice Marketing) veut une marque employeur différenciante pour attirer les talents. Camille Ott (Partenariats B2B) alerte sur le départ imminent de commerciaux clés. Yassine Morel (Content Manager) remonte un climat social dégradé depuis la restructuration de l'automne — paradoxe gênant pour une entreprise qui vend du bien-être au travail."
  },

  fictif: { startHour: 8, startMinute: 30, startDay: 3, endDay: 21, spanDays: 18, startDow: 1, monthShort: "mars" },

  briefEmail: {
    from: "Théo Marczak", fromEmail: "theo@lumio-health.com",
    subject: "Opération Pulse Horizon — j'ai besoin de votre regard",
    date: "lun. 3 mars · 08:30", preview: "On double les effectifs en 18 mois. Notre RH n'est pas prête. J'ai besoin d'une stratégie, pas d'un audit…",
    flagged: true, tags: ["MISSION", "PRIORITÉ"],
    body: "{{PRENOM}},\n\nJe vais être direct, on n'a pas beaucoup de temps.\n\nNorthgate est entré au capital en janvier. En échange de leur ticket, on s'est engagés sur trois choses : doubler les effectifs en 18 mois, ouvrir deux marchés européens, et tenir des indicateurs ESG sérieux — pas du greenwashing, des chiffres qu'ils audteront.\n\nLe problème, c'est que notre RH a été pensée pour une boîte de 140 personnes. Pas 280. Notre onboarding est bricolé, on perd des gens, et notre climat social s'est dégradé depuis la restructuration d'octobre. Pour une entreprise qui vend du bien-être au travail, c'est un comble — et un risque réputationnel.\n\nCe que j'attends de vous : une stratégie RH complète. Un dispositif de veille structuré, un diagnostic honnête de l'existant, et une stratégie RH-RSE qui aligne nos talents, nos obligations réglementaires et les exigences de Northgate. Pas un catalogue de bonnes intentions — une position défendable devant le board.\n\nTout ce dont vous avez besoin est dans votre espace de travail. Sonia, Camille et Yassine sont joignables sur Slack. Certains vous diront des choses qui ne figurent dans aucun document.\n\nÀ vous de jouer.\n\nThéo Marczak\nCEO — Lumio Health"
  },

  mailbox: [
    {
      id: "brief", from: "Théo Marczak", fromEmail: "theo@lumio-health.com", avatar: "TM", avatarColor: "#5c2d8f",
      subject: "Opération Pulse Horizon — j'ai besoin de votre regard", date: "03/03/25 · 08:30",
      preview: "On double les effectifs en 18 mois. Notre RH n'est pas prête…", unread: false, flagged: true,
      tags: ["MISSION", "PRIORITÉ"], body: "@briefEmail.body"
    },
    {
      id: "jakob", from: "Jakob Rein", fromEmail: "j.rein@northgate-capital.com", avatar: "JR", avatarColor: "#1b3a6b",
      subject: "ESG covenants — what the deal actually requires", date: "28/02/25 · 17:10",
      preview: "Forwarded by Théo. The HR metrics are not optional…", unread: false, forwarded: true,
      tags: ["TRANSMIS par Théo", "CONFIDENTIEL"],
      header: { from: "Jakob Rein <j.rein@northgate-capital.com>", to: "Théo Marczak", date: "28 févr. 2025 · 17:10", tag: "CONFIDENTIEL — NE PAS DIFFUSER" },
      body: "Théo,\n\nForwarding this so your consultant has it in writing.\n\nThe HR metrics in the term sheet are covenants, not aspirations. Three of them are non-negotiable for the Q2 closing:\n\n1. Gender parity on the management committee within 18 months (currently 1 woman out of 6 — not acceptable).\n2. A measurable, audited well-being indicator. You sell stress measurement. Use your own product on your own people. If you can't, that's a story I don't want to explain to my LPs.\n3. Voluntary turnover below 12% on critical roles. Your last number was 34% on sales. Fix it or explain it.\n\nI don't need a glossy deck. I need a strategy with numbers, dates, and an owner. If the consultant gives you a diagnosis without a recommendation, send them back.\n\nJakob"
    },
    {
      id: "d1", from: "LinkedIn", fromEmail: "no-reply@linkedin.com", avatar: "in", avatarColor: "#0a66c2",
      subject: "5 offres correspondent à votre profil RH", date: "02/03/25 · 18:30",
      preview: "Responsable RSE — Doctolib · Talent Manager — Alan · HRBP — Withings…", unread: true, distractor: true,
      body: "5 offres correspondent à votre profil :\n\n→ Responsable RSE — Doctolib (Paris)\n→ Talent Manager — Alan (Paris)\n→ HRBP Healthtech — Withings (Issy)\n→ Chargé·e marque employeur — BioSerenity\n→ DRH de transition — Owlet France\n\nVoir toutes les offres →"
    },
    {
      id: "d2", from: "URSSAF", fromEmail: "no-reply@urssaf.fr", avatar: "U", avatarColor: "#003671",
      subject: "Index égalité professionnelle — rappel d'échéance", date: "01/03/25 · 06:00",
      preview: "Les entreprises de plus de 50 salariés doivent publier leur index avant le 1er mars…", unread: false, distractor: true,
      body: "Madame, Monsieur,\n\nNous vous rappelons que les entreprises d'au moins 50 salariés doivent calculer et publier leur Index de l'égalité professionnelle au plus tard le 1er mars de chaque année.\n\nLe non-respect de cette obligation est passible d'une pénalité financière pouvant atteindre 1 % de la masse salariale.\n\nCordialement, vos services URSSAF."
    }
  ],

  notes: [
    {
      id: "theo", render: "confidential", title: "Avant le board — pour moi seul", date: "2 mars 2025",
      kicker: "NOTE PERSONNELLE — THÉO MARCZAK", byline: "Théo Marczak · 2 mars 2025",
      banner: "Ce document n'est pas destiné à être partagé. Il a été déposé dans votre espace par Théo lui-même — « à vous de juger ce que vous en faites ».",
      preview: "Ce que je ne dirai pas au board tel quel…",
      body: "Ce que je n'arrive pas à dire clairement au board, et qu'il faut pourtant trancher :\n\n— On vend du bien-être au travail et notre dernière enquête interne est mauvaise. Si ça fuite pendant qu'on lève des fonds sur l'ESG, c'est fini. Le risque n'est pas RH, il est existentiel pour la marque.\n\n— Northgate veut la parité au COMEX en 18 mois. Aujourd'hui je n'ai qu'une femme sur six. Je ne veux pas d'un recrutement alibi. Mais je n'ai pas de pipeline.\n\n— Camille me dit depuis trois semaines qu'on va perdre des commerciaux. Je ne l'ai pas pris assez au sérieux. Si elle a raison, on perd notre capacité à vendre au moment où on doit accélérer.\n\n— Sonia veut investir dans la marque employeur. Elle a raison sur le fond. Mais on ne peut pas faire de la marque employeur sur des fondations RH qui craquent. L'ordre compte.\n\nLa vraie question : est-ce qu'on court vite (hypercroissance, on assume la casse) ou est-ce qu'on consolide d'abord ? Je penche pour la seconde mais je ne peux pas le dire comme ça à Jakob."
    },
    {
      id: "contexte", render: "contexte", title: "Fiche contexte — Lumio Health", date: "Mise à jour mars 2025",
      kicker: "FICHE CONTEXTE — LUMIO HEALTH", subtitle: "Lumio Health · medtech · fondée 2018 · 140 salariés",
      preview: "Lumio Health est une medtech parisienne fondée en 2018…", body: "@contexte.body"
    },
    {
      id: "d_perso", title: "Courses week-end", date: "1 mars 2025", distractor: true,
      preview: "Pain, café, appeler le garage…",
      body: "— Pain + café\n— Appeler le garage pour le contrôle technique\n— Anniversaire Léa samedi\n— Rendre le livre à la médiathèque"
    }
  ],

  browser: {
    articleColors: ["#0a3d62", "#a02020", "#1a6641"],
    relatedArticles: [
      "Marque employeur medtech : la guerre des talents s'intensifie",
      "CSRD : ce que les PME devront publier dès 2025",
      "QVCT : pourquoi les indicateurs de bien-être deviennent un actif financier"
    ],
    sites: [
      {
        id: "t0", type: "corporate", favicon: "L", faviconColor: "#1a2436", host: "lumio-health.com",
        title: "Lumio Health · Mesurez le stress invisible", url: "https://lumio-health.com",
        corporate: {
          brand: "Lumio Health", nav: ["Solution", "Sciences", "Clients", "Carrières"], cta: "Demander une démo",
          hero: "Le bien-être au travail, enfin mesurable.",
          subhero: "Lumio équipe les DRH d'un capteur et d'une plateforme pour objectiver le stress chronique et agir avant qu'il ne coûte.",
          stats: [{ value: "180", label: "entreprises clientes" }, { value: "140", label: "collaborateurs" }, { value: "FR · DE", label: "implantations" }],
          footer: "© 2025 Lumio Health · Mentions légales · Politique de confidentialité"
        }
      },
      {
        id: "tlinkedin", type: "linkedin", favicon: "in", faviconColor: "#0a66c2", host: "linkedin.com",
        title: "Sonia Ferracci · Directrice Marketing chez Lumio Health | LinkedIn", url: "https://linkedin.com/in/sonia-ferracci",
        linkedin: {
          name: "Sonia Ferracci", color: "#c4420f", location: "Paris, Île-de-France",
          headline: "Directrice Marketing chez Lumio Health · Brand & Talent · Healthtech",
          experience: [
            { role: "Directrice Marketing", org: "Lumio Health · Temps plein", period: "2023 – aujourd'hui · Paris" },
            { role: "Head of Brand", org: "Doctolib", period: "2019 – 2023 · 4 ans" },
            { role: "Brand Manager", org: "BETC", period: "2015 – 2019 · 4 ans" }
          ],
          posts: [{ text: "On ne recrute plus avec une grille de salaires. On recrute avec une raison d'être. La marque employeur n'est pas un budget com — c'est la première brique RH.", meta: "il y a 1 semaine · 312 réactions" }]
        }
      },
      {
        id: "tsearch", type: "search", favicon: "🔍", faviconColor: "#5b6b85", host: "duckduckgo.com",
        title: "csrd obligations rh pme 2025 — DuckDuckGo", url: "https://duckduckgo.com/?q=csrd+obligations+rh+pme+2025",
        search: {
          engine: "DuckDuckGo", query: "csrd obligations rh pme 2025", count: "9 800",
          results: [
            { url: "economie.gouv.fr › csrd-directive-2025", title: "CSRD : qui est concerné et à partir de quand ?", desc: "La directive sur le reporting de durabilité étend les obligations de publication extra-financière. Les indicateurs sociaux (effectifs, parité, formation, santé-sécurité) deviennent obligatoires et auditables…" },
            { url: "anact.fr › qvct-indicateurs", title: "QVCT : construire des indicateurs qui tiennent", desc: "L'Agence nationale pour l'amélioration des conditions de travail recommande de croiser indicateurs de perception (enquêtes) et indicateurs objectifs (absentéisme, turnover) pour piloter la qualité de vie au travail…" },
            { url: "travail-emploi.gouv.fr › index-egalite", title: "Index de l'égalité professionnelle femmes-hommes", desc: "Les entreprises d'au moins 50 salariés calculent un index sur 100 points. En dessous de 75, un plan de correction est obligatoire sous trois ans…" },
            { url: "cnil.fr › ia-rh-recrutement", title: "IA et recrutement : les points de vigilance — CNIL", desc: "L'usage d'outils prédictifs en RH (scoring de candidats, prédiction du turnover) doit respecter le RGPD et l'IA Act : transparence, non-discrimination, intervention humaine…" }
          ]
        }
      }
    ]
  },

  portraits: [
    { key: "theo", id: "portrait-theo", favicon: "LD", faviconColor: "#1a2436", host: "lesechos.fr", title: "Théo Marczak : l'ingénieur qui veut industrialiser le bien-être · Les Échos", url: "https://lesechos.fr/portraits/theo-marczak", file: "/portraits/portrait_theo_marczak.html" },
    { key: "sonia", id: "portrait-sonia", favicon: "CB", faviconColor: "#e8173a", host: "cbnews.fr", title: "Sonia Ferracci : « la marque employeur n'est pas un luxe » · CB News", url: "https://cbnews.fr/portraits/sonia-ferracci", file: "/portraits/portrait_sonia_ferracci.html" },
    { key: "camille", id: "portrait-camille", favicon: "AC", faviconColor: "#1a6b3c", host: "actionco.fr", title: "Camille Ott : « on perd les gens qu'on aurait dû garder » · Action Co", url: "https://actionco.fr/portraits/camille-ott", file: "/portraits/portrait_camille_ott.html" }
  ],

  fausseUne: {
    source: "Les Échos", host: "lesechos.fr", rubrique: "Économie & Entreprises", kicker: "Santé au travail · Talents",
    date: "mar. 18 mars 2025", signature: "Émilie Vasseur",
    headline: "Medtech du bien-être : la pénurie de talents commerciaux fait flamber les salaires",
    chapeau: "Alors que les fonds poussent les jeunes medtech à doubler de taille, les profils commerciaux santé deviennent introuvables. Les départs s'enchaînent et les contre-offres explosent.",
    encadre: {
      icone: "⚠️", titre: "Signal fort RH · À retenir pour votre stratégie",
      texte: "Un cabinet spécialisé évalue à +22 % la hausse des packages des account managers santé en un an. Les entreprises qui ne sécurisent pas leurs talents critiques avant d'accélérer perdent leur capacité commerciale au pire moment."
    },
    corps: "Le secteur de la santé connectée vit une situation paradoxale. Porté par les levées de fonds, il recrute massivement — mais se heurte à une pénurie aiguë de profils commerciaux capables de vendre un dispositif à la fois technique et réglementé.\n\n« Un bon account manager santé met deux ans à être pleinement opérationnel. Quand il part, on ne perd pas un poste, on perd un portefeuille et une relation de confiance », explique une dirigeante du secteur.\n\nLes contre-offres se généralisent, tirant les rémunérations vers le haut. Pour les entreprises sous pression de croissance, l'enjeu n'est plus seulement de recruter, mais de retenir — et d'objectiver le risque de départ avant qu'il ne se matérialise.",
    relatedUne: ["Owlet France : la fuite des commerciaux a coûté deux trimestres", "Marque employeur : l'arme des medtech qui retiennent", "CSRD : la donnée sociale devient un actif"]
  },

  dossiers: [
    {
      id: "deck", type: "deck", tab: "Board — 3 scénarios", accent: "#1b3a6b", confidential: "Confidentiel — Board Lumio Health",
      title: "Stratégie RH 2025 — Arbitrages", subtitle: "Trois scénarios de transformation soumis au board", date: "Board du 20 mars 2025",
      runningHead: "Lumio Health · Board · Confidentiel",
      intro: "Ce deck présente les trois scénarios RH soumis aux actionnaires. Aucun n'a encore été tranché — c'est précisément ce que votre recommandation doit éclairer.",
      slides: [
        { titre: "Le point de départ", contenu: "• 140 salariés · objectif 280 en 18 mois\n• Turnover commercial : 34 % (vs 12 % visé par Northgate)\n• Enquête climat janvier 2025 : 58 % en détresse modérée à élevée\n• COMEX : 1 femme / 6 — parité exigée sous 18 mois\n• Onboarding non standardisé · absentéisme +18 % sur un an" },
        { titre: "Scénario A — Croissance organique maîtrisée", contenu: "On consolide d'abord les fondations RH (onboarding, QVCT, rétention) puis on accélère.\n\n+ Climat social assaini avant la montée en charge\n+ Risque réputationnel maîtrisé\n− Objectif d'effectifs Northgate atteint avec 4-6 mois de retard\n− Tension avec le calendrier du fonds" },
        { titre: "Scénario B — Hypercroissance assumée", contenu: "On recrute vite pour tenir le calendrier, on traite les irritants RH en parallèle.\n\n+ Calendrier Northgate respecté\n+ Effet d'entraînement commercial\n− Risque d'aggraver le climat social et le turnover\n− Pari réputationnel dangereux pour une marque « bien-être »" },
        { titre: "Scénario C — RSE-first", contenu: "On fait de l'exemplarité sociale et de la mesure du bien-être le cœur de la stratégie RH et de la marque.\n\n+ Alignement parfait avec la mission produit et l'ESG Northgate\n+ Différenciation marque employeur forte\n− Coûts initiaux élevés · ROI à moyen terme\n− Exige une discipline de reporting que l'entreprise n'a pas encore", callout: "Aucun scénario n'est neutre. Votre recommandation doit trancher, chiffrer, et dater — pas lister les options." }
      ]
    },
    {
      id: "audit", type: "rich", tab: "Audit RH flash ⚠", accent: "#c4420f", warning: true,
      pages: [
        {
          kicker: "Rapport d'audit flash RH · Novembre 2024 · ⚠ Avant restructuration",
          title: "Audit flash RH — Lumio Health", byline: "Cabinet RH externe · Novembre 2024",
          blocks: [
            { type: "warning", text: "<strong>Document de novembre 2024</strong>, antérieur à la restructuration d'octobre et à l'entrée de Northgate. Plusieurs chiffres ont évolué — à recouper avec l'enquête climat de janvier 2025 et les alertes terrain." },
            { type: "h2", text: "Synthèse" },
            { type: "p", html: "L'audit couvre cinq processus RH (recrutement, onboarding, performance, mobilité, QVCT). Trois sont jugés <strong>non robustes</strong> face à un doublement d'effectifs." },
            { type: "h2", text: "Indicateurs clés" },
            { type: "table", headers: ["Indicateur", "Valeur", "Cible", "Statut"], rows: [
              { cells: ["Turnover volontaire global", "21 %", "&lt; 15 %", "<span style='color:#c4420f'>Élevé</span>"] },
              { _highlight: true, cells: ["Turnover commercial (B2B)", "34 %", "&lt; 12 %", "<span style='color:#c4420f;font-weight:700'>Critique</span>"] },
              { cells: ["Absentéisme", "+18 % / an", "Stable", "<span style='color:#c4420f'>Dégradé</span>"] },
              { cells: ["Délai d'onboarding efficace", "non mesuré", "&lt; 30 j", "—"] },
              { cells: ["Femmes au COMEX", "1 / 6", "Parité", "<span style='color:#c4420f'>Non conforme</span>"] }
            ] }
          ]
        },
        {
          blocks: [
            { type: "h2", text: "Forces" },
            { type: "ul", items: ["Marque produit forte, attractive pour les profils tech et data", "Culture d'ingénierie solide, faible turnover sur la R&D", "Management de proximité apprécié dans les équipes techniques"] },
            { type: "h2", text: "Faiblesses" },
            { type: "ul", items: ["Onboarding non standardisé — chaque manager fait « à sa main »", "Aucun dispositif de rétention des talents critiques", "Politique de rémunération opaque, ressentie comme inéquitable", "Fonction RH sous-dimensionnée (2 personnes pour 140 salariés)"] },
            { type: "annotation", text: "↑ noté en marge : « le turnover commercial va exploser si on ne fait rien — Camille a raison »" },
            { type: "warning", tone: "info", html: "<strong>Recommandation cabinet :</strong> ne pas lancer de croissance d'effectifs sans avoir d'abord fiabilisé onboarding, rétention et politique de rémunération." }
          ]
        }
      ]
    },
    {
      id: "esg", type: "rich", tab: "Exigences ESG Northgate", accent: "#1a6641",
      pages: [
        {
          kicker: "Northgate Capital · Grille ESG RH · Closing Q2 2025",
          title: "Exigences ESG RH — référentiel d'investissement", byline: "Jakob Rein · Northgate Capital · Février 2025",
          blocks: [
            { type: "p", html: "Les indicateurs ci-dessous sont des <strong>covenants</strong> du term sheet, pas des objectifs indicatifs. Ils seront audités." },
            { type: "h2", text: "Indicateurs non-négociables" },
            { type: "table", headers: ["Domaine", "Indicateur", "Échéance"], rows: [
              { cells: ["Gouvernance", "Parité au COMEX", "18 mois"] },
              { cells: ["Bien-être", "Indicateur QVCT mesuré et audité", "Q4 2025"] },
              { cells: ["Rétention", "Turnover critique &lt; 12 %", "12 mois"] },
              { cells: ["Inclusion", "Index égalité &gt; 85/100", "Mars 2026"] },
              { cells: ["Reporting", "Reporting social CSRD-compatible", "Exercice 2025"] }
            ] },
            { type: "warning", html: "« Vous vendez la mesure du stress. Utilisez votre propre produit sur vos propres équipes. Si vous ne pouvez pas, c'est une histoire que je ne veux pas avoir à expliquer à mes investisseurs. » — J. Rein" }
          ]
        }
      ]
    }
  ],

  pressArticles: [
    {
      id: "a1", source: "Les Échos", author: "Émilie Vasseur", date: "10 mars 2025", url: "lesechos.fr/talents-medtech",
      headline: "Talents medtech : la fidélisation devient un enjeu de survie", illustration: "PHOTO — open space d'une startup santé",
      lede: "Doubler ses effectifs sans perdre les siens : l'équation impossible des jeunes medtech sous pression des fonds.",
      body: "La promesse est partout la même : lever, recruter, conquérir. Mais sur le terrain, les jeunes entreprises de la santé connectée découvrent que le goulot d'étranglement n'est pas le capital — c'est le talent.\n\nLes profils commerciaux spécialisés santé sont rares et courtisés. Les délais de montée en compétence sont longs. Et la moindre dégradation du climat interne se paie cash en départs.\n\nLes entreprises qui s'en sortent ont un point commun : elles ont investi dans la rétention et la marque employeur avant d'accélérer, pas après."
    },
    {
      id: "a2", source: "Harvard Business Review France", author: "Dir. R. Aksoy", date: "5 mars 2025", url: "hbrfrance.fr/qvct-actif",
      headline: "Le bien-être au travail est devenu un actif financier", illustration: "ILLUSTRATION — courbe QVCT / valorisation",
      lede: "Sous l'effet de la CSRD, les indicateurs sociaux entrent dans l'équation de la valorisation des entreprises.",
      body: "Longtemps reléguée au rang de « nice to have », la qualité de vie au travail devient un déterminant mesurable de la valeur. Les fonds intègrent désormais les indicateurs sociaux dans leur due diligence.\n\nLa raison est double : réglementaire, avec la CSRD qui rend le reporting social obligatoire ; et économique, car un climat dégradé détruit de la valeur par le turnover et l'absentéisme.\n\nPour les entreprises dont le produit même porte sur le bien-être, l'exemplarité interne n'est plus une option : c'est une condition de crédibilité."
    },
    {
      id: "a3", source: "Maddyness", author: "T. Lefort", date: "1 mars 2025", url: "maddyness.com/ia-rh-prudence",
      headline: "IA prédictive en RH : promesse et lignes rouges", illustration: "PHOTO — tableau de bord RH analytics",
      lede: "Prédire les départs avant qu'ils n'arrivent séduit les DRH. Mais l'IA Act et la CNIL posent des garde-fous.",
      body: "Anticiper le turnover, identifier les signaux faibles de désengagement : l'IA prédictive promet aux RH une longueur d'avance. Plusieurs medtech l'expérimentent déjà sur leurs propres données.\n\nMais l'usage est encadré. L'IA Act classe ces outils parmi les usages à risque élevé : transparence, non-discrimination et intervention humaine sont exigées. La CNIL rappelle que prédire n'autorise pas à décider à la place de l'humain.\n\nLa frontière est étroite entre l'outil d'alerte utile et le scoring opaque qui se retourne contre la marque employeur."
    }
  ],

  voiceMemos: [
    {
      id: "v1", title: "« On va perdre Marc et Inès »", author: "Camille Ott", role: "Partenariats B2B", date: "5 mars 2025", durationSec: 78,
      context: "mémo dicté après un point commercial",
      transcript: "Je le redis parce que personne ne veut l'entendre. Marc et Inès sont sur le départ. Deux account managers seniors, ensemble ils portent presque 40 % du portefeuille santé au travail. Marc a déjà passé deux entretiens ailleurs, je le sais. Si on les perd maintenant, au moment où Northgate veut qu'on accélère, on n'aura personne pour vendre. On met deux ans à former quelqu'un sur ce métier. Deux ans. Et là on parle de doubler les effectifs ? On ne double rien si on ne retient pas d'abord ceux qui savent vendre."
    },
    {
      id: "v2", title: "Ce que les clients nous renvoient", author: "Camille Ott", role: "Partenariats B2B", date: "5 mars 2025", durationSec: 54,
      context: "verbatim client rapporté",
      transcript: "Un DRH client m'a dit la semaine dernière, mot pour mot : « Vous nous vendez un outil pour mesurer le stress de nos équipes, j'espère que vous l'utilisez chez vous. » Sur le coup j'ai souri. Mais en vrai, je ne sais pas quoi répondre. Parce que nous, en interne, on est en train de craquer."
    },
    {
      id: "v3", title: "Le climat depuis octobre", author: "Yassine Morel", role: "Content Manager", date: "6 mars 2025", durationSec: 66,
      context: "retour informel sur l'enquête interne",
      transcript: "L'enquête de janvier, les chiffres sont durs mais ils ne mentent pas. 58 % des gens se disent en détresse modérée à élevée. Depuis la restructuration d'octobre, il y a une défiance. Les gens ne croient plus aux annonces. Si on lance une grande campagne marque employeur maintenant, sans rien régler en interne, ça va se voir, et ça va se retourner contre nous. On ne peut pas vendre du bien-être et le maltraiter chez soi."
    }
  ],

  finder: {
    order: ["mission", "press", "guide", "portraits"],
    folders: {
      mission: {
        title: "Mission Lumio · Opération Pulse Horizon", sidebar: "Mission Lumio", icon: "📂",
        items: [
          { name: "Email de mission — Théo Marczak.eml", kind: "mail", app: "mail", props: { openId: "brief" }, label: "EML" },
          { name: "ESG covenants — Jakob Rein (CONFIDENTIEL).eml", kind: "mail", app: "mail", props: { openId: "jakob" }, label: "EML" },
          { name: "Board — 3 scénarios RH.pdf", kind: "pdf", app: "pdf", props: { openDoc: "deck" }, label: "PDF" },
          { name: "Audit RH flash — nov. 2024.pdf", kind: "pdf", app: "pdf", props: { openDoc: "audit" }, label: "PDF" },
          { name: "Exigences ESG Northgate.pdf", kind: "pdf", app: "pdf", props: { openDoc: "esg" }, label: "PDF" },
          { name: "Note interne Théo (CONFIDENTIEL).rtf", kind: "doc", app: "notes", props: { openNote: "theo" }, label: "RTF" },
          { name: "Verbatims terrain — Camille & Yassine.m4a", kind: "audio", app: "voice", label: "M4A" },
          { name: "Fiche contexte Lumio Health.pdf", kind: "doc", app: "notes", props: { openNote: "contexte" }, label: "PDF" },
          { name: "Revue de presse (3 articles)", kind: "folder", folder: "press" }
        ]
      },
      press: {
        title: "Revue de presse", sidebar: "Revue de presse", icon: "📂", indent: true,
        items: [
          { name: "lesechos-talents-medtech.html", kind: "doc", app: "browser", props: { openTab: "press-0" }, label: "WEB" },
          { name: "hbr-qvct-actif.html", kind: "doc", app: "browser", props: { openTab: "press-1" }, label: "WEB" },
          { name: "maddyness-ia-rh.html", kind: "doc", app: "browser", props: { openTab: "press-2" }, label: "WEB" }
        ]
      },
      guide: {
        title: "Guide de mission", sidebar: "Guide de mission", icon: "❓",
        items: [{ name: "guide_mission_bc01.pdf", kind: "pdf", app: "pdf", props: { openGuide: true }, label: "PDF" }]
      },
      portraits: {
        title: "Portraits — équipe Lumio", sidebar: "Portraits équipe", icon: "👤",
        items: [
          { name: "Théo Marczak — Les Échos.html", kind: "doc", app: "browser", props: { openPortrait: "theo" }, label: "WEB" },
          { name: "Sonia Ferracci — CB News.html", kind: "doc", app: "browser", props: { openPortrait: "sonia" }, label: "WEB" },
          { name: "Camille Ott — Action Co.html", kind: "doc", app: "browser", props: { openPortrait: "camille" }, label: "WEB" }
        ]
      }
    }
  },

  calendar: {
    monthLabel: "Mars 2025", todayLabel: "Aujourd'hui — lundi 3 mars", countdownLabel: "AVANT LE BOARD",
    deadlineDay: 19, boardDay: 20, startOffset: 5, daysInMonth: 31, startDay: 3,
    legend: [
      { color: "var(--accent)", text: "Reco attendue <strong>mer. 19 mars 18h</strong>" },
      { color: "#1b3a6b", text: "Board actionnaires <strong>jeu. 20 mars</strong>" },
      { color: "#1a6641", text: "Closing Northgate <strong>Q2 2025</strong>" }
    ],
    events: {
      6: [{ label: "Enquête climat — restitution", color: "#1a6641", bg: "rgba(26,102,65,0.12)" }],
      12: [{ label: "Point Camille — départs commerciaux", color: "#c4420f", bg: "rgba(196,66,15,0.12)" }],
      18: [{ label: "Draft stratégie attendu", color: "#c4420f", bg: "rgba(196,66,15,0.12)", bold: true }],
      19: [{ label: "⚠ Deadline reco · 18h00", color: "#c4420f", bg: "rgba(196,66,15,0.2)", bold: true }],
      20: [{ label: "09h — Board Lumio Health", color: "#fff", bg: "#1b3a6b", bold: true }],
      27: [{ label: "CODIR mensuel", color: "#5c2d8f", bg: "rgba(92,45,143,0.1)" }]
    },
    footer: "Théo attend une stratégie tranchée. Pas un audit, pas une liste d'options. <strong>Un scénario retenu, chiffré, daté, avec un porteur et des KPI.</strong>"
  },

  slack: {
    workspace: "Lumio Health",
    channels: [
      { id: "general", name: "général", type: "channel", members: 38 },
      { id: "mission-rh", name: "mission-pulse-horizon", type: "channel", members: 5, special: true },
      { id: "random", name: "random", type: "channel", members: 31 }
    ],
    dms: [
      { id: "theo", name: "Théo Marczak", avatar: "TM", color: "#5c2d8f", status: "online", isCommanditaire: true },
      { id: "sonia", name: "Sonia Ferracci", avatar: "SF", color: "#c4420f", status: "online" },
      { id: "camille", name: "Camille Ott", avatar: "CO", color: "#0a7a6e", status: "online" },
      { id: "yassine", name: "Yassine Morel", avatar: "YM", color: "#1b6b8a", status: "away" }
    ],
    unreads: { "mission-rh": 1, sonia: 1 },
    seed: {
      theo: [
        { from: "Théo Marczak", avatar: "TM", color: "#5c2d8f", time: "08:31", text: "{{PRENOM}} — bien reçu mon mail ? Le board est le 20. Je veux votre reco le 19 au soir, max." },
        { from: "Théo Marczak", avatar: "TM", color: "#5c2d8f", time: "08:32", text: "Une chose : je ne veux pas un diagnostic. Je veux une décision. Si le document ne tranche pas entre les scénarios, il ne me sert à rien." }
      ],
      sonia: [
        { from: "Sonia Ferracci", avatar: "SF", color: "#c4420f", time: "08:40", text: "Salut ! Si tu veux mon angle marque employeur avant de plonger dans les docs, je suis dispo. On a un vrai sujet d'attractivité." },
        { from: "Sonia Ferracci", avatar: "SF", color: "#c4420f", time: "08:41", text: "Mais entre nous : faire de la marque employeur sur des fondations RH qui craquent, c'est mettre du vernis sur du bois pourri. Dis-moi ce que tu en penses." }
      ],
      camille: [
        { from: "Camille Ott", avatar: "CO", color: "#0a7a6e", time: "08:55", text: "Hello 👋 J'ai laissé des mémos vocaux dans ton espace. Les vrais chiffres du terrain, pas ceux des slides. Écoute-les avant de conclure quoi que ce soit sur la croissance." }
      ],
      yassine: [
        { from: "Yassine Morel", avatar: "YM", color: "#1b6b8a", time: "09:10", text: "L'enquête climat de janvier est dure. Si tu veux comprendre pourquoi les gens ne croient plus aux annonces, je peux t'en dire plus." }
      ],
      "mission-rh": [
        { from: "Théo Marczak", avatar: "TM", color: "#5c2d8f", time: "lun. 08:15", text: "J'ai missionné {{PRENOM}} sur la stratégie RH (Pulse Horizon). @sonia @camille @yassine merci de lui ouvrir l'accès à tout ce qui peut aider." },
        { from: "Sonia Ferracci", avatar: "SF", color: "#c4420f", time: "lun. 08:22", text: "Reçu. {{PRENOM}}, je t'ai ajouté sur les canaux utiles, les docs sont dans ton espace partagé." },
        { from: "Jakob Rein", avatar: "JR", color: "#1b3a6b", time: "lun. 09:48", text: "I'll review the final reco. Numbers, dates, an owner. No glossy deck." }
      ],
      general: [
        { from: "lumio-bot", avatar: "🤖", color: "#9a9ea8", time: "08:00", text: "☀️ Bonjour à toutes et tous · 38 personnes connectées ce matin" }
      ]
    }
  },

  slackPrompts: {
    commanditaire: "Tu es Théo Marczak, CEO et fondateur de Lumio Health, medtech parisienne (wearables anti-stress au travail).\n\nTu as missionné un·e consultant·e RH externe ({{PRENOM}}) pour bâtir la stratégie RH avant le board du 20 mars. Tu n'es pas là pour faire le travail à sa place — tu es là pour le mettre à l'épreuve. Chaque hypothèse, tu la testes à l'aune d'une question : est-ce que ça tient devant Jakob Rein et le board ?\n\nCe que tu sais et qui te tracasse :\n- On s'est engagés auprès de Northgate à doubler les effectifs (140 → 280) en 18 mois.\n- Turnover commercial à 34 %, climat social dégradé depuis la restructuration d'octobre (58 % en détresse modérée à élevée).\n- Northgate impose des covenants ESG : parité COMEX (1 femme / 6 aujourd'hui), indicateur QVCT audité, turnover critique < 12 %.\n- Ironie que tu vis mal : on vend la mesure du bien-être et notre propre climat est mauvais.\n- Tu hésites entre consolider d'abord (scénario A) et foncer (scénario B). Tu ne le dis pas spontanément.\n\nTon style :\n- Direct, parfois cassant quand on te répond à côté. Tu ne complimentes pas par politesse.\n- Tu exiges des chiffres, des dates, un porteur. Si on reste vague, tu le pointes.\n- Si on te propose « marque employeur » sans avoir réglé la rétention, tu demandes dans quel ordre et pourquoi.\n- Si on te propose « on fonce », tu demandes ce qu'on fait du climat social et du risque réputationnel.\n- Tu ne joues pas le mentor. Tu évalues.\n\nFormat : 2 à 3 messages courts séparés par \"---SPLIT---\", 1 à 3 phrases chacun, max 150 mots cumulés. Termine par une question précise ou une demande concrète. Ne commence jamais par « Bonjour » ou « Merci ».",
    commanditaireLivrable: "Tu es Théo Marczak, CEO de Lumio Health. Le/la consultant·e vient de te soumettre la stratégie RH attendue pour le board. Tu l'as parcourue. Tu réagis sur Slack en 3 messages maximum séparés par ---SPLIT---. Tu dis franchement si ça tient devant le board et devant Jakob, ou pas. Tu poses la question que Jakob posera jeudi matin si ce document est mis sur la table. 120 mots maximum."
  },

  guide: {
    title: "Lumio Health — Opération Pulse Horizon",
    intro: "Ce guide est là si vous vous sentez bloqué·e. Il ne donne pas les réponses — il indique où chercher.",
    footer: "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du bureau.",
    tips: [
      { day: "J0 · Entrée dans la mission", title: "Par où commencer ?", body: "Théo vous a écrit ce matin. Sa lettre de mission est dans Mail — lisez-la en premier, puis l'email ESG transmis de Jakob Rein.", action: "→ Mail → Email de mission — Théo Marczak" },
      { day: "J+2 · Croiser les sources", title: "Les chiffres se contredisent", body: "Le board présente trois scénarios. L'audit de novembre montre un turnover commercial à 34 %. Camille, en vocal, dit qu'on va perdre deux account managers. L'enquête climat de janvier est mauvaise. Tout ne peut pas être vrai en même temps — c'est le cœur du diagnostic.", action: "→ Aperçu → Audit RH flash · → Mémos vocaux" },
      { day: "J+5 · Passer à l'action", title: "Théo attend une hypothèse", body: "Pas besoin de tout avoir compris pour écrire à Théo sur Slack. Envoyez votre première lecture, même partielle. Il répondra en testant chaque point. Sonia, Camille et Yassine sont aussi en DM.", action: "→ Slack → DM Théo Marczak" },
      { day: "J+8 · Construire", title: "Rédiger la stratégie", body: "L'app Livrable vous attend dans le dock. Couvrez A1 à A4 : dispositif de veille, diagnostic RH, stratégie RH-RSE avec KPI, et trois horizons. Ce n'est pas un résumé de documents — c'est une position défendable devant le board.", action: "→ Dock → Livrable (icône verte)" },
      { day: "En cas de blocage", title: "Tout est dans ces apps", body: "Si vous tournez en rond, ouvrez le Finder → Mission Lumio. Tous les documents y sont. Forcez-vous à écrire : « Le scénario que je recommande est… parce que… ».", action: "→ Finder → Mission Lumio" }
    ]
  },

  desktopIcons: [
    { app: "finder", folder: "mission", label: "Mission Lumio", kind: "folder", x: 36, y: 56 },
    { app: "finder", folder: "portraits", label: "Portraits équipe", kind: "folder", x: 36, y: 174 },
    { app: "mail", label: "Mail.app", kind: "app", x: 36, y: 292 },
    { app: "slack", label: "Slack.app", kind: "app", x: 36, y: 410 },
    { app: "notepad", label: "Mes notes.txt", kind: "app", x: 36, y: 528 }
  ],

  notepad: {
    title: "Mes notes — Opération Pulse Horizon",
    placeholder: "Vos pensées au fil de l'eau pendant que vous lisez le dossier.\n\n▸ Ce qui vous frappe dans l'audit RH\n▸ Les contradictions entre le board, Camille et l'enquête climat\n▸ L'ordre des priorités : consolider ou foncer ?\n▸ Les KPI ESG que Northgate exige\n▸ Votre scénario de recommandation…"
  },

  trash: {
    title: "La corbeille n'est pas vide.",
    body: "Quelqu'un a jeté un fichier qui n'aurait peut-être pas dû l'être.",
    items: [
      { name: "ne_pas_transmettre.msg", icon: "📧", size: "3 Ko", date: "28 févr.", isEgg: true },
      { name: "org_chart_v3.pptx", icon: "📊", size: "1,2 Mo", date: "20 févr.", isEgg: false },
      { name: "grille_salaires_DRAFT.xlsx", icon: "📈", size: "88 Ko", date: "12 févr.", isEgg: false },
      { name: "notes_restructuration_oct.txt", icon: "📝", size: "9 Ko", date: "30 oct.", isEgg: false }
    ],
    egg: {
      contact: "Jakob Rein — Northgate", status: "vu il y a 2h", badge: "ne_pas_transmettre.msg — corbeille", meKey: "theo",
      messages: [
        { id: 1, from: "them", time: "08h14", text: "Théo, j'ai vu votre enquête climat interne. 58 % en détresse. Sur une boîte qui vend du bien-être." },
        { id: 2, from: "theo", time: "08h31", text: "Je sais. On la corrige." },
        { id: 3, from: "them", time: "08h32", text: "Vous ne comprenez pas le problème. Ce n'est pas un sujet RH. C'est un risque de due diligence. Si ça sort pendant le closing, je ne peux pas le défendre devant mes LPs." },
        { id: 4, from: "them", time: "08h33", text: "Et si Sonia lance une campagne marque employeur grand public maintenant, avant que vous ayez réglé l'interne, c'est pire. On vous accusera de mentir." },
        { id: 5, from: "theo", time: "09h02", text: "Je ne peux pas en parler ici." },
        { id: 6, from: "them", time: "09h03", text: "Alors mettez quelqu'un dessus. Vite. Quelqu'un d'externe, qui n'a pas peur de vous dire ce que vos équipes n'osent pas." },
        { id: 7, from: "theo", time: "09h17", text: "C'est en cours." },
        { id: 8, from: "them", time: "09h19", text: "Bien. Numbers, dates, an owner. Et Théo — l'ordre compte. On ne vend pas une marque avant d'avoir réparé la maison." }
      ]
    }
  },

  events: {
    unlockLivrableAfter: 1,
    onSlackExchange: [
      {
        atCount: 2, delay: 2500,
        notif: { app: "Mail", icon: "CO", color: "#0a7a6e", title: "Camille Ott", body: "Je t'ai écrit un mail — des choses que je ne mets pas sur Slack.", click: { app: "mail", props: { openId: "camille_bonus" } } },
        injectBonusEmail: {
          id: "camille_bonus", from: "Camille Ott", fromEmail: "camille.ott@lumio-health.com", avatar: "CO", avatarColor: "#0a7a6e",
          subject: "Ce que je ne mets pas sur Slack", date: "05/03/25 · 09:14", unread: true, tags: ["TERRAIN"],
          body: "{{PRENOM}},\n\nJe préfère te l'écrire par mail.\n\nLe turnover commercial qu'on présente au board (« en amélioration ») est cosmétique : il est calculé sur les seuls contrats récents. Sur l'équipe historique, on est à 34 %, et deux départs sont quasi actés.\n\nCe que personne ne chiffre : si on perd Marc et Inès, on perd ~40 % du portefeuille santé au travail et deux ans de relation client. Aucune projection de croissance ne tient sans eux.\n\nMa conviction : on ne peut pas doubler les effectifs avant d'avoir sécurisé les talents critiques qu'on a déjà. L'ordre n'est pas un détail, c'est toute la stratégie.\n\nÀ toi de décider comment tu l'intègres.\n\nCamille"
        }
      },
      {
        atCount: 3, delay: 1800, unlockNote: "yassine_relance",
        notif: { app: "Notes", icon: "📝", color: "#1b6b8a", title: "Note déposée", body: "Yassine a partagé une note : « Climat social — à ne pas survendre »", click: { app: "notes", props: { openNote: "contexte" } } }
      }
    ],
    onLivrableSubmitted: { app: "Slack", icon: "TM", color: "#5c2d8f", title: "Théo Marczak", body: "J'ai reçu votre stratégie. Je la lis.", click: { app: "slack", props: {} } },
    dayTriggers: [
      { atDay: 19, ttl: 0, notif: { app: "Calendrier", icon: "📅", color: "#c4420f", title: "Deadline reco — ce soir 18h", body: "Le board est demain matin. Dernière fenêtre pour soumettre la stratégie.", click: { app: "livrable", props: {} } } }
    ],
    contextTips: [
      { delay: 180000, title: "Par où commencer ?", body: "Théo vous a écrit ce matin. Sa lettre de mission est dans Mail — commencez par là.", requireNoneOpened: true },
      { delay: 360000, title: "Théo attend une hypothèse", body: "Vous avez lu le brief. Théo attend votre première lecture sur Slack — envoyez-lui quelque chose, même imparfait.", requireOpened: ["mail"], requireNotOpened: ["slack"] },
      { delay: 480000, title: "Envoyez quelque chose", body: "Slack est ouvert. Une phrase suffit pour lancer l'échange avec Théo — ça débloque la suite.", requireOpened: ["slack"], requireSlackSent: false },
      { delay: 600000, title: "L'audit RH est dans Aperçu", body: "Le cabinet a produit un audit flash en novembre. Turnover, absentéisme, parité : des chiffres à croiser.", requireNotOpened: ["pdf"] },
      { delay: 900000, title: "Camille a laissé des vocaux", body: "Ouvrez Mémos vocaux — Camille et Yassine disent des choses que les documents ne montrent pas.", requireNotOpened: ["voice"] },
      { delay: 1200000, title: "Le livrable vous attend", body: "L'app Livrable rebondit dans le dock. A1 à A4 — commencez à construire la stratégie.", requireLivrableUnlocked: true, requireNotOpened: ["livrable"] }
    ],
    ambient: [
      { t: 12000, notif: { app: "Slack", icon: "CO", color: "#0a7a6e", title: "Camille Ott", body: "Si tu veux les vrais chiffres terrain avant de commencer — pas ceux des slides — dis-moi 🙃", click: { app: "slack", props: { openChannel: "camille" } } } },
      { t: 70000, notif: { app: "Calendrier", icon: "📅", color: "#1b3a6b", title: "Board Lumio Health", body: "Jeudi 20 mars à 09:00. Recommandation attendue la veille au soir.", click: { app: "calendar" } } },
      { t: 140000, notif: { app: "Mémos vocaux", icon: "🎙", color: "#c4420f", title: "Mémos vocaux", body: "3 verbatims terrain disponibles — Camille Ott & Yassine Morel.", click: { app: "voice" } } },
      { t: 1200000, notif: { app: "Les Échos", icon: "LE", color: "#1a1a2e", title: "Breaking · Talents medtech", body: "Pénurie de commerciaux santé : +22 % sur les packages en un an.", click: { app: "browser", props: { openTab: "fausse-une" } } } }
    ]
  }
};

window.PAC_CONFIG = {
  "bloc": "BC01",
  "titre": "Élaborer la stratégie RH de son périmètre en responsabilité",
  "epreuve": "Dossier de 20 pages environ (3 parties : dispositif de veille, diagnostic RH et stratégie RH RSE) + Oral 45 minutes (15' présentation + 30' échange)",
  "deadline": "Mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "dispositif": "PAC",
  "note_reflexive": false,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "A1",
      "label": "Pilotage de la veille stratégique RH",
      "rncp": "Veille stratégique RH digitale et réglementaire ; Veille économique, sociale et technologique avec outils IA",
      "placeholder": "Décrivez le dispositif de veille que vous avez conçu pour Lumio Health : quelles sources avez-vous sélectionnées (réglementaires, concurrentielles, technologiques, socio-économiques), quels outils digitaux ou IA avez-vous mobilisés pour automatiser la collecte et l'analyse, et comment avez-vous traduit les signaux faibles en recommandations opérationnelles pour ajuster la politique RH de la medtech ?",
      "min": 400,
      "motsCles": [
        "veille réglementaire",
        "sources primaires et secondaires",
        "automatisation",
        "intelligence artificielle",
        "signaux faibles",
        "benchmarking sectoriel medtech",
        "scénarios prospectifs",
        "recommandations opérationnelles",
        "tableau de bord veille",
        "amélioration continue"
      ],
      "conseil": "Structurez votre dispositif en quatre domaines (réglementaire, concurrentiel, technologique, socio-économique) et nommez explicitement les outils IA utilisés (ex. agrégateurs, NLP, alertes automatisées). Montrez comment chaque signal identifié a débouché sur une préconisation concrète pour Lumio Health, notamment face aux évolutions du droit social dans le secteur medtech et à la pression ESG de Northgate."
    },
    {
      "code": "A2",
      "label": "Management de l'innovation RH",
      "rncp": "Management de l'innovation sociale et organisationnelle ; Méthodes collaboratives et transformation digitale RH",
      "placeholder": "Expliquez comment vous avez intégré les méthodes collaboratives (design thinking, agilité) et les disruptions technologiques dans la stratégie RH de Lumio Health. Quelles démarches participatives avez-vous mises en œuvre pour fédérer les équipes autour de la transformation, notamment dans un contexte de tensions post-restructuration signalé par Yassine Morel ?",
      "min": 350,
      "motsCles": [
        "innovation sociale",
        "design thinking",
        "agilité RH",
        "transformation digitale",
        "démarche participative",
        "adhésion des acteurs",
        "disruption technologique",
        "conduite du changement",
        "co-construction",
        "organisation apprenante"
      ],
      "conseil": "Illustrez par des exemples concrets issus du contexte Lumio Health : ateliers de co-conception avec les équipes B2B et Content, sprints RH, pilotes agiles. Montrez la cohérence entre innovation RH et les objectifs de croissance de Théo Marczak, et expliquez comment vous avez géré la résistance au changement identifiée par Yassine Morel."
    },
    {
      "code": "A3",
      "label": "Conduite d'audit RH",
      "rncp": "Diagnostic stratégique RH et analyse des processus ; Outils d'audit RH et utilisation de data analytics",
      "placeholder": "Présentez le diagnostic stratégique RH que vous avez conduit chez Lumio Health : méthodologie retenue, ressources et processus audités, forces et faiblesses identifiées, données analytics mobilisées, et recommandations formulées pour construire une politique RH adaptée à l'hypercroissance et aux exigences RSE de Northgate.",
      "min": 450,
      "motsCles": [
        "diagnostic stratégique",
        "audit RH",
        "forces et faiblesses",
        "cartographie des processus",
        "data analytics",
        "SIRH",
        "analyse de l'écosystème",
        "indicateurs RH",
        "conformité réglementaire",
        "analyse de matérialité"
      ],
      "conseil": "Utilisez une grille d'audit structurée couvrant au moins cinq processus RH clés (recrutement, formation, performance, QVCT, mobilité). Croisez les données quantitatives (turnover, absentéisme, coût recrutement) avec les données qualitatives (entretiens, focus groups). Intégrez explicitement la dimension RSE et la conformité réglementaire medtech dans votre analyse."
    },
    {
      "code": "A4",
      "label": "Définition et évaluation d'une stratégie RH RSE",
      "rncp": "Stratégie RH responsable et indicateurs clés (KPI) ; RSE et transition écologique en RH ; Priorisation RSE et analyse de matérialité RH ; Gestion des risques RH avec IA prédictive et approche effectuale",
      "placeholder": "Définissez la stratégie RH RSE que vous proposez pour Lumio Health : alignement à la stratégie globale, KPI RH et ESG retenus, dispositif de reporting, analyse de matérialité réalisée, cartographie des parties prenantes, identification et évaluation des risques RH, usage d'outils d'IA prédictive et application de l'approche effectuale pour sécuriser la stratégie dans un contexte d'incertitude lié à l'entrée de Northgate.",
      "min": 500,
      "motsCles": [
        "stratégie RH durable",
        "KPI ESG",
        "reporting RH responsable",
        "analyse de matérialité",
        "parties prenantes",
        "risques RH",
        "IA prédictive",
        "approche effectuale",
        "ODD",
        "transition écologique",
        "inclusion",
        "indicateurs de risque",
        "plans de prévention"
      ],
      "conseil": "Articulez votre stratégie autour de trois horizons temporels (court, moyen, long terme) et reliez chaque KPI à un enjeu identifié dans votre analyse de matérialité. Montrez comment l'IA prédictive vous permet d'anticiper les risques de fuite des talents critiques (notamment commerciaux, signalés par Camille Ott) et comment l'approche effectuale vous permet d'avancer par itérations face à l'incertitude du développement international de Lumio Health."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc BC01 (Manager les Ressources Humaines).\nContexte : Opération Pulse Horizon — Lumio Health face à sa mue stratégique · Mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de définition claire des rôles et responsabilités des acteurs RH impliqués dans la stratégie (DRH, managers, CODIR, partenaires sociaux) et confusion entre niveau stratégique et niveau opérationnel dans le dossier\n- Absence d'indicateurs d'impact mesurables (KPI RH et ESG) permettant d'évaluer la stratégie proposée et de piloter les résultats dans le temps\n- Dispositif de veille réduit à une liste de sources sans méthodologie structurée, sans outillage digital ou IA identifié, et sans traduction des résultats en recommandations opérationnelles\n- Diagnostic RH non étayé par des données quantitatives ou qualitatives issues de l'entreprise fictive, rendant les recommandations stratégiques non fondées et non contextualisées\n- Absence d'analyse de matérialité RSE ou de cartographie des parties prenantes, empêchant toute priorisation des enjeux RH responsables dans la stratégie proposée\n- Stratégie RH déconnectée de la stratégie globale de l'entreprise (hypercroissance, exigences Northgate, transition digitale) et absence de prise en compte des contraintes sectorielles de la medtech\n- Non-identification et non-évaluation des risques RH stratégiques et opérationnels, et absence de tout plan de prévention ou de dispositif de gestion de crise RH\n\nRéponds EXACTEMENT dans ce format :\n### A1 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### A2 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### A3 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### A4 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 1700,
  "noteReflexiveMinMots": 100
};
window.PASS_CONFIG = window.PAC_CONFIG;
