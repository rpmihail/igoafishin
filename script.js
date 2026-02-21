(function () {
  const cfg = window.SITE_CONFIG || {};

  // Nav toggle (mobile)
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // close when clicking a link
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Helpers
  const digits = (s) => (s || "").replace(/\D/g, "");
  const formatMoney = (n) =>
    (typeof n === "number" ? n : Number(n)).toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    });

  // Contact links
  const email = cfg.email || "your@email.com";
  const phone1 = cfg.phonePrimary || "";
  const phone2 = cfg.phoneSecondary || "";
  const mapsLink = cfg.mapsLink || "https://www.google.com/maps";

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.textContent = email;
    emailLink.href = `mailto:${email}`;
  }

  const phone1Link = document.getElementById("phone1Link");
  if (phone1Link && phone1) {
    phone1Link.textContent = phone1;
    phone1Link.href = `tel:${digits(phone1)}`;
  }

  const phone2Link = document.getElementById("phone2Link");
  if (phone2Link && phone2) {
    phone2Link.textContent = phone2;
    phone2Link.href = `tel:${digits(phone2)}`;
  }

  const mapAnchor = document.getElementById("mapLink");
  if (mapAnchor) mapAnchor.href = mapsLink;

  // CTA buttons
  const ctaCall = document.getElementById("ctaCall");
  if (ctaCall && phone1) ctaCall.href = `tel:${digits(phone1)}`;

  const ctaText = document.getElementById("ctaText");
  if (ctaText && phone1) ctaText.href = `sms:${digits(phone1)}`;

  const ctaEmail = document.getElementById("ctaEmail");
  if (ctaEmail) ctaEmail.href = `mailto:${email}`;

  const bookNow = document.getElementById("bookNow");
  if (bookNow && phone1) bookNow.href = `sms:${digits(phone1)}`;

  // Pricing render
  const offshoreUl = document.getElementById("offshorePrices");
  const inshoreUl = document.getElementById("inshorePrices");

  const renderPrices = (ul, section) => {
    if (!ul || !section || !Array.isArray(section.items)) return;
    ul.innerHTML = "";
    section.items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="name">${item.name}</span>
        <span class="price">${formatMoney(item.price)}</span>
      `;
      ul.appendChild(li);
    });
  };

  if (cfg.pricing) {
    renderPrices(offshoreUl, cfg.pricing.offshore);
    renderPrices(inshoreUl, cfg.pricing.inshore);
  }

  // Gallery render
  const gallery = document.getElementById("gallery");
  if (gallery && Array.isArray(cfg.gallery)) {
    gallery.innerHTML = "";
    cfg.gallery.forEach((p, idx) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = p.caption || `Photo ${idx + 1}`;
      img.src = p.src;

      img.addEventListener("error", () => {
        img.src = "assets/placeholder.svg";
      });

      const cap = document.createElement("figcaption");
      cap.textContent = p.caption || "";

      fig.appendChild(img);
      fig.appendChild(cap);
      gallery.appendChild(fig);
    });
  }

  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();