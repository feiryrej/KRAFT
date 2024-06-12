import { Router, Request, Response } from 'express';
import { validateData } from '../middlewares/validatationMiddleware';
import { CreateApplicantModel } from '../models';
import { StatusCodes } from 'http-status-codes';

export const applicantRouter = Router().post(
    '/createApplicant',
    validateData(CreateApplicantModel),
    async (req: Request, res: Response) => {
        res.json({ message: 'Applicant created successfully', applicant: req.body }).status(
            StatusCodes.CREATED
        );
    }
);
