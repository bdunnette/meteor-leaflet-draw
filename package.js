Package.describe({
  summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
  version: "1.0.0",
  git: "https://github.com/bdunnette/meteor-leaflet-draw.git"
});

Package.onUse(function (api) {
  api.addFiles('lib/leaflet.draw.js', 'client');
  api.addFiles('styles/leaflet.draw.css', 'client');
  api.addFiles('images/spritesheet.png', 'client');
  api.addFiles('images/spritesheet-2x.png', 'client');
});