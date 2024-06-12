import { Router, Request, Response } from 'express';
import { validateData } from '../middlewares/validatationMiddleware';
import { applicantSchema } from '../models';
import { StatusCodes } from 'http-status-codes';

const asi: applicantSchema.Applicant = {
    address: 'Manila City',
    applicantId: 1,
    educationHistory: [],
    email: 'isaeusguiang@gmail.com',
    employmentHistory: [],
    jobApplications: [],
    name: 'Isaeus B. Guiang',
    phoneNumber: 'not available',
    references: [],
    sssNumber: 'not available'
};

export const applicantRouter: Router = Router()
    .get(
        '/getApplicants',
        async (req: Request, res: Response): Promise<void> => {
            const applicants: applicantSchema.Applicant[] = [];
            res.json({
                message: 'Applicants retrieved successfully',
                applicants: applicants
            }).status(StatusCodes.OK);
        }
    )
    .get(
        '/getApplicant/:id',
        async (req: Request, res: Response): Promise<void> => {
            const applicant: applicantSchema.Applicant = asi;
            res.json({
                message: 'Applicant retrieved successfully',
                applicant: applicant
            }).status(StatusCodes.OK);
        }
    )
    .post(
        '/createApplicant',
        validateData(applicantSchema.CreateApplicant),
        async (req: Request, res: Response): Promise<void> => {
            res.json({
                message: 'Applicant created successfully',
                applicant: req.body
            }).status(StatusCodes.CREATED);
        }
    )
    .put(
        '/updateApplicant/:id',
        validateData(applicantSchema.UpdateApplicant),
        async (req: Request, res: Response): Promise<void> => {
            res.json({
                message: 'Applicant updated successfully',
                applicant: req.body
            }).status(StatusCodes.OK);
        }
    )
    .delete(
        '/deleteApplicant/:id',
        async (req: Request, res: Response): Promise<void> => {
            res.json({ message: 'Applicant deleted successfully' }).status(
                StatusCodes.OK
            );
        }
    );
