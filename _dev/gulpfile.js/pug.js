/**
 * pug
 * /src/内のpugファイルをコンパイルし/htdocs/に出力するタスク
 *
 * @return {Stream}
 */

exports.pug = function pug(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config.js');
  const pug = require('gulp-pug');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');

  src(config.path.src.pug)
    .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')}))
    .pipe(
      pug({
        // locals: {
        //   pug_compile: global.env
        // },
        pretty: true,
      })
    )
    .pipe(dest(config.path[global.env].html))
    .on('end', cb);
};
