import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const sidebarData = [
  {
    name: "Dashboard",
    Icon: <DashboardRoundedIcon />,
    href: "/",
  },
  {
    name: "Appointments",
    Icon: <EventAvailableRoundedIcon />,
    href: "/appointments",
  },
  {
    name: "Medical Records",
    Icon: <MedicalServicesOutlinedIcon />,
    href: "/medical-records",
  },
  // {
  //   name: "Doctors",
  //   Icon: <PersonRoundedIcon />,
  //   href: "/doctors",
  // },
  //   {
  //   name: "Patients",
  //   Icon: <GroupsRoundedIcon />,
  //   href: "/patients",
  // },
];

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ "& .MuiDrawer-paper": { borderWidth: 0 } }}
      >
        <DrawerHeader />
        <DrawerHeader>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {!open ? (
              <KeyboardDoubleArrowRightIcon />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {sidebarData.map(({ name, Icon, href }) => (
            <ListItem
              key={name}
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              <Link to={href}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    // backgroundColor: pathname === href ? "#177be5" : "white",
                    backgroundColor: "#fff",
                  }}
                  disableRipple
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: pathname === href ? "#fff" : "gray",
                      backgroundColor: pathname === href ? "#177be5" : "white",
                      padding: 1,
                      borderRadius: 3,
                    }}
                  >
                    {Icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={name}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: pathname === href ? "#177be5" : "gray",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
