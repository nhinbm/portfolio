import { Outlet } from "react-router";
import Sidebar from "../sidebar/sidebar";

const MainLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
export default MainLayout;
