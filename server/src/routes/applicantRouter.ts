import { Router, Request, Response } from 'express';
import { validateData } from '../middlewares/validatationMiddleware';
import { Applicant, CreateApplicantModel, UpdateApplicantModel } from '../models';
import { StatusCodes } from 'http-status-codes';

export const applicantRouter = Router()
    .get('/getApplicants', async (req: Request, res: Response) => {
        const applicants: Applicant[] = [];
        res.json({ message: 'Applicants retrieved successfully', applicants: applicants }).status(
            StatusCodes.OK
        );
    })
    .get('/getApplicant/:id', async (req: Request, res: Response) => {
        const applicant: Applicant = {
            address: '',
            applicantId: 0,
            educationHistory: [],
            email: '',
            employmentHistory: [],
            jobApplications: [],
            name: '',
            phoneNumber: '',
            references: [],
            sssNumber: ''
        };
        res.json({ message: 'Applicant retrieved successfully', applicant: applicant }).status(
            StatusCodes.OK
        );
    })
    .post(
        '/createApplicant',
        validateData(CreateApplicantModel),
        async (req: Request, res: Response) => {
            res.json({ message: 'Applicant created successfully', applicant: req.body }).status(
                StatusCodes.CREATED
            );
        }
    )
    .put(
        '/updateApplicant/:id',
        validateData(UpdateApplicantModel),
        async (req: Request, res: Response) => {
            res.json({ message: 'Applicant updated successfully', applicant: req.body }).status(
                StatusCodes.OK
            );
        }
    )
    .delete('/deleteApplicant/:id', async (req: Request, res: Response) => {
        res.json({ message: 'Applicant deleted successfully' }).status(StatusCodes.OK);
    });
