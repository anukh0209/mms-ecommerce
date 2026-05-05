export interface Product {
  id: number;
  name: string;
  code: string;
  stock: number;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  image: string | null;
}

export const products: Product[] = [
  // Work Gear - Gloves
  {
    id: 1,
    name: "Cut Level 2 High Dexterity Polyurethane Dipped Gloves",
    code: "48-73-7000",
    stock: 150,
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7000-hero01.png"
  },
  {
    id: 2,
    name: "Cut Level 3 High Dexterity Polyurethane Dipped Gloves",
    code: "48-73-7010",
    stock: 200,
    price: 52000,
    originalPrice: 62000,
    discount: 16,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7010-hero01.png"
  },
  {
    id: 3,
    name: "Cut Level 4 High Dexterity Polyurethane Dipped Gloves",
    code: "48-73-7020",
    stock: 180,
    price: 58000,
    originalPrice: 68000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7020-hero01.png"
  },
  {
    id: 4,
    name: "Cut Level 6 High-Dexterity Nitrile Dipped Gloves",
    code: "48-73-7030",
    stock: 120,
    price: 65000,
    originalPrice: 78000,
    discount: 17,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7030-hero01.png"
  },
  {
    id: 5,
    name: "Cut Level 7 High Dexterity Nitrile Dipped Gloves",
    code: "48-73-8720",
    stock: 95,
    price: 72000,
    originalPrice: 85000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8720-hero01.png"
  },
  {
    id: 6,
    name: "Cut Level 8 High Dexterity Nitrile Dipped Gloves",
    code: "48-73-8730",
    stock: 80,
    price: 78000,
    originalPrice: 92000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8730-hero01.png"
  },
  {
    id: 7,
    name: "Cut Level 9 High Dexterity Nitrile Dipped Gloves",
    code: "48-73-8740",
    stock: 60,
    price: 85000,
    originalPrice: 98000,
    discount: 13,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8740-hero01.png"
  },
  // Work Gear - Protective Sleeves
  {
    id: 8,
    name: "Cut Level 3 Protective Sleeves",
    code: "48-73-9030",
    stock: 110,
    price: 68000,
    originalPrice: 80000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-9030-hero01.png"
  },
  {
    id: 9,
    name: "Cut Level 5 Protective Sleeves",
    code: "48-73-9050",
    stock: 85,
    price: 75000,
    originalPrice: 88000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-9050-hero01.png"
  },
  // Heated Gear
  {
    id: 10,
    name: "M12 Heated Hooded Jackets",
    code: "M12-HPJBL2",
    stock: 45,
    price: 850000,
    originalPrice: 980000,
    discount: 13,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hpjbl2-hero_1.png"
  },
  {
    id: 11,
    name: "M12 Heated Vests",
    code: "M12-HPVBL2",
    stock: 55,
    price: 720000,
    originalPrice: 850000,
    discount: 15,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hpvbl2-hero_1.png"
  },
  {
    id: 12,
    name: "M12 Heated Hoodies",
    code: "M12-HHBL4",
    stock: 40,
    price: 680000,
    originalPrice: 780000,
    discount: 13,
    category: "workgear",
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hhbl4-hero_1.png"
  },
  // Power Tools - Drilling
  {
    id: 13,
    name: "M12 FUEL 10 x 330mm Bandfile",
    code: "M12-FBFL",
    stock: 25,
    price: 1250000,
    originalPrice: 1450000,
    discount: 14,
    category: "powertools",
    image: null
  },
  {
    id: 14,
    name: "M12 Brushless Planer",
    code: "M12-BLP",
    stock: 30,
    price: 980000,
    originalPrice: 1150000,
    discount: 15,
    category: "powertools",
    image: null
  },
  // Power Tools - Outdoor
  {
    id: 15,
    name: "M18 FUEL Brush Cutter & String Trimmer",
    code: "M18-FBCU",
    stock: 20,
    price: 1850000,
    originalPrice: 2100000,
    discount: 12,
    category: "powertools",
    image: null
  },
  {
    id: 16,
    name: "M18 FUEL Top Handle Chainsaw 356mm",
    code: "M18-FTHCHS35",
    stock: 18,
    price: 2200000,
    originalPrice: 2500000,
    discount: 12,
    category: "powertools",
    image: null
  },
  // Lighting
  {
    id: 17,
    name: "REDLITHIUM USB Slide Focus Flashlight",
    code: "L4-FL2000",
    stock: 150,
    price: 185000,
    originalPrice: 220000,
    discount: 16,
    category: "powertools",
    image: null
  },
  // Cleaning
  {
    id: 18,
    name: "M18 FUEL HAMMERVAC 26mm Dust Extractor",
    code: "M18-FCDDEXL",
    stock: 35,
    price: 1650000,
    originalPrice: 1850000,
    discount: 11,
    category: "powertools",
    image: null
  },
  // Sprayers
  {
    id: 19,
    name: "M12 Handheld Sprayers 3L",
    code: "M12-BHCS3L",
    stock: 40,
    price: 850000,
    originalPrice: 980000,
    discount: 13,
    category: "powertools",
    image: null
  },
  // Vacuum
  {
    id: 20,
    name: "M18 FUEL 5CFM Vacuum Pump",
    code: "M18-FVP5M",
    stock: 22,
    price: 2100000,
    originalPrice: 2350000,
    discount: 11,
    category: "powertools",
    image: null
  },
  // Pumps
  {
    id: 21,
    name: "M12 Stick Water Pump",
    code: "M12-BSWP",
    stock: 28,
    price: 950000,
    originalPrice: 1100000,
    discount: 14,
    category: "powertools",
    image: null
  },
  // Grinders
  {
    id: 22,
    name: "M18 Brushless 100mm Grinder",
    code: "M18-BLSAG100X",
    stock: 45,
    price: 1150000,
    originalPrice: 1300000,
    discount: 12,
    category: "powertools",
    image: null
  },
  {
    id: 23,
    name: "M18 Brushless 125mm Grinder",
    code: "M18-BLSAG125X",
    stock: 38,
    price: 1250000,
    originalPrice: 1450000,
    discount: 14,
    category: "powertools",
    image: null
  },
  // Pruning
  {
    id: 24,
    name: "M12 Brushless Pruning Shears",
    code: "2534-21",
    stock: 32,
    price: 1350000,
    originalPrice: 1550000,
    discount: 13,
    category: "powertools",
    image: null
  }
];

export function formatPrice(price: number): string {
  return price.toLocaleString('mn-MN') + '₮';
}
