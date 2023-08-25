import { Request, Response } from "express";
import { CreatePracticanteCalifUseCase } from "../../application/CreatePracticanteCalifUseCase";

export class CreatePracticanteCalifController {
  constructor(readonly createPracticanteCalifUseCase: CreatePracticanteCalifUseCase) { }
  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const practicanteCalif = await this.createPracticanteCalifUseCase.run(
        data.calificacion,
        data.modalidad,
        data.servicio,
        data.empresa
      );

      if (practicanteCalif)
        res.status(201).send({
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
