// GO!
// TASK 1

//Declare All Key Elements
var buttonNode = document.querySelector("#navButton")
var navNode = document.querySelector("#hide-nav .nav-menu")
var navState = {
	showing: true                                                          
}

//Declare Functions and other tools to be used 

var navToggle = function(){
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






// TASK 2

//Declare All Key Elements
var answerBoxNode = document.querySelector("#add-guest .answer-box")
var guestListUl = document.querySelector("#add-guest ul")
var newInputBox = document.createElement('input')
newInputBox.type = "text"
newInputBox.className = "guestList_input"
var inputNode = document.querySelector("#add-guest input")

var entryState = {
	showing: true                                                          
}
 

//Declare Functions and other tools to be used 

answerBoxNode.insertBefore(newInputBox, answerBoxNode.childNodes[0]) 

var enterGuest = function(eventObj){
	if(eventObj.keyCode === 13){
		//Assign User Entry from KeyCode Target Value to Input Node
		var inputNode = eventObj.target
		var userInput = inputNode.value

		//Create new li Node for guest entries
		var liNode = document.createElement('li')
		liNode.className = "guestList"
		liNode.textContent = userInput

		//li Node CSS Styling
		liNode.style.fontSize = "14px"
		liNode.style.textAlign = "left"
		liNode.style.fontFamily = "sans-serif"

		//Append new li Node to UL Parent
		guestListUl.appendChild(liNode)

		//Clear Input Box
		inputNode.value = ''
  	}  

  	// Add Background Color Effect to every other li entry
  	if(entryState.showing){
  		liNode.style.background= ""
  		entryState.showing = false
  	} else {
  		liNode.style.background = "#fca530"
  		entryState.showing = true
  	}
}


//Declare Actions or Pending Actions

newInputBox.addEventListener('keydown',enterGuest)







// TASK 3

//Declare All Key Elements
var ulNode = document.querySelector("#add-guest-bonus ul")
var inputNode = document.querySelector("#add-guest-bonus input")

var entryState = {
	showing: true                                                        
}
 

//Declare Functions and other tools to be used
	//Function to Add li items to guestlist from user input
var guestBonus = function(eventObj){
	if(eventObj.keyCode === 13){
		//Assign User Entry from KeyCode Target Value to Input Node
		var inputNode = eventObj.target
		var userInput = inputNode.value

		//Create new li Node for guest entries
		var liNode = document.createElement('li')
		liNode.className = "guestList"
		liNode.textContent = userInput
		liNode.style.fontSize = "14px"
		liNode.style.textAlign = "left"
		liNode.style.fontFamily = "sans-serif"
		//Append new li Node to UL Parent
		ulNode.appendChild(liNode)

		//Create new button to remove guest entries
		var removeButton = document.createElement('button')
		removeButton.className = "guestList_button"
		removeButton.textContent = "X"

		//Append new button Node to li Parent Node
		liNode.appendChild(removeButton)

		//Clear Input Box
		inputNode.value = ''

		//Function to delete li items from guest list
		var removeGuest = function(){
			ulNode.removeChild(liNode)
		}

  		removeButton.addEventListener('click',removeGuest)
  	}  

  	// Add Background Color Effect to every other li entry
  	if(entryState.showing){
  		liNode.style.background = ""
  		entryState.showing = false
  	} else {
  		liNode.style.background = "#ffffff"
  		entryState.showing = true
  	}
}


//Declare Actions or Pending Actions

inputNode.addEventListener('keydown',guestBonus)


