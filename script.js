:root {
  --pink-100: #fff5fb;
  --pink-200: #ffe4f0;
  --pink-300: #ffcfe4;
  --pink-400: #ffb5d6;
  --pink-500: #ff78b2;
  --pink-600: #f65aa6;
  --blue-100: #eef7ff;
  --blue-200: #dfeeff;
  --blue-300: #cfe6ff;
  --blue-400: #b3d4ff;
  --blue-500: #7fa9ff;
  --blue-600: #5e8df6;
  --text: #2a2d38;
  --muted: #6d7283;
  --bg: #fffafc;
  --card: #ffffff;
  --line: #f1e9ef;
  --shadow: 0 18px 45px rgba(170, 152, 189, 0.12);
  --shadow-soft: 0 10px 25px rgba(158, 118, 169, 0.08);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: "Vazirmatn", sans-serif;
  background: linear-gradient(180deg, #fffafc 0%, #f7f8ff 100%);
  color: var(--text);
  line-height: 1.7;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
button { cursor: pointer; border: none; }
.container { width: min(1200px, calc(100% - 32px)); margin: 0 auto; }

.topbar {
  background: linear-gradient(90deg, var(--pink-500), var(--blue-500));
  color: white;
  font-size: 0.8rem;
}
.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  gap: 12px;
}

.header {
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 0;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 180px;
}
.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
  display: grid;
  place-items: center;
  color: white;
  font-weight: 900;
  box-shadow: var(--shadow-soft);
}
.brand-text {
  display: flex;
  align-items: center;
  line-height: 1;
}
.brand-name {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #334155;
}

.searchbox {
  flex: 1;
  max-width: 720px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 56px;
  background: linear-gradient(180deg, #fff, #f9f9ff);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 0 16px;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
}
.searchbox:focus-within {
  border-color: rgba(245, 122, 180, 0.4);
  box-shadow: 0 0 0 5px rgba(248, 126, 189, 0.08);
  transform: translateY(-2px);
}
.searchbox input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 0.95rem;
}
.searchbox input::placeholder { color: #8d93a6; }
.search-icon { font-size: 1.6rem; color: var(--muted); }

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.login-btn {
  border-radius: 14px;
  background: linear-gradient(135deg, var(--pink-100), var(--blue-100));
  border: 1px solid var(--line);
  padding: 12px 18px;
  font-weight: 800;
  color: var(--text);
  transition: all 0.3s ease;
}
.login-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(158, 118, 169, 0.15);
}
.cart-btn {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid var(--line);
  font-size: 1.25rem;
  transition: all 0.3s ease;
}
.cart-btn:hover {
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 12px 24px rgba(158, 118, 169, 0.15);
}
.cart-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pink-500), var(--blue-500));
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
}

.main-nav {
  background: #fff;
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 58px;
  overflow-x: auto;
  white-space: nowrap;
}
.nav-item {
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  transition: all 0.2s ease;
}
.nav-item:hover {
  color: var(--pink-600);
}
.loc-item { color: var(--muted); }

.page-content { padding: 26px 0 30px; }

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(250px, 1fr);
  gap: 20px;
}

.hero-slider {
  position: relative;
  min-height: 390px;
  background: #fff;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.slide {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s ease;
  background: linear-gradient(135deg, #fff9fb, #f6f9ff);
}
.slide.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.slide-copy {
  padding: 42px 34px;
}
.badge {
  display: inline-block;
  background: rgba(246, 90, 166, 0.12);
  color: var(--pink-600);
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
}
.badge-blue {
  background: rgba(94, 141, 246, 0.12);
  color: var(--blue-600);
}
.badge-pink {
  background: rgba(255, 120, 178, 0.12);
  color: var(--pink-600);
}
.slide-copy h1 {
  margin: 18px 0 12px;
  font-size: clamp(2rem, 2vw + 1rem, 3.1rem);
  line-height: 1.1;
}
.slide-copy p {
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 24px;
}

.btn-primary {
  padding: 15px 26px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--pink-500), var(--blue-500));
  color: white;
  font-weight: 800;
  box-shadow: 0 16px 30px rgba(115, 133, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transition: right 0.4s ease;
}
.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 40px rgba(115, 133, 255, 0.35);
}
.btn-primary:hover::before {
  right: 100%;
}
.btn-primary:active {
  transform: translateY(-2px);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 12px 22px rgba(31, 45, 80, 0.12);
  font-size: 1.7rem;
  color: var(--text);
  z-index: 2;
  transition: all 0.3s ease;
}
.slider-btn:hover {
  background: white;
  box-shadow: 0 16px 32px rgba(31, 45, 80, 0.2);
  transform: translateY(-50%) scale(1.1);
}
.slider-btn.prev { right: 18px; }
.slider-btn.next { left: 18px; }
.slider-dots {
  position: absolute;
  bottom: 18px;
  right: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}
.dot {
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
}
.dot:hover {
  background: rgba(255,255,255,0.95);
  transform: scale(1.2);
}
.dot.active {
  width: 26px;
  border-radius: 999px;
  background: white;
}

