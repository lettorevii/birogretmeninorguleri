# 🧶 Örgü Sitesi — Tasarım & Geliştirme Briefi

---

## 1. Proje Özeti

Bir örgü markası için **tek sayfalık landing page** (açılış sayfası). Ziyaretçi ürünleri görür, marka hikayesini hisseder ve sipariş/iletişim için **Instagram sayfasına yönlendirilir**. Ödeme altyapısı yoktur.

### Referans Siteler
| Site | Öne Çıkan Özellik |
|------|-------------------|
| [modusprojects.nl](https://www.modusprojects.nl/) | Smooth scroll, 3D pin efekti, minimal ürün sunumu |
| [auremin.com](https://www.auremin.com/) | Paralaks katmanlar, güçlü tipografi, lüks his |
| [pacomepertant.com](https://pacomepertant.com/) | Tam sayfa geçişler, 3D perspektif, sinematik his |

---

## 2. Teknik Altyapı

```
HTML / CSS / JavaScript
GSAP (GreenSock) — ScrollTrigger + Parallax
Three.js (opsiyonel — arka plan 3D efektleri için)
Lenis.js — Smooth scroll kütüphanesi
Google Fonts — Özel font çifti
Netlify / Vercel — Ücretsiz hosting
```

> **Performans notu:** Görseller `.webp` formatında, lazy-load ile yüklenecek. Mobil için 3D efektler sadeleştirilecek.

---

## 3. Renk Paleti & Tipografi

### Renk Paleti — "Kış Atölyesi"

```css
:root {
  --bg-krem:       #F5F0E8;   /* Ana arka plan — sıcak krem */
  --bg-koyu:       #1C1A17;   /* Koyu bölümler — neredeyse siyah */
  --vurgu-terracotta: #C4714A; /* Ana vurgu — toprak turuncu */
  --vurgu-sage:    #8A9E8C;   /* İkincil vurgu — adaçayı yeşili */
  --metin-ana:     #2E2B26;   /* Koyu kahve — okunabilir */
  --metin-acik:    #F5F0E8;   /* Açık metin (koyu bg üstünde) */
  --altin:         #C9A84C;   /* Detay — antik altın */
}
```

### Font Çifti

| Rol | Font | Kullanım |
|-----|------|----------|
| **Display (Başlık)** | `Cormorant Garamond` (Italic 600) | Hero başlıklar, bölüm isimleri |
| **Body (Metin)** | `DM Sans` (300–400) | Paragraflar, butonlar, etiketler |
| **Aksan** | `Playfair Display` (Italic) | Alıntılar, ince detay yazıları |

---

## 4. Sayfa Bölümleri (Section Listesi)

---

### BÖLÜM 1 — Hero (Tam Ekran Giriş)

**Efekt:** Sayfa açılışında 3D perspektif rotasyon. İplik yumağı ya da örülmüş kumaşın yakın çekimi arka planda. Mouse hareketi ile parallax hareket.

```
[ LOGO — sol üst ]                    [ Instagram ikonu — sağ üst ]

            ——————————————————————
            |                    |
            |   Arka plan:       |
            |   Büyük, dokulu    |
            |   örgü fotoğrafı   |
            |   (3D parallax)    |
            |                    |
            ——————————————————————

      El Yapımı Örgü Tasarımları         ← Cormorant Garamond, büyük
      Her ilmek bir hikaye anlatır.      ← Alt başlık, DM Sans ince
      
      [ Koleksiyonu Keşfet ↓ ]          ← Ghost buton (outline)
```

**Animasyon detayı:**
- Sayfa yüklenince başlık harfler tek tek yukarıdan düşer (stagger: 0.08s)
- Arka plan fotoğrafı yavaşça scale 1.1 → 1.0 (Ken Burns efekti)
- Scroll ile arka plan yavaş aşağı kayar (parallax rate: 0.4)

---

### BÖLÜM 2 — "Hakkında" / Marka Hikayesi

**Efekt:** Scroll ile metin ve görsel ters yönde hareket eder (klasik paralaks). Sol metin, sağ büyük fotoğraf.

```
┌─────────────────┬──────────────────────┐
│                 │                      │
│  Küçük el ile   │   [Büyük fotoğraf:   │
│  büyük sevgi.   │    atkı örülüyor,    │
│                 │    eller görünüyor]  │
│  Markanın       │                      │
│  kısa hikayesi  │   → Scroll ile görsel│
│  2–3 cümle.     │     hafif yukarı     │
│                 │     çıkar            │
│  [ Instagram'da │                      │
│    Takip Et → ] │                      │
└─────────────────┴──────────────────────┘
```

---

### BÖLÜM 3 — Ürün Vitrin (Horizontal Scroll)

**Efekt:** Dikey scroll → yatay kaydırma (pin + horizontal scroll). Referans: modusprojects.nl

```
← Yatay Kayan Ürün Kartları →

┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │  │          │
│ [Ürün 1] │  │ [Ürün 2] │  │ [Ürün 3] │  │ [Ürün 4] │
│          │  │          │  │          │  │          │
│ Bere     │  │ Atkı     │  │ Hırka    │  │ Kazak    │
│ ——————   │  │ ——————   │  │ ——————   │  │ ——————   │
│ Sipariş  │  │ Sipariş  │  │ Sipariş  │  │ Sipariş  │
│ için DM  │  │ için DM  │  │ için DM  │  │ için DM  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘

     Her kart hover'da hafif 3D tilt (perspective: 1000px)
     Kart içi görsel parallax (mousemove ile)
```

**Her kart içeriği:**
- Ürün fotoğrafı (1:1 veya 3:4 oran)
- Ürün adı (Cormorant Italic)
- Kısa açıklama (iplik türü, renk seçenekleri)
- "Sipariş için Instagram'a yaz" linki → `instagram.com/[kullanıcıadı]`

---

### BÖLÜM 4 — Özellikler / Neden El Yapımı?

**Efekt:** Scroll ile her madde soldan sağa fade+slide ile girer. Arka plan koyu (--bg-koyu), metin açık.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Koyu arka plan bölümü]

    🧶  El Yapımı          🌿  Doğal İplik
    Her ürün sipariş       Yün, pamuk ve
    üzerine üretilir.      mohair karışımı.

    🎨  Renk Seçimi        📦  Özenli Paket
    İstediğin renkte       Hediye olarak da
    sipariş verebilirsin.  gönderilebilir.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### BÖLÜM 5 — Galeri / Instagram Feed Önizleme

**Efekt:** Masonry (taş döşeme) grid. Hover'da görsel scale + terracotta overlay + "Instagram'da Gör →" yazısı çıkar.

```
┌────┬──────┬────┐
│    │      │    │
│ G1 │  G2  │ G3 │  ← Farklı boyutlarda masonry grid
│    │      ├────┤
├────┤      │ G4 │
│ G5 │      │    │
│    ├──────┴────┤
│    │    G6     │
└────┴───────────┘

  [ @instagramkullaniciadi → ]   ← Ortada büyük CTA butonu
```

---

### BÖLÜM 6 — CTA (Harekete Geçirici Son Bölüm)

**Efekt:** Tam ekran, arka planda hafif hareket eden örgü doku görseli. Büyük metin ortada.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Sana özel bir şey öreyim.

    Sipariş vermek veya bilgi almak için
         Instagram'dan ulaşabilirsin.

        [ Instagram'da Mesaj Gönder ]
              ↑ Büyük dolu buton
              → instagram.com/[kullanıcıadı]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### BÖLÜM 7 — Footer

```
[Logo]        Hızlı Bağlantılar      Sosyal Medya
              • Hakkında             [Instagram ikonu]
              • Ürünler
              • İletişim

© 2025 [Marka Adı] — Tüm hakları saklıdır.
```

---

## 5. Animasyon & Efekt Detayları

### ScrollTrigger Zamanlaması (GSAP)

```javascript
// Örnek: Ürün kartlarının girişi
gsap.from(".urun-kart", {
  scrollTrigger: {
    trigger: ".vitrin-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  stagger: 0.15,
  duration: 0.9,
  ease: "power3.out"
});

// Horizontal scroll pin
gsap.to(".yatay-kaydirici", {
  x: () => -(kartGenisligi * kartSayisi),
  ease: "none",
  scrollTrigger: {
    trigger: ".vitrin-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + kartGenisligi * kartSayisi
  }
});
```

### 3D Kart Tilt (Vanilla JS)

```javascript
kartlar.forEach(kart => {
  kart.addEventListener("mousemove", (e) => {
    const rect = kart.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    kart.style.transform = 
      `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  });
  kart.addEventListener("mouseleave", () => {
    kart.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  });
});
```

### Smooth Scroll (Lenis)

```javascript
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

