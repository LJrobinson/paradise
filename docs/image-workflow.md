# Image Workflow

Paradise Builders image assets live in `public/images/` so the static Astro build can reference them directly and stay cPanel-friendly.

## Folders

- Service images: `public/images/services/{service-slug}/`
- Project images: `public/images/projects/{project-slug}/`
- Trust or license imagery: `public/images/trust/`

## Preferred Formats

Use `webp` or `avif` for production images. JPEG is acceptable only when a source photo cannot be converted cleanly.

Do not commit huge original phone images. Keep original full-size photos outside the repo, then export web-ready versions into `public/images/`.

## Recommended Sizes

- Service hero images: `1600x1200`
- Service card images: `900x560`
- Project hero images: `1600x1200`
- Project gallery images: `1200x900`
- Small trust images or badges: `800x600`

These dimensions do not need to be exact, but keep the same general aspect ratios so layouts remain stable.

## Naming Conventions

Use lowercase filenames, hyphens, and short descriptive names.

Recommended paths:

```text
public/images/services/{service-slug}/hero.webp
public/images/services/{service-slug}/card.webp
public/images/projects/{project-slug}/hero.webp
public/images/projects/{project-slug}/gallery-01.webp
public/images/projects/{project-slug}/gallery-02.webp
```

Example:

```text
public/images/projects/cooksey-patio-cover-project/hero.webp
public/images/projects/cooksey-patio-cover-project/gallery-01.webp
```

## Updating Data Files

Add image paths in the matching data file.

Service images go in `src/data/services.ts`:

```ts
heroImage: "/images/services/patio-covers-las-vegas/hero.webp",
cardImage: "/images/services/patio-covers-las-vegas/card.webp",
```

Project images go in `src/data/projects.ts`:

```ts
heroImage: "/images/projects/cooksey-patio-cover-project/hero.webp",
gallery: [
  "/images/projects/cooksey-patio-cover-project/gallery-01.webp",
  "/images/projects/cooksey-patio-cover-project/gallery-02.webp",
],
```

If an image path is missing, the site renders a designed placeholder instead of a broken image.
