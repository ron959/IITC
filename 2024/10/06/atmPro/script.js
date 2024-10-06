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

const transBot= document.getElementById("transaction-section");
const proBot= document.getElementById("process-transaction");

const depositBot= document.getElementById("deposit-btn")
.addEventListener("click", function(){
 transBot.classList.remove("hidden");
    proBot.addEventListener("click", function(){
        
    })
}

)

