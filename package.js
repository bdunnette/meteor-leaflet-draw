Package.describe({
  summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
  version: "0.2.3",
  git: "https://github.com/bdunnette/meteor-leaflet-draw.git"
});

Package.onUse(function (api) {
  api.addFiles('leaflet.draw.js');
  api.addFiles('leaflet.draw.css');
  api.addFiles('images/spritesheet.png');
  api.addFiles('images/spritesheet-2x.png');
});