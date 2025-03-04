//initially, sketchpad consists of 64x64 boxes
let size = 64;

//select sketchpad
const sketchpad = document.querySelector(".sketchpad");
const colorPicker = document.querySelector("#range-color");
const sizePicker = document.querySelector("#range-size");

//initially current color is gray
let currentColor = "#AAAAAA";

//create and append 64 boxes into the sketchpad
for(let i = 0; i<size * size; i++){
    const box = document.createElement("div");
    box.classList.add("box", "box--default");
    sketchpad.append(box);
}

//when another color is picked
colorPicker.addEventListener("input", function(){
    //update the global variable: current color
    currentColor = colorPicker.value;
});

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
    //according to the new size
    for(let i = 0; i<size * size; i++){
        const box = document.createElement("div")
        box.classList.add("box", "box--default");
        sketchpad.appendChild(box);
    }
    //update grid values
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

});


