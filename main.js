// alert on document ready
alert("Work in progress");

const juniorWebDev = document.querySelector("#junior-web-developer");
const webContentManager = document.querySelector("#web-content-manager");
const travelAgent = document.querySelector("#travel-agent");
const juniorWebDevBegin = 2020;
const webContentManagerBegin = juniorWebDevBegin;
const otherJobs = {
  travelAgent: 2019,
  concierge: 2008,
}
let current = '';
//get current year
const year = new Date().getFullYear();
if (year > juniorWebDevBegin) {
  current = `(Current job / Experience: ${year - juniorWebDevBegin} years)`;
}
juniorWebDev.textContent = juniorWebDevBegin.toString() + " - " + year.toString() + " " + current;
webContentManager.textContent = webContentManagerBegin.toString() + " - " + year.toString() + " " + current;
travelAgent.textContent = otherJobs.travelAgent.toString() + " - " + juniorWebDevBegin.toString();



