const validPin = 1426 ;

document.getElementById("btn-add-money").addEventListener("click",function(e){
    e.preventDefault();
    console.log("add money");

    const bank = document.getElementById("bank").value ;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("pin-number").value;

    console.log(bank , accountNumber,  amount,  pin);

    const totalBlance = parseInt(document.getElementById("blance").innerText );
    console.log(totalBlance) ;

    if(accountNumber.length < 11){
        alert("please provied valid account number");
        return ;
    }
    if(pin != validPin){
        alert("please provied a valid Pin number");
        return;
    }
    const totalNewAvailableBlance = totalBlance + amount ;
    document.getElementById("blance").innerText = totalNewAvailableBlance ;
})

// cash out money feature.

document.getElementById("withdraw-btn").addEventListener("click",function(e){
e.preventDefault();

 const agentNumber = document.getElementById("withdraw-account-number").value;
const pinNumber= document.getElementById("withdraw-pin").value;


const amount = parseInt(document.getElementById("withdraw-amount").value);
const availableBalance = parseInt(document.getElementById("blance").innerText);

 if(agentNumber.length < 11){
        alert("please provied valid account number");
        return ;
    }
    if(pinNumber != validPin){
        alert("please provied a valid Pin number");
        return;
    }

const totalNewAvailableBlance = availableBalance - amount ;
console.log(totalNewAvailableBlance)
document.getElementById("blance").innerText = totalNewAvailableBlance
})

//  toggling feature

document.getElementById("add-button").addEventListener("click",function(){
document.getElementById("cash-out-parents").style.display = "none"
document.getElementById("add-money-parents").style.display  = "block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
document.getElementById("add-money-parents").style.display = "none"
document.getElementById("cash-out-parents").style.display  = "block"
})