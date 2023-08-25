import { Request, Response } from "express";
import { GetAllPracticanteUseCase } from "../../application/GetAllPracticanteUseCase";

export class GetAllPracticanteController {
  constructor(readonly getAllPracticanteUseCase: GetAllPracticanteUseCase) { }

  async run(req: Request, res: Response) {
    try {
      const Register = await this.getAllPracticanteUseCase.run();
      console.log(Register);
      if (Register)
        res.status(200).send({
          status: "success",
          data: Register.map((practicante: any) => {
            return {
              id: practicante.id,
              proyecto: practicante.proyecto,
              telefono: practicante.telefono,
              status_estancia: practicante.status_estancia,
              conocimientos: practicante.conocimientos,
              fecha_inicio: practicante.fecha_inicio
            };
          }),
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
