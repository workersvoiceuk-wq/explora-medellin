// ============================================================================
// Explora Medellín — Lógica Interactiva (Vanilla JS)
// ============================================================================

const EXCHANGE_RATES = {
  COP: { rate: 1, symbol: '$', suffix: ' COP' },
  USD: { rate: 1 / 4150, symbol: 'US$', suffix: ' USD' },
  EUR: { rate: 1 / 4450, symbol: '€', suffix: ' EUR' }
};

const DESTINATIONS = [
  {
    id: 'comuna13',
    name: 'Comuna 13 (San Javier & Graffitour)',
    zone: 'Occidente · Comuna 13',
    category: 'Cultura & Arte',
    mapX: 118,
    mapY: 168,
    metro: 'Estación San Javier (Línea B) + Bus integrado 221i',
    durationHours: 3.5,
    costCOP: 65000,
    costNote: 'Acceso público gratuito a las escaleras; tour guiado local recomendado',
    bestTime: 'Mañana (09:00 – 12:00)',
    summary: 'Símbolo mundial de resiliencia urbana y arte comunitario. Sus seis tramos de escaleras eléctricas públicas al aire libre conectan miradores, galerías de muralismo hip-hop y cafés locales.',
    highlights: [
      'Escaleras eléctricas al aire libre de 384 metros',
      'Murales de artistas locales y presentaciones de breakdance',
      'Miradores panorámicos con helados de mango biche y café de origen'
    ],
    tip: 'Recórrela con un guía local nacido en la Comuna 13 para comprender a fondo su historia y transformación social.'
  },
  {
    id: 'plazabotero',
    name: 'Plaza Botero & Museo de Antioquia',
    zone: 'Centro · La Candelaria (Comuna 10)',
    category: 'Cultura & Arte',
    mapX: 282,
    mapY: 170,
    metro: 'Estación Parque Berrío (Línea A)',
    durationHours: 3,
    costCOP: 36000,
    costNote: 'Plaza gratuita; entrada al Museo de Antioquia para visitantes',
    bestTime: 'Mañana (09:30 – 13:00)',
    summary: 'Museo al aire libre con 23 esculturas monumentales en bronce donadas por el maestro Fernando Botero, frente al Museo de Antioquia y al Palacio de la Cultura Rafael Uribe Uribe.',
    highlights: [
      '23 esculturas monumentales en bronce de Fernando Botero',
      'Colección permanente de Botero y Pedro Nel Gómez en el Museo',
      'Cúpula y terraza mirador gratuita en el Palacio de la Cultura'
    ],
    tip: 'Ingresa al Palacio de la Cultura (edificio gótico ajedrezado junto a la plaza): la subida a su terraza panorámica es gratuita.'
  },
  {
    id: 'parquearvi',
    name: 'Parque Arví & Santa Elena',
    zone: 'Oriente Alto · 2.500 m s.n.m.',
    category: 'Naturaleza & Miradores',
    mapX: 505,
    mapY: 78,
    metro: 'Acevedo (Línea A) → Cable K (Santo Domingo) → Cable L (Arví)',
    durationHours: 4.5,
    costCOP: 29500,
    costNote: 'Tarifa del trayecto turístico en Metrocable Línea L',
    bestTime: 'Mañana (09:00 – 14:00) · Cerrado lunes (o martes tras festivo)',
    summary: 'Reserva ecológica de bosque de niebla conectada directamente por el Metrocable Línea L. Cuna de la tradición silletera declarada Patrimonio Cultural de la Nación.',
    highlights: [
      'Viaje panorámico sobre el dosel del bosque en Metrocable Línea L',
      'Mercado campesino Arví junto a la estación de llegada',
      'Senderos ecológicos guiados y visitas a fincas silleteras'
    ],
    tip: 'Lleva chaqueta impermeable: en Santa Elena la temperatura es unos 8°C a 10°C más fresca que en el centro del valle.'
  },
  {
    id: 'jardinbotanico',
    name: 'Jardín Botánico & Parque Explora',
    zone: 'Zona Norte · Carabobo Norte',
    category: 'Naturaleza & Miradores',
    mapX: 296,
    mapY: 112,
    metro: 'Estación Universidad (Línea A)',
    durationHours: 4,
    costCOP: 0,
    costNote: 'Entrada libre al Jardín Botánico · Parque Explora opcional ($45.000 COP)',
    bestTime: 'Todo el día (09:00 – 16:30)',
    summary: 'Pulmón verde de 14 hectáreas famoso por su Orquideorama arquitectónico en madera, su laguna con iguanas y su conexión directa con el acuario amazónico del Parque Explora.',
    highlights: [
      'Orquideorama y colecciones de flora tropical colombiana',
      'Entrada gratuita al Jardín Botánico Joaquín Antonio Uribe',
      'Acuario de agua dulce y planetario frente a la salida norte'
    ],
    tip: 'El restaurante In Situ dentro del Jardín Botánico ofrece excelente cocina colombiana rodeada de jardines.'
  },
  {
    id: 'provenza',
    name: 'El Poblado: Provenza & Barrio Manila',
    zone: 'Suroriente · Comuna 14',
    category: 'Barrios & Vida Local',
    mapX: 318,
    mapY: 312,
    metro: 'Estación Poblado (Línea A) + 12 min a pie',
    durationHours: 3.5,
    costCOP: 45000,
    costNote: 'Paseo libre; consumo estimado en café de especialidad o cena',
    bestTime: 'Tarde y noche (16:00 – 23:00)',
    summary: 'Calles peatonales arboladas junto a la quebrada La Presidenta donde se concentran los mejores cafés de especialidad de Antioquia, diseño independiente y gastronomía de autor.',
    highlights: [
      'Pasaje peatonal de Provenza rodeado de vegetación tropical',
      'Cafés de origen y restaurantes boutique en el barrio Manila',
      'Parque Lineal La Presidenta para caminar entre ceibas y bambúes'
    ],
    tip: 'Inicia tu recorrido al atardecer con una cata de café filtrado en Manila o vía Primavera antes de cenar en Provenza.'
  },
  {
    id: 'laureles',
    name: 'Laureles, Segundo Parque & La 70',
    zone: 'Occidente Central · Comuna 11',
    category: 'Barrios & Vida Local',
    mapX: 215,
    mapY: 205,
    metro: 'Estación Estadio (Línea B)',
    durationHours: 3,
    costCOP: 30000,
    costNote: 'Recorrido libre; consumo estimado en cafés o bares de salsa',
    bestTime: 'Tarde en Parques de Laureles; noche en La 70',
    summary: 'Barrio plano de trazado circular lleno de almendros, panaderías artesanales y cafés tranquilos, que se transforma por la noche en el corredor musical y futbolero de la carrera 70.',
    highlights: [
      'Primer y Segundo Parque de Laureles con terrazas gastronómicas',
      'Unidad Deportiva Atanasio Girardot (corazón deportivo de la ciudad)',
      'Bares clásicos de salsa y música en vivo en el Boulevard de La 70'
    ],
    tip: 'Ideal para recorrer a pie o en bicicleta gracias a su topografía completamente plana y sombreada.'
  },
  {
    id: 'pueblitopaisa',
    name: 'Pueblito Paisa & Cerro Nutibara',
    zone: 'Centro-Occidente · Cerro Tutelar',
    category: 'Naturaleza & Miradores',
    mapX: 256,
    mapY: 238,
    metro: 'Estación Exposiciones (Línea A) + ascenso al cerro',
    durationHours: 2,
    costCOP: 0,
    costNote: 'Acceso gratuito al mirador 360° y senderos ecológicos',
    bestTime: 'Atardecer (16:30 – 18:30)',
    summary: 'En la cima del Cerro Nutibara se levanta la recreación de un pueblo tradicional antioqueño del siglo XIX con el mirador de 360 grados más central sobre el Valle de Aburrá.',
    highlights: [
      'Vista panorámica de 360° del valle, el río y las montañas',
      'Plaza tradicional con capilla, escuela y fondas típicas',
      'Senderos peatonales y esculturas monumentales en las laderas'
    ],
    tip: 'Llega a las 17:00 para ver tanto la vista diurna de las montañas como el encendido nocturno de Medellín.'
  },
  {
    id: 'casamemoria',
    name: 'Museo Casa de la Memoria & Tranvía',
    zone: 'Centro Oriente · Parque Bicentenario',
    category: 'Cultura & Arte',
    mapX: 358,
    mapY: 185,
    metro: 'Tranvía de Ayacucho (Línea T-A) — Estación Bicentenario',
    durationHours: 2.5,
    costCOP: 0,
    costNote: 'Entrada gratuita al museo; solo pagas el pasaje del Metro/Tranvía',
    bestTime: 'Mañana o tarde (Martes a Domingo)',
    summary: 'Espacio museográfico interactivo imprescindible para comprender con rigor y empatía la historia del conflicto y la reconstrucción del tejido social en Medellín.',
    highlights: [
      'Exposición interactiva multimedia con relatos de resiliencia',
      'Llegada a través del corredor de arte urbano del Tranvía de Ayacucho',
      'Parque Bicentenario y quebrada Santa Elena'
    ],
    tip: 'Combina la visita con un recorrido completo en el Tranvía de Ayacucho hasta la estación Oriente y el Metrocable Línea H.'
  },
  {
    id: 'salonmalaga',
    name: 'Salón Málaga & Carabobo Peatonal',
    zone: 'Centro · Estación San Antonio',
    category: 'Cultura & Arte',
    mapX: 286,
    mapY: 192,
    metro: 'Estación San Antonio (Líneas A, B y Tranvía)',
    durationHours: 2,
    costCOP: 15000,
    costNote: 'Entrada libre; consumo de café (tinto) o bebida tradicional',
    bestTime: 'Tarde (15:00 – 19:00)',
    summary: 'Fundado en 1957, el Salón Málaga es un santuario vivo del tango, el bolero y la música de antaño en Medellín, decorado con vitrolas históricas y archivo fotográfico del siglo XX.',
    highlights: [
      'Colección centenaria de vinilos y vitrolas en funcionamiento',
      'Paseo peatonal de Carabobo y arquitectura del Palacio Nacional',
      'Tertulias musicales y ambiente bohemio auténtico'
    ],
    tip: 'Los domingos por la tarde suele haber tertulia musical en vivo para los amantes del tango y el bolero.'
  },
  {
    id: 'guatape',
    name: 'Guatapé & Piedra del Peñol',
    zone: 'Excursión Oriente · A 80 km de Medellín',
    category: 'Excursiones',
    mapX: 605,
    mapY: 148,
    metro: 'Estación Caribe (Línea A) → Terminal del Norte (Taquilla 9/14)',
    durationHours: 9,
    costCOP: 115000,
    costNote: 'Incluye buses ida/regreso ($40k), ingreso a la Piedra ($30k) y almuerzo',
    bestTime: 'Salir a las 07:00 desde Terminal del Norte',
    summary: 'El monolito de 220 metros (740 escalones) ofrece una de las vistas más espectaculares de Sudamérica sobre el embalse, a pocos minutos del pueblo de Guatapé y sus coloridos zócalos.',
    highlights: [
      'Ascenso de 740 escalones a la cima de la Piedra del Peñol',
      'Plazoleta de los Zócalos y Calle del Recuerdo en Guatapé',
      'Recorridos en motochiva (tuk-tuk) y paseo en bote por la represa'
    ],
    tip: 'Pide al conductor del bus que te deje primero en el paradero de La Piedra y luego toma un tuk-tuk colorido hasta el parque de Guatapé.'
  },
  {
    id: 'santafe',
    name: 'Santa Fe de Antioquia & Puente de Occidente',
    zone: 'Excursión Occidente · A 55 km por Túnel de Occidente',
    category: 'Excursiones',
    mapX: 52,
    mapY: 78,
    metro: 'Estación Caribe (Línea A) → Terminal del Norte',
    durationHours: 7.5,
    costCOP: 85000,
    costNote: 'Buses ida/vuelta + mototaxi al Puente Colgante de Occidente',
    bestTime: 'Día completo (clima cálido de 30°C)',
    summary: 'Pueblo Patrimonio de Colombia fundado en 1541, célebre por su arquitectura colonial blanca, sus talleres de filigrana en oro y el histórico Puente de Occidente sobre el río Cauca.',
    highlights: [
      'Puente Colgante de Occidente (obra maestra de ingeniería de 1895)',
      'Calles empedradas, siete iglesias coloniales y Plaza Mayor',
      'Dulces típicos de tamarindo y joyería artesanal en filigrana'
    ],
    tip: 'Está a solo 1 hora de Medellín cruzando el Túnel de Occidente; lleva ropa fresca de verano y protector solar.'
  },
  {
    id: 'fincacafe',
    name: 'Tour Cafetero en Palmitas / Santa Elena',
    zone: 'Laderas del Valle · 1.850 m s.n.m.',
    category: 'Excursiones',
    mapX: 162,
    mapY: 96,
    metro: 'San Javier (Línea B) o Metrocable Arví + transporte veredal',
    durationHours: 4.5,
    costCOP: 120000,
    costNote: 'Recorrido guiado por cafetal, recolección, beneficio y cata profesional',
    bestTime: 'Mañana (08:30 – 13:00)',
    summary: 'Vive el proceso completo del café de montaña antioqueño del grano a la taza en fincas familiares a menos de 40 minutos del centro de Medellín.',
    highlights: [
      'Recolección manual en cafetales de altura con vista al valle',
      'Cata guiada de cafés especiales en métodos de filtrado',
      'Almuerzo tradicional montañero envuelto en hoja de bijao (fiambre)'
    ],
    tip: 'Compra café en grano directamente a las familias productoras: obtendrás tueste fresco de la misma semana.'
  }
];

