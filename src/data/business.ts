export const business = {
  name: "Paradise Builders Las Vegas",
  shortName: "Paradise Builders",
  url: "https://paradisebuilderslasvegas.com",
  phone: "702-242-0271",
  email: "paradisebuiderslv@gmail.com",
  establishedYear: "1999",
  tagline: "Outdoor living built for Las Vegas.",
  description:
    "Paradise Builders Las Vegas designs and builds patio covers, pavers, concrete, outdoor lighting, landscaping, and outdoor living spaces across Southern Nevada.",
  address: {
    street: "5385 Cameron St. #115",
    city: "Las Vegas",
    state: "NV",
    zip: "89118",
    country: "US",
  },
  serviceAreas: [
    "Las Vegas",
    "Henderson",
    "Summerlin",
    "North Las Vegas",
    "Enterprise",
    "Spring Valley",
    "Southern Nevada",
  ],
  licenses: [
    {
      number: "57236",
      classification: "C-14",
      label: "Steel Reinforcing & Erection",
    },
    {
      number: "63022",
      classification: "C-5",
      label: "Concrete Contracting",
    },
  ],
  services: [
    "Patio Covers",
    "Pavers",
    "Concrete",
    "Outdoor Lighting",
    "Landscape",
    "Outdoor Living",
  ],
} as const;