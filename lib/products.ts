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
  {
    id: 1,
    name: "M12 Импакт ком",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "battery",
    image: null
  },
  {
    id: 2,
    name: "Самбар",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "switchboard",
    image: null
  },
  {
    id: 3,
    name: "Кабель",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "cable",
    image: null
  },
  {
    id: 4,
    name: "M12 Импакт ком",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "battery",
    image: null
  },
  {
    id: 5,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  }
];

export const solarProducts: Product[] = [
  {
    id: 6,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  },
  {
    id: 7,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  },
  {
    id: 8,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  },
  {
    id: 9,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  },
  {
    id: 10,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  },
  {
    id: 11,
    name: "НАРНЫ ХАВТАН",
    code: "M12FDDXT",
    stock: 1453,
    price: 1250000,
    originalPrice: 1500000,
    discount: 20,
    category: "solar",
    image: null
  }
];

export function formatPrice(price: number): string {
  return price.toLocaleString('mn-MN') + '₮';
}
