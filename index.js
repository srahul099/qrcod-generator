function genQR() {
  var gapi = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=";
  var myimg = document.getElementById("myimg");
  var text = document.getElementById("url").value;
  if (text === "") {
    document.getElementById("url").style.border = "2px solid #ff0000";
  } else {
    document.getElementById("url").style.border = "none";
    myimg.src = gapi + text + "&chld=7|1";
  }
  document.getElementById("body").reset();
}
function resetForm() {
  document.getElementById("url").value = ""; // Clear the input field
  document.getElementById("myimg").src = ""; // Clear the QR code image
}
