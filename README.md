# mikheiev.com

Static read-only portfolio website for Dima Mikheiev.

## Files

- `index.html` - semantic homepage with SEO metadata and JSON-LD.
- `styles.css` - minimal responsive styling using white, navy, and blue palette.
- Portfolio folders - dedicated static case-study pages.
- `robots.txt` - crawler access and sitemap pointer.
- `sitemap.xml` - sitemap for homepage and portfolio pages.
- `llms.txt` - agent-readable site summary.

## Notes

Existing portfolio images use the CDN URLs in the source content. The offer page at `/poc/` uses local artwork and a small navigation script. No build step or external fonts are required.

The `/poc` path redirects to `/poc/` on directory-based static hosting such as GitHub Pages. Preview with `python3 -m http.server 8765` from the repository root.

See `poc/assets/README.md` for generated artwork and prompts.
