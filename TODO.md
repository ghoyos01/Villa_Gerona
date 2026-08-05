# Villa Gerona — Site To-Do List

## Open items

- [ ] Add photos for the remaining empty gallery categories: Dining Room, Second Bedroom, Third Bedroom, Laundry Room
- [ ] Decide: take site offline via GitHub Pages (Settings → Pages → Source → None) until fully ready, or leave it live as-is?
- [ ] Website field on Google Business Profile is still "pending" (can take up to 7 days) — no action needed, just check back
- [ ] Photos on Google Business Profile still "pending" review — no action needed
- [ ] **Maintenance note:** adding a brand-new gallery category now takes 3 updates: (1) `photos.json`, (2) the gallery section HTML, (3) the Gallery dropdown menu in the nav — in both `index.html` and `index-es.html`

## Completed

### Site build
- [x] Site built and deployed on GitHub Pages, custom domain (villagerona.com) connected
- [x] Bluish pastel color scheme, mobile hamburger menu, Gallery dropdown with room links
- [x] Spanish language version with flag switcher, proper accents/ñ throughout
- [x] Shared stylesheet (styles.css) — style changes apply to both language pages at once
- [x] Categorized, data-driven photo gallery (photos.json) with click-to-enlarge lightbox
- [x] Real Google Maps screenshot, WhatsApp contact (styled, icon, no phone number needed)
- [x] Hero redesign: full-bleed photo, bigger headline, quick trust stats
- [x] Removed contact form and email entirely — WhatsApp only
- [x] Cleaned a power line out of the exterior hero photo (image editing)

### SEO (today)
- [x] Meta description, keywords, Open Graph tags, Twitter Card tags (both languages)
- [x] hreflang tags linking EN/ES versions, canonical URLs
- [x] Structured data (Schema.org LodgingBusiness) with address, coordinates, amenities
- [x] sitemap.xml and robots.txt created and submitted
- [x] Google Search Console: domain verified via DNS, sitemap submitted successfully
- [x] Google Business Profile: claimed existing listing, set correct category (Vacation home rental agency), added description, WhatsApp as primary contact, hours (24/7), accessibility/children/parking/pets info, cover photo, logo, and 6 property photos

---

## How to add a photo (no HTML editing needed, unless it's a brand-new category)

1. Upload the image file into the `images/` folder on GitHub
2. Open `photos.json`, find the right category (e.g. `"kitchen"`), and add the filename to the list
3. Commit — the gallery updates automatically

Categories currently available: `master-bedroom`, `master-bathroom`, `kitchen`, `dining-room`, `living-room`, `second-bedroom`, `third-bedroom`, `laundry-room`, `office`, `patio-bbq`, `grounds`, `exterior`

---
*Add new items under "Open items" as they come up — just tell Claude to update this list.*
