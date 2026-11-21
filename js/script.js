/* ============================================================
   ELEVA FITNESS — interactive features
   ============================================================ */

/* ---------- Data ---------- */
const MASSAGES = [
  { emoji:"🇸🇪", name:"Swedish Massage",        desc:"Gentle, flowing strokes to relax the whole body, ease tension and improve circulation.", price:"Ksh 3,500" },
  { emoji:"💪", name:"Deep Tissue Massage",    desc:"Firm pressure reaches deeper muscle layers to release chronic knots and stiffness.", price:"Ksh 4,000" },
  { emoji:"🌋", name:"Hot Stone Massage",      desc:"Warm basalt stones melt away stress and deeply relax tight, overworked muscles.", price:"Ksh 4,500" },
  { emoji:"🏃", name:"Sports Massage",         desc:"Targets athletic performance, recovery and injury prevention before or after activity.", price:"Ksh 4,000" },
  { emoji:"🇯🇵", name:"Shiatsu Massage",        desc:"Japanese finger-pressure therapy along energy meridians to restore body balance.", price:"Ksh 4,000" },
  { emoji:"🇹🇭", name:"Thai Massage",           desc:"Assisted stretching and acupressure — like yoga done for you. Wear comfy clothes.", price:"Ksh 4,500" },
  { emoji:"🌸", name:"Aromatherapy Massage",   desc:"Essential-oil massage calming the mind, lifting mood and improving sleep quality.", price:"Ksh 4,000" },
  { emoji:"🎯", name:"Trigger Point Massage",  desc:"Focused pressure on trigger points to deactivate referred pain and muscle spasms.", price:"Ksh 3,500" },
  { emoji:"🤰", name:"Prenatal Massage",       desc:"Safe, soothing side-lying massage easing pregnancy aches, swelling and fatigue.", price:"Ksh 4,000" },
  { emoji:"🦶", name:"Reflexology",            desc:"Pressure-point therapy on feet and hands that reflects relief across the whole body.", price:"Ksh 3,000" },
  { emoji:"💧", name:"Lymphatic Drainage",     desc:"Gentle rhythmic strokes that decongest the lymph system and reduce swelling.", price:"Ksh 4,500" },
];

const SERVICES = ["Gym","Aerobics","Physiotherapy","Chiropractic Treatment","Nutrition Support","Psychology",
  ...MASSAGES.map(m => "Massage — " + m.name)];

