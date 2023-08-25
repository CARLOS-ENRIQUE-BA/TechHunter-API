import { Request, Response } from "express";
import { PutPracticanteUseCase } from "../../application/PutPracticanteUseCase"; 

export class PutPracticanteController {
    constructor(readonly putPracticanteUseCase: PutPracticanteUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const data = req.body;
        console.log("mensaje  " + data);
        try {
            const practicante = await this.putPracticanteUseCase.run(
                id,
                data.proyecto,
                data.telefono,
                data.status_estancia,
                data.conocimientos,
                data.fecha_inicio
            );

            if (practicante)
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicante?.id,
                        proyecto: practicante?.proyecto,
                        telefono: practicante?.telefono,
                        status_estancia: practicante?.status_estancia,
                        conocimientos: practicante?.conocimientos,
                        fecha_inicio: practicante?.fecha_inicio
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
