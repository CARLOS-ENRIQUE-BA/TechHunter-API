import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class CreateProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}
  async run(
    nombre: string,
    apellido: string,
    usuario: string,
    contraseña: string
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.createProduct(
        nombre,
        apellido,
        usuario,
        contraseña
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}
