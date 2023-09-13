import express from "express";
import { home } from "../controllers/home_controller.js";
import questionRouter from "./questions.js";
import optionRouter from "./options.js";

const router = express.Router();


router.get('/',home);
router.use('/questions',questionRouter);
router.use('/options',optionRouter);

export default router;
