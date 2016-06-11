// GO!
// TASK 1

//Declare All Key Elements
var buttonNode = document.querySelector("#navButton")
var navNode = document.querySelector("#hide-nav .nav-menu")
console.log(navNode)
var navState = {
	showing: true                                                          
}

//Declare Functions and other tools to be used 

var navToggle = function(){
	//alert("Button works!")
	if(navState.showing){
		navNode.style.visibility = "hidden"
		navNode.style.transition = "1s all ease"
		navNode.style.opacity = 0
		buttonNode.textContent = "Show Nav"
		navState.showing = false
	}
	else{
		navNode.style.visibility = "visible"
		navNode.style.transition = "1s all ease"
		navNode.style.opacity = 1
		buttonNode.textContent = "Hide Nav"
		navState.showing = true
	}
	
}


//Declare Actions or Pending Actions
buttonNode.addEventListener('click',navToggle)

