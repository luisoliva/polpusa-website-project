export interface ProductCategory {
  id?: number;
  name?: string;
  subcategory?: ProductCategory[];
}

export interface ProductItem {
  id?: number;
  image?: string;
  name?: string;
}