const ITINERARY_PRESETS = {
  '1day': [
    {
      day: 1,
      title: 'Medellín Exprés: Lo Imperdible en 24 Horas',
      stops: [
        { destId: 'plazabotero', slot: 'Mañana (08:30)' },
        { destId: 'comuna13', slot: 'Mediodía (12:30)' },
        { destId: 'pueblitopaisa', slot: 'Tarde (16:30)' },
        { destId: 'provenza', slot: 'Noche (19:30)' }
      ]
    }
  ],
  '3days': [
    {
      day: 1,
      title: 'Centro Histórico, Esculturas de Botero y Comuna 13',
      stops: [
        { destId: 'plazabotero', slot: 'Mañana (08:30)' },
        { destId: 'salonmalaga', slot: 'Mediodía (12:30)' },
        { destId: 'comuna13', slot: 'Tarde (15:00)' }
      ]
    },
    {
      day: 2,
      title: 'Vuelo en Metrocable a Parque Arví, Jardín Botánico y Laureles',
      stops: [
        { destId: 'parquearvi', slot: 'Mañana (08:30)' },
        { destId: 'jardinbotanico', slot: 'Tarde (15:00)' },
        { destId: 'laureles', slot: 'Noche (19:30)' }
      ]
    },
    {
      day: 3,
      title: 'Excursión a Guatapé & Piedra del Peñol + Cena en Provenza',
      stops: [
        { destId: 'guatape', slot: 'Mañana (08:30)' },
        { destId: 'provenza', slot: 'Noche (19:30)' }
      ]
    }
  ],
  '5days': [
    {
      day: 1,
      title: 'Centro Patrimonial, Tranvía de Ayacucho y Casa de la Memoria',
      stops: [
        { destId: 'plazabotero', slot: 'Mañana (08:30)' },
        { destId: 'salonmalaga', slot: 'Mediodía (12:30)' },
        { destId: 'casamemoria', slot: 'Tarde (15:00)' }
      ]
    },
    {
      day: 2,
      title: 'Arte Urbano en Comuna 13, Pueblito Paisa y Noche en La 70',
      stops: [
        { destId: 'comuna13', slot: 'Mañana (08:30)' },
        { destId: 'pueblitopaisa', slot: 'Tarde (15:00)' },
        { destId: 'laureles', slot: 'Noche (19:30)' }
      ]
    },
    {
      day: 3,
      title: 'Naturaleza en Parque Arví y Zona Norte',
      stops: [
        { destId: 'parquearvi', slot: 'Mañana (08:30)' },
        { destId: 'jardinbotanico', slot: 'Tarde (15:00)' }
      ]
    },
    {
      day: 4,
      title: 'Gran Excursión a Guatapé y la Piedra del Peñol',
      stops: [
        { destId: 'guatape', slot: 'Mañana (08:30)' }
      ]
    },
    {
      day: 5,
      title: 'Finca Cafetera de Montaña y Despedida en Provenza',
      stops: [
        { destId: 'fincacafe', slot: 'Mañana (08:30)' },
        { destId: 'provenza', slot: 'Noche (19:30)' }
      ]
    }
  ]
};

