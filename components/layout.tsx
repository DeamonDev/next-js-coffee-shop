import { Box } from "@mui/material";
import { Fragment, ReactNode } from "react";
import Copyright from "../src/Copyright";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" sx={{backgroundColor: "#38261e"}}>
      <Header />
      <main>{children}</main>
      <Copyright />
    </Box>
  );
};

export default Layout;
