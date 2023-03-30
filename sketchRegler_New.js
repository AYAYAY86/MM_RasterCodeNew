const myRange1 = document.querySelector("#my-range1");
const myRange2 = document.querySelector("#my-range2");
const myRange3 = document.querySelector("#my-range3");

myRange1.value = 1;
myRange2.value = 3;
myRange3.value = 20;

let valX = myRange2.value;
let valY = myRange3.value;

let colors = [
  "#fca19a",
  "#55c6ff",
  "#43cd7c",
  "#8f8fff",
  "#ff7639",
  "#ff408e",
  "#fffa4a",
];

function setup() {
  createCanvas(1772, 564);
 
}

function draw() {
  let slider1 = myRange1.value;

  background(colors[round(random(0, 6))]);

  picker = slider1;
  if (picker > 0.5) {
    drawTriangle();
  } else {
    noStroke();
    drawEllipse();
  }


  // save(createCanvas, 'myFile.jpg'); // give file name
  // print("saved svg");
  // noLoop(); // we just want to export once
}

function drawTriangle() {
  let valX = myRange2.value;
  let valY = myRange3.value;

  sizeDivideW = valX;
  sizeDivideH = valY;
  sizeW = width / sizeDivideW;
  sizeH = height / sizeDivideH;

  let possibility = [sizeH / 2, sizeH / 1, sizeH - sizeH];
  let possibilityRandom = possibility[round(random(0, 2))];

  fill(colors[round(random(0, 6))]);

  for (x = 0; x < width; x += sizeW) {
    for (y = 0; y < height; y += sizeH) {
      noStroke();

      triangle(
        x + sizeW,
        y + possibilityRandom,

        x,
        y + sizeH,

        x,
        y + (sizeH - sizeH)
      );
    }
  }
  noLoop();
}

function drawEllipse() {
  let valX = myRange2.value;
  let valY = myRange3.value;

  sizeDivideW = valX;
  sizeDivideH = valY;
  sizeW = width / sizeDivideW;
  sizeH = height / sizeDivideH;

  fill(colors[round(random(0, 6))]);

  for (x = 0; x < width; x += sizeW) {
    for (y = 0; y < height; y += sizeH) {
      push();

      ellipse(sizeW / 2 + x, sizeH / 2 + y, sizeW, sizeH);
      pop();
    }
    noLoop();
  }
}

function keyTyped() {
  if (key === "r") {
    x = 0;
    y = 0;
    background(255);
    loop();
  }
}
