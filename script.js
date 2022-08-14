function checkLove() {
 var nM = document.getElementById("name");
 var name = nM.value;
 var el = document.getElementById(
  "pass");
 var val = el.value;
 var ans = document.getElementById("rel");
 var rel = ans.value;
var result = Math.floor(Math.random()*100)+1;
 if (rel == "Mother") {
  document.getElementById("result")
   .innerHTML = name + ", your love for " + val + " your Mother is...";
document.getElementById("percent").innerHTML = "99%";
 }
 if (rel != "Mother") {
  document.getElementById("result")
   .innerHTML = name + ", your love for " + val + " your " + rel + " is... ";
document.getElementById("percent").innerHTML = result + "%";
 }

}