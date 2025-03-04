//initially, sketchpad consists of 64x64 boxes
let size = 64;

//select sketchpad
const sketchpad = document.querySelector(".sketchpad");

//create and append 64 boxes into the sketchpad
for(let i = 0; i<size; i++){
    const box = document.createElement("div");
    box.classList.add("box", "box--default");
    sketchpad.append(box);
}
