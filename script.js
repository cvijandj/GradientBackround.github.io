var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

css.textContent = "Your old css was: " + localStorage.getItem("bg");
body.style.background = "linear-gradient(to right, " 
+ localStorage.getItem("color11") + ", " + localStorage.getItem("color22") + ")";
document.querySelector('input[class="color1"]').value = localStorage.getItem("color11");
document.querySelector('input[class="color2"]').value = localStorage.getItem("color22");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	localStorage.setItem("color11", color1.value);
	localStorage.setItem("color22", color2.value);
	localStorage.setItem("bg", body.style.background + ";");

	css.textContent = "your new css is: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);