document.addEventListener("DOMContentLoaded", function() {
  var x = document.getElementById("error");
  var y = document.getElementById("errormsg");
  var z = document.getElementById("field");
  var email = document.getElementById("email");
  email.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      x.style.visibility = "visible";
      y.style.visibility = "visible";
      z.style.border = "2px solid hsl(0, 93%, 68%)";
    }
    else{
      x.style.visibility="hidden";
      y.style.visibility="hidden";
      z.style.border = "2px solid hsl(0, 36%, 70%)";
    }
  };
  email.oninput = function(e) {
    e.target.setCustomValidity("");
  };
});
