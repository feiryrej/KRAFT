import { z } from 'zod'
import {JobApplicationModel} from "./JobApplicationModel";
import {EducationHistoryModel} from "./EducationHistoryModel";
import {ReferenceModel} from "./ReferenceModel";
import {EmploymentHistoryModel} from "./EmploymentHistoryModel";

export const ApplicantModel = z.object({
    applicantId: z.number().positive(),
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(),
    sssNumber: z.string(),
    references: z.array(ReferenceModel),
    employmentHistory: z.array(EmploymentHistoryModel),
    educationHistory: z.array(EducationHistoryModel),
    jobApplications: z.array(JobApplicationModel),
})

export const CreateApplicantModel = ApplicantModel.omit({ applicantId: true, jobApplications: true })
export const UpdateApplicantModel = ApplicantModel.omit({ jobApplications: true , employmentHistory: true, references: true, educationHistory: true, applicantId: true})

export type Applicant = z.infer<typeof ApplicantModel>