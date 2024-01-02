import { Box } from "@mui/material";
import React from "react";

const CommonBodyLayout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `url(/assets/backgrounds/corporate.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            // position: "relative",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default CommonBodyLayout;
