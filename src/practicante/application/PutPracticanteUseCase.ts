import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class PutPracticanteUseCase {
  constructor(readonly practicanteRepository: PracticanteRepository) { }
  async run(
    id: number,
    proyecto: string,
    telefono: string,
    status_estancia: string,
    conocimientos: string,
    fecha_inicio: Date
  ): Promise<Practicante | null> {
    try {
      const practicante = await this.practicanteRepository.put(
        id,
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