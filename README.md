# うちのこメーカー

## 開発コマンド

- 依存関係のインストール
`yarn`

- 開発
`yarn dev`

- プロダクションビルド
`yarn export`

- デプロイ用ビルド
`yarn build`

- LINT
`yarn lint`

- フォーマット（prettier）
`yarn format`

## 開発環境
- Next.js
- TypeScript（ArrowJS）

## 開発環境の中身
| 開発ディレクトリ | 内容 |
| ---- | ---- |
| src | 開発ソースコード |
| public | 加工なしにホスティングする対象 |


| 環境ファイル |　内容 |
| ---- | ---- |
| .next | next本体 |
| .vscode | settings.json | 共有したいVSCodeの設定 |
| .babelrc | babelの設定（NextPresetをそのまま採用） |
| .eslintrc.js | eslintの設定 |
| .prettierrc | prettierの設定 |
| next-env.d.ts | TypeScriptの読み込み設定 |
| next.config.js | Nextの上書き設定 |
| package.json | 開発コマンドとパッケージの管理 |
| README.md | README |
| tsconfig.json | TypeScriptの設定 |
| yarn.lock | パッケージの依存関係の管理 |
