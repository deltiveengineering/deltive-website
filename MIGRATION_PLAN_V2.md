# REVISED MIGRATION PLAN V2

## 1. PLAN REVIEW OF PREVIOUS VERSION
**What was strong:**
The previous plan successfully identified the core page hierarchy and correctly spotted leaking Wix template artifacts (e.g., `/portfolio-collections/featured/booklets`). It correctly mapped the fundamental structural goals of the Next.js App Router migration.

**What was weak:**
The validation of facts was weak. It prematurely treated assumptions as certainties, particularly regarding asset extraction. The previous plan's routing strategy recommended changing the live `/our-projects` logic to `/projects` without sufficiently justifying the deviation from the existing information architecture.

**What was under-specified:**
The content inventory was summarized rather than locked. The asset manifest assumed placeholders rather than pinpointing exact image targets and their current verification status. Form behavior migration was glossed over as a trivial detail when Wix forms require specific backend replication. 

**What must be corrected now:**
This revised plan prioritizes absolute fidelity. We will lock content stringently page-by-page. Route naming will strictly respect the live site (e.g., maintaining `our-projects`). Firecrawl will be explicitly demoted to a fallback mechanism, and all extraction, routing, and form replication steps will accurately flag what is verified versus unverified.

## 2. EXECUTIVE SUMMARY
**Migration Approach:** A high-fidelity, structure-preserving rebuild of the Deltive Engineering Wix website into a statically generated Next.js 14 App Router application deployed on Vercel. 

**Fidelity Principles:** The external user-facing experience must remain virtually unchanged. We will preserve the current information architecture, live copy, existing imagery, and visual hierarchy. No new stylistic redesigns (like glassmorphism) will be introduced unless already present on the live site.

**Major Risks:** 
1. Hidden Wix background images and heavily cropped derivative assets (`/v1/fill/` tokens) are difficult to extract in their highest original resolution.
2. Form behavior migration (Wix native forms do not port directly to static sites).

**Major Assumptions:** 
It is assumed that the five discovered projects represent the entirety of the portfolio, and that the client owns the copyright/permission for all current live images to be downloaded and statically hosted.

## 3. VERIFIED AND UNVERIFIED FACTS

| Item | Status | Notes |
| :--- | :--- | :--- |
| **Top-Level Route Structure** | Verified | Routes `/our-projects`, `/services`, `/get-a-quote` are confirmed live. |
| **Project Descriptions** | Verified | Exact textual descriptions for 5 projects successfully extracted via DOM. |
| **Privacy Policy Copy** | Verified | Successfully captured in full. |
| **Asset URLs & High-Res Availability** | Unverified | Exact `wixstatic.com` original source IDs are conditionally rendered; extraction script required testing to verify highest quality. |
| **Wix Form Backend** | Unverified | We do not know where the live "Get a Quote" emails are currently routed other than the public `voxlabsdesignstudio@gmail.com` email. |
| **Template Artifact Leakage** | Verified | Text "Create Your First Project" and LinkedIn linking to `wix-com` are confirmed live artifacts. |

## 4. DISCOVERED LIVE SITE MAP

**Top-Level Pages:**
- `/` [Verified]
- `/our-projects` [Verified]
- `/services` [Verified]
- `/get-a-quote` [Verified]

**Policy Pages:**
- `/privacy-policy` [Verified]

**Project Pages (Wix Legacy Routes):**
- `/portfolio-collections/featured/booklets` (LumaGrid) [Verified]
- `/portfolio-collections/featured/cards` (Shield DJI RS) [Verified]
- `/portfolio-collections/our-projects/roterend-logo-met-gei%CC%88ntegreerde-leds` (Rotating Logo) [Verified]
- `/portfolio-collections/our-projects/packaging` (Satellite Strut Hub) [Verified]
- `/portfolio-collections/our-projects/banners` (Asteriks Retro Speaker) [Verified]

## 5. PAGE-BY-PAGE CONTENT LOCK

