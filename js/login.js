document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault()
    const phoneNumber = document.getElementById("phone-number").value;
    const inputPin = document.getElementById("password-pin").value;
    if(phoneNumber === "" || inputPin === "") {
        alert("Please fill in all fields!");
        return;
    }
    if(phoneNumber.length <= 11 && inputPin === "1234") {
        window.location.href = "./home.html"
    }else{
       alert("Wrond Youre Password or Pin!")
    }
})