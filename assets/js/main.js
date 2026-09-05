(function () {
  var body = document.body;
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) burger.click();
    });
  }

  // current page marker (desktop menu + mobile overlay)
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a, .mnav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  // contact form: posts to the endpoint set in data-endpoint (Formspree, Web3Forms 등).
  // 아직 비어 있으면 전화 안내 문구를 보여줍니다.
  var form = document.getElementById('contact-form');
  if (form) {
    var msg = document.getElementById('form-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = form.getAttribute('data-endpoint');
      if (!endpoint) {
        msg.textContent = '온라인 문의 접수는 준비 중입니다. 전화 02 567 9974로 연락 주시면 담당 계열사가 안내해 드립니다.';
        msg.hidden = false;
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
        .then(function (r) {
          if (!r.ok) throw new Error('bad status');
          form.reset();
          msg.textContent = '문의가 접수되었습니다. 담당 계열사에서 확인 후 연락드리겠습니다.';
          msg.hidden = false;
        })
        .catch(function () {
          msg.textContent = '전송에 실패했습니다. 잠시 후 다시 시도하거나 02 567 9974로 연락 주세요.';
          msg.hidden = false;
        })
        .finally(function () { btn.disabled = false; });
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
