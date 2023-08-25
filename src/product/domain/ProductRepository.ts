import { Product } from "./Product";

export interface ProductRepository {
  getAll(): Promise<Product[] | null>;
  getById(userId: number): Promise<Product | null>;
  createProduct(
    nombre: string,
    apellido: string,
    usuario: string,
    contraseña: string
  ): Promise<Product | null>;
}
