// Main JavaScript file for Portfolio Website - Spesialisasi Cabling Cat 5e, Fiber Splicing & IP Gateway

// Data Proyek Detail untuk Modal (Fokus Cabling Cat 5e, Fiber Optik, dan IP/Gateway)
const projectsData = {
  1: {
    title: "Crimping & Penarikan Kabel LAN UTP Cat 5e",
    category: "Crimping Cat 5e",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    description: "Pemasangan dan penarikan kabel LAN UTP Cat 5e untuk 10 unit komputer client dan workstation. Dilakukan pemotongan presisi, pengurutan warna standar T568B, crimping konektor RJ45, dan verifikasi kelancaran 8-pin menggunakan LAN cable tester.",
    tech: ["Kabel UTP Cat 5e", "Konektor RJ45", "Standar T568B & T568A", "Tang Crimping", "LAN Cable Tester"],
    features: [
      "Crimping konektor RJ45 presisi sesuai susunan warna standar internasional TIA/EIA-568B",
      "Pembuatan kabel model Straight-Through (PC ke Switch) dan Crossover (PC ke PC / Switch ke Switch)",
      "Pengujian setiap kabel menggunakan LAN Tester (memastikan seluruh lampu indikator 1-8 menyala berurutan tanpa silang)",
      "Pemasangan modular jack RJ45 pada faceplate dinding dan perapian kabel menggunakan spiral duct & klem"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  2: {
    title: "Penyambungan Serat Optik (Fusion Splicing) & Terminasi OTB",
    category: "Splicing Fiber",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    description: "Proses penyambungan kabel fiber optik drop core dan kabel backbone menggunakan mesin fusion splicer otomatis. Menghasilkan sambungan kaca presisi dengan redaman (loss) sangat rendah di bawah 0.03 dB dan proteksi sleeve tahan panas.",
    tech: ["Fusion Splicer", "Fiber Cleaver Presisi", "Fiber Stripper Miller", "Optical Power Meter (OPM)", "Visual Fault Locator (VFL)"],
    features: [
      "Pengupasan jacket dan coating fiber optik menggunakan tang stripper dengan ketelitian tinggi tanpa menggores core kaca",
      "Pembersihan core menggunakan alkohol 95% dan pemotongan rata 90 derajat memakai high-precision fiber cleaver",
      "Penyambungan inti serat kaca dengan Core Alignment Fusion Splicer dengan nilai estimasi redaman < 0.03 dB",
      "Pengujian kontinuitas sinar laser merah dengan Visual Fault Locator (VFL) dan pengukuran redaman dengan OPM"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  3: {
    title: "Konfigurasi IP Address Statik, Subnet Mask & Default Gateway",
    category: "Setting IP & Gateway",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description: "Pengaturan pengalamatan jaringan IPv4 secara manual (Static IP) dan otomatis (DHCP) pada 10 perangkat komputer client, printer jaringan, dan access point agar dapat terhubung satu segmen serta mengakses internet melalui default gateway.",
    tech: ["IPv4 Addressing", "Default Gateway", "Subnetting /24 /26 /28", "DNS 8.8.8.8", "Command Prompt / Ping"],
    features: [
      "Penentuan IP Host, Subnet Mask, Default Gateway, dan DNS (Primer & Sekunder) untuk setiap perangkat",
      "Perhitungan subnetting (VLSM / CIDR) untuk efisiensi pembagian alokasi IP di lingkungan jaringan lokal",
      "Pengujian konektivitas end-to-end melalui command prompt menggunakan utility Ping dan Traceroute",
      "Pencegahan dan perbaikan masalah bentrok alamat jaringan (IP Address Conflict resolution)"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  4: {
    title: "Pembuatan Patch Cord Massal Cat 5e & Quality Control",
    category: "Crimping Cat 5e",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    description: "Produksi kabel jumper / patch cord UTP Cat 5e berbagai ukuran panjang (1m, 2m, 5m, 10m) untuk menghubungkan switch ke patch panel dan PC client, lengkap dengan rubber boot protector.",
    tech: ["Cat 5e UTP", "RJ45 Plug", "Rubber Boot Protector", "Cable Stripper", "Master LAN Tester"],
    features: [
      "Pemasangan rubber boot protector pada ujung kabel sebelum crimping guna melindungi klip RJ45 dari patah",
      "Tingkat keberhasilan crimping teruji rapi tanpa short circuit atau pin longgar",
      "Penataan kerapian bundel kabel patch cord dengan velcro tie dan label nomor port",
      "Pengujian transmisi data gigabit pada switch hub"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  5: {
    title: "Perakitan Roset Optik & Pengujian Redaman OPM",
    category: "Splicing Fiber",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description: "Terminasi kabel drop core fiber optik ke roset optik (Optical Rosette / Wall Outlet) rumah/kantor, penyambungan pigtail konektor SC/UPC, dan verifikasi sinyal optik menggunakan Optical Power Meter.",
    tech: ["Roset Optik 1-2 Core", "Konektor SC/UPC & SC/APC", "Protection Sleeve", "Fusion Splicer", "OPM Tester"],
    features: [
      "Penataan jalur gulungan pigtail dan serat optik yang rapi di dalam tray roset sesuai bending radius",
      "Pemasangan protection sleeve tahan panas menggunakan pemanas oven terintegrasi pada fusion splicer",
      "Pengukuran kekuatan sinyal optik dengan OPM untuk memastikan sinyal memenuhi standar operasional (-15 dBm s.d. -22 dBm)",
      "Pemasangan patch cord fiber optik SC-to-SC menuju perangkat modem/ONT"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  6: {
    title: "Setting IP Gateway & Konfigurasi Wireless Access Point (AP)",
    category: "Setting IP & Gateway",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Instalasi perangkat wireless access point (AP) baru, pengubahan IP bawaan ke IP statik satu segmen dengan gateway utama, pengaturan SSID, keamanan password WPA2/WPA3, dan pembatasan pool IP DHCP.",
    tech: ["Wireless Access Point", "Web GUI Management", "IP Gateway Setting", "WPA2 Security", "DHCP Configuration"],
    features: [
      "Penggantian IP default perangkat (misal 192.168.0.1) ke segmen jaringan kantor (192.168.1.x) dengan gateway yang tepat",
      "Konfigurasi mode Access Point dan penonaktifan pembagian DHCP pada AP sekunder guna menghindari bentrok IP",
      "Pengaturan nama SSID WiFi, frekuensi channel tanpa bentrok (interferensi), dan password enkripsi aman",
      "Verifikasi koneksi internet seluruh smartphone dan laptop yang terhubung ke access point"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Dark/Light Theme Handler
  initTheme();

  // 3. Typing Effect di Hero (Fokus Cat 5e, Splicing Fiber & IP Gateway)
  initTypingEffect();

  // 4. Mobile Menu Navigation
  initMobileMenu();

  // 5. Project Filtering
  initProjectFilter();

  // 6. Project Modal Popup
  initProjectModal();

  // 7. Contact Form Simulation
  initContactForm();

  // 8. Back to Top Button & Scrollspy Navbar
  initScrollFeatures();
});

/* Theme Setup */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
    html.classList.remove('dark');
    updateThemeIcons(false);
  } else {
    html.classList.add('dark');
    updateThemeIcons(true);
  }

  function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  }

  function updateThemeIcons(isDark) {
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    const moonIcons = document.querySelectorAll('.theme-icon-moon');
    sunIcons.forEach(icon => icon.classList.toggle('hidden', !isDark));
    moonIcons.forEach(icon => icon.classList.toggle('hidden', isDark));
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
}

/* Typing Effect disesuaikan untuk Kelebihan Utama */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const words = [
    "Crimping Kabel UTP Cat 5e",
    "Splicing Kabel Fiber Optik",
    "Setting IP Address & Gateway",
    "Teknisi Jaringan & Cabling LAN"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 110;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingDelay = 1800; // Jeda saat kata lengkap
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingDelay = 400; // Jeda sebelum mulai kata berikutnya
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* Mobile Menu */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-4');
    }, 10);
  }

  function closeMenu() {
    mobileMenu.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 200);
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* Project Filter */
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.project-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* Project Modal */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.btn-view-details');

  if (!modal) return;

  function openModal(id) {
    const data = projectsData[id];
    if (!data) return;

    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-description').textContent = data.description;
    
    // Tech badges
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Features
    const featureContainer = document.getElementById('modal-features');
    featureContainer.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.className = 'flex items-start text-sm text-slate-300 dark:text-slate-300';
      li.innerHTML = `<span class="mr-2 text-indigo-400 font-bold">✓</span> <span>${f}</span>`;
      featureContainer.appendChild(li);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  // Close when clicking outside modal box
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* Contact Form */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading indicator
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Mengirim Pesan...
    `;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("Pesan Anda berhasil dikirim! Saya akan segera merespons.");
    }, 1200);
  });

  function showToast(message) {
    if (!toast) return;
    const msgElement = toast.querySelector('.toast-message');
    if (msgElement) msgElement.textContent = message;

    toast.classList.remove('hidden', 'translate-y-8', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-8', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 300);
    }, 4000);
  }
}

/* Scroll Features (Back-to-top & Navbar highlight) */
function initScrollFeatures() {
  const backToTopBtn = document.getElementById('back-to-top');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('hidden', 'opacity-0');
      backToTopBtn?.classList.add('opacity-100');
    } else {
      backToTopBtn?.classList.add('opacity-0');
      setTimeout(() => {
        if (window.scrollY <= 400) backToTopBtn?.classList.add('hidden');
      }, 200);
    }

    if (window.scrollY > 50) {
      navbar?.classList.add('shadow-lg', 'border-b', 'border-slate-800/60');
    } else {
      navbar?.classList.remove('shadow-lg', 'border-b', 'border-slate-800/60');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