const GASTRONOMY_ITEMS = [
  {
    name: 'Bandeja Paisa Tradicional',
    tag: 'Plato Insignia',
    priceCOP: 46000,
    desc: 'Frijoles cargamanto, arroz blanco, chicharrón crocante, carne en polvo, chorizo antioqueño, morcilla, huevo frito, tajada de maduro, aguacate y arepa.',
    where: 'Hacienda (Centro/Poblado), Mondongo’s (La 70), El Rancherito'
  },
  {
    name: 'Arepa de Choclo con Quesito',
    tag: 'Desayuno / Algo',
    priceCOP: 14000,
    desc: 'Arepa dulce de maíz tierno asada a la plancha con mantequilla y acompañada de una generosa porción de quesito fresco antioqueño.',
    where: 'Miradores de Las Palmas, Santa Elena y mercados locales'
  },
  {
    name: 'Mondongo Antioqueño',
    tag: 'Sopa Tradicional',
    priceCOP: 42000,
    desc: 'Sopa cocinada lentamente con callo, costilla de cerdo, chorizo, yuca, papa criolla y cilantro, servida con aguacate, banano y arepa.',
    where: 'Mondongo’s (Laureles / El Poblado) y Envigado'
  },
  {
    name: 'Buñuelos Calientes & Café de Especialidad',
    tag: 'Panadería & Café',
    priceCOP: 12000,
    desc: 'Esferas doradas y esponjosas de queso costeño y almidón de yuca, acompañadas de café arábica cultivado en las montañas de Antioquia.',
    where: 'Salón Versalles (Junín), Pergamino Café, panaderías de Laureles'
  },
  {
    name: 'Cazuela de Frijoles',
    tag: 'Almuerzo Típico',
    priceCOP: 39000,
    desc: 'Frijoles cremosos servidos en cazuela de barro con chicharrón en cubos, maduro, aguacate, maicitos y viruta de papa.',
    where: 'Ajiacos y Mondongos (Provenza), Hatoviejo'
  },
  {
    name: 'Empanadas de Iglesia con Ají Casero',
    tag: 'Comida Callejera',
    priceCOP: 8000,
    desc: 'Masa crujiente de maíz trillado rellena de papa criolla y carne desmechada, acompañada de ají picante de cilantro.',
    where: 'Plazas de Envigado, Sabaneta y Pueblito Paisa'
  }
];

