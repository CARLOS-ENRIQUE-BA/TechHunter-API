import { PracticanteDet } from "../domain/PracticanteDet";
import { PracticanteDetRepository } from "../domain/PracticanteRepository";

export class DeletePracticanteDetUseCase {
    constructor(readonly practicanteDetRepository: PracticanteDetRepository) { }

    async run(id: number): Promise<PracticanteDet | null> {
        try {
            const result = await this.practicanteDetRepository.delete(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}