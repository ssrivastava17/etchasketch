var side = 5;
drawboard(side);

// event listener - reset button
const reset = document.querySelector(".reset");
reset.addEventListener('click', function(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white");
})

// event listener - change board size
const size = document.querySelector(".size");
size.addEventListener('click', getNumSides);

// FUNCTIONS
function getNumSides(){
    let i = 0;
    var side = window.prompt("Enter the length of the etch-a-sketch: ");
    while (i < 1){
        if(side >= 1 && side < 100 ){
            let div = document.querySelector(".board");
            div.innerHTML = "";
            drawboard(side);
            break;
        }else{
            side = window.prompt("Please enter a side between 1 and 100.");
        }
    }
}

function drawboard(side){
    let div = document.querySelector(".board");
    console.log(div);
    for(var x = 0; x < side; x++){
        // append to entire row to board
        let row = document.createElement("row");
        row.className = "row";
        console.log(row);
        div.append(row);
        for(var y = 0; y < side; y++){
            // append to row
            let cell = document.createElement("cell");
            cell.className = "cell";
            row.append(cell);
        }
    }
    // add event listener - change cell color
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('mouseover',function(e){
    e.target.style.backgroundColor = "black";
    }))
}