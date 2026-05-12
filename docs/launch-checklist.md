# Launch Checklist

Use this checklist before uploading the static site to cPanel.

## Build

- Run `npm run build`.
- Confirm the command completes without errors.
- Inspect the generated `dist/` folder.
- Confirm `dist/sitemap-index.xml` exists.
- Confirm `dist/robots.txt` exists.
- Confirm `dist/404.html` exists.

## Local QA

- Test the homepage.
- Test all service pages.
- Test all project pages.
- Test the `/projects/` index page.
- Test the `404` page.
- Test the light/dark toggle.
- Test phone links.
- Test email links.
- Check the sitemap URL locally from the built output if using preview.

## cPanel Upload

- Upload the contents of `dist/` to the target cPanel web root.
- Do not upload the `dist/` folder itself unless the host is configured to serve from that folder.
- Keep existing server files only if they are intentionally part of the live site.

## Live Verification

- Verify `https://paradisebuilderslasvegas.com/`.
- Verify key service URLs, including `/services/patio-covers-las-vegas/`.
- Verify key project URLs, including `/projects/cooksey-patio-cover-project/`.
- Verify `/projects/`.
- Verify a missing URL displays the 404 page.
- Verify `https://paradisebuilderslasvegas.com/robots.txt`.
- Verify `https://paradisebuilderslasvegas.com/sitemap-index.xml`.
- Test phone and email links on a mobile device.
- Test light/dark mode on desktop and mobile.

## Search Console

- Submit `https://paradisebuilderslasvegas.com/sitemap-index.xml` in Google Search Console.
- Check for indexing, crawl, or sitemap errors after launch.
