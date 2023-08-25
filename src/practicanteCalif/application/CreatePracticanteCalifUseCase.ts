import { PracticanteCalif } from "../domain/PracticanteCalif";
import { PracticanteCalifRepository } from "../domain/PracticanteRepository";

export class CreatePracticanteCalifUseCase {
  constructor(readonly practicanteCalifRepository: PracticanteCalifRepository) { }
  async run(
    calificacion: string,
    modalidad: string,
    servicio: string,
    empresa: string
  ): Promise<PracticanteCalif | null> {
    try {
      const practicanteCalif = await this.practicanteCalifRepository.createPracticanteCalif(
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
