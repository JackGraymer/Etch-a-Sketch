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
    checkRaimbow();
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

//Paints the cells on click and with click and drag
function paint(){ 
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
    //console.log(RGB)
    return RGB;
}
let rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", function() {
    rainbow.classList.toggle("active");
    checkRaimbow();
    
});

function checkRaimbow(){
    let cells = document.querySelectorAll('.cell');
    if(document.querySelector("#rainbow").classList.contains("active")){
        cells.forEach(cell => {
            cell.addEventListener('mouseleave', rainbowColor)})
            if (shadow.classList.contains('active')){
                shadow.classList.remove('active');
            }
        }else if (rainbow.classList.contains('active') == false) {cells.forEach(cell => {
            cell.removeEventListener('mouseleave', rainbowColor)})
            color = document.querySelector('.color').value}
    
    }

//Shader button event on click, class change and deactivate Rainbow
let shadow = document.querySelector("#shadow");
shadow.addEventListener('click', function(){
    shadow.classList.toggle('active');
    if(rainbow.classList.contains('active')){
        rainbow.classList.remove('active');
        checkRaimbow()
    }
    if(shadow.classList.contains('active')){
        console.log('shader here');
        shader();
    }else{color = document.querySelector('.color').value}
})
//Shader darkening cell colour
function shader(){
    if(shadow.classList.contains('active')){
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', function(){
            color = this.style.backgroundColor;
            color2 = color.slice(4,-1);
            color3 = color2.split(',');

            //console.log(this.style.backgroundColor);
            console.log(color)
            

        })
    })}else{cell.removeEventListener('mouseleave', rainbowColor)}
}
