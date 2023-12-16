import React from 'react'
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
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from '@/app/constants';

const Applicants = () => {
  return (
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        {JOB_APPLICANT_COLUMNS.map((item, i) => {
          return <TableHead key={i}>{item}</TableHead>;
        })}
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {JOB_APPLICANT_DATA.map((item, i) => {
        return (
          <TableRow key={i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
  )
}

export default Applicants