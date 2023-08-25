import { CreatePracticanteUseCase } from "../application/CreatePracticanteUseCase";
import { GetAllPracticanteUseCase } from "../application/GetAllPracticanteUseCase";
import { GetByIdPracticanteUseCase } from "../application/GetByIdPracticanteUseCase";
import { DeletePracticanteUseCase } from "../application/DeletePracticanteUseCase";
import { PutPracticanteUseCase } from "../application/PutPracticanteUseCase";

import { CreatePracticanteController } from "./controllers/CreatePracticanteController";
import { GetAllPracticanteController } from "./controllers/GetAllPracticanteController";
import { GetByIdPracticanteController } from "./controllers/GetByIdPracticanteController";
import { DeletePracticanteController } from "./controllers/DeletePracticanteController";
import { PutPracticanteController } from "./controllers/PutPracticanteController";

import { MysqlPracticanteRepository } from "./MysqlPracticanteRepository";

export const mysqlPracticanteRepository = new MysqlPracticanteRepository();


export const createPracticanteUseCase = new CreatePracticanteUseCase(
  mysqlPracticanteRepository
);
export const getAllUseCase = new GetAllPracticanteUseCase(
  mysqlPracticanteRepository
  );
export const getByIdPracticanteUseCase = new GetByIdPracticanteUseCase(
  mysqlPracticanteRepository
);
export const deletePracticanteUseCase = new DeletePracticanteUseCase(
  mysqlPracticanteRepository
);
export const putPracticanteUseCase = new PutPracticanteUseCase(
  mysqlPracticanteRepository
);


export const createPracticanteController = new CreatePracticanteController(
  createPracticanteUseCase
);
export const getAllPracticanteController = new GetAllPracticanteController(
  getAllUseCase
);
export const getByIdPracticanteController = new GetByIdPracticanteController(
  getByIdPracticanteUseCase
);
export const deletePracticanteController = new DeletePracticanteController(
  deletePracticanteUseCase
);
export const putPracticanteController = new PutPracticanteController(
  putPracticanteUseCase
);
