global.env = 'release';

const { series, parallel } = require('gulp');
const { pug } = require('./pug');
const { scss } = require('./scss');
const { concatJsLibs } = require('./concat-js-libs');
const { eslintJs } = require('./eslint-js');
const { server } = require('./server');
const { watch } = require('./watch');
const { imgmin } = require('./imgmin');
const { htmlHint } = require('./html-hint');

exports.default = series(
  parallel(pug, scss, concatJsLibs, eslintJs, watch, imgmin),
  server
);
exports.build = parallel(pug, scss, concatJsLibs, eslintJs, imgmin);
exports.pug = pug;
exports.scss = scss;
exports.concatJsLibs = concatJsLibs;
exports.eslintJs = eslintJs;
exports.server = server;
exports.htmlHint = htmlHint;
