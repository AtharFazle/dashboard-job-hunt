import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "../constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

type Props = {};

const JobListingsPage = (props: Props) => {
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item, i) => {
                return <TableHead key={i}>{item}</TableHead>;
              })}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTING_DATA.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{item.roles}</TableCell>
                  <TableCell>
                    <Badge> {item.status}</Badge>
                  </TableCell>
                  <TableCell>{item.datePosted}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant={"outline"}>{item.jobType}</Badge>
                  </TableCell>
                  <TableCell>{item.applicants}</TableCell>
                  <TableCell>
                    {item.applicants} / {item.needs}
                  </TableCell>
                  <TableCell>
                    <Link href={`/job-detail/${item.id}`}>
                      <Button size={"icon"} variant={"outline"}>
                        <MoreVertical />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobListingsPage;
