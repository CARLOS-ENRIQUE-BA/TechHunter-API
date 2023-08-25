import { PracticanteExp } from "./PracticanteExp";

export interface PracticanteExpRepository {
  getAll(): Promise<PracticanteExp[] | null>;
  getById(userId: number): Promise<PracticanteExp | null>;
  delete(userId: number): Promise<PracticanteExp | null>;
  put(userId: number,
    experiencia_practicante: string,
    comentarios: string,
    nombre_practicante: string,
    cuatrimestre: number,
    curriculum: string | null
    ): Promise<PracticanteExp | null>;
  createPracticanteExp(
    experiencia_practicante: string,
    comentarios: string,
    nombre_practicante: string,
    cuatrimestre: number,
    curriculum: string | null
  ): Promise<PracticanteExp | null>;
}
