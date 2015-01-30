Package.describe({
  summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
  version: "1.0.1",
  git: "https://github.com/bdunnette/meteor-leaflet-draw.git"
});

Package.onUse(function (api) {
  api.use('fuatsengul:leaflet', 'client');
  api.addFiles('lib/leaflet.draw.js', 'client');
  api.addFiles('leaflet.draw.css', 'client');
  api.addFiles('images/spritesheet.png', 'client');
  api.addFiles('images/spritesheet-2x.png', 'client');
});