import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";

export class CreateProductController {
  constructor(readonly createProductUseCase: CreateProductUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje  " + data);
    try {
      const product = await this.createProductUseCase.run(
        data.nombre,
        data.apellido,
        data.usuario,
        data.contraseña
      );

      if (product)
        res.status(201).send({
          status: "success",
          data: {
            id: product?.id,
            nombre: product?.nombre,
            apellido: product?.apellido,
            usuario: product?.usuario,
            contraseña: product?.contraseña
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
