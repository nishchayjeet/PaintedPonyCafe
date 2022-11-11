
function validate() {
  var inpObj = document.getElementById("id1");
  if (inpObj == "") {
    document.getElementById("demo").innerHTML = "no input";
  } else {
    alert("Thank you for input");
  }
}