const SPECIALISTS = {
  "Gym": [
    { name:"Kevin Tuitoek",  role:"Head Strength & Conditioning Coach", quals:"BSc Exercise & Sports Science, CSCS (NSCA), 10 yrs" },
    { name:"Felix Odhiambo", role:"Bodybuilding & Powerlifting Trainer",  quals:"ISSA-CPT, KBBF competitive coach, 7 yrs" },
    { name:"George Mbugua",  role:"Functional & Senior Fitness Trainer",  quals:"ACE-CPT, FMS certified, 9 yrs" },
    { name:"Ruth Adisa",     role:"Yoga & Mobility Coach",                quals:"RYT-200 Yoga Alliance, 5 yrs" },
  ],
  "Aerobics": [
    { name:"Lucy Muthoni",  role:"Aerobics & Group Fitness Instructor", quals:"ACE Group Fitness, Zumba® licensed, 8 yrs" },
    { name:"Sheila Barasa", role:"Aerobics & HIIT Instructor",          quals:"NASM-CPT, HIIT & Pilates cert., 6 yrs" },
    { name:"Ruth Adisa",    role:"Yoga & Mobility Coach",               quals:"RYT-200, prenatal yoga certified" },
    { name:"Kevin Tuitoek", role:"S&C Coach — Circuit Classes",         quals:"BSc Sports Science, CSCS, 10 yrs" },
  ],
  "Physiotherapy": [
    { name:"Dr. David Mwangi",  role:"Lead Physiotherapist",           quals:"BSc Physiotherapy (UoN), MSc Sports Physio (UK), 12 yrs" },
    { name:"Dr. Sarah Achieng'",role:"Women's Health & Rehab Physio",  quals:"BSc Physiotherapy (JKUAT), Cert. Dry Needling, 8 yrs" },
    { name:"Dr. Cynthia Kamau", role:"Sports & Paediatrics Physio",    quals:"BSc Physiotherapy (Moi), FIFA Football Medicine, 7 yrs" },
  ],
  "Chiropractic Treatment": [
    { name:"Dr. Brian Kiprop",  role:"Chiropractor",                     quals:"D.C. (Parker Univ., USA), Gonstead & Activator certified, 10 yrs" },
    { name:"Dr. James Olouch",  role:"Chiropractor — Sports & Posture",  quals:"D.C. (Palmer College, USA), Cert. Rehab Chiropractic, 8 yrs" },
    { name:"Dr. Mercy Chebet",  role:"Chiropractor — Family Care",       quals:"MChiro (Anglo-European College, UK), 6 yrs" },
  ],
  "Nutrition Support": [
    { name:"Dr. Otieno Moraa",  role:"Nutritionist & Dietitian",          quals:"BSc Food & Nutrition (KU), KNDI registered, ISSN cert." },
    { name:"Ann Kiptoo",        role:"Clinical Dietitian",                quals:"BSc Human Nutrition (Egerton), KNDI, 7 yrs" },
    { name:"Samuel Ndung'u",    role:"Sports Nutritionist",               quals:"MSc Human Nutrition (UoN), CISSN, 5 yrs" },
  ],
  "Psychology": [
    { name:"Dr. Wanjiru Njoroge", role:"Clinical Psychologist",           quals:"MSc Clinical Psychology (UoN), CPS-K, CBT certified" },
    { name:"Kelvin Ochieng'",   role:"Counselling Psychologist",          quals:"MSc Counselling Psychology (USIU), 7 yrs" },
    { name:"Faith Wairimu",     role:"Wellness & Teen Counsellor",        quals:"BA Psychology (UoN), Cert. Child & Adolescent Counselling" },
  ],
};
MASSAGES.forEach(m => {
  SPECIALISTS["Massage — " + m.name] = pickMassageTeam();
});
function pickMassageTeam(){
  return [
    { name:"Joseph Maina",   role:"Senior Massage Therapist",       quals:"ITEC Level 3 Massage (UK), 9 yrs" },
    { name:"Grace Kilonzo",  role:"Massage Therapist",              quals:"Dip. Swedish Massage (BISA), Cert. Prenatal, 6 yrs" },
    { name:"Elijah Omondi",  role:"Massage Therapist — Deep Tissue",quals:"Cert. Deep Tissue & Sports (AFPA), 7 yrs" },
    { name:"Pauline Njeri",  role:"Massage Therapist — Thai & Shiatsu", quals:"Wat Po (Thailand) & Japan Shiatsu College, 8 yrs" },
    { name:"Dennis Kariuki", role:"Massage Therapist — Reflexology & Lymphatic", quals:"ICR Kenya, Vodder MLD cert., 5 yrs" },
    { name:"Amina Mohammed", role:"Massage Therapist — Aromatherapy & Hot Stone", quals:"Tisserand Inst., Hot Stone cert., 6 yrs" },
  ];
}

const SHIFTS = ["Morning shift · 6:00 AM – 2:00 PM", "Mid shift · 9:00 AM – 5:00 PM", "Evening shift · 2:00 PM – 10:00 PM"];

