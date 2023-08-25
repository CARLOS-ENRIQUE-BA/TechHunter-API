import { query } from "../../database/mysql";
import { PracticanteCalif } from "../domain/PracticanteCalif";
import { PracticanteCalifRepository } from "../domain/PracticanteRepository";

export class MysqlPracticanteCalifRepository implements PracticanteCalifRepository {
  async getAll(): Promise<PracticanteCalif[] | null> {
    const sql = "SELECT * FROM CalificacionPracticante";
    try {
      const [data]: any = await query(sql, []);
      const dataPracticanteCalif = Object.values(JSON.parse(JSON.stringify(data)));
      console.log(dataPracticanteCalif)
      return dataPracticanteCalif.map(
        (practicanteCalif: any) =>
          (new PracticanteCalif(
            practicanteCalif.id,
            practicanteCalif.calificacion,
            practicanteCalif.modalidad,
            practicanteCalif.servicio,
            practicanteCalif.empresa
          ))
      );
    } catch (error) {
      console.log(error)
      return null;
    }
  }

  async getById(userId: number): Promise<PracticanteCalif | null> {
    const sql = "SELECT * FROM CalificacionPracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteCalif(
        result[0].id,
        result[0].calificacion,
        result[0].modalidad,
        result[0].servicio,
        result[0].empresa
      );
    } catch (error) {
      return null;
    }
  }
  async delete(userId: number): Promise<PracticanteCalif | null> {
    const sql = "DELETE FROM CalificacionPracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteCalif(
        result[0].id,
        result[0].calificacion,
        result[0].modalidad,
        result[0].servicio,
        result[0].empresa
      );
    } catch (error) {
      return null;
    }
  }

  async put(
    userId: number,
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
): Promise<PracticanteCalif | null> {
    if (!calificacion || !modalidad || !servicio || !empresa) {
        throw new Error("Todos los campos son obligatorios.");
    } else {
        try {
            // Crear un objeto de actualización para construir la consulta SQL
            const updateData: any = {
                calificacion,
                modalidad,
                servicio,
                empresa,
            };

            // Construir la consulta SQL dinámicamente en función de los campos proporcionados
            const updateFields = Object.keys(updateData).map((field) => `${field} = ?`).join(', ');
            const sql = `UPDATE CalificacionPracticante SET ${updateFields} WHERE id = ?`;
            const params: any[] = [...Object.values(updateData), userId];

            // Ejecutar la consulta SQL
            const [result]: any = await query(sql, params);

            if (result.affectedRows === 0) {
                // Si ninguna fila fue actualizada, significa que el registro no existe
                return null;
            }

            return new PracticanteCalif(
                userId,
                calificacion,
                modalidad,
                servicio,
                empresa
            );
        } catch (error) {
            console.error('Error al actualizar el registro:', error);
            return null;
        }
    }
}

  async createPracticanteCalif(
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
  ): Promise<PracticanteCalif | null> {
    const sql =
      "INSERT INTO CalificacionPracticante (calificacion, modalidad, servicio, empresa) VALUES (?, ?, ?, ?)";
    const params: any[] = [calificacion, modalidad, servicio, empresa];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteCalif(result.insertId, calificacion, modalidad, servicio, empresa);
    } catch (error) {
      return null;
    }
  }
}
