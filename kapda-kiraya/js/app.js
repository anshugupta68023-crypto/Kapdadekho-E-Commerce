/* ════════════════════════════════════════════════════════
   KAPDA KIRAYA — Enhanced App Logic
   ════════════════════════════════════════════════════════ */

// ── Emoji / Category map ──────────────────────────────
const E = {
  Saree:   "🥻",
  Lehenga: "👗",
  Sherwani:"🤵",
  Kurta:   "👘",
  Gown:    "👗",
  Suit:    "🧥",
};
const CATS  = Object.keys(E);
const SIZES = ["Free Size", "XS", "S", "M", "L", "XL", "XXL"];

// ── Tracking steps definition ─────────────────────────
// Each rental progresses through these steps in order.
const TRACK_STEPS = [
  {
    key:   "booked",
    label: "Booking Confirmed",
    desc:  "Aapki booking confirm ho gayi hai. Lister ko request mil gayi.",
    icon:  "✅",
    pill:  "sp-booked",
    pillLabel: "Confirmed",
  },
  {
    key:   "ready",
    label: "Kapda Taiyaar Hai",
    desc:  "Lister ne kapda taiyaar kar diya hai. Pickup / delivery ki tayyari ho rahi hai.",
    icon:  "👔",
    pill:  "sp-ready",
    pillLabel: "Taiyaar",
  },
  {
    key:   "delivered",
    label: "Kapda Deliver Ho Gaya",
    desc:  "Kapda aapke paas pahunch gaya. Enjoy karo!",
    icon:  "🚚",
    pill:  "sp-delivered",
    pillLabel: "Delivered",
  },
  {
    key:   "using",
    label: "Aap Use Kar Rahe Hain",
    desc:  "Kapda aapke paas hai. Rental period chal raha hai.",
    icon:  "🎉",
    pill:  "sp-using",
    pillLabel: "Use Ho Raha Hai",
  },
  {
    key:   "returned",
    label: "Kapda Wapas Ho Gaya",
    desc:  "Kapda lister ko wapas mil gaya. Deposit return ki process shuru.",
    icon:  "🔄",
    pill:  "sp-returned",
    pillLabel: "Returned",
  },
];

