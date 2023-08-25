import { CreatePracticanteDetUseCase } from "../application/CreatePracticanteDetUseCase";
import { GetAllPracticanteDetUseCase } from "../application/GetAllPracticanteDetUseCase";
import { GetByIdPracticanteDetUseCase } from "../application/GetByIdPracticanteDetUseCase";
import { DeletePracticanteDetUseCase } from "../application/DeletePracticanteDetUseCase";
import { PutPracticanteDetUseCase } from "../application/PutPracticanteDetUseCase";

import { CreatePracticanteDetController } from "./controllers/CreatePracticanteController";
import { GetAllPracticanteDetController } from "./controllers/GetAllPracticanteController";
import { GetByIdPracticanteDetController } from "./controllers/GetByIdPracticanteController";
import { DeletePracticanteDetController } from "./controllers/DeletePracticanteController";
import { PutPracticanteDetController } from "./controllers/PutPracticanteController";

import { MysqlPracticanteDetRepository } from "./MysqlPracticanteDetRepository";

export const mysqlPracticanteDetRepository = new MysqlPracticanteDetRepository();


export const createPracticanteDetUseCase = new CreatePracticanteDetUseCase(
    mysqlPracticanteDetRepository
);
export const getAllUseCase = new GetAllPracticanteDetUseCase(
  mysqlPracticanteDetRepository
  );
export const getByIdPracticanteDetUseCase = new GetByIdPracticanteDetUseCase(
    mysqlPracticanteDetRepository
);
export const deletePracticanteDetUseCase = new DeletePracticanteDetUseCase(
  mysqlPracticanteDetRepository
);
export const putPracticanteDetUseCase = new PutPracticanteDetUseCase(
  mysqlPracticanteDetRepository
);

export const createPracticanteDetController = new CreatePracticanteDetController(
  createPracticanteDetUseCase
);
export const getAllPracticanteDetController = new GetAllPracticanteDetController(
  getAllUseCase
);
export const getByIdPracticanteDetController = new GetByIdPracticanteDetController(
  getByIdPracticanteDetUseCase
);
export const deletePracticanteDetController = new DeletePracticanteDetController(
  deletePracticanteDetUseCase
);
export const putPracticanteDetController = new PutPracticanteDetController(
  putPracticanteDetUseCase
);