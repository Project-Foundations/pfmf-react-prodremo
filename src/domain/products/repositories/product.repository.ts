import { Product } from "../entities";

export interface ProductRepository {
  getAll(): Promise<Product[]>;

  getById(productId: number): Promise<Product>;
}