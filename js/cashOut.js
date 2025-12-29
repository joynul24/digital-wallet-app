document.getElementById("btn-cash-out").addEventListener("click", function (e) {
    e.preventDefault();

    const amountField = document.getElementById("input-cash-out-amount");
    const pinField = document.getElementById("input-cash-out-pin");
    const balanceField = document.getElementById("available-balance");

    const amountValue = amountField.value.trim();
    const pinValue = pinField.value.trim();
    let balance = Number(balanceField.innerText) || 0;

    // 1. খালি ইনপুট চেক
    if (amountValue === "" || pinValue === "") {
        alert("Please input your amount and pin!");
        return;
    }

    // 2. সংখ্যা কিনা চেক
    if (isNaN(amountValue)) {
        alert("Amount must be a number!");
        return;
    }

    const cashOutAmount = parseInt(amountValue);

    // 3. পজিটিভ সংখ্যা কিনা চেক
    if (cashOutAmount <= 0) {
        alert("Amount must be greater than 0!");
        return;
    }

    // 4. PIN validation (৪ digit হতে হবে)
    if (!/^\d{4}$/.test(pinValue)) {
        alert("PIN must be a 4-digit number!");
        return;
    }

    // 5. Balance যথেষ্ট কিনা চেক
    if (cashOutAmount > balance) {
        alert("Insufficient balance!");
        return;
    }

    // 6. PIN সঠিক কিনা চেক
    if (pinValue !== "1234") {
        alert("Incorrect PIN!");
        return;
    }

    
    balance -= cashOutAmount;
    balanceField.innerText = balance;
    alert("Cash out successful!");

    
    amountField.value = "";
    pinField.value = "";
});
