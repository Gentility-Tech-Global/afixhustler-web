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
          { name: "Borehole Drillers & Well Diggers" },
          { name: "Iron Benders" },
        ],
      },
    ],
  },

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

  {
  name: "Transport & Mobility",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Cars & Sedans" },
        { name: "Motorcycles & Scooters" },
        { name: "Tricycles (Keke)" },
        { name: "Bicycles" },
        { name: "Trucks & Heavy Vehicles" },
        { name: "Vehicle Spare Parts" },
        { name: "Tires & Wheels" },
        { name: "Vehicle Batteries" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Taxi & Ride-Hailing Services" },
        { name: "Car Rental Services" },
        { name: "Bus & Shuttle Transport" },
        { name: "Motorcycle Transport Services" },
        { name: "Delivery & Dispatch Services" },
        { name: "Courier & Parcel Services" },
        { name: "Moving & Relocation Services" },
        { name: "Truck Haulage Services" },
        { name: "Airport Pickup & Transfers" },
      ],
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Delivery Vans" },
        { name: "Logistics Trucks" },
        { name: "Transport Fleet Vehicles" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Drivers" },
        { name: "Dispatch Riders" },
        { name: "Logistics Coordinators" },
      ],
    },
  ],
},

{
  name: "Automobile Industry",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Vehicle Spare Parts" },
        { name: "Tires & Tubes" },
        { name: "Vehicle Batteries" },
        { name: "Engine Oil & Lubricants" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Auto Mechanical Repairs" },
        { name: "Vehicle Diagnostics" },
        { name: "Auto Electrical Repairs" },
        { name: "Panel Beating & Body Work" },
        { name: "Car Painting & Spray Services" },
        { name: "Tire Replacement & Balancing" },
        { name: "Car Wash & Detailing" },
      ],
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Car Diagnostic Tools" },
        { name: "Vehicle Lifting Machines" },
        { name: "Auto Repair Tools & Equipment" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Auto Mechanics" },
        { name: "Auto Electricians" },
        { name: "Panel Beaters & Body Technicians" },
        { name: "Interior & Offostry Technicians" },
      ],
    },
  ],
},

{
  name: "Food & Catering",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Cooked Meals & Dishes" },
        { name: "Bread & Pastries" },
        { name: "Cakes & Desserts" },
        { name: "Snacks & Small Chops" },
        { name: "Frozen Foods" },
        { name: "Fresh Meat & Poultry" },
        { name: "Fish & Seafood" },
        { name: "Beverages & Drinks" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Catering Services" },
        { name: "Event Cooking Services" },
        { name: "Cake Baking Services" },
        { name: "Food Delivery Services" },
      ],
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Industrial Ovens" },
        { name: "Food Processing Machines" },
        { name: "Commercial Kitchen Equipment" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Chefs & Cooks" },
        { name: "Bakers & Pastry Chefs" },
        { name: "Caterers & Food Vendors" },
      ],
    },
  ],
},

{
  name: "Technology & Digital Services",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Smartphones & Mobile Devices" },
        { name: "Laptops & Computers" },
        { name: "Tablets & Smart Devices" },
        { name: "POS Machines & Payment Devices" },
        { name: "Computer Accessories & Peripherals" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Software Development" },
        { name: "Mobile App Development" },
        { name: "Website Development" },
        { name: "Graphic Design Services" },
        { name: "UI/UX Design Services" },
        { name: "Digital Marketing Services" },
        { name: "SEO Optimization Services" },
        { name: "Data Analysis & Analytics" },
        { name: "Cybersecurity Services" },
        { name: "IT Support & Maintenance" },
      ],
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Servers & Data Storage Systems" },
        { name: "Networking Devices & Routers" },
        { name: "IT Infrastructure Equipment" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Software Developers" },
        { name: "Data Analysts" },
        { name: "Cybersecurity Specialists" },
        { name: "IT Support Engineers" },
        { name: "UI/UX Designer" },
        { name: "Graphics Designer" },
        { name: "Network Engineer" },
        { name: "Full Stack Developer" },
        { name: "Mobile App Developer" },
      ],
    },
  ],
},

{
  name: "Equipment Maintenance & Repairs",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Generator Spare Parts" },
        { name: "Industrial Machine Spare Parts" },
        { name: "Construction Equipment Spare Parts" },
        { name: "Farm Machinery Spare Parts" },
        { name: "Water Pump Parts" },
        { name: "Compressor Parts" },
        { name: "Welding Machine Parts" },
        { name: "Power Tools & Replacement Parts" }
      ]
    },
    {
      name: "Services",
      subCategories: [
        { name: "Generator Repairs & Servicing" },
        { name: "Industrial Machine Repairs" },
        { name: "Construction Equipment Repairs" },
        { name: "Farm Equipment Repairs" },
        { name: "Water Pump Repairs" },
        { name: "Air Compressor Repairs" },
        { name: "Welding Machine Repairs" },
        { name: "Power Tools Repairs" },
        { name: "Electrical Motor Rewinding" },
        { name: "Equipment Preventive Maintenance" }
      ]
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Portable Generators" },
        { name: "Industrial Generators" },
        { name: "Air Compressors" },
        { name: "Water Pumps" },
        { name: "Block Molding Machines" },
        { name: "Drilling Machines" },
        { name: "Welding Machines" },
        { name: "Concrete Mixers" },
        { name: "Farm Machinery" },
        { name: "Power Tools" }
      ]
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Generator Technicians" },
        { name: "Industrial Machine Technicians" },
        { name: "Construction Equipment Technicians" },
        { name: "Farm Equipment Technicians" },
        { name: "Water Pump Technicians" },
        { name: "Compressor Technicians" },
        { name: "Welding Machine Technicians" },
        { name: "Electrical Motor Rewinding Technicians" },
        { name: "Mechanical Maintenance Technicians" }
      ]
    }
  ]
},

