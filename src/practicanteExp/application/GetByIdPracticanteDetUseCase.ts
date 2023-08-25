import { PracticanteExp } from "../domain/PracticanteExp";
import { PracticanteExpRepository } from "../domain/PracticanteRepository";

export class GetByIdPracticanteExpUseCase {
  constructor(readonly practicanteExpRepository: PracticanteExpRepository) { }
  async run(id: number): Promise<PracticanteExp | null> {
    try {
      const result = await this.practicanteExpRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}

