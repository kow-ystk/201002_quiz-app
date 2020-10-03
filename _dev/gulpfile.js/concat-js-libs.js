/**
 * concat
 * 指定したファイルを結合して1ファイルにして出力
 *
 * @return {Stream}
 */
exports.concatJsLibs = function concatJsLibs(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config.js');
  const concat = require("gulp-concat");
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');

  src(config.path.src.js_libs)
    .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')}))
    .pipe(concat('lib.js'))
    .pipe(dest(config.path[global.env].js_libs))
    .on('end', cb);
};
