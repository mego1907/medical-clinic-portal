import { Box, IconButton, Paper, Typography } from "@mui/material";
import { MainLayout } from "../layouts";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { DashboardCharts } from "../components";
import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DashboardPage() {
  return (
    <MainLayout>
      <Typography variant="h6" fontWeight={"bold"}>
        Welcome, Ahmed Hany
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        width={"100%"}
        gap={4}
        flexWrap={"wrap"}
        marginTop={3}
      >
        <Box
          sx={{ backgroundColor: "#fff" }}
          padding={2}
          borderRadius={1}
          border={"1px solid #177be5"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          gap={2}
          minWidth={"22%"}
        >
          <div>
            <IconButton sx={{ backgroundColor: "#177be52b" }}>
              <PeopleOutlineIcon sx={{ color: "#177be5" }} fontSize={"large"} />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center mt-2">
            <Typography fontWeight={"bold"} color="gray" fontSize={25}>
              252
            </Typography>
            <Typography variant="body1" component={"h3"} color={"GrayText"}>
              Patients scheduled
            </Typography>
          </div>
        </Box>

        <Box
          sx={{ backgroundColor: "#fff" }}
          padding={2}
          borderRadius={1}
          border={"1px solid #177be5"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={2}
          minWidth={"22%"}
        >
          <div>
            <IconButton sx={{ backgroundColor: "#177be52b" }}>
              <EventAvailableIcon
                sx={{ color: "#177be5" }}
                fontSize={"large"}
              />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center mt-2">
            <Typography fontWeight={"bold"} color="gray" fontSize={25}>
              252
            </Typography>
            <Typography variant="body1" component={"h3"} color={"GrayText"}>
              Appointments
            </Typography>
          </div>
        </Box>

        <Box
          sx={{ backgroundColor: "#fff" }}
          padding={2}
          borderRadius={1}
          border={"1px solid #177be5"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={2}
          minWidth={"22%"}
        >
          <div>
            <IconButton sx={{ backgroundColor: "#177be52b" }}>
              <MedicalServicesOutlinedIcon
                sx={{ color: "#177be5" }}
                fontSize={"large"}
              />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center mt-2">
            <Typography fontWeight={"bold"} color="gray" fontSize={25}>
              252
            </Typography>
            <Typography variant="body1" component={"h3"} color={"GrayText"}>
              Medical Records
            </Typography>
          </div>
        </Box>

        <Box
          sx={{ backgroundColor: "#fff" }}
          padding={2}
          borderRadius={1}
          border={"1px solid #177be5"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={2}
          minWidth={"22%"}
        >
          <div>
            <IconButton sx={{ backgroundColor: "#177be52b" }}>
              <PersonRoundedIcon sx={{ color: "#177be5" }} fontSize={"large"} />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center mt-2">
            <Typography fontWeight={"bold"} color="gray" fontSize={25}>
              252
            </Typography>
            <Typography variant="body1" component={"h3"} color={"GrayText"}>
              Total Doctors
            </Typography>
          </div>
        </Box>
      </Box>

      <Box marginTop={3} display={"flex"} gap={2}>
        <Paper sx={{ width: "70%" }}>
          <DashboardCharts />
        </Paper>
        <Paper sx={{ width: "30%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker defaultValue={dayjs("20-12-2023")} />
          </LocalizationProvider>
        </Paper>
      </Box>

      <Box display={"flex"} gap={2}></Box>
    </MainLayout>
  );
}

export default DashboardPage;
