/*************************************************
JavaScript for Illustrator
カーニング情報を書き出す
2017/09/29：yoshihiko sato
*************************************************/
var doc = activeDocument;
var designText = doc.selection;
if (designText.length == 0) {
    alert("文字ツールで文字を選択してください");
}
else {
    main(designText);
}

function main(designText) {
    var kerning = "";
    for (i = 1; i < designText.characters.length; i++) {
        kerning = kerning + 　",'" + String((designText.characters[i].kerning) / 1000) + "em'";
    }
    kerning = "[" + kerning.slice(1) + "]";
    prompt("Kerning Data", kerning);
}