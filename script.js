function showMessage(){ 
alert("Thank you for visiting my portfolio!");} 
function goToContact(){ 
document.getElementById("contact") 
.scrollIntoView({behavior:"smooth"});} 
function submitForm(){ 
document.getElementById("confirmation") 
.innerText="Message submitted successfully!"; 
return false;} 
