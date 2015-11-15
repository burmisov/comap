import express from 'express';
import path from 'path';

const STATIC_PATH = path.resolve(__dirname, '../dist');
const CESIUM_PATH = path.resolve(__dirname, '../node_modules/cesium');

const app = express();

app.use(express.static(STATIC_PATH));
app.use('/cesium', express.static(CESIUM_PATH));

const port = process.env.PORT || 3000;
app.listen(port);

/* eslint no-console:0 */
console.log('Server listening on port', port);
