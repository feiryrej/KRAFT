import { Router, Request, Response } from "express";
import { IndexController } from "../controllers";
import {StatusCodes} from "http-status-codes";

export const indexRouter = Router()
    .get('/', async (req: Request, res: Response) => {
        try {
            res.status(StatusCodes.OK).json(await IndexController.index())
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error })
        }
    })