// Minimal JS: mobile nav toggle, and booking-placeholder handling.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Booking URL is still a placeholder. Don't jump to the top of the page;
  // keep the visitor on the contact section and highlight the trust note.
  document.querySelectorAll('[data-placeholder="booking-link"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var note = document.querySelector('.placeholder-note');
      var contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (note) {
        note.classList.add('is-highlighted');
        note.focus({ preventScroll: true });
      }
    });
  });
})();
