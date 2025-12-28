document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault()
    const phoneNumber = document.getElementById("phone-number").value;
    const inputPin = document.getElementById("input-pin").value;
    if(phoneNumber === "" || inputPin === "") {
        alert("Please fill in all fields!")
    }
    if(phoneNumber.length <= 11 && inputPin === "1234") {
        window.location.href = "./home.html"
    }else{
       alert("Wrond Youre Password or Pin!")
    }
})