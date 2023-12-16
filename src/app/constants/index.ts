import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_APPLICANT_COLUMNS:string[] = ['Name','Applied Date'];

export const JOB_APPLICANT_DATA = [
  {
    name:"Athar Fazle Mawla",
    appliedDate:"10/10/2022"
  }
]

export const JOB_LISTING_DATA = [
  {
    id:1,
    roles: "Software Engineer",
    status: "Live",
    datePosted: "10/10/2022",
    dueDate: "10/10/2022",
    jobType:"Full-Time",
    applicants: 10,
    needs: 100,
  },
];
