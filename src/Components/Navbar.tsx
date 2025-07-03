import panel from "../assets/Panel.svg";
import More from "../assets/More.svg";
import NavSearch from "./Nav-search";
import { Bell } from "lucide-react";

function Navbar() {
  return ( 
    <div className="h-[56px] border absolute top-0 left-0 right-0 flex flex-row justify-between items-center  px-2 bg-white">
      <div className="flex flex-row gap-4 items-center mx-2 cursor-pointer">
        <img src={panel} />

        <section className="text-gray-500 text-xs flex flex-row font-semibold items-center ">
          <p>Workspace</p>
          <Seperator />
          <p>Folder 2</p>
          <Seperator />
          <p className="text-black ">Spreadsheet 3</p>
          <img className="ml-2" src={More} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <NavSearch />
        <section className="relative w-fit">
          <Bell height={20} width={20} color="black" />
          <p className="absolute -top-2 -right-2  font-bold text-white bg-[#4B6A4F] rounded-full px-1.5  text-[10px]">
            5
          </p>
        </section>

        <section className=" flex flex-row">
          <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1693035730007-fbc2c14c6814?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <div className="flex flex-col text-black px-2 text-left">
        <p className="text-black font-semibold text-xs">John Doe</p>
        <p className="text-xs">john_doe..</p>
          </div>
  
        </section>
      </div>
    </div>
  );
}

export default Navbar;

const Seperator = () => {
  return <p className="mx-2">{">"}</p>;
};
