import { Router, Request, Response } from 'express';
import { validateData } from '../middlewares/validatationMiddleware';
import { referenceSchema } from '../models';
import { StatusCodes } from 'http-status-codes';

export const referenceRouter: Router = Router()
    .get(
        '/getReferences/:id',
        async (req: Request, res: Response): Promise<void> => {
            const references: referenceSchema.Reference[] = [];
            res.json({
                message: 'References retrieved successfully',
                references: references
            }).status(StatusCodes.OK);
        }
    )
    .post(
        '/addReference',
        validateData(referenceSchema.AddReference),
        async (req: Request, res: Response): Promise<void> => {
            res.json({
                message: 'Reference added successfully',
                reference: req.body
            }).status(StatusCodes.CREATED);
        }
    )
    .put(
        '/updateReference/:id',
        validateData(referenceSchema.UpdateReference),
        async (req: Request, res: Response): Promise<void> => {
            res.json({
                message: 'Reference updated successfully',
                reference: req.body
            }).status(StatusCodes.OK);
        }
    )
    .delete(
        '/deleteReference/:id',
        async (req: Request, res: Response): Promise<void> => {
            res.json({
                message: 'Reference deleted successfully',
                referenceId: req.params.id
            }).status(StatusCodes.OK);
        }
    );
