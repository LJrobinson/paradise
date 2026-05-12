export const services = [
  {
    title: "Patio Covers",
    slug: "patio-covers-las-vegas",
    eyebrow: "Shade structures",
    shortDescription:
      "Planning, construction, and finish work for patio cover projects across Southern Nevada.",
    description:
      "Patio cover design and construction for Las Vegas homes that need shade, structure, and outdoor comfort built around desert conditions.",
    seoTitle: "Patio Covers in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders designs and builds patio covers for Las Vegas homes, with durable outdoor living upgrades suited for Southern Nevada.",
    ctaLabel: "Request an estimate",
  },
  {
    title: "Pavers",
    slug: "pavers-las-vegas",
    eyebrow: "Hardscape surfaces",
    shortDescription:
      "Planning, construction, and finish work for paver projects across Southern Nevada.",
    description:
      "Paver installation for patios, walkways, driveways, and backyard upgrades that need clean layout, durable surfaces, and strong curb appeal.",
    seoTitle: "Pavers in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders installs pavers for patios, walkways, driveways, and outdoor living spaces across Las Vegas and Southern Nevada.",
    ctaLabel: "Request an estimate",
  },
  {
    title: "Concrete",
    slug: "concrete-las-vegas",
    eyebrow: "Concrete work",
    shortDescription:
      "Planning, construction, and finish work for concrete projects across Southern Nevada.",
    description:
      "Concrete contractor services for outdoor living spaces, patios, flatwork, and backyard projects where strength and finish quality matter.",
    seoTitle: "Concrete Contractor in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders provides concrete contractor services for patios, flatwork, and outdoor living upgrades in Las Vegas.",
    ctaLabel: "Request an estimate",
  },
  {
    title: "Outdoor Lighting",
    slug: "outdoor-lighting-las-vegas",
    eyebrow: "Exterior lighting",
    shortDescription:
      "Planning, construction, and finish work for outdoor lighting projects across Southern Nevada.",
    description:
      "Outdoor lighting upgrades that help Las Vegas backyards feel more usable, polished, and welcoming after dark.",
    seoTitle: "Outdoor Lighting in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders plans and installs outdoor lighting for Las Vegas patios, landscapes, and outdoor living spaces.",
    ctaLabel: "Request an estimate",
  },
  {
    title: "Landscape",
    slug: "landscape-las-vegas",
    eyebrow: "Landscape upgrades",
    shortDescription:
      "Planning, construction, and finish work for landscape projects across Southern Nevada.",
    description:
      "Landscape upgrades for Las Vegas homes, planned around outdoor living, desert conditions, and practical long-term use.",
    seoTitle: "Landscape Contractor in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders creates landscape upgrades for Las Vegas homes, connecting planting, hardscape, lighting, and outdoor living details.",
    ctaLabel: "Request an estimate",
  },
  {
    title: "Outdoor Living",
    slug: "outdoor-living-las-vegas",
    eyebrow: "Backyard upgrades",
    shortDescription:
      "Planning, construction, and finish work for outdoor living projects across Southern Nevada.",
    description:
      "Outdoor living upgrades that bring patio covers, pavers, concrete, lighting, and landscape work together for Las Vegas homes.",
    seoTitle: "Outdoor Living Contractor in Las Vegas | Paradise Builders",
    seoDescription:
      "Paradise Builders designs and builds outdoor living upgrades for Las Vegas homes, including patios, pavers, concrete, lighting, and landscape work.",
    ctaLabel: "Request an estimate",
  },
] as const;

export function getServicePath(slug: string) {
  return `/services/${slug}/`;
}
