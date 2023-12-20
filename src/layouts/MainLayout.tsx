import { useState } from "react";
import { Navbar, Sidebar } from "../components";

import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

type MainLayoutProps = {
  children: React.ReactNode;
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function MainLayout({ children }: MainLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar open={open} />
        <Sidebar open={open} setOpen={setOpen} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <Box
            sx={{
              backgroundColor: "#e8f2fc",
              p: 3,
              borderTopLeftRadius: 20,
              minHeight: "100vh",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
