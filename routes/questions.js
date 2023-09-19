import express from "express";
import {createQuestion,createOptions,deleteQuestion,viewQuestion} from "../controllers/questions_controller.js";

const questionRouter = express.Router();

// to create question
questionRouter.post('/create',createQuestion);
// to create options
questionRouter.post('/:id/options/create',createOptions);
//to delete options
questionRouter.delete('/:id/delete',deleteQuestion);
// to view all questions
questionRouter.get('/:id',viewQuestion);

export default questionRouter;
