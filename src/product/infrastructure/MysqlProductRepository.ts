import { query } from "../../database/mysql";
import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class MysqlProductRepository implements ProductRepository {
  async getAll(): Promise<Product[] | null> {
    const sql = "SELECT * FROM Register";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id,
            product.nombre,
            product.apellido,
            product.usuario,
            product.contraseña
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Product | null> {
    const sql = "SELECT * FROM Register WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Product(
        result[0].id,
        result[0].nombre,
        result[0].apellido,
        result[0].usuario,
        result[0].contraseña
      );
    } catch (error) {
      return null;
    }
  }

  async createProduct(
    nombre: string,
    apellido: string,
    usuario: string,
    contraseña: string
  ): Promise<Product | null> {
    if (!nombre || !apellido || !usuario || !contraseña) {
      throw new Error("Todos los campos son obligatorios.");
    }
    else{
      const sql =
        "INSERT INTO Register (nombre, apellido, usuario, contraseña) VALUES (?, ?, ?, ?)";
      const params: any[] = [nombre, apellido, usuario, contraseña];
      try {
        const [result]: any = await query(sql, params);
        return new Product(result.insertId, nombre, apellido, usuario, contraseña);
      } catch (error) {
        return null;
      }
    }
  }
}