.promo-stack {
  display: grid;
  gap: 18px;
}
.mini-card {
  min-height: 185px;
  border-radius: 26px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: white;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.mini-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(170, 152, 189, 0.18);
}
.mini-card-pink {
  background: linear-gradient(135deg, #ff9ec7 0%, #ff6ca9 100%);
}
.mini-card-blue {
  background: linear-gradient(135deg, #90c8ff 0%, #6e8cff 100%);
}
.mini-tag {
  display: inline-block;
  width: fit-content;
  background: rgba(255,255,255,0.18);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.72rem;
  font-weight: 700;
}
.mini-card h3 {
  margin-top: 18px;
  font-size: 1.8rem;
  line-height: 1.15;
}
.mini-card p { margin-top: 6px; opacity: 0.96; }

.category-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin-top: 30px;
}
.category-card {
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(173, 182, 198, 0.12);
  border-radius: 22px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
  cursor: pointer;
}
.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(158, 118, 169, 0.12);
  background: white;
}
.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--pink-100), var(--blue-100));
  font-size: 1.6rem;
  transition: transform 0.3s ease;
}
.category-card:hover .icon {
  transform: scale(1.12) rotate(5deg);
}
.category-card span {
  font-weight: 700;
  font-size: 0.92rem;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: 46px 0 18px;
}
.section-kicker {
  display: inline-block;
  color: var(--pink-600);
  font-size: 0.8rem;
  font-weight: 800;
  margin-bottom: 5px;
}
.section-header h2 {
  font-size: clamp(1.6rem, 1vw + 0.9rem, 2.5rem);
  font-weight: 900;
}
.section-header a {
  color: var(--blue-600);
  font-weight: 800;
  transition: all 0.2s ease;
}
.section-header a:hover {
  transform: translateX(-3px);
}

.product-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.product-card {
  position: relative;
  background: rgba(255,255,255,0.95);
  border-radius: 22px;
  padding: 18px 14px 16px;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(150, 164, 186, 0.08);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 24px 48px rgba(170, 152, 189, 0.15);
  border-color: rgba(245, 122, 180, 0.2);
}
.card-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 7px 10px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--pink-500), var(--blue-500));
  color: white;
  font-size: 0.72rem;
  font-weight: 800;
  animation: badgePulse 2s ease-in-out infinite;
}
@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
  transition: transform 0.4s ease;
}
.product-card:hover img {
  transform: scale(1.06);
}
.product-card h3 {
  font-size: 1.02rem;
  min-height: 52px;
  margin-bottom: 12px;
}
.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}
.price { font-weight: 900; font-size: 1.1rem; }
.old-price {
  color: #9aa0af;
  text-decoration: line-through;
  font-size: 0.8rem;
}
.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f7b500;
  font-size: 0.82rem;
}
.rating small { color: var(--muted); }

.btn-add-to-cart {
  width: 100%;
  padding: 12px;
  margin-top: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-add-to-cart::after {
  content: '✓';
  position: absolute;
  left: -30px;
  opacity: 0;
  transition: all 0.3s ease;
  font-weight: bold;
}
.btn-add-to-cart:hover {
  background: linear-gradient(135deg, var(--pink-500), var(--blue-500));
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(158, 118, 169, 0.2);
}
.btn-add-to-cart:active {
  transform: translateY(0);
}
.btn-add-to-cart:hover::after {
  left: 12px;
  opacity: 1;
}

.promo-banners {
  margin-top: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.banner {
  min-height: 160px;
  border-radius: 26px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  color: white;
  padding: 26px 22px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.banner:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(170, 152, 189, 0.18);
}
.banner-pink { background: linear-gradient(135deg, #ffb8d8, #ff7aa8); }
.banner-blue { background: linear-gradient(135deg, #82b9ff, #6a8fee); }
.banner span { display: block; opacity: 0.9; margin-bottom: 8px; }
.banner h3 { font-size: clamp(1.3rem, 1vw + 0.8rem, 2rem); }

.btn-secondary {
  background: rgba(255,255,255,0.18);
  color: white;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 800;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  background: rgba(255,255,255,0.28);
  transform: translateY(-2px);
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
}
.brand-box {
  min-height: 120px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.96);
  border: 1px solid var(--line);
  border-radius: 20px;
  font-weight: 900;
  color: #49566b;
  font-size: 1.15rem;
  transition: all 0.3s ease;
}
.brand-box:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 24px rgba(158, 118, 169, 0.12);
  border-color: rgba(245, 122, 180, 0.2);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.footer {
  background: #fff;
  border-top: 1px solid var(--line);
  margin-top: 42px;
  padding: 32px 0 18px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 22px;
}
.footer h4, .footer h5 { margin-bottom: 12px; }
.footer p, .footer li { color: var(--muted); font-size: 0.95rem; }
.footer ul { list-style: none; display: grid; gap: 8px; }
.store-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.store-badges span {
  background: linear-gradient(180deg, var(--pink-100), var(--blue-100));
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 800;
  transition: all 0.3s ease;
  cursor: pointer;
}
.store-badges span:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(158, 118, 169, 0.12);
}
.footer-bottom {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.85rem;
}

@media (max-width: 980px) {
  .hero-section { grid-template-columns: 1fr; }
  .category-strip { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .product-strip, .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .brand-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 720px) {
  .header-inner {
    flex-wrap: wrap;
    justify-content: center;
  }
  .searchbox { order: 3; width: 100%; max-width: none; }
  .main-nav { display: none; }
  .category-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .promo-banners, .product-strip, .product-grid, .brand-grid, .footer-grid { grid-template-columns: 1fr; }
  .slide { grid-template-columns: 1fr; }
  .slide img { display: none; }
  .slide-copy { padding: 32px 24px; }
  .topbar-inner { justify-content: center; flex-wrap: wrap; }
}
