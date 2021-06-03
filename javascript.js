function tamara() {
  var person = prompt("Do you love Cat ?" );
 if(person == "yes"){
   document.write("Contact Us : 079000");
 }else{
   document.write("See you a nother time");
 }
}
var animals = [ "Dog", "Cat", "Cow"];
var text = "";
var i;
for (i = 0; i < animals.length; i++) {
  text += animals[i] + "<br>";
}
document.getElementById("animal").innerHTML = text;


var text = "";
var i = 0;
while (i < 3) {
  text += "Do you Like ?  " + animals[i] + "</br>";
  i++;
}
document.getElementById("numbers").innerHTML = text;