// ============================================================================
// Explora Medellín — Aplicación Turística Multilingüe (ES · EN · PT · FR)
// ============================================================================

const EXCHANGE_RATES = {
  COP: { rate: 1, symbol: '$', suffix: ' COP' },
  USD: { rate: 1 / 4150, symbol: 'US$', suffix: ' USD' },
  EUR: { rate: 1 / 4450, symbol: '€', suffix: ' EUR' }
};

// Diccionario de interfaz y contenidos estáticos en 4 idiomas
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
    footerText: '<strong>Explora Medellín</strong> — Guía Turística Interactiva del Valle de Aburrá, Antioquia, Colombia (ES · EN · PT · FR).'
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
    footerText: '<strong>Explore Medellín</strong> — Interactive Tourism Guide to the Aburrá Valley, Antioquia, Colombia (ES · EN · PT · FR).'
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
    footerText: '<strong>Explore Medellín</strong> — Guia Turístico Interativo do Vale de Aburrá, Antioquia, Colômbia (ES · EN · PT · FR).'
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
    footerText: '<strong>Explorez Medellín</strong> — Guide Touristique Interactif de la Vallée d’Aburrá, Antioquia, Colombie (ES · EN · PT · FR).'
  }
};

// Catálogo multilingüe de los 12 destinos turísticos
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
        summary: 'Símbolo mundial de resiliencia urbana y arte comunitario. Sus seis tramos de escaleras eléctricas al aire libre conectan miradores, galerías de muralismo hip-hop y cafés locales.',
        highlights: ['Escaleras eléctricas públicas al aire libre de 384 m', 'Murales de artistas locales y shows de breakdance', 'Miradores con helado artesanal de mango biche'],
        tip: 'Recórrela con un guía local nacido en la Comuna 13 para conocer la historia real detrás de cada mural.'
      },
      en: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'West · Comuna 13',
        metro: 'San Javier Station (Line B) + 221i feeder bus',
        costNote: 'Free public access to escalators; guided local tour recommended',
        bestTime: 'Morning (09:00 – 12:00)',
        summary: 'Global symbol of urban resilience and community art. Six outdoor public escalators connect vibrant hip-hop murals, viewpoints, and local coffee shops.',
        highlights: ['384-meter outdoor public escalators', 'Live breakdance shows and street art galleries', 'Panoramic viewpoints with green mango popsicles'],
        tip: 'Hire a local guide born in Comuna 13 to understand the powerful stories behind every mural.'
      },
      pt: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'Oeste · Comuna 13',
        metro: 'Estação San Javier (Linha B) + Ônibus integrado 221i',
        costNote: 'Acesso gratuito às escadas; tour guiado local recomendado',
        bestTime: 'Manhã (09:00 – 12:00)',
        summary: 'Símbolo mundial de resiliência urbana e arte comunitária. Seis lances de escadas rolantes ao ar livre conectam mirantes, galerias de grafite e cafés locais.',
        highlights: ['Escadas rolantes públicas ao ar livre de 384 m', 'Murais vibrantes e apresentações de breakdance', 'Mirantes com picolé artesanal de manga verde'],
        tip: 'Faça o passeio com um guia local nascido na Comuna 13 para compreender a história de transformação social.'
      },
      fr: {
        name: 'Comuna 13 (San Javier & Graffitour)',
        zone: 'Ouest · Comuna 13',
        metro: 'Station San Javier (Ligne B) + Bus intégré 221i',
        costNote: 'Accès gratuit aux escalators ; visite guidée locale recommandée',
        bestTime: 'Matin (09h00 – 12h00)',
        summary: 'Symbole mondial de résilience urbaine et d’art communautaire. Six escalators extérieurs relient des fresques hip-hop, des belvédères et des cafés locaux.',
        highlights: ['Escalators publics en plein air de 384 mètres', 'Fresques murales et spectacles de breakdance', 'Belvédères panoramiques et glaces à la mangue verte'],
        tip: 'Faites la visite avec un guide né dans la Comuna 13 pour comprendre l’histoire derrière chaque fresque.'
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

// Gastronomía multilingüe
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

// Opciones y rutas del simulador del Metro en 4 idiomas
const METRO_DATA = {
  origins: {
    poblado: {
      es: 'El Poblado (Línea A - Sur)',
      en: 'El Poblado (Line A - South)',
      pt: 'El Poblado (Linha A - Sul)',
      fr: 'El Poblado (Ligne A - Sud)'
    },
    estadio: {
      es: 'Estadio / Laureles (Línea B)',
      en: 'Estadio / Laureles (Line B)',
      pt: 'Estadio / Laureles (Linha B)',
      fr: 'Estadio / Laureles (Ligne B)'
    },
    berrio: {
      es: 'Parque Berrío / Centro (Línea A)',
      en: 'Parque Berrío / Downtown (Line A)',
      pt: 'Parque Berrío / Centro (Linha A)',
      fr: 'Parque Berrío / Centre (Ligne A)'
    },
    universidad: {
      es: 'Universidad / Zona Norte (Línea A)',
      en: 'Universidad / North District (Line A)',
      pt: 'Universidad / Zona Norte (Linha A)',
      fr: 'Universidad / Zone Nord (Ligne A)'
    },
    sanjavier: {
      es: 'San Javier / Comuna 13 (Línea B)',
      en: 'San Javier / Comuna 13 (Line B)',
      pt: 'San Javier / Comuna 13 (Linha B)',
      fr: 'San Javier / Comuna 13 (Ligne B)'
    }
  },
  dests: {
    comuna13: {
      es: 'Comuna 13 (Escaleras Eléctricas)',
      en: 'Comuna 13 (Outdoor Escalators)',
      pt: 'Comuna 13 (Escadas Rolantes)',
      fr: 'Comuna 13 (Escalators Extérieurs)'
    },
    arvi: {
      es: 'Parque Arví (Metrocable Línea L)',
      en: 'Arví Park (Metrocable Line L)',
      pt: 'Parque Arví (Metrocable Linha L)',
      fr: 'Parc Arví (Metrocable Ligne L)'
    },
    botero: {
      es: 'Plaza Botero & Museo de Antioquia',
      en: 'Plaza Botero & Museum of Antioquia',
      pt: 'Plaza Botero & Museu de Antioquia',
      fr: 'Plaza Botero & Musée d’Antioquia'
    },
    botanico: {
      es: 'Jardín Botánico & Parque Explora',
      en: 'Botanical Garden & Parque Explora',
      pt: 'Jardim Botânico & Parque Explora',
      fr: 'Jardin Botanique & Parque Explora'
    },
    tranvia: {
      es: 'Tranvía de Ayacucho & Museo Memoria',
      en: 'Ayacucho Tram & Memory Museum',
      pt: 'VLT de Ayacucho & Museu da Memória',
      fr: 'Tramway d’Ayacucho & Musée Mémoire'
    },
    guatape: {
      es: 'Terminal del Norte (Buses a Guatapé)',
      en: 'North Bus Terminal (Buses to Guatapé)',
      pt: 'Terminal Norte (Ônibus para Guatapé)',
      fr: 'Terminal Nord (Bus vers Guatapé)'
    }
  },
  routes: {
    comuna13: {
      time: '38 min',
      fareCOP: 3900,
      i18n: {
        es: { steps: 'Conecta hasta San Antonio → Haz trasbordo interno sin costo a la Línea B → Baja en la estación terminal San Javier → Toma el bus integrado 221i o camina 10 min hasta las Escaleras Eléctricas.', transfers: 'Trasbordo interno gratuito en San Antonio' },
        en: { steps: 'Ride to San Antonio transfer hub → Transfer free of charge to Line B westbound → Exit at San Javier terminal station → Take feeder bus 221i or walk 10 mins to the Comuna 13 Escalators.', transfers: 'Free internal transfer at San Antonio' },
        pt: { steps: 'Vá até a estação central San Antonio → Faça baldeação gratuita para a Linha B → Desça na estação final San Javier → Pegue o ônibus integrado 221i ou caminhe 10 min até as Escadas Rolantes.', transfers: 'Baldeação interna gratuita em San Antonio' },
        fr: { steps: 'Rejoignez la station San Antonio → Correspondance gratuite vers la Ligne B → Descendez au terminus San Javier → Prenez le bus 221i ou marchez 10 min jusqu’aux escalators de la Comuna 13.', transfers: 'Correspondance interne gratuite à San Antonio' }
      }
    },
    arvi: {
      time: '55 min',
      fareCOP: 33400,
      i18n: {
        es: { steps: 'Toma la Línea A dirección norte (Niquía) → En la estación Acevedo haz trasbordo al Metrocable Línea K hasta Santo Domingo Savio → Conecta allí con el Metrocable Turístico Línea L directo al Parque Arví.', transfers: 'Línea A + Cable K integrados; Línea L requiere tiquete Arví' },
        en: { steps: 'Take Line A northbound (towards Niquía) → At Acevedo station, transfer to Metrocable Line K up to Santo Domingo Savio → Transfer to Tourist Metrocable Line L into Arví Ecological Park.', transfers: 'Line A + Cable K included; Line L requires Arví tourist ticket' },
        pt: { steps: 'Pegue a Linha A sentido norte (Niquía) → Na estação Acevedo suba no Metrocable Linha K até Santo Domingo Savio → Faça conexão com o Metrocable Turístico Linha L direto ao Parque Arví.', transfers: 'Linha A + Teleférico K integrados; Linha L requer bilhete turístico' },
        fr: { steps: 'Prenez la Ligne A vers le nord (Niquía) → À Acevedo, montez dans le Metrocable Ligne K jusqu’à Santo Domingo Savio → Prenez le téléphérique touristique Ligne L jusqu’au Parc Arví.', transfers: 'Ligne A + Câble K intégrés ; billet touristique requis pour la Ligne L' }
      }
    },
    botero: {
      time: '14 min',
      fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A hasta la estación Parque Berrío → Sal por la pasarela norte directamente a las 23 esculturas monumentales de Plaza Botero y el Museo de Antioquia.', transfers: 'Conexión directa por Línea A' },
        en: { steps: 'Ride Line A to Parque Berrío station → Exit via the north platform walkway directly onto Plaza Botero’s 23 sculptures and the Museum of Antioquia.', transfers: 'Direct connection via Line A' },
        pt: { steps: 'Pegue a Linha A até a estação Parque Berrío → Saia pela passarela norte diretamente nas 23 esculturas da Plaza Botero e no Museu de Antioquia.', transfers: 'Conexão direta pela Linha A' },
        fr: { steps: 'Prenez la Ligne A jusqu’à la station Parque Berrío → Sortez par la passerelle nord directement sur la Plaza Botero et le Musée d’Antioquia.', transfers: 'Accès direct par la Ligne A' }
      }
    },
    botanico: {
      time: '20 min',
      fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A dirección Niquía → Baja en la estación Universidad → Cruza el puente peatonal directo hacia la entrada del Jardín Botánico y el Parque Explora.', transfers: 'Conexión directa por Línea A' },
        en: { steps: 'Take Line A northbound towards Niquía → Exit at Universidad station → Cross the pedestrian skybridge directly to the Botanical Garden and Parque Explora.', transfers: 'Direct connection via Line A' },
        pt: { steps: 'Pegue a Linha A sentido Niquía → Desça na estação Universidad → Atravesse a passarela de pedestres direto para o Jardim Botânico e Parque Explora.', transfers: 'Conexão direta pela Linha A' },
        fr: { steps: 'Prenez la Ligne A direction Niquía → Descendez à la station Universidad → Traversez la passerelle piétonne menant directement au Jardin Botanique et au Parque Explora.', transfers: 'Accès direct par la Ligne A' }
      }
    },
    tranvia: {
      time: '26 min',
      fareCOP: 3900,
      i18n: {
        es: { steps: 'Llega a la estación central San Antonio → Haz trasbordo interno al Tranvía de Ayacucho (Línea T-A) → Baja en la parada Bicentenario para el Museo Casa de la Memoria.', transfers: 'Trasbordo gratuito entre Metro y Tranvía en San Antonio' },
        en: { steps: 'Arrive at San Antonio transfer station → Transfer inside the station to the Ayacucho Tram (Line T-A) → Hop off at Bicentenario stop for the House of Memory Museum.', transfers: 'Free transfer between Metro and Tram at San Antonio' },
        pt: { steps: 'Chegue à estação central San Antonio → Faça integração interna com o VLT / Bonde de Ayacucho (Linha T-A) → Desça na parada Bicentenario para o Museu Casa da Memória.', transfers: 'Integração gratuita entre Metrô e VLT em San Antonio' },
        fr: { steps: 'Rejoignez la station centrale San Antonio → Correspondance interne avec le Tramway d’Ayacucho (Ligne T-A) → Descendez à l’arrêt Bicentenario pour le Musée Casa de la Memoria.', transfers: 'Correspondance gratuite Métro / Tramway à San Antonio' }
      }
    },
    guatape: {
      time: '22 min',
      fareCOP: 3900,
      i18n: {
        es: { steps: 'Toma la Línea A dirección norte → Baja en la estación Caribe → Cruza el puente peatonal cubierto directo a la Terminal del Norte (taquillas 9 o 14 para buses a Guatapé y El Peñol).', transfers: 'Directo a Terminal del Norte (+ $20.000 COP bus a Guatapé)' },
        en: { steps: 'Take Line A northbound → Exit at Caribe station → Walk across the covered skybridge directly into the North Bus Terminal (ticket booths 9 or 14 for buses to El Peñol & Guatapé).', transfers: 'Direct to North Terminal (+ $20,000 COP bus ticket to Guatapé)' },
        pt: { steps: 'Pegue a Linha A sentido norte → Desça na estação Caribe → Atravesse a passarela coberta direto para o Terminal Rodoviário Norte (guichês 9 ou 14 para Guatapé).', transfers: 'Direto ao Terminal Norte (+ $20.000 COP ônibus para Guatapé)' },
        fr: { steps: 'Prenez la Ligne A vers le nord → Descendez à la station Caribe → Empruntez la passerelle couverte menant directement au Terminal de Bus Nord (guichets 9 ou 14 pour Guatapé).', transfers: 'Direct jusqu’au Terminal Nord (+ $20 000 COP bus vers Guatapé)' }
      }
    }
  }
};

