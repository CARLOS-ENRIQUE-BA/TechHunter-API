import { Request, Response } from "express";
import { CreatePracticanteUseCase } from "../../application/CreatePracticanteUseCase";

export class CreatePracticanteController {
  constructor(readonly createPracticanteUseCase: CreatePracticanteUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const practicante = await this.createPracticanteUseCase.run(
        data.proyecto,
        data.telefono,
        data.status_estancia,
        data.conocimientos,
        data.fecha_inicio
      );

      if (practicante)
        res.status(201).send({
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
