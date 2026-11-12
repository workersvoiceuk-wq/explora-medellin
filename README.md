# Explora Medellín — Guía Turística Interactiva Multilingüe (`ES` · `EN` · `PT` · `FR`)

Aplicación web interactiva diseñada para explorar **Medellín, Colombia** (*La Ciudad de la Eterna Primavera*) y sus alrededores en Antioquia, disponible en **4 idiomas**:

- **Español (`ES`)**
- **English (`EN`)**
- **Português (`PT`)**
- **Français (`FR`)**

## Características Principales

- **Selector Multilingüe Instantáneo (`ES | EN | PT | FR`)**: Traduce en vivo toda la interfaz, el mapa del valle, las descripciones e historia de los 12 destinos, las instrucciones paso a paso del Metro y Metrocable, el planificador de itinerarios, la guía gastronómica y la calculadora de presupuesto.
- **Mapa Interactivo del Valle de Aburrá (`SVG`)**: Visualización del Río Medellín, las Líneas A y B del Metro, Metrocables (K y L hacia el Parque Arví), el Tranvía de Ayacucho y 12 destinos turísticos emblemáticos.
- **Conversor de Moneda en Tiempo Real**: Precios en **Pesos Colombianos (`COP`)**, **Dólares (`USD`)** o **Euros (`EUR`)**.
- **Planificador de Itinerarios**: Plantillas listas para 1, 3 y 5 días con opción de añadir o quitar paradas y copia al portapapeles en el idioma seleccionado.
- **Simulador de Rutas del Sistema Metro (`SITVA`)**: Calcula cómo desplazarte entre tu zona de hospedaje y cada atractivo turístico.
- **Ruta Gastronómica Paisa y Calculadora de Presupuesto**: Platos tradicionales de Antioquia y estimador de costos por días, número de viajeros y estilo de viaje.

## Estructura del Proyecto

- `index.html` — Estructura semántica HTML5 con controles de idioma, moneda y tema.
- `styles.css` — Sistema de diseño en CSS puro con soporte para tema claro y oscuro.
- `app.js` — Diccionario `I18N` (`es`, `en`, `pt`, `fr`), catálogo de destinos, simulador del Metro, planificador de itinerarios y calculadora de presupuesto.
