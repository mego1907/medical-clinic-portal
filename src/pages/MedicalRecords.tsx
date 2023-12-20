import { MainLayout } from "../layouts";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "firstName", headerName: "First name", width: 180 },
  { field: "lastName", headerName: "Last name", width: 180 },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "gender",
    headerName: "Gender",
    type: "string",
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    gender: "Male",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    gender: "Male",
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, gender: "Male" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, gender: "Male" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    gender: "Male",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, gender: "Male" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    gender: "Male",
  },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, gender: "Male" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, gender: "Male" },
];

function MedicalRecords() {
  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6">Medical Records</Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "none", borderRadius: 2, boxShadow: "none" }}
          startIcon={<AddIcon />}
        >
          Add Record
        </Button>
      </Box>

      <Box backgroundColor="#fff" marginTop={2} borderRadius={2}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </MainLayout>
  );
}

export default MedicalRecords;
