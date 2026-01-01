document.getElementById("btn-pay-bill").addEventListener("click", function (e) {
    e.preventDefault();

    const billTypeField = document.querySelector("#pay-bill-form-select");
    const accountNumberField = document.getElementById("input-pay-bill-number");
    const amountField = document.getElementById("input-pay-bill-amount");
    const pinField = document.getElementById("input-pay-bill-pin");
    const balanceField = document.getElementById("available-balance");

    const billType = billTypeField.value.trim();
    const accountNumberValue = accountNumberField.value.trim();
    const amountValue = amountField.value.trim();
    const pinValue = pinField.value.trim();
    let balance = Number(balanceField.innerText) || 0;

    if (billType === "Select back" || accountNumberValue === "" || amountValue === "" || pinValue === "") {
        alert("Please select bill type, enter account number, amount and pin!");
        return;
    }

    if (!/^\d{6,}$/.test(accountNumberValue)) {
        alert("Account number must be at least 6 digits!");
        return;
    }

    if (isNaN(amountValue)) {
        alert("Amount must be a number!");
        return;
    }

    const payAmount = parseInt(amountValue);

    if (payAmount <= 0) {
        alert("Amount must be greater than 0!");
        return;
    }

    if (!/^\d{4}$/.test(pinValue)) {
        alert("PIN must be a 4-digit number!");
        return;
    }

    if (payAmount > balance) {
        alert("Insufficient balance!");
        return;
    }

    if (pinValue !== "1234") {
        alert("Incorrect PIN!");
        return;
    }

    balance -= payAmount;
    balanceField.innerText = balance;
    alert(`${billType} payment successful!`);

    accountNumberField.value = "";
    amountField.value = "";
    pinField.value = "";
    billTypeField.value = "Select back";

    // -------- Transaction History Add --------
    const historyDiv = document.createElement("div");
    historyDiv.classList.add("history-item");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const dateTime = `Today ${formattedHours}:${minutes} ${ampm}`;

    historyDiv.innerHTML = `
    <div class="flex justify-between items-center p-3 rounded-xl bg-white mt-3">
      <div class="flex items-center gap-2 text-gray-600">
       <img class="w-[25px]" src="./assets/add-money.png" alt="Pay Bill" />
       <div>
       <p class="font-bold">${billType}</p>
       <p>Paid: ${payAmount} Tk to ${accountNumberValue} on ${dateTime}</p>
       </div>
       </div>
         <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
       </div>
    `;

    document.getElementById("transactions-history-container").appendChild(historyDiv);
});
