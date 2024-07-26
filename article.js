document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".shareButton");
  const footer = document.querySelector(".footer");
  const footerSocial = document.querySelector(".footerSocial");
  const shareButtonSocial = document.querySelector(".shareButtonSocial");
  const popupSocial = document.querySelector(".popupSocial");

  shareButton.addEventListener("click", function () {
    if (footer.style.display !== "none") {
      footer.style.display = "none";
      footerSocial.style.display = "flex";
    } else {
      footer.style.display = "flex";
      footerSocial.style.display = "none";
    }
  });
  shareButtonSocial.addEventListener("click", function () {
    if (footer.style.display !== "none") {
      footer.style.display = "none";
      footerSocial.style.display = "flex";
    } else {
      footer.style.display = "flex";
      footerSocial.style.display = "none";
    }
  });
});
