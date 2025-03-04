//initially, sketchpad consists of 64x64 boxes
let size = 64;

//select sketchpad
const sketchpad = document.querySelector(".sketchpad");
const colorPicker = document.querySelector("#range-color");
const sizePicker = document.querySelector("#range-size");

//initially current color is gray
let currentColor = "#AAAAAA";

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
    //color the box
    target.style.backgroundColor = currentColor;
});




