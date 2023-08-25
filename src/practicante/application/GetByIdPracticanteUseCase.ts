import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class GetByIdPracticanteUseCase {
  constructor(readonly practicanteRepository: PracticanteRepository) {}

  async run(id: number): Promise<Practicante | null> {
    try {
      const result = await this.practicanteRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
