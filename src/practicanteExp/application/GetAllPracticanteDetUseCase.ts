import { PracticanteExp } from "../domain/PracticanteExp";
import { PracticanteExpRepository } from "../domain/PracticanteRepository";

export class GetAllPracticanteExpUseCase {
  constructor(readonly practicanteExpRepository: PracticanteExpRepository) {}

  async run(): Promise<PracticanteExp[] | null> {
    try {
      const result = await this.practicanteExpRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}