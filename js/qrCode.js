// Generate QR Code
let qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://webisora.com",
	width: 120,
	height: 120,
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

