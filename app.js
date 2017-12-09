var wasClicked = false;
function changeTitle() {
	if(!wasClicked) {
		wasClicked = true;
	}
	if(document.getElementById("title").innerHTML == "facebook") {
		document.getElementById("title").innerHTML = "Awilda Couverthier";
	} else {
			document.getElementById("title").innerHTML = "facebook";
	}
};
