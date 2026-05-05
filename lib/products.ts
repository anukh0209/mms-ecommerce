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
  description: {
    mn: string;
    en: string;
    cn: string;
  };
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7000-hero01.png",
    description: {
      mn: "Өндөр уян хатан полиуретан бэхэлгээтэй, бээлий. Хурууны үзүүр хүртэл polyurethane бүрээстэй. Ажлын талбайд илүүдэл чийг, тосгүй ажиллахад тохиромжтой.",
      en: "High dexterity polyurethane dipped gloves. Full finger polyurethane coating. Ideal for dry and light oil work environments.",
      cn: "高灵活性聚氨酯浸胶手套。全指聚氨酯涂层。适用于干燥和轻油工作环境。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7010-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 3-ийн хамгаалалттай, уян хатан полиуретан бээлий. HPPE утасаар нэхсэн, гарын хөдөлгөөнийг хязгаарлалгүй хамгаална.",
      en: "Cut Level 3 protection with high dexterity polyurethane gloves. Knitted with HPPE yarn, provides protection without limiting hand movement.",
      cn: "切割等级3防护，高灵活性聚氨酯手套。采用HPPE纱线编织，在不影响手部活动的情况下提供防护。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7020-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 4. Металл боловсруулах, шил хүрэх ажилд зориулсан дээд зэргийн хамгаалалт.",
      en: "Cut Level 4. Superior protection for metal handling and glass contact work.",
      cn: "切割等级4。为金属处理和玻璃接触工作提供卓越防护。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-7030-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 6. Нитрил бүрээстэй, тос, химийн бодист тэсвэртэй. Хүнд нөхцөлд ажиллахад тохиромжтой.",
      en: "Cut Level 6. Nitrile coated, resistant to oil and chemicals. Suitable for heavy-duty work conditions.",
      cn: "切割等级6。丁腈涂层，耐油和化学品。适用于恶劣工作条件。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8720-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 7. Маш өндөр хамгаалалттай, гурван давхар нитрил бүрээс. Уул уурхай, барилгын ажилд.",
      en: "Cut Level 7. Very high protection with triple-layer nitrile coating. For mining and construction work.",
      cn: "切割等级7。三层丁腈涂层，防护性能极高。适用于采矿和建筑工作。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8730-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 8. Хамгийн өндөр зэргийн зүсэлтээс хамгаалах бээлий. Хурц иртэй багаж барихад тохиромжтой.",
      en: "Cut Level 8. Highest level cut protection gloves. Ideal for handling sharp-edged tools.",
      cn: "切割等级8。最高等级防切割手套。适用于操作锋利的工具。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-8740-hero01.png",
    description: {
      mn: "Зүсэлтийн түвшин 9. Экстрем хамгаалалт. Хөнгөн цагаан, ган зүсэх ажилд зориулсан мэргэжлийн бээлий.",
      en: "Cut Level 9. Extreme protection. Professional gloves for cutting aluminum and steel work.",
      cn: "切割等级9。极端防护。专为铝和钢材切割作业设计的专业手套。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-9030-hero01.png",
    description: {
      mn: "Гарын шууны хамгаалалт. Зүсэлтийн түвшин 3. Хөнгөн жинтэй, уян хатан материал.",
      en: "Arm protection sleeves. Cut Level 3. Lightweight, flexible material.",
      cn: "手臂防护袖套。切割等级3。轻质灵活材料。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/4/8/48-73-9050-hero01.png",
    description: {
      mn: "Гарын шууны хамгаалалт. Зүсэлтийн түвшин 5. Нэмэлт хамгаалалттай, хүнд даацын ажилд.",
      en: "Arm protection sleeves. Cut Level 5. Extra protection for heavy-duty work.",
      cn: "手臂防护袖套。切割等级5。重型作业的额外防护。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hpjbl2-hero_1.png",
    description: {
      mn: "M12 халаалттай куртка. Батерей ажиллуулдаг, 3 түвшний халаалттай. -20°C хүртэл хүйтэнд хамгаална.",
      en: "M12 heated hooded jacket. Battery-powered with 3 heat levels. Protects down to -20°C.",
      cn: "M12加热连帽夹克。电池供电，3档加热。可在零下20度提供保护。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hpvbl2-hero_1.png",
    description: {
      mn: "M12 халаалттай хүндний цамц. Уян хатан, хөнгөн. Биеийн дулааныг хадгална.",
      en: "M12 heated vest. Flexible and lightweight. Retains body heat.",
      cn: "M12加热背心。灵活轻便。保持体温。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-hhbl4-hero_1.png",
    description: {
      mn: "M12 халаалттай hoodie. Өдөр тутмын хувцасны загвартай. Ажлын талбайд болон амралтын өдрүүдэд тохиромжтой.",
      en: "M12 heated hoodie. Everyday clothing style. Suitable for work sites and days off.",
      cn: "M12加热连帽衫。日常服装款式。适合工作场所和休息日穿着。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-fbfl-hero01.png",
    description: {
      mn: "M12 FUEL 10x330мм бандайл. Гуравдагч үеийн бүрхүүлгүй мотор. Нарийн хэсгүүдэд зориулсан уян хатан багаж.",
      en: "M12 FUEL 10x330mm bandfile. 3rd generation brushless motor. Flexible tool for detailed work.",
      cn: "M12 FUEL 10x330mm砂带机。第三代无刷电机。适用于精细工作的灵活工具。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-blp-hero01.png",
    description: {
      mn: "M12 бүрхүүлгүй хөрөөдөгч. 56мм өргөнтэй. Модон гадаргууг тэгшлэхэд тохиромжтой. Хөнгөн жинтэй.",
      en: "M12 brushless planer. 56mm width. Ideal for smoothing wood surfaces. Lightweight.",
      cn: "M12无刷电刨。56mm宽度。适用于刨平木材表面。轻便设计。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-fbcu-hero01.png",
    description: {
      mn: "M18 FUEL өвс хадагч. 2-in-1 функц - зүсэх ба огтлох. Бензин багаж шиг хүчтэй, батерей ажиллуулдаг.",
      en: "M18 FUEL brush cutter. 2-in-1 function - cutting and trimming. Gas-like power, battery operated.",
      cn: "M18 FUEL割草机。二合一功能 - 切割和修剪。汽油机般的动力，电池驱动。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-fthchs35-hero_1.png",
    description: {
      mn: "M18 FUEL дээд бариултай гинжин хөрөө. 356мм (14 инч) ир. Мод бэлтгэх, гадаа ажилд тохиромжтой.",
      en: "M18 FUEL top handle chainsaw. 356mm (14 inch) bar. Suitable for wood preparation and outdoor work.",
      cn: "M18 FUEL顶柄链锯。356mm（14英寸）导板。适用于木材加工和户外作业。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/l/4/l4-fl2000-hero01.png",
    description: {
      mn: "REDLITHIUM USB чиглүүлэгч гэрэл. 2000 люмен. USB цэнэглэдэг. Холын болон ойрын гэрэлтүүлэг.",
      en: "REDLITHIUM USB slide focus flashlight. 2000 lumens. USB rechargeable. Spot and flood lighting.",
      cn: "REDLITHIUM USB变焦手电筒。2000流明。USB充电。聚光和泛光照明。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-fcddexl-0-hero01.png",
    description: {
      mn: "M18 FUEL тоос сорогч. 26мм цохилтот дрийлтэй холбогддог. Бетон өрөмдөхөд үүсэх тоосыг шууд сорно.",
      en: "M18 FUEL dust extractor. Connects to 26mm rotary hammer. Sucks dust directly during concrete drilling.",
      cn: "M18 FUEL吸尘器。可连接26mm电锤。在混凝土钻孔时直接吸走灰尘。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12-bhcs3l-hero01.png",
    description: {
      mn: "M12 гарын шүршигч. 3 литр багтаамж. Химийн бодис, пестицид шүршихэд. Уян хатан хоолойтой.",
      en: "M12 handheld sprayer. 3 liter capacity. For spraying chemicals and pesticides. Flexible hose.",
      cn: "M12手持喷雾器。3升容量。用于喷洒化学品和农药。配有柔性软管。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-fvp5m-hero02.png",
    description: {
      mn: "M18 FUEL 5CFM вакуум насос. Хөргөлтийн системд зориулсан. Батерей ажиллуулдаг, хөдөлгөөнтэй.",
      en: "M18 FUEL 5CFM vacuum pump. For refrigeration systems. Battery powered, portable.",
      cn: "M18 FUEL 5CFM真空泵。用于制冷系统。电池供电，便携式设计。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m12_bswp-0-hero01.png",
    description: {
      mn: "M12 усны насос. Хөнгөн жинтэй, зөөврийн. Барилга, уул уурхайд ус зайлуулахад хэрэглэнэ.",
      en: "M12 stick water pump. Lightweight and portable. Used for water drainage in construction and mining.",
      cn: "M12水泵。轻便便携。用于建筑和采矿中的排水作业。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-blsag125x-0-hero01.png",
    description: {
      mn: "M18 бүрхүүлгүй 100мм зүлгүүр. 8500 эрг/мин. Ган, төмөр зүлгэх, хайчлахад.",
      en: "M18 brushless 100mm grinder. 8500 RPM. For grinding and cutting steel and iron.",
      cn: "M18无刷100mm角磨机。8500转/分钟。用于钢材和铁材的打磨和切割。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/m/1/m18-blsag125x-0-hero01.png",
    description: {
      mn: "M18 бүрхүүлгүй 125мм зүлгүүр. Илүү том дисктэй, хурдан ажиллахад тохиромжтой.",
      en: "M18 brushless 125mm grinder. Larger disc size, suitable for fast work.",
      cn: "M18无刷125mm角磨机。更大的砂轮尺寸，适合快速作业。"
    }
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
    image: "https://www.milwaukeetool.mn/media/catalog/product/cache/d5c5728dc1c11492939ecd42e3a791a1/2/5/2534-21_101.png",
    description: {
      mn: "M12 бүрхүүлгүй махчин хайч. 32мм хүртэл мөчир хайчлана. Цэцэрлэг, усан сан бүтээхэд.",
      en: "M12 brushless pruning shears. Cuts branches up to 32mm. For gardens and building orchards.",
      cn: "M12无刷修枝剪。可剪切32mm以内树枝。适用于花园和果园建设。"
    }
  }
];

export function formatPrice(price: number): string {
  return price.toLocaleString('mn-MN') + '₮';
}
