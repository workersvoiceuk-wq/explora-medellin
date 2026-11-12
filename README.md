# Explora Medellín — Guía Turística Interactiva del Valle de Aburrá

Aplicación web interactiva diseñada para explorar **Medellín, Colombia** (*La Ciudad de la Eterna Primavera*) y sus alrededores en Antioquia.

## Características Principales

- **Mapa Interactivo del Valle de Aburrá (`SVG`)**: Visualización esquemática del Río Medellín, las Líneas A y B del Metro, Metrocables (K y L hacia el Parque Arví), el Tranvía de Ayacucho y 12 destinos turísticos emblemáticos (Comuna 13, Plaza Botero, Parque Arví, Jardín Botánico, El Poblado, Laureles, Pueblito Paisa, Museo Casa de la Memoria, Salón Málaga, Guatapé, Santa Fe de Antioquia y fincas cafeteras).
- **Conversor de Moneda en Tiempo Real**: Consulta todos los precios de entradas, transporte y gastronomía en **Pesos Colombianos (`COP`)**, **Dólares (`USD`)** o **Euros (`EUR`)**.
- **Planificador de Itinerarios**: Plantillas listas para 1, 3 y 5 días con opción de añadir o quitar paradas, cálculo automático de duración y presupuesto, y copia al portapapeles.
- **Simulador de Rutas del Sistema Metro (`SITVA`)**: Calcula cómo desplazarte entre tu zona de hospedaje y cada atractivo turístico indicando estaciones, trasbordos y tarifas.
- **Ruta Gastronómica Paisa y Calculadora de Presupuesto**: Platos tradicionales de Antioquia y estimador de costos por días, número de viajeros y estilo de viaje.
- **Modo Claro y Oscuro**: Sistema de diseño en Vanilla CSS inspirado en los tonos montaña, terracota y silleteros de Medellín.

## Estructura del Proyecto

- `index.html` — Estructura semántica HTML5 y metadatos SEO.
- `styles.css` — Sistema de diseño en CSS puro con variables HSL y soporte para tema claro/oscuro.
- `app.js` — Estado de la aplicación, catálogo de destinos, simulador del Metro, planificador de itinerarios y calculadora de presupuesto.

## Uso Local

No requiere dependencias externas ni pasos de compilación. Puedes abrir `index.html` directamente en cualquier navegador moderno o servirlo con un servidor estático:

```bash
npx serve .
```
