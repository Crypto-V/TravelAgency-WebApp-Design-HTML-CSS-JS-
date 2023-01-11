var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if ( username == "admin" && password == "admin"){
        alert ("Login successfully"+"\n"+"This is just for learning pupouse so the actual log in will be simulated");
        window.location = window.location.href; // Redirecting to the last page.
        return false;
    }else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt; try login= admin password=admin");
        // Disabling fields after 3 attempts.
    if( attempt <= 0){
        alert("Incorect password, you will be redirected to the main page!")
        window.location = "index.html";
        return false;
    }
    }
}
