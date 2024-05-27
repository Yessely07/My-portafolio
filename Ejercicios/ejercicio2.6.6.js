function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("expanded");
  
    const menuTextItems = document.querySelectorAll(".menu-text");
    menuTextItems.forEach((item) => {
      item.classList.toggle("hidden"); // Alternar la visibilidad del texto
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const inicioLink = document.querySelector(".menu li:first-child a");
    const inicioSubmenu = document.getElementById("inicioSubmenu");
  
    inicioLink.addEventListener("click", (event) => {
      event.preventDefault();
  
      if (inicioSubmenu) {
        inicioSubmenu.classList.toggle("show");
      }
    });
  });