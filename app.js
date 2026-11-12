// ============================================================================
// Explora Medellín — Guía Turística & Recorrido Interactivo Comuna 13
// Idiomas: Español (ES) · English (EN) · Português (PT) · Français (FR)
// ============================================================================

const EXCHANGE_RATES = {
  COP: { rate: 1, symbol: '$', suffix: ' COP' },
  USD: { rate: 1 / 4150, symbol: 'US$', suffix: ' USD' },
  EUR: { rate: 1 / 4450, symbol: '€', suffix: ' EUR' }
};

// ============================================================================
// DATOS INVESTIGADOS EN PROFUNDIDAD: RECORRIDO INTERACTIVO COMUNA 13
// ============================================================================
const C13_TOUR_UI = {
  es: {
    tabLabel: '🎨 Tour Comuna 13 (Interactivo)',
    badgeStyle: '🎧 Experiencia Inmersiva · Estilo Bloomberg Connects, VoiceMap & Smartify',
    mainTitle: 'Recorrido Interactivo Comuna 13: Memoria, Resistencia y Arte Urbano',
    mainSubtitle: 'Ascenso guiado paso a paso (1.530 m → 1.685 m s.n.m.) por las 7 paradas del Graffitour, los 6 tramos de las Escaleras Eléctricas de Las Independencias y el archivo documental del barrio.',
    audioPlay: '🔊 Escuchar Audioguía de la Parada',
    audioStop: '⏹ Detener Audioguía',
    prevStop: '← Anterior',
    nextStop: 'Siguiente Parada →',
    stopWord: 'Parada',
    ofWord: 'de',
    altitudeWord: 'Altitud',
    elevationTitle: 'Perfil de Ascenso: Sendero Independencias (384 m de escaleras eléctricas)',
    elevationGain: '+155 m desnivel · 28 pisos equivalentes',
    quickFacts: [
      { label: 'Inauguración Escaleras', value: '25 dic 2011 (6 tramos)' },
      { label: 'Escalones Reemplazados', value: '350 escalones (35m → 6m)' },
      { label: 'Población Comuna 13', value: '~160.000 habitantes (19 barrios)' },
      { label: 'Creadores Graffitour', value: 'Casa Kolacho & Artistas C13' }
    ],
    protagonistLbl: 'Colectivo / Protagonista Clave',
    muralFocusLbl: 'Hito Visual en esta Parada',
    localQuoteLbl: 'Voz de la Comunidad',
    markVisitedBtn: '✓ Marcar parada como completada',
    visitedBadge: '✓ Parada Completada',
    openTourBtn: '🎧 Iniciar Recorrido Interactivo Comuna 13 (7 Paradas)',
    timelineHeading: 'Archivo Histórico Documental: Las 5 Épocas de la Comuna 13',
    timelineSubheading: 'Investigación basada en informes del Centro Nacional de Memoria Histórica (CNMH), la Comisión de la Verdad y los colectivos de San Javier.',
    muralsHeading: 'Decodificador de Murales: Cómo Leer las Paredes de la Comuna 13',
    muralsSubheading: 'En la Comuna 13 los muros son libros abiertos de historia y antropología visual. Explora el significado oculto de sus obras.',
    artistLbl: 'Artista / Colectivo',
    symbolismLbl: 'Simbología que debes observar'
  },
  en: {
    tabLabel: '🎨 Comuna 13 Tour (Interactive)',
    badgeStyle: '🎧 Immersive Experience · Inspired by Bloomberg Connects, VoiceMap & Smartify',
    mainTitle: 'Comuna 13 Interactive Walking Tour: Memory, Resilience & Street Art',
    mainSubtitle: 'Step-by-step guided ascent (1,530 m → 1,685 m a.s.l.) across the 7 Graffitour stops, the 6 outdoor escalator sections of Las Independencias, and the neighborhood’s living historical archive.',
    audioPlay: '🔊 Listen to Stop Audio Guide',
    audioStop: '⏹ Stop Audio Guide',
    prevStop: '← Previous',
    nextStop: 'Next Stop →',
    stopWord: 'Stop',
    ofWord: 'of',
    altitudeWord: 'Altitude',
    elevationTitle: 'Ascent Profile: Independencias Path (384 m of outdoor escalators)',
    elevationGain: '+155 m elevation gain · 28-story building equivalent',
    quickFacts: [
      { label: 'Escalators Opened', value: 'Dec 25, 2011 (6 sections)' },
      { label: 'Steps Replaced', value: '350 concrete steps (35m → 6m)' },
      { label: 'Comuna 13 Population', value: '~160,000 residents (19 barrios)' },
      { label: 'Graffitour Pioneers', value: 'Casa Kolacho & C13 Artists' }
    ],
    protagonistLbl: 'Key Collective / Protagonist',
    muralFocusLbl: 'Visual Landmark at this Stop',
    localQuoteLbl: 'Community Voice',
    markVisitedBtn: '✓ Mark stop as completed',
    visitedBadge: '✓ Stop Completed',
    openTourBtn: '🎧 Launch Interactive Comuna 13 Tour (7 Stops)',
    timelineHeading: 'Historical Archive: The 5 Eras That Shaped Comuna 13',
    timelineSubheading: 'Documentary research based on Colombia’s National Center for Historical Memory (CNMH), the Truth Commission, and San Javier collectives.',
    muralsHeading: 'Mural Decoder: How to Read the Walls of Comuna 13',
    muralsSubheading: 'In Comuna 13, walls act as ethnographic books. Inspect the deeper meaning and symbols behind the most iconic murals.',
    artistLbl: 'Artist / Collective',
    symbolismLbl: 'Key symbols to look for'
  },
  pt: {
    tabLabel: '🎨 Tour Comuna 13 (Interativo)',
    badgeStyle: '🎧 Experiência Imersiva · Estilo Bloomberg Connects, VoiceMap & Smartify',
    mainTitle: 'Passeio Interativo Comuna 13: Memória, Resistência e Arte Urbana',
    mainSubtitle: 'Subida guiada passo a passo (1.530 m → 1.685 m) pelas 7 paradas do Graffitour, os 6 lances das Escadas Rolantes de Las Independencias e o arquivo histórico vivo do bairro.',
    audioPlay: '🔊 Ouvir Audioguia da Parada',
    audioStop: '⏹ Parar Audioguia',
    prevStop: '← Anterior',
    nextStop: 'Próxima Parada →',
    stopWord: 'Parada',
    ofWord: 'de',
    altitudeWord: 'Altitude',
    elevationTitle: 'Perfil de Subida: Caminho Independencias (384 m de escadas rolantes)',
    elevationGain: '+155 m de desnível · equivalente a 28 andares',
    quickFacts: [
      { label: 'Inauguração Escadas', value: '25 dez 2011 (6 tramos)' },
      { label: 'Degraus Substituídos', value: '350 degraus (35m → 6m)' },
      { label: 'População Comuna 13', value: '~160.000 moradores (19 bairros)' },
      { label: 'Criadores Graffitour', value: 'Casa Kolacho & Artistas C13' }
    ],
    protagonistLbl: 'Coletivo / Protagonista Chave',
    muralFocusLbl: 'Marco Visual nesta Parada',
    localQuoteLbl: 'Voz da Comunidade',
    markVisitedBtn: '✓ Marcar parada como concluída',
    visitedBadge: '✓ Parada Concluída',
    openTourBtn: '🎧 Iniciar Passeio Interativo Comuna 13 (7 Paradas)',
    timelineHeading: 'Arquivo Histórico: As 5 Épocas que Moldaram a Comuna 13',
    timelineSubheading: 'Pesquisa documental baseada no Centro Nacional de Memória Histórica (CNMH), na Comissão da Verdade e nos coletivos de San Javier.',
    muralsHeading: 'Decodificador de Murais: Como Ler as Paredes da Comuna 13',
    muralsSubheading: 'Na Comuna 13 os muros são livros abertos de história e antropologia visual. Descubra o significado de seus símbolos.',
    artistLbl: 'Artista / Coletivo',
    symbolismLbl: 'Simbologia para observar'
  },
  fr: {
    tabLabel: '🎨 Visite Comuna 13 (Interactif)',
    badgeStyle: '🎧 Expérience Immersive · Style Bloomberg Connects, VoiceMap & Smartify',
    mainTitle: 'Parcours Interactif Comuna 13 : Mémoire, Résistance et Street Art',
    mainSubtitle: 'Ascension guidée étape par étape (1 530 m → 1 685 m) à travers les 7 arrêts du Graffitour, les 6 tronçons d’escalators de Las Independencias et les archives historiques du quartier.',
    audioPlay: '🔊 Écouter l’Audioguide de l’Étape',
    audioStop: '⏹ Arrêter l’Audioguide',
    prevStop: '← Précédent',
    nextStop: 'Étape Suivante →',
    stopWord: 'Étape',
    ofWord: 'sur',
    altitudeWord: 'Altitude',
    elevationTitle: 'Profil d’Ascension : Sentier Independencias (384 m d’escalators)',
    elevationGain: '+155 m de dénivelé · équivalent à 28 étages',
    quickFacts: [
      { label: 'Inauguration Escalators', value: '25 déc. 2011 (6 tronçons)' },
      { label: 'Marches Remplacées', value: '350 marches (35 min → 6 min)' },
      { label: 'Population Comuna 13', value: '~160 000 habitants (19 quartiers)' },
      { label: 'Pionniers Graffitour', value: 'Casa Kolacho & Artistes C13' }
    ],
    protagonistLbl: 'Collectif / Acteur Clé',
    muralFocusLbl: 'Repère Visuel à cet Arrêt',
    localQuoteLbl: 'Voix de la Communauté',
    markVisitedBtn: '✓ Marquer l’étape comme terminée',
    visitedBadge: '✓ Étape Terminée',
    openTourBtn: '🎧 Lancer la Visite Interactive Comuna 13 (7 Étapes)',
    timelineHeading: 'Archives Historiques : Les 5 Époques qui ont Façonné la Comuna 13',
    timelineSubheading: 'Recherche documentaire basée sur le Centre National de Mémoire Historique (CNMH), la Commission de la Vérité et les collectifs de San Javier.',
    muralsHeading: 'Décodeur de Fresques : Comment Lire les Murs de la Comuna 13',
    muralsSubheading: 'Dans la Comuna 13, chaque mur est un livre d’histoire à ciel ouvert. Découvrez la signification cachée des œuvres.',
    artistLbl: 'Artiste / Collectif',
    symbolismLbl: 'Symboles clés à observer'
  }
};

// Las 7 Paradas del Recorrido Interactivo de la Comuna 13
const C13_STOPS = [
  {
    step: 1,
    svgX: 55,
    svgY: 260,
    altitude: '1.530 m',
    duration: '15 min',
    i18n: {
      es: {
        title: 'Estación San Javier, Metrocable Línea J y Parque Biblioteca',
        eraTag: 'Puerta de Entrada · Urbanismo Social (2006–2008)',
        narrative: 'El recorrido comienza en la estación terminal San Javier de la Línea B del Metro y el Metrocable Línea J (inaugurado en marzo de 2008). A pocos pasos se levanta el Parque Biblioteca Presbítero José Luis Arroyave (2006), la primera gran obra pública que rompió décadas de aislamiento institucional tras el conflicto armado de principios de los años 2000.',
        protagonist: 'Sistema SITVA & Red de Bibliotecas Públicas de Medellín',
        muralFocus: 'Plazoleta de San Javier y murales de bienvenida a la Comuna 13',
        quote: '«Cuando el Metrocable y la Biblioteca llegaron a San Javier, por primera vez sentimos que el resto de Medellín volteó a mirarnos como ciudadanos y no como zona roja.»'
      },
      en: {
        title: 'San Javier Metro Station, Line J Cable Car & Library Park',
        eraTag: 'Gateway · Social Urbanism (2006–2008)',
        narrative: 'The walk begins at San Javier terminal station (Metro Line B and Metrocable Line J, opened March 2008). Steps away stands the Presbítero José Luis Arroyave Library Park (2006), the first anchor of "Social Urbanism" built to reconnect Comuna 13 with the city after the intense urban conflict of the early 2000s.',
        protagonist: 'SITVA Transit Network & Medellín Public Library System',
        muralFocus: 'San Javier Plaza & Gateway Murals of Comuna 13',
        quote: '"When the Metrocable and Library opened in San Javier, for the first time we felt the rest of Medellín looked at us as citizens rather than a conflict zone."'
      },
      pt: {
        title: 'Estação San Javier, Metrocable Linha J e Parque Biblioteca',
        eraTag: 'Porta de Entrada · Urbanismo Social (2006–2008)',
        narrative: 'O passeio começa na estação final San Javier (Linha B do Metrô e Metrocable Linha J, inaugurado em março de 2008). Ao lado fica o Parque Biblioteca Presbítero José Luis Arroyave (2006), a primeira grande obra pública que rompeu décadas de isolamento institucional após os conflitos do início dos anos 2000.',
        protagonist: 'Sistema SITVA & Rede de Bibliotecas de Medellín',
        muralFocus: 'Praça de San Javier e murais de boas-vindas à Comuna 13',
        quote: '«Quando o Metrocable e a Biblioteca chegaram a San Javier, sentimos pela primeira vez que Medellín nos olhava como cidadãos.»'
      },
      fr: {
        title: 'Station San Javier, Metrocable Ligne J et Parc-Bibliothèque',
        eraTag: 'Porte d’Entrée · Urbanisme Social (2006–2008)',
        narrative: 'Le parcours débute au terminus San Javier (Ligne B du Métro et téléphérique Ligne J, ouvert en mars 2008). À quelques pas se dresse le Parc-Bibliothèque Presbítero José Luis Arroyave (2006), premier pilier de « l’urbanisme social » venu briser des décennies d’isolement après le conflit urbain de 2002.',
        protagonist: 'Réseau SITVA & Bibliothèques Publiques de Medellín',
        muralFocus: 'Esplanade de San Javier et fresques d’accueil',
        quote: '« Quand le téléphérique et la bibliothèque sont arrivés, nous avons enfin senti que Medellín nous regardait comme des citoyens à part entière. »'
      }
    }
  },
  {
    step: 2,
    svgX: 150,
    svgY: 238,
    altitude: '1.555 m',
    duration: '20 min',
    i18n: {
      es: {
        title: 'Cementerio de La América, AgroArte y "Cuerpos Gramaticales"',
        eraTag: 'Memoria Viva · Resistencia Pacífica (2002–Presente)',
        narrative: 'Subiendo hacia La América y San Javier encontramos el territorio sembrado por el colectivo AgroArte (fundado por el líder hip-hop y agrónomo "Aka") junto a las madres de Mujeres Caminando por la Verdad. Frente al dolor de la desaparición forzada y La Escombrera, transformaron los muros del cementerio y las laderas en jardines de plantas medicinales y memoria viva.',
        protagonist: 'Colectivo AgroArte ("Semillas del Futuro") & Mujeres Caminando por la Verdad',
        muralFocus: 'Galería del Cementerio de La América y jardín de plantas de memoria',
        quote: '«Nosotros no sembramos plantas para decorar: sembramos en la tierra para dialogar con la memoria y para que el olvido nunca gane la batalla.» — Colectivo AgroArte'
      },
      en: {
        title: 'La América Cemetery, AgroArte & "Cuerpos Gramaticales"',
        eraTag: 'Living Memory · Peaceful Resistance (2002–Present)',
        narrative: 'Climbing past La América cemetery, you encounter the gardens and murals created by AgroArte (founded by hip-hop artist and community leader "Aka") alongside Mothers of "Mujeres Caminando por la Verdad" (Women Walking for Truth). In response to forced disappearances and the tragedy of La Escombrera, they turned barren corners into medicinal gardens and performative acts of healing known as Cuerpos Gramaticales.',
        protagonist: 'AgroArte Collective & Mujeres Caminando por la Verdad',
        muralFocus: 'La América Memory Wall & Medicinal Botanical Corridor',
        quote: '"We do not plant just to decorate: we sow into the earth to keep memory alive so that oblivion never wins." — AgroArte Collective'
      },
      pt: {
        title: 'Cemitério de La América, AgroArte e "Corpos Gramaticais"',
        eraTag: 'Memória Viva · Resistência Pacífica (2002–Presente)',
        narrative: 'Subindo em direção a San Javier encontramos o território cultivado pelo coletivo AgroArte (fundado pelo líder comunitário "Aka") junto às mães do grupo Mulheres Caminhando pela Verdade. Diante da dor dos desaparecimentos forçados em La Escombrera, transformaram muros e terrenos baldios em hortas medicinais e memoriais vivos.',
        protagonist: 'Coletivo AgroArte & Mulheres Caminhando pela Verdade',
        muralFocus: 'Galeria do Cemitério de La América e jardim de memória',
        quote: '«Não plantamos apenas para enfeitar: semeamos na terra para dialogar com a memória e impedir o esquecimento.» — Coletivo AgroArte'
      },
      fr: {
        title: 'Cimetière de La América, AgroArte et « Corps Grammaticals »',
        eraTag: 'Mémoire Vivante · Résistance Pacifique (2002–Présent)',
        narrative: 'En montant vers San Javier, vous découvrez les jardins cultivés par le collectif AgroArte (fondé par l’artiste hip-hop « Aka ») aux côtés des mères de Mujeres Caminando por la Verdad. Face au drame des disparitions forcées de La Escombrera, ils ont transformé les abords du cimetière en jardins médicinaux et en performances de mémoire (Cuerpos Gramaticales).',
        protagonist: 'Collectif AgroArte & Mujeres Caminando por la Verdad',
        muralFocus: 'Fresques du Cimetière de La América et jardin médicinal',
        quote: '« Nous ne plantons pas pour décorer : nous semons dans la terre pour que l’oubli ne gagne jamais. » — Collectif AgroArte'
      }
    }
  },
  {
    step: 3,
    svgX: 245,
    svgY: 210,
    altitude: '1.580 m',
    duration: '20 min',
    i18n: {
      es: {
        title: 'Barrio Las Independencias, Raíz Afrochocoana y Son Batá',
        eraTag: 'Orígenes (1970–1985) · El Convite y la Herencia del Pacífico',
        narrative: 'Al entrar al barrio Las Independencias I, las calles estrechas recuerdan cómo nació la Comuna 13 entre los años 60 y 80: miles de familias campesinas y afrocolombianas desplazadas del Chocó y Urabá levantaron sus casas en "convites" comunitarios. Aquí nació el colectivo musical Son Batá, que rescató los tambores chocoanos, la chirimía y el hip-hop para arrebatarle los niños al reclutamiento armado.',
        protagonist: 'Corporación Afrocolombiana Son Batá & Fundadores de Las Independencias',
        muralFocus: 'Mural "El Convite" y retratos de la diáspora afrodescendiente en la cancha',
        quote: '«En Las Independencias un tambor y un saxofón hicieron lo que ningún fusil pudo: darle un proyecto de vida y orgullo a cientos de jóvenes afro.» — Son Batá'
      },
      en: {
        title: 'Las Independencias, Afro-Chocó Roots & Son Batá',
        eraTag: 'Origins (1970–1985) · "El Convite" & Pacific Heritage',
        narrative: 'Entering Las Independencias I reveals how Comuna 13 was built between the 1960s and 1980s: displaced rural and Afro-Colombian families from Chocó and Urabá constructed their homes, stairs, and water pipes through communal workdays called "convites". Here, the Afro-Colombian collective Son Batá fused Pacific chirimía drums with hip-hop to shield youth from armed recruitment.',
        protagonist: 'Son Batá Afro-Colombian Collective & Pioneers of Las Independencias',
        muralFocus: '"El Convite" Mural & Afro-Pacific Heritage Portraits',
        quote: '"In Las Independencias, a drum and a saxophone achieved what no rifle ever could: giving pride and a life path to hundreds of youth." — Son Batá'
      },
      pt: {
        title: 'Bairro Las Independencias, Raiz Afro-Chocoana e Son Batá',
        eraTag: 'Origens (1970–1985) · O Mutirão ("Convite") e a Herança do Pacífico',
        narrative: 'Ao entrar em Las Independencias I, vemos como a Comuna 13 nasceu entre os anos 1960 e 1980: famílias camponesas e afro-colombianas vindas do Chocó e Urabá ergueram suas casas em mutirões solidários ("convites"). Aqui nasceu o grupo Son Batá, unindo tambores do Pacífico e hip-hop para proteger os jovens do recrutamento armado.',
        protagonist: 'Corporação Afro-colombiana Son Batá & Moradores de Las Independencias',
        muralFocus: 'Mural "El Convite" e retratos da herança afro-pacífica',
        quote: '«Em Las Independencias, um tambor e um saxofone fizeram o que nenhuma arma pôde: dar orgulho e futuro à juventude.» — Son Batá'
      },
      fr: {
        title: 'Quartier Las Independencias, Racines Afro-Chocó et Son Batá',
        eraTag: 'Origines (1970–1985) · « El Convite » et l’Héritage du Pacifique',
        narrative: 'En entrant dans Las Independencias I, on découvre comment la Comuna 13 s’est construite entre les années 1960 et 1980 : des familles rurales et afro-colombiennes déplacées du Chocó ont bâti leurs maisons lors de corvées solidaires (« convites »). C’est ici qu’est né le collectif Son Batá, mêlant percussions du Pacifique et hip-hop pour protéger les jeunes.',
        protagonist: 'Collectif Afro-colombien Son Batá & Bâtisseurs de Las Independencias',
        muralFocus: 'Fresque « El Convite » et portraits de la diaspora afro-colombienne',
        quote: '« Ici, un tambour et un saxophone ont accompli ce qu’aucune arme n’a pu faire : offrir une fierté et un avenir aux jeunes. » — Son Batá'
      }
    }
  },
  {
    step: 4,
    svgX: 345,
    svgY: 165,
    altitude: '1.615 m',
    duration: '25 min',
    i18n: {
      es: {
        title: 'Escaleras Eléctricas (Tramos 1–2): Operación Mariscal y los Pañuelos Blancos',
        eraTag: '21 Mayo y 16 Oct 2002 · Del Dolor de Mariscal y Orión a la Esperanza',
        narrative: 'Al abordar los dos primeros tramos de las Escaleras Eléctricas (inauguradas el 25 de diciembre de 2011), los muros narran el año más duro de la comuna: 2002. Durante la Operación Mariscal (21 de mayo de 2002), ante la imposibilidad de evacuar a los niños y vecinos heridos por el fuego cruzado, cientos de habitantes agitaron sábanas y pañuelos blancos desde sus techos y callejones en la histórica "Marcha Blanca" por la vida. Meses después, el 16 y 17 de octubre de 2002, ocurrió la Operación Orión.',
        protagonist: 'Comunidad de Las Independencias, 20 de Julio y El Salado',
        muralFocus: 'Mural de la Operación Mariscal y las Sábanas Blancas de la Paz',
        quote: '«Ese 21 de mayo de 2002 rompimos las sábanas blancas de las camas y salimos a la calle gritando que en las casas había niños y vida, no objetivos militares.»'
      },
      en: {
        title: 'Outdoor Escalators (Sections 1–2): Operation Mariscal & the White Cloths',
        eraTag: 'May 21 & Oct 16, 2002 · From Urban Conflict to Collective Courage',
        narrative: 'Stepping onto the first two sections of the outdoor escalators (opened December 25, 2011), the surrounding murals recount the pivotal year 2002. During Operation Mariscal (May 21, 2002), when ambulances could not enter to rescue wounded children amidst hours of crossfire, hundreds of mothers and neighbors waved white bedsheets and handkerchiefs from windows and alleys in a historic plea for a ceasefire. Months later (Oct 16–17, 2002) came Operation Orión.',
        protagonist: 'Mothers and Families of Las Independencias, 20 de Julio & El Salado',
        muralFocus: 'Operation Mariscal Mural & The White Handkerchiefs of Peace',
        quote: '"On May 21, 2002, we tore the white sheets off our beds and stepped into the alleys shouting that our homes held children and life."'
      },
      pt: {
        title: 'Escadas Rolantes (Tramos 1–2): Operação Mariscal e os Lençóis Brancos',
        eraTag: '21 Maio e 16 Out 2002 · Da Dor de Mariscal e Orión à Coragem Civil',
        narrative: 'Ao subir os dois primeiros lances das Escadas Rolantes (inauguradas em 25 de dezembro de 2011), os murais narram o ano decisivo de 2002. Durante a Operação Mariscal (21 de maio de 2002), sem ambulâncias para socorrer crianças feridas no fogo cruzado, centenas de moradores agitaram lençóis e panos brancos nas janelas e vielas exigindo o cessar-fogo. Em outubro de 2002 ocorreu a Operação Orión.',
        protagonist: 'Moradores de Las Independencias, 20 de Julio e El Salado',
        muralFocus: 'Mural da Operação Mariscal e a Marcha dos Lençóis Brancos',
        quote: '«Em 21 de maio de 2002 tiramos os lençóis brancos das camas e saímos agitando-os para salvar a vida dos feridos.»'
      },
      fr: {
        title: 'Escalators (Tronçons 1–2) : Opération Mariscal et les Draps Blancs',
        eraTag: '21 Mai et 16 Oct. 2002 · De l’Épreuve d’Orión au Courage Citoyen',
        narrative: 'En empruntant les deux premiers tronçons des escalators extérieurs (inaugurés le 25 décembre 2011), les fresques racontent l’année charnière 2002. Lors de l’Opération Mariscal (21 mai 2002), alors que les blessés ne pouvaient être évacués sous les tirs, des centaines de mères et d’habitants ont agité des draps et mouchoirs blancs depuis leurs fenêtres pour imposer un cessez-le-feu humanitaire, quelques mois avant l’Opération Orión (octobre 2002).',
        protagonist: 'Familles de Las Independencias, 20 de Julio et El Salado',
        muralFocus: 'Fresque de l’Opération Mariscal et de la Marche Blanche',
        quote: '« Ce 21 mai 2002, nous avons décroché nos draps blancs pour crier que dans nos maisons il y avait des enfants et de la vie. »'
      }
    }
  },
  {
    step: 5,
    svgX: 445,
    svgY: 120,
    altitude: '1.645 m',
    duration: '25 min',
    i18n: {
      es: {
        title: 'Plazoleta Central (Tramos 3–4): Casa Kolacho, Hip-Hop y Breakdance',
        eraTag: '2009–2013 · "Revolución sin Muertos" y Nacimiento del Graffitour',
        narrative: 'En la plazoleta intermedia entre los tramos 3 y 4 late el corazón del Hip-Hop de la Comuna 13. Tras el asesinato del joven rapero y líder comunitario Héctor Pacheco ("Kolacho", integrante del grupo C15) el 24 de agosto de 2009, sus compañeros Jeihhco, El Perro, Medina y artistas de la Red Élite Hip Hop fundaron Casa Kolacho (2013) y crearon el Graffitour bajo el lema de su himno "Revolución sin Muertos". Aquí bailarines de breakdance e improvisadores de freestyle muestran su arte a diario.',
        protagonist: 'Casa Kolacho (Jeihhco, Perro, Medina) & Legado de Héctor "Kolacho" Pacheco',
        muralFocus: 'Retrato de Kolacho, escenario de Breakdance al aire libre y murales de los 4 elementos del Hip-Hop',
        quote: '«A Kolacho nos lo arrebataron las balas en 2009, pero su sueño se multiplicó en miles de niños que hoy empuñan un aerosol o un micrófono.» — Casa Kolacho'
      },
      en: {
        title: 'Central Plaza (Sections 3–4): Casa Kolacho, Hip-Hop & Breakdance',
        eraTag: '2009–2013 · "Revolution Without Dead" & Birth of the Graffitour',
        narrative: 'At the mid-level plaza between escalator sections 3 and 4 beats the heart of Comuna 13’s Hip-Hop movement. After beloved rapper and youth leader Héctor "Kolacho" Pacheco (of the group C15) was murdered on August 24, 2009, his friends Jeihhco, El Perro, Medina, and fellow artists founded the cultural school Casa Kolacho and launched the Graffitour to teach the four elements of Hip-Hop (MCing, DJing, B-boying, and Graffiti).',
        protagonist: 'Casa Kolacho Collective & Legacy of Héctor "Kolacho" Pacheco (C15)',
        muralFocus: 'Kolacho Memorial Mural & Open-Air Breakdance Stage',
        quote: '"Bullets took Kolacho from us in 2009, but his dream multiplied into thousands of kids who now hold a spray can or a microphone." — Casa Kolacho'
      },
      pt: {
        title: 'Praça Central (Tramos 3–4): Casa Kolacho, Hip-Hop e Breakdance',
        eraTag: '2009–2013 · "Revolução sem Mortos" e Criação do Graffitour',
        narrative: 'Na praça intermediária entre os lances 3 e 4 pulsa o coração do Hip-Hop da Comuna 13. Após o assassinato do jovem rapper e líder comunitário Héctor "Kolacho" Pacheco (do grupo C15) em 24 de agosto de 2009, seus amigos Jeihhco, El Perro e Medina fundaram a escola cultural Casa Kolacho e criaram o Graffitour sob o lema "Revolução sem Mortos".',
        protagonist: 'Casa Kolacho (Jeihhco, Perro, Medina) & Legado de "Kolacho"',
        muralFocus: 'Mural em homenagem a Kolacho e palco aberto de Breakdance',
        quote: '«Tiraram a vida de Kolacho em 2009, mas seu sonho se multiplicou em milhares de jovens que hoje seguram um microfone ou spray.» — Casa Kolacho'
      },
      fr: {
        title: 'Esplanade Centrale (Tronçons 3–4) : Casa Kolacho, Hip-Hop et Breakdance',
        eraTag: '2009–2013 · « Révolution sans Morts » et Naissance du Graffitour',
        narrative: 'Sur le palier central entre les tronçons 3 et 4 bat le cœur du mouvement Hip-Hop de la Comuna 13. Après l’assassinat du jeune rappeur et leader Héctor « Kolacho » Pacheco (du groupe C15) le 24 août 2009, ses compagnons Jeihhco, El Perro et Medina ont fondé l’école culturelle Casa Kolacho et créé le Graffitour autour des 4 piliers du Hip-Hop.',
        protagonist: 'Collectif Casa Kolacho & Mémoire d’Héctor « Kolacho » Pacheco',
        muralFocus: 'Fresque hommage à Kolacho et scène ouverte de Breakdance',
        quote: '« Les balles nous ont pris Kolacho en 2009, mais son rêve vit chez des milliers d’enfants qui tiennent aujourd’hui un micro ou un aérosol. » — Casa Kolacho'
      }
    }
  },
  {
    step: 6,
    svgX: 540,
    svgY: 78,
    altitude: '1.665 m',
    duration: '25 min',
    i18n: {
      es: {
        title: 'Tramos 5–6: Galería a Cielo Abierto de Chota 13, Yesgraff y Jomag',
        eraTag: '2012–Presente · Antropología Visual y Muralismo Latinoamericano',
        narrative: 'En los dos últimos tramos de las escaleras eléctricas (que completan los 384 metros de recorrido y equivalen a subir 28 pisos en solo 6 minutos), los muros exhiben las obras maestras de los muralistas nacidos en la comuna como @Chota_13, @YesGraff y @Jomag. Sus trazos combinan elefantes (símbolo de memoria indeleble), grandes ojos expresivos, colibríes y rostros de madres e indígenas.',
        protagonist: 'Muralistas Locales: Chota 13, Yesgraff, Jomag & Apolo 13',
        muralFocus: 'Mural "Nos Estamos Transformando" y "El Elefante de la Memoria" de Chota 13',
        quote: '«Pinto elefantes porque tienen la memoria más larga de la naturaleza: nuestra comunidad jamás olvidará lo que vivió, pero camina firme hacia el futuro.» — Chota 13'
      },
      en: {
        title: 'Sections 5–6: Open-Air Gallery of Chota 13, Yesgraff & Jomag',
        eraTag: '2012–Present · Visual Anthropology & Latin American Muralism',
        narrative: 'Riding the final two escalator sections (completing the 384-meter climb equivalent to a 28-story building in just 6 minutes instead of a grueling 35-minute hike), you pass towering works by homegrown muralists @Chota_13, @YesGraff, and @Jomag. Look closely at their recurring motifs: elephants symbolizing long-term memory, piercing eyes, hummingbirds, and resilient mothers.',
        protagonist: 'Local Muralists: Chota 13, Yesgraff, Jomag & Apolo 13',
        muralFocus: '"We Are Transforming Ourselves" & "The Elephant of Memory" by Chota 13',
        quote: '"I paint elephants because they have the longest memories in nature: our community will never forget what we lived through, yet we walk forward." — Chota 13'
      },
      pt: {
        title: 'Tramos 5–6: Galeria a Céu Aberto de Chota 13, Yesgraff e Jomag',
        eraTag: '2012–Presente · Antropologia Visual e Muralismo Latino-Americano',
        narrative: 'Nos dois últimos lances das escadas rolantes (completando os 384 metros que substituíram 350 degraus íngremes), as paredes exibem obras monumentais de artistas locais como @Chota_13, @YesGraff e @Jomag. Seus murais destacam elefantes (símbolo de memória longa), olhares expressivos, beija-flores e rostos indígenas e afrodescendentes.',
        protagonist: 'Muralistas Locais: Chota 13, Yesgraff, Jomag & Apolo 13',
        muralFocus: 'Mural "Estamos Nos Transformando" e "O Elefante da Memória" de Chota 13',
        quote: '«Pinto elefantes porque têm a memória mais longa da natureza: nossa comunidade jamais esquecerá o que viveu, mas caminha para o futuro.» — Chota 13'
      },
      fr: {
        title: 'Tronçons 5–6 : Galerie à Ciel Ouvert de Chota 13, Yesgraff et Jomag',
        eraTag: '2012–Présent · Anthropologie Visuelle et Muralisme Latino-Américain',
        narrative: 'Sur les deux derniers tronçons des escalators (achevant l’ascension de 384 mètres en 6 minutes au lieu de 35 minutes autrefois), vous admirez les œuvres majeures des artistes locaux @Chota_13, @YesGraff et @Jomag : éléphants symbolisant la mémoire fidèle, grands regards expressifs, colibris et visages de mères.',
        protagonist: 'Muralistes Locaux : Chota 13, Yesgraff, Jomag & Apolo 13',
        muralFocus: 'Fresques « Nous nous transformons » et « L’Éléphant de la Mémoire » de Chota 13',
        quote: '« Je peins des éléphants car ils ont la mémoire la plus longue : notre communauté n’oubliera jamais son passé, mais avance avec force. » — Chota 13'
      }
    }
  },
  {
    step: 7,
    svgX: 615,
    svgY: 55,
    altitude: '1.685 m',
    duration: '30 min',
    i18n: {
      es: {
        title: 'Viaducto Media Ladera, Galerías Neón, Crema de Mango Biche y Mirador 180°',
        eraTag: 'Presente y Futuro · Economía Comunitaria y Sostenibilidad',
        narrative: 'En la cima de las escaleras se abre el sendero peatonal del Viaducto Media Ladera con vista panorámica de 180° sobre el Valle de Aburrá. Aquí cientos de familias han creado su propio ecosistema económico: desde las famosas cremas heladas artesanales de mango biche con limón y sal de Doña Consuelo, hasta galerías de arte neón en 3D, cafés de especialidad y talleres de serigrafía donde los ingresos quedan directamente en las casas del barrio.',
        protagonist: 'Emprendedores Familiares de Las Independencias II y III',
        muralFocus: 'Balcón Mirador del Valle de Aburrá y Galerías Comunitarias de Arte Neón',
        quote: '«Antes nadie podía subir a visitar nuestra cuadra; hoy desde este balcón le compartimos un café y nuestra historia al mundo entero.»'
      },
      en: {
        title: 'Media Ladera Viaduct, Neon Galleries, Mango Biche Popsicles & 180° Viewpoint',
        eraTag: 'Present & Future · Community Economy & Sustainable Tourism',
        narrative: 'At the top of the 6th escalator opens the Media Ladera elevated walkway with a sweeping 180-degree panorama across the Aburrá Valley. Here, local families run a thriving grassroots economy: from Doña Consuelo’s iconic green mango ("mango biche") popsicles with lime and salt, to 3D blacklight neon art galleries, specialty coffee terraces, and screen-printing studios where tourism revenue stays directly with residents.',
        protagonist: 'Family Entrepreneurs of Las Independencias II & III',
        muralFocus: '180° Aburrá Valley Balcony & Community Neon Art Galleries',
        quote: '"Years ago outsiders couldn’t even set foot on our block; today from this balcony we share a coffee and our story with the whole world."'
      },
      pt: {
        title: 'Viaduto Media Ladera, Galerias Neon, Picolé de Manga Verde e Mirante 180°',
        eraTag: 'Presente e Futuro · Economia Comunitária e Sustentabilidade',
        narrative: 'No topo do sexto lance abre-se a passarela do Viaduto Media Ladera com vista panorâmica de 180° sobre o Vale de Aburrá. Aqui as famílias locais criaram uma economia comunitária vibrante: dos famosos picolés artesanais de manga verde ("mango biche") com limão e sal às galerias de arte neon 3D, cafés especiais e ateliês onde a renda fica diretamente com os moradores.',
        protagonist: 'Empreendedores Familiares de Las Independencias II e III',
        muralFocus: 'Varanda Mirante do Vale de Aburrá e Galerias Comunitárias Neon',
        quote: '«Antes ninguém podia subir na nossa rua; hoje, desta varanda, compartilhamos um café e nossa história com o mundo inteiro.»'
      },
      fr: {
        title: 'Viaduc Media Ladera, Galeries Néon, Glaces à la Mangue Verte et Belvédère 180°',
        eraTag: 'Présent et Avenir · Économie Communautaire et Tourisme Durable',
        narrative: 'Au sommet du 6e escalator s’ouvre la promenade du Viaduc Media Ladera offrant un panorama à 180° sur la Vallée d’Aburrá. Les familles du quartier y animent une économie locale florissante : glaces artisanales à la mangue verte (« mango biche ») relevées de citron vert et de sel, galeries d’art néon 3D, terrasses de café de spécialité et ateliers d’artistes.',
        protagonist: 'Familles Entrepreneures de Las Independencias II et III',
        muralFocus: 'Balcon Panoramique à 180° sur la Vallée et Galeries d’Art Néon',
        quote: '« Autrefois personne ne pouvait monter dans notre rue ; aujourd’hui, depuis ce balcon, nous partageons notre café et notre histoire avec le monde entier. »'
      }
    }
  }
];

