
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header-placeholder");
  if (header) {
    fetch("/header-footer/header.html")
      .then(res => res.text())
      .then(data => {
        header.innerHTML = data;
      });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("footer-placeholder");
  if (header) {
    fetch("/header-footer/footer.html")
      .then(res => res.text())
      .then(data => {
        header.innerHTML = data;
      });
  }
});


console.log("im here")