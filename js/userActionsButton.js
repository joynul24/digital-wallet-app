document.getElementById("btn-show-add-money").addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
})

document.getElementById("btn-show-cash-out").addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
})


document.getElementById("btn-show-transfer-money").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.remove("hidden");
})


document.getElementById("btn-show-get-bonus").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("transfer-money-form").classList.add("hidden");
     document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.remove("hidden");
});



document.getElementById("btn-show-pay-bill").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.remove("hidden");
})