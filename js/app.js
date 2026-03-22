/* ===========================
   VolAir Airlines — app.js
   =========================== */

'use strict';

/* ==============================================
   TRANSLATIONS (i18n)
   ============================================== */
const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.crew':'Our Crew','nav.fleet':'Our Fleet','nav.about':'About','nav.book':'Book Now',
    'step.search':'Search','step.flights':'Flights','step.seats':'Seats','step.summary':'Summary','step.payment':'Payment','step.done':'Done',
    'index.tagline':'Sky is not the limit. It\'s your runway.',
    'index.slogan':'Discover Europe\'s most beautiful destinations with VolAir Airlines',
    'index.bookFlight':'Book a Flight','index.explore':'Explore Destinations',
    'index.popular':'Popular Destinations','index.subtitle':'Direct flights from Tel Aviv to Europe\'s finest cities',
    'index.direct':'Direct Flights','index.directDesc':'Non-stop routes from Tel Aviv to Europe\'s top destinations — no layovers, no stress.',
    'index.seat':'Choose Your Seat','index.seatDesc':'Pick your perfect seat from our interactive seat map before you fly.',
    'index.safe':'Safe & Reliable','index.safeDesc':'Modern Airbus fleet with an impeccable safety record and on-time performance.',
    'flights.title':'Search Flights','flights.subtitle':'Find the best fares for your journey',
    'flights.oneWay':'One-way','flights.roundTrip':'Round-trip',
    'flights.from':'From','flights.to':'To',
    'flights.dep':'Departure Date','flights.ret':'Return Date',
    'flights.passengers':'Passengers',
    'flights.adults':'Adults','flights.adultsAge':'18 years and above',
    'flights.teens':'Teens','flights.teensAge':'12–17 years',
    'flights.children':'Children','flights.childrenAge':'2–11 years',
    'flights.search':'Search Flights ✈',
    'seats.title':'Select Your Seats',
    'seats.available':'Available','seats.taken':'Taken','seats.yourSel':'Your Selection',
    'seats.yourSelTitle':'Your Selection','seats.seatsSelected':'seats selected',
    'seats.noSeats':'No seats selected',
    'summary.title':'Booking Summary','summary.subtitle':'Review your details before proceeding to payment',
    'summary.routeTitle':'Route & Dates','summary.passTitle':'Passengers',
    'summary.flightTitle':'Flight Details','summary.extrasTitle':'Extra Services',
    'summary.seatsTitle':'Seats','summary.total':'Total Amount',
    'summary.contact':'Contact Information',
    'summary.email':'Email Address','summary.phone':'Phone Number',
    'payment.title':'Payment','payment.subtitle':'Choose your preferred payment method',
    'payment.totalPay':'Total to pay',
    'payment.credit':'Credit Card','payment.paypal':'PayPal','payment.digital':'Apple / Google Pay',
    'payment.fastSecure':'Fast & secure','payment.oneTap':'One-tap payment',
    'payment.cardHolder':'Card Holder','payment.expires':'Expires',
    'payment.cardHolderName':'Cardholder Name','payment.cardNumber':'Card Number',
    'payment.expiry':'Expiry Date','payment.cvv':'CVV',
    'payment.payNow':'🔒 Pay Now',
    'payment.ssl':'🔐 Your payment is protected by 256-bit SSL encryption',
    'confirm.title':'Booking Confirmed!',
    'confirm.subtitle':'Your flight has been booked successfully. Have a wonderful journey!',
    'confirm.print':'🖨 Print Boarding Pass','confirm.save':'💾 Save as PDF',
    'confirm.backHome':'← Back to Home',
    'confirm.flightSec':'Flight','confirm.paxSec':'Passengers & Seats',
    'confirm.contactSec':'Contact','confirm.totalPaid':'Total Paid',
    'btn.back':'← Back','btn.next':'Next →',
    'btn.nextSeats':'Next: Select Seats →','btn.nextPayment':'Next: Payment →',
    'footer.rights':'© 2026 VolAir Airlines. All rights reserved.',
    'results.select':'Select Flight','results.total':'Total:','results.perPerson':'per person',
    'extra.luggage':'🧳 Checked Luggage','extra.priority':'⚡ Priority Boarding','extra.drinks':'🍸 Special Drinks',
  },
  he: {
    'nav.home':'בית','nav.crew':'הצוות שלנו','nav.fleet':'הצי שלנו','nav.about':'אודות','nav.book':'הזמן עכשיו',
    'step.search':'חיפוש','step.flights':'טיסות','step.seats':'מושבים','step.summary':'סיכום','step.payment':'תשלום','step.done':'סיום',
    'index.tagline':'השמיים הם לא הגבול. הם המסלול שלך.',
    'index.slogan':'גלה את היעדים היפים באירופה עם VolAir Airlines',
    'index.bookFlight':'הזמן טיסה','index.explore':'גלה יעדים',
    'index.popular':'יעדים פופולריים','index.subtitle':'טיסות ישירות מתל אביב לערים היפות באירופה',
    'index.direct':'טיסות ישירות','index.directDesc':'מסלולים ישירים מתל אביב ליעדים הטובים באירופה — ללא עצירות, ללא לחץ.',
    'index.seat':'בחר מושב','index.seatDesc':'בחר את המושב המושלם שלך ממפת המושבים האינטראקטיבית לפני הטיסה.',
    'index.safe':'בטוח ואמין','index.safeDesc':'צי איירבוס מודרני עם שיא בטיחות מושלם וביצועים בזמן.',
    'flights.title':'חיפוש טיסות','flights.subtitle':'מצא את המחירים הטובים ביותר לנסיעתך',
    'flights.oneWay':'כיוון אחד','flights.roundTrip':'הלוך ושוב',
    'flights.from':'מ','flights.to':'אל',
    'flights.dep':'תאריך יציאה','flights.ret':'תאריך חזרה',
    'flights.passengers':'נוסעים',
    'flights.adults':'מבוגרים','flights.adultsAge':'18 ומעלה',
    'flights.teens':'בני נוער','flights.teensAge':'12–17 שנים',
    'flights.children':'ילדים','flights.childrenAge':'2–11 שנים',
    'flights.search':'חפש טיסות ✈',
    'seats.title':'בחר את המושבים שלך',
    'seats.available':'פנוי','seats.taken':'תפוס','seats.yourSel':'הבחירה שלך',
    'seats.yourSelTitle':'הבחירה שלך','seats.seatsSelected':'מושבים נבחרו',
    'seats.noSeats':'לא נבחרו מושבים',
    'summary.title':'סיכום הזמנה','summary.subtitle':'בדוק את הפרטים לפני המעבר לתשלום',
    'summary.routeTitle':'מסלול ותאריכים','summary.passTitle':'נוסעים',
    'summary.flightTitle':'פרטי הטיסה','summary.extrasTitle':'שירותים נוספים',
    'summary.seatsTitle':'מושבים','summary.total':'סכום כולל',
    'summary.contact':'פרטי התקשרות',
    'summary.email':'כתובת אימייל','summary.phone':'מספר טלפון',
    'payment.title':'תשלום','payment.subtitle':'בחר את אמצעי התשלום המועדף עליך',
    'payment.totalPay':'סה"כ לתשלום',
    'payment.credit':'כרטיס אשראי','payment.paypal':'פייפאל','payment.digital':'Apple / Google Pay',
    'payment.fastSecure':'מהיר ומאובטח','payment.oneTap':'תשלום בלחיצה אחת',
    'payment.cardHolder':'שם בעל הכרטיס','payment.expires':'תוקף',
    'payment.cardHolderName':'שם בעל הכרטיס','payment.cardNumber':'מספר כרטיס',
    'payment.expiry':'תאריך תפוגה','payment.cvv':'CVV',
    'payment.payNow':'🔒 שלם עכשיו',
    'payment.ssl':'🔐 התשלום שלך מוגן בהצפנת SSL 256-ביט',
    'confirm.title':'ההזמנה אושרה!',
    'confirm.subtitle':'הטיסה שלך הוזמנה בהצלחה. נסיעה טובה!',
    'confirm.print':'🖨 הדפס כרטיס עלייה','confirm.save':'💾 שמור כ-PDF',
    'confirm.backHome':'← חזרה לדף הבית',
    'confirm.flightSec':'טיסה','confirm.paxSec':'נוסעים ומושבים',
    'confirm.contactSec':'פרטי קשר','confirm.totalPaid':'סה"כ שולם',
    'btn.back':'← חזרה','btn.next':'הבא →',
    'btn.nextSeats':'הבא: בחר מושבים →','btn.nextPayment':'הבא: תשלום →',
    'footer.rights':'© 2026 VolAir Airlines. כל הזכויות שמורות.',
    'results.select':'בחר טיסה','results.total':'סה"כ:','results.perPerson':'לנוסע',
    'extra.luggage':'🧳 כבודה','extra.priority':'⚡ עלייה מועדפת','extra.drinks':'🍸 משקאות מיוחדים',
  },
  fr: {
    'nav.home':'Accueil','nav.crew':'Notre Équipage','nav.fleet':'Notre Flotte','nav.about':'À Propos','nav.book':'Réserver',
    'step.search':'Recherche','step.flights':'Vols','step.seats':'Sièges','step.summary':'Résumé','step.payment':'Paiement','step.done':'Terminé',
    'index.tagline':'Le ciel n\'est pas la limite. C\'est votre piste.',
    'index.slogan':'Découvrez les plus belles destinations d\'Europe avec VolAir Airlines',
    'index.bookFlight':'Réserver un Vol','index.explore':'Explorer les Destinations',
    'index.popular':'Destinations Populaires','index.subtitle':'Vols directs de Tel Aviv vers les plus belles villes d\'Europe',
    'index.direct':'Vols Directs','index.directDesc':'Liaisons directes de Tel Aviv vers les meilleures destinations d\'Europe — sans escale.',
    'index.seat':'Choisissez Votre Siège','index.seatDesc':'Choisissez votre siège idéal sur notre plan de cabine interactif avant de voler.',
    'index.safe':'Sûr & Fiable','index.safeDesc':'Flotte Airbus moderne avec un bilan de sécurité impeccable et des performances ponctuelles.',
    'flights.title':'Rechercher des Vols','flights.subtitle':'Trouvez les meilleurs tarifs pour votre voyage',
    'flights.oneWay':'Aller simple','flights.roundTrip':'Aller-retour',
    'flights.from':'De','flights.to':'À',
    'flights.dep':'Date de départ','flights.ret':'Date de retour',
    'flights.passengers':'Passagers',
    'flights.adults':'Adultes','flights.adultsAge':'18 ans et plus',
    'flights.teens':'Adolescents','flights.teensAge':'12–17 ans',
    'flights.children':'Enfants','flights.childrenAge':'2–11 ans',
    'flights.search':'Rechercher des Vols ✈',
    'seats.title':'Sélectionnez vos Sièges',
    'seats.available':'Disponible','seats.taken':'Occupé','seats.yourSel':'Votre Sélection',
    'seats.yourSelTitle':'Votre Sélection','seats.seatsSelected':'sièges sélectionnés',
    'seats.noSeats':'Aucun siège sélectionné',
    'summary.title':'Récapitulatif','summary.subtitle':'Vérifiez vos détails avant de procéder au paiement',
    'summary.routeTitle':'Itinéraire & Dates','summary.passTitle':'Passagers',
    'summary.flightTitle':'Détails du Vol','summary.extrasTitle':'Services Supplémentaires',
    'summary.seatsTitle':'Sièges','summary.total':'Montant Total',
    'summary.contact':'Coordonnées',
    'summary.email':'Adresse E-mail','summary.phone':'Numéro de Téléphone',
    'payment.title':'Paiement','payment.subtitle':'Choisissez votre mode de paiement',
    'payment.totalPay':'Total à payer',
    'payment.credit':'Carte Bancaire','payment.paypal':'PayPal','payment.digital':'Apple / Google Pay',
    'payment.fastSecure':'Rapide & sécurisé','payment.oneTap':'Paiement en un clic',
    'payment.cardHolder':'Titulaire','payment.expires':'Expire',
    'payment.cardHolderName':'Nom du Titulaire','payment.cardNumber':'Numéro de Carte',
    'payment.expiry':'Date d\'Expiration','payment.cvv':'CVV',
    'payment.payNow':'🔒 Payer Maintenant',
    'payment.ssl':'🔐 Votre paiement est protégé par un chiffrement SSL 256 bits',
    'confirm.title':'Réservation Confirmée!',
    'confirm.subtitle':'Votre vol a été réservé avec succès. Bon voyage!',
    'confirm.print':'🖨 Imprimer la Carte d\'Embarquement','confirm.save':'💾 Enregistrer en PDF',
    'confirm.backHome':'← Retour à l\'Accueil',
    'confirm.flightSec':'Vol','confirm.paxSec':'Passagers & Sièges',
    'confirm.contactSec':'Contact','confirm.totalPaid':'Total Payé',
    'btn.back':'← Retour','btn.next':'Suivant →',
    'btn.nextSeats':'Suivant: Sièges →','btn.nextPayment':'Suivant: Paiement →',
    'footer.rights':'© 2026 VolAir Airlines. Tous droits réservés.',
    'results.select':'Sélectionner','results.total':'Total:','results.perPerson':'par personne',
    'extra.luggage':'🧳 Bagage en soute','extra.priority':'⚡ Embarquement prioritaire','extra.drinks':'🍸 Boissons spéciales',
  }
};

