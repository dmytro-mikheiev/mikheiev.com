// Native details keeps navigation usable before JavaScript loads.
document.querySelectorAll('.site-menu').forEach(function (menu) {
  var toggle = menu.querySelector('summary');

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.open = false;
    });
  });

  document.addEventListener('pointerdown', function (event) {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      toggle.focus();
    }
  });
});
