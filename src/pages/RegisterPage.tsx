import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width={"30%"}
        border={"1px solid #d2d3d4"}
        padding={5}
        borderRadius={2}
      >
        <img src="/logo.png" alt="logo" width={180} className="mx-auto" />

        {/* Title */}
        <Typography variant="h6" align="center" marginTop={3} marginBottom={5}>
          Register
        </Typography>

        {/* Inputs */}
        <Box width={"100%"} component={"form"} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="First name"
            fullWidth={true}
            type="text"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            variant="outlined"
            label="Last name"
            fullWidth={true}
            type="text"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            variant="outlined"
            label="email"
            fullWidth={true}
            type="email"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            variant="outlined"
            label="Password"
            fullWidth={true}
            type="password"
          />

          <Button
            type="submit"
            fullWidth={true}
            variant="contained"
            sx={{ marginTop: 2, boxShadow: "none" }}
            size="medium"
            autoCapitalize="none"
          >
            Login
          </Button>

          <Typography
            align="center"
            marginTop={2}
            variant="body2"
            color={"darkgrey"}
          >
            I have an account!
            <Link to="/login" className="ml-2 text-blue-400 underline">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