// Las 5 Épocas Históricas de la Comuna 13 (Línea de Tiempo Documental)
const C13_ERAS = [
  {
    id: 'era1',
    years: '1960 – 1985',
    i18n: {
      es: {
        shortTitle: 'Poblamiento y "El Convite"',
        fullTitle: '1960–1985: Desplazamiento Rural, Raíz Afrochocoana y Autoconstrucción Solidaria',
        body: 'La Comuna 13 (San Javier) se pobló aceleradamente entre las décadas de 1960 y 1980 por familias campesinas y afrodescendientes desplazadas por la violencia bipartidista y el conflicto agrario desde el Chocó, el Urabá antioqueño y el occidente del departamento. Ante la ausencia de servicios públicos en las empinadas laderas de Las Independencias I, II y III, El Salado, Nuevos Conquistadores y 20 de Julio, los propios vecinos organizaron los "convites": jornadas dominicales donde mujeres, hombres y niños abrían trochas, tendían mangueras de agua y fundían escaleras de cemento pasando baldes mano a mano.'
      },
      en: {
        shortTitle: 'Settlement & "El Convite"',
        fullTitle: '1960–1985: Rural Displacement, Afro-Chocó Roots & Communal Self-Building',
        body: 'Comuna 13 (San Javier) grew rapidly between the 1960s and 1980s as rural farming and Afro-Colombian families fled violence in Chocó, Urabá, and western Antioquia. With no state infrastructure on the steep slopes of Las Independencias I, II & III, El Salado, and 20 de Julio, residents organized weekend communal workdays called "convites"—forming human chains to carry sand, lay water pipes, and pour hundreds of concrete steps by hand.'
      },
      pt: {
        shortTitle: 'Povoamento e "O Mutirão"',
        fullTitle: '1960–1985: Êxodo Rural, Raiz Afro-Chocoana e Autoconstrução Solidária',
        body: 'A Comuna 13 (San Javier) foi povoada entre as décadas de 1960 e 1980 por famílias camponesas e afrodescendentes deslocadas do Chocó, Urabá e oeste de Antioquia. Sem apoio estatal nas encostas íngremes de Las Independencias, El Salado e 20 de Julio, os moradores organizaram os "convites" (mutirões comunitários de fim de semana) para construir escadarias, redes de água e casas com as próprias mãos.'
      },
      fr: {
        shortTitle: 'Peuplement et « El Convite »',
        fullTitle: '1960–1985 : Exode Rural, Racines Afro-Chocó et Autoconstruction Solidaire',
        body: 'La Comuna 13 (San Javier) s’est peuplée entre les années 1960 et 1980 de familles paysannes et afro-colombiennes déplacées du Chocó et d’Urabá. Face à l’absence d’infrastructures publiques sur les pentes abruptes de Las Independencias et d’El Salado, les habitants ont organisé les « convites » : des chantiers solidaires dominicaux où femmes, hommes et enfants bâtissaient escaliers, conduites d’eau et maisons à la force des bras.'
      }
    }
  },
  {
    id: 'era2',
    years: '1990 – 2001',
    i18n: {
      es: {
        shortTitle: 'Corredor Estratégico',
        fullTitle: '1990–2001: Disputa Territorial y Fronteras Invisibles en el Occidente',
        body: 'Por su ubicación geográfica en el borde occidental de Medellín —conectando la ciudad con el cañón del río Cauca y la salida al mar de Urabá—, la Comuna 13 se convirtió en un corredor estratégico disputado inicialmente por milicias populares y comandos urbanos de las guerrillas (ELN, FARC y CAP), y posteriormente asediado por bloques paramilitares (Bloque Cacique Nutibara y Bloque Metro). Los barrios quedaron fragmentados por "fronteras invisibles", toques de queda y reclutamiento forzado.'
      },
      en: {
        shortTitle: 'Strategic Corridor',
        fullTitle: '1990–2001: Territorial Dispute & Invisible Borders on the Western Slopes',
        body: 'Because of its strategic location on Medellín’s western rim—connecting the city to the Cauca River canyon and the smuggling routes toward the Gulf of Urabá—Comuna 13 became a contested battleground first controlled by urban militias and guerrilla commands (ELN, FARC, CAP) and later targeted by paramilitary blocs (Bloque Cacique Nutibara). Neighborhoods were fractured by "invisible borders" and daily crossfire.'
      },
      pt: {
        shortTitle: 'Corredor Estratégico',
        fullTitle: '1990–2001: Disputa Territorial e Fronteiras Invisíveis no Oeste',
        body: 'Devido à sua localização estratégica na borda oeste de Medellín — ligando a cidade ao cânion do rio Cauca e à saída para o mar de Urabá —, a Comuna 13 tornou-se um corredor disputado por milícias urbanas, comandos guerrilheiros (ELN, FARC, CAP) e blocos paramilitares (Bloque Cacique Nutibara). Os bairros ficaram divididos por "fronteiras invisíveis".'
      },
      fr: {
        shortTitle: 'Corridor Stratégique',
        fullTitle: '1990–2001 : Dispute Territoriale et Frontières Invisibles à l’Ouest',
        body: 'En raison de sa position stratégique sur le flanc ouest de Medellín — reliant la ville au canyon du fleuve Cauca et au golfe d’Urabá —, la Comuna 13 est devenue un corridor disputé par les milices urbaines, les guérillas (ELN, FARC, CAP) puis les blocs paramilitaires (Bloque Cacique Nutibara), fragmentant les quartiers par des « frontières invisibles ».'
      }
    }
  },
  {
    id: 'era3',
    years: 'Mayo – Oct 2002',
    i18n: {
      es: {
        shortTitle: 'Mariscal y Operación Orión',
        fullTitle: '2002: Las 17 Operaciones Militares, la Marcha Blanca (21 Mayo) y Operación Orión (16 Oct)',
        body: 'En 2002 la Comuna 13 sufrió al menos 17 operativos militares a gran escala. El 21 de mayo de 2002, durante la Operación Mariscal, el fuego cruzado impidió la entrada de ambulancias; cientos de vecinos salieron agitando sábanas y pañuelos blancos en una marcha espontánea que salvó vidas. Entre el 16 y el 17 de octubre de 2002 se ejecutó la Operación Orión (con más de 1.000 efectivos estatales en connivencia documentada con paramilitares), dejando víctimas civiles, detenciones masivas y desapariciones forzadas asociadas a La Escombrera, cuya verdad ha sido defendida por el colectivo Mujeres Caminando por la Verdad.'
      },
      en: {
        shortTitle: 'Mariscal & Operation Orión',
        fullTitle: '2002: 17 Military Operations, The White March (May 21) & Operation Orión (Oct 16–17)',
        body: 'In 2002 alone, Comuna 13 endured 17 military operations. On May 21, 2002, during Operation Mariscal, residents trapped in crossfire with wounded children waved white bedsheets from windows and streets in a courageous spontaneous peace march. On October 16–17, 2002, Operation Orión—the largest urban military operation in Colombian history—was launched, leaving deep scars of civilian casualties, arbitrary detentions, and forced disappearances tied to La Escombrera, tirelessly denounced by "Mujeres Caminando por la Verdad".'
      },
      pt: {
        shortTitle: 'Mariscal e Operação Orión',
        fullTitle: '2002: As 17 Operações Militares, a Marcha Branca (21 Maio) e Operação Orión (16 Out)',
        body: 'Em 2002 a Comuna 13 viveu 17 operações militares. Em 21 de maio de 2002, durante a Operação Mariscal, moradores saíram agitando lençóis brancos sob o fogo cruzado para socorrer feridos. Nos dias 16 e 17 de outubro de 2002 ocorreu a Operação Orión — a maior operação militar urbana da Colômbia —, deixando profundas feridas e desaparecimentos forçados em La Escombrera, cuja memória é defendida pelo grupo Mulheres Caminhando pela Verdade.'
      },
      fr: {
        shortTitle: 'Mariscal et Opération Orión',
        fullTitle: '2002 : Les 17 Opérations Militaires, la Marche Blanche (21 Mai) et l’Opération Orión (16 Oct)',
        body: 'En 2002, la Comuna 13 a subi 17 opérations militaires. Le 21 mai 2002, durant l’Opération Mariscal, les habitants ont agité des draps blancs dans les ruelles pour secourir les blessés. Les 16 et 17 octobre 2002, l’Opération Orión — plus vaste opération militaire urbaine de Colombie — a laissé un lourd tribut de victimes civiles et de disparitions forcées liées à La Escombrera, portées en justice par le collectif Mujeres Caminando por la Verdad.'
      }
    }
  },
  {
    id: 'era4',
    years: '2002 – 2013',
    i18n: {
      es: {
        shortTitle: 'Hip-Hop y Casa Kolacho',
        fullTitle: '2002–2013: "Revolución sin Muertos", Kolacho, Son Batá, AgroArte y el Graffitour',
        body: 'En medio del duelo tras Orión, los jóvenes artistas organizaron el festival "Revolución sin Muertos" y la Red Élite Hip Hop. Aunque el conflicto aún cobró la vida de líderes como el rapero Héctor Pacheco ("Kolacho", de C15) el 24 de agosto de 2009, sus compañeros Jeihhco, El Perro y Medina fundaron la escuela Casa Kolacho (2013) y crearon el Graffitour como ejercicio pedagógico, estético y político. En paralelo, Son Batá consolidó escuelas de música afrochocoana y AgroArte sembró memoria viva.'
      },
      en: {
        shortTitle: 'Hip-Hop & Casa Kolacho',
        fullTitle: '2002–2013: "Revolution Without Dead", Kolacho, Son Batá, AgroArte & the Graffitour',
        body: 'Out of the grief following 2002, young artists organized the "Revolución sin Muertos" festival and the Élite Hip Hop Network. Even after hip-hop leader Héctor "Kolacho" Pacheco (C15) was killed on August 24, 2009, his fellow artists Jeihhco, El Perro, and Medina refused to leave: they founded the Hip-Hop school Casa Kolacho (2013) and created the Graffitour to tell the neighborhood’s story through rap and murals, alongside Son Batá and AgroArte.'
      },
      pt: {
        shortTitle: 'Hip-Hop e Casa Kolacho',
        fullTitle: '2002–2013: "Revolução sem Mortos", Kolacho, Son Batá, AgroArte e o Graffitour',
        body: 'Após 2002, jovens artistas criaram o festival "Revolução sem Mortos" e a Rede Élite Hip Hop. Mesmo após o assassinato do rapper Héctor "Kolacho" Pacheco (C15) em 24 de agosto de 2009, seus amigos Jeihhco, El Perro e Medina fundaram a escola Casa Kolacho (2013) e criaram o Graffitour como ferramenta de educação, memória e arte urbana, ao lado do Son Batá e do AgroArte.'
      },
      fr: {
        shortTitle: 'Hip-Hop et Casa Kolacho',
        fullTitle: '2002–2013 : « Révolution sans Morts », Kolacho, Son Batá, AgroArte et le Graffitour',
        body: 'Après 2002, les jeunes artistes ont lancé le festival « Revolución sin Muertos » et le réseau Élite Hip Hop. Malgré l’assassinat du rappeur Héctor « Kolacho » Pacheco (C15) le 24 août 2009, ses compagnons Jeihhco, El Perro et Medina ont fondé l’école culturelle Casa Kolacho (2013) et créé le Graffitour pour raconter l’histoire du quartier par le graffiti et le rap, aux côtés de Son Batá et d’AgroArte.'
      }
    }
  },
  {
    id: 'era5',
    years: '2011 – Hoy',
    i18n: {
      es: {
        shortTitle: 'Escaleras y Museo Vivo',
        fullTitle: '2011–Presente: Las Escaleras Eléctricas de Las Independencias y el Turismo Comunitario',
        body: 'El 25 de diciembre de 2011 se inauguraron las Escaleras Eléctricas de la Comuna 13 en el Sendero de Conexión Independencias: una obra pública gratuita de 384 metros dividida en 6 tramos dobles cubiertos que reemplazó 350 empinados escalones de concreto (28 pisos de altura), reduciendo el ascenso de 35 a 6 minutos. Al combinarse esta movilidad digna con el Graffitour y los muralistas locales (Chota 13, Yesgraff, Jomag), Las Independencias pasó de ser un territorio estigmatizado a convertirse en el museo a cielo abierto más visitado de Medellín.'
      },
      en: {
        shortTitle: 'Escalators & Living Museum',
        fullTitle: '2011–Present: The Outdoor Escalators of Las Independencias & Community Tourism',
        body: 'On December 25, 2011, Medellín inaugurated the Comuna 13 Outdoor Escalators along the Independencias Connection Path: a 384-meter free public transit system divided into 6 covered dual-direction sections replacing 350 steep steps (28 stories high) and cutting a 35-minute climb to 6 minutes. Combined with the Graffitour and local muralists (Chota 13, Yesgraff, Jomag), Las Independencias transformed from an isolated hillside into Colombia’s most vibrant open-air museum.'
      },
      pt: {
        shortTitle: 'Escadas e Museu Vivo',
        fullTitle: '2011–Presente: As Escadas Rolantes de Las Independencias e o Turismo Comunitário',
        body: 'Em 25 de dezembro de 2011 foram inauguradas as Escadas Rolantes da Comuna 13 no Caminho de Conexão Independencias: 384 metros divididos em 6 lances duplos cobertos que substituíram 350 degraus íngremes (28 andares), reduzindo a subida de 35 para 6 minutos. Unindo mobilidade pública ao Graffitour e aos muralistas locais (Chota 13, Yesgraff, Jomag), o bairro tornou-se o museu a céu aberto mais visitado de Medellín.'
      },
      fr: {
        shortTitle: 'Escalators et Musée Vivant',
        fullTitle: '2011–Présent : Les Escalators de Las Independencias et le Tourisme Communautaire',
        body: 'Le 25 décembre 2011 ont été inaugurés les escalators extérieurs de la Comuna 13 sur le Sentier Independencias : 384 mètres répartis en 6 tronçons doubles couverts remplaçant 350 marches abruptes (28 étages) et réduisant la montée de 35 à 6 minutes. Associée au Graffitour et aux muralistes locaux (Chota 13, Yesgraff, Jomag), cette infrastructure a fait du quartier le musée à ciel ouvert le plus visité de Medellín.'
      }
    }
  }
];