function getCurrentLang() { return localStorage.getItem('volair_lang') || 'en'; }

function t(key) {
  const lang = getCurrentLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
  localStorage.setItem('volair_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
}

/* ---------- Storage Helpers ---------- */
function saveToStorage(key, value) {
  try { localStorage.setItem('volair_' + key, JSON.stringify(value)); } catch (e) {}
}
function getFromStorage(key) {
  try { return JSON.parse(localStorage.getItem('volair_' + key)); } catch (e) { return null; }
}

/* ---------- Nav toggle (mobile) ---------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  // Highlight active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  // Apply saved language
  setLanguage(getCurrentLang());
}

/* ==============================================
   INDEX PAGE
   ============================================== */
function initIndexPage() {
  // Destination cards — save destination to storage on click
  document.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', () => {
      const dest = card.dataset.dest;
      if (dest) saveToStorage('destination', dest);
    });
  });
}

/* ==============================================
   FLIGHTS PAGE
   ============================================== */
function initFlightsPage() {
  // Trip type toggle
  const tripBtns = document.querySelectorAll('.trip-btn');
  const returnGroup = document.getElementById('return-date-group');
  let tripType = 'one-way';

  tripBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tripBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tripType = btn.dataset.trip;
      if (returnGroup) {
        returnGroup.style.display = tripType === 'round-trip' ? '' : 'none';
      }
    });
  });

  // Default: hide return date
  if (returnGroup) returnGroup.style.display = 'none';

  // Passenger counters
  document.querySelectorAll('.pax-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const countEl = document.getElementById(target + '-count');
      const hiddenInput = document.getElementById(target);
      if (!countEl) return;
      let val = parseInt(countEl.textContent) || 0;
      if (btn.dataset.dir === 'up') val++;
      if (btn.dataset.dir === 'down' && val > 0) val--;
      countEl.textContent = val;
      if (hiddenInput) hiddenInput.value = val;
    });
  });

  // Swap origin/destination
  const swapBtn = document.getElementById('swap-btn');
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  if (swapBtn && fromInput && toInput) {
    swapBtn.addEventListener('click', () => {
      const tmp = fromInput.value;
      fromInput.value = toInput.value;
      toInput.value = tmp;
    });
  }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type=date]').forEach(input => {
    input.min = today;
    if (!input.value) input.value = today;
  });

  // Form submit
  const form = document.getElementById('flights-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const children = parseInt(document.getElementById('children')?.value) || 0;
      const teens = parseInt(document.getElementById('teens')?.value) || 0;
      const adults = parseInt(document.getElementById('adults')?.value) || 0;
      const total = children + teens + adults;

      if (total === 0) {
        alert('Please add at least 1 passenger.');
        return;
      }

      const data = {
        from: document.getElementById('from')?.value || 'TLV',
        to: document.getElementById('to')?.value || '',
        departure: document.getElementById('departure')?.value || today,
        returnDate: document.getElementById('return-date')?.value || '',
        tripType,
        children,
        teens,
        adults,
        total
      };

      saveToStorage('search', data);
      window.location.href = 'results.html';
    });
  }

  // Pre-fill destination if coming from index
  const savedDest = getFromStorage('destination');
  if (savedDest && document.getElementById('to')) {
    document.getElementById('to').value = savedDest;
  }
}

