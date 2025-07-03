// TableWrapper.tsx
import Navbar from "./Navbar";
import ToolBar from "./ToolBar";
import BottomNavbar from "./BottomNavbar";
import { ReactNode } from "react";


function TableWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col">

      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbar />
        <ToolBar />
      </div>

      <div className="flex-1 overflow-auto pt-[96px] pb-[48px]">
        {children}
      </div>


      <div className="fixed bottom-0 left-0 right-0 z-20">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default TableWrapper;