const METRO_ROUTES = {
  'poblado-comuna13': {
    steps: 'Toma Línea A en Poblado dirección Niquía → Haz trasbordo interno sin costo en San Antonio a Línea B → Baja en estación terminal San Javier → Toma el bus integrado 221i o camina 10 min hasta las Escaleras Eléctricas.',
    time: '38 min',
    fareCOP: 3900,
    transfers: '1 trasbordo interno gratuito en San Antonio'
  },
  'poblado-arvi': {
    steps: 'Toma Línea A en Poblado dirección Niquía → Baja en Acevedo y sube al Metrocable Línea K hasta Santo Domingo Savio → Haz trasbordo al Metrocable Turístico Línea L directo al Parque Arví.',
    time: '55 min',
    fareCOP: 33400,
    transfers: 'Línea A + Cable K integrados; Cable L requiere tiquete turístico Arví'
  },
  'poblado-botero': {
    steps: 'Toma Línea A en Poblado dirección Niquía → Baja directamente en estación Parque Berrío → Sal por la plataforma norte directo a las esculturas de Plaza Botero.',
    time: '14 min',
    fareCOP: 3900,
    transfers: 'Directo sin trasbordos por Línea A'
  },
  'poblado-botanico': {
    steps: 'Toma Línea A en Poblado dirección Niquía → Baja en estación Universidad → Cruza el puente peatonal directo hacia el Jardín Botánico y Parque Explora.',
    time: '20 min',
    fareCOP: 3900,
    transfers: 'Directo sin trasbordos por Línea A'
  },
  'poblado-tranvia': {
    steps: 'Toma Línea A en Poblado → En estación San Antonio haz trasbordo interno al Tranvía de Ayacucho (Línea T-A) → Baja en Bicentenario (Museo Casa de la Memoria) u Oriente.',
    time: '26 min',
    fareCOP: 3900,
    transfers: 'Trasbordo integrado gratuito en San Antonio'
  },
  'poblado-guatape': {
    steps: 'Toma Línea A en Poblado dirección Niquía → Baja en estación Caribe → Cruza la pasarela cubierta directo a la Terminal de Transporte del Norte (Taquillas 9 o 14 hacia Guatapé).',
    time: '22 min (hasta Terminal)',
    fareCOP: 3900,
    transfers: 'Directo hasta Terminal del Norte (+ $20.000 COP bus a Guatapé)'
  }
};

