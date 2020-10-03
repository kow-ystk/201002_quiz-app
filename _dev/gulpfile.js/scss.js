/**
 * scss
 * sassのコンパイルタスク
 *
 * @return {Stream}
 */
const { src, dest, series } = require('gulp');
const { stylelint } = require('./stylelint-scss');

function scss(cb) {
  const config = require('./config.js');

  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  // const foreach = require('gulp-foreach');

  const sass = require('gulp-dart-sass');
  // const gulppath = require('path');

  const autoPrefixer = require('gulp-autoprefixer');

  const header = require('gulp-header');
  const replace = require('gulp-replace');

  src(config.path.src.scss)
    .pipe(plumber({
      errorHandler: notify.onError('Error1: <%= error.message %>')
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoPrefixer())
    .pipe(replace(/@charset "utf-8";/g, ''))
    .pipe(header('@charset "utf-8";'))
    .pipe(dest(config.path[global.env].css))
    .on('end', cb);
}

exports.scss = series(stylelint, scss);