/* ==============================================
   RESULTS PAGE
   ============================================== */
const SAMPLE_FLIGHTS = [
  { id: 'VA101', from: 'TLV', to: 'BCN', dep: '06:30', arr: '09:45', duration: '4h 15m', price: 89, stops: 'Direct' },
  { id: 'VA203', from: 'TLV', to: 'BCN', dep: '11:00', arr: '14:30', duration: '4h 30m', price: 74, stops: 'Direct' },
  { id: 'VA315', from: 'TLV', to: 'BCN', dep: '15:45', arr: '19:10', duration: '4h 25m', price: 62, stops: 'Direct' },
  { id: 'VA427', from: 'TLV', to: 'BCN', dep: '20:00', arr: '23:55', duration: '4h 55m', price: 55, stops: 'Direct' },
];

const EXTRAS = [
  { id: 'luggage', key: 'extra.luggage', price: 25 },
  { id: 'priority', key: 'extra.priority', price: 15 },
  { id: 'drinks', key: 'extra.drinks', price: 10 },
];

function initResultsPage() {
  const search = getFromStorage('search') || { from: 'TLV', to: 'BCN', departure: '', total: 1 };
  const container = document.getElementById('flights-list');
  const summaryBar = document.getElementById('results-summary');

  if (summaryBar) {
    const dest = search.to || 'Destination';
    const pax = search.total || 1;
    const dep = search.departure || '';
    summaryBar.innerHTML = `
      <span>✈ <strong>${search.from || 'TLV'} → ${dest}</strong></span>
      <span>📅 <strong>${dep || 'Today'}</strong></span>
      <span>👥 <strong>${pax} passenger${pax !== 1 ? 's' : ''}</strong></span>
      <span>${search.tripType === 'round-trip' ? '🔄 Round-trip' : '→ One-way'}</span>
    `;
  }

  // Adjust flight labels based on destination
  const destCity = (search.to || 'BCN').substring(0, 3).toUpperCase();
  const flights = SAMPLE_FLIGHTS.map(f => ({ ...f, to: destCity }));

  let selectedId = null;

  if (!container) return;
  container.innerHTML = '';

  flights.forEach(flight => {
    const card = document.createElement('div');
    card.className = 'flight-card';
    card.dataset.id = flight.id;

    const extrasHtml = EXTRAS.map(ex => `
      <label class="extra-option">
        <input type="checkbox" class="extra-cb" data-price="${ex.price}" data-extra="${ex.id}" data-flight="${flight.id}">
        ${t(ex.key)} <span class="extra-price">+€${ex.price}</span>
      </label>
    `).join('');

    card.innerHTML = `
      <div class="flight-main">
        <div class="flight-time">
          <div class="time">${flight.dep}</div>
          <div class="airport">${flight.from}</div>
          <div class="city">${search.from === 'TLV' ? 'Tel Aviv' : search.from}</div>
        </div>
        <div class="flight-path">
          <div class="duration">${flight.duration}</div>
          <div class="line"></div>
          <div class="stops">${flight.stops}</div>
        </div>
        <div class="flight-time">
          <div class="time">${flight.arr}</div>
          <div class="airport">${flight.to}</div>
          <div class="city">${destinationCity(search.to)}</div>
        </div>
        <div class="flight-price-box">
          <div class="price">€${flight.price}</div>
          <div class="price-label">${t('results.perPerson')}</div>
          <div class="flight-num">${flight.id}</div>
        </div>
      </div>
      <div class="flight-extras">
        ${extrasHtml}
      </div>
      <div class="flight-footer">
        <div class="flight-total">${t('results.total')} <strong class="total-display">€${flight.price * (search.total || 1)}</strong></div>
        <button class="btn btn-primary select-btn" data-id="${flight.id}">${t('results.select')}</button>
      </div>
    `;
    container.appendChild(card);

    // Extra checkboxes update price
    card.querySelectorAll('.extra-cb').forEach(cb => {
      cb.addEventListener('change', () => updateFlightTotal(card, flight, search.total || 1));
    });

    // Select button
    card.querySelector('.select-btn').addEventListener('click', () => {
      document.querySelectorAll('.flight-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedId = flight.id;

      // Gather extras
      const checkedExtras = [];
      card.querySelectorAll('.extra-cb:checked').forEach(cb => {
        const ex = EXTRAS.find(e => e.id === cb.dataset.extra);
        if (ex) checkedExtras.push({ ...ex, label: t(ex.key) });
      });
      const extrasTotal = checkedExtras.reduce((s, e) => s + e.price, 0);
      const baseTotal = flight.price * (search.total || 1);

      saveToStorage('selectedFlight', {
        ...flight,
        extras: checkedExtras,
        extrasTotal,
        baseTotal,
        grandTotal: baseTotal + extrasTotal,
        passengers: search.total || 1,
      });

      document.getElementById('next-btn')?.removeAttribute('disabled');
    });
  });

  document.getElementById('next-btn')?.setAttribute('disabled', '');

  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (!selectedId) { alert('Please select a flight.'); return; }
    window.location.href = 'seats.html';
  });
  document.getElementById('back-btn')?.addEventListener('click', () => {
    window.location.href = 'flights.html';
  });
}

