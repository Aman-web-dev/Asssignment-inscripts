import React, { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import dummyData from "../assets/DummyData.json";

type JobRequest = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: number;
};

function Table() {
  const [data, setData] = useState<JobRequest[]>(dummyData.data);

  console.log(data);
  const columns = [
    {
      header: "Job Request",
      accessorKey: "jobRequest",
    },
    {
      header: "Sumbmitted On",
      accessorKey: "submitted",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Submitted By",
      accessorKey: "submitter",
    },
    {
      header: "URL",
      accessorKey: "url",
    },
    {
      header: "Status",
      accessorKey: "assigned",
    },
    {
      header: "Submitted By",
      accessorKey: "priority",
    },
    {
      header: "URL",
      accessorKey: "dueDate",
    },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="min-w-[1245px] min-h-screen" >
      <table className="text-black w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <>
              <tr>
                <div className="border border-gray-300 px-4 py-1 border-b-0"/>
                {headerGroup.headers.map((header,index) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-1 text-left text-[12px] text-[#757575] cursor-pointer hover:bg-gray-200"
           
                  >
                    {String.fromCharCode(65+index)}  
                  </th>
                ))}
              </tr>

              <tr
                key={headerGroup.id}
                className="min-w-full border-collapse border border-gray-300 bg-[#EEEEEE]"
              >
                <p className="text-[14px] text-[#757575]">#</p>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-1 text-left text-[12px] text-[#757575] cursor-pointer hover:bg-gray-200"
         
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
         
                  </th>
                ))}
              </tr>
            </>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr key={row.id} className="hover:bg-gray-50 text-[8px]">
                <p className="border border-gray-300 px-4 py-2"> {row.id++}</p>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
