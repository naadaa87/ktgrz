# KTGRZ 공식 홈페이지 (정적 사이트)

빌드 도구 없이 바로 배포되는 순수 HTML/CSS/JS 사이트입니다.

## 폴더 구조
```
index.html        메인
about.html        회사 소개 (Introduction · 핵심 가치 · 리(離)의 정신 · 경영진 · 강남 사옥)
sports.html       KTGRZ SPORTS
creative.html     KTGRZ CREATIVE
ezpz.html         EZPZ
sewooda.html      세우다컴퍼니
takent.html       TAK ENT
news.html         뉴스 & 미디어
contact.html      문의 · 오시는 길
404.html          없는 페이지
assets/css/style.css
assets/js/main.js
assets/img/       회사소개서에서 추출한 사진 (WebP)
assets/logo/      로고 (black / white 투명 PNG, 컬러 로고)
robots.txt, sitemap.xml
```

## GitHub + Cloudflare Pages 배포
1. GitHub에 새 저장소 생성 → 이 폴더의 파일 전체를 업로드 (파일 수 80개 이하라 한 번에 가능)
   - `assets` 폴더 이름이 그대로 올라갔는지 확인 (`asset`으로 올라가면 이미지가 깨집니다)
2. Cloudflare Pages → Create project → Connect to Git → 저장소 선택
   - Framework preset: **None**
   - Build command: (비움)
   - Build output directory: `/`
3. 배포 후 Custom domains에서 `ktgrz.com` / `www.ktgrz.com` 연결

## 수정 방법
- 헤더/푸터는 모든 페이지에 같은 HTML 블록이 들어 있습니다. (`<!-- ===== HEADER -->` ~ `<!-- ===== /HEADER -->`) 메뉴를 바꿀 때는 9개 파일 모두 같은 부분을 수정하세요.
- 뉴스 추가: `news.html`의 `<ul class="news-list">` 안에 `<li>` 한 줄을 복사해 붙이면 됩니다.
- 사진 교체: `assets/img/` 안의 같은 파일명으로 덮어쓰면 됩니다. (가로 1600px 이내 WebP 권장)
- 포인트 컬러: `style.css` 맨 위 `--accent` 값 하나만 바꾸면 전체에 적용됩니다.

## 문의 폼
정적 사이트라 서버가 없어, "메일로 보내기"를 누르면 방문자의 메일 앱에 내용이 채워진 새 메일이 열립니다(수신: ktgrzholdings@ktgrz.com).
서버 없이 폼을 직접 받고 싶으면 Formspree 같은 서비스의 endpoint를 `contact.html`의 `<form>`에 `action`으로 넣고 `main.js`의 contact-form 부분을 지우면 됩니다.

## 확인이 필요한 항목
- 대표 이메일: 회사소개서 `ktgrzsports@gmail.com`, 유튜브 `ktgrzholdings@ktgrz.com`, 기존 사이트 `ktgrz@ktgrz.com` 세 가지가 혼재 → 현재 `ktgrzholdings@ktgrz.com`으로 통일해 두었습니다.
- 뉴스 페이지 날짜 중 일부(나주 자이점 오픈 등)는 기사에서 정확한 날짜를 확인하지 못해 연도만 표기했습니다.
