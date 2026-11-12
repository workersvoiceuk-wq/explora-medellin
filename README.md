# Explora Medellín — Guía Turística Interactiva Multilingüe (`ES` · `EN` · `PT` · `FR`)

Aplicación web interactiva diseñada para explorar **Medellín, Colombia** (*La Ciudad de la Eterna Primavera*) y sus alrededores en Antioquia, disponible en **4 idiomas**:

- **Español (`ES`)**
- **English (`EN`)**
- **Português (`PT`)**
- **Français (`FR`)**

## Características Principales

- **Selector Multilingüe Instantáneo (`ES | EN | PT | FR`)**: Traduce en vivo toda la interfaz, el mapa del valle, el recorrido interactivo de la Comuna 13, las descripciones e historia de los 12 destinos, las instrucciones paso a paso del Metro y Metrocable, el planificador de itinerarios, la guía gastronómica y la calculadora de presupuesto.
- **🎨 Recorrido Interactivo Comuna 13 (Estilo *Bloomberg Connects* / *VoiceMap* / *Smartify* / *Google Arts & Culture*)**:
  - **Ruta Paso a Paso y Perfil de Altitud (`SVG`)**: Ascenso interactivo desde `1.530 m` (Estación San Javier) hasta `1.685 m` (*Mirador El Corazón & Casa Kolacho*) a través de **7 estaciones clave**, incluyendo los **6 tramos de las Escaleras Eléctricas de Las Independencias** (`384 m` de recorrido inaugurados el 25 de diciembre de 2011).
  - **Audioguía Integrada (`Web Speech API`)**: Narración por voz en español, inglés, portugués y francés para cada parada del recorrido.
  - **Archivo Documental en 5 Épocas Históricas**: Investigación profunda desde los orígenes y *El Convite* comunitario (años 60–80), el conflicto urbano (años 90), la *Operación Mariscal* y la **Marcha de los Pañuelos Blancos** (21 de mayo de 2002), la *Operación Orión* (16–17 de octubre de 2002), *La Escombrera* y las *Mujeres Caminando por la Verdad*, hasta el urbanismo social y el renacimiento cultural liderado por **Casa Kolacho** (en memoria de Héctor "Kolacho" Pacheco), **Son Batá** y **AgroArte** (*Cuerpos Gramaticales*).
  - **Decodificador Visual de Murales**: Etnografía visual y simbolismo de 6 obras emblemáticas de `@Chota_13` (elefantes como símbolo de memoria inquebrantable), `@YesGraff` (homenaje a los pañuelos blancos del 21 de mayo de 2002), `@Jomag`, **Casa Kolacho**, **Son Batá** y **AgroArte**.
- **Mapa Interactivo del Valle de Aburrá (`SVG`)**: Visualización del Río Medellín, las Líneas A y B del Metro, Metrocables (J hacia San Javier, K y L hacia el Parque Arví), el Tranvía de Ayacucho y 12 destinos turísticos emblemáticos.
- **Conversor de Moneda en Tiempo Real**: Precios en **Pesos Colombianos (`COP`)**, **Dólares (`USD`)** o **Euros (`EUR`)**.
- **Planificador de Itinerarios**: Plantillas listas para 1, 3 y 5 días con opción de añadir o quitar paradas y copia al portapapeles en el idioma seleccionado.
- **Simulador de Rutas del Sistema Metro (`SITVA`)**: Calcula cómo desplazarte entre tu zona de hospedaje y cada atractivo turístico.
- **Ruta Gastronómica Paisa y Calculadora de Presupuesto**: Platos tradicionales de Antioquia y estimador de costos por días, número de viajeros y estilo de viaje.

## Estructura del Proyecto

- `index.html` — Estructura semántica HTML5 con controles de idioma, moneda, tema y el panel interactivo de la Comuna 13.
- `styles.css` — Sistema de diseño en CSS puro con soporte para tema claro/oscuro, reproductor de audioguía, línea de tiempo documental y tarjetas de murales.
- `app.js` — Diccionario `I18N` (`es`, `en`, `pt`, `fr`), motor del Recorrido Interactivo Comuna 13 (`C13_STOPS`, `C13_ERAS`, `C13_MURALS` + síntesis de voz), catálogo de destinos, simulador del Metro, planificador de itinerarios y calculadora de presupuesto.
