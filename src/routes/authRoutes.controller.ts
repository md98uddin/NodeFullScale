import { Router } from "express";
import { Request, Response } from "express";
import { User, Error, AuthSuccess } from "../utils/interfaces";
import jwt from "jsonwebtoken";

const router = Router();
//test route

// const user: User = {
//   username: "admin",
//   password: "root123",
// };

router.route("/register").post((req: Request, res: Response) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    const error: Error = {
      errorCategory: "EMPTY_FIELDS",
      errorMessage: "Username and password can not be blank",
    };
    return res.send(error).status(400);
  }

  const token = jwt.sign({ username }, "quick-brown-fox", { expiresIn: "1m" });

  const registerSuccess: AuthSuccess = {
    user: { username, password },
    requestType: "auth-register",
    status: "SUCCESS",
    message: "User was successfully created",
    token,
  };

  return res.send(registerSuccess).status(200);
});

router.route("/login").get((req: Request, res: Response) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    const error: Error = {
      errorCategory: "EMPTY_FIELDS",
      errorMessage: "Username and password can not be blank",
    };
    return res.send(error).status(400);
  }

  const token = jwt.sign({ username }, "quick-brown-fox", { expiresIn: "1m" });

  const loginSuccess: AuthSuccess = {
    user: { username, password },
    requestType: "auth-login",
    status: "SUCCESS",
    message: "User succesfully logged in",
    token,
  };

  return res.send(loginSuccess).status(200);
});

export default router;
