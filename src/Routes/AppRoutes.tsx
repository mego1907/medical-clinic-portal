import { Route, Routes } from "react-router-dom";
import {
  AppointmentsPage,
  DashboardPage,
  LoginPage,
  PatientsPage,
  DoctorsPage,
  MedicalRecords,
  RegisterPage,
} from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={DashboardPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/appointments" Component={AppointmentsPage} />
      <Route path="/patients" Component={PatientsPage} />
      <Route path="/doctors" Component={DoctorsPage} />
      <Route path="/medical-records" Component={MedicalRecords} />
    </Routes>
  );
}

export default AppRoutes;
