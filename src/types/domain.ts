export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
  characteristics: string[];
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export type Cart = {
  items: CartItem[];
};

export type ProductFilters = {
  query: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly: boolean;
  characteristics: string[];
  sortBy?: 'name-asc' | 'price-asc' | 'price-desc';
};
