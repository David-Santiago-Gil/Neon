export default `<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>NeonRoyaleCasino</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;900&amp;family=Inter:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="styles.css"><style ng-app-id="ng">
[_nghost-ng-c1049749640] {
  display: block;
  overflow-x: hidden;
  width: 100%;
}
[_ngcontent-ng-c1049749640]:root {
  --bg-dark: #0b0b0f;
  --bg-darker: #060608;
  --bg-card: #111118;
  --gold-luxury: #C9A84C;
  --gold-light: #E2C87A;
  --gold-shadow: rgba(201, 168, 76, 0.35);
  --gold-subtle: rgba(201, 168, 76, 0.08);
  --accent-blue: #00d4ff;
  --accent-pink: #ff006e;
  --text-primary: #f0f0f0;
  --text-secondary: rgba(240, 240, 240, 0.6);
  --text-muted: rgba(240, 240, 240, 0.4);
  --border-subtle: rgba(201, 168, 76, 0.12);
  --header-height: 80px;
  --font-display: "Outfit", sans-serif;
  --font-body:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}
*[_ngcontent-ng-c1049749640] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html[_ngcontent-ng-c1049749640] {
  scroll-padding-top: var(--header-height);
  scroll-behavior: smooth;
  background-color: var(--bg-dark);
}
body[_ngcontent-ng-c1049749640] {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  overflow-x: hidden;
  line-height: 1.6;
}
body[_ngcontent-ng-c1049749640]::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(11, 11, 15, 0.92), rgba(11, 11, 15, 0.92)), url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1280&q=50);
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.35;
}
[_ngcontent-ng-c1049749640]::-webkit-scrollbar {
  width: 6px;
}
[_ngcontent-ng-c1049749640]::-webkit-scrollbar-track {
  background: transparent;
}
[_ngcontent-ng-c1049749640]::-webkit-scrollbar-thumb {
  background: rgba(201, 168, 76, 0.3);
  border-radius: 3px;
}
[_ngcontent-ng-c1049749640]::-webkit-scrollbar-thumb:hover {
  background: rgba(201, 168, 76, 0.5);
}
.reveal-on-scroll[_ngcontent-ng-c1049749640] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.reveal-on-scroll.visible[_ngcontent-ng-c1049749640] {
  opacity: 1;
  transform: translateY(0);
}
@keyframes _ngcontent-ng-c1049749640_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-ng-c1049749640_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-ng-c1049749640_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-ng-c1049749640_errorAppear {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-ng-c1049749640_pulse-large {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}
@keyframes _ngcontent-ng-c1049749640_skeleton-sweep {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}


.hero-section[_ngcontent-ng-c1049749640] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--header-height);
}
.hero-background[_ngcontent-ng-c1049749640] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(
      ellipse at 30% 40%,
      rgba(201, 168, 76, 0.06) 0%,
      transparent 60%),
    radial-gradient(
      ellipse at 70% 60%,
      rgba(0, 30, 60, 0.3) 0%,
      transparent 60%),
    linear-gradient(
      180deg,
      #0b0b14 0%,
      #0d0d1a 50%,
      #0b0b0f 100%);
  z-index: 0;
}
.hero-content[_ngcontent-ng-c1049749640] {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: _ngcontent-ng-c1049749640_fadeInUp 1s ease-out;
}
.hero-title[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: var(--text-primary);
}
.hero-title[_ngcontent-ng-c1049749640]   .highlight[_ngcontent-ng-c1049749640] {
  color: var(--gold-luxury);
  text-shadow: 0 0 60px var(--gold-shadow);
}
.hero-subtitle[_ngcontent-ng-c1049749640] {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-secondary);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-weight: 400;
}
.hero-buttons[_ngcontent-ng-c1049749640] {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}


.parallax-divider[_ngcontent-ng-c1049749640] {
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax-overlay[_ngcontent-ng-c1049749640] {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}
.parallax-content[_ngcontent-ng-c1049749640] {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
}
.parallax-content[_ngcontent-ng-c1049749640]   h2[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 16px;
}
.parallax-content[_ngcontent-ng-c1049749640]   p[_ngcontent-ng-c1049749640] {
  font-size: 1.1rem;
  color: var(--text-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
}
.section-header[_ngcontent-ng-c1049749640] {
  text-align: center;
  margin-bottom: 70px;
}
.section-header[_ngcontent-ng-c1049749640]   h2[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: var(--text-primary);
}
.section-subtitle[_ngcontent-ng-c1049749640] {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.gold-line[_ngcontent-ng-c1049749640] {
  height: 1px;
  width: 80px;
  background: var(--gold-luxury);
  margin: 0 auto;
  opacity: 0.6;
}
.gallery-section[_ngcontent-ng-c1049749640] {
  padding: 120px 0;
  background: var(--bg-dark);
  position: relative;
}
.gallery-section[_ngcontent-ng-c1049749640]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      var(--border-subtle),
      transparent);
}
.rooms-grid[_ngcontent-ng-c1049749640] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.room-card-wrapper[_ngcontent-ng-c1049749640] {
  transition-delay: calc(var(--i, 0) * 0.1s);
}
.room-card[_ngcontent-ng-c1049749640] {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.room-card[_ngcontent-ng-c1049749640]:hover {
  border-color: rgba(201, 168, 76, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 168, 76, 0.15);
}
.room-image[_ngcontent-ng-c1049749640] {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.room-pattern[_ngcontent-ng-c1049749640] {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.02) 10px,
      rgba(255, 255, 255, 0.02) 20px);
  z-index: 1;
}
.room-overlay[_ngcontent-ng-c1049749640] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 100%);
  z-index: 2;
}
.room-content[_ngcontent-ng-c1049749640] {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-primary);
}
.room-content[_ngcontent-ng-c1049749640]   h3[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.room-content[_ngcontent-ng-c1049749640]   p[_ngcontent-ng-c1049749640] {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
}
.room-footer[_ngcontent-ng-c1049749640] {
  padding: 16px 20px;
  background: var(--bg-darker);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-subtle);
}
.room-badge[_ngcontent-ng-c1049749640] {
  background: rgba(201, 168, 76, 0.15);
  color: var(--gold-luxury);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(201, 168, 76, 0.2);
}
.btn-play[_ngcontent-ng-c1049749640] {
  background: transparent;
  color: var(--gold-luxury);
  border: 1px solid var(--gold-luxury);
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  font-family: var(--font-body);
}
.btn-play[_ngcontent-ng-c1049749640]:hover {
  background: var(--gold-luxury);
  color: var(--bg-dark);
}
.games-section[_ngcontent-ng-c1049749640] {
  padding: 120px 0;
  background: var(--bg-darker);
}
.games-grid[_ngcontent-ng-c1049749640] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 50px;
}
.game-card[_ngcontent-ng-c1049749640] {
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}
.game-card[_ngcontent-ng-c1049749640]:hover {
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.game-image[_ngcontent-ng-c1049749640] {
  position: relative;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.game-badge[_ngcontent-ng-c1049749640] {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 0, 110, 0.9);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;
  letter-spacing: 1px;
}
.game-overlay[_ngcontent-ng-c1049749640] {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}
.game-card[_ngcontent-ng-c1049749640]:hover   .game-overlay[_ngcontent-ng-c1049749640] {
  opacity: 1;
}
.btn-play-game[_ngcontent-ng-c1049749640] {
  background: var(--gold-luxury);
  color: var(--bg-dark);
  border: none;
  padding: 10px 28px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
  font-size: 0.8rem;
}
.btn-play-game[_ngcontent-ng-c1049749640]:hover {
  background: var(--gold-light);
  transform: scale(1.05);
}
.game-info[_ngcontent-ng-c1049749640] {
  padding: 16px 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.game-category[_ngcontent-ng-c1049749640] {
  font-size: 0.7rem;
  color: var(--gold-luxury);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 6px;
  font-weight: 600;
}
.game-info[_ngcontent-ng-c1049749640]   h4[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: var(--text-primary);
}
.game-rating[_ngcontent-ng-c1049749640] {
  display: flex;
  gap: 3px;
}
.game-rating[_ngcontent-ng-c1049749640]   .bi[_ngcontent-ng-c1049749640] {
  color: rgba(201, 168, 76, 0.2);
  font-size: 0.85rem;
  transition: color 0.2s ease;
}
.game-rating[_ngcontent-ng-c1049749640]   .bi.active[_ngcontent-ng-c1049749640] {
  color: var(--gold-luxury);
}
.skeleton-card[_ngcontent-ng-c1049749640] {
  height: 300px;
  background: var(--bg-card);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}
.skeleton-img[_ngcontent-ng-c1049749640] {
  height: 180px;
  background: rgba(255, 255, 255, 0.05);
}
.skeleton-content[_ngcontent-ng-c1049749640] {
  margin: 16px;
  height: 20px;
  width: 70%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}
.skeleton-card[_ngcontent-ng-c1049749640]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.03),
      transparent);
  animation: _ngcontent-ng-c1049749640_skeleton-sweep 1.5s infinite;
}
@media (max-width: 1024px) {
  .rooms-grid[_ngcontent-ng-c1049749640] {
    grid-template-columns: repeat(2, 1fr);
  }
  .games-grid[_ngcontent-ng-c1049749640] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .rooms-grid[_ngcontent-ng-c1049749640] {
    grid-template-columns: 1fr;
  }
  .games-grid[_ngcontent-ng-c1049749640] {
    grid-template-columns: 1fr;
  }
}


.promo-section[_ngcontent-ng-c1049749640] {
  padding: 160px 0;
  background: transparent;
  position: relative;
  overflow: hidden;
}
.promo-section[_ngcontent-ng-c1049749640]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(
      circle at top right,
      rgba(26, 26, 46, 0.8) 0%,
      transparent 70%);
  z-index: 0;
  pointer-events: none;
}
.promo-content[_ngcontent-ng-c1049749640] {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 120px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.vip-badge[_ngcontent-ng-c1049749640] {
  display: inline-block;
  background:
    linear-gradient(
      135deg,
      #d4af37 0%,
      #f9f295 100%);
  color: #000;
  padding: 6px 20px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2.5px;
  margin-bottom: 30px;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.35);
}
.premium-title[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: -2px;
  line-height: 1.05;
  text-transform: uppercase;
}
.gold-text[_ngcontent-ng-c1049749640] {
  background:
    linear-gradient(
      to right,
      #d4af37,
      #f9f295,
      #d4af37);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.45));
}
.premium-description[_ngcontent-ng-c1049749640] {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.7;
  margin: 0 0 60px 0;
}
.promo-benefits[_ngcontent-ng-c1049749640] {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}
.benefit-item[_ngcontent-ng-c1049749640] {
  display: flex;
  align-items: center;
  gap: 25px;
  transition: all 0.4s ease;
}
.benefit-item[_ngcontent-ng-c1049749640]:hover {
  transform: translateX(15px);
}
.benefit-icon[_ngcontent-ng-c1049749640] {
  width: 65px;
  height: 65px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: #d4af37;
  font-size: 1.8rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
.benefit-info[_ngcontent-ng-c1049749640]   h4[_ngcontent-ng-c1049749640] {
  margin-bottom: 6px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: #fff;
  letter-spacing: 0.5px;
}
.benefit-info[_ngcontent-ng-c1049749640]   p[_ngcontent-ng-c1049749640] {
  font-size: 1rem;
  margin-bottom: 0;
  color: var(--text-secondary);
}
.btn-luxury-glow[_ngcontent-ng-c1049749640] {
  background:
    linear-gradient(
      135deg,
      #d4af37 0%,
      #aa8928 100%);
  color: #000;
  padding: 20px 55px;
  border-radius: 8px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 45px rgba(212, 175, 55, 0.35);
}
.btn-luxury-glow[_ngcontent-ng-c1049749640]:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 25px 60px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.6);
}
.promo-visual-liquid[_ngcontent-ng-c1049749640] {
  position: relative;
  width: 100%;
  height: 650px;
  background: url(https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.liquid-overlay[_ngcontent-ng-c1049749640] {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%);
  mix-blend-mode: multiply;
}
.promo-list[_ngcontent-ng-c1049749640]   li[_ngcontent-ng-c1049749640]   .bi[_ngcontent-ng-c1049749640] {
  color: var(--gold-luxury);
  font-size: 1.1rem;
  flex-shrink: 0;
}
.promo-visual[_ngcontent-ng-c1049749640] {
  height: 400px;
  background:
    radial-gradient(
      ellipse at 50% 50%,
      rgba(201, 168, 76, 0.06) 0%,
      transparent 60%),
    var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.promo-visual[_ngcontent-ng-c1049749640]::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background:
    radial-gradient(
      circle,
      rgba(201, 168, 76, 0.08) 0%,
      transparent 70%);
  animation: _ngcontent-ng-c1049749640_pulse-large 6s ease-in-out infinite;
}
@media (max-width: 992px) {
  .promo-content[_ngcontent-ng-c1049749640] {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  .premium-description[_ngcontent-ng-c1049749640] {
    margin-left: auto;
    margin-right: auto;
  }
}


.contact-section[_ngcontent-ng-c1049749640] {
  padding: 120px 0;
  background: var(--bg-darker);
}
.contact-wrapper[_ngcontent-ng-c1049749640] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.contact-info[_ngcontent-ng-c1049749640]   h2[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: var(--text-primary);
}
.contact-info[_ngcontent-ng-c1049749640]    > p[_ngcontent-ng-c1049749640] {
  color: var(--text-muted);
  margin-bottom: 40px;
  line-height: 1.8;
  font-size: 0.95rem;
}
.contact-details[_ngcontent-ng-c1049749640] {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.detail-item[_ngcontent-ng-c1049749640] {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.detail-item[_ngcontent-ng-c1049749640]   .icon[_ngcontent-ng-c1049749640] {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gold-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  flex-shrink: 0;
}
.detail-item[_ngcontent-ng-c1049749640]   .icon[_ngcontent-ng-c1049749640]   .bi[_ngcontent-ng-c1049749640] {
  font-size: 1.1rem;
  color: var(--gold-luxury);
}
.detail-item[_ngcontent-ng-c1049749640]   .label[_ngcontent-ng-c1049749640] {
  font-size: 0.75rem;
  color: var(--gold-luxury);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 4px;
}
.detail-item[_ngcontent-ng-c1049749640]   .value[_ngcontent-ng-c1049749640] {
  color: var(--text-primary);
  font-size: 0.95rem;
}
.contact-form[_ngcontent-ng-c1049749640] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group[_ngcontent-ng-c1049749640] {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  position: relative;
}
.form-input[_ngcontent-ng-c1049749640] {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  padding: 14px 18px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: var(--font-body);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}
.form-input[_ngcontent-ng-c1049749640]::placeholder {
  color: var(--text-muted);
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.form-input[_ngcontent-ng-c1049749640]:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--gold-luxury);
  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
}
.error-msg[_ngcontent-ng-c1049749640] {
  color: #ff3e3e;
  font-size: 0.72rem;
  margin-top: 6px;
  display: block;
  font-weight: 700;
  letter-spacing: 0.3px;
  animation: _ngcontent-ng-c1049749640_errorAppear 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.input-error[_ngcontent-ng-c1049749640] {
  border-color: #ff3e3e !important;
  background: rgba(255, 62, 62, 0.03) !important;
  box-shadow: 0 0 10px rgba(255, 62, 62, 0.1) !important;
}
@media (max-width: 768px) {
  .contact-wrapper[_ngcontent-ng-c1049749640] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}


.btn[_ngcontent-ng-c1049749640] {
  padding: 14px 36px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  font-family: var(--font-body);
}
.btn-luxury[_ngcontent-ng-c1049749640] {
  background: var(--gold-luxury);
  color: var(--bg-dark);
}
.btn-luxury[_ngcontent-ng-c1049749640]:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--gold-shadow);
}
.btn-outline-luxury[_ngcontent-ng-c1049749640] {
  background: transparent;
  color: var(--gold-luxury);
  border: 1px solid rgba(201, 168, 76, 0.4);
}
.btn-outline-luxury[_ngcontent-ng-c1049749640]:hover {
  background: rgba(201, 168, 76, 0.1);
  border-color: var(--gold-luxury);
  transform: translateY(-2px);
}
.w-100[_ngcontent-ng-c1049749640] {
  width: 100%;
}
.modal-overlay[_ngcontent-ng-c1049749640] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: _ngcontent-ng-c1049749640_fadeIn 0.3s ease;
}
.modal-content[_ngcontent-ng-c1049749640] {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 48px 40px;
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: _ngcontent-ng-c1049749640_slideUp 0.3s ease;
}
.modal-close[_ngcontent-ng-c1049749640] {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
.modal-close[_ngcontent-ng-c1049749640]:hover {
  color: var(--gold-luxury);
}
.modal-title[_ngcontent-ng-c1049749640] {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 32px;
  text-align: center;
  color: var(--text-primary);
}
.modal-form[_ngcontent-ng-c1049749640] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.container[_ngcontent-ng-c1049749640] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.container-fluid[_ngcontent-ng-c1049749640] {
  padding: 0 24px;
}
.text-center[_ngcontent-ng-c1049749640] {
  text-align: center;
}
.text-white[_ngcontent-ng-c1049749640] {
  color: var(--text-primary);
}
.text-secondary[_ngcontent-ng-c1049749640] {
  color: var(--text-secondary);
}
.mb-0[_ngcontent-ng-c1049749640] {
  margin-bottom: 0;
}
.mb-2[_ngcontent-ng-c1049749640] {
  margin-bottom: 10px;
}
.mb-3[_ngcontent-ng-c1049749640] {
  margin-bottom: 20px;
}
.mb-4[_ngcontent-ng-c1049749640] {
  margin-bottom: 30px;
}
.mb-5[_ngcontent-ng-c1049749640] {
  margin-bottom: 50px;
}
.mt-5[_ngcontent-ng-c1049749640] {
  margin-top: 50px;
}
.gap-3[_ngcontent-ng-c1049749640] {
  gap: 20px;
}
.gap-4[_ngcontent-ng-c1049749640] {
  gap: 30px;
}
@media (max-width: 768px) {
  .hero-buttons[_ngcontent-ng-c1049749640] {
    flex-direction: column;
    align-items: center;
  }
  .btn[_ngcontent-ng-c1049749640] {
    width: 100%;
    text-align: center;
  }
  .section-header[_ngcontent-ng-c1049749640]   h2[_ngcontent-ng-c1049749640] {
    font-size: 1.6rem;
  }
  .parallax-divider[_ngcontent-ng-c1049749640] {
    height: 50vh;
    min-height: 350px;
  }
}


/*# sourceMappingURL=/app.css.map */</style><style ng-app-id="ng">
[_nghost-ng-c3431066766] {
  display: block;
}
.main-header[_ngcontent-ng-c3431066766] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  background: rgba(11, 11, 15, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.08);
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
}
.container[_ngcontent-ng-c3431066766] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}
.d-flex[_ngcontent-ng-c3431066766] {
  display: flex;
}
.align-items-center[_ngcontent-ng-c3431066766] {
  align-items: center;
}
.justify-content-between[_ngcontent-ng-c3431066766] {
  justify-content: space-between;
}
.h-100[_ngcontent-ng-c3431066766] {
  height: 100%;
}
.gap-2[_ngcontent-ng-c3431066766] {
  gap: 10px;
}
.gap-3[_ngcontent-ng-c3431066766] {
  gap: 16px;
}
.gap-4[_ngcontent-ng-c3431066766] {
  gap: 30px;
}
.logo[_ngcontent-ng-c3431066766] {
  font-family: "Outfit", sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 3px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo[_ngcontent-ng-c3431066766]:hover {
  opacity: 0.85;
}
.neon-text[_ngcontent-ng-c3431066766] {
  color: #f0f0f0;
}
.royale-text[_ngcontent-ng-c3431066766] {
  color: #C9A84C;
}
.nav-menu[_ngcontent-ng-c3431066766] {
  display: flex;
  gap: 32px;
}
.nav-menu[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766] {
  color: rgba(240, 240, 240, 0.5);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}
.nav-menu[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766]::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #C9A84C;
  transition: width 0.3s ease;
}
.nav-menu[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766]:hover {
  color: #C9A84C;
}
.nav-menu[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766]:hover::after {
  width: 100%;
}
.auth-buttons[_ngcontent-ng-c3431066766] {
  display: flex;
  gap: 12px;
  align-items: center;
}
.btn[_ngcontent-ng-c3431066766] {
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.78rem;
  font-family: "Inter", sans-serif;
}
.btn-outline-light[_ngcontent-ng-c3431066766] {
  background: transparent;
  color: rgba(240, 240, 240, 0.6);
  border: 1px solid rgba(240, 240, 240, 0.15);
}
.btn-outline-light[_ngcontent-ng-c3431066766]:hover {
  border-color: rgba(201, 168, 76, 0.4);
  color: #C9A84C;
}
.btn-warning[_ngcontent-ng-c3431066766] {
  background: #C9A84C;
  color: #0b0b0f;
}
.btn-warning[_ngcontent-ng-c3431066766]:hover {
  background: #E2C87A;
  transform: translateY(-1px);
}
.btn-sm[_ngcontent-ng-c3431066766] {
  padding: 8px 20px;
  font-size: 0.75rem;
}
.px-3[_ngcontent-ng-c3431066766] {
  padding-left: 20px;
  padding-right: 20px;
}
.shadow-sm[_ngcontent-ng-c3431066766] {
  box-shadow: none;
}
.text-dark[_ngcontent-ng-c3431066766] {
  color: #0b0b0f;
}
.fw-bold[_ngcontent-ng-c3431066766] {
  font-weight: 700;
}
.d-none[_ngcontent-ng-c3431066766] {
  display: none;
}
.d-lg-flex[_ngcontent-ng-c3431066766] {
  display: flex;
}
@media (max-width: 991px) {
  .logo[_ngcontent-ng-c3431066766] {
    font-size: 1.2rem;
  }
  .auth-buttons[_ngcontent-ng-c3431066766] {
    gap: 10px;
  }
  .nav-menu[_ngcontent-ng-c3431066766] {
    display: none !important;
  }
}
.btn-hamburger[_ngcontent-ng-c3431066766] {
  width: 30px;
  height: 20px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2100;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn-hamburger[_ngcontent-ng-c3431066766]   span[_ngcontent-ng-c3431066766] {
  display: block;
  width: 100%;
  height: 2px;
  background: #C9A84C;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-hamburger.open[_ngcontent-ng-c3431066766]   span[_ngcontent-ng-c3431066766]:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.btn-hamburger.open[_ngcontent-ng-c3431066766]   span[_ngcontent-ng-c3431066766]:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}
.btn-hamburger.open[_ngcontent-ng-c3431066766]   span[_ngcontent-ng-c3431066766]:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
.mobile-menu-overlay[_ngcontent-ng-c3431066766] {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(11, 11, 15, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-menu-overlay.active[_ngcontent-ng-c3431066766] {
  opacity: 1;
  visibility: visible;
}
.mobile-nav[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766] {
  font-size: clamp(1.2rem, 5vw, 2rem);
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(20px);
  cursor: pointer;
}
.mobile-menu-overlay.active[_ngcontent-ng-c3431066766]   .mobile-nav[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766] {
  opacity: 1;
  transform: translateY(0);
}
.mobile-nav[_ngcontent-ng-c3431066766]   a[_ngcontent-ng-c3431066766]:hover {
  color: #C9A84C;
  text-shadow: 0 0 15px rgba(201, 168, 76, 0.5);
}
@media (min-width: 992px) {
  .btn-hamburger[_ngcontent-ng-c3431066766], 
   .mobile-menu-overlay[_ngcontent-ng-c3431066766] {
    display: none;
  }
}
/*# sourceMappingURL=/header.css.map */</style><style ng-app-id="ng">
.usuarios-overlay[_ngcontent-ng-c2605210750] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: _ngcontent-ng-c2605210750_overlayFadeIn 0.4s ease;
}
@keyframes _ngcontent-ng-c2605210750_overlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.futuristic-container[_ngcontent-ng-c2605210750] {
  position: relative;
  width: 520px;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: _ngcontent-ng-c2605210750_containerAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.futuristic-container.register-mode[_ngcontent-ng-c2605210750] {
  width: 560px;
  height: 620px;
}
@keyframes _ngcontent-ng-c2605210750_containerAppear {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.orbit-ring[_ngcontent-ng-c2605210750] {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;
}
.orbit-outer[_ngcontent-ng-c2605210750] {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  background:
    linear-gradient(#0b0b0f, #0b0b0f) padding-box,
    conic-gradient(
      from 0deg,
      #C9A84C 0%,
      transparent 15%,
      #E2C87A 25%,
      transparent 40%,
      #d4af37 50%,
      transparent 65%,
      #C9A84C 75%,
      transparent 90%,
      #E2C87A 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinClockwise 8s linear infinite;
  filter: drop-shadow(0 0 8px rgba(201, 168, 76, 0.35));
}
.orbit-outer[_ngcontent-ng-c2605210750]::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid transparent;
  background:
    linear-gradient(transparent, transparent) padding-box,
    conic-gradient(
      from 180deg,
      rgba(201, 168, 76, 0.2) 0%,
      transparent 25%,
      rgba(226, 200, 122, 0.15) 50%,
      transparent 75%,
      rgba(201, 168, 76, 0.2) 100%) border-box;
}
.orbit-middle[_ngcontent-ng-c2605210750] {
  width: 88%;
  height: 88%;
  border: 1.5px solid transparent;
  background:
    linear-gradient(#0b0b0f, #0b0b0f) padding-box,
    conic-gradient(
      from 90deg,
      #E2C87A 0%,
      transparent 20%,
      #C9A84C 35%,
      transparent 55%,
      #d4af37 70%,
      transparent 90%,
      #E2C87A 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinCounterClockwise 12s linear infinite;
  filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.25));
}
.orbit-inner[_ngcontent-ng-c2605210750] {
  width: 76%;
  height: 76%;
  border: 1px solid transparent;
  background:
    linear-gradient(#0b0b0f, #0b0b0f) padding-box,
    conic-gradient(
      from 45deg,
      #d4af37 0%,
      transparent 15%,
      #C9A84C 30%,
      transparent 50%,
      #E2C87A 65%,
      transparent 85%,
      #d4af37 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinClockwise 15s linear infinite;
  filter: drop-shadow(0 0 4px rgba(201, 168, 76, 0.3));
}
.orbit-dot[_ngcontent-ng-c2605210750] {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C9A84C;
  box-shadow: 0 0 12px #C9A84C, 0 0 24px rgba(201, 168, 76, 0.5);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  animation: _ngcontent-ng-c2605210750_dotPulse 2s ease-in-out infinite;
}
.orbit-middle[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  width: 5px;
  height: 5px;
  background: #E2C87A;
  box-shadow: 0 0 10px #E2C87A, 0 0 20px rgba(226, 200, 122, 0.5);
  animation: _ngcontent-ng-c2605210750_dotPulse 2.5s ease-in-out infinite;
}
.orbit-inner[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  width: 4px;
  height: 4px;
  background: #d4af37;
  box-shadow: 0 0 8px #d4af37, 0 0 16px rgba(212, 175, 55, 0.5);
  animation: _ngcontent-ng-c2605210750_dotPulse 3s ease-in-out infinite;
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-1[_ngcontent-ng-c2605210750] {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-2[_ngcontent-ng-c2605210750] {
  top: 14%;
  right: 3%;
  transform: translate(50%, -50%);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-3[_ngcontent-ng-c2605210750] {
  bottom: 14%;
  right: 3%;
  transform: translate(50%, 50%);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-4[_ngcontent-ng-c2605210750] {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-5[_ngcontent-ng-c2605210750] {
  bottom: 14%;
  left: 3%;
  transform: translate(-50%, 50%);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .dot-6[_ngcontent-ng-c2605210750] {
  top: 14%;
  left: 3%;
  transform: translate(-50%, -50%);
}
.orbit-middle[_ngcontent-ng-c2605210750]   .dot-1[_ngcontent-ng-c2605210750] {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.orbit-middle[_ngcontent-ng-c2605210750]   .dot-2[_ngcontent-ng-c2605210750] {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}
.orbit-middle[_ngcontent-ng-c2605210750]   .dot-3[_ngcontent-ng-c2605210750] {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.orbit-middle[_ngcontent-ng-c2605210750]   .dot-4[_ngcontent-ng-c2605210750] {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}
.orbit-inner[_ngcontent-ng-c2605210750]   .dot-1[_ngcontent-ng-c2605210750] {
  top: 5%;
  right: 12%;
}
.orbit-inner[_ngcontent-ng-c2605210750]   .dot-2[_ngcontent-ng-c2605210750] {
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
.orbit-inner[_ngcontent-ng-c2605210750]   .dot-3[_ngcontent-ng-c2605210750] {
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}
.orbit-dot.dot-2[_ngcontent-ng-c2605210750] {
  animation-delay: 0.3s;
}
.orbit-dot.dot-3[_ngcontent-ng-c2605210750] {
  animation-delay: 0.6s;
}
.orbit-dot.dot-4[_ngcontent-ng-c2605210750] {
  animation-delay: 0.9s;
}
.orbit-dot.dot-5[_ngcontent-ng-c2605210750] {
  animation-delay: 1.2s;
}
.orbit-dot.dot-6[_ngcontent-ng-c2605210750] {
  animation-delay: 1.5s;
}
.glow-pulse[_ngcontent-ng-c2605210750] {
  position: absolute;
  width: 65%;
  height: 65%;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(201, 168, 76, 0.08) 0%,
      rgba(212, 175, 55, 0.04) 40%,
      transparent 70%);
  animation: _ngcontent-ng-c2605210750_glowPulse 4s ease-in-out infinite;
}
@keyframes _ngcontent-ng-c2605210750_spinClockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-ng-c2605210750_spinCounterClockwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes _ngcontent-ng-c2605210750_dotPulse {
  0%, 100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.4);
  }
}
@keyframes _ngcontent-ng-c2605210750_glowPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
.glass-form[_ngcontent-ng-c2605210750] {
  position: relative;
  z-index: 10;
  width: 340px;
  padding: 40px 32px 32px;
  border-radius: 20px;
  background: rgba(17, 17, 24, 0.88);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(201, 168, 76, 0.2);
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(201, 168, 76, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: _ngcontent-ng-c2605210750_formAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  transition: all 0.4s ease;
}
.glass-form-register[_ngcontent-ng-c2605210750] {
  width: 360px;
  padding: 36px 28px 28px;
}
.glass-form.loading[_ngcontent-ng-c2605210750] {
  border-color: rgba(201, 168, 76, 0.5);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(201, 168, 76, 0.15);
}
.glass-form.success[_ngcontent-ng-c2605210750] {
  border-color: rgba(201, 168, 76, 0.6);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(201, 168, 76, 0.2);
}
@keyframes _ngcontent-ng-c2605210750_formAppear {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.close-btn[_ngcontent-ng-c2605210750] {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  z-index: 20;
}
.close-btn[_ngcontent-ng-c2605210750]:hover {
  background: rgba(201, 168, 76, 0.15);
  border-color: rgba(201, 168, 76, 0.4);
  color: #C9A84C;
  transform: rotate(90deg);
}
.form-header[_ngcontent-ng-c2605210750] {
  text-align: center;
  margin-bottom: 28px;
}
.form-icon[_ngcontent-ng-c2605210750] {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  border-radius: 16px;
  background:
    linear-gradient(
      135deg,
      rgba(201, 168, 76, 0.15),
      rgba(212, 175, 55, 0.1));
  border: 1px solid rgba(201, 168, 76, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9A84C;
  font-size: 1.5rem;
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.15);
  animation: _ngcontent-ng-c2605210750_iconFloat 3s ease-in-out infinite;
}
.register-icon[_ngcontent-ng-c2605210750] {
  background:
    linear-gradient(
      135deg,
      rgba(226, 200, 122, 0.15),
      rgba(212, 175, 55, 0.1));
  border-color: rgba(226, 200, 122, 0.3);
  color: #E2C87A;
  box-shadow: 0 0 20px rgba(226, 200, 122, 0.15);
}
@keyframes _ngcontent-ng-c2605210750_iconFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
.form-title[_ngcontent-ng-c2605210750] {
  font-family: "Outfit", sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #f0f0f0;
  margin-bottom: 6px;
}
.form-subtitle[_ngcontent-ng-c2605210750] {
  font-size: 0.75rem;
  color: rgba(240, 240, 240, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
}
.server-error[_ngcontent-ng-c2605210750] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  margin-bottom: 18px;
  background: rgba(255, 62, 62, 0.1);
  border: 1px solid rgba(255, 62, 62, 0.25);
  border-radius: 10px;
  color: #ff6b6b;
  font-size: 0.78rem;
  letter-spacing: 0.3px;
  animation: _ngcontent-ng-c2605210750_errorShake 0.4s ease;
}
@keyframes _ngcontent-ng-c2605210750_errorShake {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-6px);
  }
  40% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(-4px);
  }
  80% {
    transform: translateX(4px);
  }
}
.auth-form[_ngcontent-ng-c2605210750] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.input-group[_ngcontent-ng-c2605210750] {
  position: relative;
}
.input-group[_ngcontent-ng-c2605210750]   input[_ngcontent-ng-c2605210750] {
  width: 100%;
  padding: 14px 16px 14px 46px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(201, 168, 76, 0.12);
  border-radius: 12px;
  color: #f0f0f0;
  font-size: 0.88rem;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  outline: none;
  box-sizing: border-box;
}
.input-group[_ngcontent-ng-c2605210750]   input[_ngcontent-ng-c2605210750]::placeholder {
  color: rgba(240, 240, 240, 0.25);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.input-group[_ngcontent-ng-c2605210750]   input[_ngcontent-ng-c2605210750]:focus {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(201, 168, 76, 0.03);
  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08), 0 0 20px rgba(201, 168, 76, 0.08);
}
.input-group.has-error[_ngcontent-ng-c2605210750]   input[_ngcontent-ng-c2605210750] {
  border-color: rgba(255, 62, 62, 0.5);
  background: rgba(255, 62, 62, 0.03);
}
.input-icon[_ngcontent-ng-c2605210750] {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: rgba(201, 168, 76, 0.4);
  font-size: 1rem;
  transition: color 0.3s ease;
  z-index: 2;
}
.input-group[_ngcontent-ng-c2605210750]:focus-within   .input-icon[_ngcontent-ng-c2605210750] {
  color: #C9A84C;
}
.input-group.has-error[_ngcontent-ng-c2605210750]   .input-icon[_ngcontent-ng-c2605210750] {
  color: rgba(255, 62, 62, 0.6);
}
.has-error[_ngcontent-ng-c2605210750]   .input-icon[_ngcontent-ng-c2605210750] {
  transform: translateY(calc(-50% - 8px));
}
.input-glow[_ngcontent-ng-c2605210750] {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent,
      #C9A84C,
      transparent);
  transition: width 0.4s ease;
  border-radius: 2px;
}
.input-group[_ngcontent-ng-c2605210750]:focus-within   .input-glow[_ngcontent-ng-c2605210750] {
  width: 80%;
}
.field-error[_ngcontent-ng-c2605210750] {
  display: block;
  color: #ff6b6b;
  font-size: 0.68rem;
  margin-top: 4px;
  padding-left: 46px;
  letter-spacing: 0.3px;
  font-weight: 600;
  animation: _ngcontent-ng-c2605210750_fieldErrorIn 0.3s ease;
}
@keyframes _ngcontent-ng-c2605210750_fieldErrorIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.submit-btn[_ngcontent-ng-c2605210750] {
  width: 100%;
  padding: 15px 24px;
  margin-top: 6px;
  border: none;
  border-radius: 12px;
  font-family: "Outfit", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background:
    linear-gradient(
      135deg,
      #C9A84C 0%,
      #d4af37 50%,
      #E2C87A 100%);
  background-size: 200% 100%;
  color: #0b0b0f;
  box-shadow: 0 8px 32px rgba(201, 168, 76, 0.3);
  position: relative;
  overflow: hidden;
}
.submit-btn[_ngcontent-ng-c2605210750]::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent);
  transition: left 0.6s ease;
}
.submit-btn[_ngcontent-ng-c2605210750]:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(201, 168, 76, 0.45);
  background-position: 100% 0;
}
.submit-btn[_ngcontent-ng-c2605210750]:hover::before {
  left: 100%;
}
.submit-btn[_ngcontent-ng-c2605210750]:active:not(:disabled) {
  transform: translateY(-1px);
}
.submit-btn[_ngcontent-ng-c2605210750]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.register-btn[_ngcontent-ng-c2605210750] {
  background:
    linear-gradient(
      135deg,
      #d4af37 0%,
      #E2C87A 50%,
      #C9A84C 100%);
  background-size: 200% 100%;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
}
.register-btn[_ngcontent-ng-c2605210750]:hover:not(:disabled) {
  box-shadow: 0 12px 40px rgba(212, 175, 55, 0.45);
}
.btn-loader[_ngcontent-ng-c2605210750] {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(11, 11, 15, 0.3);
  border-top-color: #0b0b0f;
  border-radius: 50%;
  animation: _ngcontent-ng-c2605210750_btnSpin 0.8s linear infinite;
}
@keyframes _ngcontent-ng-c2605210750_btnSpin {
  to {
    transform: rotate(360deg);
  }
}
.form-footer[_ngcontent-ng-c2605210750] {
  text-align: center;
  margin-top: 20px;
  font-size: 0.78rem;
  color: rgba(240, 240, 240, 0.35);
}
.link-btn[_ngcontent-ng-c2605210750] {
  background: none;
  border: none;
  color: #C9A84C;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0;
  margin-left: 4px;
}
.link-btn[_ngcontent-ng-c2605210750]:hover {
  color: #E2C87A;
  text-shadow: 0 0 10px rgba(201, 168, 76, 0.5);
}
.success-state[_ngcontent-ng-c2605210750] {
  text-align: center;
  padding: 20px 0;
  animation: _ngcontent-ng-c2605210750_successAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.success-icon[_ngcontent-ng-c2605210750] {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: rgba(201, 168, 76, 0.1);
  border: 2px solid rgba(201, 168, 76, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9A84C;
  font-size: 2rem;
  box-shadow: 0 0 30px rgba(201, 168, 76, 0.2);
  animation: _ngcontent-ng-c2605210750_successPulse 1.5s ease-in-out infinite;
}
.register-success-icon[_ngcontent-ng-c2605210750] {
  background: rgba(226, 200, 122, 0.1);
  border-color: rgba(226, 200, 122, 0.35);
  color: #E2C87A;
  box-shadow: 0 0 30px rgba(226, 200, 122, 0.2);
}
@keyframes _ngcontent-ng-c2605210750_successAppear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes _ngcontent-ng-c2605210750_successPulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(201, 168, 76, 0.2);
  }
  50% {
    box-shadow: 0 0 50px rgba(201, 168, 76, 0.45);
  }
}
.success-state[_ngcontent-ng-c2605210750]   h2[_ngcontent-ng-c2605210750] {
  font-family: "Outfit", sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 4px;
  color: #C9A84C;
  margin-bottom: 8px;
}
.success-state[_ngcontent-ng-c2605210750]   p[_ngcontent-ng-c2605210750] {
  font-size: 0.8rem;
  color: rgba(240, 240, 240, 0.5);
  letter-spacing: 1px;
}
@media (max-width: 600px) {
  .futuristic-container[_ngcontent-ng-c2605210750] {
    width: 380px;
    height: 380px;
  }
  .futuristic-container.register-mode[_ngcontent-ng-c2605210750] {
    width: 400px;
    height: 500px;
  }
  .glass-form[_ngcontent-ng-c2605210750] {
    width: 280px;
    padding: 32px 24px 24px;
  }
  .glass-form-register[_ngcontent-ng-c2605210750] {
    width: 300px;
    padding: 28px 20px 20px;
  }
  .form-title[_ngcontent-ng-c2605210750] {
    font-size: 1.1rem;
    letter-spacing: 3px;
  }
  .input-group[_ngcontent-ng-c2605210750]   input[_ngcontent-ng-c2605210750] {
    padding: 12px 14px 12px 40px;
    font-size: 0.82rem;
  }
  .submit-btn[_ngcontent-ng-c2605210750] {
    padding: 13px 20px;
    font-size: 0.8rem;
  }
}
@media (max-width: 420px) {
  .futuristic-container[_ngcontent-ng-c2605210750] {
    width: 320px;
    height: 320px;
  }
  .futuristic-container.register-mode[_ngcontent-ng-c2605210750] {
    width: 340px;
    height: 450px;
  }
  .glass-form[_ngcontent-ng-c2605210750] {
    width: 240px;
    padding: 28px 18px 18px;
  }
  .glass-form-register[_ngcontent-ng-c2605210750] {
    width: 260px;
  }
  .form-icon[_ngcontent-ng-c2605210750] {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }
  .form-title[_ngcontent-ng-c2605210750] {
    font-size: 1rem;
  }
}
/*# sourceMappingURL=/usuarios.css.map */</style><style ng-app-id="ng">
[_nghost-ng-c899908534] {
  display: block;
}
.main-footer[_ngcontent-ng-c899908534] {
  padding: 80px 0 40px;
  background: #060608;
  border-top: 1px solid rgba(201, 168, 76, 0.08);
}
.container[_ngcontent-ng-c899908534] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.row[_ngcontent-ng-c899908534] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
@media (max-width: 768px) {
  .row[_ngcontent-ng-c899908534] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .row[_ngcontent-ng-c899908534] {
    grid-template-columns: 1fr;
  }
}
.g-4[_ngcontent-ng-c899908534] {
  gap: 30px;
}
.mb-5[_ngcontent-ng-c899908534] {
  margin-bottom: 50px;
}
.mb-4[_ngcontent-ng-c899908534] {
  margin-bottom: 24px;
}
.mb-2[_ngcontent-ng-c899908534] {
  margin-bottom: 10px;
}
.text-info[_ngcontent-ng-c899908534] {
  color: #C9A84C;
}
.text-uppercase[_ngcontent-ng-c899908534] {
  text-transform: uppercase;
}
.fw-bold[_ngcontent-ng-c899908534] {
  font-weight: 600;
}
.small[_ngcontent-ng-c899908534] {
  font-size: 0.85rem;
}
.list-unstyled[_ngcontent-ng-c899908534] {
  list-style: none;
  padding: 0;
}
.text-secondary[_ngcontent-ng-c899908534] {
  color: rgba(240, 240, 240, 0.4);
}
.text-decoration-none[_ngcontent-ng-c899908534] {
  text-decoration: none;
}
a[_ngcontent-ng-c899908534] {
  transition: color 0.3s ease;
}
.list-unstyled[_ngcontent-ng-c899908534]   a[_ngcontent-ng-c899908534]:hover {
  color: #C9A84C;
}
.footer-bottom[_ngcontent-ng-c899908534] {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(201, 168, 76, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
@media (max-width: 768px) {
  .footer-bottom[_ngcontent-ng-c899908534] {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
.d-flex[_ngcontent-ng-c899908534] {
  display: flex;
}
.flex-wrap[_ngcontent-ng-c899908534] {
  flex-wrap: wrap;
}
.flex-column[_ngcontent-ng-c899908534] {
  flex-direction: column;
}
.flex-lg-row[_ngcontent-ng-c899908534] {
  flex-direction: row;
}
.align-items-center[_ngcontent-ng-c899908534] {
  align-items: center;
}
.justify-content-between[_ngcontent-ng-c899908534] {
  justify-content: space-between;
}
.gap-3[_ngcontent-ng-c899908534] {
  gap: 16px;
}
.gap-4[_ngcontent-ng-c899908534] {
  gap: 30px;
}
.gap-2[_ngcontent-ng-c899908534] {
  gap: 10px;
}
.border-secondary[_ngcontent-ng-c899908534] {
  border-color: rgba(240, 240, 240, 0.08);
}
.opacity-25[_ngcontent-ng-c899908534] {
  opacity: 0.25;
}
.py-4[_ngcontent-ng-c899908534] {
  padding-top: 24px;
  padding-bottom: 24px;
}
.social-links[_ngcontent-ng-c899908534] {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.social-links[_ngcontent-ng-c899908534]   a[_ngcontent-ng-c899908534] {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.1);
  border-radius: 6px;
  color: rgba(240, 240, 240, 0.4);
  transition: all 0.3s ease;
  font-size: 1rem;
}
.social-links[_ngcontent-ng-c899908534]   a[_ngcontent-ng-c899908534]:hover {
  border-color: rgba(201, 168, 76, 0.3);
  color: #C9A84C;
  transform: translateY(-2px);
}
.legal-links[_ngcontent-ng-c899908534] {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.legal-links[_ngcontent-ng-c899908534]   a[_ngcontent-ng-c899908534] {
  color: rgba(240, 240, 240, 0.35);
  text-decoration: none;
}
.legal-links[_ngcontent-ng-c899908534]   a[_ngcontent-ng-c899908534]:hover {
  color: #C9A84C;
}
.copyright[_ngcontent-ng-c899908534] {
  color: rgba(240, 240, 240, 0.3);
}
hr[_ngcontent-ng-c899908534] {
  border: none;
  height: 1px;
  background: rgba(201, 168, 76, 0.06);
  margin: 30px 0;
}
.bi[_ngcontent-ng-c899908534] {
  font-size: 1rem;
}
/*# sourceMappingURL=/footer.css.map */</style></head>

<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","input"],[]);</script>
  <app-root ng-version="21.2.8" _nghost-ng-c1049749640="" ngh="3" ng-server-context="ssg"><app-header _ngcontent-ng-c1049749640="" _nghost-ng-c3431066766="" ngh="0"><header _ngcontent-ng-c3431066766="" class="main-header glass"><div _ngcontent-ng-c3431066766="" class="container d-flex align-items-center justify-content-between h-100"><div _ngcontent-ng-c3431066766="" class="logo d-flex gap-2 align-items-center" jsaction="click:;"><span _ngcontent-ng-c3431066766="" class="neon-text">NEON</span><span _ngcontent-ng-c3431066766="" class="royale-text">ROYALE</span></div><nav _ngcontent-ng-c3431066766="" class="nav-menu d-none d-lg-flex gap-4"><a _ngcontent-ng-c3431066766="" jsaction="click:;">Inicio</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Juegos</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Promociones</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Contacto</a></nav><div _ngcontent-ng-c3431066766="" class="auth-buttons d-flex gap-3 align-items-center"><div _ngcontent-ng-c3431066766="" class="d-none d-lg-flex gap-3 align-items-center"><button _ngcontent-ng-c3431066766="" class="btn btn-outline-light btn-sm px-3" jsaction="click:;">Login</button><button _ngcontent-ng-c3431066766="" class="btn btn-warning btn-sm px-3 shadow-sm text-dark fw-bold" jsaction="click:;">Register</button><!--container--><!--container--></div><button _ngcontent-ng-c3431066766="" class="btn-hamburger d-lg-none" jsaction="click:;"><span _ngcontent-ng-c3431066766=""></span><span _ngcontent-ng-c3431066766=""></span><span _ngcontent-ng-c3431066766=""></span></button></div></div><div _ngcontent-ng-c3431066766="" class="mobile-menu-overlay"><nav _ngcontent-ng-c3431066766="" class="mobile-nav d-flex flex-column align-items-center justify-content-center gap-4"><a _ngcontent-ng-c3431066766="" jsaction="click:;">Inicio</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Juegos</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Promociones</a><a _ngcontent-ng-c3431066766="" jsaction="click:;">Contacto</a><div _ngcontent-ng-c3431066766="" class="mobile-auth-actions mt-4 d-flex flex-column gap-3 w-75 text-center"><button _ngcontent-ng-c3431066766="" class="btn btn-warning btn-lg w-100" jsaction="click:;">INICIAR SESIÓN</button><button _ngcontent-ng-c3431066766="" class="btn btn-outline-light btn-lg w-100" jsaction="click:;">REGISTRARSE</button><!--container--><!--container--></div></nav></div></header></app-header><main _ngcontent-ng-c1049749640=""><section _ngcontent-ng-c1049749640="" id="hero" class="hero-section"><div _ngcontent-ng-c1049749640="" class="hero-content"><h1 _ngcontent-ng-c1049749640="" class="hero-title">NEON <span _ngcontent-ng-c1049749640="" class="highlight">ROYALE</span></h1><p _ngcontent-ng-c1049749640="" class="hero-subtitle">The Ultimate Gaming Distinction</p><div _ngcontent-ng-c1049749640="" class="hero-buttons"><button _ngcontent-ng-c1049749640="" class="btn btn-luxury" jsaction="click:;">EXPLORAR SALAS</button><button _ngcontent-ng-c1049749640="" class="btn btn-outline-luxury" jsaction="click:;">MEMBRESIA VIP</button></div></div><div _ngcontent-ng-c1049749640="" class="hero-background"></div></section><section _ngcontent-ng-c1049749640="" id="galeria" class="gallery-section"><div _ngcontent-ng-c1049749640="" class="container"><div _ngcontent-ng-c1049749640="" class="section-header reveal-on-scroll"><h2 _ngcontent-ng-c1049749640="">SALAS DE JUEGO PREMIUM</h2><p _ngcontent-ng-c1049749640="" class="section-subtitle">Descubre nuestras exclusivas salas de juego</p><div _ngcontent-ng-c1049749640="" class="gold-line"></div></div><div _ngcontent-ng-c1049749640="" class="rooms-grid"><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/1.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">SALA PREMIUM</h3><p _ngcontent-ng-c1049749640="">Experiencia VIP exclusiva</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">ELITE</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/2.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">RULETA DORADA</h3><p _ngcontent-ng-c1049749640="">Juego clásico de mesa</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">POPULAR</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/3.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">POKER ELITE</h3><p _ngcontent-ng-c1049749640="">Torneos de alto nivel</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">NUEVO</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/baca.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">BACCARAT ROYAL</h3><p _ngcontent-ng-c1049749640="">Juego de elegancia</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">PREMIUM</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/black.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">BLACKJACK VIP</h3><p _ngcontent-ng-c1049749640="">Mesa privada 24/7</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">EXCLUSIVO</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/dorado.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">SLOTS LUXE</h3><p _ngcontent-ng-c1049749640="">Máquinas modernas</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">HOT</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/elite.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">CLUB ELITE</h3><p _ngcontent-ng-c1049749640="">Acceso restringido</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">VIP</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/neon.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">NEON LOUNGE</h3><p _ngcontent-ng-c1049749640="">Ambiente futurista</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">TRENDING</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1049749640="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="room-card"><div _ngcontent-ng-c1049749640="" class="room-image" style="background-image: url(img/sala.jpg);"><div _ngcontent-ng-c1049749640="" class="room-pattern"></div><div _ngcontent-ng-c1049749640="" class="room-overlay"></div><div _ngcontent-ng-c1049749640="" class="room-content"><h3 _ngcontent-ng-c1049749640="">SALA PRIVADA</h3><p _ngcontent-ng-c1049749640="">Máxima discreción</p></div></div><div _ngcontent-ng-c1049749640="" class="room-footer"><span _ngcontent-ng-c1049749640="" class="room-badge">ULTIMATE</span><button _ngcontent-ng-c1049749640="" class="btn-play" jsaction="click:;">JUGAR AHORA</button></div></div></div><!--container--></div></div></section><section _ngcontent-ng-c1049749640="" class="parallax-divider parallax-bg-1"><div _ngcontent-ng-c1049749640="" class="parallax-overlay"></div><div _ngcontent-ng-c1049749640="" class="parallax-content"><h2 _ngcontent-ng-c1049749640="">LA EXPERIENCIA DEFINITIVA</h2><p _ngcontent-ng-c1049749640="">Donde el lujo se encuentra con la emoción</p></div></section><section _ngcontent-ng-c1049749640="" id="juegos" class="games-section"><div _ngcontent-ng-c1049749640="" class="container"><div _ngcontent-ng-c1049749640="" class="section-header reveal-on-scroll"><h2 _ngcontent-ng-c1049749640="">COLECCIÓN DE JUEGOS</h2><div _ngcontent-ng-c1049749640="" class="gold-line"></div></div><div _ngcontent-ng-c1049749640="" class="games-grid"><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><div _ngcontent-ng-c1049749640="" class="game-card skeleton-card"><div _ngcontent-ng-c1049749640="" class="skeleton-img"></div><div _ngcontent-ng-c1049749640="" class="skeleton-content"></div></div><!--container--><!--container--><!--container--></div></div></section><section _ngcontent-ng-c1049749640="" class="parallax-divider parallax-bg-2"><div _ngcontent-ng-c1049749640="" class="parallax-overlay"></div><div _ngcontent-ng-c1049749640="" class="parallax-content"><h2 _ngcontent-ng-c1049749640="">GANA EN GRANDE</h2><p _ngcontent-ng-c1049749640="">Promociones exclusivas para nuestros miembros</p></div></section><section _ngcontent-ng-c1049749640="" id="promociones" class="promo-section"><div _ngcontent-ng-c1049749640="" class="container"><div _ngcontent-ng-c1049749640="" class="promo-content reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="promo-text"><div _ngcontent-ng-c1049749640="" class="vip-badge">STATUS ELITE</div><h2 _ngcontent-ng-c1049749640="" class="premium-title">BIENVENIDA <span _ngcontent-ng-c1049749640="" class="gold-text">MAGISTRAL</span></h2><p _ngcontent-ng-c1049749640="" class="premium-description">Diseñado exclusivamente para conocedores del lujo. Eleva tu experiencia al nivel más alto de distinción en el mundo del gaming.</p><div _ngcontent-ng-c1049749640="" class="promo-benefits"><div _ngcontent-ng-c1049749640="" class="benefit-item"><div _ngcontent-ng-c1049749640="" class="benefit-icon"><i _ngcontent-ng-c1049749640="" class="bi bi-gem"></i></div><div _ngcontent-ng-c1049749640="" class="benefit-info"><h4 _ngcontent-ng-c1049749640="">Paquete de Bienvenida</h4><p _ngcontent-ng-c1049749640="">Bono del 100% hasta <span _ngcontent-ng-c1049749640="" class="highlight">\$10,000</span></p></div></div><div _ngcontent-ng-c1049749640="" class="benefit-item"><div _ngcontent-ng-c1049749640="" class="benefit-icon"><i _ngcontent-ng-c1049749640="" class="bi bi-stars"></i></div><div _ngcontent-ng-c1049749640="" class="benefit-info"><h4 _ngcontent-ng-c1049749640="">Cortesías VIP</h4><p _ngcontent-ng-c1049749640="">50 giros de cortesía en slots de alta gama</p></div></div><div _ngcontent-ng-c1049749640="" class="benefit-item"><div _ngcontent-ng-c1049749640="" class="benefit-icon"><i _ngcontent-ng-c1049749640="" class="bi bi-shield-check"></i></div><div _ngcontent-ng-c1049749640="" class="benefit-info"><h4 _ngcontent-ng-c1049749640="">Acceso Prioritario</h4><p _ngcontent-ng-c1049749640="">Salas privadas y concierge dedicado 24/7</p></div></div></div><button _ngcontent-ng-c1049749640="" class="btn btn-luxury-glow" jsaction="click:;">RECLAMAR MEMBRESÍA</button></div><div _ngcontent-ng-c1049749640="" class="promo-image"><div _ngcontent-ng-c1049749640="" class="promo-visual-liquid"><div _ngcontent-ng-c1049749640="" class="liquid-overlay"></div></div></div></div></div></section><section _ngcontent-ng-c1049749640="" id="contacto" class="contact-section"><div _ngcontent-ng-c1049749640="" class="container"><div _ngcontent-ng-c1049749640="" class="contact-wrapper reveal-on-scroll"><div _ngcontent-ng-c1049749640="" class="contact-info"><h2 _ngcontent-ng-c1049749640="">CONCIERGE VIP</h2><p _ngcontent-ng-c1049749640="">Nuestro equipo de soporte de alta prioridad está disponible 24/7 para garantizar tu experiencia perfecta.</p><div _ngcontent-ng-c1049749640="" class="contact-details"><div _ngcontent-ng-c1049749640="" class="detail-item"><span _ngcontent-ng-c1049749640="" class="icon"><i _ngcontent-ng-c1049749640="" class="bi bi-envelope"></i></span><div _ngcontent-ng-c1049749640=""><p _ngcontent-ng-c1049749640="" class="label">Email</p><p _ngcontent-ng-c1049749640="" class="value">exclusive@neonroyale.com</p></div></div><div _ngcontent-ng-c1049749640="" class="detail-item"><span _ngcontent-ng-c1049749640="" class="icon"><i _ngcontent-ng-c1049749640="" class="bi bi-telephone"></i></span><div _ngcontent-ng-c1049749640=""><p _ngcontent-ng-c1049749640="" class="label">Teléfono</p><p _ngcontent-ng-c1049749640="" class="value">+1 (800) ROYALE-1</p></div></div><div _ngcontent-ng-c1049749640="" class="detail-item"><span _ngcontent-ng-c1049749640="" class="icon"><i _ngcontent-ng-c1049749640="" class="bi bi-clock"></i></span><div _ngcontent-ng-c1049749640=""><p _ngcontent-ng-c1049749640="" class="label">Disponibilidad</p><p _ngcontent-ng-c1049749640="" class="value">24/7 Disponible</p></div></div></div></div><form _ngcontent-ng-c1049749640="" class="contact-form"><div _ngcontent-ng-c1049749640="" class="form-group"><input _ngcontent-ng-c1049749640="" type="text" placeholder="NOMBRE COMPLETO" required="" class="form-input" value="" jsaction="input:;"><!--container--></div><div _ngcontent-ng-c1049749640="" class="form-group"><input _ngcontent-ng-c1049749640="" type="email" placeholder="CORREO ELECTRÓNICO" required="" class="form-input" value="" jsaction="input:;"><!--container--></div><div _ngcontent-ng-c1049749640="" class="form-group"><textarea _ngcontent-ng-c1049749640="" rows="5" placeholder="TU MENSAJE" required="" class="form-input" jsaction="input:;"></textarea><!--container--></div><button _ngcontent-ng-c1049749640="" type="button" class="btn btn-luxury w-100" jsaction="click:;">ENVIAR MENSAJE</button></form></div></div></section><!--container--></main><!--container--><!--container--><app-usuarios _ngcontent-ng-c1049749640="" _nghost-ng-c2605210750="" ngh="1"><!--container--><!--container--></app-usuarios><!--container--><app-footer _ngcontent-ng-c1049749640="" _nghost-ng-c899908534="" ngh="2"><footer _ngcontent-ng-c899908534="" class="main-footer"><div _ngcontent-ng-c899908534="" class="container"><div _ngcontent-ng-c899908534="" class="row g-4 mb-5"><div _ngcontent-ng-c899908534="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c899908534="" class="text-info text-uppercase mb-4 fw-bold small">Juegos</h5><ul _ngcontent-ng-c899908534="" class="list-unstyled"><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Tragamonedas Neon</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Ruleta Royale</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Blackjack VIP</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Póker Texas</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Crash Royale</a></li></ul></div><div _ngcontent-ng-c899908534="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c899908534="" class="text-info text-uppercase mb-4 fw-bold small">Promociones</h5><ul _ngcontent-ng-c899908534="" class="list-unstyled"><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Bonos Bienvenida</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Free Spins Diarios</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Torneos</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">VIP</a></li></ul></div><div _ngcontent-ng-c899908534="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c899908534="" class="text-info text-uppercase mb-4 fw-bold small">Soporte</h5><ul _ngcontent-ng-c899908534="" class="list-unstyled"><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Chat 24/7</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Centro Ayuda</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Seguridad</a></li><li _ngcontent-ng-c899908534="" class="mb-2"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none small" jsaction="click:;">Términos</a></li></ul></div><div _ngcontent-ng-c899908534="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c899908534="" class="text-info text-uppercase mb-4 fw-bold small">Comunidad</h5><div _ngcontent-ng-c899908534="" class="social-links d-flex flex-wrap gap-3"><a _ngcontent-ng-c899908534="" href="https://discord.com" target="_blank" aria-label="Discord" class="text-secondary"><i _ngcontent-ng-c899908534="" class="bi bi-discord"></i></a><a _ngcontent-ng-c899908534="" href="https://instagram.com" target="_blank" aria-label="Instagram" class="text-secondary"><i _ngcontent-ng-c899908534="" class="bi bi-instagram"></i></a><a _ngcontent-ng-c899908534="" href="https://facebook.com" target="_blank" aria-label="Facebook" class="text-secondary"><i _ngcontent-ng-c899908534="" class="bi bi-facebook"></i></a><a _ngcontent-ng-c899908534="" href="https://x.com" target="_blank" aria-label="Twitter" class="text-secondary"><i _ngcontent-ng-c899908534="" class="bi bi-twitter-x"></i></a></div></div></div><hr _ngcontent-ng-c899908534="" class="border-secondary opacity-25"><div _ngcontent-ng-c899908534="" class="footer-bottom py-4 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3"><div _ngcontent-ng-c899908534="" class="d-flex gap-4 small text-secondary"><span _ngcontent-ng-c899908534=""><i _ngcontent-ng-c899908534="" class="bi bi-globe"></i> Español (Colombia)</span><span _ngcontent-ng-c899908534="">Tus opciones de privacidad</span></div><div _ngcontent-ng-c899908534="" class="copyright small text-secondary"> © Neon Royale Casino 2026 </div><div _ngcontent-ng-c899908534="" class="legal-links d-flex flex-wrap gap-2 small"><a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none" jsaction="click:;">Privacidad</a> | <a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none" jsaction="click:;">Aviso legal</a> | <a _ngcontent-ng-c899908534="" href="#" class="text-secondary text-decoration-none" jsaction="click:;">Marcas</a></div></div></div></footer></app-footer></app-root>
<script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"18":"t0","19":"t1","35":"t2","36":"t3"},"c":{"18":[{"i":"t0","r":2}],"19":[],"35":[{"i":"t2","r":2}],"36":[]}},{"t":{"0":"t14","1":"t15"},"c":{"0":[],"1":[]}},{},{"t":{"26":"t4","41":"t5","42":"t7","130":"t8","133":"t9","136":"t10","139":"t11","140":"t12","141":"t13","143":"t16"},"c":{"26":[{"i":"t4","r":1,"x":9}],"41":[{"i":"t5","r":9,"t":{"1":"t6"},"c":{"1":[{"i":"t6","r":1,"x":8}]}}],"42":[],"130":[],"133":[],"136":[],"139":[],"140":[],"141":[],"143":[]}}]}</script></body></html>`;