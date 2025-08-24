let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";
    } else {
        qrImage.src = "";
        imgBox.classList.remove("show-img");
        downloadBtn.style.display = "none";
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}

function downloadQR() {
    if (qrImage.src) {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Allow generating QR code with Enter key
qrText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateQR();
    }
});