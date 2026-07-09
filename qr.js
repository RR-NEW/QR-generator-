const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");

function generateQRCode() {

    const text = qrText.value.trim();

    if (text === "") {
        alert("Please enter a URL or some text.");
        qrText.focus();
        return;
    }

    // Disable button while generating
    generateBtn.disabled = true;
    generateBtn.innerText = "Generating...";

    // Generate QR Code
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;

    qrImage.src = qrURL;

    qrImage.onload = function () {
        generateBtn.disabled = false;
        generateBtn.innerText = "Generate QR Code";
    };

    qrImage.onerror = function () {
        alert("Failed to generate QR Code.");
        generateBtn.disabled = false;
        generateBtn.innerText = "Generate QR Code";
    };
}

