# Theme System + Footer — Integration Guide

Five new/changed files, nothing else in the project is touched:

- `ThemeContext.jsx` — new
- `ThemeToggle.jsx` — new
- `Footer.jsx` — new
- `theme.css` — new (append into `globals.css`, or `import "./theme.css"` there)
- `Navbar.jsx` — replaces your existing one (only change: the toggle is added, nothing else)

## 1. Wrap the app in `ThemeProvider`

In your root layout (`app/layout.jsx` for Next.js App Router):

```jsx
import { ThemeProvider } from "./ThemeContext";
import "./theme.css"; // or paste its contents into globals.css

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents a flash of the wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem("portfolio-theme");
                  var theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                  document.documentElement.setAttribute("data-theme", theme);
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

`suppressHydrationWarning` on `<html>` is needed because the theme attribute is set by the inline script before React hydrates.

## 2. Drop the Footer into your page

```jsx
import Footer from "./Footer";

// ...at the end of your page, after <Contact />
<Footer />
```

## 3. Nothing else changes

Hero, About, Projects, Skills, Contact stay exactly as they are — same JSX, same
Tailwind classes, same animations. `theme.css` re-skins them for `[data-theme="light"]`
purely through CSS, without editing those files.

## Known limitation (read before shipping)

A handful of elements use one-off arbitrary shadow utilities baked with a hardcoded
color, e.g. `shadow-[0_8px_40px_rgba(0,0,0,0.35)]`. Tailwind compiles the exact rgba
value into the class name itself, so a global stylesheet can't retarget it — those
shadows just render very faint on a white background instead of switching to a
light-appropriate tone. It doesn't break anything, but it's not pixel-perfect "soft
elevation." If you want that fully polished, the fix is a few short, additive
className tweaks in the affected files (swapping `rgba(0,0,0,...)` for something
like `rgba(15,23,42,0.08)` in the shadow utilities) — no redesign, no layout or
animation changes. Say the word and I'll do exactly that, and only that.

## What you get

- **Theme**: `[data-theme="dark"]` (untouched, default) / `[data-theme="light"]`
  (white/off-white surfaces, soft elevation, slate text, deep blue `#1d4ed8` accent)
- **Toggle**: sun/moon morph icon in the navbar, keyboard accessible, `aria-pressed`,
  blue glow on hover, spring animation
- **Persistence**: localStorage → system preference → dark (default)
- **Transitions**: `document.startViewTransition()` when supported, graceful
  300–400ms CSS fallback otherwise, `prefers-reduced-motion` respected
- **Footer**: animated gradient divider, seamless 30s infinite flowing tech strip
  (edge-faded, per-word hover glow, no marquee "jump"), minimal copyright line
