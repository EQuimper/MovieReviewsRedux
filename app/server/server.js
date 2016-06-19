require('babel-polyfill');
require('./config/db');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const webpack = require('webpack');

const config = require('../../webpack.config');
const compiler = webpack(config);

const routes = require('./routes/');

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

// API

app.use('/', routes);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
