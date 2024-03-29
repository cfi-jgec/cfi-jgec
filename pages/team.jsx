import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import data from "../data/team.json";
import { useEffect } from "react";
import Layout from "../components/Layout";
import HeroCard from "../components/HeroCard";
export default function Team() {
  // console.log(data);
  useEffect(() => {
    document.title = "TEAM | CFI";
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          maxWidth: '1152px',
          margin: "0 auto",
          del: "2px 2px white",
          width: "100%",
          color: colors.white,
          borderRadius: "10px",
          ":first-letter": {
            color: colors.success,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "20%", 
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.success}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Team
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fdfdfd",
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Layout>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              maxWidth: "1152px",
              margin: "auto",
            }}
          >
            {data.map((Elem, i) => {
              // console.log(Elem["val"]);
              return (
                <>
                  {Elem["val"].map((val, index) => {
                    return (
                      <HeroCard
                        key={index}
                        i={index}
                        name={val["name"]}
                        img={val["img"]}
                        post={val["post"]}
                        linkedin={val["linkedin"]}
                        email={val["email"]}
                        ph={val["Phone no"]}
                      />
                    );
                  })}
                </>
              );
            })}
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
