const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

function openFile(filePath) {
  window.open(
    "C:UsersAlvin AngeloDownloads\banner is night 3x1 m.pdf",
    "_blank"
  );
}

function openFile(filePath) {
  window.open("C:UsersAlvin AngeloDownloadsSertifikat Falcon 12.pdf", "_blank");
}

function openFile(filePath) {
  window.open(
    "C:\Users\Alvin Angelo\Downloads\Gathering Information Systems 2023 Certificate of Appreciation.pdf",
    "_blank"
  );
}
