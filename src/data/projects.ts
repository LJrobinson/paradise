export type Project = {
  title: string;
  slug: string;
  location: string;
  projectType: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  services: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  outcome: string;
  testimonial?: string;
  heroImage?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: "Cooksey Patio Cover Project",
    slug: "cooksey-patio-cover-project",
    location: "Las Vegas, NV",
    projectType: "Patio Cover",
    summary:
      "A focused patio cover project for a Las Vegas homeowner who needed more reliable shade and a cleaner outdoor living area.",
    seoTitle: "Cooksey Patio Cover Project | Paradise Builders",
    seoDescription:
      "See the Cooksey Patio Cover Project from Paradise Builders Las Vegas, a patio cover case study focused on shade, comfort, and outdoor living.",
    heroImage: undefined,
    gallery: undefined,
    services: ["Patio Covers", "Concrete", "Outdoor Living"],
    highlights: [
      "Added practical shade for a sun-exposed backyard patio",
      "Planned the cover around everyday outdoor use and Las Vegas heat",
      "Kept the project focused on durability, comfort, and a cleaner finished space",
    ],
    challenge:
      "The Cooksey backyard needed a more useful shaded area so the patio could work better during long Las Vegas outdoor seasons. The project called for a solution that felt permanent, practical, and connected to the existing home.",
    solution:
      "Paradise Builders planned the patio cover around the home's outdoor flow, shade needs, and the way the family wanted to use the space. The work focused on creating a cleaner patio zone without turning the project into an oversized backyard rebuild.",
    outcome:
      "The finished project gave the homeowner a more comfortable outdoor area with stronger shade, better usability, and a patio space that feels more intentional for daily life in Southern Nevada.",
  },
];

export function getProjectPath(slug: string) {
  return `/projects/${slug}/`;
}
