function syncText() {
    pDate.textContent = document.querySelector('.letter-date').value;
    pTitle.textContent = document.querySelector('.letter-title').value;
    pBody.textContent = document.querySelector('.letter-body').value;
    pSignature.textContent = document.querySelector('.letter-signature').value;
}

function autoResize(el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
}

function downloadLetter() {
html2canvas(document.getElementById("printLetter"), {
scale: 2,
backgroundColor: "#FFFFFF"
}).then(canvas => {
const link = document.createElement("a");
        link.download = "skyblock-valentine-card.png";
        link.href = canvas.toDataURL();
        link.click();
});
}