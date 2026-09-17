const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  document.getElementById('downloadBtn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Add a link to your portfolio PDF here once it\'s ready — replace the # in the Download button\'s href.');
  });
