function kerningText(obj, kerning) {
    $(obj).children().addBack().contents().each(function () {
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
        }
    });
    for (var i = 0; i <= kerning.length; i++) {
        $(obj + " > span:nth-child(" + (i + 1) + ")").css('letter-spacing', kerning[i]);
    }
}