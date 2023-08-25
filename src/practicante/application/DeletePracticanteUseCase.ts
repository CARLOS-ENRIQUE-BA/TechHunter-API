import { Practicante } from "../domain/Practicante";
import { PracticanteRepository } from "../domain/PracticanteRepository";

export class DeletePracticanteUseCase {
    constructor(readonly practicanteRepository: PracticanteRepository) { }

    async run(id: number): Promise<Practicante | null> {
        try {
            const result = await this.practicanteRepository.delete(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}