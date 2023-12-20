import { MainLayout } from "../layouts";
import { Box, Button, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";

const localizer = momentLocalizer(moment);

function AppointmentsPage() {
  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6">Appointments</Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "none", borderRadius: 2, boxShadow: "none" }}
          startIcon={<AddIcon />}
        >
          Add Appointment
        </Button>
      </Box>

      <Box height={"100vh"} width="100%" marginTop={4}>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Box>
    </MainLayout>
  );
}

export default AppointmentsPage;
