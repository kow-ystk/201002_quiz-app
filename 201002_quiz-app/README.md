# README

## コーディング規約
- クラス命名規則はBEMを使用 (Block)__(Element)--(Modifier)
- JSDocを記述
- 各種linterの設定について
  - htmlhint
  - stylelint
  - eslint

## 開発フロー概要
- nodeのバージョン
v12.18.3
- npmのバージョン
6.14.8

- masterから作業ブランチを切って作業を開始( 要・ npm install )

-  開発時 (pug, scss ビルド、画像圧縮＋コピー、ファイル編集監視、ローカルサーバ起動 )
_devの階層まで移動して、下記コマンドを実行後、コーディングを開始
```
$ cd _dev
$ npm run dev
```

-  コミット時 ( ファイル監視、ローカルサーバ起動を除いた run dev の処理 )
ctrl + Cでコマンドを止めてから、以下のコマンドを実行後、gitでのcommitを実行
```
$ npm run build
```
## 配色
参考
[material design palette](https://www.materialpalette.com/light-blue/cyan)
[encycolorpedia](https://encycolorpedia.jp/00bcd4)