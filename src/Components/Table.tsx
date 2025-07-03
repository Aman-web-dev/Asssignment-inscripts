import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import linkIcon from "../assets/link-icon.svg";
import DoubleArrow from "../assets/doubleArrow (2).svg";
import dummyData from "../assets/DummyData.json";
import reloadIcon from "../assets/repload.svg";
import JobRequest from "../assets/JobRequest.svg";
import Assigned from "../assets/Emoji.svg";
import URL from "../assets/Globe.svg";
import Status from "../assets/statusIcon.svg";
import SubmittedOn from "../assets/Calendar_icon.svg";
import SubmittedBy from "../assets/userIcon.svg";

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
      cell: ({ getValue }: { getValue: () => string }) => {
        const status = getValue();
        const statusColorMap: { [key: string]: string } = {
          "Need to start": "bg-gray-100 text-yellow-800 text-[#475569] ",
          "Complete": "bg-green-100 text-green-800",
          "Blocked": "bg-red-100 text-red-800",
          "In-process": "bg-yellow-100 text-blue-800",
        };
        return (
          <span
            className={`px-4 py-0.5 text-[8px] rounded-full font-semibold ${
              statusColorMap[status] || ""
            }`}
          >
            {status}
          </span>
        );
      }, 
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
      header: "Assigned to",
      accessorKey: "assigned",
    },
    {
      header: "Priority",
      accessorKey: "priority",
       cell: ({ getValue }: { getValue: () => string }) => {
        const status = getValue();
        const statusColorMap: { [key: string]: string } = {
          "Medium": " text-yellow-600 ",
          "High": " text-red-800",
          "Low": " text-blue-800",
        };
        return (
          <span
            className={`font-semibold ${
              statusColorMap[status] || ""
            }`}
          >
            {status}
          </span>
        );
      }, 
    },
    {
      header: "Due Date",
      accessorKey: "dueDate",
    },
    {
      header: "Est. Value",
      accessorKey: "estValue",
    },
  ];
  const table = useReactTable({
    columns,
    data: dummyData.data as JobRequest[],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="min-w-[1264px] min-h-screen ">
      <div
        className="
     w-[100vw] border flex flex-row  justify-between"
      ></div>
      <table className="text-black w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <>
              <tr>
                <div className="border border-gray-300 px-4 py-1 border-b-0" />
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={` px-4 py-1 text-left text-[12px] text-[#757575]   cursor-pointer hover:bg-gray-200 ${
                      header.id == "jobRequest" ||
                      header.id == "submitted" ||
                      header.id == "status" ||
                      header.id == "submitter"
                        ? "bg-[#F6F6F6]"
                        : header.id == "assigned"
                        ? "bg-[#D2E0D4]"
                        : header.id == "priority" || header.id == "dueDate"
                        ? "bg-[#DCCFFC]"
                        : header.id == "estValue"
                        ? "bg-[#FAC2AF]"
                        : "bg-white border border-gray-300"
                    }`}
                  >
                    {header.id == "jobRequest" ? (
                      <div className="flex flex-row gap-2 items-center">
                        <img src={linkIcon} />
                        <p className="text-[10px]">Q3 Finacial Overview</p>
                        <img className="h-3 w-3" src={reloadIcon} />
                      </div>
                    ) : header.id == "assigned" ? (
                      <div className="flex flex-row gap-2 items-center h-full wi-full">
                        <img className="h-3 w-3" src={DoubleArrow} />
                        <p className="text-[10px]">ABC</p>
                      </div>
                    ) : header.id == "dueDat" || header.id == "priority" ? (
                      <div className="flex flex-row gap-2 items-center  h-full wi-full">
                        <img className="h-3 w-3" src={DoubleArrow} />
                        <p className="text-[10px]">Answer a Question</p>
                      </div>
                    ) : header.id == "estValue" ? (
                      <div className="flex flex-row gap-2 items-center  h-full wi-full">
                        <img className="h-3 w-3" src={DoubleArrow} />
                        <p className="text-[10px]">Extract</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>

              <tr
                key={headerGroup.id}
                className="min-w-full border-collapse border border-gray-300 "
              >
                <p className="text-[14px] text-[#757575]">#</p>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`border border-gray-300 px-4 py-[0.5px] text-left ${
                      header.id === "assigned"
                        ? "bg-[#E8F0E9]"
                        : header.id === "priority" || header.id === "dueDate"
                        ? "bg-[#EAE3FC]"
                        : header.id === "estValue"
                        ? "bg-[#FFE9E0]"
                        : "bg-[#EEEEEE]"
                    } text-[10px] font-semibold text-[#757575] cursor-pointer hover:bg-gray-200`}
                  >
                    {header.isPlaceholder ? null : header.id == "jobRequest" ? (
                      <div className="flex flex-row gap-2">
                        <img src={JobRequest} />
                        <p>Job Request</p>
                      </div>
                    ) : header.id == "submitted" ? (
                      <div className="flex flex-row gap-2">
                        <img src={SubmittedOn} />
                        <p>Submitted On</p>
                      </div>
                    ) : header.id == "status" ? (
                      <div className="flex flex-row gap-2">
                        <img src={Status} />
                        <p>Status</p>
                      </div>
                    ) : header.id == "submitter" ? (
                      <div className="flex flex-row gap-2">
                        <img src={SubmittedBy} />
                        <p>Submitted By</p>
                      </div>
                    ) : header.id == "url" ? (
                      <div className="flex flex-row gap-2">
                        <img src={URL} />
                        <p>URL</p>
                      </div>
                    ) : header.id == "assigned" ? (
                      <div className="flex flex-row gap-2">
                        <img src={Assigned} />
                        <p>Assigned To</p>
                      </div>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    )}
                  </th>
                ))}
                <div className="border border-gray-300 px-4 py-1 text-left text-[12px] text-[#757575] cursor-pointer hover:bg-gray-200">
                  {" "}
                  +
                </div>
              </tr>
            </>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr key={row.id} className="hover:bg-gray-50 text-[8px]">
                <p className="border border-gray-300 px-4 py-2">
                  {Number(row.id) + 1}
                </p>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="border border-gray-300 px-4 py-2 min-w-24"></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
