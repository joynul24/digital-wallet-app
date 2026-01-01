document.getElementById("btn-show-add-money").addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-cash-out").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.remove("btn-active");
    document.getElementById("btn-show-add-money").classList.add("btn-active");
})

document.getElementById("btn-show-cash-out").addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-add-money").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.remove("btn-active");
    document.getElementById("btn-show-cash-out").classList.add("btn-active");
})




document.getElementById("btn-show-transfer-money").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-add-money").classList.remove("btn-active");
    document.getElementById("btn-show-cash-out").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.add("btn-active");
})





document.getElementById("btn-show-get-bonus").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-add-money").classList.remove("btn-active");
    document.getElementById("btn-show-cash-out").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.add("btn-active");
});




document.getElementById("btn-show-pay-bill").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-add-money").classList.remove("btn-active");
    document.getElementById("btn-show-cash-out").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.add("btn-active");
})



document.getElementById("btn-show-transactions").addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("history-all-container").classList.remove("hidden");
    // Button Avtice
    document.getElementById("btn-show-add-money").classList.remove("btn-active");
    document.getElementById("btn-show-cash-out").classList.remove("btn-active");
    document.getElementById("btn-show-transfer-money").classList.remove("btn-active");
    document.getElementById("btn-show-get-bonus").classList.remove("btn-active");
    document.getElementById("btn-show-pay-bill").classList.remove("btn-active");
    document.getElementById("btn-show-transactions").classList.add("btn-active");
})