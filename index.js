const billInput = document.querySelector(".bill");
const buttons = document.querySelector(".tip-buttons");
const percent5 = document.querySelector("#button1");
const percent10 = document.querySelector("#button2");
const percent15 = document.querySelector("#button3");
const percent25 = document.querySelector("#button4");
const percent50 = document.querySelector("#button5");
const customInput = document.querySelector(".custom-tip-input");
const noOfPeople = document.querySelector(".no-of-people");
const reset = document.querySelector(".reset");
let outputTip = document.querySelector(".tip-amount");
let totalOutputTip = document.querySelector(".total-tip");

let billValue = Number(billInput.value);
let customInputValue = Number(customInput.value);
let noOfPeopleValue = Number(noOfPeople.value);

percent5.addEventListener("click", percent5Function);

function percent5Function() {
  var percent1 = Math.round((billInput.value / 100) * 5);
  percent5.style.backgroundColor = "hsl(172, 67%, 45%)";
  percent5.style.color = "#000";
  outputTip.textContent = `$` + percent1;
  var percent1Total = billInput.value / noOfPeopleValue + percent1;
  totalOutputTip.textContent = `$` + percent1Total;
}
percent5.addEventListener("click", () => {
  percent10.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent10.style.color = "#fff";
  percent15.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent15.style.color = "#fff";
  percent25.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent25.style.color = "#fff";
  percent50.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent50.style.color = "#fff";
});
percent10.addEventListener("click", percent10Function);
function percent10Function() {
  var percent2 = Math.round((billInput.value / 100) * 10);
  percent10.style.backgroundColor = "hsl(172, 67%, 45%)";
  percent10.style.color = "#000";
  outputTip.textContent = `$` + percent2;
  var percent2Total = billInput.value / noOfPeopleValue + percent2;
  totalOutputTip.textContent = `$` + percent2Total;
}
percent10.addEventListener("click", () => {
  percent5.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent5.style.color = "#fff";
  percent15.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent15.style.color = "#fff";
  percent25.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent25.style.color = "#fff";
  percent50.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent50.style.color = "#fff";
});
percent15.addEventListener("click", percent15Function);
function percent15Function() {
  var percent3 = Math.round((billInput.value / 100) * 15);
  percent15.style.backgroundColor = "hsl(172, 67%, 45%)";
  percent15.style.color = "#000";
  outputTip.textContent = `$` + percent3;
  var percent3Total = billInput.value / noOfPeopleValue + percent3;
  totalOutputTip.textContent = `$` + percent3Total;
}
percent15.addEventListener("click", () => {
  percent5.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent5.style.color = "#fff";
  percent10.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent10.style.color = "#fff";
  percent25.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent25.style.color = "#fff";
  percent50.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent50.style.color = "#fff";
});
percent25.addEventListener("click", percent25Function);
function percent25Function() {
  var percent4 = Math.round((billInput.value / 100) * 25);
  percent25.style.backgroundColor = "hsl(172, 67%, 45%)";
  percent25.style.color = "#000";
  outputTip.textContent = `$` + percent4;
  var percent3Total = billInput.value / noOfPeopleValue + percent4;
  totalOutputTip.textContent = `$` + percent3Total;
}
percent25.addEventListener("click", () => {
  percent5.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent5.style.color = "#fff";
  percent10.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent10.style.color = "#fff";
  percent15.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent15.style.color = "#fff";
  percent50.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent50.style.color = "#fff";
});
percent50.addEventListener("click", percent50Function);
function percent50Function() {
  var percent5 = Math.round((billInput.value / 100) * 50);
  percent50.style.backgroundColor = "hsl(172, 67%, 45%)";
  percent50.style.color = "#000";
  outputTip.textContent = `$` + percent5;
  var percent4Total = billInput.value / noOfPeopleValue + percent5;
  totalOutputTip.textContent = `$` + percent4Total;
}
percent50.addEventListener("click", () => {
  percent5.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent5.style.color = "#fff";
  percent10.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent10.style.color = "#fff";
  percent15.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent15.style.color = "#fff";
  percent25.style.backgroundColor = "hsl(183, 100%, 15%)";
  percent25.style.color = "#fff";
});
customInput.addEventListener("change",(e)=>{
    var percent6 = Math.round((billInput.value / 100) * customInputValue);
    outputTip.textContent = `$` + percent6;
    var percent6Total = (billInput.value / noOfPeopleValue) + percent6;
    totalOutputTip.textContent = `$` + percent6Total;
  
})