const SEED_REVIEWS = [
  { name:"Mary Wanjiru",  service:"Physiotherapy",      rating:5, text:"After my knee surgery the team at Eleva designed a rehab plan that had me walking confidently in 8 weeks. Truly professional." },
  { name:"John Ochieng'", service:"Gym",                rating:5, text:"Best gym in Westlands — modern equipment, clean floors and trainers who actually watch your form. Worth every shilling." },
  { name:"Achieng' Otis", service:"Hot Stone Massage",  rating:5, text:"The hot stone massage melted three months of stress away. The spa is calm, spotless and the therapist checked on pressure constantly." },
  { name:"David Kilonzo", service:"Chiropractic Treatment", rating:4, text:"Years of desk-job back pain eased after just three adjustments with Dr. Kiprop. Booking and follow-ups are very smooth." },
  { name:"Grace Njoki",   service:"Aerobics",           rating:5, text:"Lucy's 6 PM aerobics class is the highlight of my day. Great music, great energy, and the evening session time fits work perfectly." },
  { name:"Samuel Mwangi", service:"Nutrition Support",  rating:5, text:"Down 9 kg in 3 months on Dr. Moraa's plan — realistic Kenyan meals, no starvation. The monthly check-ins keep me accountable." },
  { name:"Faith Achieng", service:"Psychology",         rating:5, text:"A safe, private space with zero judgement. My sessions here have genuinely changed how I handle stress at work and home." },
  { name:"Peter Njoroge", service:"Sports Massage",     rating:4, text:"As a marathon runner I book Elijah before every big race. Legs feel brand new. Highly recommend to fellow athletes." },
];

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const store = {
  get(k, d){ try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const initials = n => n.replace("Dr. ","").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
const AV_COLORS = [["#6d28d9","#f7c948"],["#1d6fe0","#6d28d9"],["#f7c948","#1d6fe0"],["#3b1478","#28a0e0"]];

/* ---------- Nav tabs ---------- */
const navToggle = $("#navToggle"), navTabs = $("#navTabs");
navToggle.addEventListener("click", () => navTabs.classList.toggle("open"));
navTabs.addEventListener("click", e => {
  if (e.target.classList.contains("tab")) navTabs.classList.remove("open");
});
const tabLinks = $$(".tab");
const sections = [...tabLinks].map(a => $(a.getAttribute("href"))).filter(Boolean);
window.addEventListener("scroll", () => {
  let current = sections[0];
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 140) current = sec; });
  tabLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
}, { passive:true });

/* ---------- Massage grid ---------- */
$("#massageGrid").innerHTML = MASSAGES.map((m,i) => {
  const c = AV_COLORS[i % AV_COLORS.length];
  return `<article class="card massage-card">
    <span class="emoji">${m.emoji}</span>
    <h4>${m.name}</h4>
    <p>${m.desc}</p>
    <p class="price">${m.price} <small>/ 60 min · 90 min +Ksh 1,500</small></p>
    <a href="#bookings" class="btn btn-small" data-book="${m.name}">Book</a>
  </article>`;
}).join("");

/* Fill service selects */
const bkService = $("#bkService"), rvService = $("#rvService");
SERVICES.forEach(s => {
  bkService.insertAdjacentHTML("beforeend", `<option>${s}</option>`);
  rvService.insertAdjacentHTML("beforeend", `<option>${s}</option>`);
});
/* "Book" buttons on massage cards pre-select the service */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-book]");
  if (!b) return;
  const v = "Massage — " + b.dataset.book;
  [...bkService.options].forEach(o => { if (o.value === v || o.text === v) bkService.value = o.value || o.text; });
  fillSpecialistOptions();
});

/* ---------- Daily specialists ---------- */
const specGrid = $("#specialistGrid"), schedDate = $("#scheduleDate");
const schedServiceSel = document.createElement("select");
schedServiceSel.id = "schedService";
["Gym","Aerobics","Physiotherapy","Chiropractic Treatment","Nutrition Support","Psychology","Massage Therapy (all types)"].forEach(s => {
  schedServiceSel.insertAdjacentHTML("beforeend", `<option>${s}</option>`);
});
$(".schedule-controls").insertBefore(schedServiceSel, $("#todayBtn"));

const todayISO = () => new Date().toISOString().slice(0,10);
schedDate.value = todayISO();

