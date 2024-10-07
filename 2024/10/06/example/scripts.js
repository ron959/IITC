let balance= 1000
let attempts= 0
const maxAttempts= 3
const validPIN = "1234";

const PinBot= document.querySelector("#submit-pin").addEventListener('click',function () {
const pin= document.querySelector('#pin').value;
const message= document.querySelector("#pin-message");
const cardSection= document.getElementById("card-section");
if(pin.length< 4 || isNaN(pin)){
    message.textContent= 'The pin needs contain four digits of number';
    
}else if(validPIN != pin){
    attempts++
    if(attempts> maxAttempts){
    cardSection.classList.add("hidden");
}}
else{
    const balancesection= document.getElementById("balance-section");
    balancesection.classList.remove("hidden");
    balancesection.classList.add("flex-container");
    cardSection.classList.add("hidden");
}
}
)

// const transBot= document.getElementById("transaction-section");
// const proBot= document.getElementById("process-transaction");

// const depositBot= document.getElementById("deposit-btn")
// .addEventListener("click", function(){
//  transBot.classList.remove("hidden");
//  proBot.addEventListener("click", function(){
        
//     })
// }

// )

// let balance = 1000; // Initial balance

// Handle Deposit Button Click
document.getElementById("deposit-btn").addEventListener("click", function () {
    const transactionMessage = document.getElementById("transaction-message");

    // Use innerHTML to create the input field and confirm button for deposit
    transactionMessage.innerHTML = `
        <label for="deposit-amount">Enter amount to deposit:</label>
        <input type="number" id="deposit-amount" min="1" placeholder="Amount">
        <button id="confirm-deposit">Confirm Deposit</button>
    `;

    // Handle Confirm Deposit Click
    document.getElementById("confirm-deposit").addEventListener("click", function () {
        const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid deposit amount.");
        } else {
            balance += depositAmount;
            document.getElementById("balance-amount").textContent = balance;
            transactionMessage.innerHTML = `Successfully deposited $${depositAmount}.`;
        }
    });
});

// Handle Withdraw Button Click
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const transactionMessage = document.getElementById("transaction-message");

    // Use innerHTML to create the input field and confirm button for withdrawal
    transactionMessage.innerHTML = `
        <label for="withdraw-amount">Enter amount to withdraw:</label>
        <input type="number" id="withdraw-amount" min="1" placeholder="Amount">
        <button id="confirm-withdraw">Confirm Withdrawal</button>
    `;

    // Handle Confirm Withdraw Click
    document.getElementById("confirm-withdraw").addEventListener("click", function () {
        const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Please enter a valid withdrawal amount.");
        } else if (withdrawAmount > balance) {
            alert("Insufficient balance.");
        } else {
            balance -= withdrawAmount;
            document.getElementById("balance-amount").textContent = balance;
            transactionMessage.innerHTML = `Successfully withdrew $${withdrawAmount}.`;
        }
    });
});


