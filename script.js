  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.ri-menu-3-line');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.ri-close-line');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    function openMenu() {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      backdrop.classList.remove('hidden');
    }

    function closeMenu() {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    }

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });