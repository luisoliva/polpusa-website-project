import { ECategoryType } from '../enums/ECategoryType';
import {ProductEn} from "../models/product-en.model";
import {CategoryTranslation} from "../models/category-translation.model";
import {Product} from "../models/product.model";
import {Pagination} from "../models/pagination.model";

export interface ProductCategory {
  id?: number;
  name?: string;
  type?: ECategoryType;
  subcategory?: Product[];
  category?:CategoryTranslation[];
  pagination?:Pagination;
}

export interface ProductItem {
  id?: number;
  image?: string;
  name?: string;
}

export interface ProductDetail {
  id?: number;
  image?: string;
  name?: string;
  descriptions?: string[];
}
