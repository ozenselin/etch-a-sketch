//initially, sketchpad consists of 64x64 boxes
let size = 64;

//select sketchpad
const sketchpad = document.querySelector(".sketchpad");
const colorPicker = document.querySelector("#range-color");
const sizePicker = document.querySelector("#range-size");
const resetButton = document.querySelector(".button-reset");
const RGBButton = document.querySelector(".button-RGB");
const eraseButton = document.querySelector(".button-erase");

//initially current color is gray
let currentColor = "#AAAAAA";

//initially RGB mode is off
let RGB = false;

//initially coloring is on
let erase = false;

//create and append size * size boxes into the sketchpad
function appendBoxes(){
    for(let i = 0; i<size * size; i++){
        const box = document.createElement("div");
        box.classList.add("box", "box--default");
        sketchpad.append(box);
    }
}

//when another color is picked
colorPicker.addEventListener("input", function(){
    //update the global variable: current color
    currentColor = colorPicker.value;
});

//create and append 64 boxes into the sketchpad
appendBoxes();

//when size changes, remove all boxes
//create and append new boxes
sizePicker.addEventListener("input", function(){
    //while firstChild is defined
    while(sketchpad.firstChild){
        //remove the first child
        sketchpad.removeChild(sketchpad.firstChild);
    }

    //update size
    size = sizePicker.value;
    
    //create and append size * size boxes into the sketchpad
    appendBoxes();

    //update grid values
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

});

//listen to the mousemove event on sketchpad
sketchpad.addEventListener("mousemove", function(event){
    //target is a box
    let target = event.target;
    //if erase mode is on
    if(erase){
        target.style.backgroundColor = "#FFFFFF";
    }
    //if RGB mode is on
    else if(RGB){
        //color randomly
        target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
                                            ${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)})`;
    }
    //otherwise, apply the current color
    else{
        target.style.backgroundColor = currentColor;
    }
});

//when reset button is pressed
resetButton.addEventListener("click", function(){
    //set every box to white background
    sketchpad.childNodes.forEach(box => {
        box.style["background-color"] = "#FFFFFF";
    });
});

//when button is pressed toggle RGB
RGBButton.addEventListener("click", function(){
    if(RGB){
        RGB = false;
    }
    else{
        RGB = true;
    }
});

//when button is pressed toggle erase variable
eraseButton.addEventListener("click", function(){
    if(erase){
        erase = false;
    }
    else{
        erase = true;
    }
});


