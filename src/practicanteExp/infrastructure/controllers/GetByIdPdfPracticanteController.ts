import { Request, Response } from "express";
import { GetByIdPracticanteExpUseCase } from "../../application/GetByIdPracticanteDetUseCase";
import path from "path";
import fs from 'fs-extra';

export class GetByIdPdfPracticanteExpController {
    constructor(readonly getByIdPracticanteExpUseCase: GetByIdPracticanteExpUseCase) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const practicanteExp = await this.getByIdPracticanteExpUseCase.run(id);
            if (practicanteExp) {
                const pathImage = path.resolve(__dirname, `../../../../carpetaPDF/${practicanteExp.curriculum}`);
                if (await fs.existsSync(pathImage)) {
                    console.log("si existe!")
                    res.sendFile(pathImage);
                }
                else (
                    res.send({ data: "ERROR DE DATOS" })
                )
            }
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