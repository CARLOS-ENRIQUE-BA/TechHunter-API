import { Practicante } from "./Practicante";

export interface PracticanteRepository {
  getAll(): Promise<Practicante[] | null>;
  getById(userId: number): Promise<Practicante | null>;
  delete(userId: number): Promise<Practicante | null>;
  put(userId: number,
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
    ): Promise<Practicante | null>;
  createPracticante(
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
  ): Promise<Practicante | null>;
}
