function navigation() {

   if (document.getElementById("drop_menu").value === 'issues') {
   	location.hash = "issues"}
   else if (document.getElementById("drop_menu").value === 'aboutme') {
   	location.hash = "aboutme"}
   else if (document.getElementById("drop_menu").value === 'ANC') {
   	location.hash = "ANC"}
   else if (document.getElementById("drop_menu").value === 'intouch') {
   	location.hash = "intouch"}
   else if (document.getElementById("drop_menu").value === 'donate') {
   	location.hash = "donate"}
}