function updateFlightTotal(card, flight, paxCount) {
  let extras = 0;
  card.querySelectorAll('.extra-cb:checked').forEach(cb => extras += parseInt(cb.dataset.price) || 0);
  const total = flight.price * paxCount + extras;
  const display = card.querySelector('.total-display');
  if (display) display.textContent = '€' + total;
}

function destinationCity(code) {
  const map = {
    'BCN': 'Barcelona', 'LIS': 'Lisbon', 'ROM': 'Rome',
    'FCO': 'Rome', 'PRG': 'Prague', 'TLV': 'Tel Aviv',
    'Barcelona': 'Barcelona', 'Lisbon': 'Lisbon',
    'Rome': 'Rome', 'Prague': 'Prague'
  };
  return map[code] || code || 'Destination';
}

/* ==============================================
   SEATS PAGE
   ============================================== */
const TAKEN_SEATS = ['1A','1C','2B','2F','3D','4A','4E','5C','6B','6F','7A','8D','8E','9B','10C'];

function initSeatsPage() {
  const flight = getFromStorage('selectedFlight');
  const search = getFromStorage('search');
  const needed = flight?.passengers || search?.total || 1;
  const container = document.getElementById('seat-rows');
  const selectedList = document.getElementById('selected-seats-list');
  const selectedCounter = document.getElementById('selected-count');
  const neededEl = document.getElementById('needed-count');
  let selected = [];

  if (neededEl) neededEl.textContent = needed;
  if (!container) return;

  // Build seat map: 10 rows, cols A B C (aisle) D E F
  const rows = 10;
  const cols = ['A', 'B', 'C', 'D', 'E', 'F'];

  container.innerHTML = '';
  for (let r = 1; r <= rows; r++) {
    const row = document.createElement('div');
    row.className = 'seat-row';
    row.innerHTML = `<div class="row-num">${r}</div>`;

    cols.forEach((col, idx) => {
      if (idx === 3) {
        const aisle = document.createElement('div');
        aisle.className = 'aisle';
        row.appendChild(aisle);
      }
      const seatId = r + col;
      const isTaken = TAKEN_SEATS.includes(seatId);
      const btn = document.createElement('button');
      btn.className = 'seat ' + (isTaken ? 'taken' : 'available');
      btn.textContent = col;
      btn.title = seatId;
      btn.disabled = isTaken;
      btn.dataset.seat = seatId;

      if (!isTaken) {
        btn.addEventListener('click', () => toggleSeat(btn, seatId, needed, selected, selectedList, selectedCounter));
      }
      row.appendChild(btn);
    });
    container.appendChild(row);
  }

  function toggleSeat(btn, seatId, needed, selected, list, counter) {
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected');
      btn.classList.add('available');
      selected.splice(selected.indexOf(seatId), 1);
    } else {
      if (selected.length >= needed) {
        alert(`You need to select exactly ${needed} seat${needed > 1 ? 's' : ''}.`);
        return;
      }
      btn.classList.remove('available');
      btn.classList.add('selected');
      selected.push(seatId);
    }
    updateSeatsSidebar(selected, needed, list, counter);
  }

  function updateSeatsSidebar(selected, needed, list, counter) {
    if (counter) counter.textContent = selected.length + ' / ' + needed;
    if (list) {
      list.innerHTML = selected.length
        ? selected.map(s => `<li><strong>Seat ${s}</strong></li>`).join('')
        : `<li style="color:var(--mid)">${t('seats.noSeats')}</li>`;
    }
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.disabled = selected.length !== needed;
    }
  }

  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (selected.length !== needed) {
      alert(`Please select exactly ${needed} seat${needed > 1 ? 's' : ''}.`);
      return;
    }
    saveToStorage('seats', selected);
    window.location.href = 'summary.html';
  });
  document.getElementById('back-btn')?.addEventListener('click', () => {
    window.location.href = 'results.html';
  });
}

