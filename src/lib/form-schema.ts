import { JOBTYPES } from "@/app/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title Is Required" })
    .min(3, { message: "Job Title must be at least 3 Characters" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a Job Type",
  }),
  salaryFrom: z.string({ required_error: "Salary From Is Required" }),
  salaryTo: z.string({ required_error: "Salary To Is Required" }),
  categoryId: z.string({ required_error: "You need to select a Category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skills must be at least 1 Skills" }),
  jobDescription: z
    .string({ required_error: "Job Description is Required" })
    .min(10, { message: "Job Description must be at least 10 Characters" }),
  responbility: z
    .string({ required_error: "Responbility is Required" })
    .min(10, { message: "Responbility must be at least 10 Characters" }),
  whoYouAre: z
    .string({ required_error: "Who You Are is Required" })
    .min(10, { message: "Who You Are must be at least 10 Characters" }),
  niceToHaves: z
    .string({ required_error: "nice to have is Required" })
    .min(10, { message: "nice to have must be at least 10 Characters" }),
benefits:z.object({
    benefit:z.string(),
    description:z.string()
}).array().nonempty({message:"Benefits must be at least 1 Benefit"}),
});
