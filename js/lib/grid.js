(function () {
	if (!document.getElementsByClassName) {
		document.getElementsByClassName=function(cn) {
			var allT=document.getElementsByTagName('*'), allCN=[], i=0, a;
			while(a=allT[i++]) {
				a.className==cn ? allCN[allCN.length]=a : null;
			}
			return allCN
		}
	}
	var rowList = document.getElementsByClassName('row'), rowArray = [], i;
	for(i = 0; i < rowList.length; i++) if(!(/^col[01][0123456789]/.test(rowList[i].className))) rowArray.push(rowList[i]);
	delete rowList;

	function rowHeight() {
		var i;
		for(i = 0; i < rowArray.length; i++) {
			rowArray[i].style.height = 'auto';
			rowArray[i].style.height = rowArray[i].offsetHeight + 'px';
		}
	}
	if (window.addEventListener)
		window.addEventListener("resize", rowHeight, false);
	else if (window.attachEvent)
		window.attachEvent("onresize", rowHeight);
	rowHeight();
}());