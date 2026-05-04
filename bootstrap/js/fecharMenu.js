const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false
      });
      bsCollapse.hide();
    });
});