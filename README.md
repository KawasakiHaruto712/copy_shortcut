# copy_shortcut
<p align="center">
    <img src="https://github.com/user-attachments/assets/e2456c28-f817-4c7a-bb07-341816b23244" width="80%" />
</p>

## 概要
chromeを利用しているときに現在開いているページのURLをコピーするには`Command + L`→`Command + C`というように入力しないといけないので煩わしいですよね．

copy_shortcutをインストールしておくと`Ctrl + Command + C`だけでURLをコピー出来ます！

## 利用方法
1. copy_shortcutをローカルリポジトリに保存
    1. copy_shortcutを保存したいディレクトリにターミナルで以下を入力します．
    ```
    git clone https://github.com/KawasakiHaruto712/copy_shortcut.git
    ```

2. chrome拡張機能にcopy_shortcutを読み込み（[参照](https://support.google.com/chrome/a/answer/2714278?hl=ja)）
    1. [chrome://extensions/](chrome://extensions/)にアクセスします．
    2. 右上の[**デベロッパー モード**] をオンにします．
    3. [**パッケージ化されていない拡張機能を読み込む**] をクリックします．
    4. copy_shortcutのフォルダを選択します．

## ショートカットコマンド変更方法
デフォルトでは`Ctrl + Command + C`で動作するようになっていますが，
`js/content_script.js`の`if (event.ctrlKey && event.metaKey && event.key === "c")`の箇所を変更するとご自身のお好きなショートカットコマンドでURLをコピーできるようになります！