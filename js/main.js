function clicked(){
	
var user = document.getElementById('username');
var pass = document.getElementById('password');

var coruser = "test";
var corpass = "123";

if(user.value==coruser) {
	
	if(pass.value == corpass) {
		
		window.alert("You are loged in as" + user.value);
		}
	else {
		window.alert("incorect username or password");
		
		}
	}else {
		window.alert("incorect username or password");
		}

	
}