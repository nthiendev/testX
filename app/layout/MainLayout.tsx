import { FC, ReactNode } from "react";
import AppBar from "../components/AppBar";

interface Props {
  children: ReactNode;
}

// #8F4791, #D9659C, #F7A050, #FAA051, #CF642D

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="">
      <AppBar />
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 via-orange-600">
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
