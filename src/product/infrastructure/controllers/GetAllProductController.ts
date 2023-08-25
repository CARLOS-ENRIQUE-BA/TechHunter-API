import { Request, Response } from "express";
import { GetAllProductUseCase } from "../../application/GetAllProductUseCase";

export class GetAllProductController {
  constructor(readonly getAllProductUseCase: GetAllProductUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const Register = await this.getAllProductUseCase.run();
      console.log(Register);
      if (Register)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: Register.map((product: any) => {
            return {
              id: product.id,
              nombre: product.nombre,
              apellido: product.apellido,
              usuario: product.usuario,
              contraseña: product.contraseña
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
