# Manual cPanel Deployment Guide

This site is a static Astro build. Production files come from the generated `dist/` folder after running `npm run build`.

Do not configure or commit automated deployment credentials for this project.

## Before You Upload

1. Install dependencies if needed:

   ```bash
   npm install
   ```

2. Build the static site:

   ```bash
   npm run build
   ```

3. Inspect the generated `dist/` folder.

   Confirm it includes files and folders such as:

   ```text
   index.html
   404.html
   robots.txt
   sitemap-index.xml
   sitemap-0.xml
   _astro/
   services/
   projects/
   images/
   ```

## Back Up the Current Live Site

Before uploading the new build, back up the current live public files in cPanel.

Recommended approach:

1. Open cPanel File Manager.
2. Go to the correct site folder, often `public_html/` or the domain-specific document root.
3. Select the existing live site files.
4. Compress them into a dated backup archive, or download a copy locally.
5. Confirm the backup exists before replacing files.

## Upload the New Build

Important: upload the contents of `dist/`, not the `dist` folder itself.

1. Open cPanel File Manager.
2. Go to the correct site folder for `paradisebuilderslasvegas.com`.
3. Upload everything inside `dist/`.
4. If cPanel asks whether to overwrite existing files, confirm only after the backup is complete.
5. Keep the folder structure from `dist/` intact.

The live site folder should contain `index.html` directly at the site root after upload. It should not contain `public_html/dist/index.html` unless the host is intentionally configured that way.

## Verify the Live Site

After upload, test these URLs and interactions:

- Homepage: `https://paradisebuilderslasvegas.com/`
- Service pages, including `/services/patio-covers-las-vegas/`
- Project pages, including `/projects/cooksey-patio-cover-project/`
- Projects index: `/projects/`
- 404 page by visiting a fake URL
- `https://paradisebuilderslasvegas.com/robots.txt`
- `https://paradisebuilderslasvegas.com/sitemap-index.xml`
- Phone links on desktop and mobile
- Email links
- Light/dark toggle

## Rollback

If something goes wrong:

1. Return to cPanel File Manager.
2. Remove or replace the newly uploaded files.
3. Restore the backed-up previous public files.
4. Re-test the homepage and key live URLs.

Do not delete the backup until the new launch is verified.

## Do Not Commit Secrets

Never commit any of the following to this repo:

- cPanel passwords
- FTP credentials
- Hosting usernames
- Private keys
- API keys or tokens

Keep credentials only in the hosting provider account, password manager, or another secure secret-management location.
