module.exports = function(Cesium) {
  var viewer = new Cesium.Viewer('cesiumContainer');
  var scene = viewer.scene;

  scene.primitives.add(new Cesium.RectanglePrimitive({
    rectangle : Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0),
    material : Cesium.Material.fromType('Dot'),
  }));
}