/* ==============================================
   SUMMARY PAGE
   ============================================== */
function initSummaryPage() {
  const search = getFromStorage('search') || {};
  const flight = getFromStorage('selectedFlight') || {};
  const seats = getFromStorage('seats') || [];
  const contact = getFromStorage('contact') || {};

  function row(label, value) {
    return `<div class="summary-row"><span class="label">${label}</span><span class="value">${value}</span></div>`;
  }

  const routeSection = document.getElementById('summary-route');
  if (routeSection) {
    routeSection.innerHTML = `
      ${row('Route', `${search.from || 'TLV'} → ${destinationCity(search.to) || 'Destination'}`)}
      ${row('Departure', search.departure || '—')}
      ${search.tripType === 'round-trip' ? row('Return', search.returnDate || '—') : ''}
      ${row('Trip type', search.tripType === 'round-trip' ? 'Round-trip' : 'One-way')}
    `;
  }

  const paxSection = document.getElementById('summary-passengers');
  if (paxSection) {
    paxSection.innerHTML = `
      ${search.adults ? row('Adults (18+)', search.adults) : ''}
      ${search.teens ? row('Teens (12-17)', search.teens) : ''}
      ${search.children ? row('Children (2-11)', search.children) : ''}
      ${row('Total passengers', search.total || 1)}
    `;
  }

  const flightSection = document.getElementById('summary-flight');
  if (flightSection) {
    flightSection.innerHTML = `
      ${row('Flight', flight.id || '—')}
      ${row('Departure time', flight.dep || '—')}
      ${row('Arrival time', flight.arr || '—')}
      ${row('Duration', flight.duration || '—')}
    `;
  }

  const extrasSection = document.getElementById('summary-extras');
  if (extrasSection) {
    const extrasHtml = flight.extras?.length
      ? flight.extras.map(e => row(e.label, `€${e.price}`)).join('')
      : row('Extras', 'None');
    extrasSection.innerHTML = extrasHtml;
  }

  const seatsSection = document.getElementById('summary-seats');
  if (seatsSection) {
    seatsSection.innerHTML = row('Seats', seats.join(', ') || '—');
  }

  const totalEl = document.getElementById('summary-grand-total');
  if (totalEl) totalEl.textContent = '€' + (flight.grandTotal || 0);

  // Pre-fill contact
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  if (emailInput && contact.email) emailInput.value = contact.email;
  if (phoneInput && contact.phone) phoneInput.value = contact.phone;

  // Form submit
  const form = document.getElementById('summary-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      saveToStorage('contact', {
        email: emailInput?.value || '',
        phone: phoneInput?.value || '',
      });
      window.location.href = 'payment.html';
    });
  }

  document.getElementById('back-btn')?.addEventListener('click', () => {
    window.location.href = 'seats.html';
  });
}

