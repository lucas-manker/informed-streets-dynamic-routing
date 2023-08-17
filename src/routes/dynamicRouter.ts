import express, { Request, Response } from "express";
import getClientInfo from "../lib/api/getClientInfo";

const dynamicRouter = express.Router();

/**
 * auto sets the client's portal and the first project
 */
dynamicRouter.get("/:client", async (req: Request, res: Response) => {
  const clientData = await getClientInfo(req.params.client);
  if (!clientData) {
    res.sendStatus(404);
  } else {
    try {
      /**
       * this is mainly for the testing environment in nested dirs
       */
      req.originalUrl.charAt(req.originalUrl.length - 1) === "/"
        ? res.redirect(`../login/?client=${clientData.data.orgUrl}`)
        : res.redirect(`./login/?client=${clientData.data.orgUrl}`);
    } catch {
      res.sendStatus(404);
    }
  }
});

/**
 * auto sets the client's portal and index of the project
 */
dynamicRouter.get("/:client/:project", async (req: Request, res: Response) => {
  const clientData = await getClientInfo(req.params.client);
  try {
    res.redirect(
      `../login/?client=${clientData.data.orgUrl}&projectIndex=${req.params.project}`
    );
  } catch {
    res.sendStatus(404);
  }
});

export default dynamicRouter;
