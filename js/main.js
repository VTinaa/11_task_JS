

let openA = document.querySelector("body .a");
let openB = document.querySelector("body .b");
let openC = document.querySelector("body .c");
let openD = document.querySelector("body .d");
let block = document.querySelector(".block");

openA.addEventListener('click', () => {
    // block.style.height = "100vh";
    block.style.backgroundColor = "#f1fff2";
    block.style.padding = "20px";
    block.style.fontStyle = "italic";
    block.style.border = "double 4px #1f2472";
    // block.style.width = "900px";
    block.style.fontSize = "40px";
    block.style.fontWeight = "600";
    block.style.color = "#2e4a43";

})
openB.addEventListener('click', () => {
    block.style.backgroundColor = "#ffe4e1";
    block.style.padding = "20px";
    block.style.fontStyle = "italic";
    block.style.border = "dashed 10px violet";
    block.style.borderRadius = "3px";
    // block.style.width = "auto";
    block.style.fontSize = "24px";
    block.style.color = "#2f1963";
})
openC.addEventListener('click', () => {
    block.style.backgroundColor = "#d3d3d3";
    block.style.padding = "25px";
    block.style.fontStyle = "italic";
    block.style.border = "20px dashed #696969";
    block.style.borderRadius = "11px 50px 50px 13px";
    block.style.fontSize = "30px";
    block.style.color = "#324643";
    block.style.fontWeight = "600";

})
openD.addEventListener('click', () => {
    // block.style.height = "100vh";
    block.style.backgroundColor = "#483d8b";
    block.style.padding = "30px";
    block.style.fontStyle = "italic";
    block.style.border = "outset 20px #1f2472";
    block.style.borderRadius = "40px 15px 40px 15px";
    // block.style.width = "900px";
    block.style.fontSize = "35px";
    block.style.fontWeight = "600";
    block.style.color = "#18b0e4";
})