/* ==============================================
   PAYMENT PAGE
   ============================================== */
function initPaymentPage() {
  const flight = getFromStorage('selectedFlight') || {};
  const totalEl = document.getElementById('order-total');
  if (totalEl) totalEl.textContent = '€' + (flight.grandTotal || 0);

  // Method cards
  const methodCards = document.querySelectorAll('.payment-method-card');
  const cardForm = document.getElementById('card-form');
  const paypalForm = document.getElementById('paypal-form');
  const digitalForm = document.getElementById('digital-pay-form');
  let selectedMethod = null;

  function showForm(method) {
    [cardForm, paypalForm, digitalForm].forEach(f => f?.classList.remove('visible'));
    if (method === 'credit' && cardForm) cardForm.classList.add('visible');
    if (method === 'paypal' && paypalForm) paypalForm.classList.add('visible');
    if (method === 'digital' && digitalForm) digitalForm.classList.add('visible');
  }

  methodCards.forEach(card => {
    card.addEventListener('click', () => {
      methodCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedMethod = card.dataset.method;
      showForm(selectedMethod);
      document.getElementById('pay-btn')?.removeAttribute('disabled');
    });
  });

  // Card number display
  const cardNumberInput = document.getElementById('card-number');
  const cardNumberDisplay = document.getElementById('card-number-display');
  if (cardNumberInput && cardNumberDisplay) {
    cardNumberInput.addEventListener('input', () => {
      const raw = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
      const groups = raw.match(/.{1,4}/g) || [];
      const padded = groups.join(' ').padEnd(19, '·').replace(/·/g, ' ·').trim();
      cardNumberDisplay.textContent = raw.length ? groups.join(' ') + (raw.length < 16 ? ' ···· ···· ····'.substring(raw.length * 5 / 4 - 1) : '') : '···· ···· ···· ····';
      // Simpler approach
      cardNumberDisplay.textContent = groups.concat(Array(4 - groups.length).fill('····')).join(' ');
    });
  }

  const expiryInput = document.getElementById('card-expiry');
  const expiryDisplay = document.getElementById('card-expiry-display');
  if (expiryInput && expiryDisplay) {
    expiryInput.addEventListener('input', () => {
      expiryDisplay.textContent = expiryInput.value || '••/••';
    });
  }

  const nameInput = document.getElementById('card-name');
  const nameDisplay = document.getElementById('card-name-display');
  if (nameInput && nameDisplay) {
    nameInput.addEventListener('input', () => {
      nameDisplay.textContent = nameInput.value.toUpperCase() || 'YOUR NAME';
    });
  }

  // Pay button
  const payBtn = document.getElementById('pay-btn');
  payBtn?.setAttribute('disabled', '');
  payBtn?.addEventListener('click', e => {
    e.preventDefault();
    if (!selectedMethod) { alert('Please select a payment method.'); return; }
    if (selectedMethod === 'credit') {
      const num = document.getElementById('card-number')?.value?.replace(/\D/g,'');
      const exp = document.getElementById('card-expiry')?.value;
      const cvv = document.getElementById('card-cvv')?.value;
      if (!num || num.length < 16) { alert('Please enter a valid card number.'); return; }
      if (!exp) { alert('Please enter expiry date.'); return; }
      if (!cvv || cvv.length < 3) { alert('Please enter CVV.'); return; }
    }
    saveToStorage('paymentMethod', selectedMethod);
    saveToStorage('bookingRef', generateRef());
    window.location.href = 'confirmation.html';
  });
}

