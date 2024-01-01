const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

document.addEventListener("DOMContentLoaded", () => {
  offcanvas.addEventListener("shown.bs.offcanvas", function () {
    stickyTop.style.overflow = "visible";
  });

  offcanvas.addEventListener("hide.bs.offcanvas", function () {
    stickyTop.style.overflow = "hidden";
  });
});
