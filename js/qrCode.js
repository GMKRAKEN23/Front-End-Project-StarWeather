let containerCode = document.querySelector('.article_code_qr');
let crossContainerCode = document.querySelector('.bx-x');

// Generate QR Code
let qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "index.html",
	width: 120,
	height: 120,
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H
});

// function to dynamically display qr code
function displayCode() {
	window.addEventListener('load', function () {

		if (containerCode.style.right == "-100%") {
			setInterval(() => {
				containerCode.style.right = "2%";
			}, 1000);
		} else if (containerCode.style.right = "2%") {
			    crossContainerCode.addEventListener('click', function () {
				containerCode.style.right = "-100%";
			})
		}

	})
}

displayCode();

export { containerCode, crossContainerCode,  qrcode, displayCode }