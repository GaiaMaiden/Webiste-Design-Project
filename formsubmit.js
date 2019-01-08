/*
   IT Term Project

   Form Submit page
   Author: Autumn Boyette
   Date: 10/20/2016  


   Filename: formsubmit.js

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.


*/

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Message received, thanks for the input!");
      return false;
   }
}
