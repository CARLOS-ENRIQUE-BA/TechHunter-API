import { CreatePracticanteCalifUseCase } from "../application/CreatePracticanteCalifUseCase";
import { GetAllPracticanteCalifUseCase } from "../application/GetAllPracticanteDetUseCase";
import { GetByIdPracticanteCalifUseCase } from "../application/GetByIdPracticanteDetUseCase";
import { DeletePracticanteCalifUseCase } from "../application/DeletePracticanteCalifUseCase";
import { CreatePracticanteCalifController } from "./controllers/CreatePracticanteController";
import { PutPracticanteCalifUseCase } from "../application/PutPracticanteCalifUseCase";


import { GetAllPracticanteCalifController } from "./controllers/GetAllPracticanteController";
import { GetByIdPracticanteCalifController } from "./controllers/GetByIdPracticanteController";
import { DeletePracticanteCalifController } from "./controllers/DeletePracticanteController";
import { PutPracticanteCalifController } from "./controllers/PutPracticanteController";


import { MysqlPracticanteCalifRepository } from "./MysqlPracticanteDetRepository";

export const mysqlPracticanteCalifRepository = new MysqlPracticanteCalifRepository();


export const createPracticanteCalifUseCase = new CreatePracticanteCalifUseCase(
    mysqlPracticanteCalifRepository
);
export const getAllUseCase = new GetAllPracticanteCalifUseCase(
  mysqlPracticanteCalifRepository
);
export const getByIdPracticanteCalifUseCase = new GetByIdPracticanteCalifUseCase(
  mysqlPracticanteCalifRepository
);
export const deletePracticanteCalifUseCase = new DeletePracticanteCalifUseCase(
  mysqlPracticanteCalifRepository
);
export const putPracticanteCalifUseCase = new PutPracticanteCalifUseCase(
  mysqlPracticanteCalifRepository
);



export const createPracticanteCalifController = new CreatePracticanteCalifController(
  createPracticanteCalifUseCase
);
export const getAllPracticanteCalifController = new GetAllPracticanteCalifController(
  getAllUseCase
);
export const getByIdPracticanteCalifController = new GetByIdPracticanteCalifController(
  getByIdPracticanteCalifUseCase
);
export const deletePracticanteCalifController = new DeletePracticanteCalifController(
  deletePracticanteCalifUseCase
);
export const putPracticanteCalifController = new PutPracticanteCalifController(
  putPracticanteCalifUseCase
);