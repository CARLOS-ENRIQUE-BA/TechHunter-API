import { Request, Response } from "express";
import { GetByIdProductUseCase } from "../../application/GetByIdProductUseCase";

export class GetByIdProductController {
  constructor(readonly getByIdProductUseCase: GetByIdProductUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const product = await this.getByIdProductUseCase.run(id);

      if (product)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            nombre: product.nombre,
            apellido: product.apellido,
            usuario: product.usuario,
            contraseña: product.contraseña
          },
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
