document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("agree-checkbox");
  const registerBtn = document.getElementById("register-button");
  const eventImg = document.querySelector(".right-section img");

  // Enable button only when checkbox checked
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      registerBtn.classList.add("enabled");
      registerBtn.disabled = false;
    } else {
      registerBtn.classList.remove("enabled");
      registerBtn.disabled = true;
    }
  });

  // Redirect on register
  registerBtn.addEventListener("click", function () {
    if (!registerBtn.disabled) {
      window.location.href =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mO4a31UOU9CM1JaQkdLTjBERU5QMVpQQ0VDTFQ0WS4u";
    }
  });

  // Background blur overlay
  if (eventImg && eventImg.src) {
    const overlay = document.createElement("div");
    overlay.className = "background-overlay";

    const bgImage = new Image();
    bgImage.src = eventImg.src;

    bgImage.onload = function () {
      overlay.style.backgroundImage = `url('${eventImg.src}')`;
      document.body.insertBefore(overlay, document.body.firstChild);
      setTimeout(() => (overlay.style.opacity = "1"), 100);
    };
  }
});
