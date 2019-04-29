## About

Slack の特定のチャネルのメッセージを Spreadsheet に Export する Google Apps Script 用プロジェクトです。

## Environment

- Google Apps Script (Installable triggers with Google Spreadsheet)

## Installation

1. スプレッドシートを開く https://docs.google.com/spreadsheets/d/1VclRGzDgpEKyFYHKzmdtyFaJrrBOG0EgDavxc9sZcxM/edit?usp=sharing
- ファイル > コピーを作成
- ツール > スクリプトエディタ ( Google Apps Script エディタが開く) 
- ファイル > プロジェクトのプロパティ
- スクリプトのプロパティ > 行を追加
    - TOKEN: Slack API トークン (こちらの URL から生成: https://api.slack.com/custom-integrations/legacy-tokens)
    - CHANNEL: Slack channel ID
- 保存 
- 関数を選択
    - main 関数を選択
- 実行ボタン ▶ を選択
- スプレッドシートにデータ反映されていれば OK
