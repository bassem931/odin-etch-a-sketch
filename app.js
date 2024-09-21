let etchCont = document.querySelector(".etch-cont");


let createGrid = (side_length) => {
    let gridCont = document.createElement("div");
    gridCont.classList.add("grid-cont")
    for (let row = 0; row < side_length ;row++) {
        let rowCont = document.createElement("div");
        rowCont.classList.add("row-cont");
        gridCont.append(rowCont);
        for (let i = 0; i < side_length;i++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square-div");
            rowCont.append(squareDiv);
        }
    }
    etchCont.append(gridCont);
}

let randomizeColor = () => {
    etchCont.addEventListener("mouseover",(e)=>{
        //randomize from 0 to 1677215 (complete hex range 000000 to FFFFFF)
        let red = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        if (e.target.style.backgroundColor !== "#000000") {
            e.target.style.backgroundColor = color;
        }
    })
}



let getSideLength = () =>{
    let root = document.querySelector(':root');
    let popupForm = document.querySelector(".popup-form");
    
    popupForm.addEventListener("submit",(ev)=>{
        ev.preventDefault();
        let length = window.prompt("enter the number of squares per side for the new grid");

        while(Number.isNaN(parseInt(length))){
            console.log(Number.isNaN(parseInt(length)));
            length = window.prompt("enter the number of squares per side for the new grid");
        }
        
        root.style.setProperty('--square-side',`${40/length}vw`);
        document.querySelector(".grid-cont").remove();
        createGrid(length);
    })
    
}

function initializeEtch() {
    createGrid(16);
    randomizeColor();
    getSideLength();
}

initializeEtch();


// let length = window.prompt("enter the number of squares per side for the new grid");
// console.log(typeof(parseInt(length)));

