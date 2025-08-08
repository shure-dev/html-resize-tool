# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HTML Resize - クリエイティブのリサイズ検証Webアプリケーション

HTML/CSSで作成されたクリエイティブ（広告バナーなど）を異なるアスペクト比でリサイズし、その挙動を検証するツールです。

## Project Structure

- `index.html` - メインのHTMLファイル（UIとレイアウト）
- `styles.css` - スタイルシート（デザインとレイアウト）
- `script.js` - JavaScriptロジック（リサイズ処理とインタラクション）

## Key Features

1. **3つのアスペクト比テンプレート**
   - 正方形 (1:1) - 300×300px
   - 横長 (16:9) - 400×225px
   - 縦長 (9:16) - 225×400px

2. **4つのデザインパターン**
   - グラデーション
   - カード型
   - ヒーロー
   - ミニマル

3. **動的リサイズ機能**
   - 入力されたサイズに最も近いアスペクト比のテンプレートを自動選択
   - HTML/CSSの構造を保ちながらリサイズ

## Development

単純なHTML/CSS/JavaScriptアプリケーションのため、ビルドプロセスは不要。
ブラウザで`index.html`を開くだけで動作します。