# VolAir Airlines ✈

A modern, mobile-friendly multi-page web application for **VolAir Airlines** — a fictional Israeli airline operating direct flights between Tel Aviv and European destinations.

---

## How to Run

No installation, no build step, no dependencies.

### Option 1 — Open directly in browser
Double-click `index.html` — it opens in your default browser immediately.

### Option 2 — Live Server (recommended for best experience)
If you use **VS Code**, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), then right-click `index.html` → **Open with Live Server**.

### Option 3 — Python local server
```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

### Option 4 — Node.js local server
```bash
npx serve .
# then open the URL shown in the terminal
```

---

## Project Structure

```
VolAir/
├── index.html          # Homepage — hero, destinations
├── flights.html        # Search form — dates, passengers, route
├── results.html        # Available flights + extras
├── seats.html          # Interactive seat map
├── summary.html        # Booking summary + contact details
├── payment.html        # Payment — credit card / PayPal / Apple Pay
├── confirmation.html   # Booking confirmation + print
├── crew.html           # Our Crew page
├── fleet.html          # Our Fleet page (A321, A320neo)
├── about.html          # About VolAir page
├── css/
│   └── style.css       # Full responsive stylesheet
├── js/
│   └── app.js          # All interactivity + page routing
└── images/             # Drop your images here (see below)
```

---

## Adding Images

Place images in the `images/` folder with these exact filenames:

| Filename | Used on | Description |
|---|---|---|
| `hero-plane.jpg` | Homepage | Main hero aircraft image |
| `logo.png` | Homepage | VolAir logo (transparent PNG preferred) |
| `barcelona.jpg` | Homepage | Barcelona destination card |
| `lisbon.jpg` | Homepage | Lisbon destination card |
| `rome.jpg` | Homepage | Rome destination card |
| `prague.jpg` | Homepage | Prague destination card |
| `crew-smiling.jpg` | Crew page | Cabin crew photo |
| `pilot-cockpit.jpg` | Crew page | Pilot in cockpit photo |
| `a321.jpg` | Fleet page | Airbus A321 aircraft |
| `a320neo.jpg` | Fleet page | Airbus A320neo aircraft |

> If an image is missing, an emoji placeholder is shown automatically — the app works fine without them.

---

## Booking Flow

The app simulates a complete booking experience using `localStorage` to pass data between pages:

```
index.html → flights.html → results.html → seats.html → summary.html → payment.html → confirmation.html
```

1. **Homepage** — choose a destination or click Book Now
2. **Flights** — select route, dates, and number of passengers
3. **Results** — pick a flight and add optional extras (luggage, priority boarding, drinks)
4. **Seats** — choose seats from an interactive cabin map
5. **Summary** — review all booking details, enter email and phone
6. **Payment** — pay by credit card, PayPal, or Apple/Google Pay
7. **Confirmation** — view booking reference, print or save as PDF

---

## Tech Stack

| Technology | Details |
|---|---|
| HTML5 | Semantic markup, no frameworks |
| CSS3 | Custom properties, Flexbox, CSS Grid, responsive |
| JavaScript (ES6+) | Vanilla JS, `localStorage` for state, no libraries |
| Google Fonts | Inter + Montserrat |

---

## Color Palette

| Name | Hex | Used for |
|---|---|---|
| Turquoise | `#00BCD4` | Primary brand color, CTAs |
| Sky Blue | `#03A9F4` | Gradients, accents |
| Lime Green | `#8BC34A` | Success states, Pay button |
| Dark Navy | `#0D1B2A` | Header, dark sections |

---

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.

---

## License

This project was created for educational and demonstration purposes.
© 2026 VolAir Airlines.