// Decodificador de 6 Murales Emblemáticos de la Comuna 13
const C13_MURALS = [
  {
    id: 'mural-elefante',
    artist: '@Chota_13 (Camilo)',
    locationStep: 6,
    i18n: {
      es: {
        title: 'El Elefante de la Memoria y los Grandes Ojos',
        symbolism: 'El elefante representa el animal con la memoria más larga de la naturaleza: simboliza que la Comuna 13 perdona y se transforma, pero jamás olvida a sus víctimas. Los grandes ojos abiertos expresan que toda la verdad de lo vivido se refleja en la mirada de sus habitantes.'
      },
      en: {
        title: 'The Elephant of Memory & Piercing Eyes',
        symbolism: 'The elephant represents nature’s longest memory: it signifies that Comuna 13 transforms and heals, but never forgets its history. The large expressive eyes reflect Chota 13’s philosophy that no one can hide what they have lived through when you look into their eyes.'
      },
      pt: {
        title: 'O Elefante da Memória e os Grandes Olhos',
        symbolism: 'O elefante representa o animal com a memória mais longa da natureza: simboliza que a Comuna 13 se transforma, mas jamais esquece sua história. Os grandes olhos abertos mostram que toda a experiência vivida entra e se revela pelo olhar.'
      },
      fr: {
        title: 'L’Éléphant de la Mémoire et les Grands Regards',
        symbolism: 'L’éléphant incarne la mémoire la plus longue de la nature : la Comuna 13 se réinvente mais n’oublie jamais son histoire. Les grands yeux rappellent que toute l’expérience vécue par les habitants se lit dans leur regard.'
      }
    }
  },
  {
    id: 'mural-mariscal',
    artist: '@YesGraff & Colectivos de San Javier',
    locationStep: 4,
    i18n: {
      es: {
        title: 'La Marcha de los Pañuelos Blancos (21 de Mayo de 2002)',
        symbolism: 'Retrata a las madres, niños y abuelos agitando sábanas y camisetas blancas desde las ventanas de Las Independencias en medio de la Operación Mariscal, rodeados de palomas, helicópteros que se disuelven en flores y manos que rompen fusiles.'
      },
      en: {
        title: 'The March of the White Handkerchiefs (May 21, 2002)',
        symbolism: 'Depicts mothers, children, and elders waving white bedsheets and shirts from windows during Operation Mariscal to demand a humanitarian ceasefire, surrounded by doves and helicopters dissolving into flowers.'
      },
      pt: {
        title: 'A Marcha dos Lençóis Brancos (21 de Maio de 2002)',
        symbolism: 'Retrata mães, crianças e idosos agitando lençóis e camisetas brancas nas janelas de Las Independencias durante a Operação Mariscal para exigir o cessar-fogo e salvar vidas.'
      },
      fr: {
        title: 'La Marche des Draps Blancs (21 Mai 2002)',
        symbolism: 'Représente les mères, enfants et aînés agitant des draps blancs depuis les fenêtres de Las Independencias lors de l’Opération Mariscal pour réclamer un cessez-le-feu humanitaire.'
      }
    }
  },
  {
    id: 'mural-convite',
    artist: 'Colectivos de Muralismo C13',
    locationStep: 3,
    i18n: {
      es: {
        title: 'El Convite: Manos que Levantaron la Montaña',
        symbolism: 'Homenaje etnográfico a las familias desplazadas del Chocó y del campo antioqueño que construyeron las escaleras, los acueductos comunitarios y las casas de ladrillo rojo mediante el trabajo solidario vecinal ("el convite").'
      },
      en: {
        title: 'El Convite: Hands That Built the Hillside',
        symbolism: 'An ethnographic tribute to the displaced families from Chocó and rural Antioquia who built the original stairs, water lines, and red-brick homes through communal weekend solidarity ("el convite").'
      },
      pt: {
        title: 'El Convite: Mãos que Ergueram a Montanha',
        symbolism: 'Homenagem etnográfica às famílias vindas do Chocó e do interior de Antioquia que construíram as escadarias e casas de tijolo através do trabalho comunitário solidário ("convite").'
      },
      fr: {
        title: 'El Convite : Les Mains qui ont Bâti la Colline',
        symbolism: 'Hommage ethnographique aux familles déplacées du Chocó et des campagnes d’Antioquia qui ont construit les escaliers et les maisons de brique rouge grâce à l’entraide communautaire (« el convite »).'
      }
    }
  },
  {
    id: 'mural-kolacho',
    artist: 'Casa Kolacho (Jeihhco, Perro, Medina & Crew)',
    locationStep: 5,
    i18n: {
      es: {
        title: 'Héctor "Kolacho" Pacheco y los 4 Elementos del Hip-Hop',
        symbolism: 'Inmortaliza la sonrisa de Kolacho (líder del grupo C15 asesinado en 2009) junto a micrófonos, tornamesas, aerosoles y pasos de breakdance, recordando cómo el Hip-Hop se convirtió en escuela de paz y dio origen al Graffitour.'
      },
      en: {
        title: 'Héctor "Kolacho" Pacheco & the 4 Elements of Hip-Hop',
        symbolism: 'Immortalizes the smile of Kolacho (C15 hip-hop leader killed in 2009) alongside microphones, turntables, spray cans, and b-boys, honoring how Hip-Hop became a school of peace and birthed the Graffitour.'
      },
      pt: {
        title: 'Héctor "Kolacho" Pacheco e os 4 Elementos do Hip-Hop',
        symbolism: 'Imortaliza o sorriso de Kolacho (líder do grupo C15 assassinado em 2009) junto a microfones, toca-discos, sprays e breakdance, celebrando o Hip-Hop como escola de paz.'
      },
      fr: {
        title: 'Héctor « Kolacho » Pacheco et les 4 Éléments du Hip-Hop',
        symbolism: 'Immortalise le sourire de Kolacho (leader du groupe C15 assassiné en 2009) entouré de micros, platines, bombes aérosols et danseurs de breakdance, symboles de paix et du Graffitour.'
      }
    }
  },
  {
    id: 'mural-condor',
    artist: '@Jomag, @Apolo13 & Son Batá',
    locationStep: 3,
    i18n: {
      es: {
        title: 'El Cóndor, el Colibrí y la Herencia Afro-Pacífica',
        symbolism: 'El cóndor andino y el colibrí (mensajero de vida y polinizador de esperanza) se entrelazan con rostros de mujeres afrodescendientes con turbantes multicolores y tambores chocoanos.'
      },
      en: {
        title: 'The Andean Condor, Hummingbird & Afro-Pacific Heritage',
        symbolism: 'The Andean condor and the hummingbird (messenger of life and resilience) intertwine with portraits of Afro-Colombian women in vibrant headwraps and traditional Chocó drums.'
      },
      pt: {
        title: 'O Condor, o Beija-Flor e a Herança Afro-Pacífica',
        symbolism: 'O condor andino e o beija-flor (mensageiro da vida e esperança) entrelaçam-se com retratos de mulheres afrodescendentes de turbantes coloridos e tambores do Chocó.'
      },
      fr: {
        title: 'Le Condor, le Colibri et l’Héritage Afro-Pacifique',
        symbolism: 'Le condor des Andes et le colibri (messager de vie et d’espoir) s’entrelacent avec des portraits de femmes afro-colombiennes coiffées de turbans colorés et de tambours du Chocó.'
      }
    }
  },
  {
    id: 'mural-semillas',
    artist: 'Colectivo AgroArte & Mujeres Caminando por la Verdad',
    locationStep: 2,
    i18n: {
      es: {
        title: 'Cuerpos Gramaticales: Sembrar para No Olvidar',
        symbolism: 'Representa cuerpos humanos que brotan como raíces y plantas medicinales desde la tierra de San Javier, en honor a las madres buscadoras de La Escombrera y la acción colectiva de resistencia pacífica.'
      },
      en: {
        title: 'Grammatical Bodies: Sowing So We Never Forget',
        symbolism: 'Depicts human figures sprouting like roots and medicinal plants from the soil of San Javier, honoring the searching mothers of La Escombrera and peaceful grassroots healing.'
      },
      pt: {
        title: 'Corpos Gramaticais: Semear para Não Esquecer',
        symbolism: 'Representa corpos que brotam como raízes e plantas medicinais da terra de San Javier, em homenagem às mães que buscam seus filhos em La Escombrera.'
      },
      fr: {
        title: 'Corps Grammaticals : Semer pour ne Jamais Oublier',
        symbolism: 'Représente des silhouettes humaines prenant racine comme des plantes médicinales dans la terre de San Javier, en hommage aux mères de La Escombrera.'
      }
    }
  }
];

