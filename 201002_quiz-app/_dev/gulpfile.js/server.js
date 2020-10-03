/**
 * server
 * ローカルサーバをたてるタスク
 */

exports.server = function server(cb) {
  const config = require('./config.js');
  const browser = require('browser-sync');
  // const ssi = require('browsersync-ssi');
  // see: https://nodejs.org/api/process.html#process_process_platform
  const isWin = process.platform === 'win32';
  browser.init({
    port: config.server.port,
    server: {
      baseDir: config.path[global.env].root,
      // middleware: [
      //   ssi({ baseDir: config.path.root, ext: '.html' })
      // ]
    },
    startPath: config.server.startPath,
    ghostMode: false,
    browser: isWin ? 'chrome' : 'google chrome',
    open: 'local',
    notify: false,
    ui: false,
  });
  cb();
};
