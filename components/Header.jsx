import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../styles/colors";

const Header = ({header}) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          maxWidth: "1152px",
          margin: "0 auto",
          del: "2px 2px white",
          width: "100%",
          color: colors.white,
          borderRadius: "10px",
          ":first-letter": {
            color: colors.warning,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "20%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.warning}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        {header}
      </Typography>
    </>
  );
};

export default Header;
