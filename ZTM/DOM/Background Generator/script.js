var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function addOrDontAdd0ToHex(i_HexInString)
{
	var hexToReturn = i_HexInString;

	if (i_HexInString.length === 1)
	{
        hexToReturn = 0 + hexToReturn;
	}

      return hexToReturn;
}

function RgbToHex(i_RgbString)
{
	var separator = ",";
	var rgb = i_RgbString.substr(4).split(")")[0].split(separator);
	var r = Number(rgb[0]).toString(16);
	var g = Number(rgb[1]).toString(16);
	var b = Number(rgb[2]).toString(16);

	return "#" + addOrDontAdd0ToHex(r) + addOrDontAdd0ToHex(g) + addOrDontAdd0ToHex(b);
}


function SetInputColorsToBackground()
{
	var styleColor = getComputedStyle(body).backgroundImage;
	var indexFirstColor = Number(styleColor.indexOf(","));
	var lastIndexOfBracket = Number (styleColor.lastIndexOf(")"));
	var initialColors = styleColor.substring(indexFirstColor + 1, lastIndexOfBracket).split(",");
	var temporaryElement = document.createElement("div");
	
	temporaryElement.style.color = initialColors[0];
	document.body.appendChild(temporaryElement);
	color1.value = RgbToHex(getComputedStyle(temporaryElement).color);
	temporaryElement.style.color = initialColors[1];
	color2.value = RgbToHex(getComputedStyle(temporaryElement).color);
	document.body.removeChild(temporaryElement);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

SetInputColorsToBackground();