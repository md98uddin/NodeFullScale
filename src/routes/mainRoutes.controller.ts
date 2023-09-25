import { Router } from "express";
import { Request, Response } from "express";
import verifyToken from "../middlewares/auth";

const router = Router();
//test route

router.route("/home").get(verifyToken, (req: Request, res: Response) => {
  console.log(req.query);
  res
    .send({ name: "Md", age: 25, requestType: "main-get-user-info" })
    .status(200);
});

export default router;
