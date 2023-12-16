"use client";
import { jobFormSchema } from "@/lib/form-schema";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FieldInput from "@/components/organisms/FieldInput";
import { Input } from "@/components/ui/input";
import { JOBTYPES } from "../constants";
import InputSkills from "@/components/organisms/inputSkills";
import CKEditor from "@/components/organisms/CKEditor";
import InputBenefits from "@/components/organisms/inputBenefits";
import { Button } from "@/components/ui/button";

export interface IPostJobPageProps {}

export default function PostJobPage(props: IPostJobPageProps) {
  const [editorLoaded, setEditorLoaded] = React.useState(false);
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  React.useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const onSubmit = (values: z.infer<typeof jobFormSchema>) => {};
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          list out your top perks and benefits
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job Titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.e. Frontend Developer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At Least 80 Characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary for the role. *you can leave this blank"
          >
            <div className="w-[450px] flex flex-row justify-between gap-2 items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="$100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Categories"
            subtitle="Please specify the categories for the role. *you can leave this blank"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Job Categories</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Required Skills"
            subtitle="Add Required skils for the job"
          >
            <InputSkills
              name="requiredSkills"
              label="Required Skills"
              form={form}
            />
          </FieldInput>
          <FieldInput
            title="Job Descriptions"
            subtitle="Job Titles must be describe one position"
          >
            <CKEditor
              form={form}
              name={"jobDescription"}
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Responbilities"
            subtitle="Outline the responbilities of the job"
          >
            <CKEditor
              form={form}
              name={"responbility"}
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Who You Are"
            subtitle="Outline the core responbilities of the position"
          >
            <CKEditor
              form={form}
              name={"whoYouAre"}
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have-skills and qualificatons for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name={"niceToHaves"}
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput title="Perks & Benefits" subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees">
            <InputBenefits  form={form} />
          </FieldInput>
          <div className="flex justify-end">
            <Button type="submit" size={"lg"}> Do a Review</Button>
            </div>  
        </form>
      </Form>
    </div>
  );
}