// Plantillas base de itinerario (usan IDs de franja para traducirse automáticamente)
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

// Estado de la aplicación
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

  // Estadísticas del valle
  document.getElementById('valley-stats-container').innerHTML = dict.valleyStats.map(s => `
    <div class="stat-mini">
      <span>${s.label}</span>
      <strong>${s.value}</strong>
    </div>
  `).join('');

  // Botones de categoría
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

  // Buscador y filtro de costo
  document.getElementById('search-destinations').placeholder = dict.searchPlaceholder;
  const costFilter = document.getElementById('cost-filter');
  costFilter.innerHTML = `
    <option value="all" ${state.costFilter === 'all' ? 'selected' : ''}>${dict.costOptions.all}</option>
    <option value="free" ${state.costFilter === 'free' ? 'selected' : ''}>${dict.costOptions.free}</option>
    <option value="budget" ${state.costFilter === 'budget' ? 'selected' : ''}>${dict.costOptions.budget}</option>
  `;

  // Textos del Planificador de Itinerario
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

  // Textos de Metro y Cultura
  document.getElementById('ui-metro-title').textContent = dict.metroTitle;
  document.getElementById('ui-metro-subtitle').textContent = dict.metroSubtitle;
  document.getElementById('ui-metro-origin-lbl').textContent = dict.metroOriginLbl;
  document.getElementById('ui-metro-dest-lbl').textContent = dict.metroDestLbl;
  document.getElementById('ui-metro-lines-heading').textContent = dict.metroLinesHeading;

  // Textos de Gastronomía y Presupuesto
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
// RENDERIZADO DEL MAPA Y PANEL INSPECTOR
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

