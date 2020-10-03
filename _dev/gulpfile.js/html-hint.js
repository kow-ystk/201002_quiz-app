/**
 * htmlHint
 * HTML 文法チェック
 *
 * @return {Stream}
 */
exports.htmlHint = function htmlHint(cb) {
  const { src } = require('gulp');
  const config = require('./config.js');
  const htmlhint = require('gulp-htmlhint');

  // https://github.com/htmlhint/HTMLHint/wiki/Rules
  const htmlHintOption = {
    'alt-require': true,
  };

  src(config.path.dest.html)
    .pipe(htmlhint(htmlHintOption))
    .pipe(htmlhint.reporter());
  cb();
};
