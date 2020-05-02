let textpos = 1;
let w = 700;
let h = 900;

function setup(){
  var cnv = createCanvas(w,h);
  cnv.parent('myContainer');
}
function draw() {
  background(237, 34, 93);
  fill(0);
  rect(25, textpos, w, 100);
  textSize(28);
  textFont('Helvetica');
  text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex t. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu in culpa qui officiast laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure doll. ",30,110,w-60);
  fill(237, 31, 90);
  // text("Time and toys", 420,495,w-60);
  fill(0);
  text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dol.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo.",30,530,w-60);
}

function mouseWheel(event) {
  // print(event.delta);
  //move the square according to the vertical scroll amount
  textpos += event.delta*0.5;
  //uncomment to block page scrolling
  return false;

}
