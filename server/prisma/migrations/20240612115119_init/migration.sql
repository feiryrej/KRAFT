-- CreateTable
CREATE TABLE `Applicant` (
    `applicant_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `sss_number` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Applicant_email_key`(`email`),
    PRIMARY KEY (`applicant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Application` (
    `application_id` VARCHAR(191) NOT NULL,
    `applicant_id` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `special_study_subject` VARCHAR(191) NULL,
    `special_training` VARCHAR(191) NULL,
    `special_skills` VARCHAR(191) NULL,
    `date_of_application` DATETIME(3) NOT NULL,
    `date_can_start` DATETIME(3) NOT NULL,
    `salary_desired` INTEGER NOT NULL,
    `is_currently_employed` BOOLEAN NOT NULL,
    `can_inquire_current_employer` BOOLEAN NULL,
    `has_applied_before` BOOLEAN NOT NULL,
    `applied_before_where` VARCHAR(191) NULL,
    `applied_before_when` DATETIME(3) NULL,

    PRIMARY KEY (`application_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EducationHistory` (
    `education_history_id` VARCHAR(191) NOT NULL,
    `applicant_id` VARCHAR(191) NOT NULL,
    `education_level` VARCHAR(191) NOT NULL,
    `education_school_name` VARCHAR(191) NOT NULL,
    `education_location` VARCHAR(191) NOT NULL,
    `education_years` VARCHAR(191) NOT NULL,
    `has_graduated` BOOLEAN NOT NULL,
    `education_subjects` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`education_history_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmploymentHistory` (
    `employment_history_id` VARCHAR(191) NOT NULL,
    `applicant_id` VARCHAR(191) NOT NULL,
    `employment_start_date` DATETIME(3) NOT NULL,
    `employment_end_date` DATETIME(3) NULL,
    `employment_company_name` VARCHAR(191) NOT NULL,
    `employment_company_address` VARCHAR(191) NOT NULL,
    `employment_salary` INTEGER NOT NULL,
    `employment_position` VARCHAR(191) NOT NULL,
    `employment_reason_for_leaving` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`employment_history_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reference` (
    `reference_id` VARCHAR(191) NOT NULL,
    `applicant_id` VARCHAR(191) NOT NULL,
    `reference_name` VARCHAR(191) NOT NULL,
    `reference_phone_no` VARCHAR(191) NOT NULL,
    `reference_profession` VARCHAR(191) NOT NULL,
    `reference_years_known` INTEGER NOT NULL,

    PRIMARY KEY (`reference_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_applicant_id_fkey` FOREIGN KEY (`applicant_id`) REFERENCES `Applicant`(`applicant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EducationHistory` ADD CONSTRAINT `EducationHistory_applicant_id_fkey` FOREIGN KEY (`applicant_id`) REFERENCES `Applicant`(`applicant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmploymentHistory` ADD CONSTRAINT `EmploymentHistory_applicant_id_fkey` FOREIGN KEY (`applicant_id`) REFERENCES `Applicant`(`applicant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reference` ADD CONSTRAINT `Reference_applicant_id_fkey` FOREIGN KEY (`applicant_id`) REFERENCES `Applicant`(`applicant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