### Home Page (`/`)
- **Title:** `Home | Voxlabs 2.0` (Note: "Voxlabs 2.0" is a template artifact. Recommend fidelity preservation initially, or intentional correction to "Home | Deltive Engineering").
- **Headings:** `A-Z PRODUCT DEVELOPMENT`, `Change that works`, `ABOUT US`, `OUR SERVICES`, `OUR CLIENTS`
- **Body Copy (About Us):** "Deltive is a Ghent-based design and engineering studio. We guide complex hardware from initial concept to factory-ready product by combining user-centred design with precised engineering, rapid prototyping, and a disciplined path to industrialization." (Verbatim preservation)
- **Services Copy:** Snippets for Strategy, Design, Engineering, Manufacturing.
- **CTA:** `Get a Quote`
- **Verification:** Verified

### Our Projects (`/our-projects`)
- **Title:** `Projects | Voxlabs 2.0`
- **Headings:** `Our Projects`
- **Body:** Grid of 5 projects.
- **Verification:** Verified

### Services (`/services`)
- **Title:** `Services | Voxlabs 2.0`
- **Headings:** Strategy, Design, Engineering, Manufacturing
- **Body Copy:** 
  - Strategy: "We help you define the right product-market fit..."
  - Design: "We craft intuitive, user-focused designs..."
  - Engineering: "We develop, manufacturable solutions through iterative prototyping..."
  - Manufacturing: "We bridge the gap between prototype and production..."
- **Verification:** Verified

### Get a Quote (`/get-a-quote`)
- **Title:** `Get a Quote | Voxlabs 2.0`
- **Headings:** `GET A QUOTE`, `CONTACT US`
- **Body Copy:** "Request a Quote for Your Next Project", "We'll get back to you with an estimate"
- **Contact Details:** Email: `voxlabsdesignstudio@gmail.com`, Phone: `+32488323360`
- **Forms:** Exact visible fields locked: First name*, Last name*, Email*, Quantity range*, Message. CTA Button: GET A QUOTE.
- **Verification:** Verified

### Privacy Policy (`/privacy-policy`)
- **Body Copy:** 5 standard paragraphs ("GENERAL INFORMATION", "INFORMATION THAT MAY BE COLLECTED...", etc.). Preserved exactly.
- **Verification:** Verified

### Footer (Site-Wide)
- **Visible Socials:** Instagram (`/deltiveengineering`), LinkedIn (`/company/wix-com` - artifact).
- **Verification:** Verified

## 6. PROJECT DETAIL PAGE AUDIT

