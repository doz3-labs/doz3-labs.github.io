# DOZ3 App

**Vite + React** (not Next.js). No `next.config` — use this repo’s Vite + GitHub Actions setup for deployment. Compatible with **GitHub Pages**.

## GitHub Pages deployment

1. **Create a repo** on GitHub (e.g. `doz3-website`).

2. **Set the base path** for the build so assets load correctly. When your site is at `https://username.github.io/REPO_NAME/`, use:
   ```bash
   # Windows (PowerShell)
   $env:VITE_BASE="/REPO_NAME/"; npm run build

   # macOS / Linux
   VITE_BASE=/REPO_NAME/ npm run build
   ```
   Replace `REPO_NAME` with your repository name.

3. **Publish the `dist` folder**:
   - In the repo: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**), folder: **/ (root)** or **/docs**
   - If using root: push the *contents* of `dist` to a branch (e.g. use the `gh-pages` branch and push only `dist` contents), or use a GitHub Action to build and deploy.

   **Option A – Manual:** After `npm run build`, copy the contents of `dist` into a `docs` folder, commit, and set Pages to deploy from the **docs** folder.

   **Option B – GitHub Action:** Add a workflow that runs `npm run build` with `VITE_BASE` set and deploys the `dist` folder (e.g. with `peaceiris/actions-gh-pages`).

4. **Routing:** This app uses **HashRouter**, so routes work as `yoursite.com/#/ecosystem`, etc. No extra 404 setup is required.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output is in `dist/`.
