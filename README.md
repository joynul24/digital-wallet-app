# 💳 Digital Wallet App

A simple **Digital Wallet Application** built with HTML, CSS, and JavaScript DOM.  
This project simulates core wallet functionalities such as cash out, money transfer, bill payment, and bonus coupons, while maintaining a transaction history.

---

## 🚀 Features

- **Add Money (Deposit)** 
  Add funds to your wallet balance: 
  - Enter deposit amount 
  - Validate numeric and positive input 
  - Balance increases accordingly 
  - Transaction history logging

- **Cash Out**  
  Withdraw money from your wallet with validation checks:
  - Empty input validation  
  - Numeric and positive amount check  
  - 4-digit PIN validation  
  - Pin: `1234`
  - Sufficient balance check  
  - Transaction history logging  

- **Transfer Money**  
  Send money to another account:
  - 11-digit random account number validation  
  - Amount and PIN validation  
  - Balance deduction  
  - Transaction history logging  

- **Get Bonus**  
  Apply a coupon code to receive bonus funds:
  - Valid coupon: `JM26`  
  - Adds **100 Tk** to balance  
  - Transaction history logging  

- **Pay Bill**  
  Pay different types of bills:
  - Electricity Bill  
  - Bank Deposit  
  - Mobile Recharge  
  - Gas Bill  
  - Validates account number, amount, and PIN  
  - Deducts balance and logs transaction  

- **Transaction History**  
  Every action (Cash Out, Transfer, Bonus, Bill Payment) is recorded with:
  - Date and time  
  - Transaction type  
  - Amount details  

---

## 🛠️ Technologies Used
- **HTML5** for structure  
- **CSS3 / TailwindCSS** for styling  
- **JavaScript (ES6)** for functionality and validation  

---

## 📂 Project Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/joynul24/digital-wallet-app.git
