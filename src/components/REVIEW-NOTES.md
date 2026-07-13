# Code Review Notes

I only had these 7 components (no `package.json`, `next.config`, or Tailwind
config), so I couldn't run an actual `npm run build`. What follows is a
thorough static read-through of each file, with fixes applied where I found
real bugs or best-practice gaps.

## Fixes applied

1. **`Logo.jsx` — missing `"use client"`.**
   It uses `motion.svg` / `motion.path` (Framer Motion), which needs client
   hooks. Without the directive, this throws in a Next.js App Router build
   the moment a server component renders `Hero` → `Logo`. Fixed by adding
   `"use client"` directly to `Logo.jsx` (kept `Hero.jsx` as a server
   component — it doesn't need the directive itself now that `Logo` owns
   the client boundary).

2. **Inconsistent Framer Motion import.**
   `Logo.jsx` imported from `"motion/react"` (the current package name),
   `Navbar.jsx` imported from `"framer-motion"` (the legacy name). If only
   one of the two npm packages is installed, the other file fails to
   compile. Standardized both files on `"motion/react"`.

3. **File casing: `contact.jsx` → `Contact.jsx`.**
   The component is `Contact`; the file was lowercase. Harmless on
   case-insensitive filesystems (macOS/Windows) but breaks on case-sensitive
   ones (Linux, Vercel) if ever imported as `./Contact`. Renamed for
   consistency with the other PascalCase component files.

4. **Hardcoded EmailJS credentials.**
   `service_0ldcqv2`, `template_pc7cext`, and the public key were committed
   directly in source. Moved to `process.env.NEXT_PUBLIC_EMAILJS_*`. See
   `.env.local.example` — copy it to `.env.local` and fill in your real
   values (don't commit `.env.local`).

5. **`target="_blank"` without `rel="noopener noreferrer"`.**
   The "Live Demo →" link in `Projects.jsx` opened a new tab without `rel`,
   which lets the destination page access `window.opener` (reverse
   tabnabbing). Added `rel="noopener noreferrer"`. (`Hero.jsx`'s GitHub link
   already had `rel="noreferrer"`, bumped to `"noopener noreferrer"` too.)

6. **Accessibility gaps.**
   - Mobile hamburger button in `Navbar.jsx` had no accessible name — added
     `aria-label` (toggles between "Open menu"/"Close menu") and
     `aria-expanded`.
   - Contact form inputs had `placeholder` but no associated `<label>` —
     added visually-hidden (`sr-only`) labels tied via `htmlFor`/`id`.
   - Success message in `Contact.jsx` now has `role="status"` so screen
     readers announce it.

7. **Minor polish in `Contact.jsx`.**
   - Email and phone in the info card are now `mailto:`/`tel:` links
     instead of static text.
   - Reset `success` state to `false` at the start of each submit so a
     second failed attempt doesn't still show the old "sent" message.
   - `console.log(error)` → `console.error(error)`.

8. **Lazy-loaded project images** (`loading="lazy"` in `Projects.jsx`) since
   most project cards render below the fold.

## Things worth knowing but left as-is

- `w-125`, `w-175`, `bg-linear-to-b`, etc. — these read like typos but are
  correct **Tailwind CSS v4** syntax (v4 renamed `bg-gradient-to-*` to
  `bg-linear-to-*` and supports arbitrary spacing scale numbers natively).
  Only valid if this project is actually on Tailwind v4 — worth
  double-checking your `package.json`.
- Personal email/phone are hardcoded directly in the About/Contact UI. Not
  a code bug, just flagging in case you'd rather pull them from a shared
  config/env value so they only need updating in one place.
- No `key={project.link}` de-dupe risk currently since project titles are
  unique, but if you ever have two projects with the same title, switch the
  `key` to something guaranteed-unique (e.g. an `id` field).
- Consider `next/image` instead of plain `<img>` in `Projects.jsx` if this
  is a Next.js project — you'd get automatic optimization, responsive
  `sizes`, and built-in lazy loading instead of the manual attribute.
