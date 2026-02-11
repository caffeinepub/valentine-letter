# Specification

## Summary
**Goal:** Build a single-page interactive Valentine letter experience where a clickable envelope reveals a styled letter.

**Planned changes:**
- Create a centered single-page layout with a light pink background and cohesive Valentine-themed typography and spacing.
- Show an “envelope” card labeled “Click to Open 💌” on initial load, and hide the letter content.
- On click/tap of the envelope, hide the envelope and reveal the letter content without reloading the page.
- Render the provided letter text exactly as given (paragraph order and line-by-line formatting) inside a white, rounded, shadowed card.
- Style envelope and letter components using Tailwind CSS, including hover/active/focus states and subtle micro-interactions (non-blue/purple primary palette).

**User-visible outcome:** Users land on a soft pink page with a clickable envelope; tapping/clicking it smoothly reveals the Valentine letter in a readable, styled card on both mobile and desktop.