// ── Seed data ─────────────────────────────────────────
const seed = [
  {
    id: 1, name: "Banarasi Silk Saree — Maroon",
    cat: "Saree", size: "Free Size", price: 499,
    city: "Lucknow", lister: "Priya S.", type: "Individual", hue: 350, rating: 4.8,
    photo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&fit=crop",
  },
  {
    id: 2, name: "Ivory Sherwani, Zari Work",
    cat: "Sherwani", size: "L", price: 899,
    city: "Kanpur", lister: "Rohan K.", type: "Individual", hue: 42, rating: 4.6,
    photo: "https://images.unsplash.com/photo-1609253263762-24a7e3a4a89b?w=600&q=80&fit=crop",
  },
  {
    id: 3, name: "Pastel Party Gown",
    cat: "Gown", size: "S", price: 349,
    city: "Lucknow", lister: "Anaya M.", type: "Individual", hue: 285, rating: 4.9,
    photo: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&fit=crop",
  },
  {
    id: 4, name: "Designer Lehenga — Rani Pink",
    cat: "Lehenga", size: "M", price: 1200,
    city: "Delhi", lister: "Simran G.", type: "Individual", hue: 330, rating: 4.7,
    photo: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80&fit=crop",
  },
  {
    id: 5, name: "Cotton Kurta Set — Sky Blue",
    cat: "Kurta", size: "L", price: 199,
    city: "Jaipur", lister: "Shringar Boutique", type: "Retailer", hue: 200, rating: 4.5,
    photo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80&fit=crop",
  },
  {
    id: 6, name: "Navy Blazer Suit",
    cat: "Suit", size: "M", price: 599,
    city: "Jaipur", lister: "Classic Menswear", type: "Retailer", hue: 225, rating: 4.4,
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&fit=crop",
  },
  {
    id: 7, name: "Royal Blue Silk Lehenga",
    cat: "Lehenga", size: "S", price: 850,
    city: "Delhi", lister: "Meera Boutique", type: "Retailer", hue: 220, rating: 4.8,
    photo: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80&fit=crop",
  },
  {
    id: 8, name: "Embroidered Anarkali Suit",
    cat: "Suit", size: "M", price: 450,
    city: "Lucknow", lister: "Noor Fashion", type: "Retailer", hue: 30, rating: 4.5,
    photo: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80&fit=crop",
  },
  {
    id: 9, name: "Green Chanderi Saree",
    cat: "Saree", size: "Free Size", price: 350,
    city: "Bhopal", lister: "Kavita D.", type: "Individual", hue: 140, rating: 4.6,
    photo: "https://images.unsplash.com/photo-1629374029399-543eb29e0eb7?w=600&q=80&fit=crop",
  },
  {
    id: 10, name: "Sherwani — Dark Green Zari",
    cat: "Sherwani", size: "XL", price: 1100,
    city: "Mumbai", lister: "Royal Groom House", type: "Retailer", hue: 150, rating: 4.9,
    photo: "https://images.unsplash.com/photo-1591130901921-26c91eb42e75?w=600&q=80&fit=crop",
  },
  {
    id: 11, name: "Floral Chiffon Gown",
    cat: "Gown", size: "M", price: 299,
    city: "Pune", lister: "Riya S.", type: "Individual", hue: 310, rating: 4.4,
    photo: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop",
  },
  {
    id: 12, name: "Men's Bandhgala Kurta",
    cat: "Kurta", size: "L", price: 250,
    city: "Agra", lister: "Tailor King", type: "Retailer", hue: 25, rating: 4.3,
    photo: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&q=80&fit=crop",
  },
];

// ── Helpers ───────────────────────────────────────────
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[c]);

function stars(r = 0) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < 5; i++) {
    if (i < full)       s += "★";
    else if (i === full && half) s += "½";
    else                s += "☆";
  }
  return `<span class="stars" title="${r}/5">${s} <small>${r}</small></span>`;
}

// ── State ─────────────────────────────────────────────
let S = { items: seed, rentals: [], n: 100 };
let photo = null, cur = null;
let wishlist = new Set();
let isListView = false;
let trackingRentalId = null;   // which rental is being tracked

try {
  const raw = localStorage.getItem("kk3");
  if (raw) {
    const p = JSON.parse(raw);
    S = p.state;
    wishlist = new Set(p.wishlist || []);
  }
} catch(e) {}

const save = () => {
  try {
    localStorage.setItem("kk3", JSON.stringify({ state: S, wishlist: [...wishlist] }));
  } catch(e) {
    toast("Storage full — chhoti photo lagao 📦");
  }
};

// ── Toast ─────────────────────────────────────────────
let toastTimer;
function toast(m, duration = 2800) {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("on"), duration);
}

// ── Date helper ───────────────────────────────────────
const today = () => {
  const d = new Date();
  return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
};

// ── Option builder ────────────────────────────────────
const opts = (a, first) =>
  (first ? `<option value="">${first}</option>` : "") +
  a.map(x => `<option>${x}</option>`).join("");

// Populate selects
["#fc", "#ucat"].forEach(id => $(id).innerHTML = opts(CATS, id === "#fc" ? "Sabhi Category" : ""));
["#fz", "#usz"].forEach(id => $(id).innerHTML = opts(SIZES, id === "#fz" ? "Sabhi Size" : ""));

