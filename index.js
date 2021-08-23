var billAmount = document.querySelector(".billAmount");
var btnBillCheck = document.querySelector(".btnBillCheck");
var msgDisplay1 = document.querySelector("#msg1");
var amountGiven = document.querySelector(".amountGiven");
var btnGivenAmountCheck = document.querySelector(".btnGivenAmountCheck");
var msgDisplay2 = document.querySelector("#msg2");
var display2 = document.querySelector("#display2");
var showNotes = document.querySelectorAll(".showNotes");
var output = document.querySelector(".output");
amountGiven.style.display = "none";
btnGivenAmountCheck.style.display = "none";
display2.style.display = "none";
output.style.display = "none";
var arrNote = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
//showNotes =[]
const billCheckClickHandler = () => {
  if (billAmount.value <= 0) {
    var msg = "Enter Valid Amount";
    msgDisplay2.innerHTML = msg;
  } else {
    msg = "";
    btnBillCheck.style.display = "none";
    amountGiven.style.display = "inline";
    btnGivenAmountCheck.style.display = "inline";
    display2.style.display = "inline";
    msgDisplay1.innerHTML = msg;

    console.log("clicked bill", billAmount.value);
  }
};
const givenCashHandler = () => {
  // var givenAmount = amountGiven.value;
  // var billInput = billAmount.value;
  console.log("clicked bill", billAmount.value < amountGiven.value);
  var msg = "";
  if (Number(amountGiven.value) > Number(billAmount.value)) {
    console.log("if working");
    var amountToBeReturn = amountGiven.value - billAmount.value;
    returnCash(amountToBeReturn);
    msg = "cash notes";
  } else if (amountGiven.value === billAmount.value) {
    msg = "you donot need to return anything";
    output.style.display = "none";
  } else {
    msg = "enter valid amount";
    output.style.display = "none";
  }
  msgDisplay2.innerHTML = msg;
};

const returnCash = (amountToBeReturn1) => {
  console.log(amountToBeReturn1);
  output.style.display = "block";
  for (var i = 0; i < arrNote.length; i++) {
    const left = Math.trunc(amountToBeReturn1 / arrNote[i]);
    console.log(left);

    //amountToBeReturn1 -= left * arrNote[i];
    amountToBeReturn1 %= arrNote[i];
    console.log(showNotes[i]);
    showNotes[i].innerHTML = left;
    console.log(showNotes[i]);
  }
};
btnBillCheck.addEventListener("click", billCheckClickHandler);
btnGivenAmountCheck.addEventListener("click", givenCashHandler);
