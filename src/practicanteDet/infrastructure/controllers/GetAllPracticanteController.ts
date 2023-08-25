import { Request, Response } from "express";
import { GetAllPracticanteDetUseCase } from "../../application/GetAllPracticanteDetUseCase";

export class GetAllPracticanteDetController {
  constructor(readonly getAllPracticanteDetUseCase: GetAllPracticanteDetUseCase) { }

  async run(req: Request, res: Response) {
    try {
      const Register = await this.getAllPracticanteDetUseCase.run();
      console.log(Register);
      if (Register)
        res.status(200).send({
          status: "success",
          data: Register.map((practicanteDet: any) => {
            return {
              id: practicanteDet.id,
              correo: practicanteDet.correo,
              preferencias: practicanteDet.preferencias,
              rol_practicante: practicanteDet.rol_practicante,
              fecha_final: practicanteDet.fecha_final,
              nombre_instituto: practicanteDet.nombre_instituto
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
