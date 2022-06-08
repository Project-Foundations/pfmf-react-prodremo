import { Product, ProductRepository } from "../../../domain/products";

export class ProductRepositoryImpl implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const response = await fetch('http://localhost:3005/msBase/api/v1/products');
    const result = await response.json();
    return result.data;
  }

  async getById(productId: number): Promise<Product> {
    const response = await fetch(`http://localhost:3005/msBase/api/v1/products/${productId}`);
    const result = await response.json();
    return result.data;
  }
  
}