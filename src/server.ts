import express, { Application } from "express";
import dynamicRouter from "./routes/dynamicRouter";

const app: Application = express();

app.use("/", dynamicRouter);

app.listen(3000, (): void => {
  console.log(`Running at port 3000`);
});
