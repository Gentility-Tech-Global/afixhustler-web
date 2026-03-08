// src/data/marketCategories.ts

export interface SubCategory {
  name: string;
}

export interface MainCategory {
  name: "Products" | "Services" | "Equipment" | "Skilled Labor";
  subCategories: SubCategory[];
}

export interface Industry {
  name: string;
  mainCategories: MainCategory[];
}

export const marketCategories: Industry[] = [
  {
    name: "Agriculture & Farming",
    mainCategories: [
      {
        name: "Products",
        subCategories: [
          { name: "Crops" },
          { name: "Livestock" },
          { name: "Poultry" },
          { name: "Aquaculture" },
          { name: "Animal Feed" },
          { name: "Fertilizers & Agrochemicals" },
          { name: "Seeds & Seedlings" },
        ],
      },
      {
        name: "Services",
        subCategories: [
          { name: "Farm Management" },
          { name: "Tractor & Machinery Hiring" },
          { name: "Irrigation & Water Management" },
          { name: "Harvesting & Post-Harvest Services" },
          { name: "Veterinary & Animal Health" },
          { name: "Produce Transportation & Logistics" },
          { name: "Storage & Warehousing" },
        ],
      },
      {
        name: "Equipment",
        subCategories: [
          { name: "Tractors & Heavy Machinery" },
          { name: "Harvesters & Planters" },
          { name: "Irrigation Systems & Pumps" },
          { name: "Poultry & Livestock Housing" },
          { name: "Processing Machines" },
        ],
      },
      {
        name: "Skilled Labor",
        subCategories: [
          { name: "Farm Managers & Supervisors" },
          { name: "Agricultural Technicians" },
          { name: "Harvesting & Processing Workers" },
          { name: "Poultry & Livestock Handlers" },
        ],
      },
    ],
  },

  {
    name: "Housing / Building / Construction",
    mainCategories: [
      {
        name: "Products",
        subCategories: [
          { name: "Cement & Concrete Materials" },
          { name: "Sand, Gravel & Aggregates" },
          { name: "Iron Rods & Steel" },
          { name: "Blocks, Bricks & Tiles" },
          { name: "Roofing & Ceiling Materials" },
          { name: "Plumbing & Sanitary Fittings" },
          { name: "Electrical Cables & Fittings" },
          { name: "Paints & Finishing Materials" },
        ],
      },
      {
        name: "Services",
        subCategories: [
          { name: "Building Construction" },
          { name: "Renovation & Remodeling" },
          { name: "Borehole Drilling & Water Supply" },
          { name: "Interior Decoration & Finishing" },
          { name: "Painting & Waterproofing" },
        ],
      },
      {
        name: "Equipment",
        subCategories: [
          { name: "Concrete Mixers & Vibrators" },
          { name: "Scaffolding & Formwork" },
          { name: "Excavators & Earth-Moving Machines" },
          { name: "Drilling & Cutting Tools" },
        ],
      },
      {
        name: "Skilled Labor",
        subCategories: [
          { name: "Masons & Bricklayers" },
          { name: "Carpenters & Woodworkers" },
          { name: "Plumbers & Pipe Fitters" },
          { name: "Electricians & Wiremen" },
          { name: "Tilers & Flooring Specialists" },
          { name: "Welders & Steel Fabricators" },
          { name: "POP & Ceiling Installers" },
          { name: "Aluminium & Glazing Technicians" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // Add remaining industries in the same pattern
  // (Transport & Mobility, Automobile, Fashion & Textiles, etc.)
  // For brevity, only two shown above — follow the same structure for others.
  // ──────────────────────────────────────────────

  // Example for one more:
  {
    name: "Fashion & Textiles",
    mainCategories: [
      {
        name: "Products",
        subCategories: [
          { name: "Shoes & Footwear" },
          { name: "Clothing & Garments" },
          { name: "Leather Bags & Accessories" },
          { name: "Fabrics & Textiles" },
          { name: "Jewelry & Watches" },
        ],
      },
      {
        name: "Services",
        subCategories: [
          { name: "Tailoring & Sewing" },
          { name: "Fashion Design & Pattern Making" },
          { name: "Embroidery & Customization" },
          { name: "Laundry & Dry Cleaning" },
        ],
      },
      {
        name: "Equipment",
        subCategories: [
          { name: "Industrial Sewing Machines" },
          { name: "Embroidery Machines" },
          { name: "Fabric Cutting & Finishing Tools" },
        ],
      },
      {
        name: "Skilled Labor",
        subCategories: [
          { name: "Tailors & Dressmakers" },
          { name: "Fashion Designers" },
          { name: "Shoe Makers & Repairers" },
          { name: "Embroidery Specialists" },
        ],
      },
    ],
  },

  // Continue adding the rest of the 18 industries in the same format...
];

export function getMainCategories(industryName: string): string[] {
  const industry = marketCategories.find((i) => i.name === industryName);
  return industry ? industry.mainCategories.map((mc) => mc.name) : [];
}

export function getSubCategories(industryName: string, mainCategory: string): string[] {
  const industry = marketCategories.find((i) => i.name === industryName);
  if (!industry) return ["Other"];
  
  const mc = industry.mainCategories.find((m) => m.name === mainCategory);
  return mc ? mc.subCategories.map((sub) => sub.name) : ["Other"];
}