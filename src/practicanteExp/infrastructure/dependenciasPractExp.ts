import { CreatePracticanteExpUseCase } from "../application/CreatePracticanteExpUseCase";
import { GetAllPracticanteExpUseCase } from "../application/GetAllPracticanteDetUseCase";
import { GetByIdPracticanteExpUseCase } from "../application/GetByIdPracticanteDetUseCase";
import { GetByIdPdfPracticanteExpUseCase } from "../application/GetByIdPdfPracticanteDetUseCase";
import { DeletePracticanteExpUseCase } from "../application/DeletePracticanteDetUseCase";
import { PutPracticanteExpUseCase } from "../application/PutPracticanteExpUseCase";

import { CreatePracticanteExpController } from "./controllers/CreatePracticanteController";
import { GetAllPracticanteExpController } from "./controllers/GetAllPracticanteController";
import { GetByIdPracticanteExpController } from "./controllers/GetByIdPracticanteController";
import { GetByIdPdfPracticanteExpController } from "./controllers/GetByIdPdfPracticanteController";
import { DeletePracticanteExpController } from "./controllers/DeletePracticanteController";
import { PutPracticanteExpController } from "./controllers/PutPracticanteController";

import { MysqlPracticanteExpRepository } from "./MysqlPracticanteRepository";

export const mysqlPracticanteExpRepository = new MysqlPracticanteExpRepository();


export const createPracticanteExpUseCase = new CreatePracticanteExpUseCase(
  mysqlPracticanteExpRepository
);
export const getAllUseCase = new GetAllPracticanteExpUseCase(
  mysqlPracticanteExpRepository
  );
export const getByIdPracticanteExpUseCase = new GetByIdPracticanteExpUseCase(
  mysqlPracticanteExpRepository
);
export const deletePracticanteExpUseCase = new DeletePracticanteExpUseCase(
  mysqlPracticanteExpRepository
);
export const getByIdPdfPracticanteExpUseCase = new GetByIdPdfPracticanteExpUseCase(
  mysqlPracticanteExpRepository
);
export const putPracticanteExpUseCase = new PutPracticanteExpUseCase(
  mysqlPracticanteExpRepository
);


export const createPracticanteExpController = new CreatePracticanteExpController(
  createPracticanteExpUseCase
);
export const getAllPracticanteExpController = new GetAllPracticanteExpController(
  getAllUseCase
);
export const getByIdPracticanteExpController = new GetByIdPracticanteExpController(
  getByIdPracticanteExpUseCase
);
export const deletePracticanteExpController = new DeletePracticanteExpController(
  deletePracticanteExpUseCase
);
export const getByIdPdfPracticanteExpController = new GetByIdPdfPracticanteExpController(
  getByIdPdfPracticanteExpUseCase
);
export const putPracticanteExpController = new PutPracticanteExpController(
  putPracticanteExpUseCase
);