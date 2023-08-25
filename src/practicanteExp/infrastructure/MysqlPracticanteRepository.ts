import { query } from "../../database/mysql";
import { PracticanteExp } from "../domain/PracticanteExp";
import { PracticanteExpRepository } from "../domain/PracticanteRepository";

export class MysqlPracticanteExpRepository implements PracticanteExpRepository {
  async getAll(): Promise<PracticanteExp[] | null> {
    const sql = "SELECT * FROM ExperienciaPracticante";
    try {
      const [data]: any = await query(sql, []);
      const dataPracticanteDet = Object.values(JSON.parse(JSON.stringify(data)));

      return dataPracticanteDet.map(
        (practicanteExp: any) =>
          new PracticanteExp(
            practicanteExp.id,
            practicanteExp.experiencia_practicante,
            practicanteExp.comentarios,
            practicanteExp.nombre_practicante,
            practicanteExp.cuatrimestre,
            practicanteExp.curriculum
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<PracticanteExp | null> {
    const sql = "SELECT * FROM ExperienciaPracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteExp(
        result[0].id,
        result[0].experiencia_practicante,
        result[0].comentarios,
        result[0].nombre_practicante,
        result[0].cuatrimestre,
        result[0].curriculum
      );
    } catch (error) {
      return null;
    }
  }

  async delete(userId: number): Promise<PracticanteExp | null> {
    const sql = "DELETE FROM ExperienciaPracticante WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new PracticanteExp(
        result[0].id,
        result[0].experiencia_practicante,
        result[0].comentarios,
        result[0].nombre_practicante,
        result[0].cuatrimestre,
        result[0].curriculum
      );
    } catch (error) {
      return null;
    }
  }


  async put(
    userId: number,
    experiencia_practicante: string,
    comentarios: string,
    nombre_practicante: string,
    cuatrimestre: number,
    curriculum: string | null
  ): Promise<PracticanteExp | null> {
    if (!nombre_practicante) {
      throw new Error("Todos los campos son obligatorios.");
    }
  
    try {
      // Verificar si el registro existe antes de actualizar
      const checkSql = "SELECT * FROM ExperienciaPracticante WHERE id=?";
      const checkParams: any[] = [userId];
      const [checkResult]: any = await query(checkSql, checkParams);
  
      if (checkResult.length === 0) {
        // El registro no existe, devuelve null o maneja el caso según tu lógica
        return null;
      }
  
      // Construir la consulta SQL de actualización
      const updateSql = `
        UPDATE ExperienciaPracticante
        SET
          experiencia_practicante=?,
          comentarios=?,
          nombre_practicante=?,
          cuatrimestre=?,
          curriculum=?
        WHERE id=?
      `;
      const updateParams: any[] = [experiencia_practicante, comentarios, nombre_practicante, cuatrimestre, curriculum, userId];
  
      // Ejecutar la consulta SQL de actualización
      const [updateResult]: any = await query(updateSql, updateParams);
  
      if (updateResult.affectedRows === 0) {
        // Si ninguna fila fue actualizada, puede ser que los valores sean los mismos o haya un problema en la actualización
        return null;
      }
  
      // Devolver el objeto PracticanteExp actualizado
      return new PracticanteExp(
        userId,
        experiencia_practicante,
        comentarios,
        nombre_practicante,
        cuatrimestre,
        curriculum
      );
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      return null;
    }
  }
  



  async createPracticanteExp(
    experiencia_practicante: string,
    comentarios: string,
    nombre_practicante: string,
    cuatrimestre: number,
    curriculum: string | null
  ): Promise<PracticanteExp | null> {
    if (!nombre_practicante) {
      throw new Error("Todos los campos son obligatorios.");
    }
    else {
      if (typeof (curriculum) === undefined) {
        const sql =
          "INSERT INTO ExperienciaPracticante (experiencia_practicante, comentarios, nombre_practicante, cuatrimestre) VALUES (?, ?, ?, ?)";
        const params: any[] = [experiencia_practicante, comentarios, nombre_practicante, cuatrimestre];
        try {
          const [result]: any = await query(sql, params);
          return new PracticanteExp(result.insertId, experiencia_practicante, comentarios, nombre_practicante, cuatrimestre, curriculum);
        } catch (error) {
          return null;
        }
      }
      else {
        const sql =
          "INSERT INTO ExperienciaPracticante (experiencia_practicante, comentarios, nombre_practicante, cuatrimestre, curriculum) VALUES (?, ?, ?, ?, ?)";
        const params: any[] = [experiencia_practicante, comentarios, nombre_practicante, cuatrimestre, curriculum];
        try {
          const [result]: any = await query(sql, params);
          return new PracticanteExp(result.insertId, experiencia_practicante, comentarios, nombre_practicante, cuatrimestre, curriculum);
        } catch (error) {
          return null;
        }
      }
    }

  }
}
