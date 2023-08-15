import express, { Request, Response } from "express";
import getClientInfo from "../lib/api/getClientInfo";

const dynamicRouter = express.Router();

dynamicRouter.get("/:client", async (req: Request, res: Response) => {
  const clientData = await getClientInfo(req.params.client);
  if (!clientData) {
    res.sendStatus(404);
  } else {
    res.redirect(
      `https://portal.horrocks.com/sites/informedStreetsDev/informedstreets/login/?client=${clientData.data.orgUrl}`
    );
  }
});

dynamicRouter.get("/client/:project", (req: Request, res: Response) => {
  res.redirect(`/?client=${req.params.project}`);
});

export default dynamicRouter;
