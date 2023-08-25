import { PracticanteExp } from "../domain/PracticanteExp";
import { PracticanteExpRepository } from "../domain/PracticanteRepository";

export class DeletePracticanteExpUseCase {
    constructor(readonly practicanteExpRepository: PracticanteExpRepository) { }
    async run(id: number): Promise<PracticanteExp | null> {
        try {
            const result = await this.practicanteExpRepository.delete(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}

