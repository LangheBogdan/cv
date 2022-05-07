// alert on document ready
alert("Work in progress");

const juniorWebDev = document.querySelector("#junior-web-developer");
const webContentManager = document.querySelector("#web-content-manager");
const juniorWebDevBegin = 2020;
const webContentManagerBegin = juniorWebDevBegin;
let current = '';
//get current year
const year = new Date().getFullYear();
if (year){
  current = "(Current job)"
}
juniorWebDev.textContent = juniorWebDevBegin.toString() + " - " + year.toString() + " " + current;
webContentManager.textContent = webContentManagerBegin.toString() + " - " + year.toString() + " " + current;



