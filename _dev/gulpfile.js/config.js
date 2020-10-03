/**
 * config.js
 * gulpの設定ファイル
 */
module.exports = {
  name: "sample-coding-rules",

  // local serverの設定
  server: {
    port: 4008,
    startPath: "./",
  },

  browsers: ["ie >= 11", "ios >= 11", "android >= 6"],

  enabled: [
    // 'pug',
    "ejs",
    "scss",
    // 'stylus',
    // 'concatJsLibs',
    "server",
    "watch",
  ],

  // notify通知用のアイコン指定
  // notifyIcon: './gulp/notify.png',

  // gulp内で利用する各種ファイルへのパス
  path: {
    cacheLocation: ".css-cache",

    watch: {
      pug: ["./pug/**/*.pug"],
      scss: ["./scss/**/*.scss"],
      js: ["./js/**/*.js", "!./js/lib/**/*.js"],
      js_libs: ["./js/lib/**/*.js"],
      img: ["./images/**/*.{jpg,jpeg,png,gif}"],
    },

    // そのまま配信したいhtml, js, css を指定
    copy: {
      js: [
        // './src/**/copy.js'
      ],
      img: ["./images/**/*.{svg}", "!./images/**/_*.{svg}"],
    },

    src: {
      root: "./",
      pug: ["./pug/**/*.pug", "!./pug/**/_*.pug"],
      scss: ["./scss/**/*.scss", "!./scss/**/_*.scss"],
      stylus: ["./stylus/**/*.styl", "!./stylus/**/_*.styl"],
      js: ["./js/**/*.js", "!./js/lib/**/*.js", "!./js/**/_*.js"],
      js_entry: "./js/app.js",
      js_libs: ["./js/lib/*"],
      img: [
        "./images/**/*.{jpg,jpeg,png,gif,svg}",
        "!./images/**/_*.{jpg,jpeg,png,gif,svg}",
      ],
    },

    dest: {
      html: ["../docs/**/*.html"],
    },

    lint: {
      scss: {
        src: [
          "./scss/**/*.scss",
          "!./scss/reset/*.scss",
          "!./scss/plugins/*.scss",
        ],
        dest: "./scss/",
        tmp: "./tmp/scss/",
      },
    },

    release: {
      root: "../docs/",
      html: "../docs/",
      js: "../docs/assets/js/",
      js_libs: "../docs/assets/js/",
      css: "../docs/assets/css/",
      img: "../docs/assets/images/",
    },
  },
};
