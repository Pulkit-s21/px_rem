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

    remBox.value = Math.round(((e.target.value / baseSize.value) + Number.EPSILON) * 100) / 100;
    Math.round((rem + Number.EPSILON) * 100) / 100;
    remBox.style.color = "#1a79ff";
    pxBox.style.color = "#000";
});

remBox.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value / 0.0625);

    pxBox.value = Math.round(((e.target.value * baseSize.value) + Number.EPSILON) * 100) / 100;
    pxBox.style.color = "#1a79ff";
    remBox.style.color = "#000";
});