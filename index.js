let pxBox = document.querySelector('#pixel');
let remBox = document.querySelector('#rem');
let baseSize = document.querySelector("#base");

window.addEventListener("load", (e) => {
    pxBox.value = "10";
    remBox.value = "0.625";
    baseSize.value = "16";
});

pxBox.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value * 0.0625);

    remBox.value = e.target.value / baseSize.value;
    remBox.style.color = "#1a79ff";
    pxBox.style.color = "#000";
});

remBox.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value / 0.0625);

    pxBox.value = e.target.value * baseSize.value;
    pxBox.style.color = "#1a79ff";
    remBox.style.color = "#000";
});