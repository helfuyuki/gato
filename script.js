const rabo = document.getElementById("rabo");
const miado = document.getElementById("miado");

rabo.addEventListener("click", () => {
    miado.currentTime = 0;
    miado.play();
});
