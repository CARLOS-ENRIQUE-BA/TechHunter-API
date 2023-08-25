import { PracticanteDet } from "../domain/PracticanteDet";
import { PracticanteDetRepository } from "../domain/PracticanteRepository";

export class PutPracticanteDetUseCase {
    constructor(readonly practicanteDetRepository: PracticanteDetRepository) { }
    async run(
        id: number,
        correo: string,
        preferencias: string,
        rol_practicante: string,
        fecha_final: Date,
        nombre_instituto: string
    ): Promise<PracticanteDet | null> {
        try {
            const practicanteDet = await this.practicanteDetRepository.put(
                id,
                correo,
                preferencias,
                rol_practicante,
                fecha_final,
                nombre_instituto
            );
            return practicanteDet;
        } catch (error) {
            return null;
        }
    }
}