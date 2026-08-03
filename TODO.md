# Villa Gerona — Site To-Do List

## Open items

- [ ] **Contact form email delivery** — decide between:
  - Option A: `mailto:` link (no setup, uses your Gmail directly, guest must manually hit send)
  - Option B: Formspree (free account, auto-delivers to inbox, slightly more setup)
- [ ] Add photos for the new empty gallery categories: Dining Room, Living Room, Second Bedroom, Third Bedroom, Laundry Room
- [ ] Take site offline via GitHub Pages (Settings → Pages → Source → None) until ready to publish, then turn back on when ready

## Completed

### Earlier
- [x] Site built and deployed on GitHub Pages
- [x] Custom domain (villagerona.com) connected
- [x] Bluish pastel color scheme
- [x] Mobile hamburger menu
- [x] Spanish language version with flag switcher
- [x] Shared stylesheet (styles.css) so styling changes apply to both language pages at once
- [x] Categorized photo gallery (by room)
- [x] Google Maps link
- [x] WhatsApp contact link
- [x] Photo gallery driven by photos.json — adding pictures no longer requires editing HTML

### Today
- [x] Amenity category titles made larger and bold; description text changed from faded gray to solid dark
- [x] Added 5 new gallery categories: Dining Room, Living Room, Second Bedroom, Third Bedroom, Laundry Room (in both English and Spanish, currently empty and showing "Photos coming soon")
- [x] Added 2 new master bedroom photos to the gallery
- [x] Fixed a bug where leftover Git merge-conflict markers in script.js were silently breaking the entire photo gallery (no photos or placeholders were showing)
- [x] Replaced the placeholder map graphic with a real Google Maps screenshot showing the driving route from Villa Gerona
- [x] Location list text (shopping, Club Campestre, etc.) changed from faded gray to solid dark for readability

---

## How to add a photo now (no HTML editing needed)

1. Upload the image file into the `images/` folder on GitHub
2. Open `photos.json`, find the right category (e.g. `"kitchen"`), and add the filename to the list
3. Commit — the gallery updates automatically

Categories currently available: `master-bedroom`, `master-bathroom`, `kitchen`, `dining-room`, `living-room`, `second-bedroom`, `third-bedroom`, `laundry-room`, `patio-bbq`, `grounds`, `exterior`

---
*Add new items under "Open items" as they come up — just tell Claude to update this list.*
