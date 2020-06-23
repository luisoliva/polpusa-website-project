import { ECategoryType } from '../enums/ECategoryType';

export interface ProductCategory {
  id?: number;
  name?: string;
  type?: ECategoryType;
  subcategory?: ProductCategory[];
}

export interface ProductItem {
  id?: number;
  image?: string;
  name?: string;
}