// ── Theme ─────────────────────────────────────────────
function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  $("#iconSun").hidden = dark;
  $("#iconMoon").hidden = !dark;
  localStorage.setItem("kkTheme", dark ? "dark" : "light");
}
(function initTheme() {
  const saved = localStorage.getItem("kkTheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved === "dark" : prefersDark);
})();
$("#themeBtn").onclick = () =>
  applyTheme(document.documentElement.getAttribute("data-theme") !== "dark");

// ── Navigation ────────────────────────────────────────
function go(v) {
  $$(".view").forEach(x => (x.hidden = x.id !== "v-" + v));
  $$(".nv, .bn").forEach(b => b.classList.toggle("act", b.dataset.v === v));
  if (v === "mine")   mine();
  if (v === "browse") browse();
  scrollTo({ top: 0, behavior: "instant" });
}

// ── Card Builder ──────────────────────────────────────
function card(i) {
  const loved = wishlist.has(i.id);
  return `<article class="card" data-id="${i.id}">
    <div class="ph" style="--h:${i.hue}">
      ${i.photo
        ? `<img src="${i.photo}" alt="${esc(i.name)}" loading="lazy" onerror="this.style.display='none'">`
        : `<span aria-hidden="true">${E[i.cat]}</span>`}
      <em class="badge ${i.type[0]}">${i.type === "Retailer" ? "Retailer" : "Individual"}</em>
      <button class="wishlist-btn${loved ? " loved" : ""}" data-wish="${i.id}" aria-label="${loved ? "Wishlist se hatao" : "Wishlist mein daalo"}" title="${loved ? "Wishlist se hatao" : "❤️ Save karo"}">
        ${loved ? "❤️" : "🤍"}
      </button>
    </div>
    <div class="card-body">
      <div class="row">
        <h3>${esc(i.name)}</h3>
        <b>₹${i.price}<small>/din</small></b>
      </div>
      <p class="card-meta">${i.cat} · Size ${i.size} · ${esc(i.city)}</p>
      ${i.rating ? `<p class="card-meta">${stars(i.rating)}</p>` : ""}
      <p class="card-lister">🏷️ ${esc(i.lister)}</p>
    </div>
    <button class="btn" data-rent="${i.id}">Rent Karo</button>
  </article>`;
}

// ── Tracking helpers ──────────────────────────────────
function getStepIndex(stepKey) {
  return TRACK_STEPS.findIndex(s => s.key === stepKey);
}

/** Returns the current TRACK_STEPS object for a rental */
function getCurrentStep(rental) {
  if (rental.status === "Cancelled") return null;
  const idx = getStepIndex(rental.trackStep || "booked");
  return TRACK_STEPS[Math.max(0, idx)];
}

/** Format date as "3 Oct 2026" */
function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("hi-IN", { day:"numeric", month:"short", year:"numeric" });
}

/** Days remaining until rental end-date */
function daysLeft(toDate) {
  const diff = Math.ceil((new Date(toDate + "T23:59:59") - new Date()) / 864e5);
  return diff;
}

// ── Open Tracking Page ────────────────────────────────
function openTracking(rentalId) {
  trackingRentalId = +rentalId;
  const r = S.rentals.find(x => x.id === trackingRentalId);
  if (!r) return;
  $("#track-subtitle").textContent = `Booking #KK-${String(r.id).padStart(4,"0")}`;
  renderTrackPage(r);
  go("track");
}

