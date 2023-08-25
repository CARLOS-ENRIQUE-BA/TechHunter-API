import { PracticanteCalif } from "./PracticanteCalif" ;

export interface PracticanteCalifRepository {
  getAll(): Promise<PracticanteCalif[] | null>;
  getById(userId: number): Promise<PracticanteCalif | null>;
  delete(userId: number): Promise<PracticanteCalif | null>;
  put(userId: number,
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
    ): Promise<PracticanteCalif | null>;
  createPracticanteCalif(
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
  ): Promise<PracticanteCalif | null>;
}
