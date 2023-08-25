import express from "express";
import { createPracticanteController } from "./practicante/infrastructure/dependenciesPrac";
import { getAllPracticanteController } from "./practicante/infrastructure/dependenciesPrac";
import { getByIdPracticanteController } from "./practicante/infrastructure/dependenciesPrac";
import { deletePracticanteController } from "./practicante/infrastructure/dependenciesPrac";
import { putPracticanteController } from "./practicante/infrastructure/dependenciesPrac";

import { createPracticanteDetController } from "./practicanteDet/infrastructure/dependenciesPractDet";
import { getAllPracticanteDetController } from "./practicanteDet/infrastructure/dependenciesPractDet";
import { getByIdPdfPracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";
import { getByIdPracticanteDetController } from "./practicanteDet/infrastructure/dependenciesPractDet";
import { deletePracticanteDetController } from "./practicanteDet/infrastructure/dependenciesPractDet";
import { putPracticanteDetController } from "./practicanteDet/infrastructure/dependenciesPractDet";

import { createPracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";
import { getAllPracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";
import { getByIdPracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";
import { deletePracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";
import { putPracticanteExpController } from "./practicanteExp/infrastructure/dependenciasPractExp";

import { createPracticanteCalifController } from "./practicanteCalif/infrastructure/dependenciesPractDet";
import { getAllPracticanteCalifController } from "./practicanteCalif/infrastructure/dependenciesPractDet";
import { getByIdPracticanteCalifController } from "./practicanteCalif/infrastructure/dependenciesPractDet";
import { deletePracticanteCalifController } from "./practicanteCalif/infrastructure/dependenciesPractDet";
import { putPracticanteCalifController } from "./practicanteCalif/infrastructure/dependenciesPractDet"; 


import { uploadphoto } from "./practicanteExp/infrastructure/controllers/CreatePracticanteController";

export const practicanteRouter = express.Router();

practicanteRouter.get(
  "/table1/",
  getAllPracticanteController.run.bind(getAllPracticanteController)
);
practicanteRouter.get(
  "/table1/:id",
  getByIdPracticanteController.run.bind(getByIdPracticanteController)
);
practicanteRouter.delete(
  "/table1/:id",
  deletePracticanteController.run.bind(deletePracticanteController)
);
practicanteRouter.post(
  "/table1",
  createPracticanteController.run.bind(createPracticanteController)
);
practicanteRouter.put(
  "/table1/:id",
  putPracticanteController.run.bind(putPracticanteController)
);

export const practicanteDetRouter = express.Router();

practicanteRouter.get(
  "/table2/",
  getAllPracticanteDetController.run.bind(getAllPracticanteDetController)
);
practicanteRouter.get(
  "/table2/:id",
  getByIdPracticanteDetController.run.bind(getByIdPracticanteDetController)
);
practicanteRouter.delete(
  "/table2/:id",
  deletePracticanteDetController.run.bind(deletePracticanteDetController)
);
practicanteRouter.post(
  "/table2",
  createPracticanteDetController.run.bind(createPracticanteDetController)
);
practicanteRouter.put(
  "/table2/:id",
  putPracticanteDetController.run.bind(putPracticanteDetController)
);

export const practicanteExpRouter = express.Router();

practicanteRouter.get(
  "/table3/",
  getAllPracticanteExpController.run.bind(getAllPracticanteExpController)
);

practicanteRouter.get(
  "/getpdf/:id",
  getByIdPdfPracticanteExpController.run.bind(getByIdPdfPracticanteExpController)
);
practicanteRouter.get(
  "/table3/:id",
  getByIdPracticanteExpController.run.bind(getByIdPracticanteExpController)
);
practicanteRouter.delete(
  "/table3/:id",
  deletePracticanteExpController.run.bind(deletePracticanteExpController)
);
practicanteRouter.post(
  "/table3",
  uploadphoto,
  createPracticanteExpController.run.bind(createPracticanteExpController)
);
practicanteRouter.put(
  "/table3/:id",
  uploadphoto,
  putPracticanteExpController.run.bind(putPracticanteExpController)
);

practicanteRouter.get(
  "/table4/",
  getAllPracticanteCalifController.run.bind(getAllPracticanteCalifController)
);
practicanteRouter.get(
  "/table4/:id",
  getByIdPracticanteCalifController.run.bind(getByIdPracticanteCalifController)
);
practicanteRouter.delete(
  "/table4/:id",
  deletePracticanteCalifController.run.bind(deletePracticanteCalifController)
);
practicanteRouter.post(
  "/table4/",
  createPracticanteCalifController.run.bind(createPracticanteCalifController)
);
practicanteRouter.put(
  "/table4/:id",
  putPracticanteCalifController.run.bind(putPracticanteCalifController)
);