import { PracticanteCalif } from "../domain/PracticanteCalif";
import { PracticanteCalifRepository } from "../domain/PracticanteRepository";

export class GetAllPracticanteCalifUseCase {
  constructor(readonly practicanteCalifRepository: PracticanteCalifRepository) {}

  async run(): Promise<PracticanteCalif[] | null> {
    try {
      const result = await this.practicanteCalifRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