function renderTrackPage(r) {
  const item   = S.items.find(i => i.id === r.itemId) || {};
  const stepIdx = r.status === "Cancelled" ? -1 : getStepIndex(r.trackStep || "booked");
  const dl      = daysLeft(r.to);
  const isFuture = new Date(r.from) > new Date();

  // Build timeline HTML
  const timelineHTML = TRACK_STEPS.map((step, i) => {
    let cls = "pending";
    if (r.status === "Cancelled") cls = "pending";
    else if (i < stepIdx)  cls = "done";
    else if (i === stepIdx) cls = "active";

    // Timestamp: show bookedAt for first step, estimate for others
    let timeStr = "";
    if (cls === "done" || cls === "active") {
      if (i === 0) timeStr = fmtDate(r.bookedAt || r.from);
      else         timeStr = "Update ho gaya";
    } else {
      if (i === TRACK_STEPS.length - 1) timeStr = `Expected: ${fmtDate(r.to)}`;
      else timeStr = "Abhi baaki hai";
    }

    return `<li class="tl-step ${cls}">
      <div class="tl-dot">${cls === "done" ? "✓" : step.icon}</div>
      <div class="tl-content">
        <div class="tl-title">${step.label}</div>
        <div class="tl-desc">${step.desc}</div>
        <div class="tl-time">${timeStr}</div>
      </div>
    </li>`;
  }).join("");

  // Countdown / return info bar
  let countdownHTML = "";
  if (r.status !== "Cancelled" && r.trackStep !== "returned") {
    if (dl > 0 && !isFuture) {
      countdownHTML = `<div class="countdown-bar">
        <div class="icon">⏳</div>
        <div class="info">
          <b>Rental Period Chal Raha Hai</b>
          <span>${r.from} se ${r.to} tak · Wapas karne ki tarikh: <b>${fmtDate(r.to)}</b></span>
        </div>
        <div class="days-left-big">${dl} din</div>
      </div>`;
    } else if (isFuture) {
      const startDl = Math.ceil((new Date(r.from) - new Date()) / 864e5);
      countdownHTML = `<div class="countdown-bar">
        <div class="icon">📅</div>
        <div class="info">
          <b>Rental Shuru Hone Wala Hai</b>
          <span>Kapda milne ki tarikh: <b>${fmtDate(r.from)}</b></span>
        </div>
        <div class="days-left-big">${startDl} din</div>
      </div>`;
    } else if (dl <= 0 && r.trackStep !== "returned") {
      countdownHTML = `<div class="countdown-bar" style="border-color:rgba(220,38,38,.4)">
        <div class="icon">⚠️</div>
        <div class="info">
          <b style="color:var(--red)">Rental Period Khatam Ho Gaya</b>
          <span>Kapda jaldi wapas karo aur deposit pao: ₹${r.dep}</span>
        </div>
      </div>`;
    }
  }

  // Advance step button (only if not returned/cancelled)
  const canAdvance = r.status !== "Cancelled" && r.trackStep !== "returned";
  const nextStep   = TRACK_STEPS[stepIdx + 1];
  const advanceBtn = canAdvance && nextStep
    ? `<button class="btn" data-advance="${r.id}" style="margin-top:4px">
        ${nextStep.icon} Aage Badhao: "${nextStep.label}"
       </button>`
    : "";

  // Current status pill
  const cs = getCurrentStep(r);
  const pillHTML = r.status === "Cancelled"
    ? `<span class="status-pill sp-cancelled">❌ Cancelled</span>`
    : cs ? `<span class="status-pill ${cs.pill}">${cs.icon} ${cs.pillLabel}</span>` : "";

  $("#track-body").innerHTML = `
    <!-- Item header -->
    <div class="track-card">
      <div class="track-item-header">
        <div class="track-item-emoji" style="--h:${item.hue||200}">
          ${item.photo ? `<img src="${item.photo}" alt="">` : (E[item.cat] || "👗")}
        </div>
        <div class="track-item-info">
          <div class="track-booking-id">Booking #KK-${String(r.id).padStart(4,"0")}</div>
          <h3>${esc(r.name)}</h3>
          <p class="mu">${r.from} → ${r.to} · ${r.days} din · ₹${r.rent + r.dep} (deposit incl.)</p>
          <p style="margin-top:6px">${pillHTML}</p>
        </div>
      </div>

      <!-- Summary boxes -->
      <div class="track-summary-grid">
        <div class="tsm-box">
          <div class="label">Kiraya</div>
          <div class="val">₹${r.rent}</div>
        </div>
        <div class="tsm-box highlight">
          <div class="label">Deposit</div>
          <div class="val">₹${r.dep}</div>
        </div>
        <div class="tsm-box">
          <div class="label">Kul Rakam</div>
          <div class="val">₹${r.rent + r.dep}</div>
        </div>
      </div>

      ${countdownHTML}
    </div>

    <!-- Timeline -->
    <div class="track-card">
      <h3 style="margin-bottom:22px">📍 Tracking Timeline</h3>
      ${r.status === "Cancelled"
        ? `<div class="empty-state" style="padding:24px 0">
             <span class="emoji">❌</span>
             <h3>Booking Cancel Ho Gayi</h3>
             <p>Yeh booking cancel ki ja chuki hai.</p>
           </div>`
        : `<ul class="track-timeline">${timelineHTML}</ul>`
      }
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:12px;flex-wrap:wrap;padding-bottom:40px">
      ${advanceBtn}
      ${r.status !== "Cancelled" && r.trackStep !== "returned"
        ? `<button class="btn line" data-cancel="${r.id}">Booking Cancel Karo</button>`
        : ""}
      <button class="btn line" data-v="mine">← Mere Rentals</button>
    </div>
  `;
}

