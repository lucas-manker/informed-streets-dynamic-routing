import express, { Application, NextFunction, Request, Response } from "express";
import dynamicRouter from "./routes/dynamicRouter";

const app: Application = express();

app.use("/", express.static("C:/inetpub/wwwroot/informedstreets/"));
//app.use("/", express.static("E:/websites/InformedStreetsDev/InformedStreets/"));
app.use("/", dynamicRouter);

app.listen(49012, (): void => {
  console.log(`Running at port 49012`);
});
