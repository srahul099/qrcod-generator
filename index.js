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
}

function resetForm() {
  document.getElementById("url").value = "";
  document.getElementById("myimg").src = "./default_img.png";
}

function downloadQR() {
  var myimg = document.getElementById("myimg");
  var imgSrc = myimg.src;

  if (text === "") {
    alert("No QR code generated yet.");
    return;
  }

  var link = document.createElement("a");
  link.href = imgSrc;
  link.download = "QRCode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