{
  name: "Education & Training",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Books & Textbooks" },
        { name: "Stationery & Office Supplies" },
        { name: "Educational Materials & Kits" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Private Tutoring Services" },
        { name: "Vocational Training Programs" },
        { name: "Computer & ICT Training" },
        { name: "Language Learning Classes" },
        { name: "Coding Bootcamps" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Teachers & Educators" },
        { name: "Professional Trainers" },
        { name: "Private Tutors" },
      ],
    },
  ],
},

{
  name: "Health & Medical",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Medical Equipment & Devices" },
        { name: "First Aid Supplies" },
        { name: "Vitamins & Supplements" },
        { name: "Healthcare Consumables" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Nursing Care Services" },
        { name: "Physiotherapy Services" },
        { name: "Fitness Training Programs" },
        { name: "Nutrition & Diet Coaching" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Nurses & Caregivers" },
        { name: "Physiotherapists" },
        { name: "Fitness Trainers" },
      ],
    },
  ],
},

{
  name: "Beauty & Personal Care",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Cosmetics & Makeup Products" },
        { name: "Hair Care Products" },
        { name: "Perfumes & Fragrances" },
        { name: "Beauty Tools & Accessories" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Hairdressing Services" },
        { name: "Barbering Services" },
        { name: "Makeup Artist Services" },
        { name: "Nail Care Services" },
        { name: "Spa & Massage Therapy" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Hair Stylists" },
        { name: "Barbers" },
        { name: "Makeup Artists" },
      ],
    },
  ],
},

{
  name: "Events & Entertainment",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Event Decorations & Supplies" },
        { name: "Party Supplies" },
        { name: "Sound Equipment" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Event Planning & Coordination" },
        { name: "Photography Services" },
        { name: "Videography Services" },
        { name: "DJ & Music Services" },
        { name: "Event Decoration Services" },
      ],
    },
    {
      name: "Equipment",
      subCategories: [
        { name: "Sound Systems & Speakers" },
        { name: "Lighting Equipment" },
        { name: "Event Stage Equipment" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "DJs & Music Entertainers" },
        { name: "Photographers" },
        { name: "Videographers" },
      ],
    },
  ],
},

{
  name: "Real Estate & Property",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Land for Sale" },
        { name: "Residential Houses" },
        { name: "Apartments & Flats" },
        { name: "Commercial Buildings" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Property Management Services" },
        { name: "Real Estate Agency Services" },
        { name: "Property Valuation Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Real Estate Agents" },
        { name: "Property Managers" },
      ],
    },
  ],
},

{
  name: "Home Services",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Cleaning Materials" },
        { name: "Household Tools" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "House Cleaning Services" },
        { name: "Laundry Services" },
        { name: "Pest Control Services" },
        { name: "Gardening & Landscaping" },
        { name: "Waste Disposal Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Professional Cleaners" },
        { name: "Gardeners & Landscapers" },
      ],
    },
  ],
},

{
  name: "Security & Safety",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "CCTV Cameras & Surveillance Systems" },
        { name: "Alarm & Access Control Systems" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Security Guard Services" },
        { name: "CCTV Installation Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Security Personnel & Guards" },
      ],
    },
  ],
},

{
  name: "Manufacturing & Industry",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Factory Equipment & Machinery" },
        { name: "Industrial Materials & Components" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Product Manufacturing Services" },
        { name: "Metal Fabrication Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Machine Operators" },
        { name: "Industrial Technicians" },
      ],
    },
  ],
},

{
  name: "Energy & Utilities",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Generators & Power Plants" },
        { name: "Solar Panels & Solar Kits" },
        { name: "Inverters & Power Storage Systems" },
        { name: "Batteries & Energy Storage" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Solar Installation Services" },
        { name: "Generator Repair & Maintenance" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Solar Technicians" },
        { name: "Electrical Engineers" },
      ],
    },
  ],
},

{
  name: "Finance & Business Services",
  mainCategories: [
    {
      name: "Services",
      subCategories: [
        { name: "Accounting & Bookkeeping" },
        { name: "Tax Consulting & Advisory" },
        { name: "Business Consulting Services" },
        { name: "Insurance Brokerage Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Accountants & Auditors" },
        { name: "Financial Advisors & Consultants" },
      ],
    },
  ],
},

{
  name: "Media & Creative",
  mainCategories: [
    {
      name: "Products",
      subCategories: [
        { name: "Cameras & Photography Equipment" },
        { name: "Media Production Equipment" },
      ],
    },
    {
      name: "Services",
      subCategories: [
        { name: "Content Creation Services" },
        { name: "Video Editing Services" },
        { name: "Graphic Design Services" },
      ],
    },
    {
      name: "Skilled Labor",
      subCategories: [
        { name: "Graphic Designers" },
        { name: "Videographers & Editors" },
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