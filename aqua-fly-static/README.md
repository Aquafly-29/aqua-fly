# Aqua Fly — Static Site

Tamamen statik HTML/CSS/JS. Hiçbir build, npm veya node gerekmez.

## Yerel önizleme

`index.html` dosyasına çift tıkla — tarayıcıda açılır.

Daha iyisi için klasör içinde:

```bash
python3 -m http.server 8000
# sonra http://localhost:8000 adresini aç
```

## GitHub Pages'e ücretsiz deploy

1. GitHub'da yeni bir repo oluştur (örn. `aqua-fly`).
2. Bu klasörün **içeriğini** repoya yükle (index.html kök dizinde olmalı).
3. Repo → **Settings → Pages**
4. **Source**: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → Save
5. 1-2 dakika içinde sitein `https://KULLANICI_ADIN.github.io/aqua-fly/` adresinde yayında.

## Klasör yapısı

```
aqua-fly-static/
├── index.html
├── css/styles.css
├── js/
│   ├── navbar.js
│   └── scroll-reveal.js
└── images/   (videolar + fotoğraflar)
```

## İletişim

- Instagram: eldar_hamidov09
- YouTube: eldarbuildlab
- E-mail: eldarhamidov2009@gmail.com