let mainCont = document.querySelector(".main-cont");

let createGrid = async () => {
    for (let row = 0; row < 16 ;row++) {
        let rowCont = document.createElement("div");
        rowCont.classList.add("row-cont");
        mainCont.append(rowCont);
        for (let i = 0; i < 16;i++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square-div");
            rowCont.append(squareDiv);
        }
    }
}

let randomizeColor = () => {
    //randomize from 0 to 1677215 (complete hex range 000000 to FFFFFF)
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let sum = red+green+blue;
    let color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return [color,sum];
}

createGrid();
let num = 0;
mainCont.addEventListener("mouseover",(e)=>{
    // e.target.classList.add("bg-color-change");
    let [color,colorSum] = randomizeColor();
    
    console.log(color,colorSum);
    
    if(colorSum < 200){
        console.log(color + "gowa");
        color = randomizeColor();
    }
    e.target.style.backgroundColor = color;
})