function specialistsFor(service, dateStr){
  let pool;
  if (service === "Massage Therapy (all types)") {
    pool = SPECIALISTS["Massage — Swedish Massage"];
  } else {
    pool = SPECIALISTS[service] || [];
  }
  const day = new Date(dateStr + "T12:00:00").getDay();         // 0=Sun
  const off = (day + dateStr.slice(8,10) * 1) % pool.length;    // rotate daily
  const chosen = [];
  for (let i = 0; i < Math.min(3, pool.length); i++) chosen.push(pool[(off + i) % pool.length]);
  return chosen;
}
function renderSchedule(){
  const service = schedServiceSel.value, dateStr = schedDate.value;
  const pool = specialistsFor(service, dateStr);
  const dayName = new Date(dateStr + "T12:00:00").toLocaleDateString("en-KE", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
  specGrid.innerHTML = pool.map((p,i) => {
    const c = AV_COLORS[(i + dateStr.length) % AV_COLORS.length];
    return `<article class="card spec-card">
      <div class="avatar" style="--a:${c[0]};--b:${c[1]}">${initials(p.name)}</div>
      <h4>${p.name}</h4>
      <p class="role">${p.role}</p>
      <p class="quals">${p.quals}</p>
      <span class="shift">${SHIFTS[i % SHIFTS.length]}</span>
    </article>`;
  }).join("") + `<p class="day-note" style="grid-column:1/-1">📅 Showing the 3 specialists on duty for <b>${service}</b> on <b>${dayName}</b>. Three specialists are available for every service, every day.</p>`;
}
schedDate.addEventListener("change", renderSchedule);
schedServiceSel.addEventListener("change", renderSchedule);
$("#todayBtn").addEventListener("click", () => { schedDate.value = todayISO(); renderSchedule(); });
renderSchedule();

/* ---------- Booking ---------- */
const bookingForm = $("#bookingForm"), bookingList = $("#bookingList");
$("#bkDate").min = todayISO();
$("#bkDate").value = todayISO();

function fillSpecialistOptions(){
  const sel = $("#bkSpecialist"), svc = bkService.value;
  const base = `<option value="">No preference — assign me the best available</option>`;
  sel.innerHTML = base;
  const key = svc.startsWith("Massage") ? "Massage — Swedish Massage" : svc;
  (SPECIALISTS[key] || []).forEach(p => sel.insertAdjacentHTML("beforeend", `<option>${p.name}</option>`));
}
bkService.addEventListener("change", fillSpecialistOptions);

function renderBookings(){
  const bookings = store.get("elevafitness_bookings", []);
  if (!bookings.length){
    bookingList.innerHTML = `<p class="muted">No bookings yet — your requests will appear here.</p>`;
    return;
  }
  bookingList.innerHTML = bookings.map((b,i) => `
    <div class="booking-item">
      <button class="cancel" data-i="${i}" title="Cancel booking">✖</button>
      <b>${b.service}</b><br>📅 ${b.date} · ${b.time}<br>👤 ${b.name} · ${b.phone}
      ${b.specialist ? `<br>🎯 Preferred: ${b.specialist}` : ""}
    </div>`).join("");
}
bookingList.addEventListener("click", e => {
  const btn = e.target.closest(".cancel");
  if (!btn) return;
  const bookings = store.get("elevafitness_bookings", []);
  bookings.splice(+btn.dataset.i, 1);
  store.set("elevafitness_bookings", bookings);
  renderBookings();
});
bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  const b = {
    name: $("#bkName").value.trim(),
    phone: $("#bkPhone").value.trim(),
    email: $("#bkEmail").value.trim(),
    service: bkService.value,
    date: $("#bkDate").value,
    time: $("#bkTime").value,
    specialist: $("#bkSpecialist").value,
    notes: $("#bkNotes").value.trim(),
    created: new Date().toISOString(),
  };
  const bookings = store.get("elevafitness_bookings", []);
  bookings.push(b);
  store.set("elevafitness_bookings", bookings);
  renderBookings();
  const btn = bookingForm.querySelector("button[type=submit]");
  const old = btn.textContent;
  btn.textContent = "✅ Request received — we'll confirm shortly!";
  btn.style.background = "linear-gradient(120deg,#28a745,#1e7d32)";
  bookingForm.reset();
  $("#bkDate").value = todayISO();
  setTimeout(() => { btn.textContent = old; btn.style.background = ""; }, 3500);
  bookingList.scrollIntoView({ behavior:"smooth", block:"nearest" });
});
renderBookings();

/* ---------- Reviews & testimonials ---------- */
let currentRating = 0;
const starInput = $("#starInput");
starInput.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  currentRating = +btn.dataset.v;
  [...starInput.children].forEach((s,i) => s.classList.toggle("on", i < currentRating));
});
const stars = n => "★".repeat(n) + "☆".repeat(5 - n);

