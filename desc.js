// This will update the visibility of the descriptions of the different projects I have

function updateChess() {
	let des = document.getElementById("chess");
	if (des.style.visibility !== "visible") {
		des.style.visibility = "visible";
	} else {
		des.style.visibility = "hidden";
	}
}

function updateHE() {
	let des = document.getElementById("HE");
	if (des.style.visibility !== "visible") {
		des.style.visibility = "visible";
	} else {
		des.style.visibility = "hidden";
	}
}

function updateVPP() {
	let des = document.getElementById("vpp");
	if (des.style.visibility !== "visible") {
		des.style.visibility = "visible";
	} else {
		des.style.visibility = "hidden";
	}
}

// Attach functions to different elements
const chessPic = document.getElementById("chessPic");
chessPic.addEventListener('click',updateChess);

const hePic = document.getElementById("hePic");
hePic.addEventListener('click',updateHE);

const vppPic = document.getElementById("vppPic");
vppPic.addEventListener('click',updateVPP);
