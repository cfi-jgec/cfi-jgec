import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import data from "../data/alumni.json";
import AlumniHeroCard from "../components/AlumniHeroCard";
export default function Alumni() {
  useEffect(() => {
    document.title = "ALUMNI | CFI";
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          del: "2px 2px white",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.danger,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.danger}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Alumni
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {data.map((val, index) => {
              // console.log(val["pic"])
              return (
                <AlumniHeroCard
                  key={index}
                  i={index}
                  name={val["name"]}
                  img={val["pic"]}
                  batch={val["batch"]}
                  post={val["position"]}
                  linkedin={val["linkedin"]}
                  email={val["email"]}
                  phone={val["phone"]}
                  facebook={val["facebook"]}
                />
              );
            })}
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}

const Card = styled.div`
  width: 60%;
  minwidth: 300px;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  color: #000;
  margin: 20px 0;
  padding: 20px;
  height: 400px;
  box-shadow: rgb(1, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 0, 0, 0.5) -3px -3px 6px 1px inset;
  /*glassmorphism*/
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(17, 25, 40, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: ${colors.danger};
  }
  p {
    color: ${colors.grey};
  }
  :nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: 1300px) {
    width: 80%;
    flex-direction: column-reverse;
    height: auto;
    minwidth: 300px;
    :nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;
const CardText = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: auto 0;
`;
const CardImg = styled.div`
  flex: 0.4;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    padding: 20px;
    object-fit: cover;
    aspect-ratio: 1/1;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;
