import express, { Application } from "express";
import dynamicRouter from "./routes/dynamicRouter";
import path from "path";

const app: Application = express();

app.use("/", express.static(path.join(__dirname, "../testing")));
app.use("/", dynamicRouter);

app.listen(49012, (): void => {
  console.log(`Running at port 49012`);
});