// ============================================================================
// DICCIONARIO GENERAL DE LA APLICACIÓN (4 IDIOMAS)
// ============================================================================
const I18N = {
  es: {
    brandTitle: 'Explora Medellín',
    brandSubtitle: 'Ciudad de la Eterna Primavera · 1.495 m s.n.m. · Valle de Aburrá, Colombia',
    climateBadge: '☀️ <strong>18°C – 28°C</strong> · Eterna Primavera',
    favBtn: '♥ Guardados',
    saveBtn: '♡ Guardar',
    savedBtn: '♥ Guardado',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    tabs: {
      explorar: '🗺️ Destinos & Mapa',
      comuna13: '🎨 Tour Comuna 13 (Interactivo)',
      itinerario: '📅 Mi Itinerario',
      metro: '🚝 Metro & Metrocable',
      cultura: '☕ Gastronomía & Presupuesto'
    },
    mapTitle: 'Mapa Interactivo del Valle de Aburrá y Cercanías',
    mapSubtitle: 'Selecciona cualquier marcador numerado para ver estación del Metro, costos y consejos locales.',
    legendMetro: 'Metro A/B',
    legendCable: 'Metrocable',
    legendSelected: 'Activo',
    svgLabels: {
      west: 'OCCIDENTE (Laderas)',
      north: 'NORTE · Río Medellín',
      south: 'SUR · El Poblado / Envigado',
      east: 'ORIENTE ANTIOQUEÑO'
    },
    valleyStats: [
      { label: 'Altitud Centro', value: '1.495 m s.n.m.' },
      { label: 'Altitud Santa Elena', value: '2.500 m s.n.m.' },
      { label: 'Eje Fluvial', value: 'Río Medellín (S → N)' },
      { label: 'Movilidad', value: 'Tarjeta Cívica SITVA' }
    ],
    categories: {
      all: 'Todos (12)',
      culture: 'Cultura & Arte',
      nature: 'Naturaleza & Miradores',
      neighborhoods: 'Barrios & Vida Local',
      daytrips: 'Excursiones (1 Día)'
    },
    searchPlaceholder: 'Buscar lugar, barrio, estación...',
    costOptions: {
      all: 'Cualquier costo',
      free: 'Entrada gratuita',
      budget: 'Económico (≤ $50.000 COP)'
    },
    freeLabel: 'Gratis',
    hoursUnit: 'h',
    howToArrive: 'Cómo llegar en Metro / Cable',
    budgetAndDuration: 'Presupuesto & Duración',
    highlightsTitle: 'Puntos destacados:',
    localTipTitle: '💡 Consejo Paisa',
    addToDay1: '+ Añadir al Día 1 del Itinerario',
    addedToItin: '✓ Añadido a tu Itinerario',
    viewOnMap: 'Ver en mapa y detalle →',
    noResults: 'No se encontraron destinos con esos filtros.',
    resetFilters: 'Mostrar los 12 destinos',
    itinTitle: 'Planificador de Itinerario Personalizado',
    itinSubtitle: 'Carga una ruta recomendada o añade paradas a medida para organizar tus días en Medellín.',
    presets: {
      '1day': 'Exprés (1 Día)',
      '3days': 'Esencial (3 Días)',
      '5days': 'Inmersión Paisa (5 Días)'
    },
    copyItin: '📋 Copiar Itinerario',
    copiedItin: '✓ ¡Itinerario Copiado!',
    itinMetrics: {
      days: 'Duración del Plan',
      stops: 'Paradas Totales',
      hours: 'Tiempo Activo Est.',
      cost: 'Costo Entradas / Tours'
    },
    dayWord: 'Día',
    daysWord: 'Días',
    stopsWord: 'Lugares',
    addStopLabel: 'Añadir parada:',
    addStopBtn: '+ Agregar al Día',
    removeBtn: 'Quitar',
    emptyDayMsg: 'Sin paradas asignadas. Añade un destino con el selector superior.',
    slots: [
      { id: 'morning', label: 'Mañana (08:30)' },
      { id: 'noon', label: 'Mediodía (12:30)' },
      { id: 'afternoon', label: 'Tarde (15:00)' },
      { id: 'night', label: 'Noche (19:30)' }
    ],
    presetTitles: {
      '1day': ['Medellín Exprés: Lo Imperdible en 24 Horas'],
      '3days': [
        'Centro Histórico, Esculturas de Botero y Comuna 13',
        'Vuelo en Metrocable a Parque Arví, Jardín Botánico y Laureles',
        'Excursión a Guatapé & Piedra del Peñol + Cena en Provenza'
      ],
      '5days': [
        'Centro Patrimonial, Tranvía de Ayacucho y Casa de la Memoria',
        'Arte Urbano en Comuna 13, Pueblito Paisa y Noche en La 70',
        'Naturaleza en Parque Arví y Zona Norte',
        'Gran Excursión a Guatapé y la Piedra del Peñol',
        'Finca Cafetera de Montaña y Despedida en Provenza'
      ]
    },
    metroTitle: 'Simulador de Trayectos en Metro y Metrocable',
    metroSubtitle: 'Descubre cómo conectar entre tu alojamiento y los principales atractivos usando el sistema integrado SITVA.',
    metroOriginLbl: 'Estación de Origen',
    metroDestLbl: 'Destino Turístico',
    metroRouteFrom: 'Ruta desde',
    metroIntegrationNote: 'Integración SITVA',
    metroLinesHeading: 'Líneas Esenciales del Sistema',
    metroTableHeaders: ['Línea', 'Recorrido', 'Atractivos Conectados'],
    metroLinesRows: [
      ['Línea A', 'Niquía ↔ La Estrella', 'El Poblado, Parque Berrío (Botero), Universidad (Explora), Caribe'],
      ['Línea B', 'San Antonio ↔ San Javier', 'Laureles / La 70 (Estadio), Comuna 13 (San Javier)'],
      ['Cables K + L', 'Acevedo → Santo Domingo → Arví', 'Miradores del nororiente y Reserva Parque Arví (Santa Elena)'],
      ['Tranvía T-A', 'San Antonio ↔ Oriente', 'Corredor artístico de Ayacucho y Museo Casa de la Memoria']
    ],
    practicalTitle: 'Guía Práctica: Cultura Metro y Dónde Hospedarse',
    practicalSubtitle: 'Recomendaciones locales de seguridad, clima y elección de barrio.',
    practicalTips: [
      { title: '1. Tarjeta Cívica Eventual', text: 'Adquiérela en cualquier taquilla presentando tu pasaporte o documento para recargar saldo y hacer trasbordos ágiles.' },
      { title: '2. "No dar papaya" (Prevención)', text: 'En el Centro (La Candelaria) evita llevar objetos de valor a la vista y realiza tus recorridos culturales entre las 09:00 y las 17:00.' },
      { title: '3. Conexión Aeropuerto JMC (Rionegro)', text: 'A 35 minutos por el Túnel de Oriente. Buses oficiales 24 horas hacia San Diego (Exposiciones) y taxis regulados.' },
      { title: '4. Empaca por capas', text: 'Ropa fresca para el valle (25°C), paraguas compacto para lluvias pasajeras y chaqueta para subir a Santa Elena (14°C).' }
    ],
    barriosHeading: 'Comparativa de Zonas para Alojarse',
    barriosHeaders: ['Sector', 'Ambiente', 'Caminabilidad', 'Ideal para'],
    barriosRows: [
      ['El Poblado (Provenza/Manila)', 'Cosmopolita, frondoso, gastronómico', 'Media (laderas)', 'Primera visita, hoteles boutique, vida nocturna'],
      ['Laureles / Conquistadores', 'Residencial, parques circulares, auténtico', 'Alta (terreno plano)', 'Cafés de barrio, salsa en La 70, estancias largas'],
      ['Envigado (Buena Mesa)', 'Tradicional, tranquilo, familiar', 'Alta', 'Viajeros que buscan calma y cocina local'],
      ['Ciudad del Río', 'Moderno, museos (MAMM), parques', 'Alta', 'Arte contemporáneo y cercanía a El Poblado']
    ],
    gastroTitle: 'Sabores de Antioquia: Ruta Gastronómica',
    gastroSubtitle: 'Platos típicos imperdibles y precios promedio actualizados a la moneda seleccionada.',
    whereToTry: '📍 Recomendado en:',
    budgetTitle: 'Calculadora de Presupuesto de Viaje',
    budgetSubtitle: 'Ajusta duración, número de viajeros y categoría para estimar el presupuesto total.',
    budgetDaysLbl: 'Días de estadía en Medellín',
    budgetTravelersLbl: 'Número de viajeros',
    personSingular: 'persona',
    personPlural: 'personas',
    budgetStyleLbl: 'Estilo de viaje',
    styles: {
      backpacker: 'Mochilero / Hostal',
      comfort: 'Confort / Boutique',
      luxury: 'Premium / Lujo'
    },
    budgetCats: ['Alojamiento', 'Gastronomía & Cafés', 'Tours & Entradas', 'Transporte (Metro & Taxis)'],
    budgetTotalLbl: 'Total Estimado del Grupo',
    budgetPerDayLbl: 'Promedio por Persona / Día',
    footerText: '<strong>Explora Medellín</strong> — Guía Turística & Recorrido Interactivo Comuna 13, Valle de Aburrá, Colombia (ES · EN · PT · FR).'
  },

  en: {
    brandTitle: 'Explore Medellín',
    brandSubtitle: 'City of Eternal Spring · 1,495 m a.s.l. · Aburrá Valley, Colombia',
    climateBadge: '☀️ <strong>18°C – 28°C</strong> · Eternal Spring',
    favBtn: '♥ Saved',
    saveBtn: '♡ Save',
    savedBtn: '♥ Saved',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    tabs: {
      explorar: '🗺️ Destinations & Map',
      comuna13: '🎨 Comuna 13 Tour (Interactive)',
      itinerario: '📅 My Itinerary',
      metro: '🚝 Metro & Cable Cars',
      cultura: '☕ Food & Budget'
    },
    mapTitle: 'Interactive Map of the Aburrá Valley & Surroundings',
    mapSubtitle: 'Click any numbered pin to inspect its Metro station, entry costs, and local insider tips.',
    legendMetro: 'Metro A/B',
    legendCable: 'Metrocable',
    legendSelected: 'Selected',
    svgLabels: {
      west: 'WEST (Hillsides)',
      north: 'NORTH · Medellín River',
      south: 'SOUTH · El Poblado / Envigado',
      east: 'EASTERN HIGHLANDS'
    },
    valleyStats: [
      { label: 'Valley Altitude', value: '1,495 m (4,905 ft)' },
      { label: 'Santa Elena Highland', value: '2,500 m (8,200 ft)' },
      { label: 'Main Axis', value: 'Medellín River (S → N)' },
      { label: 'Transit Card', value: 'Cívica Card (SITVA)' }
    ],
    categories: {
      all: 'All (12)',
      culture: 'Culture & Art',
      nature: 'Nature & Viewpoints',
      neighborhoods: 'Neighborhoods & Nightlife',
      daytrips: 'Day Trips'
    },
    searchPlaceholder: 'Search place, neighborhood, metro...',
    costOptions: {
      all: 'Any cost',
      free: 'Free admission',
      budget: 'Budget-friendly (≤ $50,000 COP)'
    },
    freeLabel: 'Free',
    hoursUnit: 'h',
    howToArrive: 'How to get there (Metro / Cable)',
    budgetAndDuration: 'Est. Cost & Duration',
    highlightsTitle: 'Top highlights:',
    localTipTitle: '💡 Local Paisa Tip',
    addToDay1: '+ Add to Day 1 of Itinerary',
    addedToItin: '✓ Added to Your Itinerary',
    viewOnMap: 'View on map & details →',
    noResults: 'No destinations match those filters.',
    resetFilters: 'Show all 12 destinations',
    itinTitle: 'Custom Trip Itinerary Builder',
    itinSubtitle: 'Load a curated route or add custom stops to plan your days in Medellín.',
    presets: {
      '1day': 'Express (1 Day)',
      '3days': 'Essential (3 Days)',
      '5days': 'Full Immersion (5 Days)'
    },
    copyItin: '📋 Copy Itinerary',
    copiedItin: '✓ Itinerary Copied!',
    itinMetrics: {
      days: 'Trip Duration',
      stops: 'Total Stops',
      hours: 'Est. Active Time',
      cost: 'Tickets & Tours Cost'
    },
    dayWord: 'Day',
    daysWord: 'Days',
    stopsWord: 'Stops',
    addStopLabel: 'Add a stop:',
    addStopBtn: '+ Add to Day',
    removeBtn: 'Remove',
    emptyDayMsg: 'No stops scheduled yet. Use the selector above to add a destination.',
    slots: [
      { id: 'morning', label: 'Morning (08:30)' },
      { id: 'noon', label: 'Midday (12:30)' },
      { id: 'afternoon', label: 'Afternoon (15:00)' },
      { id: 'night', label: 'Evening (19:30)' }
    ],
    presetTitles: {
      '1day': ['Medellín Express: Must-Sees in 24 Hours'],
      '3days': [
        'Historic Center, Botero Sculptures & Comuna 13',
        'Metrocable to Arví Park, Botanical Garden & Laureles',
        'Guatapé & El Peñol Rock Day Trip + Dinner in Provenza'
      ],
      '5days': [
        'Heritage Downtown, Ayacucho Tram & House of Memory',
        'Street Art in Comuna 13, Pueblito Paisa & La 70 Salsa Night',
        'Cloud Forest at Arví Park & Northern Science District',
        'Full-Day Excursion to Guatapé & El Peñol Rock',
        'High-Altitude Coffee Farm & Farewell Dinner in Provenza'
      ]
    },
    metroTitle: 'Metro & Metrocable Route Simulator',
    metroSubtitle: 'Find out how to connect between your hotel area and major attractions using the SITVA transit network.',
    metroOriginLbl: 'Origin Station / Area',
    metroDestLbl: 'Tourist Destination',
    metroRouteFrom: 'Route from',
    metroIntegrationNote: 'SITVA Integration',
    metroLinesHeading: 'Key Transit Lines for Visitors',
    metroTableHeaders: ['Line', 'Route', 'Connected Attractions'],
    metroLinesRows: [
      ['Line A (Blue)', 'Niquía ↔ La Estrella', 'El Poblado, Parque Berrío (Botero), Universidad (Explora), Caribe'],
      ['Line B (Orange)', 'San Antonio ↔ San Javier', 'Laureles / La 70 (Estadio), Comuna 13 (San Javier)'],
      ['Cables K + L', 'Acevedo → Santo Domingo → Arví', 'Northeast viewpoints & Arví Ecological Park (Santa Elena)'],
      ['Tram T-A', 'San Antonio ↔ Oriente', 'Ayacucho urban art corridor & House of Memory Museum']
    ],
    practicalTitle: 'Practical Guide: "Cultura Metro" & Where to Stay',
    practicalSubtitle: 'Local safety etiquette, packing advice, and neighborhood comparison.',
    practicalTips: [
      { title: '1. Cívica Eventual Transit Card', text: 'Pick one up at any Metro ticket booth with your passport or ID to top up balance and transfer seamlessly across trains, trams, and cable cars.' },
      { title: '2. "No dar papaya" (Street Smarts)', text: 'In Downtown (La Candelaria), keep phones and jewelry tucked away after taking photos, and visit Plaza Botero between 09:00 and 17:00.' },
      { title: '3. JMC International Airport (MDE)', text: 'Located 35 mins away via the Eastern Tunnel. Official 24/7 airport buses stop at San Diego (Exposiciones), plus fixed-rate taxis.' },
      { title: '4. Pack in Layers', text: 'Light breathable clothes for the valley (25°C), a compact umbrella for afternoon showers, and a warm jacket for Arví Park (14°C).' }
    ],
    barriosHeading: 'Where to Stay: Neighborhood Comparison',
    barriosHeaders: ['Neighborhood', 'Vibe', 'Walkability', 'Best For'],
    barriosRows: [
      ['El Poblado (Provenza/Manila)', 'Cosmopolitan, lush, fine dining', 'Medium (hilly)', 'First-timers, boutique hotels, nightlife'],
      ['Laureles / Conquistadores', 'Residential, circular parks, authentic', 'High (flat terrain)', 'Neighborhood cafés, salsa on La 70, longer stays'],
      ['Envigado (Buena Mesa)', 'Traditional, peaceful, family-friendly', 'High', 'Relaxed travelers & traditional cuisine'],
      ['Ciudad del Río', 'Modern, art museum (MAMM), linear parks', 'High', 'Contemporary art lovers near El Poblado']
    ],
    gastroTitle: 'Flavors of Antioquia: Culinary Guide',
    gastroSubtitle: 'Must-try traditional Paisa dishes with reference prices in your selected currency.',
    whereToTry: '📍 Where to try it:',
    budgetTitle: 'Interactive Trip Budget Calculator',
    budgetSubtitle: 'Adjust stay length, travelers, and travel style to estimate your total trip cost.',
    budgetDaysLbl: 'Days in Medellín',
    budgetTravelersLbl: 'Number of travelers',
    personSingular: 'traveler',
    personPlural: 'travelers',
    budgetStyleLbl: 'Travel style',
    styles: {
      backpacker: 'Backpacker / Hostel',
      comfort: 'Comfort / Boutique',
      luxury: 'Premium / Luxury'
    },
    budgetCats: ['Accommodation', 'Dining & Specialty Coffee', 'Tours & Tickets', 'Transit (Metro & Taxis)'],
    budgetTotalLbl: 'Estimated Group Total',
    budgetPerDayLbl: 'Average per Person / Day',
    footerText: '<strong>Explore Medellín</strong> — Interactive Tourism Guide & Comuna 13 Walking Tour, Aburrá Valley, Colombia (ES · EN · PT · FR).'
  },

  pt: {
    brandTitle: 'Explore Medellín',
    brandSubtitle: 'Cidade da Eterna Primavera · 1.495 m · Vale de Aburrá, Colômbia',
    climateBadge: '☀️ <strong>18°C – 28°C</strong> · Eterna Primavera',
    favBtn: '♥ Salvos',
    saveBtn: '♡ Salvar',
    savedBtn: '♥ Salvo',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    tabs: {
      explorar: '🗺️ Destinos & Mapa',
      comuna13: '🎨 Tour Comuna 13 (Interativo)',
      itinerario: '📅 Meu Roteiro',
      metro: '🚝 Metrô & Metrocable',
      cultura: '☕ Gastronomia & Orçamento'
    },
    mapTitle: 'Mapa Interativo do Vale de Aburrá e Arredores',
    mapSubtitle: 'Clique em qualquer marcador numerado para ver a estação de Metrô, custos e dicas locais.',
    legendMetro: 'Metrô A/B',
    legendCable: 'Metrocable',
    legendSelected: 'Ativo',
    svgLabels: {
      west: 'OESTE (Encostas)',
      north: 'NORTE · Rio Medellín',
      south: 'SUL · El Poblado / Envigado',
      east: 'ORIENTE ANTIOQUENHO'
    },
    valleyStats: [
      { label: 'Altitude Centro', value: '1.495 m' },
      { label: 'Altitude Santa Elena', value: '2.500 m' },
      { label: 'Eixo Fluvial', value: 'Rio Medellín (S → N)' },
      { label: 'Mobilidade', value: 'Cartão Cívica SITVA' }
    ],
    categories: {
      all: 'Todos (12)',
      culture: 'Cultura & Arte',
      nature: 'Natureza & Mirantes',
      neighborhoods: 'Bairros & Vida Local',
      daytrips: 'Bate-voltas (1 Dia)'
    },
    searchPlaceholder: 'Buscar lugar, bairro, estação...',
    costOptions: {
      all: 'Qualquer valor',
      free: 'Entrada gratuita',
      budget: 'Econômico (≤ $50.000 COP)'
    },
    freeLabel: 'Grátis',
    hoursUnit: 'h',
    howToArrive: 'Como chegar de Metrô / Teleférico',
    budgetAndDuration: 'Custo Est. & Duração',
    highlightsTitle: 'Destaques imperdíveis:',
    localTipTitle: '💡 Dica Paisa Local',
    addToDay1: '+ Adicionar ao Dia 1 do Roteiro',
    addedToItin: '✓ Adicionado ao Roteiro',
    viewOnMap: 'Ver no mapa e detalhes →',
    noResults: 'Nenhum destino encontrado com esses filtros.',
    resetFilters: 'Mostrar os 12 destinos',
    itinTitle: 'Planejador de Roteiro Personalizado',
    itinSubtitle: 'Carregue um roteiro sugerido ou adicione paradas personalizadas para organizar seus dias.',
    presets: {
      '1day': 'Expresso (1 Dia)',
      '3days': 'Essencial (3 Dias)',
      '5days': 'Imersão Paisa (5 Dias)'
    },
    copyItin: '📋 Copiar Roteiro',
    copiedItin: '✓ Roteiro Copiado!',
    itinMetrics: {
      days: 'Duração do Plano',
      stops: 'Total de Paradas',
      hours: 'Tempo Ativo Est.',
      cost: 'Custo Ingressos / Tours'
    },
    dayWord: 'Dia',
    daysWord: 'Dias',
    stopsWord: 'Lugares',
    addStopLabel: 'Adicionar parada:',
    addStopBtn: '+ Adicionar ao Dia',
    removeBtn: 'Remover',
    emptyDayMsg: 'Nenhuma parada atribuída. Adicione um destino usando o seletor acima.',
    slots: [
      { id: 'morning', label: 'Manhã (08:30)' },
      { id: 'noon', label: 'Meio-dia (12:30)' },
      { id: 'afternoon', label: 'Tarde (15:00)' },
      { id: 'night', label: 'Noite (19:30)' }
    ],
    presetTitles: {
      '1day': ['Medellín Expresso: O Essencial em 24 Horas'],
      '3days': [
        'Centro Histórico, Esculturas de Botero e Comuna 13',
        'Voo de Metrocable ao Parque Arví, Jardim Botânico e Laureles',
        'Bate-volta a Guatapé & Pedra del Peñol + Jantar em Provenza'
      ],
      '5days': [
        'Centro Histórico, VLT de Ayacucho e Museu Casa da Memória',
        'Arte Urbana na Comuna 13, Pueblito Paisa e Noite na La 70',
        'Natureza no Parque Arví e Zona Norte',
        'Grande Excursão a Guatapé e Pedra del Peñol',
        'Fazenda de Café de Montanha e Despedida em Provenza'
      ]
    },
    metroTitle: 'Simulador de Trajetos de Metrô e Metrocable',
    metroSubtitle: 'Descubra como se deslocar entre sua hospedagem e as atrações pelo sistema integrado SITVA.',
    metroOriginLbl: 'Estação de Origem',
    metroDestLbl: 'Destino Turístico',
    metroRouteFrom: 'Rota saindo de',
    metroIntegrationNote: 'Integração SITVA',
    metroLinesHeading: 'Linhas Essenciais para o Viajante',
    metroTableHeaders: ['Linha', 'Trajeto', 'Atrações Conectadas'],
    metroLinesRows: [
      ['Linha A (Azul)', 'Niquía ↔ La Estrella', 'El Poblado, Parque Berrío (Botero), Universidad (Explora), Caribe'],
      ['Linha B (Laranja)', 'San Antonio ↔ San Javier', 'Laureles / La 70 (Estadio), Comuna 13 (San Javier)'],
      ['Teleféricos K + L', 'Acevedo → Santo Domingo → Arví', 'Mirantes do nordeste e Reserva Parque Arví (Santa Elena)'],
      ['Bonde / VLT T-A', 'San Antonio ↔ Oriente', 'Corredor artístico de Ayacucho e Museu Casa da Memória']
    ],
    practicalTitle: 'Guia Prático: Cultura Metrô e Onde Ficar',
    practicalSubtitle: 'Recomendações locais de segurança, clima e escolha de bairro.',
    practicalTips: [
      { title: '1. Cartão Cívica Eventual', text: 'Adquira em qualquer bilheteria do Metrô apresentando seu passaporte ou RG para recarregar créditos e fazer baldeações rápidas.' },
      { title: '2. "No dar papaya" (Prevenção)', text: 'No Centro (La Candelaria), guarde o celular após tirar fotos e prefira visitar a Plaza Botero entre 09:00 e 17:00.' },
      { title: '3. Aeroporto Internacional JMC', text: 'Fica a 35 minutos pelo Túnel do Oriente. Há ônibus oficiais 24h até San Diego (Exposiciones) e táxis tabelados.' },
      { title: '4. Vista-se em camadas', text: 'Roupas leves para o vale (25°C), guarda-chuva compacto para chuvas rápidas e casaco para subir ao Parque Arví (14°C).' }
    ],
    barriosHeading: 'Comparativo de Bairros para Hospedagem',
    barriosHeaders: ['Bairro', 'Ambiente', 'Caminhabilidade', 'Ideal para'],
    barriosRows: [
      ['El Poblado (Provenza/Manila)', 'Cosmopolita, arborizado, alta gastronomia', 'Média (ladeiras)', 'Primeira viagem, hotéis boutique, vida noturna'],
      ['Laureles / Conquistadores', 'Residencial, parques circulares, autêntico', 'Alta (plano)', 'Cafés de bairro, salsa na La 70, estadias longas'],
      ['Envigado (Buena Mesa)', 'Tradicional, tranquilo, familiar', 'Alta', 'Viajantes que buscam sossego e culinária local'],
      ['Ciudad del Río', 'Moderno, museus (MAMM), parques', 'Alta', 'Arte contemporânea e proximidade de El Poblado']
    ],
    gastroTitle: 'Sabores de Antioquia: Rota Gastronômica',
    gastroSubtitle: 'Pratos típicos imperdíveis e preços médios convertidos para a moeda selecionada.',
    whereToTry: '📍 Onde experimentar:',
    budgetTitle: 'Calculadora de Orçamento de Viagem',
    budgetSubtitle: 'Ajuste dias, número de viajantes e estilo para estimar seu investimento total.',
    budgetDaysLbl: 'Dias de estadia em Medellín',
    budgetTravelersLbl: 'Número de viajantes',
    personSingular: 'pessoa',
    personPlural: 'pessoas',
    budgetStyleLbl: 'Estilo de viagem',
    styles: {
      backpacker: 'Mochileiro / Hostel',
      comfort: 'Conforto / Boutique',
      luxury: 'Premium / Luxo'
    },
    budgetCats: ['Hospedagem', 'Gastronomia & Cafés', 'Passeios & Ingressos', 'Transporte (Metrô & Táxis)'],
    budgetTotalLbl: 'Total Estimado do Grupo',
    budgetPerDayLbl: 'Média por Pessoa / Dia',
    footerText: '<strong>Explore Medellín</strong> — Guia Turístico & Passeio Interativo Comuna 13, Vale de Aburrá, Colômbia (ES · EN · PT · FR).'
  },

  fr: {
    brandTitle: 'Explorez Medellín',
    brandSubtitle: 'Ville de l’Éternel Printemps · 1 495 m d’alt. · Vallée d’Aburrá, Colombie',
    climateBadge: '☀️ <strong>18°C – 28°C</strong> · Éternel Printemps',
    favBtn: '♥ Favoris',
    saveBtn: '♡ Sauvegarder',
    savedBtn: '♥ Sauvegardé',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    tabs: {
      explorar: '🗺️ Destinations & Carte',
      comuna13: '🎨 Visite Comuna 13 (Interactif)',
      itinerario: '📅 Mon Itinéraire',
      metro: '🚝 Métro & Téléphérique',
      cultura: '☕ Gastronomie & Budget'
    },
    mapTitle: 'Carte Interactive de la Vallée d’Aburrá et Environs',
    mapSubtitle: 'Cliquez sur un marqueur numéroté pour voir la station de Métro, les tarifs et les conseils locaux.',
    legendMetro: 'Métro A/B',
    legendCable: 'Metrocable',
    legendSelected: 'Sélectionné',
    svgLabels: {
      west: 'OUEST (Collines)',
      north: 'NORD · Rivière Medellín',
      south: 'SUD · El Poblado / Envigado',
      east: 'ORIENT ANTIOQUEÑO'
    },
    valleyStats: [
      { label: 'Altitude Centre', value: '1 495 m' },
      { label: 'Altitude Santa Elena', value: '2 500 m' },
      { label: 'Axe Fluvial', value: 'Rivière Medellín (S → N)' },
      { label: 'Mobilité', value: 'Carte Cívica SITVA' }
    ],
    categories: {
      all: 'Tous (12)',
      culture: 'Culture & Art',
      nature: 'Nature & Belvédères',
      neighborhoods: 'Quartiers & Vie Locale',
      daytrips: 'Excursions (1 Jour)'
    },
    searchPlaceholder: 'Rechercher lieu, quartier, station...',
    costOptions: {
      all: 'Tous les budgets',
      free: 'Entrée gratuite',
      budget: 'Économique (≤ $50 000 COP)'
    },
    freeLabel: 'Gratuit',
    hoursUnit: 'h',
    howToArrive: 'Accès en Métro / Téléphérique',
    budgetAndDuration: 'Coût Est. & Durée',
    highlightsTitle: 'Points forts :',
    localTipTitle: '💡 Conseil Local Paisa',
    addToDay1: '+ Ajouter au Jour 1 de l’Itinéraire',
    addedToItin: '✓ Ajouté à votre Itinéraire',
    viewOnMap: 'Voir sur la carte et détails →',
    noResults: 'Aucune destination ne correspond à ces filtres.',
    resetFilters: 'Afficher les 12 destinations',
    itinTitle: 'Planificateur d’Itinéraire sur Mesure',
    itinSubtitle: 'Chargez un parcours recommandé ou ajoutez des étapes personnalisées jour par jour.',
    presets: {
      '1day': 'Express (1 Jour)',
      '3days': 'Essentiel (3 Jours)',
      '5days': 'Immersion Paisa (5 Jours)'
    },
    copyItin: '📋 Copier l’Itinéraire',
    copiedItin: '✓ Itinéraire Copié !',
    itinMetrics: {
      days: 'Durée du Séjour',
      stops: 'Étapes Totales',
      hours: 'Temps Actif Est.',
      cost: 'Coût Entrées / Visites'
    },
    dayWord: 'Jour',
    daysWord: 'Jours',
    stopsWord: 'Lieux',
    addStopLabel: 'Ajouter une étape :',
    addStopBtn: '+ Ajouter au Jour',
    removeBtn: 'Retirer',
    emptyDayMsg: 'Aucune étape prévue. Utilisez le sélecteur ci-dessus pour ajouter un lieu.',
    slots: [
      { id: 'morning', label: 'Matin (08h30)' },
      { id: 'noon', label: 'Midi (12h30)' },
      { id: 'afternoon', label: 'Après-midi (15h00)' },
      { id: 'night', label: 'Soirée (19h30)' }
    ],
    presetTitles: {
      '1day': ['Medellín Express : Les Incontournables en 24h'],
      '3days': [
        'Centre Historique, Sculptures de Botero et Comuna 13',
        'Survol en Metrocable vers le Parc Arví, Jardin Botanique et Laureles',
        'Excursion à Guatapé & Rocher d’El Peñol + Dîner à Provenza'
      ],
      '5days': [
        'Centre Patrimonial, Tramway d’Ayacucho et Maison de la Mémoire',
        'Street Art dans la Comuna 13, Pueblito Paisa et Soirée Salsa sur La 70',
        'Forêt de Nuages au Parc Arví et Quartier Nord',
        'Grande Excursion à Guatapé et au Rocher d’El Peñol',
        'Ferme Caféière de Montagne et Dîner d’Adieu à Provenza'
      ]
    },
    metroTitle: 'Simulateur de Trajets en Métro et Metrocable',
    metroSubtitle: 'Découvrez comment relier votre hébergement aux sites touristiques via le réseau intégré SITVA.',
    metroOriginLbl: 'Station de Départ',
    metroDestLbl: 'Destination Touristique',
    metroRouteFrom: 'Itinéraire depuis',
    metroIntegrationNote: 'Intégration SITVA',
    metroLinesHeading: 'Lignes Principales pour le Voyageur',
    metroTableHeaders: ['Ligne', 'Parcours', 'Sites Desservis'],
    metroLinesRows: [
      ['Ligne A (Bleue)', 'Niquía ↔ La Estrella', 'El Poblado, Parque Berrío (Botero), Universidad (Explora), Caribe'],
      ['Ligne B (Orange)', 'San Antonio ↔ San Javier', 'Laureles / La 70 (Estadio), Comuna 13 (San Javier)'],
      ['Téléphériques K + L', 'Acevedo → Santo Domingo → Arví', 'Belvédères du nord-est et Réserve du Parc Arví (Santa Elena)'],
      ['Tramway T-A', 'San Antonio ↔ Oriente', 'Corridor artistique d’Ayacucho et Musée Casa de la Memoria']
    ],
    practicalTitle: 'Guide Pratique : « Cultura Metro » & Où Loger',
    practicalSubtitle: 'Conseils de sécurité, météo et comparatif des quartiers.',
    practicalTips: [
      { title: '1. Carte Cívica Eventual', text: 'Disponible à tous les guichets du Métro sur présentation de votre passeport pour recharger et effectuer vos correspondances facilement.' },
      { title: '2. « No dar papaya » (Prudence)', text: 'Dans le Centre (La Candelaria), rangez votre téléphone après vos photos et privilégiez les visites entre 09h00 et 17h00.' },
      { title: '3. Aéroport International JMC', text: 'À 35 min par le Tunnel d’Orient. Navettes officielles 24h/24 vers San Diego (Exposiciones) et taxis à tarif fixe.' },
      { title: '4. S’habiller en couches', text: 'Tenue légère pour la vallée (25°C), parapluie compact et veste chaude pour monter au Parc Arví (14°C).' }
    ],
    barriosHeading: 'Où Loger : Comparatif des Quartiers',
    barriosHeaders: ['Quartier', 'Ambiance', 'Piétonnisation', 'Idéal pour'],
    barriosRows: [
      ['El Poblado (Provenza/Manila)', 'Cosmopolite, verdoyant, gastronomique', 'Moyenne (pentes)', 'Première visite, hôtels-boutiques, vie nocturne'],
      ['Laureles / Conquistadores', 'Résidentiel, parcs circulaires, authentique', 'Élevée (terrain plat)', 'Cafés de quartier, salsa sur La 70, longs séjours'],
      ['Envigado (Buena Mesa)', 'Traditionnel, paisible, familial', 'Élevée', 'Voyageurs en quête de calme et cuisine locale'],
      ['Ciudad del Río', 'Moderne, musée MAMM, parcs linéaires', 'Élevée', 'Amateurs d’art contemporain près d’El Poblado']
    ],
    gastroTitle: 'Saveurs d’Antioquia : Route Gastronomique',
    gastroSubtitle: 'Spécialités culinaires incontournables et prix moyens dans la devise choisie.',
    whereToTry: '📍 Où déguster :',
    budgetTitle: 'Calculateur de Budget de Voyage',
    budgetSubtitle: 'Ajustez la durée, le nombre de voyageurs et le style de séjour pour estimer votre budget.',
    budgetDaysLbl: 'Jours de séjour à Medellín',
    budgetTravelersLbl: 'Nombre de voyageurs',
    personSingular: 'voyageur',
    personPlural: 'voyageurs',
    budgetStyleLbl: 'Style de voyage',
    styles: {
      backpacker: 'Routard / Auberge',
      comfort: 'Confort / Boutique',
      luxury: 'Premium / Luxe'
    },
    budgetCats: ['Hébergement', 'Gastronomie & Cafés', 'Excursions & Entrées', 'Transports (Métro & Taxis)'],
    budgetTotalLbl: 'Total Estimé du Groupe',
    budgetPerDayLbl: 'Moyenne par Personne / Jour',
    footerText: '<strong>Explorez Medellín</strong> — Guide Touristique & Parcours Interactif Comuna 13, Vallée d’Aburrá, Colombie (ES · EN · PT · FR).'
  }
};

