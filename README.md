# Hasana Singh — Portfolio

A dark, editorial portfolio site built with **Next.js 16 + React 19 + TypeScript**. It's ready to deploy on **Vercel**.

Pages: Home · Work · 3 case studies (`/work/[slug]`) · About · Resume · Contact. The build also generates the 404 page, `sitemap.xml`, `robots.txt`, the favicon, the web manifest and Open Graph metadata.

---

## 1. Run it locally (optional)

Requires Node 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (same as Vercel)
```

## 2. Deploy to Vercel (for recruiters)

1. Create a free GitHub account and a new **empty** repository (e.g. `hasana-portfolio`).
2. Upload this whole folder to that repository. Leave out `node_modules` and `.next` if they exist. With GitHub Desktop, *Add existing repository → Publish* does it for you.
3. Go to **vercel.com → Sign up with GitHub → Add New… → Project**, pick the repository, and click **Deploy**. Vercel detects Next.js automatically, so no settings are needed.
4. Your site goes live at `https://<project-name>.vercel.app`. To get a nicer address, rename the project in Vercel (Settings → General) to something like `hasanasingh`. That gives you `hasanasingh.vercel.app` if the name is free.

Canonical URLs, the sitemap and social previews all use your Vercel production URL automatically.
If you add a custom domain later, set the environment variable `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in Vercel → Settings → Environment Variables and redeploy.

Every later push to GitHub redeploys the site automatically.

---

## 3. Editing content (no component changes needed)

All content lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, email, LinkedIn, availability status, hero copy, About text, design-philosophy text, education, "Beyond work", certifications, portrait, resume path |
| `src/data/projects.ts` | Every project: card info, case-study content, gallery images, metrics |
| `src/data/experience.ts` | Work history (Resume page), skills, tools |
| `src/data/home.ts` | Home metrics, contributions, awards, recommendations |

### Things still marked as placeholders

A dashed **PLACEHOLDER** tag shows next to anything still waiting for real content. To remove a tag, edit the entry and delete `placeholder: true`.

- **Certifications** → `certifications` in `src/data/profile.ts` (use an empty array `[]` to hide the section)
- **Portrait** → replace `public/images/portrait.jpg` (same file name)
- **Recommendation photos** → `public/images/people/` (referenced from `src/data/home.ts`)
- **Resume PDF** → replace `public/assets/resume.pdf` with your real resume (keep the same file name). The Download buttons will pick it up automatically.
- **Project 3 case study** → add sections to the `shipped-initiatives` entry in `projects.ts`. While `sections` is empty, the page shows the title and a short "coming soon" note.

### Adding a new project

1. Put the images in `public/images/projects/`.
2. Copy an existing project object in `src/data/projects.ts` and give it a new `slug`.
3. Build the case study from the section blocks: `text`, `pills`, `evolution`, `steps`, `decisions`, `recognition` and `reflection`.

The Work grid, the "Next project" link, the sitemap and the page route all update automatically. To feature it on the Home page, add its slug to `featuredSlugs`.

---

## 4. Design system

- **Tokens:** `src/styles/tokens.css` holds the colours, type scale (fluid, using `clamp`), spacing, radius, shadows, container widths and motion durations. Change the accent colour in `--color-accent`.
- **Fonts:** Instrument Serif (display) + Geist (body). Both are self-hosted from `src/fonts`, so nothing loads from a third-party CDN.
- **Motion:** CSS-only reveal-on-scroll, page transitions and hover states. All of it respects `prefers-reduced-motion`.
- **Accessibility:** skip link, semantic landmarks, one `h1` per page, visible focus states, keyboard-operable carousels and mobile menu (Esc closes it, focus stays inside it), and alt text on every image.

## Project structure

```
src/
  app/            routes (page.tsx per page), layout, sitemap, robots, icons
  components/     Navbar, MobileMenu, Footer, Button, SectionHeading, ProjectCard,
                  ProjectGrid, ProjectHero, ProjectGallery, CaseStudySection,
                  ExperienceTimeline, MetricCards, Recommendations, SocialLinks, …
  data/           ← edit content here
  styles/         tokens.css, globals.css, components.css
  fonts/          self-hosted woff2 files
public/
  images/projects/  project images
  assets/resume.pdf ← replace with your real resume
  og-image.jpg      social share image
```

