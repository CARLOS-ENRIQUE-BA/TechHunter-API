import { PracticanteDet } from "../domain/PracticanteDet";
import { PracticanteDetRepository } from "../domain/PracticanteRepository";

export class GetAllPracticanteDetUseCase {
  constructor(readonly practicanteDetRepository: PracticanteDetRepository) {}

  async run(): Promise<PracticanteDet[] | null> {
    try {
      const result = await this.practicanteDetRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
