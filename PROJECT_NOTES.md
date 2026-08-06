# Villa Gerona Website — Project Reference
(Paste this into a new Claude conversation to continue seamlessly)

## Live site
- **Domain:** villagerona.com (GitHub Pages + custom domain via Namecheap DNS)
- **GitHub repo:** github.com/ghoyos01/Villa_Gerona (public)
- **Local folder:** C:\Users\ghoyos\OneDrive\Documents\Villa_Gerona

## File structure (all in repo root, no subfolders except images/)
- `index.html` — English homepage
- `index-es.html` — Spanish homepage (mirrors index.html exactly, translated)
- `styles.css` — SHARED stylesheet for both language pages (edit once, applies to both)
- `script.js` — SHARED JS for both pages: mobile hamburger menu, Gallery dropdown toggle, gallery photo loader (reads photos.json), lightbox
- `photos.json` — controls which photos show in which gallery category (see below)
- `sitemap.xml`, `robots.txt` — SEO files
- `images/` — all photos live here

## How the photo gallery works
- Gallery section in HTML has empty `<div class="photo-grid" data-category="XXX">` containers
- `photos.json` has a key per category, each holding an array of filenames (just the filename, e.g. `"kitchen-1.jpg"`)
- `script.js` fetches `photos.json` on page load and fills each container with `<img>` tags from `images/`
- **To add a photo to an EXISTING category:** upload image to `images/`, add filename to that category's array in `photos.json`. No HTML/JS editing needed.
- **To add a BRAND NEW category:** requires 3 file changes — (1) new array in `photos.json`, (2) new `<div class="gallery-category">` block in the Gallery section of BOTH index.html and index-es.html, (3) new link in the Gallery dropdown nav menu in BOTH files.

Current categories: `master-bedroom`, `master-bathroom`, `kitchen`, `dining-room`, `living-room`, `second-bedroom`, `third-bedroom`, `laundry-room`, `office`, `patio-bbq`, `grounds`, `exterior`

## Known image filenames already in images/
master-bedroom-1.jpg through -4.jpg, master-bath-1/2/3.jpg, kitchen-1 through -5.jpg, patio-bbq-1/2.jpg, grounds-terrace.jpg, exterior-house.jpg (power line removed via inpainting), gated-entrance.jpg, exterior-facade.jpg, exterior-driveway.jpg, front-of-house-night.jpg (hero image), living-room.jpg, living-room-2.jpg, office-1.jpg, welcome-logo.jpg (header logo), welcome-logo-square.jpg (padded square version for Google Business Profile), location-map.png (real Google Maps screenshot)

## Property facts
- Address: Km 5, Vía a La Buitrera, Cali, Valle del Cauca, Colombia
- Coordinates used in structured data: lat 3.365, lon -76.565 (approximate, La Buitrera area)
- 4 bedrooms, RNT No. 263647 (Colombia tourism registry)
- Airbnb listing: https://www.airbnb.com/rooms/1532652906867277070
- WhatsApp contact: +1 954-557-5575 (wa.me/19545575575) — NO phone number field used anywhere (intentional — WhatsApp only, for international-guest-friendliness)
- No email anywhere on site (removed intentionally)
- No contact form (removed — WhatsApp only)

## Design decisions
- Color palette: bluish pastel (CSS vars in styles.css :root — --palm, --clay, --gold, --stone, --ink, --moss)
- Fonts: Cormorant Garamond (headings), Karla (body), JetBrains Mono (labels/mono text)
- Icons: Tabler Icons via CDN (jsdelivr, @latest version — a pinned version number once caused icons to silently fail)
- Mobile: hamburger menu; Gallery has a collapsible dropdown submenu (JS toggle, not CSS-only)

## Git workflow notes (recurring friction points)
- User mixes GitHub web editor edits with local Git Bash pushes — ALWAYS run `git pull origin main --no-edit` before `git push`, or pushes get rejected
- Had a merge conflict once that left literal `<<<<<<< HEAD` markers in script.js, which silently broke the entire gallery (no photos, no "coming soon" placeholders) — worth remembering this failure mode if the gallery ever goes fully blank again
- User is on Windows, uses Git Bash, MINGW64 terminal

## SEO / marketing setup completed
- Meta tags, Open Graph, Twitter Cards, hreflang (en/es), structured data (Schema.org LodgingBusiness) — done, in both HTML files' <head>
- Google Search Console: domain verified via DNS TXT record in Namecheap, sitemap.xml submitted successfully
- Google Business Profile: claimed and fully set up — category "Vacation home rental agency", WhatsApp as primary chat (no phone), 24/7 hours, description written, cover photo + logo + 6 property photos uploaded (all were "pending" review as of last session)
- Note: there's an unrelated old domain history — "www.villagerona.com" (with www) shows stale cached content from a previous unrelated site ("Fiestas y eventos") that had this domain before Gerry owned it. The working site is at the apex domain (villagerona.com, no www). Not an active problem, just a quirk if it ever surfaces in search results.
- Also: Gerry has an unrelated Google Workspace "Super Admin" account for something called "Lorenita" (possibly a real nearby business he helped, coffee shop) — unrelated to Villa Gerona, left alone, not a blocker for anything.

## Outstanding / open items (see TODO.md in repo for latest)
- Photos still needed for: Dining Room (in progress as of last message), Second Bedroom, Third Bedroom, Laundry Room
- Was troubleshooting dining room photos not appearing after a photos.json update — suspect same failure pattern as before (JSON syntax error or filename mismatch) — WAS IN PROGRESS when this conversation ended, unresolved
- Social media integration (Instagram, Facebook) — not started, planned topic
- Decision pending: take site offline via GitHub Pages settings until "ready," or leave live (leaning toward leaving live)
