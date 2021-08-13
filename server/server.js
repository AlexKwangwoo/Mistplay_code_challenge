import express from "express";
import searchRouter from "./router/search.js";
import updateRouter from "./router/update.js";
import cors from "cors";

const app = express();

const corsOption = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));
app.use("/search", searchRouter);
app.use("/update", updateRouter);
app.listen(8080);
