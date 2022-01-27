const menu = document.querySelector(".menu-links");
const toggle = document.querySelector(".toggle");

openMenu = false;

toggle.addEventListener("click", () => {
  if (openMenu) {
    menu.style.right = "-100%";
    toggle.innerHTML = `<i class="bi bi-list"></i>`;
    openMenu = false;
  } else {
    menu.style.right = "0%";
    toggle.innerHTML = `<i class="bi bi-x-square"></i>`;
    openMenu = true;
  }
});