// Catálogo de los 12 destinos turísticos
const DESTINATIONS = [
  {
    id: 'comuna13',
    categoryKey: 'culture',
    mapX: 118,
    mapY: 168,
    durationHours: 3.5,
    costCOP: 65000,
    i18n: {
      es: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'Occidente · Comuna 13',
        metro: 'Estación San Javier (Línea B) + Bus integrado 221i',
        costNote: 'Acceso público gratuito a escaleras; tour guiado local recomendado',
        bestTime: 'Mañana (09:00 – 12:00)',
        summary: 'Símbolo mundial de resiliencia urbana y arte comunitario. Sus seis tramos de escaleras eléctricas al aire libre (384 m) conectan miradores, galerías de muralismo hip-hop, Casa Kolacho, Son Batá y AgroArte.',
        highlights: ['Escaleras eléctricas públicas al aire libre de 384 m (6 tramos)', 'Murales sobre la Operación Mariscal (pañuelos blancos) y Orión', 'Escenario de breakdance, Casa Kolacho y helados de mango biche'],
        tip: 'Explora la pestaña "🎨 Tour Comuna 13 (Interactivo)" arriba para hacer el recorrido paso a paso con audioguía y decodificador de murales.'
      },
      en: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'West · Comuna 13',
        metro: 'San Javier Station (Line B) + 221i feeder bus',
        costNote: 'Free public access to escalators; guided local tour recommended',
        bestTime: 'Morning (09:00 – 12:00)',
        summary: 'Global symbol of urban resilience and community art. Six outdoor public escalators (384 m) connect vibrant hip-hop murals, Casa Kolacho, Son Batá, AgroArte, and panoramic viewpoints.',
        highlights: ['384-meter outdoor public escalators (6 sections)', 'Historical murals of Operation Mariscal (white cloths) & Orión', 'Live breakdance shows, Casa Kolacho & mango biche popsicles'],
        tip: 'Open the "🎨 Comuna 13 Tour (Interactive)" tab above for the 7-stop walking guide with audio narration and mural decoder.'
      },
      pt: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'Oeste · Comuna 13',
        metro: 'Estação San Javier (Linha B) + Ônibus integrado 221i',
        costNote: 'Acesso gratuito às escadas; tour guiado local recomendado',
        bestTime: 'Manhã (09:00 – 12:00)',
        summary: 'Símbolo mundial de resiliência urbana e arte comunitária. Seis lances de escadas rolantes ao ar livre (384 m) conectam mirantes, galerias de grafite, Casa Kolacho, Son Batá e AgroArte.',
        highlights: ['Escadas rolantes públicas ao ar livre de 384 m (6 tramos)', 'Murais históricos da Operação Mariscal (lençóis brancos) e Orión', 'Apresentações de breakdance, Casa Kolacho e picolé de manga verde'],
        tip: 'Acesse a aba "🎨 Tour Comuna 13 (Interativo)" acima para fazer o roteiro de 7 paradas com audioguia e decodificador de murais.'
      },
      fr: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'Ouest · Comuna 13',
        metro: 'Station San Javier (Ligne B) + Bus intégré 221i',
        costNote: 'Accès gratuit aux escalators ; visite guidée locale recommandée',
        bestTime: 'Matin (09h00 – 12h00)',
        summary: 'Symbole mondial de résilience urbaine et d’art communautaire. Six escalators extérieurs (384 m) relient des fresques hip-hop, Casa Kolacho, Son Batá, AgroArte et des belvédères.',
        highlights: ['Escalators publics en plein air de 384 m (6 tronçons)', 'Fresques historiques de l’Opération Mariscal (draps blancs) et Orión', 'Spectacles de breakdance, Casa Kolacho et glaces à la mangue verte'],
        tip: 'Ouvrez l’onglet « 🎨 Visite Comuna 13 (Interactif) » ci-dessus pour suivre le parcours en 7 étapes avec audioguide.'
      }
    }
  },
  {
    id: 'plazabotero',
    categoryKey: 'culture',
    mapX: 282,
    mapY: 170,
    durationHours: 3,
    costCOP: 36000,
    i18n: {
      es: {
        name: 'Plaza Botero & Museo de Antioquia',
        zone: 'Centro · La Candelaria',
        metro: 'Estación Parque Berrío (Línea A)',
        costNote: 'Plaza gratuita; entrada al Museo de Antioquia para visitantes',
        bestTime: 'Mañana (09:30 – 13:00)',
        summary: 'Museo al aire libre con 23 esculturas monumentales en bronce donadas por el maestro Fernando Botero, frente al Museo de Antioquia y al Palacio de la Cultura.',
        highlights: ['23 esculturas monumentales de Fernando Botero', 'Salas de Botero y Pedro Nel Gómez en el Museo', 'Cúpula y terraza gratuita en el Palacio de la Cultura'],
        tip: 'Entra al Palacio de la Cultura (edificio gótico junto a la plaza): subir a su terraza mirador es gratis.'
      },
      en: {
        name: 'Plaza Botero & Museum of Antioquia',
        zone: 'Downtown · La Candelaria',
        metro: 'Parque Berrío Station (Line A)',
        costNote: 'Free outdoor plaza; Museum of Antioquia ticket included in estimate',
        bestTime: 'Morning (09:30 – 13:00)',
        summary: 'Open-air museum featuring 23 monumental bronze sculptures donated by master Fernando Botero, flanked by the Museum of Antioquia and the Palace of Culture.',
        highlights: ['23 monumental bronze sculptures by Fernando Botero', 'Permanent Botero & Pedro Nel Gómez galleries', 'Free rooftop dome terrace at the Palace of Culture'],
        tip: 'Step inside the gothic checkered Palace of Culture next door—access to its rooftop terrace is free.'
      },
      pt: {
        name: 'Plaza Botero & Museu de Antioquia',
        zone: 'Centro · La Candelaria',
        metro: 'Estação Parque Berrío (Linha A)',
        costNote: 'Praça gratuita; ingresso para o Museu de Antioquia incluído',
        bestTime: 'Manhã (09:30 – 13:00)',
        summary: 'Museu a céu aberto com 23 esculturas monumentais em bronze doadas por Fernando Botero, em frente ao Museu de Antioquia e ao Palácio da Cultura.',
        highlights: ['23 esculturas em bronze de Fernando Botero', 'Acervo de Botero e Pedro Nel Gómez no Museu', 'Terraço panorâmico gratuito no Palácio da Cultura'],
        tip: 'Entre no Palácio da Cultura (edifício gótico xadrez ao lado da praça): a subida ao terraço é gratuita.'
      },
      fr: {
        name: 'Plaza Botero & Musée d’Antioquia',
        zone: 'Centre · La Candelaria',
        metro: 'Station Parque Berrío (Ligne A)',
        costNote: 'Place gratuite ; billet d’entrée au Musée d’Antioquia inclus',
        bestTime: 'Matin (09h30 – 13h00)',
        summary: 'Musée à ciel ouvert réunissant 23 sculptures monumentales en bronze offertes par Fernando Botero, face au Musée d’Antioquia et au Palais de la Culture.',
        highlights: ['23 sculptures monumentales en bronze de Botero', 'Collections permanentes du Musée d’Antioquia', 'Terrasse panoramique gratuite au Palais de la Culture'],
        tip: 'Entrez dans le Palais de la Culture (bâtiment gothique en damier) : l’accès à sa coupole et sa terrasse est gratuit.'
      }
    }
  },
  {
    id: 'parquearvi',
    categoryKey: 'nature',
    mapX: 505,
    mapY: 78,
    durationHours: 4.5,
    costCOP: 29500,
    i18n: {
      es: {
        name: 'Parque Arví & Santa Elena',
        zone: 'Oriente Alto · 2.500 m s.n.m.',
        metro: 'Acevedo (Línea A) → Cable K (Santo Domingo) → Cable L (Arví)',
        costNote: 'Tarifa del trayecto turístico en Metrocable Línea L',
        bestTime: 'Mañana (09:00 – 14:00) · Cerrado los lunes',
        summary: 'Reserva ecológica de bosque de niebla conectada directamente por el Metrocable Línea L. Cuna de la tradición silletera de Antioquia.',
        highlights: ['Vuelo panorámico de 15 min sobre el bosque en Metrocable', 'Mercado campesino Arví en la estación', 'Senderos ecológicos y fincas silleteras tradicionales'],
        tip: 'Lleva chaqueta abrigada: en Santa Elena la temperatura es unos 10°C más fresca que en el centro.'
      },
      en: {
        name: 'Arví Ecological Park & Santa Elena',
        zone: 'Eastern Highlands · 2,500 m a.s.l.',
        metro: 'Acevedo (Line A) → Cable K (Santo Domingo) → Cable L (Arví)',
        costNote: 'Approximate tourist fare for Metrocable Line L',
        bestTime: 'Morning (09:00 – 14:00) · Closed Mondays',
        summary: 'Cloud-forest nature reserve reached by soaring over the mountain canopy on Metrocable Line L. Heartland of Antioquia’s Silletero flower tradition.',
        highlights: ['15-minute scenic cable car flight over the forest', 'Local farmers’ market at the Arví station plaza', 'Guided forest trails and traditional flower farms'],
        tip: 'Bring a warm jacket: at 2,500 m, Santa Elena is about 10°C cooler than the valley floor.'
      },
      pt: {
        name: 'Parque Arví & Santa Elena',
        zone: 'Oriente Alto · 2.500 m',
        metro: 'Acevedo (Linha A) → Teleférico K → Teleférico L (Arví)',
        costNote: 'Tarifa turística aproximada do Metrocable Linha L',
        bestTime: 'Manhã (09:00 – 14:00) · Fechado às segundas',
        summary: 'Reserva ecológica de floresta nublada conectada pelo Metrocable Linha L. Berço da tradição dos Silleteros (cultivadores de flores).',
        highlights: ['Voo panorâmico de 15 min sobre a floresta de teleférico', 'Feira de produtores locais na chegada da estação', 'Trilhas ecológicas e fazendas tradicionais de flores'],
        tip: 'Leve um agasalho: em Santa Elena a temperatura é cerca de 10°C mais fria que no centro.'
      },
      fr: {
        name: 'Parc Écologique Arví & Santa Elena',
        zone: 'Hauteurs Est · 2 500 m d’alt.',
        metro: 'Acevedo (Ligne A) → Câble K → Câble L (Arví)',
        costNote: 'Tarif touristique du téléphérique Metrocable Ligne L',
        bestTime: 'Matin (09h00 – 14h00) · Fermé le lundi',
        summary: 'Réserve naturelle de forêt de nuages accessible en survolant la canopée avec le Metrocable Ligne L. Berceau de la tradition florale des Silleteros.',
        highlights: ['Survol panoramique de 15 min au-dessus de la forêt', 'Marché paysan à la sortie de la station Arví', 'Sentiers botaniques et fermes florales traditionnelles'],
        tip: 'Prévoyez une veste chaude : à 2 500 m d’altitude, il fait environ 10°C de moins qu’en ville.'
      }
    }
  },
  {
    id: 'jardinbotanico',
    categoryKey: 'nature',
    mapX: 296,
    mapY: 112,
    durationHours: 4,
    costCOP: 0,
    i18n: {
      es: {
        name: 'Jardín Botánico & Parque Explora',
        zone: 'Zona Norte · Carabobo Norte',
        metro: 'Estación Universidad (Línea A)',
        costNote: 'Jardín Botánico gratuito · Parque Explora opcional ($45.000 COP)',
        bestTime: 'Todo el día (09:00 – 16:30)',
        summary: 'Pulmón verde de 14 hectáreas famoso por su Orquideorama arquitectónico en madera, su laguna y su vecindad con el acuario del Parque Explora.',
        highlights: ['Orquideorama arquitectónico y bosque tropical', 'Entrada gratuita al Jardín Botánico', 'Acuario amazónico y museo interactivo en Parque Explora'],
        tip: 'Disfruta un almuerzo o café bajo los árboles en el restaurante In Situ o el Vagón Café.'
      },
      en: {
        name: 'Botanical Garden & Parque Explora',
        zone: 'North District · Carabobo Norte',
        metro: 'Universidad Station (Line A)',
        costNote: 'Free Botanical Garden entry · Parque Explora optional ($45,000 COP)',
        bestTime: 'All day (09:00 – 16:30)',
        summary: 'A 14-hectare green oasis famous for its wooden Honeycomb Orquideorama canopy, tropical lagoon, and neighboring Parque Explora freshwater aquarium.',
        highlights: ['Award-winning Orquideorama wooden structure', 'Free admission to the Botanical Garden', 'Amazonian aquarium and science exhibits next door'],
        tip: 'Great spot for a quiet picnic or lunch inside the garden at In Situ Restaurant.'
      },
      pt: {
        name: 'Jardim Botânico & Parque Explora',
        zone: 'Zona Norte · Carabobo Norte',
        metro: 'Estação Universidad (Linha A)',
        costNote: 'Jardim Botânico gratuito · Parque Explora opcional ($45.000 COP)',
        bestTime: 'Dia todo (09:00 – 16:30)',
        summary: 'Oásis verde de 14 hectares famoso pelo Orquideorama arquitetônico em madeira, lagoa com iguanas e o aquário vizinho do Parque Explora.',
        highlights: ['Orquideorama e coleções de flora tropical', 'Entrada gratuita no Jardim Botânico', 'Aquário amazônico e museu interativo no Parque Explora'],
        tip: 'Ótimo lugar para descansar sob as árvores ou almoçar no restaurante In Situ.'
      },
      fr: {
        name: 'Jardin Botanique & Parque Explora',
        zone: 'Zone Nord · Carabobo Norte',
        metro: 'Station Universidad (Ligne A)',
        costNote: 'Jardin Botanique gratuit · Parque Explora en option ($45 000 COP)',
        bestTime: 'Toute la journée (09h00 – 16h30)',
        summary: 'Oasis verte de 14 hectares célèbre pour son Orquideorama architectural en bois, son lagon aux iguanes et l’aquarium voisin du Parque Explora.',
        highlights: ['Structure architecturale de l’Orquideorama', 'Entrée libre au Jardin Botanique', 'Aquarium amazonien et musée des sciences à proximité'],
        tip: 'Idéal pour déjeuner au calme au restaurant In Situ au cœur du jardin.'
      }
    }
  },
  {
    id: 'provenza',
    categoryKey: 'neighborhoods',
    mapX: 318,
    mapY: 312,
    durationHours: 3.5,
    costCOP: 45000,
    i18n: {
      es: {
        name: 'El Poblado: Provenza & Barrio Manila',
        zone: 'Suroriente · Comuna 14',
        metro: 'Estación Poblado (Línea A) + 12 min a pie',
        costNote: 'Paseo libre; consumo estimado en café de especialidad o cena',
        bestTime: 'Tarde y noche (16:00 – 23:00)',
        summary: 'Calles peatonales arboladas junto a la quebrada La Presidenta donde se concentran cafés de especialidad premiados, diseño local y alta gastronomía.',
        highlights: ['Callejón peatonal de Provenza entre vegetación tropical', 'Cafés de origen y restaurantes en Barrio Manila', 'Parque Lineal La Presidenta'],
        tip: 'Explora primero las calles tranquilas de Manila y Vía Primavera al atardecer antes de subir a Provenza.'
      },
      en: {
        name: 'El Poblado: Provenza & Barrio Manila',
        zone: 'Southeast · Comuna 14',
        metro: 'Poblado Station (Line A) + 12-min walk',
        costNote: 'Free walk; estimated spend for specialty coffee or cocktail',
        bestTime: 'Late afternoon & evening (16:00 – 23:00)',
        summary: 'Lush, tree-lined pedestrian streets along La Presidenta creek featuring award-winning specialty coffee roasters, indie design boutiques, and dining.',
        highlights: ['Provenza pedestrian promenade shaded by tropical trees', 'Specialty coffee bars in Barrio Manila & Vía Primavera', 'La Presidenta Linear Park'],
        tip: 'Start with an afternoon pour-over coffee in Barrio Manila or Vía Primavera before heading up to Provenza.'
      },
      pt: {
        name: 'El Poblado: Provenza & Bairro Manila',
        zone: 'Sudeste · Comuna 14',
        metro: 'Estação Poblado (Linha A) + 12 min a pé',
        costNote: 'Passeio livre; consumo estimado em café especial ou jantar',
        bestTime: 'Fim de tarde e noite (16:00 – 23:00)',
        summary: 'Ruas de pedestres arborizadas junto ao riacho La Presidenta com cafeterias premiadas, lojas de design colombiano e alta gastronomia.',
        highlights: ['Calçadão arborizado de Provenza', 'Cafeterias de origem e bistrôs no Bairro Manila', 'Parque Linear La Presidenta'],
        tip: 'Comece pelo charmoso Bairro Manila ou Vía Primavera no fim da tarde antes de subir para Provenza.'
      },
      fr: {
        name: 'El Poblado : Provenza & Quartier Manila',
        zone: 'Sud-Est · Comuna 14',
        metro: 'Station Poblado (Ligne A) + 12 min à pied',
        costNote: 'Promenade libre ; budget estimé pour un café de spécialité ou verre',
        bestTime: 'Fin d’après-midi et soirée (16h00 – 23h00)',
        summary: 'Rues piétonnes verdoyantes le long du ruisseau La Presidenta réunissant torréfacteurs de spécialité, boutiques de créateurs et tables gastronomiques.',
        highlights: ['Promenade piétonne végétalisée de Provenza', 'Cafés d’origine et restaurants du quartier Manila', 'Parc linéaire La Presidenta'],
        tip: 'Découvrez d’abord les rues paisibles de Manila et Vía Primavera en fin d’après-midi avant de monter à Provenza.'
      }
    }
  },
  {
    id: 'laureles',
    categoryKey: 'neighborhoods',
    mapX: 215,
    mapY: 205,
    durationHours: 3,
    costCOP: 30000,
    i18n: {
      es: {
        name: 'Laureles, Segundo Parque & La 70',
        zone: 'Occidente Central · Comuna 11',
        metro: 'Estación Estadio (Línea B)',
        costNote: 'Recorrido libre; consumo estimado en cafés o bares de salsa',
        bestTime: 'Tarde en Parques de Laureles; noche en La 70',
        summary: 'Barrio plano de trazado circular lleno de almendros, panaderías y cafés tranquilos, conectado con el vibrante corredor salsero y futbolero de La 70.',
        highlights: ['Primer y Segundo Parque de Laureles', 'Unidad Deportiva Atanasio Girardot', 'Bares clásicos de salsa en la carrera 70'],
        tip: 'Ideal para recorrer a pie gracias a sus avenidas circulares completamente planas y sombreadas.'
      },
      en: {
        name: 'Laureles, Segundo Parque & La 70',
        zone: 'Central West · Comuna 11',
        metro: 'Estadio Station (Line B)',
        costNote: 'Free walk; estimated spend at neighborhood cafés or salsa bars',
        bestTime: 'Afternoon in Laureles Parks; evening on La 70',
        summary: 'Flat, leafy neighborhood designed with radial avenues, beloved for its relaxed daytime café culture and the lively salsa and football energy along La 70.',
        highlights: ['Tree-shaded First and Second Parks of Laureles', 'Atanasio Girardot Stadium sports complex', 'Authentic salsa and vallenato bars along Carrera 70'],
        tip: 'One of the best flat neighborhoods in Medellín for a relaxed walking or cycling tour.'
      },
      pt: {
        name: 'Laureles, Segundo Parque & La 70',
        zone: 'Oeste Central · Comuna 11',
        metro: 'Estação Estadio (Linha B)',
        costNote: 'Passeio livre; consumo estimado em cafés ou bares de salsa',
        bestTime: 'Tarde nos Parques de Laureles; noite na La 70',
        summary: 'Bairro plano de traçado circular repleto de árvores, padarias e cafés acolhedores, ligado ao animado corredor musical e futebolístico da Carrera 70.',
        highlights: ['Primeiro e Segundo Parque de Laureles', 'Complexo Esportivo Atanasio Girardot', 'Bares tradicionais de salsa na Carrera 70'],
        tip: 'Perfeito para caminhar sem ladeiras sob a sombra das amendoeiras.'
      },
      fr: {
        name: 'Laureles, Segundo Parque & La 70',
        zone: 'Ouest Central · Comuna 11',
        metro: 'Station Estadio (Ligne B)',
        costNote: 'Balade libre ; consommation estimée dans les cafés ou bars à salsa',
        bestTime: 'Après-midi aux Parcs de Laureles ; soirée sur La 70',
        summary: 'Quartier plat au tracé circulaire arboré d’amandiers, apprécié pour ses cafés conviviaux le jour et l’ambiance salsa et football de l’avenue La 70 le soir.',
        highlights: ['Premier et Deuxième Parcs de Laureles', 'Complexe sportif Atanasio Girardot', 'Bars de salsa traditionnelle sur la Carrera 70'],
        tip: 'Le quartier idéal pour flâner à pied grâce à son relief entièrement plat et ombragé.'
      }
    }
  },
  {
    id: 'pueblitopaisa',
    categoryKey: 'nature',
    mapX: 256,
    mapY: 238,
    durationHours: 2,
    costCOP: 0,
    i18n: {
      es: {
        name: 'Pueblito Paisa & Cerro Nutibara',
        zone: 'Centro-Occidente · Cerro Tutelar',
        metro: 'Estación Exposiciones (Línea A) + ascenso al cerro',
        costNote: 'Acceso gratuito al mirador 360° y senderos ecológicos',
        bestTime: 'Atardecer (16:30 – 18:30)',
        summary: 'En la cima del Cerro Nutibara se levanta la recreación de un pueblo tradicional antioqueño del siglo XIX con mirador de 360° sobre el Valle de Aburrá.',
        highlights: ['Mirador panorámico de 360° sobre toda la ciudad', 'Plaza tradicional con capilla y fondas típicas', 'Senderos ecológicos y esculturas en las laderas'],
        tip: 'Sube a las 17:00 para contemplar el atardecer y ver encenderse las luces del valle.'
      },
      en: {
        name: 'Pueblito Paisa & Nutibara Hill',
        zone: 'Central West · Guardian Hill',
        metro: 'Exposiciones Station (Line A) + short walk/taxi up',
        costNote: 'Free entry to the 360° viewpoint and hill trails',
        bestTime: 'Sunset (16:30 – 18:30)',
        summary: 'Atop Nutibara Hill sits a charming replica of a 19th-century Antioquian village offering the most central 360-degree panoramic view over the Aburrá Valley.',
        highlights: ['360-degree observation deck overlooking Medellín', 'Traditional town square with chapel and artisan stalls', 'Paved nature walking trails and sculpture park'],
        tip: 'Arrive around 17:00 to watch both the daylight mountain views and the city lights coming on at dusk.'
      },
      pt: {
        name: 'Pueblito Paisa & Cerro Nutibara',
        zone: 'Centro-Oeste · Colina Tutelar',
        metro: 'Estação Exposiciones (Linha A) + subida curta',
        costNote: 'Entrada gratuita no mirante 360° e trilhas',
        bestTime: 'Pôr do sol (16:30 – 18:30)',
        summary: 'No topo do Cerro Nutibara fica a réplica de um vilarejo tradicional antioquenho do século XIX com vista panorâmica de 360° sobre o Vale de Aburrá.',
        highlights: ['Mirante 360° sobre todo o vale e montanhas', 'Praça típica com capela, artesanato e doces', 'Trilhas pavimentadas e parque de esculturas'],
        tip: 'Chegue às 17:00 para ver o pôr do sol e as luzes de Medellín se acendendo.'
      },
      fr: {
        name: 'Pueblito Paisa & Colline Nutibara',
        zone: 'Centre-Ouest · Colline Tutélaire',
        metro: 'Station Exposiciones (Ligne A) + montée courte',
        costNote: 'Accès gratuit au belvédère à 360° et aux sentiers',
        bestTime: 'Coucher du soleil (16h30 – 18h30)',
        summary: 'Au sommet de la colline Nutibara se dresse la reconstitution d’un village traditionnel antioqueño du XIXe siècle offrant un panorama à 360° sur la vallée.',
        highlights: ['Vue panoramique à 360° sur Medellín et ses montagnes', 'Place villageoise avec chapelle et artisanat', 'Sentiers écologiques et parc de sculptures'],
        tip: 'Arrivez vers 17h00 pour admirer le coucher du soleil puis le scintillement nocturne de la vallée.'
      }
    }
  },
  {
    id: 'casamemoria',
    categoryKey: 'culture',
    mapX: 358,
    mapY: 185,
    durationHours: 2.5,
    costCOP: 0,
    i18n: {
      es: {
        name: 'Museo Casa de la Memoria & Tranvía',
        zone: 'Centro Oriente · Parque Bicentenario',
        metro: 'Tranvía de Ayacucho (Línea T-A) — Estación Bicentenario',
        costNote: 'Entrada gratuita al museo; solo pagas el pasaje del Tranvía',
        bestTime: 'Mañana o tarde (Martes a Domingo)',
        summary: 'Espacio museográfico interactivo imprescindible para comprender con empatía la historia del conflicto y la reconstrucción social de Medellín.',
        highlights: ['Exposición interactiva sobre memoria y resiliencia', 'Recorrido en el moderno Tranvía de Ayacucho', 'Parque Bicentenario y murales urbanos'],
        tip: 'Continúa en el Tranvía hasta la estación Oriente y sube al Metrocable Línea H sin costo extra.'
      },
      en: {
        name: 'House of Memory Museum & Ayacucho Tram',
        zone: 'East Downtown · Bicentenario Park',
        metro: 'Ayacucho Tram (Line T-A) — Bicentenario Stop',
        costNote: 'Free museum admission; only standard Metro/Tram fare applies',
        bestTime: 'Morning or afternoon (Tuesday to Sunday)',
        summary: 'A moving, interactive museum dedicated to understanding Colombia’s conflict through the voices of victims and Medellín’s social transformation.',
        highlights: ['Interactive multimedia exhibitions on peace & resilience', 'Ride along the mural-lined Ayacucho Tramway', 'Bicentenario Park cultural corridor'],
        tip: 'After the museum, stay on the Tram to Oriente station and ride Metrocable Line H at no extra transfer cost.'
      },
      pt: {
        name: 'Museu Casa da Memória & VLT de Ayacucho',
        zone: 'Centro Leste · Parque Bicentenário',
        metro: 'VLT / Bonde de Ayacucho (Linha T-A) — Estação Bicentenario',
        costNote: 'Entrada gratuita no museu; apenas tarifa normal do Metrô/VLT',
        bestTime: 'Manhã ou tarde (Terça a Domingo)',
        summary: 'Espaço museológico interativo essencial para compreender com profundidade e empatia a história do conflito e a reconstrução social de Medellín.',
        highlights: ['Exposição multimídia sobre memória e paz', 'Passeio pelo corredor de murais do VLT de Ayacucho', 'Parque Bicentenário'],
        tip: 'Continue no VLT até a estação Oriente e suba no Metrocable Linha H sem custo adicional de integração.'
      },
      fr: {
        name: 'Musée Casa de la Memoria & Tramway',
        zone: 'Centre-Est · Parc Bicentenario',
        metro: 'Tramway d’Ayacucho (Ligne T-A) — Arrêt Bicentenario',
        costNote: 'Entrée gratuite au musée ; seul le ticket de tramway est requis',
        bestTime: 'Matin ou après-midi (Mardi au Dimanche)',
        summary: 'Musée interactif poignant et indispensable pour comprendre l’histoire du conflit colombien et la résilience citoyenne de Medellín.',
        highlights: ['Expositions multimédias sur la mémoire et la paix', 'Trajet à bord du tramway d’Ayacucho bordé de fresques', 'Parc culturel Bicentenario'],
        tip: 'Poursuivez en tramway jusqu’au terminus Oriente et prenez le téléphérique Ligne H sans supplément.'
      }
    }
  },
  {
    id: 'salonmalaga',
    categoryKey: 'culture',
    mapX: 286,
    mapY: 192,
    durationHours: 2,
    costCOP: 15000,
    i18n: {
      es: {
        name: 'Salón Málaga & Carabobo Peatonal',
        zone: 'Centro · Estación San Antonio',
        metro: 'Estación San Antonio (Líneas A, B y Tranvía)',
        costNote: 'Entrada libre; consumo de café (tinto) o bebida tradicional',
        bestTime: 'Tarde (15:00 – 19:00)',
        summary: 'Fundado en 1957, el Salón Málaga es patrimonio vivo del tango y el bolero en Medellín, con vitrolas antiguas y fotografías históricas.',
        highlights: ['Vitrolas y vinilos originales de los años 50', 'Paseo peatonal Carabobo y Palacio Nacional', 'Tertulias tangueras tradicionales'],
        tip: 'Pide un café expreso o tinto mientras escuchas sonar los discos clásicos en vinilo.'
      },
      en: {
        name: 'Salón Málaga & Carabobo Promenade',
        zone: 'Downtown · San Antonio Station',
        metro: 'San Antonio Station (Lines A, B & Tram)',
        costNote: 'Free entry; cost of a traditional coffee or local beer',
        bestTime: 'Afternoon (15:00 – 19:00)',
        summary: 'Founded in 1957, Salón Málaga is a living time capsule of Medellín’s deep tango and bolero heritage, filled with vintage jukeboxes and vinyl records.',
        highlights: ['Historic 1950s turntables and 78 RPM vinyl collection', 'Carabobo pedestrian street and Palace Nacional architecture', 'Authentic old-world bohemian atmosphere'],
        tip: 'Stop by in the late afternoon for a "tinto" (black coffee) and classic tango records.'
      },
      pt: {
        name: 'Salón Málaga & Calçadão Carabobo',
        zone: 'Centro · Estação San Antonio',
        metro: 'Estação San Antonio (Linhas A, B e VLT)',
        costNote: 'Entrada franca; consumo de café tradicional ou cerveja',
        bestTime: 'Tarde (15:00 – 19:00)',
        summary: 'Fundado em 1957, o Salón Málaga é um patrimônio vivo do tango e do bolero em Medellín, repleto de vitrolas antigas e fotos históricas.',
        highlights: ['Vitrolas históricas e coleção de vinis dos anos 50', 'Calçadão Carabobo e arquitetura do Palácio Nacional', 'Ambiente boêmio tradicional'],
        tip: 'Peça um café colombiano enquanto ouve clássicos do tango em vinil.'
      },
      fr: {
        name: 'Salón Málaga & Promenade Carabobo',
        zone: 'Centre · Station San Antonio',
        metro: 'Station San Antonio (Lignes A, B et Tramway)',
        costNote: 'Entrée libre ; consommation d’un café ou d’une boisson locale',
        bestTime: 'Après-midi (15h00 – 19h00)',
        summary: 'Fondé en 1957, le Salón Málaga est un sanctuaire vivant du tango et du boléro à Medellín, décoré de tourne-disques anciens et de photographies d’époque.',
        highlights: ['Juke-boxes historiques et collection de vinyles', 'Rue piétonne Carabobo et Palais National', 'Atmosphère bohème authentique des années 1950'],
        tip: 'Commandez un « tinto » (café noir colombien) en écoutant les classiques de Carlos Gardel.'
      }
    }
  },
  {
    id: 'guatape',
    categoryKey: 'daytrips',
    mapX: 605,
    mapY: 148,
    durationHours: 9,
    costCOP: 115000,
    i18n: {
      es: {
        name: 'Guatapé & Piedra del Peñol',
        zone: 'Excursión Oriente · A 80 km de Medellín',
        metro: 'Estación Caribe (Línea A) → Terminal del Norte (Taquilla 9/14)',
        costNote: 'Incluye buses ida/regreso ($40k), subida a la Piedra ($30k) y almuerzo',
        bestTime: 'Salir a las 07:00 desde Terminal del Norte',
        summary: 'El monolito de 220 metros (740 escalones) ofrece una vista inolvidable sobre el embalse, junto al colorido pueblo de Guatapé y sus famosos zócalos.',
        highlights: ['Ascenso de 740 escalones a la Piedra del Peñol', 'Plazoleta de los Zócalos y Calle del Recuerdo', 'Paseo en bote o tuk-tuk por el embalse'],
        tip: 'Ve en bus desde Terminal del Norte (Estación Caribe), bájate primero en La Piedra y luego toma un tuk-tuk al pueblo.'
      },
      en: {
        name: 'Guatapé & El Peñol Rock',
        zone: 'Eastern Day Trip · 80 km from Medellín',
        metro: 'Caribe Station (Line A) → North Bus Terminal (Booth 9/14)',
        costNote: 'Includes round-trip bus ($40k), Rock climb ticket ($30k) & lunch',
        bestTime: 'Depart at 07:00 from North Terminal',
        summary: 'Climb the 740 steps up the 220-meter granite monolith for jaw-dropping lake views, then explore Guatapé’s vibrant streets adorned with hand-painted zócalos.',
        highlights: ['740-step climb to the summit of El Peñol Rock', 'Colorful Plazoleta de los Zócalos in Guatapé', 'Boat cruise and tuk-tuk ride along the reservoir'],
        tip: 'Take the bus from the North Terminal (Caribe Metro station), ask to be dropped off at "La Piedra" first, then hop in a tuk-tuk to town.'
      },
      pt: {
        name: 'Guatapé & Pedra del Peñol',
        zone: 'Bate-volta Leste · A 80 km de Medellín',
        metro: 'Estação Caribe (Linha A) → Terminal Norte (Guichê 9/14)',
        costNote: 'Inclui ônibus ida/volta ($40k), subida na Pedra ($30k) e almoço',
        bestTime: 'Sair às 07:00 do Terminal Norte',
        summary: 'Suba os 740 degraus do monólito de 220 metros para contemplar a represa de ilhas verdes e caminhe pelas ruas coloridas com zócalos em relevo.',
        highlights: ['Subida de 740 degraus até o topo da Pedra del Peñol', 'Praça dos Zócalos e Calle del Recuerdo em Guatapé', 'Passeio de barco e tuk-tuk colorido'],
        tip: 'Pegue o ônibus no Terminal Norte (Estação Caribe), desça primeiro na Pedra e depois vá de tuk-tuk até o centro de Guatapé.'
      },
      fr: {
        name: 'Guatapé & Rocher d’El Peñol',
        zone: 'Excursion Est · À 80 km de Medellín',
        metro: 'Station Caribe (Ligne A) → Terminal Nord (Guichet 9/14)',
        costNote: 'Inclut bus A/R ($40k), montée au Rocher ($30k) et déjeuner',
        bestTime: 'Départ à 07h00 du Terminal Nord',
        summary: 'Gravissez les 740 marches du monolithe de 220 mètres pour un panorama spectaculaire sur la lagune avant de flâner devant les fresques (zócalos) de Guatapé.',
        highlights: ['Ascension des 740 marches de la Piedra del Peñol', 'Place des Zócalos et ruelles colorées de Guatapé', 'Balade en bateau et en tuk-tuk autour du lac'],
        tip: 'Prenez le bus au Terminal Nord (station Caribe), descendez d’abord au pied du Rocher puis rejoignez le village en tuk-tuk.'
      }
    }
  },
  {
    id: 'santafe',
    categoryKey: 'daytrips',
    mapX: 52,
    mapY: 78,
    durationHours: 7.5,
    costCOP: 85000,
    i18n: {
      es: {
        name: 'Santa Fe de Antioquia & Puente de Occidente',
        zone: 'Excursión Occidente · A 55 km',
        metro: 'Estación Caribe (Línea A) → Terminal del Norte',
        costNote: 'Buses ida/vuelta + mototaxi al Puente Colgante de Occidente',
        bestTime: 'Día completo (clima cálido de 30°C)',
        summary: 'Pueblo Patrimonio fundado en 1541, célebre por su arquitectura colonial blanca, talleres de filigrana en oro y el histórico Puente de Occidente.',
        highlights: ['Puente Colgante de Occidente (Monumento Nacional)', 'Calles empedradas y siete iglesias coloniales', 'Dulces de tamarindo y joyería en filigrana'],
        tip: 'A solo 1 hora por el Túnel de Occidente; lleva ropa fresca de verano y sombrero.'
      },
      en: {
        name: 'Santa Fe de Antioquia & Western Bridge',
        zone: 'Western Day Trip · 55 km away',
        metro: 'Caribe Station (Line A) → North Bus Terminal',
        costNote: 'Round-trip bus + tuk-tuk to the historic suspension bridge',
        bestTime: 'Full day (sunny 30°C weather year-round)',
        summary: 'Founded in 1541, this former colonial capital charms visitors with whitewashed streets, gold filigree workshops, and the 1895 Puente de Occidente suspension bridge.',
        highlights: ['291-meter Puente de Occidente suspension bridge over Cauca River', 'Cobblestone streets and seven colonial churches', 'Traditional tamarind sweets and gold filigree jewelry'],
        tip: 'Only 1 hour from Medellín via the Western Tunnel; pack light summer clothing and sunscreen.'
      },
      pt: {
        name: 'Santa Fe de Antioquia & Ponte do Ocidente',
        zone: 'Bate-volta Oeste · A 55 km',
        metro: 'Estação Caribe (Linha A) → Terminal Norte',
        costNote: 'Ônibus ida/volta + tuk-tuk até a Ponte Pênsil do Ocidente',
        bestTime: 'Dia inteiro (clima quente de 30°C)',
        summary: 'Vila colonial fundada em 1541, famosa por suas fachadas brancas, ourivesaria em filigrana e a histórica Ponte do Ocidente sobre o rio Cauca.',
        highlights: ['Ponte Pênsil do Ocidente (Monumento Nacional de 1895)', 'Ruas de pedra e sete igrejas coloniais', 'Doces de tamarindo e joias artesanais em filigrana'],
        tip: 'Apenas 1 hora de viagem pelo Túnel do Ocidente; leve roupas leves de verão.'
      },
      fr: {
        name: 'Santa Fe de Antioquia & Pont d’Occident',
        zone: 'Excursion Ouest · À 55 km',
        metro: 'Station Caribe (Ligne A) → Terminal Nord',
        costNote: 'Bus A/R + tuk-tuk vers le pont suspendu historique',
        bestTime: 'Journée complète (climat chaud à 30°C)',
        summary: 'Ancienne capitale coloniale fondée en 1541, réputée pour ses façades blanches, son orfèvrerie en filigrane et le majestueux Pont d’Occident sur le fleuve Cauca.',
        highlights: ['Pont suspendu d’Occident (291 m, bâti en 1895)', 'Ruelles pavées et sept églises coloniales', 'Confiseries au tamarin et bijoux en filigrane'],
        tip: 'À seulement 1 heure de route par le Tunnel d’Occident ; prévoyez des vêtements d’été et un chapeau.'
      }
    }
  },
  {
    id: 'fincacafe',
    categoryKey: 'daytrips',
    mapX: 162,
    mapY: 96,
    durationHours: 4.5,
    costCOP: 120000,
    i18n: {
      es: {
        name: 'Tour Cafetero en Palmitas / Santa Elena',
        zone: 'Laderas del Valle · 1.850 m s.n.m.',
        metro: 'San Javier (Línea B) o Metrocable Arví + transporte veredal',
        costNote: 'Tour guiado de caficultura con recolección, beneficio y cata',
        bestTime: 'Mañana (08:30 – 13:00)',
        summary: 'Vive el proceso completo del café de montaña antioqueño del grano a la taza en fincas familiares a menos de 40 minutos de Medellín.',
        highlights: ['Recolección manual en cafetales con vista al valle', 'Cata sensorial guiada de cafés de especialidad', 'Almuerzo campesino envuelto en hoja de bijao'],
        tip: 'Compra café en grano directamente a los caficultores: tendrás tueste fresco de la semana.'
      },
      en: {
        name: 'Mountain Coffee Farm Tour (Palmitas / Santa Elena)',
        zone: 'Valley Slopes · 1,850 m a.s.l.',
        metro: 'San Javier (Line B) or Arví Cable + rural transfer',
        costNote: 'Guided bean-to-cup tour with picking, roasting & cupping',
        bestTime: 'Morning (08:30 – 13:00)',
        summary: 'Experience Antioquia’s high-altitude Arabica coffee culture from bean to cup at family-run mountain farms less than 40 minutes from Medellín.',
        highlights: ['Hand-picking coffee cherries on scenic mountain slopes', 'Guided sensory cupping with pour-over methods', 'Traditional farm lunch wrapped in plantain leaves (fiambre)'],
        tip: 'Buy whole-bean bags directly from the growers for freshly roasted single-estate coffee.'
      },
      pt: {
        name: 'Tour de Café em Palmitas / Santa Elena',
        zone: 'Encostas do Vale · 1.850 m',
        metro: 'San Javier (Linha B) ou Metrocable Arví + transporte rural',
        costNote: 'Tour guiado do grão à xícara com colheita, torra e degustação',
        bestTime: 'Manhã (08:30 – 13:00)',
        summary: 'Vivencie o processo completo do café de montanha antioquenho em fazendas familiares a menos de 40 minutos do centro de Medellín.',
        highlights: ['Colheita manual em cafezais com vista para o vale', 'Degustação guiada de cafés especiais filtrados', 'Almoço típico camponês na folha de bananeira'],
        tip: 'Compre grãos diretamente dos produtores familiares para levar café recém-torrado.'
      },
      fr: {
        name: 'Visite d’une Ferme Caféière (Palmitas / Santa Elena)',
        zone: 'Versants de la Vallée · 1 850 m d’alt.',
        metro: 'San Javier (Ligne B) ou Câble Arví + transport rural',
        costNote: 'Visite guidée de la cerise à la tasse avec récolte et dégustation',
        bestTime: 'Matin (08h30 – 13h00)',
        summary: 'Découvrez tout le savoir-faire du café arabica de montagne dans des plantations familiales situées à moins de 40 minutes de Medellín.',
        highlights: ['Cueillette manuelle dans les caféières en terrasse', 'Dégustation sensorielle guidée (méthodes douces)', 'Déjeuner paysan traditionnel en feuille de bananier'],
        tip: 'Achetez votre café en grains directement aux producteurs pour profiter d’une torréfaction fraîche.'
      }
    }
  }
];

