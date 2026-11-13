
const wings = ["First Wing", "Second Wing", "Third Wing", "Fourth Wing"];
const section = ["Claw Section", "Flame Section", "Tail Section"];
const squad = ["First Squad", "Second Squad", "Third Squad"];

var button = document.getElementById("button");
var paragraph = document.getElementById("paragraph");

button.addEventListener("click", function() {

const wingsRandom = Math.floor(Math.random() * wings.length);
const sectionRandom = Math.floor(Math.random() * section.length);
const squadRandom = Math.floor(Math.random() * squad.length);
const output = "You belong to " + wings[wingsRandom] + ", " + section[sectionRandom] + ", " + squad[squadRandom] + "."; 
  
paragraph.textContent = output;

});