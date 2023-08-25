import { query } from "../../database/mysql";
import { PracticanteDet } from "../domain/PracticanteDet";
import { PracticanteDetRepository } from "../domain/PracticanteRepository";

export class MysqlPracticanteDetRepository implements PracticanteDetRepository {
  async getAll(): Promise<PracticanteDet[] | null> {
    const sql = "SELECT * FROM DetallePracticante";
    try {
      const [data]: any = await query(sql, []);
      const dataPracticanteDet = Object.values(JSON.parse(JSON.stringify(data)));

      return dataPracticanteDet.map(
        (practicanteDet: any) =>
          new PracticanteDet(
            practicanteDet.id,
            practicanteDet.correo,
            practicanteDet.preferencias,
            practicanteDet.rol_practicante,
            practicanteDet.fecha_final,
            practicanteDet.nombre_instituto
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<PracticanteDet | null> {
    const sql = "SELECT * FROM DetallePracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteDet(
        result[0].id,
        result[0].correo,
        result[0].preferencias,
        result[0].rol_practicante,
        result[0].fecha_final,
        result[0].nombre_instituto
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<PracticanteDet | null> {
    const sql = "DELETE FROM DetallePracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteDet(
        result[0].id,
        result[0].correo,
        result[0].preferencias,
        result[0].rol_practicante,
        result[0].fecha_final,
        result[0].nombre_instituto
      );
    } catch (error) {
      return null;
    }
  }

  async put(
    userId: number,
    correo: string,
    preferencias: string,
    rol_practicante: string,
    fecha_final: Date,
    nombre_instituto: string
): Promise<PracticanteDet | null> {
    if (!correo || !preferencias || !rol_practicante || !fecha_final || !nombre_instituto) {
        throw new Error("Todos los campos son obligatorios.");
    } else {
        try {
            // Crear un objeto de actualización para construir la consulta SQL
            const updateData: any = {
                correo,
                preferencias,
                rol_practicante,
                fecha_final,
                nombre_instituto,
            };

            // Construir la consulta SQL dinámicamente en función de los campos proporcionados
            const updateFields = Object.keys(updateData).map((field) => `${field} = ?`).join(', ');
            const sql = `UPDATE DetallePracticante SET ${updateFields} WHERE id = ?`;
            const params: any[] = [...Object.values(updateData), userId];

            // Ejecutar la consulta SQL
            const [result]: any = await query(sql, params);

            if (result.affectedRows === 0) {
                return null;
            }

            return new PracticanteDet(
                userId,
                correo,
                preferencias,
                rol_practicante,
                fecha_final,
                nombre_instituto
            );
        } catch (error) {
            console.error('Error al actualizar el registro:', error);
            return null;
        }
    }
}



  async createPracticanteDet(
    correo: string,
    preferencias: string,
    rol_practicante: string,
    fecha_final: Date,
    nombre_instituto: string
  ): Promise<PracticanteDet | null> {
    const sql =
      "INSERT INTO DetallePracticante (correo, preferencias, rol_practicante, fecha_final, nombre_instituto) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [correo, preferencias, rol_practicante, fecha_final, nombre_instituto];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteDet(result.insertId, correo, preferencias, rol_practicante, fecha_final, nombre_instituto);
    } catch (error) {
      return null;
    }
  }
}
