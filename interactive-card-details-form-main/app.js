const cardName = document.getElementById("cardname");
const cardNumber = document.getElementById("cardnumber");
const expiryMonth = document.getElementById("month");
const expiryYear = document.getElementById("year");
const cvvVerify = document.getElementById("cvvnumber");
const formInput = document.getElementById("form-input");
const firsterr = document.querySelector(".error-one");
const seconderr = document.querySelector(".error-two");
const thirderr = document.querySelector(".error-three");
const fourtherr = document.querySelector(".error-four");
const submit = document.querySelector(".submit-btn");
let nameId = submit.addEventListener("click", checkName);
let cardNumberVal = submit.addEventListener("click", checkcardNumber);
let expiryVal = submit.addEventListener("click", checkExpiryMonthYear);
let cvvVal = submit.addEventListener("click", checkCvv);
let final = submit.addEventListener("click", nextPage);
let continuefn = document.querySelector(".continuepre");

function checkName(nameId) {
  nameId.preventDefault();
  let nameInput = cardName.value;
  if (/^[A-Za-z\s]*$/.test(nameInput) === false) {
    cardName.style.border = " 2px solid hsl(0, 100%, 66%)";
    firsterr.style.visibility = "visible";
    firsterr.innerHTML = "Wrong format,text only";
  } else if (nameInput === "") {
    cardName.style.border = " 2px solid hsl(0, 100%, 66%)";
    firsterr.style.visibility = "visible";
  } else {
    cardName.style.border = "";
    firsterr.style.visibility = "hidden";
  }
}

function checkcardNumber(cardNumberVal) {
  cardNumberVal.preventDefault();
  let numberInput = cardNumber.value;
  if (/^[0-9\s]+/.test(numberInput) === false && numberInput.length > 0) {
    cardNumber.style.border = " 2px solid hsl(0, 100%, 66%)";
    seconderr.style.visibility = "visible";
    seconderr.innerHTML = "Wrong format,number only";
  } else if (numberInput.length === 0) {
    cardNumber.style.border = " 2px solid hsl(0, 100%, 66%)";
    seconderr.style.visibility = "visible";
  } else {
    cardNumber.style.border = "";
    seconderr.style.visibility = "hidden";
  }
}
function checkExpiryMonthYear(expiryVal) {
  expiryVal.preventDefault();
  let currentYear = parseInt(new Date().getFullYear()) % 100;
  let currentMonth = parseInt(new Date().getMonth()) + 1;
  let totalMonth = 12;
  let monthInput = expiryMonth.value;
  let yearInput = expiryYear.value;
  if (
    monthInput.length === 0 ||
    yearInput.length === 0 ||
    (monthInput.length === 0 && yearInput.length === 0) ||
    monthInput > 12
  ) {
    expiryMonth.style.border = " 2px solid hsl(0, 100%, 66%)";
    expiryYear.style.border = " 2px solid hsl(0, 100%, 66%)";
    thirderr.style.visibility = "visible";
    thirderr.innerHTML = "Can't be blank";
  } else if (
    yearInput < currentYear ||
    (yearInput === currentYear && monthInput < currentMonth) ||
    yearInput > currentYear + 15 ||
    monthInput > totalMonth
  ) {
    expiryMonth.style.border = " 2px solid hsl(0, 100%, 66%)";
    expiryYear.style.border = " 2px solid hsl(0, 100%, 66%)";
    thirderr.style.visibility = "visible";
    thirderr.innerHTML = "Invalid Date";
  } else {
    expiryMonth.style.border = "";
    expiryYear.style.border = "";
    thirderr.style.visibility = "hidden";
  }
}

function checkCvv(cvvVal) {
  cvvVal.preventDefault();
  let cvvInput = cvvVerify.value;
  if (cvvInput === "") {
    cvvVerify.style.border = " 2px solid hsl(0, 100%, 66%)";
    fourtherr.style.visibility = "visible";
  } else {
    cvvVerify.style.border = "";
    fourtherr.style.visibility = "hidden";
  }
}

//Input value to UI
cardNumber.oninput = () => {
  document.querySelector(".card-number-update").innerText = cardNumber.value;
};

cardName.oninput = () => {
  document.querySelector(".card-name").innerText = cardName.value;
};

expiryMonth.oninput = () => {
  document.querySelector(".expiry").innerText = expiryMonth.value;
};
expiryYear.oninput = () => {
  document.querySelector(".expiryyear").innerText = expiryYear.value;
};
cvvVerify.oninput = () => {
  document.querySelector(".cvv").innerText = cvvVerify.value;
};

//Credit card length
cardNumber.onkeydown = function () {
  if (cardNumber.value.length > 0) {
    if (
      cardNumber.value.length === 4 ||
      cardNumber.value.length === 9 ||
      cardNumber.value.length === 14
    ) {
      cardNumber.value += " ";
    }
  }
};

// Thanks page
function nextPage(final) {
  final.preventDefault();
  if (
    firsterr.style.visibility === "hidden" &&
    seconderr.style.visibility === "hidden" &&
    thirderr.style.visibility === "hidden" &&
    fourtherr.style.visibility === "hidden"
  ) {
    document.getElementById("form-input").style.display = "none";
    document.getElementById("added-form").style.display = "block";
  } else {
    document.getElementById("form-input").style.display = "block";
    document.getElementById("added-form").style.display = "none";
  }
}

continuefn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("form-input").style.display = "block";
  document.getElementById("added-form").style.display = "none";
});
