import { Router } from "express";
import { IndexController } from "../controllers";

export const indexRouter = Router()
    .get('/', async (req, res) => {
        try {
            res.status(200).json(await IndexController.index())
        } catch (error) {
            res.status(500).json({ message: error })
        }
    })