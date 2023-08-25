import { Request, Response } from "express";
import { DeletePracticanteExpUseCase } from "../../application/DeletePracticanteDetUseCase";

export class DeletePracticanteExpController {
    constructor(readonly deletePracticanteExpUseCase: DeletePracticanteExpUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const practicanteExp = await this.deletePracticanteExpUseCase.run(id);
            if (practicanteExp)
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicanteExp.id,
                        experiencia_practicante: practicanteExp.experiencia_practicante,
                        comentarios: practicanteExp.comentarios,
                        nombre_practicante: practicanteExp.nombre_practicante,
                        cuatrimestre: practicanteExp.cuatrimestre,
                        curriculum: practicanteExp.curriculum
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
