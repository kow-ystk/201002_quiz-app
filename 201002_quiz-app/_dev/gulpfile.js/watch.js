/**
 * watch
 * 対象ファイルを監視し変更があった場合に実行するタスク
 */
exports.watch = function watch(cb) {
  const { pug } = require('./pug');
  const { scss } = require('./scss');
  const { eslintJs } = require('./eslint-js');
  const { concatJsLibs } = require('./concat-js-libs');
  const { imgmin } = require('./imgmin');
  const { watch } = require('gulp');
  const config = require('./config.js');
  /* この下から必要なタスクを有効にする */
  watch(config.path.watch.pug, pug);
  watch(config.path.watch.scss, scss);
  watch(config.path.watch.js, eslintJs);
  watch(config.path.watch.js_libs, concatJsLibs);
  watch(config.path.watch.img, imgmin);
  cb();
};
