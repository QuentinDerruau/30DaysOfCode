function generateQRCode() {
  
  var content = document.getElementById("content").value;
  if (content) {
    var qr = new QRious({
      element: document.getElementById('qr-code'),
      value: content,
      size: 300,
      backgroundAlpha: 0,
			foregroundAlpha: 1
    });
    console.log(qr);
  }
}