// Estado global de la aplicación
const state = {
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
  itineraryDays: JSON.parse(JSON.stringify(ITINERARY_PRESETS['3days'])),
  budget: {
    days: 4,
    travelers: 2,
    style: 'comfort'
  }
};

function formatMoney(amountCOP) {
  if (amountCOP === 0) return 'Gratis';
  const cfg = EXCHANGE_RATES[state.currency];
  const converted = Math.round(amountCOP * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString('es-CO')}${cfg.suffix}`;
}

function renderMapPins() {
  const layer = document.getElementById('map-pins-layer');
  layer.innerHTML = '';

  DESTINATIONS.forEach((dest, idx) => {
    const isSelected = dest.id === state.selectedDestId;
    const isFav = state.favorites.has(dest.id);

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

    const shortLabel = dest.name.split('(')[0].split('&')[0].trim();
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
  const container = document.getElementById('destination-inspector');
  const dest = DESTINATIONS.find(d => d.id === state.selectedDestId) || DESTINATIONS[0];
  const idx = DESTINATIONS.indexOf(dest) + 1;
  const isFav = state.favorites.has(dest.id);

  container.innerHTML = `
    <div class="card-header">
      <div>
        <span class="tag-badge">#${idx} · ${dest.category} · ${dest.zone}</span>
        <h3 class="section-title" style="margin-top: 0.4rem; font-size: 1.15rem;">${dest.name}</h3>
      </div>
      <button id="inspector-fav-btn" type="button" class="btn-outline ${isFav ? 'active' : ''}">
        <span>${isFav ? '♥ Guardado' : '♡ Guardar'}</span>
      </button>
    </div>

    <p style="font-size: 0.88rem; color: var(--text-secondary);">${dest.summary}</p>

    <div class="inspector-meta-grid">
      <div class="meta-box">
        <span class="meta-box-label">Cómo llegar en Metro / Cable</span>
        <strong>${dest.metro}</strong>
      </div>
      <div class="meta-box">
        <span class="meta-box-label">Presupuesto &amp; Duración</span>
        <strong class="price-label">${formatMoney(dest.costCOP)}</strong>
        <span> · ${dest.durationHours} horas</span>
      </div>
    </div>

    <div>
      <strong style="font-size: 0.83rem;">Puntos destacados:</strong>
      <ul class="highlights-list">
        ${dest.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div class="tip-callout">
      <strong>💡 Consejo Paisa (${dest.bestTime}):</strong>
      <p style="margin-top: 0.25rem; color: var(--text-secondary);">${dest.tip}</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;">
      <span style="font-size: 0.76rem; color: var(--text-muted);">${dest.costNote}</span>
      <button id="inspector-add-itin-btn" type="button" class="btn-primary">
        + Añadir al Día 1 del Itinerario
      </button>
    </div>
  `;

  document.getElementById('inspector-fav-btn').addEventListener('click', () => {
    toggleFavorite(dest.id);
  });

  document.getElementById('inspector-add-itin-btn').addEventListener('click', () => {
    if (state.itineraryDays.length > 0) {
      state.itineraryDays[0].stops.push({ destId: dest.id, slot: 'Tarde (15:00)' });
      renderItinerary();
      const btn = document.getElementById('inspector-add-itin-btn');
      btn.textContent = '✓ Añadido a tu Itinerario';
      setTimeout(() => {
        if (btn) btn.textContent = '+ Añadir al Día 1 del Itinerario';
      }, 1500);
    }
  });
}

function renderDestinationsGrid() {
  const grid = document.getElementById('destinations-grid');
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = DESTINATIONS.filter(d => {
    if (state.onlyFavorites && !state.favorites.has(d.id)) return false;
    if (state.categoryFilter !== 'all' && d.category !== state.categoryFilter) return false;
    if (state.costFilter === 'free' && d.costCOP > 0) return false;
    if (state.costFilter === 'budget' && d.costCOP > 50000) return false;
    if (query) {
      const hay = `${d.name} ${d.zone} ${d.category} ${d.metro} ${d.summary}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; text-align: center;">
        <p style="margin-bottom: 0.75rem; font-weight: 600;">No se encontraron destinos con esos criterios de búsqueda.</p>
        <button id="btn-reset-filters" type="button" class="btn-primary">Mostrar los 12 destinos</button>
      </div>
    `;
    document.getElementById('btn-reset-filters').addEventListener('click', () => {
      state.categoryFilter = 'all';
      state.costFilter = 'all';
      state.searchQuery = '';
      state.onlyFavorites = false;
      document.getElementById('search-destinations').value = '';
      document.getElementById('cost-filter').value = 'all';
      updateCategoryButtons();
      renderDestinationsGrid();
    });
    return;
  }

  grid.innerHTML = filtered.map(dest => {
    const idx = DESTINATIONS.indexOf(dest) + 1;
    const isSelected = dest.id === state.selectedDestId;
    const isFav = state.favorites.has(dest.id);

    return `
      <article id="card-${dest.id}" data-dest-id="${dest.id}" class="dest-card ${isSelected ? 'selected' : ''}">
        <div>
          <div class="dest-card-top">
            <span class="tag-badge">#${idx} · ${dest.category}</span>
            <span class="price-label">${formatMoney(dest.costCOP)}</span>
          </div>
          <h3 class="dest-card-title">${dest.name}</h3>
          <p class="dest-card-desc">${dest.summary}</p>
        </div>

        <div class="dest-card-footer">
          <div style="display: flex; justify-content: space-between; color: var(--text-muted);">
            <span>🚇 ${dest.metro.split('(')[0]}</span>
            <span>⏱️ ${dest.durationHours} h</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600; color: var(--brand-primary);">Ver en mapa y detalle →</span>
            <button type="button" data-fav="${dest.id}" class="btn-outline" style="padding: 0.25rem 0.55rem;" aria-label="Guardar ${dest.name}">
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
  const daySelect = document.getElementById('itin-add-day-select');
  daySelect.innerHTML = state.itineraryDays.map((d, i) => `<option value="${i}">Día ${d.day}</option>`).join('');

  const destSelect = document.getElementById('itin-add-dest-select');
  destSelect.innerHTML = DESTINATIONS.map(d => `<option value="${d.id}">${d.name} (${formatMoney(d.costCOP)})</option>`).join('');

  const container = document.getElementById('itinerary-days-container');
  let totalStops = 0;
  let totalHours = 0;
  let totalCostCOP = 0;

  container.innerHTML = state.itineraryDays.map((dayObj, dayIdx) => {
    const stopsHTML = dayObj.stops.map((stop, stopIdx) => {
      const dest = DESTINATIONS.find(d => d.id === stop.destId) || DESTINATIONS[0];
      totalStops += 1;
      totalHours += dest.durationHours;
      totalCostCOP += dest.costCOP;

      return `
        <div class="stop-item">
          <div>
            <span class="tag-badge">${stop.slot}</span>
            <strong style="margin-left: 0.45rem;">${dest.name}</strong>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.2rem;">
              🚇 ${dest.metro} · Duración: ${dest.durationHours} h
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="price-label">${formatMoney(dest.costCOP)}</span>
            <button type="button" data-remove-day="${dayIdx}" data-remove-stop="${stopIdx}" class="btn-outline">Quitar</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="day-card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>Día ${dayObj.day}: ${dayObj.title}</strong>
          <span class="tag-badge">${dayObj.stops.length} parada(s)</span>
        </div>
        ${stopsHTML || `<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Sin paradas asignadas. Añade un destino con el selector superior.</p>`}
      </div>
    `;
  }).join('');

  document.getElementById('itin-stat-days').textContent = `${state.itineraryDays.length} Día(s)`;
  document.getElementById('itin-stat-stops').textContent = `${totalStops} Lugares`;
  document.getElementById('itin-stat-hours').textContent = `${totalHours.toFixed(1)} h`;
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

function renderMetroRoute() {
  const origin = document.getElementById('metro-origin').value;
  const dest = document.getElementById('metro-dest').value;
  const box = document.getElementById('metro-route-result');

  const originNames = {
    poblado: 'El Poblado (Línea A)',
    estadio: 'Estadio / Laureles (Línea B)',
    berrio: 'Parque Berrío / Centro (Línea A)',
    universidad: 'Universidad / Zona Norte (Línea A)',
    sanjavier: 'San Javier / Comuna 13 (Línea B)'
  };

  const baseRoute = METRO_ROUTES[`poblado-${dest}`] || METRO_ROUTES['poblado-comuna13'];
  let customSteps = baseRoute.steps;
  if (origin === 'estadio') {
    customSteps = customSteps.replace('Toma Línea A en Poblado dirección Niquía →', 'Toma Línea B en Estadio hacia San Antonio →');
  } else if (origin === 'berrio') {
    customSteps = customSteps.replace('Toma Línea A en Poblado dirección Niquía →', 'Desde estación Parque Berrío (Línea A) →');
  } else if (origin === 'universidad') {
    customSteps = customSteps.replace('Toma Línea A en Poblado dirección Niquía →', 'Desde estación Universidad (Línea A) →');
  } else if (origin === 'sanjavier') {
    customSteps = customSteps.replace('Toma Línea A en Poblado dirección Niquía →', 'Desde San Javier por Línea B hacia San Antonio →');
  }

  box.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
      <strong>Ruta desde ${originNames[origin]}</strong>
      <span class="price-label">${baseRoute.time} · ${formatMoney(baseRoute.fareCOP)}</span>
    </div>
    <p style="margin-bottom: 0.35rem;">${customSteps}</p>
    <span style="font-size: 0.75rem; color: var(--text-muted);">Integración SITVA: ${baseRoute.transfers}</span>
  `;
}

function renderGastronomy() {
  const grid = document.getElementById('gastronomy-grid');
  grid.innerHTML = GASTRONOMY_ITEMS.map(item => `
    <div class="meta-box" style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.5rem;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="tag-badge">${item.tag}</span>
          <span class="price-label">${formatMoney(item.priceCOP)}</span>
        </div>
        <h3 style="font-size: 0.92rem; margin: 0.4rem 0 0.25rem;">${item.name}</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">${item.desc}</p>
      </div>
      <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.35rem;">
        📍 Recomendado en: <strong>${item.where}</strong>
      </div>
    </div>
  `).join('');
}

function renderBudgetCalculator() {
  const { days, travelers, style } = state.budget;
  document.getElementById('budget-days-val').textContent = `${days} día${days > 1 ? 's' : ''}`;
  document.getElementById('budget-travelers-val').textContent = `${travelers} persona${travelers > 1 ? 's' : ''}`;

  const dailyRates = {
    backpacker: { lodging: 75000, food: 65000, transport: 22000, tours: 40000 },
    comfort:    { lodging: 190000, food: 120000, transport: 45000, tours: 75000 },
    luxury:     { lodging: 440000, food: 240000, transport: 95000, tours: 140000 }
  };

  const rate = dailyRates[style];
  const perPersonDayCOP = rate.lodging + rate.food + rate.transport + rate.tours;
  const totalGroupCOP = perPersonDayCOP * days * travelers;

  const categories = [
    { label: 'Alojamiento', val: rate.lodging * days * travelers, color: 'var(--brand-primary)' },
    { label: 'Gastronomía & Cafés', val: rate.food * days * travelers, color: 'var(--accent-terracotta)' },
    { label: 'Tours & Entradas', val: rate.tours * days * travelers, color: 'var(--accent-gold)' },
    { label: 'Transporte (Metro & Taxis)', val: rate.transport * days * travelers, color: 'var(--accent-metro)' }
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

function updateCategoryButtons() {
  document.querySelectorAll('#category-filters .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === state.categoryFilter);
  });
}

function initEvents() {
  // Cambio de pestañas
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      state.activeTab = tab;
      ['explorar', 'itinerario', 'metro', 'cultura'].forEach(t => {
        document.getElementById(`tab-panel-${t}`).classList.toggle('hidden', t !== tab);
        document.getElementById(`tab-btn-${t}`).classList.toggle('active', t === tab);
      });
    });
  });

  // Cambio de moneda
  document.querySelectorAll('.segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currency = btn.getAttribute('data-currency');
      document.querySelectorAll('.segment-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-currency') === state.currency);
      });
      renderInspector();
      renderDestinationsGrid();
      renderItinerary();
      renderMetroRoute();
      renderGastronomy();
      renderBudgetCalculator();
    });
  });

  // Cambio de tema claro/oscuro
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('theme-toggle-label').textContent = state.theme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
  });

  // Filtro de favoritos
  document.getElementById('btn-filter-favorites').addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;
    document.getElementById('btn-filter-favorites').classList.toggle('active', state.onlyFavorites);
    renderDestinationsGrid();
  });

  // Filtros de categoría
  document.querySelectorAll('#category-filters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.categoryFilter = btn.getAttribute('data-category');
      updateCategoryButtons();
      renderDestinationsGrid();
    });
  });

  // Búsqueda y filtro de costo
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
      state.itineraryDays = JSON.parse(JSON.stringify(ITINERARY_PRESETS[preset]));
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
    const slot = document.getElementById('itin-add-slot-select').value;
    if (state.itineraryDays[dayIdx]) {
      state.itineraryDays[dayIdx].stops.push({ destId, slot });
      renderItinerary();
    }
  });

  // Copiar resumen de itinerario
  document.getElementById('btn-copy-itinerary').addEventListener('click', () => {
    const lines = ['ITINERARIO DE VIAJE — EXPLORA MEDELLÍN'];
    state.itineraryDays.forEach(d => {
      lines.push(`\nDía ${d.day}: ${d.title}`);
      d.stops.forEach(s => {
        const dest = DESTINATIONS.find(x => x.id === s.destId);
        if (dest) {
          lines.push(`  • [${s.slot}] ${dest.name} (${dest.metro}) — ${formatMoney(dest.costCOP)}`);
        }
      });
    });
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lines.join('\n')).catch(() => {});
    }
    const lbl = document.getElementById('copy-itinerary-label');
    lbl.textContent = '✓ ¡Itinerario Copiado!';
    setTimeout(() => { lbl.textContent = '📋 Copiar Itinerario'; }, 1800);
  });

  // Simulador Metro
  document.getElementById('metro-origin').addEventListener('change', renderMetroRoute);
  document.getElementById('metro-dest').addEventListener('change', renderMetroRoute);

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
renderMapPins();
renderInspector();
renderDestinationsGrid();
renderItinerary();
renderMetroRoute();
renderGastronomy();
renderBudgetCalculator();
initEvents();