---

## 6. Mobil Uyum (Responsive)

| Ekran | Davranış |
|-------|----------|
| **Masaüstü (>1024px)** | Tam 3D efektler, horizontal scroll, parallax |
| **Tablet (768–1024px)** | 3D efektler azaltılır, yatay scroll dikeye çevrilir |
| **Mobil (<768px)** | Tüm 3D/parallax kapalı, standart scroll, kartlar tek sütun |

> Mobilde `prefers-reduced-motion` media query ile animasyonlar tamamen kapatılır.

---

## 7. Instagram Entegrasyonu

Sitede ödeme sistemi **yoktur**. Tüm sipariş akışı Instagram DM üzerindendir.

### Yönlendirme Noktaları
- Navbar sağ üst → Instagram ikonu
- Her ürün kartı alt kısmı → "Sipariş için DM"
- Galeri bölümü CTA → "@kullanıcıadı"
- Son CTA bölümü büyük butonu → DM linki
- Footer → Instagram ikonu

### Instagram DM Linki Formatı
```
https://www.instagram.com/[KULLANICI_ADI]/
```

Direkt mesaj için:
```
https://ig.me/m/[KULLANICI_ADI]
```

---

## 8. Yapılacaklar Listesi (Geliştirici için)

- [ ] Domain ve hosting seçimi (Netlify önerilir — ücretsiz)
- [ ] Marka adı ve logo belirlenmesi
- [ ] Instagram kullanıcı adının yerleştirilmesi
- [ ] Ürün fotoğraflarının hazırlanması (min. 8–12 fotoğraf, `.webp`)
- [ ] Renk paletinin onaylanması
- [ ] Marka hikayesi metninin yazılması (2–3 cümle)
- [ ] GSAP lisansı (ücretsiz "no-charge" lisans yeterlidir)
- [ ] SEO meta etiketleri (title, description, og:image)
- [ ] Google Analytics veya Umami bağlantısı (opsiyonel)
- [ ] Test: Chrome, Safari, Firefox, mobil

---

## 9. İlham Panosu (Mood Board Notları)

```
Hissettirmesi gereken:
  → Sıcak bir kış öğleden sonrası
  → El emeği, özgünlük, yavaş yaşam
  → Atölye hissi — ham ama rafine
  → Lüks değil, ama değerli

Kaçınılacaklar:
  → Hazır tema görünümü
  → Çok renkli kaotik tasarım
  → Generik stok fotoğraflar
  → Plastik / soğuk his
```

---

*Bu belge geliştirici ve tasarımcı için teknik + kreatif brief olarak hazırlanmıştır.*
*Son güncelleme: Mayıs 2025*
