import { Request, Response } from "express";
import { DeletePracticanteUseCase } from "../../application/DeletePracticanteUseCase"; 

export class DeletePracticanteController {
    constructor(readonly deletePracticanteUseCase: DeletePracticanteUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const practicante = await this.deletePracticanteUseCase.run(id);

            if (practicante)
                //Code HTTP : 200 -> Consulta exitosa
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicante.id,
                        proyecto: practicante.proyecto,
                        telefono: practicante.telefono,
                        status_estancia: practicante.status_estancia,
                        conocimientos: practicante.conocimientos,
                        fecha_inicio: practicante.fecha_inicio
                    },
                });
            else
                res.status(400).send({
                    status: "error",
                    msn: "Ocurrio algún problema",
                });
        } catch (error) {
            //Code HTTP : 204 Sin contenido
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }
}