// ── Advance rental tracking step ──────────────────────
function advanceStep(rentalId) {
  const r = S.rentals.find(x => x.id == rentalId);
  if (!r || r.status === "Cancelled") return;
  const idx = getStepIndex(r.trackStep || "booked");
  if (idx < TRACK_STEPS.length - 1) {
    r.trackStep = TRACK_STEPS[idx + 1].key;
    if (r.trackStep === "returned") r.status = "Returned";
    save();
    mine();
    renderTrackPage(r);
    const step = getCurrentStep(r);
    toast(`${step.icon} Status update: ${step.label}`);
  }
}

// ── Browse / Filter ───────────────────────────────────
function browse() {
  const q    = $("#q").value.toLowerCase().trim();
  const c    = $("#fc").value;
  const z    = $("#fz").value;
  const sort = $("#fsort").value;

  let L = S.items.filter(i =>
    (!q || (i.name + " " + i.cat + " " + i.city).toLowerCase().includes(q)) &&
    (!c || i.cat  === c) &&
    (!z || i.size === z)
  );

  if (sort === "low")  L.sort((a, b) => a.price - b.price);
  if (sort === "high") L.sort((a, b) => b.price - a.price);

  const count = L.length;
  $("#cnt").textContent = `${count} kapde available`;

  // Update stat
  const el = $("#stat-items");
  if (el) el.textContent = S.items.length + "+";

  // Active filter chips
  const afc = [];
  if (q) afc.push(`<button class="af-chip" data-clear="q">🔍 "${q}" ✕</button>`);
  if (c) afc.push(`<button class="af-chip" data-clear="fc">${c} ✕</button>`);
  if (z) afc.push(`<button class="af-chip" data-clear="fz">Size: ${z} ✕</button>`);
  $("#active-filters").innerHTML = afc.join("");

  const grid = $("#grid");
  grid.className = `grid${isListView ? " list-view" : ""}`;

  if (!L.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <span class="emoji">🧺</span>
      <h3>Kuch nahi mila</h3>
      <p>Filter badal kar dekho ya <button class="btn sm" onclick="clearFilters()">Filters Clear Karo</button></p>
    </div>`;
    return;
  }

  grid.innerHTML = L.map(card).join("");
}

function clearFilters() {
  ["#q","#fc","#fz","#fsort"].forEach(id => $(id).value = "");
  browse();
}

// ── Wishlist ──────────────────────────────────────────
function toggleWish(id) {
  id = +id;
  if (wishlist.has(id)) {
    wishlist.delete(id);
    toast("Wishlist se hata diya 🤍");
  } else {
    wishlist.add(id);
    toast("Wishlist mein save ho gaya ❤️");
  }
  save();
  browse();
}

// ── Booking calc ──────────────────────────────────────
function calc() {
  const a = $("#d1").value, b = $("#d2").value;
  if (!a || !b || b < a) return null;
  const days = Math.round((new Date(b) - new Date(a)) / 864e5) + 1;
  const rent = days * cur.price;
  const dep  = cur.price * 2;
  const total = rent + dep;
  $("#sum").innerHTML =
    `<div><span>${days} din × ₹${cur.price}</span><span>₹${rent}</span></div>
     <div><span>Deposit (wapas milega)</span><span>₹${dep}</span></div>
     <div><b>Total abhi</b><b>₹${total}</b></div>`;
  return { a, b, days, rent, dep };
}

// ── Open Rent Dialog ──────────────────────────────────
function openRent(id) {
  cur = S.items.find(i => i.id == id);
  if (!cur) return;
  const t = today();
  $("#dbody").innerHTML =
    `<div style="margin-bottom:16px">
      <div style="font-size:28px;margin-bottom:4px">${E[cur.cat]}</div>
      <h3 style="font-size:20px;margin-bottom:4px">${esc(cur.name)}</h3>
      <p class="mu">₹${cur.price}/din · ${esc(cur.lister)}, ${esc(cur.city)}</p>
      ${cur.rating ? `<p class="mu" style="margin-top:2px">${stars(cur.rating)}</p>` : ""}
    </div>
    <div class="two">
      <div><label for="d1">Kab se</label><input type="date" id="d1" min="${t}" value="${t}"></div>
      <div><label for="d2">Kab tak</label><input type="date" id="d2" min="${t}" value="${t}"></div>
    </div>
    <div class="two" style="margin-top:4px">
      <div><label for="rn">Aapka naam</label><input id="rn" placeholder="Full naam"></div>
      <div><label for="rp">Phone number</label><input id="rp" inputmode="numeric" maxlength="10" placeholder="10 ank"></div>
    </div>
    <div class="sum" id="sum"></div>
    <p class="err" id="err"></p>
    <div class="acts">
      <button class="btn line" id="cx">Band Karo</button>
      <button class="btn" id="ok">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Booking Confirm Karo
      </button>
    </div>`;

  $("#d1").oninput = $("#d2").oninput = calc;
  calc();
  $("#cx").onclick = () => $("#dlg").close();
  $("#ok").onclick = confirmBooking;
  $("#dlg").showModal();
}

function confirmBooking() {
  const c  = calc();
  const n  = $("#rn").value.trim();
  const p  = $("#rp").value.trim();
  const er = $("#err");
  er.textContent = "";

  if (!c)  return (er.textContent = '⚠️ Tarikh sahi chuno: "Kab tak" shuru ki tarikh ke baad ho.');
  if (!n)  return (er.textContent = "⚠️ Apna naam likho.");
  if (!/^\d{10}$/.test(p)) return (er.textContent = "⚠️ 10 ank ka phone number daalo.");
  if (S.rentals.some(r =>
    r.itemId === cur.id && r.status === "Active" &&
    !(c.b < r.from || c.a > r.to)
  )) return (er.textContent = "⚠️ Ye kapda in tarikhon par booked hai. Dusri tarikh chuno.");

  S.rentals.unshift({
    id: S.n++, itemId: cur.id, name: cur.name,
    from: c.a, to: c.b, days: c.days,
    rent: c.rent, dep: c.dep,
    renterName: n, phone: p,
    status: "Active",
    bookedAt: new Date().toISOString()
  });
  save();
  $("#dlg").close();
  toast("🎉 Booking confirm ho gayi!");
  go("mine");
}

// ── Mine Page ─────────────────────────────────────────
function mine() {
  const R = S.rentals;
  const M = S.items.filter(i => i.mine);

  // Update badges
  $("#rentals-badge").textContent  = R.length;
  $("#listings-badge").textContent = M.length;

  // Rentals
  $("#myr").innerHTML = R.length
    ? R.map(r => {
        const cs  = getCurrentStep(r);
        const pill = r.status === "Cancelled"
          ? `<span class="status-pill sp-cancelled">❌ Cancelled</span>`
          : cs ? `<span class="status-pill ${cs.pill}">${cs.icon} ${cs.pillLabel}</span>` : "";
        return `<div class="li">
          <div style="flex:1;min-width:0">
            <b>${esc(r.name)}</b>
            <p class="mu">${r.from} → ${r.to} · ${r.days} din</p>
            <p class="mu">Kiraya ₹${r.rent} + Deposit ₹${r.dep} = <b>₹${r.rent + r.dep}</b></p>
            <p style="margin-top:6px">${pill}</p>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            ${r.status !== "Cancelled"
              ? `<button class="track-btn" data-track="${r.id}">
                   📍 Track Karo
                 </button>`
              : ""}
            ${r.status === "Active"
              ? `<button class="btn sm" data-cancel="${r.id}">Cancel</button>`
              : ""}
          </div>
        </div>`;
      }).join("")
    : `<div class="empty-state">
        <span class="emoji">🛍️</span>
        <h3>Abhi koi booking nahi hai</h3>
        <p>Browse Karo mein se koi kapda chuno!</p>
        <button class="btn" data-v="browse" style="margin-top:14px">Browse Karo</button>
      </div>`;

  // Listings
  $("#myl").innerHTML = M.length
    ? M.map(i => {
        const earned = R.filter(r => r.itemId === i.id && r.status === "Active")
                        .reduce((a, r) => a + r.rent, 0);
        return `<div class="li">
          <div style="font-size:24px;flex-shrink:0">${E[i.cat]}</div>
          <div style="flex:1;min-width:0">
            <b>${esc(i.name)}</b>
            <p class="mu">₹${i.price}/din · ${esc(i.city)}</p>
            ${earned ? `<p class="mu" style="color:var(--gd);font-weight:700">💰 Total kamai: ₹${earned}</p>` : ""}
          </div>
          <button class="btn sm" data-del="${i.id}">Hatao</button>
        </div>`;
      }).join("")
    : `<div class="empty-state">
        <span class="emoji">👔</span>
        <h3>Abhi koi listing nahi hai</h3>
        <p>Apne kapde list karo aur paisa kamaao!</p>
        <button class="btn" data-v="upload" style="margin-top:14px">Kapda Upload Karo</button>
      </div>`;
}

// ── Mine Tabs ─────────────────────────────────────────
$$(".mine-tab").forEach(btn => {
  btn.onclick = () => {
    $$(".mine-tab").forEach(b => b.classList.remove("act"));
    btn.classList.add("act");
    const tab = btn.dataset.tab;
    $("#tab-rentals").hidden  = tab !== "rentals";
    $("#tab-listings").hidden = tab !== "listings";
  };
});

// ── Global Click Delegation ───────────────────────────
document.addEventListener("click", e => {
  const t = e.target.closest("[data-v],[data-rent],[data-cancel],[data-del],[data-wish],[data-clear],[data-track],[data-advance]");
  if (!t) return;

  if (t.dataset.v)       go(t.dataset.v);
  if (t.dataset.rent)    openRent(t.dataset.rent);
  if (t.dataset.wish)    toggleWish(t.dataset.wish);
  if (t.dataset.track)   openTracking(t.dataset.track);
  if (t.dataset.advance) advanceStep(t.dataset.advance);
  if (t.dataset.clear) {
    const el = $("#" + t.dataset.clear);
    if (el) el.value = "";
    browse();
  }
  if (t.dataset.cancel) {
    if (!confirm("Booking cancel karein?")) return;
    const r = S.rentals.find(x => x.id == t.dataset.cancel);
    r.status = "Cancelled";
    save(); mine();
    // If on tracking page, re-render it
    if (!$("#v-track").hidden) renderTrackPage(r);
    toast("Booking cancel ho gayi");
  }
  if (t.dataset.del) {
    if (!confirm("Ye listing hata dein?")) return;
    S.items = S.items.filter(i => i.id != t.dataset.del);
    save(); mine();
    toast("Listing hata di");
  }
});

// ── Scroll to collection ──────────────────────────────
$("#goc").onclick = () =>
  $("#collection").scrollIntoView({ behavior: "smooth" });

// ── Filter listeners ──────────────────────────────────
["q","fc","fz","fsort"].forEach(id => ($("#" + id).oninput = browse));

// ── View toggle (grid / list) ─────────────────────────
$("#gridViewBtn").onclick = () => {
  isListView = false;
  $("#gridViewBtn").classList.add("act");
  $("#listViewBtn").classList.remove("act");
  browse();
};
$("#listViewBtn").onclick = () => {
  isListView = true;
  $("#listViewBtn").classList.add("act");
  $("#gridViewBtn").classList.remove("act");
  browse();
};

// ── Photo upload (with drag-drop) ─────────────────────
const drop = $("#fileDrop");

drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("drag-over"); });
drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
drop.addEventListener("drop", e => {
  e.preventDefault();
  drop.classList.remove("drag-over");
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith("image/")) processFile(f);
});

$("#uf").onchange = e => {
  const f = e.target.files[0];
  if (f) processFile(f);
};

function processFile(f) {
  if (f.size > 5 * 1024 * 1024) return toast("Photo 5MB se chhoti honi chahiye 📷");
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      const k = Math.min(1, 600 / Math.max(im.width, im.height));
      const c = document.createElement("canvas");
      c.width = im.width * k; c.height = im.height * k;
      c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      photo = c.toDataURL("image/jpeg", 0.78);
      const pv = $("#pv");
      pv.src = photo; pv.hidden = false;
      $("#fileDropInner").hidden  = true;
      $("#removePhoto").hidden = false;
    };
    im.src = fr.result;
  };
  fr.readAsDataURL(f);
}

$("#removePhoto").onclick = () => {
  photo = null;
  $("#pv").hidden = true;
  $("#pv").src = "";
  $("#uf").value = "";
  $("#fileDropInner").hidden = false;
  $("#removePhoto").hidden = true;
};

// ── Upload Listing ────────────────────────────────────
$("#ub").onclick = () => {
  const g = id => $("#" + id).value.trim();
  const n = g("un"), p = +g("up"), c = g("uc"), l = g("ul");
  const agreed = $("#agree").checked;

  if (!n)       return toast("⚠️ Kapde ka naam likho");
  if (!(p > 0)) return toast("⚠️ Kiraya sahi bharo");
  if (!c)       return toast("⚠️ Sheher likho");
  if (!l)       return toast("⚠️ Apna naam ya dukaan ka naam likho");
  if (!agreed)  return toast("⚠️ Terms se agree karo pehle");

  const newItem = {
    id: S.n++, name: n,
    cat:    $("#ucat").value,
    size:   $("#usz").value,
    price:  p, city: c, lister: l,
    type:   $("#ut").value,
    hue:    Math.floor(Math.random() * 360),
    mine:   true,
    photo,
    rating: null,
    listedAt: new Date().toISOString(),
  };
  S.items.unshift(newItem);
  save();
  photo = null;

  // Reset form
  ["un","up","uc","ul","uf"].forEach(id => ($("#" + id).value = ""));
  $("#pv").hidden = true;
  $("#pv").src = "";
  $("#fileDropInner").hidden = false;
  $("#removePhoto").hidden = true;
  $("#agree").checked = false;

  go("browse");
  toast("✅ Kapda list ho gaya! Collection mein dikhne lagega.");
};

// ── Close dialog on backdrop click ───────────────────
$("#dlg").addEventListener("click", e => {
  if (e.target === e.currentTarget) e.currentTarget.close();
});

// ── Init ──────────────────────────────────────────────
browse();
