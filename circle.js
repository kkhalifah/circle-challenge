function whenButtonClick (){
//on click of button
// what is the radius?
// - grab the text input box
//take the string and change it into a number.
// calculate the Circumference of the circle (size)
// take the calculation (a number)
// should number be a number, pixels, or?
// and make a circle that size
// maybe modify to make circle not too big
// each number entered should create a different size circle
// - get the string of what the user typed in that box
var radiusString = inputRadius.value;
var radiusInput = document.getElementById('inputRadius').value;
// - turn that string into a number
//var radiusString = Number(inputRadius).value;
// console.log that radius just so we know it's working.
console.log(radiusString);

var newElement = document.createElement("div");
document.body.appendChild(newElement);
document.getElementById("click");

var areaTotaled = document.createElement("p");
areaTotaled.className= "areaTotaled";
areaTotaled.innerText="Area is " + (radiusInput*radiusInput*Math.PI).toFixed(2);
newElement.appendChild(areaTotaled);

var newElement = document.createElement("p");
newElement.className= "redcircle";
document.body.appendChild(newElement);
document.getElementById("redcircle").width=(radiusInput*2) + "px";
document.getElementById('redcircle').height=(radiusInput*2) + "px";

var areaTotaled = document.createElement("p");
areaTotaled.className= "areaTotaled";
areaTotaled.innerText="Area is " + (radiusInput*radiusInput*Math.PI).toFixed(2);
newElement.appendChild(areaTotaled);


//}
// function circle(radius) {
//     this.radius = radius;
//   // area method
//     this.area = function () {
//         return Math.PI * this.radius * this.radius;
//     };
// }
// var c = new circle(radiusInput);
// console.log('Area =', c.area().toFixed(2));
};
