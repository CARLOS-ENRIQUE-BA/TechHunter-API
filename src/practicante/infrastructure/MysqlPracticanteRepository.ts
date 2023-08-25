import { query } from "../../database/mysql";
import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class MysqlPracticanteRepository implements PracticanteRepository {
  async getAll(): Promise<Practicante[] | null> {
    const sql = "SELECT * FROM Practicante";
    try {
      const [data]: any = await query(sql, []);
      const dataPracticante = Object.values(JSON.parse(JSON.stringify(data)));

      return dataPracticante.map(
        (practicante: any) =>
          new Practicante(
            practicante.id,
            practicante.proyecto,
            practicante.telefono,
            practicante.status_estancia,
            practicante.conocimientos,
            practicante.fecha_inicio
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Practicante | null> {
    const sql = "SELECT * FROM Practicante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new Practicante(
        result[0].id,
        result[0].proyecto,
        result[0].telefono,
        result[0].status_estancia,
        result[0].conocimientos,
        result[0].fecha_inicio
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<Practicante | null> {
    const sql = "DELETE FROM Practicante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new Practicante(
        result[0].id,
        result[0].proyecto,
        result[0].telefono,
        result[0].status_estancia,
        result[0].conocimientos,
        result[0].fecha_inicio
      );
    } catch (error) {
      return null;
    }
  }

  async put(
    userId: number,
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
  ): Promise<Practicante | null> {
    if (!telefono || !status_estancia) {
      throw new Error("Todos los campos son obligatorios.");
    } else {
      try {
        // Crear un objeto de actualización para construir la consulta SQL
        const updateData: any = {
          proyecto,
          telefono,
          status_estancia,
          conocimientos,
          fecha_inicio,
        };

        // Construir la consulta SQL dinámicamente en función de los campos proporcionados
        const updateFields = Object.keys(updateData).map((field) => `${field} = ?`).join(', ');
        const sql = `UPDATE Practicante SET ${updateFields} WHERE id = ?`;
        const params: any[] = [...Object.values(updateData), userId];

        // Ejecutar la consulta SQL
        const [result]: any = await query(sql, params);

        if (result.affectedRows === 0) {
          // Si ninguna fila fue actualizada, significa que el registro no existe
          return null;
        }

        return new Practicante(
          userId,
          proyecto,
          telefono,
          status_estancia,
          conocimientos,
          fecha_inicio
        );
      } catch (error) {
        console.error('Error al actualizar el registro:', error);
        return null;
      }
    }
  }



  async createPracticante(
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
  ): Promise<Practicante | null> {
    if (!telefono || !status_estancia) {
      throw new Error("Todos los campos son obligatorios.");
    }
    else {
      const sql =
        "INSERT INTO Practicante (proyecto, telefono, status_estancia, conocimientos, fecha_inicio) VALUES (?, ?, ?, ?, ?)";
      const params: any[] = [proyecto, telefono, status_estancia, conocimientos, fecha_inicio];
      try {
        const [result]: any = await query(sql, params);
        return new Practicante(result.insertId, proyecto, telefono, status_estancia, conocimientos, fecha_inicio);
      } catch (error) {
        return null;
      }
    }
  }
}
