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

createGrid();
mainCont.addEventListener("mouseover",(e)=>{
    e.target.classList.add("bg-color-change");
})