function generateRef() {
  return 'VA' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

/* ==============================================
   CONFIRMATION PAGE
   ============================================== */
function initConfirmationPage() {
  const ref = getFromStorage('bookingRef') || generateRef();
  const flight = getFromStorage('selectedFlight') || {};
  const search = getFromStorage('search') || {};
  const seats = getFromStorage('seats') || [];
  const contact = getFromStorage('contact') || {};

  const refEl = document.getElementById('booking-ref');
  if (refEl) refEl.textContent = ref;

  function row(label, value) {
    return `<div class="summary-row"><span class="label">${label}</span><span class="value">${value}</span></div>`;
  }

  const details = document.getElementById('confirm-details-body');
  if (details) {
    details.innerHTML = `
      <div class="summary-section">
        <h3>${t('confirm.flightSec')}</h3>
        ${row('Route', `${search.from || 'TLV'} → ${destinationCity(search.to) || 'Destination'}`)}
        ${row('Flight', flight.id || '—')}
        ${row('Date', search.departure || '—')}
        ${row('Departure', flight.dep || '—')}
        ${row('Arrival', flight.arr || '—')}
      </div>
      <div class="summary-section">
        <h3>${t('confirm.paxSec')}</h3>
        ${row('Passengers', search.total || 1)}
        ${row('Seats', seats.join(', ') || '—')}
      </div>
      <div class="summary-section">
        <h3>${t('confirm.contactSec')}</h3>
        ${row('Email', contact.email || '—')}
        ${row('Phone', contact.phone || '—')}
      </div>
      <div class="summary-total-row">
        <span class="label">${t('confirm.totalPaid')}</span>
        <span class="value">€${flight.grandTotal || 0}</span>
      </div>
    `;
  }

  document.getElementById('print-btn')?.addEventListener('click', () => window.print());
  document.getElementById('save-btn')?.addEventListener('click', () => window.print());
}

/* ==============================================
   ROUTER — detect page and init
   ============================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  const page = document.body.dataset.page;
  switch (page) {
    case 'index':        initIndexPage();        break;
    case 'flights':      initFlightsPage();      break;
    case 'results':      initResultsPage();      break;
    case 'seats':        initSeatsPage();        break;
    case 'summary':      initSummaryPage();      break;
    case 'payment':      initPaymentPage();      break;
    case 'confirmation': initConfirmationPage(); break;
  }
});