const GASTRONOMY_ITEMS = [
  {
    priceCOP: 46000,
    where: 'Hacienda (Centro/Poblado), Mondongo’s (La 70), El Rancherito',
    i18n: {
      es: { name: 'Bandeja Paisa Tradicional', tag: 'Plato Insignia', desc: 'Frijoles cargamanto, arroz blanco, chicharrón crocante, carne en polvo, chorizo, morcilla, huevo frito, tajada de maduro, aguacate y arepa.' },
      en: { name: 'Traditional Bandeja Paisa', tag: 'Signature Dish', desc: 'Red pinto beans, white rice, crispy pork belly (chicharrón), ground beef, chorizo, fried egg, sweet plantain, avocado, and corn arepa.' },
      pt: { name: 'Bandeja Paisa Tradicional', tag: 'Prato Principal', desc: 'Feijão vermelho cremoso, arroz, torresmo crocante (chicharrón), carne, linguiça, ovo frito, banana-da-terra, abacate e arepa.' },
      fr: { name: 'Bandeja Paisa Traditionnelle', tag: 'Plat Emblématique', desc: 'Haricots rouges, riz blanc, poitrine de porc croustillante (chicharrón), chorizo, œuf au plat, banane plantain, avocat et arepa.' }
    }
  },
  {
    priceCOP: 14000,
    where: 'Miradores de Las Palmas, Santa Elena, Mercados del Río',
    i18n: {
      es: { name: 'Arepa de Choclo con Quesito', tag: 'Desayuno / Algo', desc: 'Arepa dulce de maíz tierno asada a la plancha con mantequilla y coronada con una lonja generosa de quesito fresco antioqueño.' },
      en: { name: 'Sweet Corn Arepa with Fresh Cheese', tag: 'Breakfast / Snack', desc: 'Griddled sweet yellow corn flatbread brushed with butter and topped with a thick slice of fresh Antioquian farmer’s cheese.' },
      pt: { name: 'Arepa de Milho Verde com Queijo', tag: 'Café / Lanche', desc: 'Arepa adocicada de milho verde grelhada na manteiga e coberta com uma fatia generosa de queijo fresco antioquenho.' },
      fr: { name: 'Arepa de Maïs Doux au Fromage Frais', tag: 'Petit-déj / En-cas', desc: 'Galette de maïs doux dorée au beurre sur la plaque et garnie d’une généreuse tranche de fromage frais fermier.' }
    }
  },
  {
    priceCOP: 42000,
    where: 'Mondongo’s (Laureles / El Poblado), Envigado',
    i18n: {
      es: { name: 'Mondongo Antioqueño', tag: 'Sopa Tradicional', desc: 'Sopa reconfortante cocinada lentamente con callo, costilla de cerdo, chorizo, yuca, papa criolla y cilantro, servida con aguacate y arepa.' },
      en: { name: 'Antioquian Mondongo Soup', tag: 'Hearty Soup', desc: 'Slow-simmered traditional soup with tripe, pork rib, chorizo, cassava, yellow potatoes, and cilantro, served with avocado and arepa.' },
      pt: { name: 'Mondongo Antioquenho', tag: 'Sopa Tradicional', desc: 'Sopa reconfortante cozida lentamente com dobradinha, costelinha suína, mandioca, batata crioula e coentro, servida com abacate.' },
      fr: { name: 'Mondongo d’Antioquia', tag: 'Soupe Traditionnelle', desc: 'Soupe mijotée aux tripes, travers de porc, chorizo, manioc, pommes de terre jaunes et coriandre, servie avec avocat et arepa.' }
    }
  },
  {
    priceCOP: 12000,
    where: 'Salón Versalles (Junín), Pergamino Café, Laureles',
    i18n: {
      es: { name: 'Buñuelos Calientes & Café de Origen', tag: 'Panadería & Café', desc: 'Esferas doradas y esponjosas de queso costeño y almidón de yuca, acompañadas de café arábica cultivado en Antioquia.' },
      en: { name: 'Warm Cheese Buñuelos & Specialty Coffee', tag: 'Bakery & Coffee', desc: 'Golden, crispy-outside and fluffy-inside fried cheese dough balls paired with high-altitude Antioquian Arabica coffee.' },
      pt: { name: 'Buñuelos de Queijo & Café Especial', tag: 'Padaria & Café', desc: 'Bolinhas douradas e macias de queijo e polvilho, acompanhadas de uma xícara de café arábica cultivado nas montanhas de Antioquia.' },
      fr: { name: 'Buñuelos au Fromage & Café de Spécialité', tag: 'Boulangerie & Café', desc: 'Beignets ronds et dorés au fromage salé et fécule de manioc, accompagnés d’un café arabica des montagnes d’Antioquia.' }
    }
  },
  {
    priceCOP: 39000,
    where: 'Ajiacos y Mondongos (Provenza), Hatoviejo',
    i18n: {
      es: { name: 'Cazuela de Frijoles', tag: 'Almuerzo Típico', desc: 'Frijoles cremosos servidos en cazuela de barro con chicharrón en cubos, maduro, aguacate, maicitos y viruta de papa.' },
      en: { name: 'Clay-Pot Bean Cazuela', tag: 'Typical Lunch', desc: 'Creamy red beans served in a bubbling clay pot topped with diced pork belly, sweet plantain, avocado, sweet corn, and crispy potato strings.' },
      pt: { name: 'Cazuela de Feijão na Tigela de Barro', tag: 'Almoço Típico', desc: 'Feijão cremoso servido na cumbuca de barro com cubos de torresmo, banana-da-terra, abacate, milho e batata palha.' },
      fr: { name: 'Cazuela de Haricots en Cassolette', tag: 'Déjeuner Typique', desc: 'Cassolette en terre cuite de haricots rouges crémeux garnie de dés de poitrine grillée, plantain mûr, avocat et maïs.' }
    }
  },
  {
    priceCOP: 8000,
    where: 'Plazas de Envigado, Sabaneta, Pueblito Paisa',
    i18n: {
      es: { name: 'Empanadas de Iglesia con Ají', tag: 'Comida Callejera', desc: 'Masa crujiente y delgada de maíz trillado rellena de papa criolla y carne desmechada, acompañada de ají picante de cilantro.' },
      en: { name: 'Crispy Corn Empanadas with Ají', tag: 'Street Food', desc: 'Thin, crunchy heirloom corn turnovers stuffed with seasoned yellow potatoes and shredded beef, dipped in fresh cilantro-lime ají salsa.' },
      pt: { name: 'Empanadas Crocantes de Milho com Ají', tag: 'Comida de Rua', desc: 'Massa fina e crocante de milho recheada com batata crioula e carne desfiada, servida com molho picante de coentro e limão.' },
      fr: { name: 'Empanadas Croustillantes au Maïs & Ají', tag: 'Street Food', desc: 'Chaussons fins et croustillants à la pâte de maïs farcis de pommes de terre et bœuf effiloché, servis avec une sauce ají à la coriandre.' }
    }
  }
];

