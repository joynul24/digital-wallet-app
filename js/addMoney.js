document.getElementById("btn-add-money").addEventListener("click", function (e) {
    e.preventDefault()
    const inputAmount = parseInt(document.getElementById("input-amount").value);
    const inputPin = document.getElementById("input-pin").value;
    const balance = parseInt(document.getElementById("available-balance").innerText);

    // 1. খালি ইনপুট চেক
    if (inputAmount === "" || inputPin === "") { alert("Please input your amount and pin!"); return; }

    // 2. সংখ্যা কিনা চেক
    if (isNaN(inputAmount)) { alert("Amount must be a number!"); return; }

    // 3. পজিটিভ সংখ্যা কিনা চেক
    const inputAmounts = parseInt(inputAmount);
    if (inputAmounts <= 0) { alert("Amount must be greater than 0!"); return; }

    // 4. PIN এর দৈর্ঘ্য চেক (৪ ডিজিট হতে হবে)
    if (inputPin.length !== 4 || isNaN(inputPin)) { alert("PIN must be a 4-digit number!"); return; }

    // 5. সঠিক PIN কিনা চেক
    if (inputPin !== "1234") { alert("Incorrect PIN!"); return; }

    // 6. সব ঠিক থাকলে balance আপডেট করো
    const updateBalance = inputAmount + balance;
    document.getElementById("available-balance").innerText = updateBalance;
    alert("Balance updated successfully!");
    document.querySelector("form").reset();
})