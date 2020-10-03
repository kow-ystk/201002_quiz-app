/**
 * minimg
 * 画像を圧縮するタスク
 *
 * @return {Stream}
 */
exports.imgmin = function imgmin(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config.js');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  const imagemin = require('gulp-imagemin');
  const changed = require('gulp-changed');
  const pngquant = require('imagemin-pngquant');
  const mozjpeg = require('imagemin-mozjpeg');
  const svgo = require('imagemin-svgo');

  src(config.path.src.img)
    // エラー時にプロセスが落ちないようにする
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(config.path[global.env].img))
    .pipe(
      imagemin([
        pngquant({
          // PNGの最適化
          quality: [0.85, 0.85],
          speed: 1,
          floyd: 0,
        }),
        mozjpeg({
          // jpgの最適化
          quality: 85,
        }),
        svgo({
          plugins: [
            { removeViewBox: false }
          ]
        }), // SVGの最適化
        imagemin.optipng(), // pngquantで付加されてしまうガンマ情報を除去する
        imagemin.gifsicle(), // Gif画像の最適化
      ])
    )
    .pipe(dest(config.path[global.env].img))
    .on('end', cb);
};
