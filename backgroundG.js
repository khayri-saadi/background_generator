/*var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getAnimations("userinput")
/*button.addEventListener('click', function() {
        console.log("click!!!")
})

button.addEventListener("click", function() {
    console.log(input.value)
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value));/* bch tzyd element f liste "testing"
    ul.appendChild(li)
})
*/
var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

}
color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);