const METRO_DATA = {
  origins: {
    poblado: { es: 'El Poblado (Línea A - Sur)', en: 'El Poblado (Line A - South)', pt: 'El Poblado (Linha A - Sul)', fr: 'El Poblado (Ligne A - Sud)' },
    estadio: { es: 'Estadio / Laureles (Línea B)', en: 'Estadio / Laureles (Line B)', pt: 'Estadio / Laureles (Linha B)', fr: 'Estadio / Laureles (Ligne B)' },
    berrio: { es: 'Parque Berrío / Centro (Línea A)', en: 'Parque Berrío / Downtown (Line A)', pt: 'Parque Berrío / Centro (Linha A)', fr: 'Parque Berrío / Centre (Ligne A)' },
    universidad: { es: 'Universidad / Zona Norte (Línea A)', en: 'Universidad / North District (Line A)', pt: 'Universidad / Zona Norte (Linha A)', fr: 'Universidad / Zone Nord (Ligne A)' },
    sanjavier: { es: 'San Javier / Comuna 13 (Línea B)', en: 'San Javier / Comuna 13 (Line B)', pt: 'San Javier / Comuna 13 (Linha B)', fr: 'San Javier / Comuna 13 (Ligne B)' }
  },
  dests: {
    comuna13: { es: 'Comuna 13 (Escaleras Eléctricas)', en: 'Comuna 13 (Outdoor Escalators)', pt: 'Comuna 13 (Escadas Rolantes)', fr: 'Comuna 13 (Escalators Extérieurs)' },
    arvi: { es: 'Parque Arví (Metrocable Línea L)', en: 'Arví Park (Metrocable Line L)', pt: 'Parque Arví (Metrocable Linha L)', fr: 'Parc Arví (Metrocable Ligne L)' },
    botero: { es: 'Plaza Botero & Museo de Antioquia', en: 'Plaza Botero & Museum of Antioquia', pt: 'Plaza Botero & Museu de Antioquia', fr: 'Plaza Botero & Musée d’Antioquia' },
    botanico: { es: 'Jardín Botánico & Parque Explora', en: 'Botanical Garden & Parque Explora', pt: 'Jardim Botânico & Parque Explora', fr: 'Jardin Botanique & Parque Explora' },
    tranvia: { es: 'Tranvía de Ayacucho & Museo Memoria', en: 'Ayacucho Tram & Memory Museum', pt: 'VLT de Ayacucho & Museu da Memória', fr: 'Tramway d’Ayacucho & Musée Mémoire' },
    guatape: { es: 'Terminal del Norte (Buses a Guatapé)', en: 'North Bus Terminal (Buses to Guatapé)', pt: 'Terminal Norte (Ônibus para Guatapé)', fr: 'Terminal Nord (Bus vers Guatapé)' }
  },
  routes: {
    comuna13: {
      time: '38 min', fareCOP: 3900,
      i18n: {
        es: { steps: 'Conecta hasta San Antonio → Haz trasbordo interno sin costo a la Línea B → Baja en la estación terminal San Javier → Toma el bus integrado 221i o camina 10 min hasta las Escaleras Eléctricas.', transfers: 'Trasbordo interno gratuito en San Antonio' },
        en: { steps: 'Ride to San Antonio transfer hub → Transfer free of charge to Line B westbound → Exit at San Javier terminal station → Take feeder bus 221i or walk 10 mins to the Comuna 13 Escalators.', transfers: 'Free internal transfer at San Antonio' },
        pt: { steps: 'Vá até a estação central San Antonio → Faça baldeação gratuita para a Linha B → Desça na estação final San Javier → Pegue o ônibus integrado 221i ou caminhe 10 min até as Escadas Rolantes.', transfers: 'Baldeação interna gratuita em San Antonio' },
        fr: { steps: 'Rejoignez la station San Antonio → Correspondance gratuite vers la Ligne B → Descendez au terminus San Javier → Prenez le bus 221i ou marchez 10 min jusqu’aux escalators de la Comuna 13.', transfers: 'Correspondance interne gratuite à San Antonio' }
      }
    },
    arvi: {
      time: '55 min', fareCOP: 33400,
      i18n: {
        es: { steps: 'Toma la Línea A dirección norte (Niquía) → En la estación Acevedo haz trasbordo al Metrocable Línea K hasta Santo Domingo Savio → Conecta allí con el Metrocable Turístico Línea L directo al Parque Arví.', transfers: 'Línea A + Cable K integrados; Línea L requiere tiquete Arví' },
        en: { steps: 'Take Line A northbound (towards Niquía) → At Acevedo station, transfer to Metrocable Line K up to Santo Domingo Savio → Transfer to Tourist Metrocable Line L into Arví Ecological Park.', transfers: 'Line A + Cable K included; Line L requires Arví tourist ticket' },
        pt: { steps: 'Pegue a Linha A sentido norte (Niquía) → Na estação Acevedo suba no Metrocable Linha K até Santo Domingo Savio → Faça conexão com o Metrocable Turístico Linha L direto ao Parque Arví.', transfers: 'Linha A + Teleférico K integrados; Linha L requer bilhete turístico' },
        fr: { steps: 'Prenez la Ligne A vers le nord (Niquía) → À Acevedo, montez dans le Metrocable Ligne K jusqu’à Santo Domingo Savio → Prenez le téléphérique touristique Ligne L jusqu’au Parc Arví.', transfers: 'Ligne A + Câble K intégrés ; billet touristique requis pour la Ligne L' }
      }
    },
    botero: {
      time: '14 min', fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A hasta la estación Parque Berrío → Sal por la pasarela norte directamente a las 23 esculturas monumentales de Plaza Botero y el Museo de Antioquia.', transfers: 'Conexión directa por Línea A' },
        en: { steps: 'Ride Line A to Parque Berrío station → Exit via the north platform walkway directly onto Plaza Botero’s 23 sculptures and the Museum of Antioquia.', transfers: 'Direct connection via Line A' },
        pt: { steps: 'Pegue a Linha A até a estação Parque Berrío → Saia pela passarela norte diretamente nas 23 esculturas da Plaza Botero e no Museu de Antioquia.', transfers: 'Conexão direta pela Linha A' },
        fr: { steps: 'Prenez la Ligne A jusqu’à la station Parque Berrío → Sortez par la passerelle nord directement sur la Plaza Botero et le Musée d’Antioquia.', transfers: 'Accès direct par la Ligne A' }
      }
    },
    botanico: {
      time: '20 min', fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A dirección Niquía → Baja en la estación Universidad → Cruza el puente peatonal directo hacia la entrada del Jardín Botánico y el Parque Explora.', transfers: 'Conexión directa por Línea A' },
        en: { steps: 'Take Line A northbound towards Niquía → Exit at Universidad station → Cross the pedestrian skybridge directly to the Botanical Garden and Parque Explora.', transfers: 'Direct connection via Line A' },
        pt: { steps: 'Pegue a Linha A sentido Niquía → Desça na estação Universidad → Atravesse a passarela de pedestres direto para o Jardim Botânico e Parque Explora.', transfers: 'Conexão direta pela Linha A' },
        fr: { steps: 'Prenez la Ligne A direction Niquía → Descendez à la station Universidad → Traversez la passerelle piétonne menant directement au Jardin Botanique et au Parque Explora.', transfers: 'Accès direct par la Ligne A' }
      }
    },
    tranvia: {
      time: '26 min', fareCOP: 3900,
      i18n: {
        es: { steps: 'Llega a la estación central San Antonio → Haz trasbordo interno al Tranvía de Ayacucho (Línea T-A) → Baja en la parada Bicentenario para el Museo Casa de la Memoria.', transfers: 'Trasbordo gratuito entre Metro y Tranvía en San Antonio' },
        en: { steps: 'Arrive at San Antonio transfer station → Transfer inside the station to the Ayacucho Tram (Line T-A) → Hop off at Bicentenario stop for the House of Memory Museum.', transfers: 'Free transfer between Metro and Tram at San Antonio' },
        pt: { steps: 'Chegue à estação central San Antonio → Faça integração interna com o VLT / Bonde de Ayacucho (Linha T-A) → Desça na parada Bicentenario para o Museu Casa da Memória.', transfers: 'Integração gratuita entre Metrô e VLT em San Antonio' },
        fr: { steps: 'Rejoignez la station centrale San Antonio → Correspondance interne avec le Tramway d’Ayacucho (Ligne T-A) → Descendez à l’arrêt Bicentenario pour le Musée Casa de la Memoria.', transfers: 'Correspondance gratuite Métro / Tramway à San Antonio' }
      }
    },
    guatape: {
      time: '22 min', fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A dirección norte → Baja en la estación Caribe → Cruza el puente peatonal cubierto directo a la Terminal del Norte (taquillas 9 o 14 para buses a Guatapé y El Peñol).', transfers: 'Directo a Terminal del Norte (+ $20.000 COP bus a Guatapé)' },
        en: { steps: 'Take Line A northbound → Exit at Caribe station → Walk across the covered skybridge directly into the North Bus Terminal (ticket booths 9 or 14 for buses to El Peñol & Guatapé).', transfers: 'Direct to North Terminal (+ $20,000 COP bus ticket to Guatapé)' },
        pt: { steps: 'Pegue a Linha A sentido norte → Desça na estação Caribe → Atravesse a passarela coberta direto para o Terminal Rodoviário Norte (guichês 9 ou 14 para Guatapé).', transfers: 'Direto ao Terminal Norte (+ $20.000 COP ônibus para Guatapé)' },
        fr: { steps: 'Prenez la Ligne A vers le nord → Descendez à la station Caribe → Empruntez la passerelle couverte menant directement au Terminal de Bus Nord (guichets 9 ou 14 pour Guatapé).', transfers: 'Direct jusqu’au Terminal Nord (+ $20 000 COP bus vers Guatapé)' }
      }
    }
  }
};

const ITINERARY_PRESETS_BASE = {
  '1day': [
    {
      day: 1,
      stops: [
        { destId: 'plazabotero', slotId: 'morning' },
        { destId: 'comuna13', slotId: 'noon' },
        { destId: 'pueblitopaisa', slotId: 'afternoon' },
        { destId: 'provenza', slotId: 'night' }
      ]
    }
  ],
  '3days': [
    {
      day: 1,
      stops: [
        { destId: 'plazabotero', slotId: 'morning' },
        { destId: 'salonmalaga', slotId: 'noon' },
        { destId: 'comuna13', slotId: 'afternoon' }
      ]
    },
    {
      day: 2,
      stops: [
        { destId: 'parquearvi', slotId: 'morning' },
        { destId: 'jardinbotanico', slotId: 'afternoon' },
        { destId: 'laureles', slotId: 'night' }
      ]
    },
    {
      day: 3,
      stops: [
        { destId: 'guatape', slotId: 'morning' },
        { destId: 'provenza', slotId: 'night' }
      ]
    }
  ],
  '5days': [
    {
      day: 1,
      stops: [
        { destId: 'plazabotero', slotId: 'morning' },
        { destId: 'salonmalaga', slotId: 'noon' },
        { destId: 'casamemoria', slotId: 'afternoon' }
      ]
    },
    {
      day: 2,
      stops: [
        { destId: 'comuna13', slotId: 'morning' },
        { destId: 'pueblitopaisa', slotId: 'afternoon' },
        { destId: 'laureles', slotId: 'night' }
      ]
    },
    {
      day: 3,
      stops: [
        { destId: 'parquearvi', slotId: 'morning' },
        { destId: 'jardinbotanico', slotId: 'afternoon' }
      ]
    },
    {
      day: 4,
      stops: [
        { destId: 'guatape', slotId: 'morning' }
      ]
    },
    {
      day: 5,
      stops: [
        { destId: 'fincacafe', slotId: 'morning' },
        { destId: 'provenza', slotId: 'night' }
      ]
    }
  ]
};

// Estado global de la aplicación
const state = {
  lang: 'es',
  activeTab: 'explorar',
  currency: 'COP',
  theme: 'light',
  selectedDestId: 'comuna13',
  categoryFilter: 'all',
  costFilter: 'all',
  searchQuery: '',
  onlyFavorites: false,
  favorites: new Set(['comuna13', 'parquearvi', 'guatape']),
  c13ActiveStep: 1,
  c13CompletedSteps: new Set([1]),
  c13ActiveEra: 'era3',
  c13Speaking: false,
  itineraryPreset: '3days',
  itineraryDays: JSON.parse(JSON.stringify(ITINERARY_PRESETS_BASE['3days'])),
  budget: {
    days: 4,
    travelers: 2,
    style: 'comfort'
  }
};

function t() {
  return I18N[state.lang] || I18N.es;
}

function c13t() {
  return C13_TOUR_UI[state.lang] || C13_TOUR_UI.es;
}

function getDestText(dest) {
  return dest.i18n[state.lang] || dest.i18n.es;
}

function getCategoryLabel(categoryKey) {
  return t().categories[categoryKey] || categoryKey;
}

function getSlotLabel(slotId) {
  const found = t().slots.find(s => s.id === slotId);
  return found ? found.label : slotId;
}

function formatMoney(amountCOP) {
  if (amountCOP === 0) return t().freeLabel;
  const cfg = EXCHANGE_RATES[state.currency];
  const converted = Math.round(amountCOP * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString('es-CO')}${cfg.suffix}`;
}

function switchTab(tab) {
  stopAudioNarrator();
  state.activeTab = tab;
  ['explorar', 'comuna13', 'itinerario', 'metro', 'cultura'].forEach(tKey => {
    document.getElementById(`tab-panel-${tKey}`).classList.toggle('hidden', tKey !== tab);
    document.getElementById(`tab-btn-${tKey}`).classList.toggle('active', tKey === tab);
  });
}

// ============================================================================
// NARRADOR DE AUDIOGUÍA (Web Speech API estilo VoiceMap)
// ============================================================================
function stopAudioNarrator() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  state.c13Speaking = false;
  const lbl = document.getElementById('c13-audio-label');
  if (lbl) lbl.textContent = c13t().audioPlay;
}

function toggleAudioNarrator() {
  if (!('speechSynthesis' in window)) return;
  if (state.c13Speaking) {
    stopAudioNarrator();
    return;
  }
  const stopObj = C13_STOPS.find(s => s.step === state.c13ActiveStep) || C13_STOPS[0];
  const info = stopObj.i18n[state.lang] || stopObj.i18n.es;
  const speechLangs = { es: 'es-CO', en: 'en-US', pt: 'pt-BR', fr: 'fr-FR' };

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(`${info.title}. ${info.narrative} ${info.quote}`);
  utter.lang = speechLangs[state.lang] || 'es-CO';
  utter.rate = 0.98;
  utter.onend = () => {
    state.c13Speaking = false;
    const lbl = document.getElementById('c13-audio-label');
    if (lbl) lbl.textContent = c13t().audioPlay;
  };
  state.c13Speaking = true;
  document.getElementById('c13-audio-label').textContent = c13t().audioStop;
  window.speechSynthesis.speak(utter);
}

// ============================================================================
// RENDERIZADO DEL RECORRIDO INTERACTIVO COMUNA 13
// ============================================================================
function renderComuna13Tour() {
  const ui = c13t();
  const stopObj = C13_STOPS.find(s => s.step === state.c13ActiveStep) || C13_STOPS[0];
  const stopInfo = stopObj.i18n[state.lang] || stopObj.i18n.es;

  document.getElementById('ui-tab-comuna13').textContent = ui.tabLabel;
  document.getElementById('c13-badge-style').textContent = ui.badgeStyle;
  document.getElementById('c13-main-title').textContent = ui.mainTitle;
  document.getElementById('c13-main-subtitle').textContent = ui.mainSubtitle;
  document.getElementById('c13-audio-label').textContent = state.c13Speaking ? ui.audioStop : ui.audioPlay;
  document.getElementById('btn-c13-prev').textContent = ui.prevStop;
  document.getElementById('btn-c13-next').textContent = ui.nextStop;
  document.getElementById('c13-elevation-title').textContent = ui.elevationTitle;
  document.getElementById('c13-elevation-gain').textContent = ui.elevationGain;
  document.getElementById('c13-progress-readout').textContent = `${ui.stopWord} ${stopObj.step} ${ui.ofWord} 7 · ${ui.altitudeWord}: ${stopObj.altitude} · ⏱️ ${stopObj.duration}`;

  // Botones circulares de las 7 paradas
  const pillsWrap = document.getElementById('c13-step-pills');
  pillsWrap.innerHTML = C13_STOPS.map(s => {
    const isAct = s.step === state.c13ActiveStep;
    const isDone = state.c13CompletedSteps.has(s.step);
    return `
      <button type="button" data-c13-step="${s.step}" class="step-dot-btn ${isAct ? 'active' : (isDone ? 'completed' : '')}" title="${(s.i18n[state.lang] || s.i18n.es).title}">
        ${s.step}
      </button>
    `;
  }).join('');

  pillsWrap.querySelectorAll('button[data-c13-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      stopAudioNarrator();
      state.c13ActiveStep = parseInt(btn.getAttribute('data-c13-step'), 10);
      state.c13CompletedSteps.add(state.c13ActiveStep);
      renderComuna13Tour();
    });
  });

  // Nodos del perfil de altitud SVG
  const nodesLayer = document.getElementById('c13-nodes-layer');
  nodesLayer.innerHTML = '';
  C13_STOPS.forEach(s => {
    const isAct = s.step === state.c13ActiveStep;
    const isDone = state.c13CompletedSteps.has(s.step);
    const sText = s.i18n[state.lang] || s.i18n.es;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', `c13-stop-node ${isAct ? 'active-node' : ''}`);

    if (isAct) {
      const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      halo.setAttribute('cx', s.svgX);
      halo.setAttribute('cy', s.svgY);
      halo.setAttribute('r', '17');
      halo.setAttribute('fill', 'var(--brand-primary)');
      halo.setAttribute('opacity', '0.25');
      g.appendChild(halo);
    }

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', s.svgX);
    circle.setAttribute('cy', s.svgY);
    circle.setAttribute('r', isAct ? '11' : '9');
    circle.setAttribute('fill', isAct ? 'var(--brand-primary)' : (isDone ? 'var(--accent-cable)' : 'var(--text-primary)'));
    circle.setAttribute('stroke', 'var(--bg-surface)');
    circle.setAttribute('stroke-width', '2.5');
    g.appendChild(circle);

    const num = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    num.setAttribute('x', s.svgX);
    num.setAttribute('y', s.svgY + 3.5);
    num.setAttribute('text-anchor', 'middle');
    num.setAttribute('fill', 'var(--bg-surface)');
    num.setAttribute('font-size', '10');
    num.setAttribute('font-weight', '800');
    num.textContent = s.step;
    g.appendChild(num);

    const altTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    altTxt.setAttribute('x', s.svgX);
    altTxt.setAttribute('y', s.svgY + 23);
    altTxt.setAttribute('text-anchor', 'middle');
    altTxt.setAttribute('fill', isAct ? 'var(--brand-primary)' : 'var(--text-secondary)');
    altTxt.setAttribute('font-size', '10');
    altTxt.setAttribute('font-weight', isAct ? '700' : '600');
    altTxt.textContent = s.altitude;
    g.appendChild(altTxt);

    const shortTitle = sText.title.split(':')[0].split(',')[0].trim();
    const titleTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    titleTxt.setAttribute('x', s.svgX);
    titleTxt.setAttribute('y', s.svgY - 15);
    titleTxt.setAttribute('text-anchor', s.step === 1 ? 'start' : (s.step === 7 ? 'end' : 'middle'));
    titleTxt.setAttribute('fill', isAct ? 'var(--brand-primary)' : 'var(--text-primary)');
    titleTxt.setAttribute('font-size', '10.5');
    titleTxt.setAttribute('font-weight', isAct ? '800' : '600');
    titleTxt.textContent = shortTitle.length > 22 ? shortTitle.slice(0, 20) + '…' : shortTitle;
    g.appendChild(titleTxt);

    g.addEventListener('click', () => {
      stopAudioNarrator();
      state.c13ActiveStep = s.step;
      state.c13CompletedSteps.add(s.step);
      renderComuna13Tour();
    });

    nodesLayer.appendChild(g);
  });

  // Datos rápidos bajo el mapa de altitud
  document.getElementById('c13-quick-facts').innerHTML = ui.quickFacts.map(f => `
    <div class="stat-mini">
      <span>${f.label}</span>
      <strong>${f.value}</strong>
    </div>
  `).join('');

  // Panel de detalle de la parada activa
  const isCompleted = state.c13CompletedSteps.has(stopObj.step);
  document.getElementById('c13-stop-detail').innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.6rem;">
      <span class="tag-badge">${stopInfo.eraTag}</span>
      <span class="price-label">${ui.stopWord} ${stopObj.step}/7 · ${stopObj.altitude}</span>
    </div>

    <h3 class="section-title" style="font-size: 1.15rem; margin-bottom: 0.6rem;">${stopInfo.title}</h3>
    <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.9rem;">
      ${stopInfo.narrative}
    </p>

    <div class="inspector-meta-grid">
      <div class="meta-box">
        <span class="meta-box-label">${ui.protagonistLbl}</span>
        <strong>${stopInfo.protagonist}</strong>
      </div>
      <div class="meta-box">
        <span class="meta-box-label">${ui.muralFocusLbl}</span>
        <strong>${stopInfo.muralFocus}</strong>
      </div>
    </div>

    <div class="tip-callout" style="margin-bottom: 0.75rem;">
      <span class="meta-box-label">${ui.localQuoteLbl}</span>
      <p style="font-style: italic; font-weight: 500; color: var(--text-primary);">${stopInfo.quote}</p>
    </div>

    <div style="display: flex; justify-content: flex-end;">
      <span class="tag-badge" style="color: var(--brand-primary); border-color: var(--brand-primary);">
        ${isCompleted ? ui.visitedBadge : ui.markVisitedBtn}
      </span>
    </div>
  `;

  // Línea de Tiempo Histórica (5 Épocas)
  document.getElementById('c13-timeline-heading').textContent = ui.timelineHeading;
  document.getElementById('c13-timeline-subheading').textContent = ui.timelineSubheading;

  const eraButtonsWrap = document.getElementById('c13-era-buttons');
  eraButtonsWrap.innerHTML = C13_ERAS.map(era => {
    const eText = era.i18n[state.lang] || era.i18n.es;
    const isAct = era.id === state.c13ActiveEra;
    return `
      <button type="button" data-era-id="${era.id}" class="era-btn ${isAct ? 'active' : ''}">
        <strong>${era.years}</strong>
        <span>${eText.shortTitle}</span>
      </button>
    `;
  }).join('');

  eraButtonsWrap.querySelectorAll('button[data-era-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.c13ActiveEra = btn.getAttribute('data-era-id');
      renderComuna13Tour();
    });
  });

  const activeEraObj = C13_ERAS.find(e => e.id === state.c13ActiveEra) || C13_ERAS[2];
  const activeEraText = activeEraObj.i18n[state.lang] || activeEraObj.i18n.es;
  document.getElementById('c13-era-detail').innerHTML = `
    <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">
      ${activeEraText.fullTitle}
    </h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
      ${activeEraText.body}
    </p>
  `;

  // Decodificador de Murales
  document.getElementById('c13-murals-heading').textContent = ui.muralsHeading;
  document.getElementById('c13-murals-subheading').textContent = ui.muralsSubheading;

  document.getElementById('c13-murals-grid').innerHTML = C13_MURALS.map(m => {
    const mText = m.i18n[state.lang] || m.i18n.es;
    return `
      <article class="meta-box" style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.6rem;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <span class="tag-badge">${ui.stopWord} #${m.locationStep}</span>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--brand-primary);">${m.artist}</span>
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-primary);">${mText.title}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.55;">${mText.symbolism}</p>
        </div>
        <button type="button" data-jump-step="${m.locationStep}" class="btn-outline" style="align-self: flex-start; font-size: 0.75rem; padding: 0.3rem 0.65rem;">
          → ${ui.stopWord} ${m.locationStep}
        </button>
      </article>
    `;
  }).join('');

  document.querySelectorAll('#c13-murals-grid button[data-jump-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      stopAudioNarrator();
      state.c13ActiveStep = parseInt(btn.getAttribute('data-jump-step'), 10);
      state.c13CompletedSteps.add(state.c13ActiveStep);
      renderComuna13Tour();
      document.getElementById('c13-elevation-svg').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

// ============================================================================
// RENDERIZADO DE TEXTOS ESTÁTICOS DE LA INTERFAZ
// ============================================================================
function renderStaticTranslations() {
  const dict = t();
  document.documentElement.setAttribute('lang', state.lang);

  document.getElementById('ui-brand-title').textContent = dict.brandTitle;
  document.getElementById('ui-brand-subtitle').textContent = dict.brandSubtitle;
  document.getElementById('ui-climate-badge').innerHTML = dict.climateBadge;
  document.getElementById('ui-fav-btn-label').textContent = dict.favBtn;
  document.getElementById('theme-toggle-label').textContent = state.theme === 'light' ? dict.darkMode : dict.lightMode;

  document.getElementById('ui-tab-explorar').textContent = dict.tabs.explorar;
  document.getElementById('ui-tab-comuna13').textContent = dict.tabs.comuna13;
  document.getElementById('ui-tab-itinerario').textContent = dict.tabs.itinerario;
  document.getElementById('ui-tab-metro').textContent = dict.tabs.metro;
  document.getElementById('ui-tab-cultura').textContent = dict.tabs.cultura;

  document.getElementById('ui-map-title').textContent = dict.mapTitle;
  document.getElementById('ui-map-subtitle').textContent = dict.mapSubtitle;
  document.getElementById('ui-legend-metro').textContent = dict.legendMetro;
  document.getElementById('ui-legend-cable').textContent = dict.legendCable;
  document.getElementById('ui-legend-selected').textContent = dict.legendSelected;

  document.getElementById('svg-label-west').textContent = dict.svgLabels.west;
  document.getElementById('svg-label-north').textContent = dict.svgLabels.north;
  document.getElementById('svg-label-south').textContent = dict.svgLabels.south;
  document.getElementById('svg-label-east').textContent = dict.svgLabels.east;

  document.getElementById('valley-stats-container').innerHTML = dict.valleyStats.map(s => `
    <div class="stat-mini">
      <span>${s.label}</span>
      <strong>${s.value}</strong>
    </div>
  `).join('');

  const catOrder = ['all', 'culture', 'nature', 'neighborhoods', 'daytrips'];
  document.getElementById('category-filters').innerHTML = catOrder.map(key => `
    <button type="button" data-category="${key}" class="pill-btn ${state.categoryFilter === key ? 'active' : ''}">
      ${dict.categories[key]}
    </button>
  `).join('');

  document.querySelectorAll('#category-filters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.categoryFilter = btn.getAttribute('data-category');
      renderStaticTranslations();
      renderDestinationsGrid();
    });
  });

  document.getElementById('search-destinations').placeholder = dict.searchPlaceholder;
  const costFilter = document.getElementById('cost-filter');
  costFilter.innerHTML = `
    <option value="all" ${state.costFilter === 'all' ? 'selected' : ''}>${dict.costOptions.all}</option>
    <option value="free" ${state.costFilter === 'free' ? 'selected' : ''}>${dict.costOptions.free}</option>
    <option value="budget" ${state.costFilter === 'budget' ? 'selected' : ''}>${dict.costOptions.budget}</option>
  `;

  document.getElementById('ui-itin-title').textContent = dict.itinTitle;
  document.getElementById('ui-itin-subtitle').textContent = dict.itinSubtitle;
  document.getElementById('preset-1day').textContent = dict.presets['1day'];
  document.getElementById('preset-3days').textContent = dict.presets['3days'];
  document.getElementById('preset-5days').textContent = dict.presets['5days'];
  document.getElementById('copy-itinerary-label').textContent = dict.copyItin;

  document.getElementById('ui-itin-lbl-days').textContent = dict.itinMetrics.days;
  document.getElementById('ui-itin-lbl-stops').textContent = dict.itinMetrics.stops;
  document.getElementById('ui-itin-lbl-hours').textContent = dict.itinMetrics.hours;
  document.getElementById('ui-itin-lbl-cost').textContent = dict.itinMetrics.cost;
  document.getElementById('ui-itin-add-label').textContent = dict.addStopLabel;
  document.getElementById('btn-itin-add-stop').textContent = dict.addStopBtn;

  document.getElementById('ui-metro-title').textContent = dict.metroTitle;
  document.getElementById('ui-metro-subtitle').textContent = dict.metroSubtitle;
  document.getElementById('ui-metro-origin-lbl').textContent = dict.metroOriginLbl;
  document.getElementById('ui-metro-dest-lbl').textContent = dict.metroDestLbl;
  document.getElementById('ui-metro-lines-heading').textContent = dict.metroLinesHeading;

  document.getElementById('ui-gastro-title').textContent = dict.gastroTitle;
  document.getElementById('ui-gastro-subtitle').textContent = dict.gastroSubtitle;
  document.getElementById('ui-budget-title').textContent = dict.budgetTitle;
  document.getElementById('ui-budget-subtitle').textContent = dict.budgetSubtitle;
  document.getElementById('ui-budget-days-lbl').textContent = dict.budgetDaysLbl;
  document.getElementById('ui-budget-travelers-lbl').textContent = dict.budgetTravelersLbl;
  document.getElementById('ui-budget-style-lbl').textContent = dict.budgetStyleLbl;
  document.getElementById('style-backpacker').textContent = dict.styles.backpacker;
  document.getElementById('style-comfort').textContent = dict.styles.comfort;
  document.getElementById('style-luxury').textContent = dict.styles.luxury;
  document.getElementById('ui-budget-total-lbl').textContent = dict.budgetTotalLbl;
  document.getElementById('ui-budget-perday-lbl').textContent = dict.budgetPerDayLbl;
  document.getElementById('ui-footer-text').innerHTML = dict.footerText;
}

