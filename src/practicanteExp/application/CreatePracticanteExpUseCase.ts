import { PracticanteExp } from "../domain/PracticanteExp";
import { PracticanteExpRepository } from "../domain/PracticanteRepository";

export class CreatePracticanteExpUseCase {
  constructor(readonly practicanteExpRepository: PracticanteExpRepository) { }
  async run(
    experiencia_practicante: string,
    comentarios: string,
    nombre_practicante: string,
    cuatrimestre: number,
    curriculum: string | null
  ): Promise<PracticanteExp | null> {
    try {
      const practicanteExp = await this.practicanteExpRepository.createPracticanteExp(
        experiencia_practicante,
        comentarios,
        nombre_practicante,
        cuatrimestre,
        curriculum
      );
      return practicanteExp;
    } catch (error) {
      return null;
    }
  }
}
