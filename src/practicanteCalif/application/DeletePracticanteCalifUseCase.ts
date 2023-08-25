import { PracticanteCalif } from "../domain/PracticanteCalif";
import { PracticanteCalifRepository } from "../domain/PracticanteRepository";

export class DeletePracticanteCalifUseCase {
    constructor(readonly practicanteCalifRepository: PracticanteCalifRepository) { }
    async run(id: number): Promise<PracticanteCalif | null> {
        try {
            const result = await this.practicanteCalifRepository.delete(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}
