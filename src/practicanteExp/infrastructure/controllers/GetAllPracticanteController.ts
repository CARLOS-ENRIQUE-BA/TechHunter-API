import { Request, Response } from "express";
import { GetAllPracticanteExpUseCase } from "../../application/GetAllPracticanteDetUseCase";

export class GetAllPracticanteExpController {
  constructor(readonly getAllPracticanteExpUseCase: GetAllPracticanteExpUseCase) { }

  async run(req: Request, res: Response) {
    try {
      const Register = await this.getAllPracticanteExpUseCase.run();
      console.log(Register);
      if (Register)
        res.status(200).send({
          status: "success",
          data: Register.map((practicanteExp: any) => {
            return {
              id: practicanteExp.id,
              experiencia_practicante: practicanteExp.experiencia_practicante,
              comentarios: practicanteExp.comentarios,
              nombre_practicante: practicanteExp.nombre_practicante,
              cuatrimestre: practicanteExp.cuatrimestre,
              curriculum: practicanteExp.curriculum
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
