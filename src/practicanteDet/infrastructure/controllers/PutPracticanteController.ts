import { Request, Response } from "express";
import { PutPracticanteDetUseCase} from "../../application/PutPracticanteDetUseCase"; 

export class PutPracticanteDetController {
    constructor(readonly putPracticanteDetUseCase: PutPracticanteDetUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const data = req.body;
        console.log("mensaje  " + data);
        try {
            const practicanteDet = await this.putPracticanteDetUseCase.run(
                id,
                data.correo,
                data.preferencias,
                data.rol_practicante,
                data.fecha_final,
                data.nombre_instituto
            );

            if (practicanteDet)
                res.status(200).send({
                    status: "success",
                    data: {
                        id: practicanteDet?.id,
                        correo: practicanteDet?.correo,
                        preferencias: practicanteDet?.preferencias,
                        rol_practicante: practicanteDet?.rol_practicante,
                        fecha_final: practicanteDet?.fecha_final,
                        nombre_instituto: practicanteDet?.nombre_instituto
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
