# getKerning

イラストレータで文字詰めしたカーニング情報をスクリプトで取り出し、JavaScriptで埋め込みます。

## getKerning.js

Adobe Illustrator用スクリプトです。<br>
文字ツールで文字を選択して、<br>
［ファイル］→［スクリプト］→［その他のスクリプト］から<br>
このスクリプトを選択して実行すると、<br>
文字詰め情報の配列が表示されます。<br>
これをコピーして利用します。<br>

この時、すべての文字間隔に<br>
カスタムカーニングが設定されている必要があります。



## kerningText.js

JQueryの後に読み込みます。<br>
 kerningText("セレクタ名",getKerning.jsで読み取ったKerningデータ);<br>
 この１行を書き込むだけです。<br>


## kerningSample.html

使い方のサンプルです。
