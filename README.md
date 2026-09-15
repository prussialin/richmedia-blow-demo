# RichMedia — A breath of fate

Black-and-gold tarot adaptation of the original microphone-driven paper-card demo. No build tools or third-party runtime dependencies.

## Preview

Serve this directory with any static server. Microphone input requires HTTPS or localhost. Open index.html directly for click-only testing.

## Interaction

- Click “試吹一下”, tap the deck, or focus it and press Enter/Space: a staggered gust moves up to three remaining cards.
- Each card retains the original ten-strip bending/springback, independent 3D rotation and inertial flight.
- Reset cancels card and strip animations. After all seven cards fly, the deck returns automatically.
- Microphone retains local RMS energy detection, ambient-noise calibration, sensitivity and visibility/page-exit cleanup. Audio is never uploaded. Speech/noise can also trigger it.
- Reduced-motion preference shortens flights and disables bending.

## Artwork

Seven individually generated classical Major Arcana fronts (Fool, Magician, High Priestess, Emperor, Star, Sun, Moon), one black-gold celestial back and a candlelit scene. WebP assets are local, with consistent 2:3 card dimensions. Generated using the built-in image generation tool; scene adapted from the user-provided reference. No fixed cards are baked into the scene.

Prompt direction: single straight-on 2:3 card; thin double black frame inset 4%; aged ivory paper; fine woodcut hatching; muted ochre, terracotta, sage and blue; roman number at top and card name at bottom. Subjects are the traveler with dog, robed magician at altar, seated priestess, fully clothed woman pouring water beneath stars, and radiant sun over white horse and sunflowers. Back: engraved golden sun/moon and stars on black paper, no text. Scene: preserve reference celestial ornaments, candles, crystals and astrology cloth; remove every card and all lettering for HTML/interactive replacements.

## Validation

Browser checks at 390×844, 320×568 and 1440×1000: no horizontal overflow; five cards; staggered independent launch; reset cancellation; keyboard activation; automatic restacking; microphone-denied fallback; no JavaScript exceptions. Actual microphone airflow still requires a real-device check.
