import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import ProfileDropDown from "./ProfileDropDown";

export default function Navbar({ open }: { open: boolean }) {
  const theme = useTheme();

  return (
    <>
      <MuiAppBar
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: "none",
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ transform: "translateY(10px)" }}>
              <img
                src="/logo.png"
                alt="logo"
                width={open ? 170 : 130}
                style={{ transition: "all 0.3s ease" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton sx={{ width: 50, height: 50 }}>
                <Badge badgeContent={1} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <ProfileDropDown />
            </Box>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
}
