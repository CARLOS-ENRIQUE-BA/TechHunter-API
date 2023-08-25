import { Request, Response } from "express";
import { GetAllPracticanteCalifUseCase } from "../../application/GetAllPracticanteDetUseCase";

export class GetAllPracticanteCalifController {
  constructor(readonly getAllPracticanteCalifUseCase: GetAllPracticanteCalifUseCase) { }

  async run(req: Request, res: Response) {
    try {
      const Register = await this.getAllPracticanteCalifUseCase.run();
      console.log(Register);
      if (Register)
        res.status(200).send({
          status: "success",
          data: Register.map((practicanteCalif: any) => {
            return {
              id: practicanteCalif.id,
              calificacion: practicanteCalif?.calificacion,
              modalidad: practicanteCalif?.modalidad,
              servicio: practicanteCalif?.servicio,
              empresa: practicanteCalif?.empresa
            };
          }),
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
