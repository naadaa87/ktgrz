# KTGRZ 공식 홈페이지 (최종본)

빌드 도구 없이 바로 배포되는 순수 HTML/CSS/JS 정적 사이트입니다.
화이트 & 블랙 단색 체계, PC/모바일 반응형.

## 폴더 구조
```
index.html        메인 (히어로 · 한눈에 보기 · Why KTGRZ · 계열사 · 리(離)의 정신 · 현장 · 뉴스 · 문의)
about.html        회사 소개 (Introduction · 핵심 가치 · 리(離)의 정신 · 경영진 · 강남 사옥)
sports.html       KTGRZ SPORTS
creative.html     KTGRZ CREATIVE
ezpz.html         EZPZ
sewooda.html      세우다컴퍼니
takent.html       TAK ENT
news.html         뉴스 · 언론 보도
contact.html      문의 (전화 · 문의 폼)
404.html          없는 페이지
assets/css/style.css     스타일 (색상·타이포 토큰은 파일 맨 위 :root)
assets/js/main.js        모바일 메뉴, 현재 페이지 표시, 문의 폼
assets/fonts/            Bebas Neue (자체 호스팅, OFL)
assets/img/              회사소개서에서 추출한 사진 (WebP)
assets/logo/             로고 (투명 PNG)
robots.txt
```

## GitHub + Cloudflare Pages 배포
1. GitHub 새 저장소에 이 폴더의 파일 전체 업로드 (총 70개 내외, 한 번에 가능)
   - 업로드 후 `assets` 폴더명이 그대로인지 확인 (`asset`으로 올라가면 이미지·폰트가 깨집니다)
2. Cloudflare Pages → Create project → Connect to Git → 저장소 선택
   - Framework preset: **None** / Build command: 비움 / Build output directory: `/`
3. 배포 후 Custom domains에서 도메인 연결

## 주소 · 연락처 정책
- 요청에 따라 사무실 주소, 이메일 주소, 외부 사이트 링크(계열사 사이트·유튜브 등)를 모두 넣지 않았습니다.
- 남겨 둔 연락처는 대표번호 02 567 9974 뿐입니다. 추가하려면 `contact.html`과 푸터(각 파일의 `<!-- ===== FOOTER -->` 블록)에 한 줄씩 넣으면 됩니다.

## 문의 폼 연결
정적 사이트라 서버가 없습니다. Formspree / Web3Forms 같은 무료 폼 수신 서비스에서 endpoint를 받아
`contact.html`의 `<form id="contact-form" data-endpoint="">` 안 `data-endpoint`에 넣으면 바로 동작합니다.
비어 있는 동안에는 "전화로 문의해 달라"는 안내만 표시됩니다.

## 수정 방법
- 헤더/푸터는 모든 페이지에 같은 블록이 들어 있습니다 (`<!-- ===== HEADER -->` ~ `<!-- ===== /HEADER -->`). 메뉴를 바꿀 때는 10개 파일 모두 같은 부분을 수정하세요.
- 뉴스 추가: `news.html`의 `<ul class="news">` 안에서 `<li>` 한 줄을 복사해 붙이면 됩니다. 메인의 "최근 소식" 3건은 `index.html`에서 따로 수정합니다.
- 사진 교체: `assets/img/` 안의 같은 파일명으로 덮어쓰면 됩니다 (가로 1600px 이내 WebP 권장). 사진은 모두 원본 컬러 그대로 표시됩니다.
- 히어로의 심볼 모양 사진: `index.html`의 `<image href="assets/img/hero_taekwondo.webp" ...>` 경로만 바꾸면 됩니다.
