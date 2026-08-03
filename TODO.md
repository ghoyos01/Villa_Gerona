# Villa Gerona — Site To-Do List

## Open items

- [ ] **Contact form email delivery** — decide between:
  - Option A: `mailto:` link (no setup, uses your Gmail directly, guest must manually hit send)
  - Option B: Formspree (free account, auto-delivers to inbox, slightly more setup)

## Completed

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

---

## How to add a photo now (no HTML editing needed)

1. Upload the image file into the `images/` folder on GitHub
2. Open `photos.json`, find the right category (e.g. `"kitchen"`), and add the filename to the list
3. Commit — the gallery updates automatically

Categories currently available: `master-bedroom`, `master-bathroom`, `kitchen`, `patio-bbq`, `grounds`, `exterior`

---
*Add new items under "Open items" as they come up — just tell Claude to update this list.*
