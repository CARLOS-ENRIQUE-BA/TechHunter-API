import { PracticanteDet } from "./PracticanteDet";

export interface PracticanteDetRepository {
  getAll(): Promise<PracticanteDet[] | null>;
  getById(userId: number): Promise<PracticanteDet | null>;
  delete(userId: number): Promise<PracticanteDet | null>;
  put(userId: number,
    correo: string,
    preferencias: string,
    rol_practicante: string,
    fecha_final: Date,
    nombre_instituto: string
  ): Promise<PracticanteDet | null>;
  createPracticanteDet(
    correo: string,
    preferencias: string,
    rol_practicante: string,
    fecha_final: Date,
    nombre_instituto: string
  ): Promise<PracticanteDet | null>;
}
