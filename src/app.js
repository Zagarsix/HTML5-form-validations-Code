const cardNumber = document.getElementById("card");
const CVC = document.getElementById("CVC");
const amount = document.getElementById("amount");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const textArea = document.getElementById("tArea");
const alertMsg = document.getElementById("alertDanger")

const sendbutton = document.getElementById("submit");
sendbutton.addEventListener("click", function(e) {
  e.preventDefault();

  let arr = [
    cardNumber,
    CVC,
    amount,
    firstName,
    lastName,
    city,
    state,
    postalCode,
    textArea,
  ];
  let arrValue = [
    cardNumber.value,
    CVC.value,
    amount.value,
    firstName.value,
    lastName.value,
    city.value,
    state.value,
    postalCode.value,
    textArea.value,
  ];
  for (let i = 0; i < arrValue.length; i++) {
    if (arrValue[i] == "") {
      arr[i].classList.add("bg-danger", "bg-opacity-25");
      element = document.getElementById("alertDanger");
      element.style.display = "none";
      alertMsg.classList.remove('d-none');
    }
  }
  for (let i = 0; i < arrValue.length; i++) {
    if (arrValue[i] !== "") {
      arr[i].classList.remove("bg-danger", "bg-opacity-25");
      element = document.getElementById("alertDanger");
      element.style.display = "inline";
      alertMsg.innerHTML = 'Some fields are missing';
    }
  }
});
