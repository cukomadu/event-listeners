// GO!



// BONUS 
var input = document.querySelector("#add-guest-bonus input")
var guestList = document.querySelector("#add-guest-bonus ul")

var addGuest = function(e) {
	console.log(e.keyCode)
	if (e.keyCode === 13) {
		var newGuestItem = document.createElement('li')
		newGuestItem.innerHTML = e.target.value + "<button>X</button>"
		newGuestItem.classList.add('guest')
		newGuestItem.querySelector('button').addEventListener('click',function() {
			guestList.removeChild(newGuestItem)
		})
		guestList.appendChild(newGuestItem)
		e.target.value = ''
	}
}
input.addEventListener('keypress',addGuest)