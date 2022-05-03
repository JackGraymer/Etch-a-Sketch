let sliderValue = document.querySelector(".slider");
console.log(sliderValue.value)
createCell();
paint();
//Updates the slider value with the mouse click and drag, cleans the sketch, resizes grid and fills it with cells.
sliderValue.addEventListener('mouseup', sliderChange);
function sliderChange(){
    document.querySelector(".sliderValue").textContent = 'Grid: ' + sliderValue.value;
    cleanSketch();
    createCell();
    resizeCell();
    paint();
    gridDecision();
}



function cleanSketch(){
    document.querySelector('.sketch').textContent = '';
}

function createCell(){//Creates cells using the slider value: slider X*Y = grid number
    let container = document.querySelector('.sketch');
    for (let i=0; i< ((sliderValue.value * sliderValue.value)) ; i++){
        let cell = document.createElement('div');
        cell.id= 'cell';
        container.appendChild(cell);
        //cell.textContent=i;
        cell.setAttribute('class', 'cell')
    }
    
}

function resizeCell(){//Uses the slider value to size the grid in X*Y cells
    let cell = document.querySelector('.sketch')
    cell.style.gridTemplateColumns = 'repeat(' + sliderValue.value + ', 1fr)';
    cell.style.gridTemplateRows = 'repeat(' + sliderValue.value + ', 1fr)';
}

/* function paint(){ 
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mousedown', changeColor));
    function changeColor() {
        console.log(Event.buttons)
        this.style.backgroundColor = 'red';
    }    
} */
//Uses the color Imput to select the color to paint the cells
let color = document.querySelector('.color').value;

function updateColor(){
    document.querySelector('.color').addEventListener('input', updatecolor)
        function updatecolor(){
        newcolor = document.querySelector('.color').value;
        color = newcolor;
        console.log(newcolor)}
    
}
updateColor();


function paint(){ //Paints the cells on click and with click and drag
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function (event){
        
        if(event.buttons == 1){
            console.log('button is', event.buttons)
            this.style.backgroundColor = color;
        }
    }))

    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mousedown', function (event){
        
        
            this.style.backgroundColor = color;
        }
    ))
}

//Toggle grid lines of the sketch On and Off, changing cell margin to 0.
document.querySelector('#gridBtn').addEventListener('click', toggleGrid2)
function toggleGrid(){
    let gridBtn = document.querySelector('#gridBtn')
    let cells = document.querySelectorAll('.cell')
    
    cells.forEach(function(cell){
        cell.classList.toggle('cell2')          
    });
    //gridBtn.classList.toggle('active')
    //document.querySelector('#gridBtn').classList.toggle('activated')
    //console.log('Grid lines toggled');
}

// Keeps the Grid On or Off depending on how it was before resizing

function gridDecision() {
    //let gridBtn = document.querySelector('#gridBtn').classList
    if(gridBtn.classList.contains('active')){
        toggleGrid()
        //console.log('gridDecision here')
    }
}

function toggleGrid2(){  
    gridBtn.classList.toggle('active');
    toggleGrid();   
}

//Rainbow color for paint, each cell has a random color
function rainbowColor(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let RGB = "rgb"+"(" + red + "," + green + "," +  blue +")";
    color = RGB
    console.log(RGB)
    return RGB;
}
document.querySelector("#rainbow").addEventListener("click", function() {
    document.querySelector("#rainbow").classList.toggle("active");
    //checkRaimbow();
    let cells = document.querySelectorAll('.cell');
    if(document.querySelector("#rainbow").classList.contains("active")){
        cells.forEach(cell => {
            cell.addEventListener('mouseleave', rainbowColor)})
    console.log(document.querySelector("#rainbow").classList.value)
        }else{cells.forEach(cell => {
            cell.removeEventListener('mouseleave', rainbowColor)})
            color = document.querySelector('.color').value}

});

//Shader button, adds grey scale till black

