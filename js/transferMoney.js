document.getElementById("btn-transfer-money").addEventListener("click", function (e) {
    e.preventDefault();

    const userNumberField = document.getElementById("input-transfer-user-number");
    const amountField = document.getElementById("input-transfer-money-amount");
    const pinField = document.getElementById("input-transfer-money-pin");
    const balanceField = document.getElementById("available-balance");

    const userNumberValue = userNumberField.value.trim();
    const amountValue = amountField.value.trim();
    const pinValue = pinField.value.trim();
    let balance = Number(balanceField.innerText) || 0;

    if (userNumberValue === "" || amountValue === "" || pinValue === "") {
        alert("Please input account number, amount and pin!");
        return;
    }

    if (!/^\d{11}$/.test(userNumberValue)) {
        alert("Account number must be 11 digits!");
        return;
    }

    if (isNaN(amountValue)) {
        alert("Amount must be a number!");
        return;
    }

    const transferAmount = parseInt(amountValue);

    if (transferAmount <= 0) {
        alert("Amount must be greater than 0!");
        return;
    }

    if (!/^\d{4}$/.test(pinValue)) {
        alert("PIN must be a 4-digit number!");
        return;
    }

    if (transferAmount > balance) {
        alert("Insufficient balance!");
        return;
    }

    if (pinValue !== "1234") {
        alert("Incorrect PIN!");
        return;
    }

    balance -= transferAmount;
    balanceField.innerText = balance;
    alert("Transfer successful!");

    userNumberField.value = "";
    amountField.value = "";
    pinField.value = "";

    // -------- Transaction History Add --------
    const historyDiv = document.createElement("div");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const dateTime = `Today ${formattedHours}:${minutes} ${ampm}`;

    historyDiv.innerHTML = `
    <div class="flex justify-between items-center p-3 rounded-xl bg-white mt-3">
      <div class="flex items-center gap-2 text-gray-600">
       <img class="w-[25px]" src="./assets/add-money.png" alt="Transfer Money" />
       <div>
       <p class="font-bold">Transfer Money</p>
       <p>Transferred: ${transferAmount} Tk to ${userNumberValue} on ${dateTime}</p>
       </div>
       </div>
         <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
       </div>
    `;

    document.getElementById("transactions-history-container").appendChild(historyDiv);
});
