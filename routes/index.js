import express from "express";
import { home } from "../controllers/home_controller.js";
import questionRouter from "./questions.js";
import optionRouter from "./options.js";

const router = express.Router();


router.get('/',home);
// question router
router.use('/questions',questionRouter);
//option router
router.use('/options',optionRouter);

export default router;
