import { PracticanteCalif } from "../domain/PracticanteCalif";
import { PracticanteCalifRepository } from "../domain/PracticanteRepository";

export class PutPracticanteCalifUseCase {
  constructor(readonly practicanteCalifRepository: PracticanteCalifRepository) { }
  async run(
    id: number,
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
  ): Promise<PracticanteCalif | null> {
    try {
      const practicanteCalif = await this.practicanteCalifRepository.put(
        id,
        calificacion,
        modalidad,
        servicio,
        empresa
      );
      return practicanteCalif;
    } catch (error) {
      return null;
    }
  }
}
