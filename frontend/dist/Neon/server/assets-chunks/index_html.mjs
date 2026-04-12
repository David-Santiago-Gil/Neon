export default `<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>NeonRoyaleCasino</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;900&amp;family=Inter:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="styles.css"><style ng-app-id="ng">
[_nghost-ng-c1507535871] {
  display: block;
  overflow-x: hidden;
  width: 100%;
}
[_ngcontent-ng-c1507535871]:root {
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
*[_ngcontent-ng-c1507535871] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html[_ngcontent-ng-c1507535871] {
  scroll-padding-top: var(--header-height);
  scroll-behavior: smooth;
  background-color: var(--bg-dark);
}
body[_ngcontent-ng-c1507535871] {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  overflow-x: hidden;
  line-height: 1.6;
}
body[_ngcontent-ng-c1507535871]::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(11, 11, 15, 0.92), rgba(11, 11, 15, 0.92)), url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  opacity: 0.35;
}
[_ngcontent-ng-c1507535871]::-webkit-scrollbar {
  width: 6px;
}
[_ngcontent-ng-c1507535871]::-webkit-scrollbar-track {
  background: transparent;
}
[_ngcontent-ng-c1507535871]::-webkit-scrollbar-thumb {
  background: rgba(201, 168, 76, 0.3);
  border-radius: 3px;
}
[_ngcontent-ng-c1507535871]::-webkit-scrollbar-thumb:hover {
  background: rgba(201, 168, 76, 0.5);
}
.reveal-on-scroll[_ngcontent-ng-c1507535871] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-on-scroll.visible[_ngcontent-ng-c1507535871] {
  opacity: 1;
  transform: translateY(0);
}
.hero-section[_ngcontent-ng-c1507535871] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--header-height);
}
.hero-background[_ngcontent-ng-c1507535871] {
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
.hero-content[_ngcontent-ng-c1507535871] {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: _ngcontent-ng-c1507535871_fadeInUp 1s ease-out;
}
@keyframes _ngcontent-ng-c1507535871_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-title[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: var(--text-primary);
}
.hero-title[_ngcontent-ng-c1507535871]   .highlight[_ngcontent-ng-c1507535871] {
  color: var(--gold-luxury);
  text-shadow: 0 0 60px var(--gold-shadow);
}
.hero-subtitle[_ngcontent-ng-c1507535871] {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-secondary);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-weight: 400;
}
.hero-buttons[_ngcontent-ng-c1507535871] {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.parallax-divider[_ngcontent-ng-c1507535871] {
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
.parallax-overlay[_ngcontent-ng-c1507535871] {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}
.parallax-content[_ngcontent-ng-c1507535871] {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
}
.parallax-content[_ngcontent-ng-c1507535871]   h2[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 16px;
}
.parallax-content[_ngcontent-ng-c1507535871]   p[_ngcontent-ng-c1507535871] {
  font-size: 1.1rem;
  color: var(--text-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
}
.gallery-section[_ngcontent-ng-c1507535871] {
  padding: 120px 0;
  background: var(--bg-dark);
  position: relative;
}
.gallery-section[_ngcontent-ng-c1507535871]::before {
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
.section-header[_ngcontent-ng-c1507535871] {
  text-align: center;
  margin-bottom: 70px;
}
.section-header[_ngcontent-ng-c1507535871]   h2[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: var(--text-primary);
}
.section-subtitle[_ngcontent-ng-c1507535871] {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.gold-line[_ngcontent-ng-c1507535871] {
  height: 1px;
  width: 80px;
  background: var(--gold-luxury);
  margin: 0 auto;
  opacity: 0.6;
}
.rooms-grid[_ngcontent-ng-c1507535871] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 1024px) {
  .rooms-grid[_ngcontent-ng-c1507535871] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .rooms-grid[_ngcontent-ng-c1507535871] {
    grid-template-columns: 1fr;
  }
}
.room-card-wrapper[_ngcontent-ng-c1507535871] {
  transition-delay: calc(var(--i, 0) * 0.1s);
}
.room-card[_ngcontent-ng-c1507535871] {
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
.room-card[_ngcontent-ng-c1507535871]:hover {
  border-color: rgba(201, 168, 76, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 168, 76, 0.15);
}
.room-image[_ngcontent-ng-c1507535871] {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.room-pattern[_ngcontent-ng-c1507535871] {
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
.room-overlay[_ngcontent-ng-c1507535871] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 100%);
  z-index: 2;
}
.room-content[_ngcontent-ng-c1507535871] {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-primary);
}
.room-content[_ngcontent-ng-c1507535871]   h3[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.room-content[_ngcontent-ng-c1507535871]   p[_ngcontent-ng-c1507535871] {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
}
.room-footer[_ngcontent-ng-c1507535871] {
  padding: 16px 20px;
  background: var(--bg-darker);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-subtle);
}
.room-badge[_ngcontent-ng-c1507535871] {
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
.btn-play[_ngcontent-ng-c1507535871] {
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
.btn-play[_ngcontent-ng-c1507535871]:hover {
  background: var(--gold-luxury);
  color: var(--bg-dark);
}
.games-section[_ngcontent-ng-c1507535871] {
  padding: 120px 0;
  background: var(--bg-darker);
}
.games-grid[_ngcontent-ng-c1507535871] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 50px;
}
@media (max-width: 1024px) {
  .games-grid[_ngcontent-ng-c1507535871] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .games-grid[_ngcontent-ng-c1507535871] {
    grid-template-columns: 1fr;
  }
}
.game-card[_ngcontent-ng-c1507535871] {
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}
.game-card[_ngcontent-ng-c1507535871]:hover {
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.game-image[_ngcontent-ng-c1507535871] {
  position: relative;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.game-badge[_ngcontent-ng-c1507535871] {
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
.game-overlay[_ngcontent-ng-c1507535871] {
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
.game-card[_ngcontent-ng-c1507535871]:hover   .game-overlay[_ngcontent-ng-c1507535871] {
  opacity: 1;
}
.btn-play-game[_ngcontent-ng-c1507535871] {
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
.btn-play-game[_ngcontent-ng-c1507535871]:hover {
  background: var(--gold-light);
  transform: scale(1.05);
}
.game-info[_ngcontent-ng-c1507535871] {
  padding: 16px 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.game-category[_ngcontent-ng-c1507535871] {
  font-size: 0.7rem;
  color: var(--gold-luxury);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 6px;
  font-weight: 600;
}
.game-info[_ngcontent-ng-c1507535871]   h4[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: var(--text-primary);
}
.game-rating[_ngcontent-ng-c1507535871] {
  display: flex;
  gap: 3px;
}
.game-rating[_ngcontent-ng-c1507535871]   .bi[_ngcontent-ng-c1507535871] {
  color: rgba(201, 168, 76, 0.2);
  font-size: 0.85rem;
  transition: color 0.2s ease;
}
.game-rating[_ngcontent-ng-c1507535871]   .bi.active[_ngcontent-ng-c1507535871] {
  color: var(--gold-luxury);
}
.promo-section[_ngcontent-ng-c1507535871] {
  padding: 160px 0;
  background: transparent;
  position: relative;
  overflow: hidden;
}
.promo-section[_ngcontent-ng-c1507535871]::before {
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
.promo-content[_ngcontent-ng-c1507535871] {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 120px;
  align-items: center;
  position: relative;
  z-index: 1;
}
@media (max-width: 992px) {
  .promo-content[_ngcontent-ng-c1507535871] {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
}
.vip-badge[_ngcontent-ng-c1507535871] {
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
.premium-title[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: -2px;
  line-height: 1.05;
  text-transform: uppercase;
}
.gold-text[_ngcontent-ng-c1507535871] {
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
.premium-description[_ngcontent-ng-c1507535871] {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.7;
  margin: 0 0 60px 0;
}
@media (max-width: 992px) {
  .premium-description[_ngcontent-ng-c1507535871] {
    margin-left: auto;
    margin-right: auto;
  }
}
.promo-benefits[_ngcontent-ng-c1507535871] {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}
.benefit-item[_ngcontent-ng-c1507535871] {
  display: flex;
  align-items: center;
  gap: 25px;
  transition: all 0.4s ease;
}
.benefit-item[_ngcontent-ng-c1507535871]:hover {
  transform: translateX(15px);
}
.benefit-icon[_ngcontent-ng-c1507535871] {
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
.benefit-info[_ngcontent-ng-c1507535871]   h4[_ngcontent-ng-c1507535871] {
  margin-bottom: 6px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: #fff;
  letter-spacing: 0.5px;
}
.benefit-info[_ngcontent-ng-c1507535871]   p[_ngcontent-ng-c1507535871] {
  font-size: 1rem;
  margin-bottom: 0;
  color: var(--text-secondary);
}
.btn-luxury-glow[_ngcontent-ng-c1507535871] {
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
.btn-luxury-glow[_ngcontent-ng-c1507535871]:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 25px 60px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.6);
}
.promo-visual-liquid[_ngcontent-ng-c1507535871] {
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
.liquid-overlay[_ngcontent-ng-c1507535871] {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%);
  mix-blend-mode: multiply;
}
.form-group[_ngcontent-ng-c1507535871] {
  margin-bottom: 25px;
  position: relative;
}
.error-msg[_ngcontent-ng-c1507535871] {
  color: #ff3e3e;
  font-size: 0.72rem;
  margin-top: 6px;
  display: block;
  font-weight: 700;
  letter-spacing: 0.3px;
  animation: _ngcontent-ng-c1507535871_errorAppear 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.input-error[_ngcontent-ng-c1507535871] {
  border-color: #ff3e3e !important;
  background: rgba(255, 62, 62, 0.03) !important;
  box-shadow: 0 0 10px rgba(255, 62, 62, 0.1) !important;
}
@keyframes _ngcontent-ng-c1507535871_errorAppear {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.promo-list[_ngcontent-ng-c1507535871]   li[_ngcontent-ng-c1507535871]   .bi[_ngcontent-ng-c1507535871] {
  color: var(--gold-luxury);
  font-size: 1.1rem;
  flex-shrink: 0;
}
.promo-visual[_ngcontent-ng-c1507535871] {
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
.promo-visual[_ngcontent-ng-c1507535871]::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background:
    radial-gradient(
      circle,
      rgba(201, 168, 76, 0.08) 0%,
      transparent 70%);
  animation: _ngcontent-ng-c1507535871_pulse-large 6s ease-in-out infinite;
}
@keyframes _ngcontent-ng-c1507535871_pulse-large {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}
.contact-section[_ngcontent-ng-c1507535871] {
  padding: 120px 0;
  background: var(--bg-darker);
}
.contact-wrapper[_ngcontent-ng-c1507535871] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
@media (max-width: 768px) {
  .contact-wrapper[_ngcontent-ng-c1507535871] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.contact-info[_ngcontent-ng-c1507535871]   h2[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: var(--text-primary);
}
.contact-info[_ngcontent-ng-c1507535871]    > p[_ngcontent-ng-c1507535871] {
  color: var(--text-muted);
  margin-bottom: 40px;
  line-height: 1.8;
  font-size: 0.95rem;
}
.contact-details[_ngcontent-ng-c1507535871] {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.detail-item[_ngcontent-ng-c1507535871] {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.detail-item[_ngcontent-ng-c1507535871]   .icon[_ngcontent-ng-c1507535871] {
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
.detail-item[_ngcontent-ng-c1507535871]   .icon[_ngcontent-ng-c1507535871]   .bi[_ngcontent-ng-c1507535871] {
  font-size: 1.1rem;
  color: var(--gold-luxury);
}
.detail-item[_ngcontent-ng-c1507535871]   .label[_ngcontent-ng-c1507535871] {
  font-size: 0.75rem;
  color: var(--gold-luxury);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 4px;
}
.detail-item[_ngcontent-ng-c1507535871]   .value[_ngcontent-ng-c1507535871] {
  color: var(--text-primary);
  font-size: 0.95rem;
}
.contact-form[_ngcontent-ng-c1507535871] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group[_ngcontent-ng-c1507535871] {
  display: flex;
  flex-direction: column;
}
.form-input[_ngcontent-ng-c1507535871] {
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
.form-input[_ngcontent-ng-c1507535871]::placeholder {
  color: var(--text-muted);
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.form-input[_ngcontent-ng-c1507535871]:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--gold-luxury);
  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
}
.btn[_ngcontent-ng-c1507535871] {
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
.btn-luxury[_ngcontent-ng-c1507535871] {
  background: var(--gold-luxury);
  color: var(--bg-dark);
}
.btn-luxury[_ngcontent-ng-c1507535871]:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--gold-shadow);
}
.btn-outline-luxury[_ngcontent-ng-c1507535871] {
  background: transparent;
  color: var(--gold-luxury);
  border: 1px solid rgba(201, 168, 76, 0.4);
}
.btn-outline-luxury[_ngcontent-ng-c1507535871]:hover {
  background: rgba(201, 168, 76, 0.1);
  border-color: var(--gold-luxury);
  transform: translateY(-2px);
}
.w-100[_ngcontent-ng-c1507535871] {
  width: 100%;
}
.modal-overlay[_ngcontent-ng-c1507535871] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: _ngcontent-ng-c1507535871_fadeIn 0.3s ease;
}
@keyframes _ngcontent-ng-c1507535871_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-content[_ngcontent-ng-c1507535871] {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 48px 40px;
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: _ngcontent-ng-c1507535871_slideUp 0.3s ease;
}
@keyframes _ngcontent-ng-c1507535871_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-close[_ngcontent-ng-c1507535871] {
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
.modal-close[_ngcontent-ng-c1507535871]:hover {
  color: var(--gold-luxury);
}
.modal-title[_ngcontent-ng-c1507535871] {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 32px;
  text-align: center;
  color: var(--text-primary);
}
.modal-form[_ngcontent-ng-c1507535871] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.container[_ngcontent-ng-c1507535871] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.container-fluid[_ngcontent-ng-c1507535871] {
  padding: 0 24px;
}
.text-center[_ngcontent-ng-c1507535871] {
  text-align: center;
}
.text-white[_ngcontent-ng-c1507535871] {
  color: var(--text-primary);
}
.text-secondary[_ngcontent-ng-c1507535871] {
  color: var(--text-secondary);
}
.mb-0[_ngcontent-ng-c1507535871] {
  margin-bottom: 0;
}
.mb-2[_ngcontent-ng-c1507535871] {
  margin-bottom: 10px;
}
.mb-3[_ngcontent-ng-c1507535871] {
  margin-bottom: 20px;
}
.mb-4[_ngcontent-ng-c1507535871] {
  margin-bottom: 30px;
}
.mb-5[_ngcontent-ng-c1507535871] {
  margin-bottom: 50px;
}
.mt-5[_ngcontent-ng-c1507535871] {
  margin-top: 50px;
}
.gap-3[_ngcontent-ng-c1507535871] {
  gap: 20px;
}
.gap-4[_ngcontent-ng-c1507535871] {
  gap: 30px;
}
@media (max-width: 768px) {
  .hero-buttons[_ngcontent-ng-c1507535871] {
    flex-direction: column;
    align-items: center;
  }
  .btn[_ngcontent-ng-c1507535871] {
    width: 100%;
    text-align: center;
  }
  .section-header[_ngcontent-ng-c1507535871]   h2[_ngcontent-ng-c1507535871] {
    font-size: 1.6rem;
  }
  .parallax-divider[_ngcontent-ng-c1507535871] {
    height: 50vh;
    min-height: 350px;
    background-attachment: scroll;
  }
}
/*# sourceMappingURL=/app.css.map */</style><style ng-app-id="ng">
[_nghost-ng-c3882029627] {
  display: block;
}
.main-header[_ngcontent-ng-c3882029627] {
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
.container[_ngcontent-ng-c3882029627] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}
.d-flex[_ngcontent-ng-c3882029627] {
  display: flex;
}
.align-items-center[_ngcontent-ng-c3882029627] {
  align-items: center;
}
.justify-content-between[_ngcontent-ng-c3882029627] {
  justify-content: space-between;
}
.h-100[_ngcontent-ng-c3882029627] {
  height: 100%;
}
.gap-2[_ngcontent-ng-c3882029627] {
  gap: 10px;
}
.gap-3[_ngcontent-ng-c3882029627] {
  gap: 16px;
}
.gap-4[_ngcontent-ng-c3882029627] {
  gap: 30px;
}
.logo[_ngcontent-ng-c3882029627] {
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
.logo[_ngcontent-ng-c3882029627]:hover {
  opacity: 0.85;
}
.neon-text[_ngcontent-ng-c3882029627] {
  color: #f0f0f0;
}
.royale-text[_ngcontent-ng-c3882029627] {
  color: #C9A84C;
}
.nav-menu[_ngcontent-ng-c3882029627] {
  display: flex;
  gap: 32px;
}
.nav-menu[_ngcontent-ng-c3882029627]   a[_ngcontent-ng-c3882029627] {
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
.nav-menu[_ngcontent-ng-c3882029627]   a[_ngcontent-ng-c3882029627]::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #C9A84C;
  transition: width 0.3s ease;
}
.nav-menu[_ngcontent-ng-c3882029627]   a[_ngcontent-ng-c3882029627]:hover {
  color: #C9A84C;
}
.nav-menu[_ngcontent-ng-c3882029627]   a[_ngcontent-ng-c3882029627]:hover::after {
  width: 100%;
}
.auth-buttons[_ngcontent-ng-c3882029627] {
  display: flex;
  gap: 12px;
  align-items: center;
}
.btn[_ngcontent-ng-c3882029627] {
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
.btn-outline-light[_ngcontent-ng-c3882029627] {
  background: transparent;
  color: rgba(240, 240, 240, 0.6);
  border: 1px solid rgba(240, 240, 240, 0.15);
}
.btn-outline-light[_ngcontent-ng-c3882029627]:hover {
  border-color: rgba(201, 168, 76, 0.4);
  color: #C9A84C;
}
.btn-warning[_ngcontent-ng-c3882029627] {
  background: #C9A84C;
  color: #0b0b0f;
}
.btn-warning[_ngcontent-ng-c3882029627]:hover {
  background: #E2C87A;
  transform: translateY(-1px);
}
.btn-sm[_ngcontent-ng-c3882029627] {
  padding: 8px 20px;
  font-size: 0.75rem;
}
.px-3[_ngcontent-ng-c3882029627] {
  padding-left: 20px;
  padding-right: 20px;
}
.shadow-sm[_ngcontent-ng-c3882029627] {
  box-shadow: none;
}
.text-dark[_ngcontent-ng-c3882029627] {
  color: #0b0b0f;
}
.fw-bold[_ngcontent-ng-c3882029627] {
  font-weight: 700;
}
.d-none[_ngcontent-ng-c3882029627] {
  display: none;
}
.d-lg-flex[_ngcontent-ng-c3882029627] {
  display: flex;
}
@media (max-width: 1024px) {
  .nav-menu[_ngcontent-ng-c3882029627] {
    gap: 20px;
  }
  .nav-menu[_ngcontent-ng-c3882029627]   a[_ngcontent-ng-c3882029627] {
    font-size: 0.75rem;
  }
}
@media (max-width: 768px) {
  .main-header[_ngcontent-ng-c3882029627] {
    height: 70px;
  }
  .logo[_ngcontent-ng-c3882029627] {
    font-size: 1.2rem;
  }
  .d-lg-flex[_ngcontent-ng-c3882029627] {
    display: none;
  }
  .nav-menu[_ngcontent-ng-c3882029627] {
    display: none;
  }
  .auth-buttons[_ngcontent-ng-c3882029627] {
    gap: 8px;
  }
  .btn-sm[_ngcontent-ng-c3882029627] {
    padding: 6px 14px;
    font-size: 0.7rem;
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
    linear-gradient(var(--bg-dark), var(--bg-dark)) padding-box,
    conic-gradient(
      from 0deg,
      #00f0ff 0%,
      transparent 15%,
      #ff006e 25%,
      transparent 40%,
      #C9A84C 50%,
      transparent 65%,
      #00f0ff 75%,
      transparent 90%,
      #ff006e 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinClockwise 8s linear infinite;
  filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.3));
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
      rgba(0, 240, 255, 0.15) 0%,
      transparent 25%,
      rgba(255, 0, 110, 0.15) 50%,
      transparent 75%,
      rgba(0, 240, 255, 0.15) 100%) border-box;
}
.orbit-middle[_ngcontent-ng-c2605210750] {
  width: 88%;
  height: 88%;
  border: 1.5px solid transparent;
  background:
    linear-gradient(var(--bg-dark), var(--bg-dark)) padding-box,
    conic-gradient(
      from 90deg,
      #ff006e 0%,
      transparent 20%,
      #C9A84C 35%,
      transparent 55%,
      #00f0ff 70%,
      transparent 90%,
      #ff006e 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinCounterClockwise 12s linear infinite;
  filter: drop-shadow(0 0 6px rgba(255, 0, 110, 0.25));
}
.orbit-inner[_ngcontent-ng-c2605210750] {
  width: 76%;
  height: 76%;
  border: 1px solid transparent;
  background:
    linear-gradient(var(--bg-dark), var(--bg-dark)) padding-box,
    conic-gradient(
      from 45deg,
      #C9A84C 0%,
      transparent 15%,
      #00f0ff 30%,
      transparent 50%,
      #C9A84C 65%,
      transparent 85%,
      #00f0ff 100%) border-box;
  animation: _ngcontent-ng-c2605210750_spinClockwise 15s linear infinite;
  filter: drop-shadow(0 0 4px rgba(201, 168, 76, 0.3));
}
.orbit-dot[_ngcontent-ng-c2605210750] {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 12px #00f0ff, 0 0 24px rgba(0, 240, 255, 0.5);
}
.orbit-outer[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  animation: _ngcontent-ng-c2605210750_dotPulse 2s ease-in-out infinite;
}
.orbit-middle[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  width: 5px;
  height: 5px;
  background: #ff006e;
  box-shadow: 0 0 10px #ff006e, 0 0 20px rgba(255, 0, 110, 0.5);
  animation: _ngcontent-ng-c2605210750_dotPulse 2.5s ease-in-out infinite;
}
.orbit-inner[_ngcontent-ng-c2605210750]   .orbit-dot[_ngcontent-ng-c2605210750] {
  width: 4px;
  height: 4px;
  background: #C9A84C;
  box-shadow: 0 0 8px #C9A84C, 0 0 16px rgba(201, 168, 76, 0.5);
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
      rgba(0, 240, 255, 0.06) 0%,
      rgba(255, 0, 110, 0.03) 40%,
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
  background: rgba(17, 17, 24, 0.85);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 240, 255, 0.15);
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(0, 240, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: _ngcontent-ng-c2605210750_formAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  transition: all 0.4s ease;
}
.glass-form-register[_ngcontent-ng-c2605210750] {
  width: 360px;
  padding: 36px 28px 28px;
}
.glass-form.loading[_ngcontent-ng-c2605210750] {
  border-color: rgba(201, 168, 76, 0.4);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(201, 168, 76, 0.1);
}
.glass-form.success[_ngcontent-ng-c2605210750] {
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 255, 136, 0.15);
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
  background: rgba(255, 0, 110, 0.2);
  border-color: rgba(255, 0, 110, 0.4);
  color: #ff006e;
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
      rgba(0, 240, 255, 0.15),
      rgba(255, 0, 110, 0.1));
  border: 1px solid rgba(0, 240, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00f0ff;
  font-size: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
  animation: _ngcontent-ng-c2605210750_iconFloat 3s ease-in-out infinite;
}
.register-icon[_ngcontent-ng-c2605210750] {
  background:
    linear-gradient(
      135deg,
      rgba(201, 168, 76, 0.15),
      rgba(255, 0, 110, 0.1));
  border-color: rgba(201, 168, 76, 0.25);
  color: #C9A84C;
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.15);
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
  border: 1px solid rgba(255, 255, 255, 0.08);
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
  border-color: rgba(0, 240, 255, 0.4);
  background: rgba(0, 240, 255, 0.03);
  box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.06), 0 0 20px rgba(0, 240, 255, 0.08);
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
  color: rgba(0, 240, 255, 0.4);
  font-size: 1rem;
  transition: color 0.3s ease;
  z-index: 2;
}
.input-group[_ngcontent-ng-c2605210750]:focus-within   .input-icon[_ngcontent-ng-c2605210750] {
  color: #00f0ff;
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
      #00f0ff,
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
      #00f0ff 0%,
      #0080ff 50%,
      #00f0ff 100%);
  background-size: 200% 100%;
  color: #000;
  box-shadow: 0 8px 32px rgba(0, 240, 255, 0.25);
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
      rgba(255, 255, 255, 0.2),
      transparent);
  transition: left 0.6s ease;
}
.submit-btn[_ngcontent-ng-c2605210750]:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 240, 255, 0.4);
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
      #C9A84C 0%,
      #e8c45a 50%,
      #C9A84C 100%);
  background-size: 200% 100%;
  box-shadow: 0 8px 32px rgba(201, 168, 76, 0.25);
}
.register-btn[_ngcontent-ng-c2605210750]:hover:not(:disabled) {
  box-shadow: 0 12px 40px rgba(201, 168, 76, 0.4);
}
.btn-loader[_ngcontent-ng-c2605210750] {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
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
  color: #00f0ff;
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
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
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
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid rgba(0, 255, 136, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff88;
  font-size: 2rem;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.2);
  animation: _ngcontent-ng-c2605210750_successPulse 1.5s ease-in-out infinite;
}
.register-success-icon[_ngcontent-ng-c2605210750] {
  background: rgba(201, 168, 76, 0.1);
  border-color: rgba(201, 168, 76, 0.3);
  color: #C9A84C;
  box-shadow: 0 0 30px rgba(201, 168, 76, 0.2);
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
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.2);
  }
  50% {
    box-shadow: 0 0 50px rgba(0, 255, 136, 0.4);
  }
}
.success-state[_ngcontent-ng-c2605210750]   h2[_ngcontent-ng-c2605210750] {
  font-family: "Outfit", sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 4px;
  color: #00ff88;
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
[_nghost-ng-c486018838] {
  display: block;
}
.main-footer[_ngcontent-ng-c486018838] {
  padding: 80px 0 40px;
  background: #060608;
  border-top: 1px solid rgba(201, 168, 76, 0.08);
}
.container[_ngcontent-ng-c486018838] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.row[_ngcontent-ng-c486018838] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
@media (max-width: 768px) {
  .row[_ngcontent-ng-c486018838] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .row[_ngcontent-ng-c486018838] {
    grid-template-columns: 1fr;
  }
}
.g-4[_ngcontent-ng-c486018838] {
  gap: 30px;
}
.mb-5[_ngcontent-ng-c486018838] {
  margin-bottom: 50px;
}
.mb-4[_ngcontent-ng-c486018838] {
  margin-bottom: 24px;
}
.mb-2[_ngcontent-ng-c486018838] {
  margin-bottom: 10px;
}
.text-info[_ngcontent-ng-c486018838] {
  color: #C9A84C;
}
.text-uppercase[_ngcontent-ng-c486018838] {
  text-transform: uppercase;
}
.fw-bold[_ngcontent-ng-c486018838] {
  font-weight: 600;
}
.small[_ngcontent-ng-c486018838] {
  font-size: 0.85rem;
}
.list-unstyled[_ngcontent-ng-c486018838] {
  list-style: none;
  padding: 0;
}
.text-secondary[_ngcontent-ng-c486018838] {
  color: rgba(240, 240, 240, 0.4);
}
.text-decoration-none[_ngcontent-ng-c486018838] {
  text-decoration: none;
}
a[_ngcontent-ng-c486018838] {
  transition: color 0.3s ease;
}
.list-unstyled[_ngcontent-ng-c486018838]   a[_ngcontent-ng-c486018838]:hover {
  color: #C9A84C;
}
.footer-bottom[_ngcontent-ng-c486018838] {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(201, 168, 76, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
@media (max-width: 768px) {
  .footer-bottom[_ngcontent-ng-c486018838] {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
.d-flex[_ngcontent-ng-c486018838] {
  display: flex;
}
.flex-wrap[_ngcontent-ng-c486018838] {
  flex-wrap: wrap;
}
.flex-column[_ngcontent-ng-c486018838] {
  flex-direction: column;
}
.flex-lg-row[_ngcontent-ng-c486018838] {
  flex-direction: row;
}
.align-items-center[_ngcontent-ng-c486018838] {
  align-items: center;
}
.justify-content-between[_ngcontent-ng-c486018838] {
  justify-content: space-between;
}
.gap-3[_ngcontent-ng-c486018838] {
  gap: 16px;
}
.gap-4[_ngcontent-ng-c486018838] {
  gap: 30px;
}
.gap-2[_ngcontent-ng-c486018838] {
  gap: 10px;
}
.border-secondary[_ngcontent-ng-c486018838] {
  border-color: rgba(240, 240, 240, 0.08);
}
.opacity-25[_ngcontent-ng-c486018838] {
  opacity: 0.25;
}
.py-4[_ngcontent-ng-c486018838] {
  padding-top: 24px;
  padding-bottom: 24px;
}
.social-links[_ngcontent-ng-c486018838] {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.social-links[_ngcontent-ng-c486018838]   a[_ngcontent-ng-c486018838] {
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
.social-links[_ngcontent-ng-c486018838]   a[_ngcontent-ng-c486018838]:hover {
  border-color: rgba(201, 168, 76, 0.3);
  color: #C9A84C;
  transform: translateY(-2px);
}
.legal-links[_ngcontent-ng-c486018838] {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.legal-links[_ngcontent-ng-c486018838]   a[_ngcontent-ng-c486018838] {
  color: rgba(240, 240, 240, 0.35);
  text-decoration: none;
}
.legal-links[_ngcontent-ng-c486018838]   a[_ngcontent-ng-c486018838]:hover {
  color: #C9A84C;
}
.copyright[_ngcontent-ng-c486018838] {
  color: rgba(240, 240, 240, 0.3);
}
hr[_ngcontent-ng-c486018838] {
  border: none;
  height: 1px;
  background: rgba(201, 168, 76, 0.06);
  margin: 30px 0;
}
.bi[_ngcontent-ng-c486018838] {
  font-size: 1rem;
}
/*# sourceMappingURL=/footer.css.map */</style></head>

<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","input"],[]);</script>
  <app-root ng-version="21.2.8" _nghost-ng-c1507535871="" ngh="2" ng-server-context="ssg"><app-header _ngcontent-ng-c1507535871="" _nghost-ng-c3882029627="" ngh="0"><header _ngcontent-ng-c3882029627="" class="main-header glass"><div _ngcontent-ng-c3882029627="" class="container d-flex align-items-center justify-content-between h-100"><div _ngcontent-ng-c3882029627="" class="logo d-flex gap-2 align-items-center" jsaction="click:;"><span _ngcontent-ng-c3882029627="" class="neon-text">NEON</span><span _ngcontent-ng-c3882029627="" class="royale-text">ROYALE</span></div><nav _ngcontent-ng-c3882029627="" class="nav-menu d-none d-lg-flex gap-4"><a _ngcontent-ng-c3882029627="" jsaction="click:;">Inicio</a><a _ngcontent-ng-c3882029627="" jsaction="click:;">Juegos</a><a _ngcontent-ng-c3882029627="" jsaction="click:;">Promociones</a><a _ngcontent-ng-c3882029627="" jsaction="click:;">Contacto</a></nav><div _ngcontent-ng-c3882029627="" class="auth-buttons d-flex gap-3"><button _ngcontent-ng-c3882029627="" class="btn btn-outline-light btn-sm px-3" jsaction="click:;">Login</button><button _ngcontent-ng-c3882029627="" class="btn btn-warning btn-sm px-3 shadow-sm text-dark fw-bold" jsaction="click:;">Register</button></div></div></header></app-header><main _ngcontent-ng-c1507535871=""><section _ngcontent-ng-c1507535871="" id="hero" class="hero-section"><div _ngcontent-ng-c1507535871="" class="hero-content"><h1 _ngcontent-ng-c1507535871="" class="hero-title">NEON <span _ngcontent-ng-c1507535871="" class="highlight">ROYALE</span></h1><p _ngcontent-ng-c1507535871="" class="hero-subtitle">The Ultimate Gaming Distinction</p><div _ngcontent-ng-c1507535871="" class="hero-buttons"><button _ngcontent-ng-c1507535871="" class="btn btn-luxury" jsaction="click:;">EXPLORAR SALAS</button><button _ngcontent-ng-c1507535871="" class="btn btn-outline-luxury" jsaction="click:;">MEMBRESIA VIP</button></div></div><div _ngcontent-ng-c1507535871="" class="hero-background"></div></section><section _ngcontent-ng-c1507535871="" id="galeria" class="gallery-section"><div _ngcontent-ng-c1507535871="" class="container"><div _ngcontent-ng-c1507535871="" class="section-header reveal-on-scroll"><h2 _ngcontent-ng-c1507535871="">SALAS DE JUEGO PREMIUM</h2><p _ngcontent-ng-c1507535871="" class="section-subtitle">Descubre nuestras exclusivas salas de juego</p><div _ngcontent-ng-c1507535871="" class="gold-line"></div></div><div _ngcontent-ng-c1507535871="" class="rooms-grid"><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/1.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">SALA PREMIUM</h3><p _ngcontent-ng-c1507535871="">Experiencia VIP exclusiva</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">ELITE</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/2.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">RULETA DORADA</h3><p _ngcontent-ng-c1507535871="">Juego clásico de mesa</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">POPULAR</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/3.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">POKER ELITE</h3><p _ngcontent-ng-c1507535871="">Torneos de alto nivel</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">NUEVO</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/baca.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">BACCARAT ROYAL</h3><p _ngcontent-ng-c1507535871="">Juego de elegancia</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">PREMIUM</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/black.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">BLACKJACK VIP</h3><p _ngcontent-ng-c1507535871="">Mesa privada 24/7</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">EXCLUSIVO</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/dorado.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">SLOTS LUXE</h3><p _ngcontent-ng-c1507535871="">Máquinas modernas</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">HOT</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/elite.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">CLUB ELITE</h3><p _ngcontent-ng-c1507535871="">Acceso restringido</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">VIP</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/neon.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">NEON LOUNGE</h3><p _ngcontent-ng-c1507535871="">Ambiente futurista</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">TRENDING</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><div _ngcontent-ng-c1507535871="" class="room-card-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="room-card"><div _ngcontent-ng-c1507535871="" class="room-image" style="background-image: url(img/sala.jpg);"><div _ngcontent-ng-c1507535871="" class="room-pattern"></div><div _ngcontent-ng-c1507535871="" class="room-overlay"></div><div _ngcontent-ng-c1507535871="" class="room-content"><h3 _ngcontent-ng-c1507535871="">SALA PRIVADA</h3><p _ngcontent-ng-c1507535871="">Máxima discreción</p></div></div><div _ngcontent-ng-c1507535871="" class="room-footer"><span _ngcontent-ng-c1507535871="" class="room-badge">ULTIMATE</span><button _ngcontent-ng-c1507535871="" class="btn-play">JUGAR AHORA</button></div></div></div><!--container--></div></div></section><section _ngcontent-ng-c1507535871="" class="parallax-divider parallax-bg-1"><div _ngcontent-ng-c1507535871="" class="parallax-overlay"></div><div _ngcontent-ng-c1507535871="" class="parallax-content"><h2 _ngcontent-ng-c1507535871="">LA EXPERIENCIA DEFINITIVA</h2><p _ngcontent-ng-c1507535871="">Donde el lujo se encuentra con la emoción</p></div></section><section _ngcontent-ng-c1507535871="" id="juegos" class="games-section"><div _ngcontent-ng-c1507535871="" class="container"><div _ngcontent-ng-c1507535871="" class="section-header reveal-on-scroll"><h2 _ngcontent-ng-c1507535871="">COLECCIÓN DE JUEGOS</h2><div _ngcontent-ng-c1507535871="" class="gold-line"></div></div><div _ngcontent-ng-c1507535871="" class="games-grid"><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/Slots.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge">NUEVO</div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Slots</p><h4 _ngcontent-ng-c1507535871="">Neon Slots</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/gold.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge">HOT</div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Mesa</p><h4 _ngcontent-ng-c1507535871="">Gold Roulette</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/VIP.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge"><!--ngetn--></div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Cartas</p><h4 _ngcontent-ng-c1507535871="">Blackjack VIP</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/Master.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge">HOT</div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Cartas</p><h4 _ngcontent-ng-c1507535871="">Poker Master</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/clash.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge">NUEVO</div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Crash</p><h4 _ngcontent-ng-c1507535871="">Crash Royale</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/Wheel.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge"><!--ngetn--></div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">En Vivo</p><h4 _ngcontent-ng-c1507535871="">Mega Wheel</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/Keno.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge"><!--ngetn--></div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Lotería</p><h4 _ngcontent-ng-c1507535871="">Golden Keno</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star"></i><!--container--></div></div></div></div><div _ngcontent-ng-c1507535871="" class="game-card-item reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="game-card"><div _ngcontent-ng-c1507535871="" class="game-image" style="background-image: url(img/Baccarat.jpg);"><div _ngcontent-ng-c1507535871="" class="game-badge">NUEVO</div><div _ngcontent-ng-c1507535871="" class="game-overlay"><button _ngcontent-ng-c1507535871="" class="btn-play-game">JUGAR</button></div></div><div _ngcontent-ng-c1507535871="" class="game-info"><p _ngcontent-ng-c1507535871="" class="game-category">Mesa</p><h4 _ngcontent-ng-c1507535871="">Baccarat Gold</h4><div _ngcontent-ng-c1507535871="" class="game-rating"><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><i _ngcontent-ng-c1507535871="" class="bi bi-star-fill active"></i><!--container--></div></div></div></div><!--container--></div></div></section><section _ngcontent-ng-c1507535871="" class="parallax-divider parallax-bg-2"><div _ngcontent-ng-c1507535871="" class="parallax-overlay"></div><div _ngcontent-ng-c1507535871="" class="parallax-content"><h2 _ngcontent-ng-c1507535871="">GANA EN GRANDE</h2><p _ngcontent-ng-c1507535871="">Promociones exclusivas para nuestros miembros</p></div></section><section _ngcontent-ng-c1507535871="" id="promociones" class="promo-section"><div _ngcontent-ng-c1507535871="" class="container"><div _ngcontent-ng-c1507535871="" class="promo-content reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="promo-text"><div _ngcontent-ng-c1507535871="" class="vip-badge">STATUS ELITE</div><h2 _ngcontent-ng-c1507535871="" class="premium-title">BIENVENIDA <span _ngcontent-ng-c1507535871="" class="gold-text">MAGISTRAL</span></h2><p _ngcontent-ng-c1507535871="" class="premium-description">Diseñado exclusivamente para conocedores del lujo. Eleva tu experiencia al nivel más alto de distinción en el mundo del gaming.</p><div _ngcontent-ng-c1507535871="" class="promo-benefits"><div _ngcontent-ng-c1507535871="" class="benefit-item"><div _ngcontent-ng-c1507535871="" class="benefit-icon"><i _ngcontent-ng-c1507535871="" class="bi bi-gem"></i></div><div _ngcontent-ng-c1507535871="" class="benefit-info"><h4 _ngcontent-ng-c1507535871="">Paquete de Bienvenida</h4><p _ngcontent-ng-c1507535871="">Bono del 100% hasta <span _ngcontent-ng-c1507535871="" class="highlight">\$10,000</span></p></div></div><div _ngcontent-ng-c1507535871="" class="benefit-item"><div _ngcontent-ng-c1507535871="" class="benefit-icon"><i _ngcontent-ng-c1507535871="" class="bi bi-stars"></i></div><div _ngcontent-ng-c1507535871="" class="benefit-info"><h4 _ngcontent-ng-c1507535871="">Cortesías VIP</h4><p _ngcontent-ng-c1507535871="">50 giros de cortesía en slots de alta gama</p></div></div><div _ngcontent-ng-c1507535871="" class="benefit-item"><div _ngcontent-ng-c1507535871="" class="benefit-icon"><i _ngcontent-ng-c1507535871="" class="bi bi-shield-check"></i></div><div _ngcontent-ng-c1507535871="" class="benefit-info"><h4 _ngcontent-ng-c1507535871="">Acceso Prioritario</h4><p _ngcontent-ng-c1507535871="">Salas privadas y concierge dedicado 24/7</p></div></div></div><button _ngcontent-ng-c1507535871="" class="btn btn-luxury-glow">RECLAMAR MEMBRESÍA</button></div><div _ngcontent-ng-c1507535871="" class="promo-image"><div _ngcontent-ng-c1507535871="" class="promo-visual-liquid"><div _ngcontent-ng-c1507535871="" class="liquid-overlay"></div></div></div></div></div></section><section _ngcontent-ng-c1507535871="" id="contacto" class="contact-section"><div _ngcontent-ng-c1507535871="" class="container"><div _ngcontent-ng-c1507535871="" class="contact-wrapper reveal-on-scroll"><div _ngcontent-ng-c1507535871="" class="contact-info"><h2 _ngcontent-ng-c1507535871="">CONCIERGE VIP</h2><p _ngcontent-ng-c1507535871="">Nuestro equipo de soporte de alta prioridad está disponible 24/7 para garantizar tu experiencia perfecta.</p><div _ngcontent-ng-c1507535871="" class="contact-details"><div _ngcontent-ng-c1507535871="" class="detail-item"><span _ngcontent-ng-c1507535871="" class="icon"><i _ngcontent-ng-c1507535871="" class="bi bi-envelope"></i></span><div _ngcontent-ng-c1507535871=""><p _ngcontent-ng-c1507535871="" class="label">Email</p><p _ngcontent-ng-c1507535871="" class="value">exclusive@neonroyale.com</p></div></div><div _ngcontent-ng-c1507535871="" class="detail-item"><span _ngcontent-ng-c1507535871="" class="icon"><i _ngcontent-ng-c1507535871="" class="bi bi-telephone"></i></span><div _ngcontent-ng-c1507535871=""><p _ngcontent-ng-c1507535871="" class="label">Teléfono</p><p _ngcontent-ng-c1507535871="" class="value">+1 (800) ROYALE-1</p></div></div><div _ngcontent-ng-c1507535871="" class="detail-item"><span _ngcontent-ng-c1507535871="" class="icon"><i _ngcontent-ng-c1507535871="" class="bi bi-clock"></i></span><div _ngcontent-ng-c1507535871=""><p _ngcontent-ng-c1507535871="" class="label">Disponibilidad</p><p _ngcontent-ng-c1507535871="" class="value">24/7 Disponible</p></div></div></div></div><form _ngcontent-ng-c1507535871="" class="contact-form"><div _ngcontent-ng-c1507535871="" class="form-group"><input _ngcontent-ng-c1507535871="" type="text" placeholder="NOMBRE COMPLETO" required="" class="form-input" value="" jsaction="input:;"><!--container--></div><div _ngcontent-ng-c1507535871="" class="form-group"><input _ngcontent-ng-c1507535871="" type="email" placeholder="CORREO ELECTRÓNICO" required="" class="form-input" value="" jsaction="input:;"><!--container--></div><div _ngcontent-ng-c1507535871="" class="form-group"><textarea _ngcontent-ng-c1507535871="" rows="5" placeholder="TU MENSAJE" required="" class="form-input" jsaction="input:;"></textarea><!--container--></div><button _ngcontent-ng-c1507535871="" type="button" class="btn btn-luxury w-100" jsaction="click:;">ENVIAR MENSAJE</button></form></div></div></section></main><app-usuarios _ngcontent-ng-c1507535871="" _nghost-ng-c2605210750="" ngh="1"><!--container--><!--container--></app-usuarios><app-footer _ngcontent-ng-c1507535871="" _nghost-ng-c486018838="" ngh="0"><footer _ngcontent-ng-c486018838="" class="main-footer"><div _ngcontent-ng-c486018838="" class="container"><div _ngcontent-ng-c486018838="" class="row g-4 mb-5"><div _ngcontent-ng-c486018838="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c486018838="" class="text-info text-uppercase mb-4 fw-bold small">Juegos</h5><ul _ngcontent-ng-c486018838="" class="list-unstyled"><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Tragamonedas Neon</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Ruleta Royale</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Blackjack VIP</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Póker Texas</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Crash Royale</a></li></ul></div><div _ngcontent-ng-c486018838="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c486018838="" class="text-info text-uppercase mb-4 fw-bold small">Promociones</h5><ul _ngcontent-ng-c486018838="" class="list-unstyled"><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Bonos Bienvenida</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Free Spins Diarios</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Torneos</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">VIP</a></li></ul></div><div _ngcontent-ng-c486018838="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c486018838="" class="text-info text-uppercase mb-4 fw-bold small">Soporte</h5><ul _ngcontent-ng-c486018838="" class="list-unstyled"><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Chat 24/7</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Centro Ayuda</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Seguridad</a></li><li _ngcontent-ng-c486018838="" class="mb-2"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none small">Términos</a></li></ul></div><div _ngcontent-ng-c486018838="" class="col-6 col-lg-3"><h5 _ngcontent-ng-c486018838="" class="text-info text-uppercase mb-4 fw-bold small">Comunidad</h5><div _ngcontent-ng-c486018838="" class="social-links d-flex flex-wrap gap-3"><a _ngcontent-ng-c486018838="" href="#" aria-label="Discord" class="text-secondary"><i _ngcontent-ng-c486018838="" class="bi bi-discord"></i></a><a _ngcontent-ng-c486018838="" href="#" aria-label="Instagram" class="text-secondary"><i _ngcontent-ng-c486018838="" class="bi bi-instagram"></i></a><a _ngcontent-ng-c486018838="" href="#" aria-label="Facebook" class="text-secondary"><i _ngcontent-ng-c486018838="" class="bi bi-facebook"></i></a><a _ngcontent-ng-c486018838="" href="#" aria-label="Twitter" class="text-secondary"><i _ngcontent-ng-c486018838="" class="bi bi-twitter-x"></i></a></div></div></div><hr _ngcontent-ng-c486018838="" class="border-secondary opacity-25"><div _ngcontent-ng-c486018838="" class="footer-bottom py-4 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3"><div _ngcontent-ng-c486018838="" class="d-flex gap-4 small text-secondary"><span _ngcontent-ng-c486018838=""><i _ngcontent-ng-c486018838="" class="bi bi-globe"></i> Español (Colombia)</span><span _ngcontent-ng-c486018838="">Tus opciones de privacidad</span></div><div _ngcontent-ng-c486018838="" class="copyright small text-secondary"> © Neon Royale Casino 2026 </div><div _ngcontent-ng-c486018838="" class="legal-links d-flex flex-wrap gap-2 small"><a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none">Privacidad</a> | <a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none">Aviso legal</a> | <a _ngcontent-ng-c486018838="" href="#" class="text-secondary text-decoration-none">Marcas</a></div></div></div></footer></app-footer></app-root>
<script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"0":"t6","1":"t7"},"c":{"0":[],"1":[]}},{"t":{"26":"t0","42":"t1","130":"t3","133":"t4","136":"t5"},"c":{"26":[{"i":"t0","r":1,"x":9}],"42":[{"i":"t1","r":1,"t":{"15":"t2"},"c":{"15":[{"i":"t2","r":1,"x":5}]},"x":8}],"130":[],"133":[],"136":[]}}]}</script></body></html>`;