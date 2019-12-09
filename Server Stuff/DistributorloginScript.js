var objPeople = [
  {
    username: "viveky",
    password: "minotaur"
  },
  {
    username: "TheBCWonder",
    password: "asdfghjkl;"
  }
]

function getInfo() {
	var username = document.getElementById('usernameBox').value
	var password = document.getElementById('passwordBox').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!");
			return
		}
	}
	console.log("incorrect username or password")
}
function hideShowPassword() {
  var x = document.getElementById("passwordBox");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
