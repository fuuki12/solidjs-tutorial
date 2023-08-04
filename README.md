# SolidStart

[`solid-start`](https://start.solidjs.com)を使用して、Solid プロジェクトを構築するために必要な全て。

## プロジェクトの作成

```bash
# 現在のディレクトリに新しいプロジェクトを作成
npm init solid@latest

# my-appという名前で新しいプロジェクトを作成
npm init solid@latest my-app
```

## 開発

プロジェクトを作成し、依存関係を`npm install` (または `pnpm install` または `yarn`)でインストールしたら、開発サーバーを起動します：

```bash
npm run dev

# サーバーを起動し、新しいブラウザタブでアプリを開く
npm run dev -- --open
```

## ビルド

Solid のアプリは _adapters_ を用いてビルドされ、プロジェクトを異なる環境へデプロイするために最適化されます。

デフォルトでは、`npm run build` は`npm start`で実行できる Node アプリを生成します。異なるアダプタを使用するには、それを `package.json` の `devDependencies` に追加し、`vite.config.js` で指定します。
