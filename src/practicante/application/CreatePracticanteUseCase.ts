import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class CreatePracticanteUseCase {
  constructor(readonly practicanteRepository: PracticanteRepository) { }
  async run(
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
  ): Promise<Practicante | null> {
    try {
      const practicante = await this.practicanteRepository.createPracticante(
        proyecto,
        telefono,
        status_estancia,
        conocimientos,
        fecha_inicio
      );
      return practicante;
    } catch (error) {
      return null;
    }
  }
}
