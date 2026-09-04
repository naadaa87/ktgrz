(function () {
  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // mark current page in nav
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) a.setAttribute('aria-current', 'page');
  });

  // contact form -> opens the visitor's mail client with the message pre-filled
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var subject = '[KTGRZ 홈페이지 문의] ' + (f.get('topic') || '일반 문의') + ' - ' + (f.get('company') || f.get('name'));
      var body = [
        '이름: ' + f.get('name'),
        '회사/소속: ' + (f.get('company') || '-'),
        '연락처: ' + (f.get('phone') || '-'),
        '이메일: ' + f.get('email'),
        '문의 유형: ' + (f.get('topic') || '-'),
        '',
        f.get('message')
      ].join('\n');
      location.href = 'mailto:ktgrzholdings@ktgrz.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var done = document.getElementById('form-done');
      if (done) done.hidden = false;
    });
  }

  // footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
