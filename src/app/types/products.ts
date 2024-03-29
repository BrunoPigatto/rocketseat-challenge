export interface ProductsFetchResponse {
  allProducts: Product[];
}

export interface Product {
  id?: string;
  name: string;
  price_in_cents: number;
  image_url?: string;
  description?: string;
  category?: string;
}

export interface ProductInCart extends Product {
  quantity: number;
}
