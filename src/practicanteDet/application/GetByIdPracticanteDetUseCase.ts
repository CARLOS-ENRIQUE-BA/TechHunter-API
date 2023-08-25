import { PracticanteDet } from "../domain/PracticanteDet";
import { PracticanteDetRepository } from "../domain/PracticanteRepository";

export class GetByIdPracticanteDetUseCase {
  constructor(readonly practicanteDetRepository: PracticanteDetRepository) {}

  async run(id: number): Promise<PracticanteDet | null> {
    try {
      const result = await this.practicanteDetRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
