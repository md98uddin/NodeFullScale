import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./src/routes/mainRoutes.controller";
import authRoutes from "./src/routes/authRoutes.controller";

const app = express();
const port = 3000 || process.env.port;
app.use(express());
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(mainRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log("server started on port " + port);
});
