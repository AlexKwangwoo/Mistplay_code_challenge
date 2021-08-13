import express from "express";
import "express-async-errors";
import * as fileControllor from "../controller/file_controller.js";

const router = express.Router();

router.get("/", fileControllor.getFile);

export default router;