| Current URL | Proposed Route (`/our-projects/[slug]`) | Exact Project Name | Exact Description | Verification Status | Artifact Presence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/portfolio-collections/featured/booklets` | `/our-projects/lumagrid` | LumaGrid | "The LumaGrid is a bespoke light diffuser, crafted specifically for the main location of our feature film..." | Verified | Yes ("Create Your First Project") |
| `/portfolio-collections/featured/cards` | `/our-projects/shield-dji-rs` | Shield DJI RS series gimbals | "This custom 3D-printed shield was engineered to protect the DIJ RS3/4 camera module..." | Verified | Yes |
| `/portfolio-collections/our-projects/roterend...` | `/our-projects/rotating-logo` | Rotating Logo with Integrated LEDs | "This project was created on behalf of Celsius..." | Verified | Yes ("Create Your First Project") |
| `/portfolio.../packaging` | `/our-projects/satellite-strut-hub` | Satellite Strut Hub | "A precision-engineered central hub designed to connect support rods..." | Verified | Yes ("Create Your First Project") |
| `/portfolio.../banners` | `/our-projects/asteriks-retro-speaker` | Asteriks Retro Speaker | "We partnered with our client to develop the Asteriks Retro Box prototype..." | Verified | Yes ("Create Your First Project") |

**Redirect Mapping:** All Wix URLs will 301 redirect to the proposed `/our-projects/[slug]` route.

## 7. IMAGE AND ASSET MANIFEST

| Page URL | Asset Slot Count | Purpose | Discovered URL | Local Destination | Verification Status | Extraction Priority | Risk Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | 1 | Brand Logo | Unretrieved | `/public/images/brand/logo.*` | Unverified | Direct DOM > Network > Firecrawl | Inline CSS risk |
| `/` | 1 | Hero Image | Unretrieved | `/public/images/home/hero-bg.jpg` | Unverified | Direct DOM > Network > Firecrawl | Wix `/v1/fill` tokens |
| `/` | 1 | About Us Image | Unretrieved | `/public/images/home/about.jpg` | Unverified | Direct DOM > Network > Firecrawl | CSS Background risk |
| `/our-projects` | 5 | Grid Covers | Unretrieved | `/public/images/projects/[slug]-cover.jpg` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |
| `/services` | 4 | Service Icons/Imgs | Unretrieved | `/public/images/services/*` | Unverified | Direct DOM > Network > Firecrawl | Asset type unknown |
| `/our-projects/lumagrid` | 3 (approx) | Hero + Gallery | Unretrieved | `/public/images/projects/lumagrid/*` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |
| `/our-projects/shield-dji-rs` | 3 (approx) | Hero + Gallery | Unretrieved | `/public/images/projects/shield/*` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |
| `/our-projects/rotating-logo` | 3 (approx) | Hero + Gallery | Unretrieved | `/public/images/projects/rotating-logo/*` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |
| `/our-projects/satellite-strut-hub` | 3 (approx) | Hero + Gallery | Unretrieved | `/public/images/projects/hub/*` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |
| `/our-projects/asteriks...` | 3 (approx) | Hero + Gallery | Unretrieved | `/public/images/projects/speaker/*` | Unverified | Direct DOM > Network > Firecrawl | Needs de-tokenization |

## 8. ROUTING AND REDIRECT STRATEGY

**Routes Preserved for Fidelity:**
- `/`
- `/our-projects` (Maintained exactly to avoid breaking changes or internal renaming confusion).
- `/services`
- `/get-a-quote`
- `/privacy-policy`

**Routes Introduced for Cleanliness:**
- `/our-projects/[slug]`: This replaces the convoluted Wix layout directory (`/portfolio-collections/our-projects/[category]`) to create a standard, SEO-friendly detail page hierarchy grouped logically under the preserved parent (`/our-projects`).

**Redirect Strategy:**
A strict 301 mapping in `next.config.ts`:
- `/portfolio-collections/featured/booklets` ➞ `/our-projects/lumagrid`
- `/portfolio-collections/featured/cards` ➞ `/our-projects/shield-dji-rs`
- `/portfolio-collections/our-projects/roterend...` ➞ `/our-projects/rotating-logo`
- `/portfolio-collections/our-projects/packaging` ➞ `/our-projects/satellite-strut-hub`
- `/portfolio-collections/our-projects/banners` ➞ `/our-projects/asteriks-retro-speaker`

## 9. COMPONENT ARCHITECTURE

| Component | Purpose | Reuse Scope | Fidelity Relevance |
| :--- | :--- | :--- | :--- |
| `Navbar` | Global header, logo, nav links. Nav labels locked: "Projects", "Services", "Contact Us", while CTA is exactly "Get a Quote". | Global | Exact recreation of sticky/transparent behavior. Preserves nav vs CTA distinction. |
| `Footer` | Social links, contact lockup, legal link. | Global | Identical textual layout, fixing the Wix LinkedIn bug. |
| `ProjectGrid` | 2/3 column layout for portfolio items. | `/`, `/our-projects` | Maintains the exact aspect ratios of Wix thumbnails. |
| `ServiceBlock` | Numbered or icon-driven layout for the 4 pillars. | `/`, `/services` | Matches current layout hierarchy. |
| `QuoteForm` | The interactive contact form. | `/get-a-quote` | Visual parity required; backend behavior must be swapped. |

## 10. CONTENT AND DATA MODEL
- **Page Copy:** Headings and structural textual content will NOT be hardcoded directly into the Next.js Page components. All site copy and project content will be strictly decoupled and stored in structured local TypeScript content files. This approach guarantees content fidelity, simplifies exact textual auditing, and allows for clean line-by-line comparison against the live site.
- **Project Content:** Stored in a strict local TypeScript constant (`content/projects.ts`), typed with an interface `Project` requiring `{ id, slug, title, description, coverImage }`. No headless CMS is necessary.
- **Tracking Missing Content:** The TypeScript definitions will explicitly omit `?` (optional) modifiers. If an image path is unknown, it will fail the TypeScript build until mapped to a real file in `/public/images/`.

## 11. ASSET ACQUISITION WORKFLOW
This workflow mandates fallback prioritization:
1. **Direct Parsing:** Run a Puppeteer/Playwright script or inspect the Network tab manually to isolate standard `<img>` tags and `background-image` CSS declarations.
2. **De-Tokenization:** Wix URLs end in complex transformations (`...~mv2.jpg/v1/fill/w_400,h_300...`). The script must regex-strip everything after the intrinsic file definition to download the original lossless artifact.
3. **Firecrawl Fallback:** *ONLY* if a page heavily obfuscates images in React canvas or shadow DOMs, the `FIRECRAWL_API_KEY` loaded via `.env` will be utilized to scrape the fully rendered HTML and isolate the computed media URLs.
4. **Validation:** Manually cross-check the downloaded `/public/images` folder against the live site for visual parity in crop and quality.

## 12. PROPOSED FOLDER STRUCTURE
```text
/src
  /app
    page.tsx
    layout.tsx
    globals.css
    /our-projects
      page.tsx
      /[slug]
        page.tsx
    /services
      page.tsx
    /get-a-quote
      page.tsx
    /privacy-policy
      page.tsx
  /components
    /layout (Navbar, Footer)
    /ui (Buttons, Form elements)
  /content
    projects.ts
/public
  /images
    /projects
    /home
```

## 13. FORM AND INTERACTION MIGRATION NOTES
**Wix Behavior Nullification:**
The current "Get a Quote" form communicates directly with Wix servers. This cannot be ported. 
**Rebuild Requirement:**
The visual form inputs (assumed: Name, Email, Textarea) must be rebuilt pixel-for-pixel using exact CSS padding and border radius to look identical.
**Backend Target:**
The form will be wired via Server Actions to an email-sending service (e.g., Resend via API) mapping submissions to `voxlabsdesignstudio@gmail.com`.

## 14. SEO, METADATA, AND DEPLOYMENT PLAN
- **Metadata:** Each page will statically export `metadata` exact-matching the live site title formats (e.g., `Projects | Voxlabs 2.0`), though we will present an option to fix the template name artifact.
- **Image Optimization:** All physical images in `/public` will pass through `<Image src/>` to leverage Next.js WebP conversion, mitigating the loss of Wix's automatic CDNs.
- **Deployment:** Vercel push-to-deploy. The `next.config.ts` redirects file ensures day-1 Google indexing continuity.

## 15. RISKS, EDGE CASES, AND MITIGATIONS
- **Responsive Parity (Risk):** Wix generates highly specific breakpoints for mobile. **Mitigation:** Strict side-by-side Chrome DevTools comparison against the live site before shipping.
- **Font Availability (Risk):** Wix templates often use proprietary or licensed web fonts. **Mitigation:** Identify computed font families from the live CSS. If licensed, fallback to visually similar Google Fonts (e.g., Inter, outfit) ensuring weights match.

## 16. VALIDATION CHECKLIST BEFORE IMPLEMENTATION
- [ ] **Page Count Parity:** Verify 4 top-level pages + 1 policy + 5 projects exist in the routing plan.
- [ ] **Text Parity:** Verify all textual content in the plan exactly matches live DOM.
- [ ] **Image Parity:** Verify 100% of discovered image assets are securely downloaded to local storage at the highest resolution.
- [ ] **Form Parity:** Document the exact fields on the live `/get-a-quote` site.
- [ ] **CSS Inspection:** Extract the exact hex codes and typography classes from the live site stylesheet.

## 17. EXECUTION PHASES AFTER APPROVAL
1. **Audit & Acquisition:** Complete the validation checklist; manually or programmatically parse the layout styles; secure all assets.
2. **TypeScript & Static Scaffolding:** Setup the Next.js `app` router structure; lock in the `projects.ts` mock data block.
3. **Component Construction:** Build matching Nav/Footer logic and standard `<section>` wrappers using identified Tailwind Hex classes.
4. **Page Assembly:** Inject copy and local images into the routed pages.
5. **Quality Review:** Perform side-by-side local deployment vs. live website checks across desktop/mobile viewports.

## 18. FIRST ACTIONS AFTER APPROVAL
1. Execute a strict visual inspection of the `/get-a-quote` live page to record the exact form fields required for the layout.
2. Inspect the live website using DevTools to extract the true `static.wixstatic.com` base URLs, avoiding Firecrawl unless absolutely necessary.
3. Extract precise hex colors and computed font families from the live site's CSS rule set to initialize `tailwind.config` appropriately.
