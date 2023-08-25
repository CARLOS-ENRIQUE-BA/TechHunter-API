import { Request, Response } from "express";
import { PutPracticanteCalifUseCase } from "../../application/PutPracticanteCalifUseCase";

export class PutPracticanteCalifController {
    constructor(readonly putPracticanteCalifUseCase: PutPracticanteCalifUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const data = req.body;
        console.log("mensaje  " + data);
        try {
            const practicanteCalif = await this.putPracticanteCalifUseCase.run(
                id,
                data.calificacion,
                data.modalidad,
                data.servicio,
                data.empresa
            );

            if (practicanteCalif)
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicanteCalif?.id,
                        calificacion: practicanteCalif?.calificacion,
                        modalidad: practicanteCalif?.modalidad,
                        servicio: practicanteCalif?.servicio,
                        empresa: practicanteCalif?.empresa
                    },
                });
            else
                res.status(204).send({
                    status: "error",
                    data: "NO fue posible agregar el registro",
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
