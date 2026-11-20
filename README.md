# Portfolio — Abdulla Al Baki Rafat

Personal site built with [Astro](https://astro.build). Dark theme by default, with a light-mode toggle.

## Run it

```bash
npm install      # first time only
npm run dev      # open http://localhost:4321
npm run build    # outputs the finished site to dist/
```

## Where to edit things

| What | File |
|---|---|
| Name, hero text, email, "Open to…" status, social links | `src/data/site.ts` |
| Education, experience, skills, awards, fellowships, IELTS, training, activities | `src/data/profile.ts` |
| Research projects and conference papers | `src/data/research.ts` |
| Creative projects (apps, websites, design) | `src/content/projects/*.md` |
| Photo | `public/images/rafat.jpg` |
| Research photos + captions | images in `src/assets/research/`, list in `src/data/researchPhotos.ts` |
| Photography (Flickr) | `src/data/photography.ts`: image links from Flickr, nothing stored locally |
| Downloadable CV | `public/cv/Abdulla_Al_Baki_Rafat_CV.pdf` |

### Add a new project
1. Copy `src/content/projects/_template.md` to a new name, e.g. `my-app.md`.
2. Fill in the fields at the top. Set `featured: true` to also show it on the home page.
3. Optional screenshot: put it in `public/images/projects/` and set `image: /images/projects/my-app.png`.

## Still to fill in
- [ ] Google Scholar, ORCID, ResearchGate, GitHub, Behance/photography links → `src/data/site.ts` (empty links stay hidden)
- [ ] Screenshot for Doctor Kothay (the card shows a styled placeholder until then)
- [ ] Photography gallery images, if wanted
- [ ] Check the "Open to MS/PhD positions for Fall 2027" line in `site.ts`
- [ ] When a manuscript is published, add it in `src/data/research.ts`
- [ ] Custom domain, then update `site` in `astro.config.mjs`

## Privacy notes
- The public CV PDF has the references page removed. Your phone number is still on page 1; export a version without it if you want it off the web.
- No referee names or contact details appear on the site ("References available on request").

## Publish on Cloudflare Pages (free)
1. Push this folder to a GitHub repo.
2. In Cloudflare → Workers & Pages → Create → Pages → connect the repo.
3. Build command `npm run build`, output directory `dist`.
4. Optional: add a custom domain, then set `site` in `astro.config.mjs` to it.
