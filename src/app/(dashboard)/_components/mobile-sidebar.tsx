import { Menu } from "lucide-react";

import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <div>
      <div className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </div>
      <div className="p-0 bg-white">
        <Sidebar />
      </div>
    </div>
  );
};
