/**
 * LUMORA TEA & LIFESTYLE — Interactive Animation & Store Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA DEFINITION: 4 SIGNATURE DRINKS
  // =========================================================================
  const DRINKS = [
    {
      id: 'biscoff',
      nameTH: 'Caramel Biscoff Brown Sugar Boba',
      nameEN: 'Caramel Biscoff Brown Sugar Boba',
      titleHtmlTH: 'Caramel Biscoff<br><span class="italic font-normal text-lumora-biscoff">Brown Sugar</span> Boba',
      titleHtmlEN: 'Caramel Biscoff<br><span class="italic font-normal text-lumora-biscoff">Brown Sugar</span> Boba',
      descTH: 'ชานมสูตรเข้มข้นกลมกล่อม ราดซอสบราวน์ชูการ์เคี่ยวหอมละมุน ท็อปด้วยบิสคอฟครัมเบิ้ลกรอบและบราวน์ชูการ์คิวบ์แท้ หวานมันลงตัวในทุกคำ',
      descEN: 'Rich slow-simmered brown sugar boba milk tea crowned with crunchy caramelized Biscoff speculoos and raw brown sugar cubes.',
      price: 145,
      sweetness: 85,
      richness: 90,
      aroma: 75,
      color: '#B5743A',
      tagTH: '★ Bestseller of the Month',
      tagEN: '★ Bestseller of the Month',
      imageSrc: 'images/cup1_biscoff.jpg',
      imageFallback: 'file:///C:/Users/usEr/.gemini/antigravity/brain/dd7b257e-81fc-40fe-8e9a-0bffc69e81dc/.user_uploaded/media_1792334136202_048ad314.jpg',
      isCropped: false,
      watermark: 'BISCOFF',
      glowClass: 'bg-amber-400',
      glowLeftClass: 'bg-amber-200',
      craftTitleTH: 'Slow Flame Caramel',
      craftTitleEN: 'Slow Flame Caramel',
      craftDescTH: 'เคี่ยวน้ำตาลทรายแดงแท้ด้วยไฟอ่อนนานกว่า 4 ชั่วโมง จนได้ไซรัปกลิ่นหอมอบอวลที่เคลือบรอบขอบแก้วอย่างประณีต',
      craftDescEN: 'Hand-simmered Okinawa brown sugar cooked on low flame for 4 hours to create a luscious aromatic caramel glaze.',
      pairTitleTH: 'Caramel Biscoff Croffle',
      pairTitleEN: 'Caramel Biscoff Croffle',
      pairDescTH: 'ครอฟเฟิลเนยสดฝรั่งเศสอบกรอบ',
      pairDescEN: 'Crispy French butter croffle with caramel',
      pairPrice: 145,
      pairIcon: '🧇',
      float1: { icon: '🍪', titleTH: 'Biscoff Crunch', titleEN: 'Biscoff Crunch', subTH: 'Toasted Biscuit Topping', subEN: 'Toasted Biscuit Topping' },
      float2: { icon: '🍯', titleTH: 'Pure Brown Sugar', titleEN: 'Pure Brown Sugar', subTH: 'Slow-simmered Okinawa Style', subEN: 'Slow-simmered Okinawa Style' },
      aromaTagsTH: ['Toffee Crunch', 'Muscovado Sugar', 'Ceylon Blend'],
      aromaTagsEN: ['Toffee Crunch', 'Muscovado Sugar', 'Ceylon Blend'],
      particleColors: ['#D49A58', '#B5743A', '#F7D070', '#8B4513']
    },
    {
      id: 'thaitea',
      nameTH: 'Royal Cha Thai Supreme',
      nameEN: 'Royal Cha Thai Supreme',
      titleHtmlTH: 'Royal Cha Thai<br><span class="italic font-normal text-lumora-thaitea">Supreme Amber</span> Blend',
      titleHtmlEN: 'Royal Cha Thai<br><span class="italic font-normal text-lumora-thaitea">Supreme Amber</span> Blend',
      descTH: 'ชาไทยสูตรใบชาคั่วพิเศษกลิ่นหอมฟุ้ง สกัดสดแก้วต่อแก้ว ผสานนมสดฮอกไกโดรสสัมผัสนุ่มละมุน ไม่หวานบาดคอ',
      descEN: 'Artisanal roasted Thai tea blend brewed fresh per order, layered with silky dairy and delicate spiced amber notes.',
      price: 125,
      sweetness: 70,
      richness: 85,
      aroma: 95,
      color: '#D96826',
      tagTH: '★ Heritage Signature Recipe',
      tagEN: '★ Heritage Signature Recipe',
      imageSrc: 'images/cup2_thaitea.jpg',
      imageFallback: 'file:///C:/Users/usEr/.gemini/antigravity/brain/dd7b257e-81fc-40fe-8e9a-0bffc69e81dc/.user_uploaded/media_1792334142219_505ca777.jpg',
      isCropped: false,
      watermark: 'CHATHAI',
      glowClass: 'bg-orange-400',
      glowLeftClass: 'bg-amber-300',
      craftTitleTH: 'Traditional Cotton Extraction',
      craftTitleEN: 'Traditional Cotton Extraction',
      craftDescTH: 'บ่มใบชาอัสสัมและซีลอนจากเชียงราย สกัดด้วยวิธีโบราณเพื่อดึงความหอมอบอวลและเนื้อสัมผัสเข้มข้นนุ่มลึก',
      craftDescEN: 'Aged mountain tea leaves pulled through traditional cotton drip to extract peak amber hue and full aroma.',
      pairTitleTH: 'Thai Tea Lava Toast',
      pairTitleEN: 'Thai Tea Lava Toast',
      pairDescTH: 'บริออชโทสต์ไส้ชาไทยลาวาเยิ้มๆ',
      pairDescEN: 'Warm brioche filled with molten Thai tea custard',
      pairPrice: 165,
      pairIcon: '🍞',
      float1: { icon: '🍃', titleTH: 'Ceylon & Assam', titleEN: 'Ceylon & Assam', subTH: 'Chiang Rai High Altitude Leaves', subEN: 'Chiang Rai High Altitude Leaves' },
      float2: { icon: '🥛', titleTH: 'Velvety Dairy', titleEN: 'Velvety Dairy', subTH: 'Perfect Silkiness Balance', subEN: 'Perfect Silkiness Balance' },
      aromaTagsTH: ['Hand-roasted Ceylon', 'Golden Amber', 'Cardamom Notes'],
      aromaTagsEN: ['Hand-roasted Ceylon', 'Golden Amber', 'Cardamom Notes'],
      particleColors: ['#E6732B', '#D96826', '#FFB067', '#A6410E']
    },
    {
      id: 'matcha',
      nameTH: 'Ceremonial Uji Matcha Latte',
      nameEN: 'Ceremonial Uji Matcha Latte',
      titleHtmlTH: 'Ceremonial<br><span class="italic font-normal text-lumora-matcha">Uji Matcha</span> Cloud',
      titleHtmlEN: 'Ceremonial<br><span class="italic font-normal text-lumora-matcha">Uji Matcha</span> Cloud',
      descTH: 'มัทฉะเกรดพิธีชงชาจากเมืองอุจิ เกียวโต ตีสดแก้วต่อแก้วด้วยแปรงไม้ไผ่ โทนถั่วอูมามิกลมกล่อมและความครีมมี่ที่ลงตัว',
      descEN: 'Stone-ground ceremonial Uji matcha whisked with bamboo chasen, boasting nutty umami sweetness and vivid jade hue.',
      price: 155,
      sweetness: 45,
      richness: 80,
      aroma: 100,
      color: '#4A7C38',
      tagTH: '★ 100% Ceremonial Kyoto Grade',
      tagEN: '★ 100% Ceremonial Kyoto Grade',
      imageSrc: 'images/cup3_matcha.jpg',
      imageFallback: 'file:///C:/Users/usEr/.gemini/antigravity/brain/dd7b257e-81fc-40fe-8e9a-0bffc69e81dc/.user_uploaded/media_1792334147876_8a17aca6.jpg',
      isCropped: false,
      watermark: 'MATCHA',
      glowClass: 'bg-emerald-400',
      glowLeftClass: 'bg-teal-200',
      craftTitleTH: 'Bamboo Chasen Whisking',
      craftTitleEN: 'Bamboo Chasen Whisking',
      craftDescTH: 'ใช้ผงชาบดหินจากเกียวโต ผสมผสานด้วยแปรงไม้ไผ่ชาเซ็นในอุณหภูมิน้ำ 75°C เพื่อคงสารต้านอนุมูลอิสระและความหอมสดชื่น',
      craftDescEN: 'Stone-ground green tea whisked with bamboo at precise 75°C to preserve amino acids and rich natural umami.',
      pairTitleTH: 'Matcha Basque Cheesecake',
      pairTitleEN: 'Matcha Basque Cheesecake',
      pairDescTH: 'ชีสเค้กหน้าไหม้มัทฉะอุจิเนื้อละมุน',
      pairDescEN: 'Creamy semi-molten matcha burnt cheesecake',
      pairPrice: 185,
      pairIcon: '🍰',
      float1: { icon: '🍵', titleTH: 'Kyoto Ceremonial', titleEN: 'Kyoto Ceremonial', subTH: 'Stone-Ground 1st Flush', subEN: 'Stone-Ground 1st Flush' },
      float2: { icon: '🌿', titleTH: 'Fresh Umami', titleEN: 'Fresh Umami', subTH: 'L-Theanine Rich Calmness', subEN: 'L-Theanine Rich Calmness' },
      aromaTagsTH: ['Kyoto Stone-Ground', 'Umami Rich', 'Spring Harvest'],
      aromaTagsEN: ['Kyoto Stone-Ground', 'Umami Rich', 'Spring Harvest'],
      particleColors: ['#5B8A4D', '#4A7C38', '#A2D38A', '#2D4E20']
    },
    {
      id: 'blueberry',
      nameTH: 'Wild Blueberry Velvet Blossom',
      nameEN: 'Wild Blueberry Velvet Blossom',
      titleHtmlTH: 'Wild Blueberry<br><span class="italic font-normal text-lumora-blueberry">Velvet Blossom</span> Swirl',
      titleHtmlEN: 'Wild Blueberry<br><span class="italic font-normal text-lumora-blueberry">Velvet Blossom</span> Swirl',
      descTH: 'บลูเบอร์รีป่าเคี่ยวซอสผสานโยเกิร์ตนุ่มละมุนและเจลลี่เบอร์รี หอมสดชื่นมีชีวิตชีวาด้วยโทนลาเวนเดอร์และครีมนมสด',
      descEN: 'Nordic wild blueberry compote folded into velvety Greek yogurt with hand-crafted berry pearls and lavender whispers.',
      price: 145,
      sweetness: 65,
      richness: 75,
      aroma: 85,
      color: '#6C5893',
      tagTH: '★ Chef Seasonal Favorite',
      tagEN: '★ Chef Seasonal Favorite',
      imageSrc: 'images/cup4_blueberry.jpg',
      imageFallback: 'file:///C:/Users/usEr/.gemini/antigravity/brain/dd7b257e-81fc-40fe-8e9a-0bffc69e81dc/.user_uploaded/media_1792335061073_a561b301.jpg',
      isCropped: false,
      watermark: 'BLUEBERRY',
      glowClass: 'bg-purple-400',
      glowLeftClass: 'bg-violet-200',
      craftTitleTH: 'Small-batch Berry Compote',
      craftTitleEN: 'Small-batch Berry Compote',
      craftDescTH: 'คัดสรรบลูเบอร์รีสดนำเข้า เคี่ยวไฟอ่อนร่วมกับดอกลาเวนเดอร์ ให้รสชาติเปรี้ยวอมหวานสดชื่นและมีมิติกลิ่นหอมเฉพาะตัว',
      craftDescEN: 'Simmered wild blueberries combined with floral lavender buds to produce a luscious purple marbled swirl.',
      pairTitleTH: 'Blueberry Lavender Tart',
      pairTitleEN: 'Blueberry Lavender Tart',
      pairDescTH: 'ทาร์ตบลูเบอร์รีสดครีมลาเวนเดอร์',
      pairDescEN: 'Crisp tart shell with fresh berries & lavender cream',
      pairPrice: 175,
      pairIcon: '🫐',
      float1: { icon: '🫐', titleTH: 'Nordic Blueberries', titleEN: 'Nordic Blueberries', subTH: 'Antioxidant Superfood', subEN: 'Antioxidant Superfood' },
      float2: { icon: '🌸', titleTH: 'Lavender Whisper', titleEN: 'Lavender Whisper', subTH: 'Gentle Calming Notes', subEN: 'Gentle Calming Notes' },
      aromaTagsTH: ['Wild Blueberries', 'Greek Yogurt', 'Lavender Blossom'],
      aromaTagsEN: ['Wild Blueberries', 'Greek Yogurt', 'Lavender Blossom'],
      particleColors: ['#8262A8', '#6C5893', '#C7B6E4', '#412C63']
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT
  // =========================================================================
  let currentDrinkIndex = 0;
  let currentLanguage = 'th'; // 'th' | 'en'
  let isSoundEnabled = false;
  let cart = [];
  let appliedPromoDiscount = 0; // 0 or 0.20

  // =========================================================================
  // 3. WEB AUDIO SYNTHESIZER (Tones & Tactile Feedback)
  // =========================================================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;

      if (type === 'chime') {
        // Soft harmonic chime for drink switches
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5
        osc2.frequency.setValueAtTime(880, now);
        osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.3);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.5);
        osc2.stop(now + 0.5);
      } else if (type === 'pop') {
        // Crisp pop on add-to-cart
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'splash') {
        // Water splash / tea bubble sound
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.15);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // Toggle Sound FX Button
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIconOn = document.getElementById('sound-icon-on');
  const soundIconOff = document.getElementById('sound-icon-off');

  soundToggleBtn.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    if (isSoundEnabled) {
      initAudio();
      soundIconOn.classList.remove('hidden');
      soundIconOff.classList.add('hidden');
      soundToggleBtn.classList.add('bg-white', 'text-lumora-gold');
      playSound('chime');
      showToast(currentLanguage === 'th' ? 'เปิดเสียงเอฟเฟกต์แล้ว 🎵' : 'Sound Effects Enabled 🎵');
    } else {
      soundIconOn.classList.add('hidden');
      soundIconOff.classList.remove('hidden');
      soundToggleBtn.classList.remove('bg-white', 'text-lumora-gold');
      showToast(currentLanguage === 'th' ? 'ปิดเสียงเอฟเฟกต์แล้ว' : 'Sound Effects Muted');
    }
  });

  // =========================================================================
  // 4. AMBIENT CANVAS PARTICLES ENGINE
  // =========================================================================
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 2;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = -(Math.random() * 0.7 + 0.3);
      this.alpha = Math.random() * 0.6 + 0.2;
      this.colorList = DRINKS[currentDrinkIndex].particleColors;
      this.color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotSpeed;

      // Slight reaction to mouse cursor
      const dx = mousePos.x - this.x;
      const dy = mousePos.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.x -= (dx / dist) * 1.5;
        this.y -= (dy / dist) * 1.5;
      }

      if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;

      // Draw soft organic leaf or bubble
      if (currentDrinkIndex === 2) {
        // Matcha leaf shape
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 1.4, this.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Soft glowing circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // Initialize particles
  const particleCount = 45;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  // Burst particles on click or splash
  function triggerParticleBurst(x, y, count = 25) {
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      p.x = x;
      p.y = y;
      const angle = Math.random() * Math.PI * 2;
      const force = Math.random() * 5 + 2;
      p.speedX = Math.cos(angle) * force;
      p.speedY = Math.sin(angle) * force;
      particles.push(p);
    }
    // Clean up extra particles
    if (particles.length > 90) {
      particles.splice(0, particles.length - 70);
    }
  }

  // =========================================================================
  // 5. 3D CUP PERSPECTIVE TILT INTERACTION
  // =========================================================================
  const stage = document.getElementById('cup-stage-container');
  const card = document.getElementById('cup-interactive-card');

  if (stage && card) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 14;
      const rotateX = -((y - centerY) / centerY) * 14;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    stage.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Splash Trigger Button
  const splashBtn = document.getElementById('cup-splash-trigger');
  if (splashBtn) {
    splashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('splash');
      const rect = stage.getBoundingClientRect();
      triggerParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
      showToast(currentLanguage === 'th' ? '✨ ฟองชากระจายความหอมสดชื่น!' : '✨ Tea aroma splash released!');
    });
  }

  // =========================================================================
  // 6. HERO DRINK SWITCHER LOGIC
  // =========================================================================
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroPrice = document.getElementById('hero-price');
  const heroTagBadge = document.getElementById('hero-tag-badge');
  const heroCupImg = document.getElementById('hero-cup-img');
  const heroBgWatermark = document.getElementById('hero-bg-watermark');
  const ambientGlow = document.getElementById('ambient-glow');
  const ambientGlowLeft = document.getElementById('ambient-glow-left');

  // Meter elements
  const meterSweetnessVal = document.getElementById('meter-sweetness-val');
  const meterSweetnessBar = document.getElementById('meter-sweetness-bar');
  const meterRichnessVal = document.getElementById('meter-richness-val');
  const meterRichnessBar = document.getElementById('meter-richness-bar');
  const meterAromaVal = document.getElementById('meter-aroma-val');
  const meterAromaBar = document.getElementById('meter-aroma-bar');
  const heroAromaTags = document.getElementById('hero-aroma-tags');

  // Craft & Pairing elements
  const craftTitle = document.getElementById('craft-title');
  const craftDesc = document.getElementById('craft-desc');
  const pairTitle = document.getElementById('pair-title');
  const pairDesc = document.getElementById('pair-desc');
  const pairPrice = document.getElementById('pair-badge');
  const pairIcon = document.getElementById('pair-icon');

  // Floating ingredients
  const floatIcon1 = document.getElementById('float-icon-1');
  const floatTitle1 = document.getElementById('float-title-1');
  const floatSub1 = document.getElementById('float-sub-1');
  const floatIcon2 = document.getElementById('float-icon-2');
  const floatTitle2 = document.getElementById('float-title-2');
  const floatSub2 = document.getElementById('float-sub-2');

  // Tab buttons and dots
  const tabButtons = document.querySelectorAll('.drink-tab-btn');
  const dots = document.querySelectorAll('.drink-dot');

  function updateHeroDrink(index) {
    currentDrinkIndex = index;
    const d = DRINKS[index];

    // Sound effect
    playSound('chime');

    // Update Tab Buttons
    tabButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
        btn.classList.remove('text-lumora-muted');
      } else {
        btn.classList.remove('active');
        btn.classList.add('text-lumora-muted');
      }
    });

    // Update Dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove('bg-lumora-dark/20');
        dot.classList.add('bg-lumora-dark');
      } else {
        dot.classList.add('bg-lumora-dark/20');
        dot.classList.remove('bg-lumora-dark');
      }
    });

    // Animate Image Transition
    heroCupImg.style.opacity = '0.3';
    heroCupImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
      heroCupImg.onerror = function() {
        if (d.imageFallback && this.src !== d.imageFallback) {
          this.src = d.imageFallback;
        }
      };
      heroCupImg.src = d.imageSrc;
      heroCupImg.style.objectFit = 'contain';
      heroCupImg.style.objectPosition = 'center center';
      heroCupImg.style.opacity = '1';
      heroCupImg.style.transform = 'scale(1)';
    }, 150);

    // Text Content Update
    heroTitle.innerHTML = currentLanguage === 'th' ? d.titleHtmlTH : d.titleHtmlEN;
    heroDesc.textContent = currentLanguage === 'th' ? d.descTH : d.descEN;
    heroPrice.textContent = `฿${d.price}`;
    heroTagBadge.textContent = currentLanguage === 'th' ? d.tagTH : d.tagEN;
    heroTagBadge.style.color = d.color;
    heroBgWatermark.textContent = d.watermark;

    // Meters & Taste notes
    meterSweetnessVal.textContent = `${d.sweetness}%`;
    meterSweetnessBar.style.width = `${d.sweetness}%`;
    meterSweetnessBar.style.backgroundColor = d.color;

    meterRichnessVal.textContent = `${d.richness}%`;
    meterRichnessBar.style.width = `${d.richness}%`;
    meterRichnessBar.style.backgroundColor = d.color;

    meterAromaVal.textContent = `${d.aroma}%`;
    meterAromaBar.style.width = `${d.aroma}%`;
    meterAromaBar.style.backgroundColor = d.color;

    // Aroma tags
    const tags = currentLanguage === 'th' ? d.aromaTagsTH : d.aromaTagsEN;
    heroAromaTags.innerHTML = tags.map(t => `<span class="text-[11px] px-2.5 py-0.5 rounded-full bg-lumora-sand text-lumora-dark font-medium">${t}</span>`).join('');

    // Craft and Pairing
    craftTitle.textContent = currentLanguage === 'th' ? d.craftTitleTH : d.craftTitleEN;
    craftDesc.textContent = currentLanguage === 'th' ? d.craftDescTH : d.craftDescEN;

    pairTitle.textContent = currentLanguage === 'th' ? d.pairTitleTH : d.pairTitleEN;
    pairDesc.textContent = currentLanguage === 'th' ? d.pairDescTH : d.pairDescEN;
    pairPrice.textContent = `+ ฿${d.pairPrice}`;
    pairIcon.textContent = d.pairIcon;

    // Floating badges
    floatIcon1.textContent = d.float1.icon;
    floatTitle1.textContent = currentLanguage === 'th' ? d.float1.titleTH : d.float1.titleEN;
    floatSub1.textContent = currentLanguage === 'th' ? d.float1.subTH : d.float1.subEN;

    floatIcon2.textContent = d.float2.icon;
    floatTitle2.textContent = currentLanguage === 'th' ? d.float2.titleTH : d.float2.titleEN;
    floatSub2.textContent = currentLanguage === 'th' ? d.float2.subTH : d.float2.subEN;

    // Ambient glow colors
    ambientGlow.className = `fixed top-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10 transition-all duration-1000 ease-out opacity-40 ${d.glowClass}`;
    ambientGlowLeft.className = `fixed -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none -z-10 transition-all duration-1000 ease-out opacity-25 ${d.glowLeftClass}`;

    // Also sync the Customizer base drink selection
    syncCustomizerToBase(index);
  }

  // Tab click events
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-drink-index'), 10);
      updateHeroDrink(idx);
    });
  });

  // Next / Prev buttons
  const prevBtn = document.getElementById('prev-drink-btn');
  const nextBtn = document.getElementById('next-drink-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIdx = (currentDrinkIndex - 1 + DRINKS.length) % DRINKS.length;
      updateHeroDrink(newIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIdx = (currentDrinkIndex + 1) % DRINKS.length;
      updateHeroDrink(newIdx);
    });
  }

  // Hotspots in the Panoramic Banner
  const hotspots = document.querySelectorAll('.lineup-column-hotspot');
  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const idx = parseInt(spot.getAttribute('data-drink'), 10);
      updateHeroDrink(idx);
      document.getElementById('signature-drinks').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Quick jump cards
  const drinkCards = document.querySelectorAll('.drink-card');
  drinkCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicked the quick add button, let that handler work
      if (e.target.closest('.quick-add-btn')) return;
      const idx = parseInt(card.getAttribute('data-drink'), 10);
      updateHeroDrink(idx);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Hero "Order This Drink" CTA
  const heroOrderBtn = document.getElementById('hero-order-btn');
  if (heroOrderBtn) {
    heroOrderBtn.addEventListener('click', () => {
      const d = DRINKS[currentDrinkIndex];
      addToCart({
        name: currentLanguage === 'th' ? d.nameTH : d.nameEN,
        price: d.price,
        custom: 'Original 50% Sweet • Regular Ice',
        category: 'drinks'
      });
      playSound('pop');
    });
  }

  // "Add Combo" button
  const addComboBtn = document.getElementById('add-combo-btn');
  if (addComboBtn) {
    addComboBtn.addEventListener('click', () => {
      const d = DRINKS[currentDrinkIndex];
      const comboDiscount = Math.round((d.price + d.pairPrice) * 0.15);
      const finalComboPrice = (d.price + d.pairPrice) - comboDiscount;

      addToCart({
        name: `${currentLanguage === 'th' ? d.nameTH : d.nameEN} + ${currentLanguage === 'th' ? d.pairTitleTH : d.pairTitleEN}`,
        price: finalComboPrice,
        custom: `Combo Special (Save ฿${comboDiscount})`,
        category: 'combo'
      });
      playSound('pop');
    });
  }

  // =========================================================================
  // 7. INTERACTIVE "CRAFT YOUR CUP" STUDIO LOGIC
  // =========================================================================
  let customState = {
    baseIndex: 0,
    sweetness: '50%',
    milk: 'Whole Milk',
    milkCost: 0,
    ice: 'Regular Ice',
    toppings: [{ name: 'Golden Boba', price: 20 }]
  };

  const svgLiquidFill = document.getElementById('svg-liquid-fill');
  const svgCreamLayer = document.getElementById('svg-cream-layer');
  const svgBobaLayer = document.getElementById('svg-boba-layer');
  const svgIceLayer = document.getElementById('svg-ice-layer');
  const customPreviewName = document.getElementById('custom-preview-name');
  const previewSweetTag = document.getElementById('preview-sweet-tag');
  const previewMilkTag = document.getElementById('preview-milk-tag');
  const previewIceTag = document.getElementById('preview-ice-tag');
  const customizerTotalPrice = document.getElementById('customizer-total-price');

  const customBaseOpts = document.querySelectorAll('.custom-base-opt');
  const sweetButtons = document.querySelectorAll('.sweet-btn');
  const milkButtons = document.querySelectorAll('.milk-btn');
  const toppingCheckboxes = document.querySelectorAll('.topping-check');

  function syncCustomizerToBase(index) {
    customBaseOpts.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active', 'border-lumora-dark', 'bg-lumora-cream/40');
        btn.classList.remove('border-transparent');
      } else {
        btn.classList.remove('active', 'border-lumora-dark', 'bg-lumora-cream/40');
        btn.classList.add('border-transparent');
      }
    });
    customState.baseIndex = index;
    updateCustomizerView();
  }

  function updateCustomizerView() {
    const d = DRINKS[customState.baseIndex];

    // Liquid fill color
    if (svgLiquidFill) {
      svgLiquidFill.setAttribute('fill', d.color);
    }

    // Sweetness / Cream Layer
    if (svgCreamLayer) {
      const sweetNum = parseInt(customState.sweetness, 10);
      svgCreamLayer.setAttribute('fill-opacity', (sweetNum / 100 * 0.4 + 0.1).toFixed(2));
    }

    // Boba layer visibility
    const hasBoba = customState.toppings.some(t => t.name.includes('Boba'));
    if (svgBobaLayer) {
      svgBobaLayer.style.opacity = hasBoba ? '1' : '0';
    }

    // Name & Tags
    if (customPreviewName) {
      customPreviewName.textContent = currentLanguage === 'th' ? d.nameTH : d.nameEN;
    }
    if (previewSweetTag) {
      previewSweetTag.textContent = `Sweet ${customState.sweetness}`;
    }
    if (previewMilkTag) {
      previewMilkTag.textContent = customState.milk;
    }
    if (previewIceTag) {
      previewIceTag.textContent = customState.ice;
    }

    // Calculate Price
    const basePrice = d.price;
    const toppingsTotal = customState.toppings.reduce((acc, t) => acc + t.price, 0);
    const total = basePrice + customState.milkCost + toppingsTotal;

    if (customizerTotalPrice) {
      customizerTotalPrice.textContent = `฿${total}`;
    }

    return total;
  }

  // Base Drink click
  customBaseOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      const idx = parseInt(opt.getAttribute('data-base-id'), 10);
      syncCustomizerToBase(idx);
      playSound('pop');
    });
  });

  // Sweetness buttons
  sweetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sweetButtons.forEach(b => {
        b.classList.remove('active', 'border-2', 'border-lumora-dark', 'bg-lumora-dark', 'text-white');
        b.classList.add('border-lumora-dark/15');
      });
      btn.classList.add('active', 'border-2', 'border-lumora-dark', 'bg-lumora-dark', 'text-white');
      btn.classList.remove('border-lumora-dark/15');

      const val = btn.getAttribute('data-val');
      customState.sweetness = val;

      const label = document.getElementById('selected-sweetness-label');
      if (label) {
        if (currentLanguage === 'th') {
          label.textContent = `${val} ${val === '50%' ? '(หวานกำลังดี - แนะนำ)' : val === '0%' ? '(ไม่หวานเลย)' : ''}`;
        } else {
          label.textContent = `${val} ${val === '50%' ? '(Balanced - Recommended)' : val === '0%' ? '(Zero Sweet)' : ''}`;
        }
      }

      updateCustomizerView();
      playSound('pop');
    });
  });

  // Milk choice buttons
  milkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      milkButtons.forEach(b => {
        b.classList.remove('active', 'border-2', 'border-lumora-dark', 'bg-lumora-cream/40');
        b.classList.add('border-lumora-dark/15');
      });
      btn.classList.add('active', 'border-2', 'border-lumora-dark', 'bg-lumora-cream/40');
      btn.classList.remove('border-lumora-dark/15');

      customState.milk = btn.querySelector('span:first-child').textContent;
      customState.milkCost = parseInt(btn.getAttribute('data-cost'), 10);
      updateCustomizerView();
      playSound('pop');
    });
  });

  // Topping checkboxes
  toppingCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = [];
      toppingCheckboxes.forEach(box => {
        if (box.checked) {
          selected.push({
            name: box.getAttribute('data-name'),
            price: parseInt(box.getAttribute('data-price'), 10)
          });
        }
      });
      customState.toppings = selected;
      updateCustomizerView();
      playSound('pop');
    });
  });

  // Add Custom Drink to Bag button
  const addCustomDrinkBtn = document.getElementById('add-custom-drink-btn');
  if (addCustomDrinkBtn) {
    addCustomDrinkBtn.addEventListener('click', () => {
      const d = DRINKS[customState.baseIndex];
      const total = updateCustomizerView();
      const toppingsSummary = customState.toppings.map(t => t.name).join(', ') || 'No extra toppings';

      addToCart({
        name: currentLanguage === 'th' ? d.nameTH : d.nameEN,
        price: total,
        custom: `Sweet ${customState.sweetness} • ${customState.milk} • [${toppingsSummary}]`,
        category: 'custom'
      });
      playSound('pop');
    });
  }

  // =========================================================================
  // 8. SHOPPING CART SYSTEM & DRAWER
  // =========================================================================
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartCounterBadge = document.getElementById('cart-counter-badge');
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartDiscount = document.getElementById('cart-discount');
  const discountRow = document.getElementById('discount-row');
  const cartGrandTotal = document.getElementById('cart-grand-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  function openCart() {
    cartDrawer.classList.remove('translate-x-full');
    cartDrawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
    renderCart();
  }

  function closeCart() {
    cartDrawer.classList.add('translate-x-full');
    cartDrawerOverlay.classList.add('opacity-0', 'pointer-events-none');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCart);

  function addToCart(item) {
    // Check if duplicate with same custom options exists
    const existing = cart.find(ci => ci.name === item.name && ci.custom === item.custom);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: 'item_' + Date.now() + Math.random().toString(36).substr(2, 4),
        name: item.name,
        price: item.price,
        custom: item.custom || '',
        category: item.category || 'general',
        quantity: 1
      });
    }

    updateCartBadge();
    showToast(`${currentLanguage === 'th' ? 'เพิ่ม' : 'Added'} "${item.name}" ${currentLanguage === 'th' ? 'ลงตะกร้าแล้ว' : 'to bag'}`);
    
    // Quick bounce animation on cart button
    cartToggleBtn.classList.add('scale-110');
    setTimeout(() => cartToggleBtn.classList.remove('scale-110'), 200);
  }

  function updateCartBadge() {
    const totalQty = cart.reduce((acc, it) => acc + it.quantity, 0);
    cartCounterBadge.textContent = totalQty;
    cartDrawerCount.textContent = `${totalQty} ${currentLanguage === 'th' ? 'รายการ' : 'items'}`;
  }

  function renderCart() {
    updateCartBadge();

    if (cart.length === 0) {
      cartEmptyState.style.display = 'flex';
      cartItemsContainer.innerHTML = '';
      cartItemsContainer.appendChild(cartEmptyState);
      cartSubtotal.textContent = '฿0';
      cartGrandTotal.textContent = '฿0';
      discountRow.classList.add('hidden');
      checkoutBtn.disabled = true;
      return;
    }

    cartEmptyState.style.display = 'none';
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
      const itemSub = item.price * item.quantity;
      subtotal += itemSub;

      const itemEl = document.createElement('div');
      itemEl.className = 'bg-lumora-cream/40 rounded-2xl p-4 border border-lumora-dark/10 shadow-xs flex items-center justify-between gap-3';
      itemEl.innerHTML = `
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-xs text-lumora-dark truncate">${item.name}</h4>
          ${item.custom ? `<p class="text-[10px] text-lumora-muted mt-0.5 line-clamp-1">${item.custom}</p>` : ''}
          <span class="font-serif font-bold text-xs text-lumora-dark mt-1 block">฿${item.price}</span>
        </div>
        
        <div class="flex items-center gap-2">
          <div class="flex items-center border border-lumora-dark/15 rounded-full bg-white px-2 py-0.5">
            <button class="cart-qty-btn text-xs px-1 text-lumora-muted hover:text-lumora-dark" data-id="${item.id}" data-action="dec">-</button>
            <span class="text-xs font-bold px-2 text-lumora-dark">${item.quantity}</span>
            <button class="cart-qty-btn text-xs px-1 text-lumora-muted hover:text-lumora-dark" data-id="${item.id}" data-action="inc">+</button>
          </div>
          <button class="cart-del-btn text-lumora-muted hover:text-red-500 p-1 transition-colors" data-id="${item.id}" title="Remove">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    // Subtotal and discount
    cartSubtotal.textContent = `฿${subtotal}`;
    let grandTotal = subtotal;

    if (appliedPromoDiscount > 0) {
      const discountVal = Math.round(subtotal * appliedPromoDiscount);
      grandTotal = subtotal - discountVal;
      discountRow.classList.remove('hidden');
      cartDiscount.textContent = `-฿${discountVal}`;
    } else {
      discountRow.classList.add('hidden');
    }

    cartGrandTotal.textContent = `฿${grandTotal}`;
    checkoutBtn.disabled = false;

    // Attach listeners for quantity / delete buttons
    document.querySelectorAll('.cart-qty-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const act = b.getAttribute('data-action');
        const target = cart.find(ci => ci.id === id);
        if (target) {
          if (act === 'inc') target.quantity += 1;
          if (act === 'dec') {
            target.quantity -= 1;
            if (target.quantity <= 0) {
              cart = cart.filter(ci => ci.id !== id);
            }
          }
          playSound('pop');
          renderCart();
        }
      });
    });

    document.querySelectorAll('.cart-del-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        cart = cart.filter(ci => ci.id !== id);
        playSound('pop');
        renderCart();
      });
    });
  }

  // Quick Add buttons across the page (Drinks and Desserts)
  const quickAddButtons = document.querySelectorAll('.quick-add-btn');
  quickAddButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'), 10);
      const cat = btn.getAttribute('data-category');

      addToCart({
        name: name,
        price: price,
        custom: cat === 'desserts' ? 'Freshly baked' : 'Signature Standard',
        category: cat
      });
      playSound('pop');
    });
  });

  // Promo Code Validation
  const promoInput = document.getElementById('promo-code-input');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoFeedback = document.getElementById('promo-feedback');

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'LUMORA20') {
        appliedPromoDiscount = 0.20;
        promoFeedback.className = 'text-[11px] font-medium text-emerald-600 block';
        promoFeedback.textContent = currentLanguage === 'th' ? '✓ ใช้โค้ดสำเร็จ! ได้รับส่วนลด 20%' : '✓ Promo code applied! 20% Discount';
        playSound('chime');
        renderCart();
      } else {
        promoFeedback.className = 'text-[11px] font-medium text-red-500 block';
        promoFeedback.textContent = currentLanguage === 'th' ? '✕ รหัสโปรโมชั่นไม่ถูกต้อง (ลอง LUMORA20)' : '✕ Invalid code (Try LUMORA20)';
      }
    });
  }

  // Checkout Modal
  const checkoutModal = document.getElementById('checkout-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOrderSummary = document.getElementById('modal-order-summary');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      closeCart();

      // Build summary text
      modalOrderSummary.innerHTML = cart.map(i => `<div>• ${i.name} x ${i.quantity} (฿${i.price * i.quantity})</div>`).join('') + 
        `<div class="pt-2 font-bold text-lumora-dark border-t border-lumora-sand mt-2">Total Paid: ${cartGrandTotal.textContent}</div>`;

      // Open Modal
      checkoutModal.classList.remove('opacity-0', 'pointer-events-none');
      checkoutModal.querySelector('div').classList.remove('scale-95');
      playSound('chime');

      // Clear cart
      cart = [];
      updateCartBadge();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      checkoutModal.classList.add('opacity-0', 'pointer-events-none');
      checkoutModal.querySelector('div').classList.add('scale-95');
    });
  }

  // =========================================================================
  // 9. TOAST NOTIFICATIONS
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toastText.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 2800);
  }

  // =========================================================================
  // 10. BILINGUAL SUPPORT (TH / EN)
  // =========================================================================
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const currentLangText = document.getElementById('current-lang-text');

  const TRANSLATIONS = {
    announcement: {
      th: '✨ LUMORA Season Special: ซื้อเครื่องดื่มพร้อมขนมหวาน รับส่วนลดทันที 20% | โค้ด: LUMORA20',
      en: '✨ LUMORA Seasonal Perk: Pair any signature drink with patisserie for 20% off | Code: LUMORA20'
    },
    nav_drinks: { th: 'เครื่องดื่มซิกเนเจอร์', en: 'Signature Drinks' },
    nav_customizer: { th: 'ครีเอทแก้วโปรด', en: 'Beverage Lab' },
    nav_desserts: { th: 'เมนูของหวาน', en: 'Patisserie' },
    nav_story: { th: 'เรื่องราวของเรา', en: 'Philosophy' },
    nav_location: { th: 'สาขาและเวลาเปิด', en: 'Locations' },
    cart: { th: 'ตะกร้า', en: 'Bag' },
    tasting_notes: { th: 'รสสัมผัสและกลิ่นโน้ต (Tasting Profile)', en: 'Sensory Tasting Profile' },
    sweetness: { th: 'ความหวานละมุน', en: 'Sweetness' },
    richness: { th: 'ความเข้มข้นมันนัว', en: 'Body & Richness' },
    tea_aroma: { th: 'กลิ่นหอมใบชา', en: 'Tea Aroma' },
    price_starting: { th: 'ราคาเริ่มต้น', en: 'Starting From' },
    order_now: { th: 'สั่งแก้วนี้เลย', en: 'Order This Drink' },
    tap_to_taste: { th: 'คลิกเพื่อลิ้มลองเอฟเฟกต์ฟองชา ✨', en: 'Tap for Tea Aroma Splash ✨' },
    artisan_process: { th: 'ขั้นตอนการรังสรรค์', en: 'Artisan Process' },
    best_pair: { th: 'แนะนำทานคู่กับ', en: 'Recommended Pairing' },
    add_combo: { th: 'สั่งเป็นเซ็ตคอมโบ (ลด 15%)', en: 'Order Combo Set (15% Off)' },
    the_lineup_tag: { th: 'The Signature Quad', en: 'The Signature Quad' },
    the_lineup_title: { th: '4 แก้วไอคอนิกจาก LUMORA', en: 'LUMORA Iconic Four' },
    menu_subtitle: { th: 'Curated Beverage Collection', en: 'Curated Beverage Collection' },
    menu_title: { th: 'เมนูเครื่องดื่มซิกเนเจอร์', en: 'Signature Beverage Menu' },
    menu_desc: { th: 'คัดสรรใบชาออร์แกนิกและวัตถุดิบคุณภาพสูงสุดจากไร่ชาชั้นนำ ชงสดแก้วต่อแก้วเพื่อรสสัมผัสที่ดีที่สุด', en: 'Sourced from organic high-altitude estates, brewed per cup for supreme clarity and finish.' },
    customizer_tag: { th: 'Interactive Beverage Lab', en: 'Interactive Beverage Lab' },
    customizer_title: { th: 'LUMORA Studio: ออกแบบแก้วในแบบคุณ', en: 'Craft Your Signature Cup' },
    customizer_desc: { th: 'เลือกระดับความหวาน ชนิดของนม และท็อปปิ้งพรีเมียมได้ตามใจ พร้อมดูภาพจำลองและราคาสรุปแบบเรียลไทม์', en: 'Tailor sweetness, artisan dairy, and crafted toppings with instant interactive feedback.' },
    dessert_tag: { th: 'Artisanal Patisserie & Bakery', en: 'Artisanal Patisserie & Bakery' },
    dessert_title: { th: 'ของหวานคู่ชา รังสรรค์พิเศษ', en: 'Hand-Crafted Patisserie' },
    dessert_desc: { th: 'เบเกอรี่และของหวานอบสดใหม่ทุกเช้า ออกแบบรสชาติให้เข้าคู่กับ 4 ซิกเนเจอร์ดริ้งก์อย่างสมบูรณ์แบบ', en: 'Freshly baked every dawn to harmonize harmoniously with our signature teas.' },
    story_title: { th: 'นิยามใหม่ของการดื่มชา<br><span class="italic font-normal text-lumora-gold">ความสงบ ละมุน และความรื่นรมย์</span>', en: 'Redefining Tea Rituals<br><span class="italic font-normal text-lumora-gold">Stillness, Craft & Delight</span>' },
    story_p1: { th: 'ที่ LUMORA (ลูโมร่า) เราเชื่อว่าชาไม่ใช่เพียงแค่เครื่องดื่มดับกระหาย แต่คือช่วงเวลาแห่งความสงบผ่อนคลายในวิถีชีวิตคนเมือง เราเดินทางค้นหาใบชาจากแหล่งปลูกธรรมชาติ ทั้งชาอัสสัมจากดอยสูงในเชียงราย และมัทฉะเกรดพิธีชงชาจากอุจิ เกียวโต', en: 'At LUMORA, tea is more than refreshment—it is an oasis of calm. We journey across misty mountains in Chiang Rai and historic stone mills in Uji, Kyoto to select single-origin harvests.' },
    story_p2: { th: 'ทุกแก้วถูกออกแบบด้วยความเข้าใจในเคมีของรสชาติ ตั้งแต่การควบคุมอุณหภูมิน้ำ การสกัดด้วยเวลาที่แม่นยำ ไปจนถึงการจับคู่กับของหวานอบสดใหม่ เพื่อมอบสุนทรียภาพแห่งการดื่มชาที่ดีที่สุดให้กับคุณ', en: 'Every pour is calibrated with thermal precision, honoring the leaves’ inherent botanical notes paired with daily baked French patisserie.' },
    location_tag: { th: 'Visit Our Tea Space', en: 'Visit Our Tea Space' },
    location_title: { th: 'แวะมาสัมผัสบรรยากาศคาเฟ่', en: 'Find Your Nearest Sanctuary' },
    cart_title: { th: 'รายการในตะกร้า', en: 'Your Bag' },
    cart_empty: { th: 'ตะกร้าของคุณยังว่างอยู่', en: 'Your bag is empty' },
    cart_empty_sub: { th: 'เลือกเครื่องดื่มซิกเนเจอร์หรือของหวานที่ชอบ แล้วเพลิดเพลินกับรสชาติสุดพิเศษ', en: 'Explore our drinks or desserts to begin your sensory journey.' },
    apply_code: { th: 'ใช้โค้ด', en: 'Apply' },
    subtotal: { th: 'ยอดรวมสินค้า', en: 'Subtotal' },
    grand_total: { th: 'ยอดรวมทั้งสิ้น', en: 'Grand Total' },
    checkout: { th: 'ดำเนินการสั่งซื้อ (Checkout)', en: 'Proceed to Checkout' },
    order_success: { th: 'คำสั่งซื้อสำเร็จเรียบร้อย!', en: 'Order Placed Successfully!' },
    order_success_desc: { th: 'ขอบคุณที่ร่วมดื่มด่ำกับ LUMORA ทางบาริสต้ากำลังเริ่มเตรียมเครื่องดื่มและของหวานแก้วโปรดของคุณด้วยความพิถีพิถัน', en: 'Thank you for choosing LUMORA. Our tea masters are currently preparing your curated beverages with utmost care.' },
    back_to_cafe: { th: 'กลับสู่หน้าหลัก', en: 'Back to Home' }
  };

  function updateLanguage(lang) {
    currentLanguage = lang;
    currentLangText.textContent = lang.toUpperCase();

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    });

    // Update the hero content for current drink
    updateHeroDrink(currentDrinkIndex);
    renderCart();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLanguage === 'th' ? 'en' : 'th';
      updateLanguage(nextLang);
      playSound('pop');
    });
  }

  // =========================================================================
  // 11. INITIALIZATION
  // =========================================================================
  updateHeroDrink(0);
  updateCustomizerView();
  renderCart();

  // Initial greeting toast
  setTimeout(() => {
    showToast('ยินดีต้อนรับสู่ LUMORA Tea & Lifestyle ✨');
  }, 1200);

});
