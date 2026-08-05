# Villa Gerona — Site To-Do List

## Open items

- [ ] Add photos for the empty gallery categories: Dining Room, Living Room, Second Bedroom, Third Bedroom, Laundry Room
- [ ] Take site offline via GitHub Pages (Settings → Pages → Source → None) until ready to publish, then turn back on when ready

## Completed

### Earlier sessions
- [x] Site built and deployed on GitHub Pages
- [x] Custom domain (villagerona.com) connected
- [x] Bluish pastel color scheme
- [x] Mobile hamburger menu
- [x] Spanish language version with flag switcher
- [x] Shared stylesheet (styles.css) so styling changes apply to both language pages at once
- [x] Categorized photo gallery (by room)
- [x] Google Maps link (real screenshot, not placeholder)
- [x] WhatsApp contact link
- [x] Photo gallery driven by photos.json — adding pictures no longer requires editing HTML
- [x] Added 5 new gallery categories (dining room, living room, 2nd/3rd bedroom, laundry)
- [x] Fixed a bug where leftover Git merge-conflict markers in script.js broke the entire gallery
- [x] Click-to-enlarge lightbox for gallery photos
- [x] Hero redesign: full-bleed photo (80% width w/ right margin, top/bottom crop), bigger headline, quick trust stats, WhatsApp urgency line
- [x] Fixed low-contrast gold/blue label color on dark backgrounds
- [x] Made accessibility note a highlighted callout box with dark text
- [x] Removed email entirely (form field + contact-info listing) — WhatsApp only now
- [x] Removed the contact form altogether — Questions section is now just WhatsApp + Address
- [x] Fixed Spanish accents and ñ throughout index-es.html (24 corrections: habitación, ubicación, diseño, montaña, tecnología, huéspedes, más, día, fácil, través, and more)

---

## How to add a photo now (no HTML editing needed)

1. Upload the image file into the `images/` folder on GitHub
2. Open `photos.json`, find the right category (e.g. `"kitchen"`), and add the filename to the list
3. Commit — the gallery updates automatically

Categories currently available: `master-bedroom`, `master-bathroom`, `kitchen`, `dining-room`, `living-room`, `second-bedroom`, `third-bedroom`, `laundry-room`, `patio-bbq`, `grounds`, `exterior`

---
*Add new items under "Open items" as they come up — just tell Claude to update this list.*
