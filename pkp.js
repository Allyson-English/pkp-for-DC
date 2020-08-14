function navigation() {

   if (document.getElementById("drop_menu").value === 'home') {
      location.hash = "top";
      document.getElementById("drop_menu").value = "menu"}
   else if (document.getElementById("drop_menu").value === 'issues') {
   	location.hash = "issues";
      document.getElementById("drop_menu").value = "menu"}
   else if (document.getElementById("drop_menu").value === 'aboutme') {
   	location.hash = "aboutme";
      document.getElementById("drop_menu").value = "menu"}
   else if (document.getElementById("drop_menu").value === 'ANC') {
   	location.hash = "ANC";
      document.getElementById("drop_menu").value = "menu"}
   else if (document.getElementById("drop_menu").value === 'intouch') {
   	location.hash = "intouch";
      document.getElementById("drop_menu").value = "menu"}
   else if (document.getElementById("drop_menu").value === 'donate') {
   	location.hash = "donate";
      document.getElementById("drop_menu").value = "menu"}
};
