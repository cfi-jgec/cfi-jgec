import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../styles/colors";
export default function Footer() {
  return (
    <Box
      sx={{
        minHeight: "30px",
        backgroundColor: colors.primary,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography sx={{ color: "#fff" }}>
        Centre for Innovation &nbsp;&#169;&nbsp;2023
      </Typography>
    </Box>
  );
}
