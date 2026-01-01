document.getElementById("btn-add-money").addEventListener("click", function (e) {
    e.preventDefault()
    const inputAmount = parseInt(document.getElementById("input-amount").value);
    const inputPin = document.getElementById("input-pin").value;
    const balance = parseInt(document.getElementById("available-balance").innerText);

    if (inputAmount === "" || inputPin === "") { alert("Please input your amount and pin!"); return; }

    if (isNaN(inputAmount)) { alert("Amount must be a number!"); return; }

    const inputAmounts = parseInt(inputAmount);
    if (inputAmounts <= 0) { alert("Amount must be greater than 0!"); return; }

    if (inputPin.length !== 4 || isNaN(inputPin)) { alert("PIN must be a 4-digit number!"); return; }

    if (inputPin !== "1234") { alert("Incorrect PIN!"); return; }

    const updateBalance = inputAmount + balance;
    document.getElementById("available-balance").innerText = updateBalance;
    alert("Balance updated successfully!");
    document.querySelector("form").reset();

    // ---Transaction History Add --- 
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
      <img class="w-[25px]" src="./assets/add-money.png" alt="Add Money" />
      <div>
        <p class="font-bold">Add Money</p>
        <p>Money: ${inputAmounts} Tk on ${dateTime}</p>
      </div>
     </div>
    <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
   </div>
   `;
   
   document.getElementById("transactions-history-container").appendChild(historyDiv);

})