import React from "react";
import Hide from "../assets/Shape.svg";
import doubleArrow from "../assets/doubleArrow.svg";
import ArrowSort from "../assets/Arrow Sort.svg";
import Filter from "../assets/Shape-1.svg";
import CellView from "../assets/Shape-2.svg";
import arrowDownload  from '../assets/Arrow- Download.svg';
import arrowUpload  from '../assets/Arrow Upload.svg';
import arrowforward from '../assets/Arrow-forward.svg';
import DoubleArrow from '../assets/doubleArrow (2).svg'


function ToolBar() {
  return (
    <div className="text-black flex flex-row justify-between px-4 text-xs py-2">
      <div className="flex flex-row justify-between items-center gap-4 ">
        <p className="flex flex-row  gap-2 items-center">
          Tool bar <img className="h-2 w-2 " src={doubleArrow} />{" "}
        </p>
        <button className="flex flex-row items-center gap-2">
          <img className="h-3 w-3" src={Hide} />
          Hide Fields
        </button>
        <button className="flex flex-row items-center gap-2">
          <img className="h-3 w-3" src={ArrowSort} />
          Sort
        </button>
        <button className="flex flex-row items-center gap-2">
          <img className="h-3 w-3" src={Filter} />
          Filter
        </button>
        <button className="flex flex-row items-center gap-2">
          <img className="h-3 w-3" src={CellView} />
          Cell View
        </button>
      </div>

      <div className="flex flex-row justify-between gap-[8px]">
        <button className="flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
          <img className="h-3 w-3" src={arrowDownload} />Import </button>
          <button className="flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
          <img className="h-3 w-3" src={arrowUpload} />Export </button>
          <button className="flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
          <img className="h-3 w-3" src={arrowforward} />Share </button>
          <button className="flex flex-row items-center gap-2 bg-green-600 px-2 py-1.5 rounded-lg text-white">
          <img className="h-3 w-3" src={DoubleArrow} />New Action</button>
      </div>
    </div>
  );
}

export default ToolBar;