function allReviews(){
  const user = store.get("elevafitness_reviews", []);
  return [...user, ...SEED_REVIEWS];
}
function renderReviews(){
  const reviews = allReviews();
  const avg = (reviews.reduce((a,r) => a + r.rating, 0) / reviews.length).toFixed(1);
  $("#avgRating").textContent = avg;
  $("#testimonialGrid").innerHTML = reviews.map(r => `
    <div class="t-card">
      <div class="stars">${stars(r.rating)}</div>
      <p>“${r.text}”</p>
      <p class="who">${r.name}</p>
      <p class="svc">Service: ${r.service}</p>
    </div>`).join("");
}
$("#reviewForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = $("#reviewMsg");
  if (!currentRating){ msg.textContent = "Please pick a star rating first."; msg.style.color = "#c0392b"; return; }
  const r = {
    name: $("#rvName").value.trim(),
    service: $("#rvService").value,
    rating: currentRating,
    text: $("#rvText").value.trim(),
  };
  const user = store.get("elevafitness_reviews", []);
  user.unshift(r);
  store.set("elevafitness_reviews", user);
  renderReviews();
  e.target.reset();
  currentRating = 0;
  [...starInput.children].forEach(s => s.classList.remove("on"));
  msg.textContent = "🎉 Thank you! Your review is now live below.";
  msg.style.color = "#1e7d32";
  setTimeout(() => msg.textContent = "", 4000);
});
renderReviews();

/* ============================================================
   PROFESSIONAL TIMETABLE + LIVE AVAILABILITY + PROMO DAYS
   ============================================================ */

/* Weekly working schedule for every professional (dow: 0=Sun … 6=Sat) */
const SCHEDULE = {
  /* Gym & Aerobics trainers — cover daily sessions */
  "Kevin Tuitoek":     { days:[1,2,3,4,5],   sessions:["morning","evening"] },
  "Felix Odhiambo":    { days:[2,3,4,6],     sessions:["morning","evening"] },
  "George Mbugua":     { days:[1,3,5,6],     sessions:["morning","noon","evening"] },
  "Ruth Adisa":        { days:[2,4,5,0],     sessions:["noon","evening"] },
  "Lucy Muthoni":      { days:[1,2,3,4,5],   sessions:["morning","noon"] },
  "Sheila Barasa":     { days:[3,4,5,6],     sessions:["noon","evening"] },
  /* Massage therapists */
  "Joseph Maina":      { days:[1,2,3,4,5,6], from:8,  to:20 },
  "Grace Kilonzo":     { days:[1,2,4,5,6],   from:9,  to:19 },
  "Elijah Omondi":     { days:[2,3,4,5,6],   from:8,  to:18 },
  "Pauline Njeri":     { days:[1,3,5,6],     from:9,  to:20 },
  "Dennis Kariuki":    { days:[1,2,3,5,6],   from:10, to:18 },
  "Amina Mohammed":    { days:[2,4,5,6,0],   from:8,  to:19 },
  /* Doctors & clinicians */
  "Dr. David Mwangi":  { days:[1,2,3,5,6],   from:8,  to:16 },
  "Dr. Sarah Achieng'":{ days:[1,2,4,5,6],   from:9,  to:17 },
  "Dr. Cynthia Kamau": { days:[2,3,4,5,6],   from:8,  to:16 },
  "Dr. Brian Kiprop":  { days:[1,3,4,5,6],   from:8,  to:17 },
  "Dr. James Olouch":  { days:[1,2,3,4,5],   from:10, to:18 },
  "Dr. Mercy Chebet":  { days:[2,4,5,6,0],   from:9,  to:17 },
  "Dr. Otieno Moraa":  { days:[1,2,3,4,5],   from:8,  to:16 },
  "Ann Kiptoo":        { days:[1,3,4,5,6],   from:9,  to:17 },
  "Samuel Ndung'u":    { days:[2,3,5,6],     from:8,  to:16 },
  "Dr. Wanjiru Njoroge":{days:[1,2,3,4,5],   from:9,  to:17 },
  "Kelvin Ochieng'":   { days:[2,3,4,5,6],   from:10, to:18 },
  "Faith Wairimu":     { days:[1,4,5,6,0],   from:8,  to:16 },
};

const CLINIC_SLOTS = [["8:00 AM",8],["9:00 AM",9],["10:00 AM",10],["11:00 AM",11],["12:00 PM",12],
                      ["2:00 PM",14],["3:00 PM",15],["4:00 PM",16],["5:00 PM",17],
                      ["6:00 PM",18],["7:00 PM",19],["8:00 PM",20]];
