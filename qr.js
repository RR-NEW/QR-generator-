const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");

generateBtn.addEventListener("click", function () {

    if (qrText.value === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";

    qrImage.src = apiUrl + encodeURIComponent(qrText.value);

});
