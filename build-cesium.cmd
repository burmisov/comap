@echo off

IF EXIST node_modules\cesium\package.json (
  echo "No cesium found."
  exit 1
)

IF EXIST node_modules\cesium\Build\Cesium\Cesium.js (
  echo "Seems to be already built."
  exit 0
)

echo "Building Cesium"
cd node_modules\cesium
npm install
npm run release
cd ..\..
