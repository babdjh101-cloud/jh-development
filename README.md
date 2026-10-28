# J.H. Development Construction Ltd. (JHDCL) — Corporate Website

Official corporate website for **J.H. Development Construction Ltd. (JHDCL)** — a first-class real estate development, infrastructure engineering, river dredging, and heavy construction contractor headquartered in Dhaka, Bangladesh (Est. 2018).

---

## 1. Project Overview & Tech Stack

This website is built with a modern, high-performance static frontend stack ready for deployment to **Cloudflare Pages**, **GitHub Pages**, or any static hosting platform:

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 6+
- **Styling**: Tailwind CSS v4 (Zero-pill discipline, WCAG AA contrast, custom dark architectural palette)
- **Icons**: Lucide React
- **Bilingual Engine**: Custom lightweight localization layer (English / বাংলা) with `localStorage` persistence
- **Primary Source of Truth**: Sourced directly from `JHDCL Short Profile 17-07-26.pdf`

---

## 2. Dedicated Pages & URL Routing

The website uses a dedicated multi-page routing structure with browser history preservation:

- **Home**: `/` — 3D architectural hero, overview, service highlights, featured projects, equipment snapshot.
- **About Us**: `/about` — Detailed corporate background, Mission/Vision, 11 sister concerns, 7 JV partners, and banking partners.
- **Services**: `/services` — All 10 corporate sectors (dredging, sand filling, superstructures, highways, railway, power, materials).
- **Projects Portfolio**: `/projects` — Searchable catalog of all 26 projects with status and search filters.
- **Completed Projects**: `/projects/completed` — Dedicated view of all 12 completed and handed-over infrastructure contracts.
- **Ongoing Projects**: `/projects/ongoing` — Dedicated view of all 9 active river dredging and civil projects.
- **Upcoming Projects**: `/projects/upcoming` — Dedicated view of all 5 upcoming power plant and marine drive works.
- **Dedicated Project Profiles**: `/projects/:id` — Rich, dedicated URL for every verified project (e.g. `/projects/payra-housing`, `/projects/bangshi-river-dredging`) with specifications, PDF citations, breadcrumbs, smart back navigation, and project-specific WhatsApp links.
- **Equipment & Fleet**: `/equipment` — Full 16-line heavy equipment fleet from PDF page 59 with 3D capacity metrics.
- **Leadership & Governance**: `/leadership` — Board of Directors, Executive Operations Team, International Advisors, and corporate organogram tree.
- **Field Gallery**: `/gallery` — 26 authentic site photographs with category filters and keyboard-accessible lightbox.
- **Contact & Offices**: `/contact` — Banani Head Office and Uttara Corporate Office details with validated inquiry dispatch.
- **Custom 404 Recovery**: `*` — Helpful error page with quick links back to Home and Projects.

All nested routes are fully supported on Cloudflare Pages via `public/_redirects` (`/* /index.html 200`).

---

## 3. Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm or bun

### Setup Commands
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (port 3000)
npm run dev

# 3. Compile TypeScript & verify types
npm run lint

# 4. Create production build
npm run build
```

---

## 4. Deployment to Cloudflare Pages & GitHub

### Deploying via GitHub to Cloudflare Pages:
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of JHDCL corporate website"
   git remote add origin https://github.com/your-username/jhdcl-website.git
   git push -u origin main
   ```
2. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
3. Click **Create Application** &rarr; **Pages** &rarr; **Connect to Git**.
4. Select your `jhdcl-website` GitHub repository.
5. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Root Directory**: Leave blank (default root)
6. Click **Save and Deploy**. Cloudflare Pages will build and deploy the site in ~30 seconds.
7. `public/_redirects` is already included to ensure single-page client routing functions seamlessly without 404 errors.

### Connecting a Custom Domain:
Once the company registers its official domain (e.g., `jhdcl.com` or `jhdclbd.com`):
1. In Cloudflare Pages, navigate to **Custom Domains** &rarr; **Set up a custom domain**.
2. Enter your domain name and follow the automated DNS verification steps.
3. Update the `name` / `canonical` configuration in `src/config/company.ts` if a specific canonical URL is required.

---

## 5. Easy Maintenance & Updating Guide

All company information and assets are decoupled and organized for simple maintenance:

- **Contact numbers, office addresses & emails**: Edit `src/config/company.ts`.
- **Translations (English & বাংলা)**: Edit `src/data/translations.ts`.
- **Projects Catalog**: Edit `src/data/projects.ts`.
- **Equipment Fleet**: Edit `src/data/equipment.ts`.
- **Photo Gallery**: Edit `src/data/gallery.ts` (place new images in `public/images/gallery/`).
- **Leadership Profiles**: Edit `src/data/leadership.ts`.

---

## 6. Items Requiring Company Confirmation

The website adheres strictly to facts supported by the uploaded PDF profile (`JHDCL Short Profile 17-07-26.pdf`). The following points should be reviewed by the corporate secretariat:

1. **Official Legal Name**: "J.H. Development Construction Ltd." is used as the primary display name. Legal incorporation documents also list "Jamat Hazera Development Construction Ltd." (RJSC Reg. C-176309/2021).
2. **Official Public Email**: The profile document lists `jhdclsomrat@gmail.com`, `motalebbogra2580@gmail.com`, and `jhdcsomrat@gmail.com`. The primary two are listed on office cards; company should confirm preferred inquiry mailbox.
3. **Preferred WhatsApp**: `+8801754158358` has been configured across all WhatsApp CTAs as instructed.
4. **$1 Billion & 9M sq. ft. Claim**: Kept out of unverified marketing statistics as required by the non-negotiable source-of-truth rules until the company confirms its audited scope and definition.
