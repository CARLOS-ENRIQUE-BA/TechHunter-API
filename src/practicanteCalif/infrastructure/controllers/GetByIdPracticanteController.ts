import { Request, Response } from "express";
import { GetByIdPracticanteCalifUseCase } from "../../application/GetByIdPracticanteDetUseCase";

export class GetByIdPracticanteCalifController {
  constructor(readonly getByIdPracticanteCalifUseCase: GetByIdPracticanteCalifUseCase) { }

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const practicanteCalif = await this.getByIdPracticanteCalifUseCase.run(id);

      if (practicanteCalif)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: practicanteCalif.id,
            calificacion: practicanteCalif?.calificacion,
            modalidad: practicanteCalif?.modalidad,
            servicio: practicanteCalif?.servicio,
            empresa: practicanteCalif?.empresa
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
