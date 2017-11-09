# getKerning

イラストレータで文字詰めしたカーニング情報をスクリプトで取り出し、JavaScriptで埋め込みます。

## getKerning.js

Adobe Illustrator用スクリプトです。
文字ツールで文字を選択して、
［ファイル］→［スクリプト］→［その他のスクリプト］から
このスクリプトを選択して実行すると、
文字詰め情報の配列が表示されます。
これをコピーして利用します。


## kerningText.js

JQueryの後に読み込みます。
 kerningText("セレクタ名",getKerning.jsで読み取ったKerningデータ);
 この１行を書き込むだけです。


## kerningSample.html

使い方のサンプルです。