const SESSION_SLOTS = {
  morning:["🌅 Morning 5–8 AM",  "Morning: 5:00 AM – 8:00 AM"],
  noon:   ["🌞 Noon 12–2 PM",    "Noon: 12:00 PM – 2:00 PM"],
  evening:["🌆 Evening 6–10 PM", "Evening: 6:00 PM – 10:00 PM"],
};
function hashStr(s){ let h=0; for (let i=0;i<s.length;i++){ h=(h*31 + s.charCodeAt(i)) >>> 0; } return h; }
const slotTaken = (n,ds,t) => hashStr(n + "|" + ds + "|" + t) % 10 < 3;   // ~30% of slots already booked
const to12h = h24 => { const ap = h24 >= 12 ? "PM" : "AM"; let h = h24 % 12; if (h === 0) h = 12; return `${h}:00 ${ap}`; };
function poolFor(key){ return key.startsWith("Massage") ? SPECIALISTS["Massage — Swedish Massage"] : (SPECIALISTS[key] || []); }

/* ---------- Professional Timetable ---------- */
const ttService = $("#ttService"), ttTable = $("#ttTable");
function renderTimetable(){
  const pool = poolFor(ttService.value);
  const todayCol = (new Date().getDay() + 6) % 7;               // Monday = 0
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const head = `<thead><tr><th>Professional</th>${days.map((d,i) =>
    `<th class="${i === todayCol ? "tt-today" : ""}">${d.slice(0,3)}${i === todayCol ? " •" : ""}</th>`).join("")}</tr></thead>`;
  const rows = pool.map(p => {
    const sch = SCHEDULE[p.name];
    const cells = days.map((_, i) => {
      const dow = (i + 1) % 7;
      if (!sch || !sch.days.includes(dow)) return `<td class="tt-cell-off">—</td>`;
      if (sch.sessions) return `<td class="tt-cell-on">${sch.sessions.map(s => SESSION_SLOTS[s][0].split(" ")[0]).join(" ")}</td>`;
      return `<td class="tt-cell-on">${to12h(sch.from)} –<br>${to12h(sch.to)}</td>`;
    }).join("");
    return `<tr><td>${p.name}<br><small class="muted">${p.role}</small></td>${cells}</tr>`;
  }).join("");
  ttTable.innerHTML = head + "<tbody>" + rows + "</tbody>";
}
ttService.addEventListener("change", renderTimetable);
renderTimetable();

/* ---------- Live availability inside the booking form ---------- */
const availPanel = $("#availPanel"), promoNotice = $("#promoNotice");

function slotBtn(name, label, value, ds){
  const taken = slotTaken(name, ds, value);
  return `<button type="button" class="slot-btn${taken ? " booked" : ""}" ${taken ? "disabled" : ""} data-pro="${name}" data-time="${value}">${taken ? "Booked" : label}</button>`;
}
function updateAvailability(){
  const svc = bkService.value, ds = $("#bkDate").value;
  fillSpecialistOptions();
  updatePromoNotice();
  if (!svc || !ds){
    availPanel.innerHTML = `<p class="muted">Choose a service and a date above to see available professionals and their free time slots.</p>`;
    return;
  }
  const dow = new Date(ds + "T12:00:00").getDay();
  const avail = poolFor(svc).filter(p => { const sch = SCHEDULE[p.name]; return sch && sch.days.includes(dow); });
  const dateLabel = new Date(ds + "T12:00:00").toLocaleDateString("en-KE", { weekday:"long", day:"numeric", month:"long" });
  if (!avail.length){
    availPanel.innerHTML = `<p class="muted">😔 No professionals for <b>${svc}</b> on <b>${dateLabel}</b>. Please pick another date.</p>`;
    return;
  }
  availPanel.innerHTML = avail.map((p, i) => {
    const sch = SCHEDULE[p.name];
    const slots = sch.sessions
      ? sch.sessions.map(k => slotBtn(p.name, SESSION_SLOTS[k][0], SESSION_SLOTS[k][1], ds)).join("")
      : CLINIC_SLOTS.filter(([, h]) => h >= sch.from && h < sch.to).map(([l]) => slotBtn(p.name, l, l, ds)).join("");
    const hours = sch.sessions
      ? sch.sessions.map(k => SESSION_SLOTS[k][0]).join("  ·  ")
      : `${to12h(sch.from)} – ${to12h(sch.to)}`;
    const c = AV_COLORS[(i + ds.length) % AV_COLORS.length];
    return `<div class="avail-pro">
      <div class="avail-pro-head">
        <div class="avatar" style="--a:${c[0]};--b:${c[1]}">${initials(p.name)}</div>
        <div><b>${p.name}</b> <small class="muted">· ${p.role}</small><br><small class="muted">🕒 ${hours}</small></div>
      </div>
      <div class="avail-slots">${slots}</div>
    </div>`;
  }).join("") + `<p class="muted" style="font-size:.8rem">Showing availability for <b>${svc}</b> on <b>${dateLabel}</b>. Greyed-out slots are already taken.</p>`;
}
availPanel.addEventListener("click", e => {
  const b = e.target.closest(".slot-btn:not(.booked)");
  if (!b) return;
  $("#bkSpecialist").value = b.dataset.pro;
  $("#bkTime").value = b.dataset.time;
  availPanel.querySelectorAll(".slot-btn.sel").forEach(x => x.classList.remove("sel"));
  b.classList.add("sel");
});
bkService.addEventListener("change", updateAvailability);
$("#bkDate").addEventListener("change", updateAvailability);

