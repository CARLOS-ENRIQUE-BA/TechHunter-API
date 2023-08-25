import { Request, Response } from "express";
import { CreatePracticanteExpUseCase } from "../../application/CreatePracticanteExpUseCase";

const multer = require ('multer');

const storage = multer.diskStorage({
  destination: function(_req: any,_file: any,cb: (arg0: null, arg1: string) => void){
  cb(null, './carpetaPDF')
},
  filename: function(_req: any,file: { fieldname: string; originalname: string; },cb: (arg0: null, arg1: string) => void){
    cb(null,`${Date.now()}-${file.originalname}`)
  }
})
const uploadphoto = multer({storage : storage})

exports.uploadphoto = uploadphoto.single('curriculum')

export class CreatePracticanteExpController {
  constructor(readonly createPracticanteExpUseCase: CreatePracticanteExpUseCase) { }
  async run(req: Request, res: Response) {
    const data = req.body;
    const filename = req.file?.filename;
    let practicanteExp;
    console.log(filename)
    try {
      if(filename === undefined){
        practicanteExp = await this.createPracticanteExpUseCase.run(
          data.experiencia_practicante,
          data.comentarios,
          data.nombre_practicante,
          data.cuatrimestre,
          null
        );
      }
      else{
        practicanteExp = await this.createPracticanteExpUseCase.run(
          data.experiencia_practicante,
          data.comentarios,
          data.nombre_practicante,
          data.cuatrimestre,
          filename
        );
      }

      if (practicanteExp)
        res.status(201).send({
          status: "success",
          data: {
            id: practicanteExp?.id,
            experiencia_practicante: practicanteExp?.experiencia_practicante,
            comentarios: practicanteExp?.comentarios,
            nombre_practicante: practicanteExp?.nombre_practicante,
            cuatrimestre: practicanteExp?.cuatrimestre,
            curriculum: practicanteExp?.curriculum
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
export{uploadphoto};