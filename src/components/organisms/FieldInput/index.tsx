import { Separator } from "@/components/ui/separator";
import * as React from "react";

export interface IFieldInputProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function FieldInput({
  children,
  title,
  subtitle,
}: IFieldInputProps) {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
}
