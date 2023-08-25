import express from "express";
import { Signale } from "signale";
import cors from "cors";
import { loadRouter } from "./event/LoadRouter";
import { productRouter } from "./product/infrastructure/ProductRouter";
import { practicanteRouter } from "./PracticanteRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(cors())
app.use("/products", productRouter);
app.use("/practicante", practicanteRouter);
app.use("/load", loadRouter);

app.listen(3003, () => {
  signale.success("Server online in port 3003");
});
