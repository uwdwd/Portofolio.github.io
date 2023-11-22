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
    "C:\Users\Alvin Angelo\Desktop\DTW 1\Portofolio.github.io\banner is night 3x1 m.pdf",
    "_blank"
  );
}

function openFile(filePath) {
  window.open("C:\Users\Alvin Angelo\Desktop\DTW 1\Portofolio.github.io\Sertifikat Falcon 12.pdf");
}

function openFile(filePath) {
  window.open(
    "C:UsersAlvin AngeloDesktopDTW 1Portofolio.github.ioGathering Information Systems 2023 Certificate of Appreciation.pdf",
    "_blank"
  );
}
