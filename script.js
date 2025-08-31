document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    const mobileNumber = 17289180540 ;
    const pinNumber = 1234 ;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberValueConverted);

    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber)
    {
        window.location.href="./home.html"
    }
    else{
        alert("Invalid Login 😊 Please Try Again")
    }
})