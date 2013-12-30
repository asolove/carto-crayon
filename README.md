# CartoCrayon

CartoCrayon is an experimental tool for visualizing geographic data. You import geojson features with data properties, use CartoCrayon to style the features the way you want them, and then export geojson annotated with style properties and an embed code for displaying it with Leaflet on any web page.

CartoCrayon is in very early development: you probably don't want to use it yet. It is also built in part as an experiment in the new [Om browser UI toolkit](https://github.com/swannodette/om), which is itself in early development.

![CartoCrayon in action, styling states based on the density of agricultural land](https://raw.github.com/asolove/carto-crayon/master/resources/public/screenshot.png)

# Roadmap

- ~~style features manually~~
- ~~style features using a color scale on one data property~~
- style features using more complicated data expressions: math, geometric operations, etc.
- import geojson from files, geojson.io, etc.
- merge non-geographic data (csv, etc.) with common geographic datasets (states, countries, etc.)
- configure your own OSM or Mapbox map as the base layer
- layer operations, (e.g. given point data and outline, use Voronoi to generate polygon data)
