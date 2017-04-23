function whenButtonClick (){
var radiusString = inputRadius.value;
var radiusInput = document.getElementById('inputRadius').value;
//var radiusString = Number(inputRadius).value;
// console.log that radius just so we know it's working.
console.log(radiusString);

var newElement = document.createElement("div");
newElement.style.width=(radiusInput*2) + "px";
newElement.style.height=(radiusInput*2) + "px";
newElement.style.borderRadius = "50%";
document.body.appendChild(newElement);
document.getElementById("click");

var areaTotaled = document.createElement("p");
areaTotaled.className= "areaTotaled";
areaTotaled.innerText="Area is " + (radiusInput*radiusInput*Math.PI).toFixed(2);
newElement.appendChild(areaTotaled);

var redcircle = document.createElement("div");
redcircle.style.width=(radiusInput*2) + "px";
redcircle.style.height=(radiusInput*2) + "px";
redcircle.backgroundColor ="red";
redcircle.borderRadius ="50%";
redcircle.className= "test";
// document.getElementById("redcircle").style.width=(radiusInput*2) + "px";
// document.getElementById('redcircle').style.height=(radiusInput*2) + "px";
document.body.appendChild(redcircle);


// <button type="button" onclick="myFunction()">Change height and width of image</button>
// function myFunction() {
//     document.getElementById("myImg").style.height = "300px";
//     document.getElementById("myImg").style.width = "300px";
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
    // - turn that string into a number
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
