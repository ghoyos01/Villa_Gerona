// Mobile nav menu toggle — shared by index.html and index-es.html
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after tapping a link
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// Gallery loader — reads images/photos.json and fills each
// <div class="photo-grid" data-category="..."></div> with <img> tags.
// To add/remove/reorder photos, edit photos.json — no HTML editing needed.
document.addEventListener('DOMContentLoaded', function () {
  const grids = document.querySelectorAll('.photo-grid[data-category]');
  if (!grids.length) return;

  fetch('photos.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      grids.forEach(function (grid) {
        const category = grid.getAttribute('data-category');
        const files = data[category] || [];

        if (!files.length) {
          const p = document.createElement('p');
          p.className = 'category-empty';
          p.textContent = grid.getAttribute('data-empty-text') || 'Photos coming soon.';
          grid.appendChild(p);
          return;
        }

        files.forEach(function (filename) {
          const img = document.createElement('img');
          img.src = 'images/' + filename;
          img.alt = grid.getAttribute('data-alt') || 'Villa Gerona';
          img.loading = 'lazy';
          grid.appendChild(img);
        });
      });
    })
    .catch(function (err) {
      console.error('Could not load photos.json', err);
    });
});

// Lightbox — click any gallery photo to enlarge it over a dark backdrop.
// Click anywhere outside the photo (or press Escape) to close.
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.id = 'lightboxOverlay';

  const lightboxImg = document.createElement('img');
  overlay.appendChild(lightboxImg);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    overlay.classList.add('open');
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    lightboxImg.src = '';
  }

  // Event delegation so this works even for photos added dynamically by the gallery loader
  document.addEventListener('click', function (e) {
    const img = e.target.closest('.photo-grid img');
    if (img) {
      openLightbox(img.src, img.alt);
    }
  });

  // Clicking the dark backdrop (anywhere that isn't the enlarged photo itself) closes it
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closeLightbox();
    }
  });
  lightboxImg.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
