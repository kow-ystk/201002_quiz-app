/**
 * stylelintScss
 * scssがスタイル規約に従っているかをチェックしてプロパティを並び替えて元ファイルに上書きするタスク
 *
 * @return {Stream}
 */
exports.stylelint = function stylelint(cb) {
    const { src/*, dest*/ } = require('gulp');
    const config = require('./config.js');

    const plumber = require('gulp-plumber');
    const notify = require('gulp-notify');

    const postcss = require('gulp-postcss');
    const postcssScss = require('postcss-scss');
    const stylelint = require('stylelint');
    const reporter = require('postcss-reporter');

    src(config.path.lint.scss.src)
      .pipe(plumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(postcss([
        stylelint({ fix: true }),
        reporter({ clearMessages: true, throwError: false })
      ], {syntax: postcssScss}));
      // .pipe(dest(config.path.lint.scss.dest)) 循環するため書き出さない
      // .on('end', cb);
      cb();
  };
