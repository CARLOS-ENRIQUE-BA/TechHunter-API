import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class GetAllPracticanteUseCase {
  constructor(readonly practicanteRepository: PracticanteRepository) {}

  async run(): Promise<Practicante[] | null> {
    try {
      const result = await this.practicanteRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
