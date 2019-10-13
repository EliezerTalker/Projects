var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var Delete = document.getElementsByClassName("Delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var button = createDeleteLiButton();
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
	button.addEventListener("click",deleteItem);
	li.addEventListener("click",toggleLiItem);
}

function createDeleteLiButton()
{
	var button = document.createElement("button");

	button.appendChild(document.createTextNode("delete"));

	return button;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggleLiItem(event)
{
   
  if(event.target.tagName == "LI")
  {
  	console.log(event.target.tagName + " test");
  	event.target.classList.toggle("done");
  }
}


function deleteItem(event)
{
	
	var button = event.target;
	console.log( button.tagName +"delete test");
	var li = button.parentElement;
	console.log( li.tagName +"delete test");
	var ul = li.parentElement;
	console.log( ul.tagName +"delete test");	
	ul.removeChild(li);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0 ; i < ul.children.length ;i++) {
	
	ul.children[i].addEventListener("click", toggleLiItem);
}

for (var i = 0 ; i < Delete.length; i++) {

	Delete[i].addEventListener("click",deleteItem );
}


