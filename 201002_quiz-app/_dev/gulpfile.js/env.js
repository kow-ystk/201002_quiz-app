/**
 * env
 * ビルドの設定を環境によって切り替えるための処理
 * develop(開発環境用) か release(リリース環境用)のビルドかを格納する変数
 */
exports.env = function env() {
  global.env = 'release';
};
