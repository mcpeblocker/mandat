import QrScanner from "./plugins/qr-scanner.min.js";

export function createVideoInstance(callback) {
  const videoElement = document.getElementById("video-element");

  return new QrScanner(videoElement, callback);
}

export function createFileInstance(callback) {
  const imageInput = document.getElementById("image-file");

  return QrScanner.scanImage(imageInput, { returnDetailedScanResult: true })
    .then(callback)
    .catch((err) => {
      console.log(err);
      alert(
        "Xatolik yuz berdi! Rasm to'g'ri formatda ekaniga ishonch hosil qiling!"
      );
    });
}
