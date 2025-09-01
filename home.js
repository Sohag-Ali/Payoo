const validPin = 1426;
const transactionData = [];

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("blance");
  availableBalanceElement.innerText = value;
}

// function to toggle

function toToggleHandel(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);

    if(amount <= 0){
        alert("Invalid Amount")
        return;
    }
    const pin = document.getElementById("pin-number").value;

    console.log(bank, accountNumber, amount, pin);

    const totalBlance = parseInt(document.getElementById("blance").innerText);
    console.log(totalBlance);

    if (accountNumber.length < 11) {
      alert("please provied valid account number");
      return;
    }
    if (pin != validPin) {
      alert("please provied a valid Pin number");
      return;
    }
    const totalNewAvailableBlance = totalBlance + amount;
    document.getElementById("blance").innerText = totalNewAvailableBlance;

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// cash out money feature.

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("withdraw-account-number").value;
  const pinNumber = document.getElementById("withdraw-pin").value;

  const amount = parseInt(document.getElementById("withdraw-amount").value);
  const availableBalance = parseInt(
    document.getElementById("blance").innerText
  );

  if(amount<=0 || amount>availableBalance){
    alert("invalid amount")
    return;
  }

  if (agentNumber.length < 11) {
    alert("please provied valid account number");
    return;
  }
  if (pinNumber != validPin) {
    alert("please provied a valid Pin number");
    return;
  }

  const totalNewAvailableBlance = availableBalance - amount;
  console.log(totalNewAvailableBlance);
  document.getElementById("blance").innerText = totalNewAvailableBlance;

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText=""
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-white rounded-xl p-3 mt-3 flex items-center justify-between">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png" class="mx-auto" alt="" />
            </div>
            <div class="ml-3">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>`;
      transactionContainer.appendChild(div);
    }
  });

//  toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
  toToggleHandel("add-money-parents");
  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    toToggleHandel("cash-out-parents");
    handleButtonToggle("cash-out-button");
  });

document.getElementById("transfer-btn").addEventListener("click", function () {
  toToggleHandel("transfer-money-parents");
  handleButtonToggle("transfer-btn");
});

document.getElementById("Get-bonus-btn").addEventListener("click", function () {
  toToggleHandel("get-bonus-parents");
  handleButtonToggle("Get-bonus-btn");
});

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  toToggleHandel("pay-bill-parents");
  handleButtonToggle("pay-bill-btn");
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    toToggleHandel("transaction-parents");
    handleButtonToggle("transaction-btn");
  });
