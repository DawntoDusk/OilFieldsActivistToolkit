var factList = [
  "The first oil spill occured on December 15, 1976, near Nantucket Shoals in Massachusetts, where a tanker called the Argo Merchant spilled 7.7 million gallons of heavy fuel oil.",
  "Oil and gas companies use machines, like an air gun, which create seismic sounds that can be deafening, and life threatening for marine species",
  "The oil industry contains a variety of facilities and equipment which are a significant source of methane emissions.",
  "Across the United States, there are about 1.2 million oil and gas production facilities located within a half mile radius of citizens’ communities."
];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}