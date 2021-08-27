function appenderforchkout() {
  let sum1 = JSON.parse(localStorage.getItem(`cartsum1`));
  document.getElementById("ammount").innerHTML = "₹  " + sum1;
    let sum2 = JSON.parse(localStorage.getItem(`cartsum2`));
    document.getElementById("ammounttotal").innerHTML = "₹  " + sum2;
}
appenderforchkout();

function validation() {
  let name = document.getElementById(`fname`);
  let email = document.getElementById(`email`);
  let address = document.getElementById(`adr`);
  let city = document.getElementById(`city`);
  let state = document.getElementById(`state`);
  let zip = document.getElementById(`zip`);
  let cname = document.getElementById(`cname`);
  let cnum = document.getElementById("cnum");
  let expmonth = document.getElementById(`expmonth`);
  let expyear = document.getElementById(`expyear`);
  let cvv = document.getElementById(`cvv`);
  if (
    email.value == "" ||
    name == "" ||
    address == "" ||
    city == "" ||
    state == "" ||
    zip == "" ||
    cname == "" ||
    cnum == "" ||
    cvv == "" ||
    expmonth == "" ||
    expyear == ""
  ) {
    alert(`all filed need to be field`);
  } else {
    window.location.href = "paymentDone.html";
  }
}

document.getElementById(`donechek`).onclick = function () {
  validation();
};
