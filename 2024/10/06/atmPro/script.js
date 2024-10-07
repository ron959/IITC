window.onload = function() {
    setTimeout(function() {
        // Completely remove the loading screen from the DOM
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            loadingScreen.remove(); // This removes the GIF div from the DOM
        }
        
        // Show the ATM interface
        document.getElementById("atm").classList.remove("hidden");
    }, 2000); // 3000 milliseconds = 3 seconds
};

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
    
}else if(validPIN !== pin){
    attempts++
    message.textContent = `Incorrect PIN. You have ${(maxAttempts - attempts)+1} attempts remaining.`;
    if(attempts> maxAttempts){
        cardSection.classList.add("hidden");
        alert("You have reached the limit of attempts")
}}
else{
    const balancesection= document.getElementById("balance-section");
    balancesection.classList.remove("hidden");
    balancesection.classList.add("flex-container");
    cardSection.classList.add("hidden");
    document.querySelector("h2").style.display = "none";}
}
)


const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const transactionMessage = document.getElementById("transaction-message");
//  Deposit Button Click
depositBtn.addEventListener("click", function () {
    // Hide the deposit button and withdraw button
    depositBtn.style.display = "none";
    withdrawBtn.style.display = "none";

    // Creating a big input field and a confirm deposit button
    transactionMessage.innerHTML = `
        <input type="number" id="deposit-amount" class="big-input" min="1" placeholder="Enter deposit amount">
        <button id="confirm-deposit" class="big-button">Confirm Deposit</button>
    `;

    //  Confirm Deposit Click
    document.getElementById("confirm-deposit").addEventListener("click", function () {
        const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid deposit amount.");
        } else {
            balance += depositAmount;
            document.getElementById("balance-amount").textContent = balance;
            transactionMessage.style.color= "#A5B68D";
            transactionMessage.innerHTML = `Successfully deposited $${depositAmount}.`;

            // Restore the Deposit and Withdraw buttons
            depositBtn.style.display = "inline-block";
            withdrawBtn.style.display = "inline-block";
        }
    });
});

//  Withdraw Button Click
withdrawBtn.addEventListener("click", function () {
    // Hide the deposit and withdraw buttons
    depositBtn.style.display = "none";
    withdrawBtn.style.display = "none";

    // Creating a big input field and a confirm withdraw button
    transactionMessage.innerHTML = `
        <input type="number" id="withdraw-amount" class="big-input" min="1" placeholder="Enter withdrawal amount">
        <button id="confirm-withdraw" class="big-button">Confirm Withdraw</button>
    `;
    //  Confirm Withdraw Click
    document.getElementById("confirm-withdraw").addEventListener("click", function () {
        const withdrawAmount = document.getElementById("withdraw-amount").value;
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Please enter a valid withdrawal amount.");
        } else if (withdrawAmount > balance) {
            alert("You are too poor bro.");
        } else {
            balance -= withdrawAmount;
            document.getElementById("balance-amount").textContent = balance;
             transactionMessage.style.color=  "#DA8359"
            transactionMessage.innerHTML = `Successfully withdrew $${withdrawAmount}.`;

            // Restore the Deposit and Withdraw buttons
            depositBtn.style.display = "inline-block";
            withdrawBtn.style.display = "inline-block";
        }
    });
});

//exit button
document.getElementById("exit-btn").addEventListener("click", function () {
    location.reload()}) 