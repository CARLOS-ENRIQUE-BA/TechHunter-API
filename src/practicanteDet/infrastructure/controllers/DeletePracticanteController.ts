import { Request, Response } from "express";
import { DeletePracticanteDetUseCase } from "../../application/DeletePracticanteDetUseCase"; 

export class DeletePracticanteDetController {
    constructor(readonly deletePracticanteDetUseCase: DeletePracticanteDetUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const practicanteDet = await this.deletePracticanteDetUseCase.run(id);

            if (practicanteDet)
                //Code HTTP : 200 -> Consulta exitosa
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicanteDet.id,
                        correo: practicanteDet.correo,
                        preferencias: practicanteDet.preferencias,
                        rol_practicante: practicanteDet.rol_practicante,
                        fecha_final: practicanteDet.fecha_final,
                        nombre_instituto: practicanteDet.nombre_instituto
                    },
                });
            else
                res.status(400).send({
                    status: "error",
                    msn: "Ocurrio algún problema",
                });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }
}
