import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
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
          Login
        </Typography>

        {/* Inputs */}
        <Box width={"100%"} component={"form"} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Enter your email..."
            label="Email"
            fullWidth={true}
            type="email"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            variant="outlined"
            placeholder="Enter your password..."
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

          <Link to="/register">
            <Typography
              align="center"
              marginTop={2}
              variant="body2"
              color={"darkgrey"}
            >
              Create new account
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