// ============================================================================
// RENDERIZADO DEL MAPA DEL VALLE Y PANEL INSPECTOR
// ============================================================================
function renderMapPins() {
  const layer = document.getElementById('map-pins-layer');
  layer.innerHTML = '';

  DESTINATIONS.forEach((dest, idx) => {
    const isSelected = dest.id === state.selectedDestId;
    const isFav = state.favorites.has(dest.id);
    const info = getDestText(dest);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', `map-pin ${isSelected ? 'active-pin' : ''}`);
    g.setAttribute('data-dest-id', dest.id);

    if (isSelected) {
      const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      halo.setAttribute('cx', dest.mapX);
      halo.setAttribute('cy', dest.mapY);
      halo.setAttribute('r', '15');
      halo.setAttribute('fill', 'var(--brand-primary)');
      halo.setAttribute('opacity', '0.25');
      g.appendChild(halo);
    }

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', dest.mapX);
    circle.setAttribute('cy', dest.mapY);
    circle.setAttribute('r', isSelected ? '10' : '8.5');
    circle.setAttribute('fill', isSelected ? 'var(--brand-primary)' : (isFav ? 'var(--accent-terracotta)' : 'var(--text-primary)'));
    circle.setAttribute('stroke', 'var(--bg-surface)');
    circle.setAttribute('stroke-width', '2');
    g.appendChild(circle);

    const num = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    num.setAttribute('x', dest.mapX);
    num.setAttribute('y', dest.mapY + 3.5);
    num.setAttribute('text-anchor', 'middle');
    num.setAttribute('fill', 'var(--bg-surface)');
    num.setAttribute('font-size', '10');
    num.setAttribute('font-weight', '700');
    num.textContent = idx + 1;
    g.appendChild(num);

    const shortLabel = info.name.split('(')[0].split('&')[0].split(':')[0].trim();
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const alignLeft = dest.mapX > 470;
    label.setAttribute('x', alignLeft ? dest.mapX - 13 : dest.mapX + 13);
    label.setAttribute('y', dest.mapY + 4);
    label.setAttribute('text-anchor', alignLeft ? 'end' : 'start');
    label.setAttribute('fill', isSelected ? 'var(--brand-primary)' : 'var(--text-primary)');
    label.setAttribute('font-size', '11');
    label.setAttribute('font-weight', isSelected ? '700' : '600');
    label.textContent = shortLabel;
    g.appendChild(label);

    g.addEventListener('click', () => {
      state.selectedDestId = dest.id;
      renderMapPins();
      renderInspector();
      renderDestinationsGrid();
    });

    layer.appendChild(g);
  });
}

function renderInspector() {
  const dict = t();
  const container = document.getElementById('destination-inspector');
  const dest = DESTINATIONS.find(d => d.id === state.selectedDestId) || DESTINATIONS[0];
  const info = getDestText(dest);
  const idx = DESTINATIONS.indexOf(dest) + 1;
  const isFav = state.favorites.has(dest.id);

  const launchC13ButtonHTML = dest.id === 'comuna13'
    ? `<button id="btn-launch-c13-tour" type="button" class="btn-outline active" style="width: 100%; justify-content: center; margin-bottom: 0.65rem;">
         ${c13t().openTourBtn}
       </button>`
    : '';

  container.innerHTML = `
    <div class="card-header">
      <div>
        <span class="tag-badge">#${idx} · ${getCategoryLabel(dest.categoryKey)} · ${info.zone}</span>
        <h3 class="section-title" style="margin-top: 0.4rem; font-size: 1.15rem;">${info.name}</h3>
      </div>
      <button id="inspector-fav-btn" type="button" class="btn-outline ${isFav ? 'active' : ''}">
        <span>${isFav ? dict.savedBtn : dict.saveBtn}</span>
      </button>
    </div>

    <p style="font-size: 0.88rem; color: var(--text-secondary);">${info.summary}</p>

    <div class="inspector-meta-grid">
      <div class="meta-box">
        <span class="meta-box-label">${dict.howToArrive}</span>
        <strong>${info.metro}</strong>
      </div>
      <div class="meta-box">
        <span class="meta-box-label">${dict.budgetAndDuration}</span>
        <strong class="price-label">${formatMoney(dest.costCOP)}</strong>
        <span> · ${dest.durationHours} ${dict.hoursUnit}</span>
      </div>
    </div>

    <div>
      <strong style="font-size: 0.83rem;">${dict.highlightsTitle}</strong>
      <ul class="highlights-list">
        ${info.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div class="tip-callout">
      <strong>${dict.localTipTitle} (${info.bestTime}):</strong>
      <p style="margin-top: 0.25rem; color: var(--text-secondary);">${info.tip}</p>
    </div>

    ${launchC13ButtonHTML}

    <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;">
      <span style="font-size: 0.76rem; color: var(--text-muted);">${info.costNote}</span>
      <button id="inspector-add-itin-btn" type="button" class="btn-primary">
        ${dict.addToDay1}
      </button>
    </div>
  `;

  document.getElementById('inspector-fav-btn').addEventListener('click', () => {
    toggleFavorite(dest.id);
  });

  const c13Btn = document.getElementById('btn-launch-c13-tour');
  if (c13Btn) {
    c13Btn.addEventListener('click', () => {
      switchTab('comuna13');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.getElementById('inspector-add-itin-btn').addEventListener('click', () => {
    if (state.itineraryDays.length > 0) {
      state.itineraryDays[0].stops.push({ destId: dest.id, slotId: 'afternoon' });
      renderItinerary();
      const btn = document.getElementById('inspector-add-itin-btn');
      btn.textContent = dict.addedToItin;
      setTimeout(() => {
        if (btn) btn.textContent = t().addToDay1;
      }, 1500);
    }
  });
}

function renderDestinationsGrid() {
  const dict = t();
  const grid = document.getElementById('destinations-grid');
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = DESTINATIONS.filter(d => {
    const info = getDestText(d);
    if (state.onlyFavorites && !state.favorites.has(d.id)) return false;
    if (state.categoryFilter !== 'all' && d.categoryKey !== state.categoryFilter) return false;
    if (state.costFilter === 'free' && d.costCOP > 0) return false;
    if (state.costFilter === 'budget' && d.costCOP > 50000) return false;
    if (query) {
      const hay = `${info.name} ${info.zone} ${getCategoryLabel(d.categoryKey)} ${info.metro} ${info.summary}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; text-align: center;">
        <p style="margin-bottom: 0.75rem; font-weight: 600;">${dict.noResults}</p>
        <button id="btn-reset-filters" type="button" class="btn-primary">${dict.resetFilters}</button>
      </div>
    `;
    document.getElementById('btn-reset-filters').addEventListener('click', () => {
      state.categoryFilter = 'all';
      state.costFilter = 'all';
      state.searchQuery = '';
      state.onlyFavorites = false;
      document.getElementById('search-destinations').value = '';
      renderStaticTranslations();
      renderDestinationsGrid();
    });
    return;
  }

  grid.innerHTML = filtered.map(dest => {
    const idx = DESTINATIONS.indexOf(dest) + 1;
    const info = getDestText(dest);
    const isSelected = dest.id === state.selectedDestId;
    const isFav = state.favorites.has(dest.id);

    return `
      <article id="card-${dest.id}" data-dest-id="${dest.id}" class="dest-card ${isSelected ? 'selected' : ''}">
        <div>
          <div class="dest-card-top">
            <span class="tag-badge">#${idx} · ${getCategoryLabel(dest.categoryKey)}</span>
            <span class="price-label">${formatMoney(dest.costCOP)}</span>
          </div>
          <h3 class="dest-card-title">${info.name}</h3>
          <p class="dest-card-desc">${info.summary}</p>
        </div>

        <div class="dest-card-footer">
          <div style="display: flex; justify-content: space-between; color: var(--text-muted);">
            <span>🚇 ${info.metro.split('(')[0]}</span>
            <span>⏱️ ${dest.durationHours} ${dict.hoursUnit}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600; color: var(--brand-primary);">${dict.viewOnMap}</span>
            <button type="button" data-fav="${dest.id}" class="btn-outline" style="padding: 0.25rem 0.55rem;" aria-label="${info.name}">
              ${isFav ? '♥' : '♡'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('article[data-dest-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      const favBtn = e.target.closest('button[data-fav]');
      if (favBtn) {
        e.stopPropagation();
        toggleFavorite(favBtn.getAttribute('data-fav'));
        return;
      }
      state.selectedDestId = card.getAttribute('data-dest-id');
      renderMapPins();
      renderInspector();
      renderDestinationsGrid();
      document.getElementById('destination-inspector').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

function toggleFavorite(destId) {
  if (state.favorites.has(destId)) {
    state.favorites.delete(destId);
  } else {
    state.favorites.add(destId);
  }
  document.getElementById('fav-count-badge').textContent = state.favorites.size;
  renderMapPins();
  renderInspector();
  renderDestinationsGrid();
}

function renderItinerary() {
  const dict = t();
  const daySelect = document.getElementById('itin-add-day-select');
  daySelect.innerHTML = state.itineraryDays.map((d, i) => `<option value="${i}">${dict.dayWord} ${d.day}</option>`).join('');

  const destSelect = document.getElementById('itin-add-dest-select');
  destSelect.innerHTML = DESTINATIONS.map(d => `<option value="${d.id}">${getDestText(d).name} (${formatMoney(d.costCOP)})</option>`).join('');

  const slotSelect = document.getElementById('itin-add-slot-select');
  slotSelect.innerHTML = dict.slots.map(s => `<option value="${s.id}">${s.label}</option>`).join('');

  const container = document.getElementById('itinerary-days-container');
  const titles = dict.presetTitles[state.itineraryPreset] || [];
  let totalStops = 0;
  let totalHours = 0;
  let totalCostCOP = 0;

  container.innerHTML = state.itineraryDays.map((dayObj, dayIdx) => {
    const dayTitle = titles[dayIdx] || `${dict.dayWord} ${dayObj.day}`;
    const stopsHTML = dayObj.stops.map((stop, stopIdx) => {
      const dest = DESTINATIONS.find(d => d.id === stop.destId) || DESTINATIONS[0];
      const info = getDestText(dest);
      totalStops += 1;
      totalHours += dest.durationHours;
      totalCostCOP += dest.costCOP;

      return `
        <div class="stop-item">
          <div>
            <span class="tag-badge">${getSlotLabel(stop.slotId)}</span>
            <strong style="margin-left: 0.45rem;">${info.name}</strong>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.2rem;">
              🚇 ${info.metro} · ${dest.durationHours} ${dict.hoursUnit}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="price-label">${formatMoney(dest.costCOP)}</span>
            <button type="button" data-remove-day="${dayIdx}" data-remove-stop="${stopIdx}" class="btn-outline">${dict.removeBtn}</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="day-card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${dict.dayWord} ${dayObj.day}: ${dayTitle}</strong>
          <span class="tag-badge">${dayObj.stops.length}</span>
        </div>
        ${stopsHTML || `<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">${dict.emptyDayMsg}</p>`}
      </div>
    `;
  }).join('');

  document.getElementById('itin-stat-days').textContent = `${state.itineraryDays.length} ${state.itineraryDays.length === 1 ? dict.dayWord : dict.daysWord}`;
  document.getElementById('itin-stat-stops').textContent = `${totalStops} ${dict.stopsWord}`;
  document.getElementById('itin-stat-hours').textContent = `${totalHours.toFixed(1)} ${dict.hoursUnit}`;
  document.getElementById('itin-stat-cost').textContent = formatMoney(totalCostCOP);
  document.getElementById('itinerary-count-pill').textContent = totalStops;

  container.querySelectorAll('button[data-remove-day]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dIdx = parseInt(btn.getAttribute('data-remove-day'), 10);
      const sIdx = parseInt(btn.getAttribute('data-remove-stop'), 10);
      state.itineraryDays[dIdx].stops.splice(sIdx, 1);
      renderItinerary();
    });
  });
}

function renderMetroSection() {
  const dict = t();
  const originSelect = document.getElementById('metro-origin');
  const destSelect = document.getElementById('metro-dest');
  const currentOrigin = originSelect.value || 'poblado';
  const currentDest = destSelect.value || 'comuna13';

  originSelect.innerHTML = Object.keys(METRO_DATA.origins).map(k => `
    <option value="${k}" ${k === currentOrigin ? 'selected' : ''}>${METRO_DATA.origins[k][state.lang]}</option>
  `).join('');

  destSelect.innerHTML = Object.keys(METRO_DATA.dests).map(k => `
    <option value="${k}" ${k === currentDest ? 'selected' : ''}>${METRO_DATA.dests[k][state.lang]}</option>
  `).join('');

  renderMetroRouteResult();

  document.getElementById('metro-lines-table-wrap').innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          ${dict.metroTableHeaders.map(h => `<th>${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${dict.metroLinesRows.map(r => `
          <tr>
            <td><strong>${r[0]}</strong></td>
            <td>${r[1]}</td>
            <td>${r[2]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  document.getElementById('metro-practical-guide-card').innerHTML = `
    <div class="card-header">
      <div>
        <h2 class="section-title">${dict.practicalTitle}</h2>
        <p class="section-subtitle">${dict.practicalSubtitle}</p>
      </div>
    </div>

    <div class="inspector-meta-grid">
      ${dict.practicalTips.map(tip => `
        <div class="meta-box">
          <strong>${tip.title}</strong>
          <p class="section-subtitle" style="margin-top: 0.25rem;">${tip.text}</p>
        </div>
      `).join('')}
    </div>

    <h3 class="section-title" style="margin: 1rem 0 0.5rem;">${dict.barriosHeading}</h3>
    <table class="data-table">
      <thead>
        <tr>
          ${dict.barriosHeaders.map(h => `<th>${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${dict.barriosRows.map(r => `
          <tr>
            <td><strong>${r[0]}</strong></td>
            <td>${r[1]}</td>
            <td>${r[2]}</td>
            <td>${r[3]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderMetroRouteResult() {
  const dict = t();
  const origin = document.getElementById('metro-origin').value || 'poblado';
  const dest = document.getElementById('metro-dest').value || 'comuna13';
  const routeObj = METRO_DATA.routes[dest] || METRO_DATA.routes.comuna13;
  const routeI18n = routeObj.i18n[state.lang] || routeObj.i18n.es;
  const originLabel = METRO_DATA.origins[origin][state.lang];

  document.getElementById('metro-route-result').innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
      <strong>${dict.metroRouteFrom}: ${originLabel}</strong>
      <span class="price-label">${routeObj.time} · ${formatMoney(routeObj.fareCOP)}</span>
    </div>
    <p style="margin-bottom: 0.35rem;">${routeI18n.steps}</p>
    <span style="font-size: 0.75rem; color: var(--text-muted);">${dict.metroIntegrationNote}: ${routeI18n.transfers}</span>
  `;
}

function renderGastronomy() {
  const dict = t();
  const grid = document.getElementById('gastronomy-grid');
  grid.innerHTML = GASTRONOMY_ITEMS.map(item => {
    const info = item.i18n[state.lang] || item.i18n.es;
    return `
      <div class="meta-box" style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.5rem;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="tag-badge">${info.tag}</span>
            <span class="price-label">${formatMoney(item.priceCOP)}</span>
          </div>
          <h3 style="font-size: 0.92rem; margin: 0.4rem 0 0.25rem;">${info.name}</h3>
          <p style="font-size: 0.78rem; color: var(--text-secondary);">${info.desc}</p>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.35rem;">
          ${dict.whereToTry} <strong>${item.where}</strong>
        </div>
      </div>
    `;
  }).join('');
}

function renderBudgetCalculator() {
  const dict = t();
  const { days, travelers, style } = state.budget;
  document.getElementById('budget-days-val').textContent = `${days} ${days === 1 ? dict.dayWord.toLowerCase() : dict.daysWord.toLowerCase()}`;
  document.getElementById('budget-travelers-val').textContent = `${travelers} ${travelers === 1 ? dict.personSingular : dict.personPlural}`;

  const dailyRates = {
    backpacker: { lodging: 75000, food: 65000, transport: 22000, tours: 40000 },
    comfort:    { lodging: 190000, food: 120000, transport: 45000, tours: 75000 },
    luxury:     { lodging: 440000, food: 240000, transport: 95000, tours: 140000 }
  };

  const rate = dailyRates[style];
  const perPersonDayCOP = rate.lodging + rate.food + rate.transport + rate.tours;
  const totalGroupCOP = perPersonDayCOP * days * travelers;

  const categories = [
    { label: dict.budgetCats[0], val: rate.lodging * days * travelers, color: 'var(--brand-primary)' },
    { label: dict.budgetCats[1], val: rate.food * days * travelers, color: 'var(--accent-terracotta)' },
    { label: dict.budgetCats[2], val: rate.tours * days * travelers, color: 'var(--accent-gold)' },
    { label: dict.budgetCats[3], val: rate.transport * days * travelers, color: 'var(--accent-metro)' }
  ];

  const barsContainer = document.getElementById('budget-breakdown-bars');
  barsContainer.innerHTML = categories.map(cat => {
    const pct = Math.round((cat.val / totalGroupCOP) * 100);
    return `
      <div>
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
          <strong>${cat.label} (${pct}%)</strong>
          <span class="price-label">${formatMoney(cat.val)}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${pct}%; background-color: ${cat.color};"></div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('budget-total-group').textContent = formatMoney(totalGroupCOP);
  document.getElementById('budget-per-person-day').textContent = formatMoney(perPersonDayCOP);
}

function renderAll() {
  renderStaticTranslations();
  renderMapPins();
  renderInspector();
  renderDestinationsGrid();
  renderComuna13Tour();
  renderItinerary();
  renderMetroSection();
  renderGastronomy();
  renderBudgetCalculator();
}

function initEvents() {
  // Selector de idioma (ES / EN / PT / FR)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      stopAudioNarrator();
      state.lang = btn.getAttribute('data-lang');
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === state.lang);
      });
      renderAll();
    });
  });

  // Selector de moneda (COP / USD / EUR)
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currency = btn.getAttribute('data-currency');
      document.querySelectorAll('.curr-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-currency') === state.currency);
      });
      renderInspector();
      renderDestinationsGrid();
      renderItinerary();
      renderMetroRouteResult();
      renderGastronomy();
      renderBudgetCalculator();
    });
  });

  // Pestañas de navegación
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Controles del Recorrido Interactivo Comuna 13
  document.getElementById('btn-c13-audio').addEventListener('click', toggleAudioNarrator);

  document.getElementById('btn-c13-prev').addEventListener('click', () => {
    stopAudioNarrator();
    state.c13ActiveStep = state.c13ActiveStep > 1 ? state.c13ActiveStep - 1 : 7;
    state.c13CompletedSteps.add(state.c13ActiveStep);
    renderComuna13Tour();
  });

  document.getElementById('btn-c13-next').addEventListener('click', () => {
    stopAudioNarrator();
    state.c13ActiveStep = state.c13ActiveStep < 7 ? state.c13ActiveStep + 1 : 1;
    state.c13CompletedSteps.add(state.c13ActiveStep);
    renderComuna13Tour();
  });

  // Cambio de tema Claro / Oscuro
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('theme-toggle-label').textContent = state.theme === 'light' ? t().darkMode : t().lightMode;
  });

  // Filtro de favoritos
  document.getElementById('btn-filter-favorites').addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;
    document.getElementById('btn-filter-favorites').classList.toggle('active', state.onlyFavorites);
    renderDestinationsGrid();
  });

  // Buscador y filtro de presupuesto
  document.getElementById('search-destinations').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderDestinationsGrid();
  });

  document.getElementById('cost-filter').addEventListener('change', (e) => {
    state.costFilter = e.target.value;
    renderDestinationsGrid();
  });

  // Plantillas de itinerario
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset');
      state.itineraryPreset = preset;
      state.itineraryDays = JSON.parse(JSON.stringify(ITINERARY_PRESETS_BASE[preset]));
      document.querySelectorAll('.preset-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-preset') === preset);
      });
      renderItinerary();
    });
  });

  // Añadir parada al itinerario
  document.getElementById('btn-itin-add-stop').addEventListener('click', () => {
    const dayIdx = parseInt(document.getElementById('itin-add-day-select').value, 10) || 0;
    const destId = document.getElementById('itin-add-dest-select').value;
    const slotId = document.getElementById('itin-add-slot-select').value;
    if (state.itineraryDays[dayIdx]) {
      state.itineraryDays[dayIdx].stops.push({ destId, slotId });
      renderItinerary();
    }
  });

  // Copiar resumen de itinerario
  document.getElementById('btn-copy-itinerary').addEventListener('click', () => {
    const dict = t();
    const titles = dict.presetTitles[state.itineraryPreset] || [];
    const lines = [`${dict.brandTitle.toUpperCase()} — ${dict.itinTitle.toUpperCase()}`];
    state.itineraryDays.forEach((d, idx) => {
      const dayTitle = titles[idx] || `${dict.dayWord} ${d.day}`;
      lines.push(`\n${dict.dayWord} ${d.day}: ${dayTitle}`);
      d.stops.forEach(s => {
        const dest = DESTINATIONS.find(x => x.id === s.destId);
        if (dest) {
          const info = getDestText(dest);
          lines.push(`  • [${getSlotLabel(s.slotId)}] ${info.name} (${info.metro}) — ${formatMoney(dest.costCOP)}`);
        }
      });
    });
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lines.join('\n')).catch(() => {});
    }
    const lbl = document.getElementById('copy-itinerary-label');
    lbl.textContent = dict.copiedItin;
    setTimeout(() => { lbl.textContent = t().copyItin; }, 1800);
  });

  // Simulador Metro
  document.getElementById('metro-origin').addEventListener('change', renderMetroRouteResult);
  document.getElementById('metro-dest').addEventListener('change', renderMetroRouteResult);

  // Calculadora de presupuesto
  document.getElementById('budget-days').addEventListener('input', (e) => {
    state.budget.days = parseInt(e.target.value, 10);
    renderBudgetCalculator();
  });

  document.getElementById('budget-travelers').addEventListener('input', (e) => {
    state.budget.travelers = parseInt(e.target.value, 10);
    renderBudgetCalculator();
  });

  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.budget.style = btn.getAttribute('data-style');
      document.querySelectorAll('.style-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-style') === state.budget.style);
      });
      renderBudgetCalculator();
    });
  });
}

// Inicialización
renderAll();
initEvents();
