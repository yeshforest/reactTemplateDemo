import React, { FC } from "react";
import HeaderLayout from "./HeaderLayout.tsx";
import FooterLayout from "./FooterLayout.tsx";
import { Outlet } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
}
const Layout: FC<Props> = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
};
export default Layout;
