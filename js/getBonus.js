document.getElementById("btn-get-bonus").addEventListener("click", function (e) {
    e.preventDefault();

    const couponField = document.getElementById("input-get-bonus-cupon"); 
    const balanceField = document.getElementById("available-balance");

    const couponValue = couponField.value.trim();
    let balance = Number(balanceField.innerText) || 0;

    if (couponValue === "") {
        alert("Please enter your coupon code!");
        return;
    }

    if (couponValue !== "JM26") {
        alert("Invalid coupon code!");
        return;
    }

    balance += 100;
    balanceField.innerText = balance;
    alert("Bonus added successfully!");

    couponField.value = "";

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
       <img class="w-[25px]" src="./assets/add-money.png" alt="Bonus Added" />
       <div>
       <p class="font-bold">Bonus Added</p>
       <p>Received: 100 Tk on ${dateTime}</p>
       </div>
       </div>
         <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
       </div>
    `;

    document.getElementById("transactions-history-container").appendChild(historyDiv);
});