/* ---------- Promotional days ---------- */
const PROMOS = [
  { dow:1, emoji:"💆", name:"Massage Monday",     off:0.15, desc:"15% off ALL massage therapies — every Monday.", match:s => s.startsWith("Massage —") },
  { dow:3, emoji:"🩺", name:"Wellness Wednesday", off:0.20, desc:"20% off all Physiotherapy & Chiropractic treatment sessions.", match:s => ["Physiotherapy","Chiropractic Treatment"].includes(s) },
  { dow:5, emoji:"🏋️", name:"Fitness Friday",    off:0.25, desc:"25% off Gym day passes and Aerobics drop-in sessions.", match:s => ["Gym","Aerobics"].includes(s) },
  { dow:6, emoji:"💑", name:"Spa Saturday",       off:0.30, desc:"30% off Reflexology and Couples Massages.", match:s => s === "Massage — Reflexology" },
  { dow:0, emoji:"🥗", name:"Community Sunday",   off:0.20, desc:"Free 15-min health screening with any visit, plus 20% off Nutrition consults.", match:s => s === "Nutrition Support" },
];
function basePrice(s){
  const m = MASSAGES.find(m => ("Massage — " + m.name) === s);
  if (m) return parseInt(m.price.replace(/[^0-9]/g, ""));
  return {"Gym":300, "Aerobics":400, "Physiotherapy":2000, "Chiropractic Treatment":2500, "Nutrition Support":2500, "Psychology":3000}[s] || 0;
}
function updatePromoNotice(){
  const svc = bkService.value, ds = $("#bkDate").value;
  const pr = (svc && ds) ? PROMOS.find(p => p.dow === new Date(ds + "T12:00:00").getDay() && p.match(svc)) : null;
  if (!pr){ promoNotice.innerHTML = ""; return; }
  const base = basePrice(svc), final = Math.round(base * (1 - pr.off));
  promoNotice.innerHTML = `<div class="promo-notice">🎉 <b>${pr.name}!</b> ${pr.desc}
    <span class="discount">Estimated price on this date: <s>Ksh ${base.toLocaleString()}</s> → Ksh ${final.toLocaleString()}</span></div>`;
}
function nextDate(dow){
  const d = new Date();
  d.setDate(d.getDate() + ((dow - d.getDay() + 7) % 7));
  return d;
}
$("#promoGrid").innerHTML = PROMOS.map(p => {
  const d = nextDate(p.dow), ds = d.toISOString().slice(0, 10);
  return `<article class="card promo-card">
    <span class="promo-emoji">${p.emoji}</span>
    <span class="promo-badge">−${Math.round(p.off * 100)}%</span>
    <h4>${p.name}</h4>
    <p>${p.desc}</p>
    <p class="promo-next">Next: <b>${d.toLocaleDateString("en-KE", { weekday:"long", day:"numeric", month:"long" })}</b></p>
    <button class="btn btn-small promo-book" data-date="${ds}">Book this promo day</button>
  </article>`;
}).join("");
document.addEventListener("click", e => {
  const b = e.target.closest(".promo-book");
  if (!b) return;
  $("#bkDate").value = b.dataset.date;
  updateAvailability();
  document.getElementById("bookings").scrollIntoView({ behavior:"smooth" });
});

updateAvailability();
