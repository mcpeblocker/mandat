const inputTypeContainer = document.getElementById("input-type");
inputTypeContainer.style.display = "block";

const inputContainers = {
  video: document.getElementById("video-container"),
  file: document.getElementById("file-container"),
};

let fileInput = document.getElementById("image-file");

import { createFileInstance, createVideoInstance } from "./scanner.js";

window.chooseInputType = function chooseInputType(type) {
  if (type !== "video" && type !== "file") return;
  // hide container
  inputTypeContainer.style.display = "none";

  // show according container
  inputContainers[type].style.display = "block";

  if (type === "video") {
    const qrScanner = createVideoInstance((result) => {
      goToPdf(result);
    });
    qrScanner.start();
  }
};

window.checkFileUpload = function checkFileUpload(event) {
  fileInput = event.target;
  console.log(fileInput.value);
};

window.scanImage = function scanImage() {
  const image = document.getElementById("image-file");
  if (!image.value) return alert("Rasm yuklang, iltimos!");
  createFileInstance((result) => {
    goToPdf(result);
  });
};

// locate pdf

function goToPdf(link) {
  location.href = link.replace("application", "answer");
}
