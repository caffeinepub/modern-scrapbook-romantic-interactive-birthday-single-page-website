# Specification

## Summary
**Goal:** Create a romantic “modern scrapbook” single-page birthday experience with smooth-scrolling sections, interactive photo and audio uploads, playful reveals, and a confetti-driven grand finale.

**Planned changes:**
- Convert the experience into one vertically stacked single-page layout (Hero → The Journey → Music Toggle → The Tease → The Grand Finale), with smooth-scroll CTAs between sections.
- Build a Hero section with the exact headline “Wait... did I forget something today?”, a configurable countdown timer, and a “Click for a hint.” button that reveals a hint and/or scrolls to the next section.
- Implement “The Journey” as alternating long-form romantic/teasing text blocks and polaroid-style photo cards; each polaroid supports image upload/replace and an editable caption field in the UI, including at least one “Fake Out” paragraph pattern.
- Add a floating music player widget that lets the user pick a local audio file and control play/pause and mute/unmute; playback starts only after a user gesture, loops when enabled, and fades in gently.
- Create “The Tease” section with at least 6 “Open Me” envelope cards that reveal editable text snippets; tap toggles on mobile and hover previews/opens on desktop with an envelope-style animation.
- Implement “The Grand Finale” with a button labeled exactly “Don't Click This” that triggers a denser full-screen confetti explosion and reveals a prominent “Happy Birthday” message plus an editable “date night coupon” style card.
- Add an optional password-protected surprise after/within the finale (configurable enable flag + password) that unlocks hidden content with an embedded video URL or a placeholder if not set.
- Add an optional “Our Spots” section (configurable enable flag) showing a faux-map card with clickable pins that open popovers (no external map/GPS services).
- Apply consistent “modern scrapbook” styling across the page: soft pastel palette, elegant typography, subtle paper/grain texture feel, polaroid frames, sticker-like accents, and subtle floating heart animations that don’t block interaction.
- Add and use generated static assets from `frontend/public/assets/generated` as decorative scrapbook elements (e.g., texture + sticker/tape/envelope accents), loaded via static paths only.

**User-visible outcome:** A single-page, smooth-scrolling birthday scrapbook site where the user can watch a countdown, upload/replace polaroid photos and edit captions, play an uploaded song via a floating player, open “Open Me” envelopes for hidden notes, and trigger a grand finale confetti reveal with an optional password-unlocked video surprise and optional faux-map “Our Spots” pins.
