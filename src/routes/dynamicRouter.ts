import express, { Request, Response } from "express";

const dynamicRouter = express.Router();

dynamicRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "why hello!" });
});

export default dynamicRouter;
