const input = document.getElementById("qr-text");
const button = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const downloadBtn = document.getElementById("download-btn");
const message = document.getElementById("message");

function generateQR() {

    const text = input.value.trim();

    if (text === "") {
        message.innerHTML = "⚠ Please enter text or a URL.";
        qrImage.style.display = "none";
        downloadBtn.style.display = "none";
        return;
    }

    message.innerHTML = "Generating QR Code...";

    const qrURL =
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;

    qrImage.src = qrURL;

    qrImage.onload = function () {
        message.innerHTML = "✅ QR Code Generated!";
        qrImage.style.display = "block";
        downloadBtn.style.display = "inline-block";
    };

    qrImage.onerror = function () {
        message.innerHTML = "❌ Failed to generate QR Code.";
    };
}

button.addEventListener("click", generateQR);

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateQR();
    }
});

downloadBtn.addEventListener("click", function () {

    const link = document.createElement("a");

    link.href = qrImage.src;
    link.download = "QRCode.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});