// ============================================================================
// RENDERIZADO DEL CATÁLOGO DE DESTINOS
// ============================================================================
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

// ============================================================================
// RENDERIZADO DEL PLANIFICADOR DE ITINERARIOS
// ============================================================================
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

// ============================================================================
// RENDERIZADO DEL SIMULADOR METRO Y GUÍA PRÁCTICA
// ============================================================================
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

  // Tabla de líneas del Metro
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

  // Guía práctica y comparativa de barrios
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

// ============================================================================
// RENDERIZADO DE GASTRONOMÍA Y PRESUPUESTO
// ============================================================================
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
  renderItinerary();
  renderMetroSection();
  renderGastronomy();
  renderBudgetCalculator();
}

// ============================================================================
// EVENTOS DE USUARIO
// ============================================================================
function initEvents() {
  // Selector de idioma (ES / EN / PT / FR)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
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
      const tab = btn.getAttribute('data-tab');
      state.activeTab = tab;
      ['explorar', 'itinerario', 'metro', 'cultura'].forEach(tKey => {
        document.getElementById(`tab-panel-${tKey}`).classList.toggle('hidden', tKey !== tab);
        document.getElementById(`tab-btn-${tKey}`).classList.toggle('active', tKey === tab);
      });
    });
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

  // Copiar resumen de itinerario en el idioma activo
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
