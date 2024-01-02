"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Header from "../components/Header";
import CommonBodyLayout from "../components/CommonBodyLayout";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   // width: "80vw",
//   // minWidth: 300,
//   // maxHeight: "90vh",
//   overflowY: "scroll",
//   backgroundColor: "#ffffff",
//   border: "2px solid #000",
//   boxShadow: 24,
//   padding: "2rem",
// };

const projects = () => {
  const [view, setView] = useState(false);
  const handelOnOpen = () => {
    setView(!view);
  };

  useEffect(() => {
    document.title = "PROJECTS | CFI";
  }, []);
  return (
    <Box>
      <Header header={"Projects"} />
      <CommonBodyLayout>
        <>
          <StyledModal
            open={view}
            onClose={handelOnOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ProjectContainer>
              <ClosedBox onClick={handelOnOpen}>Close</ClosedBox>
              <h1>Arduino Project</h1>
              <h3>made by Swadesh pal</h3>
              <h3>3rd Year, IT dept.</h3>
              <Box>
                <h2> Project Overview</h2>
                <Box
                  sx={{
                    width: "90%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122519476/original/c13247425075296139fa2e8682f666c0da5e9501/do-better-programming-for-your-great-arduino-project.png"
                    }
                    alt="project image"
                    height={400}
                    width={800}
                  />
                </Box>
                <h2> Project Description</h2>
                <p>
                  Functions that are localized in the time domain have Fourier
                  transforms that are spread out across the frequency domain and
                  vice versa, a phenomenon known as the uncertainty principle.
                  The critical case for this principle is the Gaussian function,
                  of substantial importance in probability theory and statistics
                  as well as in the study of physical phenomena exhibiting
                  normal distribution (e.g., diffusion). The Fourier transform
                  of a Gaussian function is another Gaussian function. Joseph
                  Fourier introduced the transform in his study of heat
                  transfer, where Gaussian functions appear as solutions of the
                  heat
                </p>
                <Button style={{ margin: "1rem auto" }} onClick={()=>alert("code copied")}>copy code</Button>
                <Box
                  sx={{
                    width: "90%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={"/code.png"}
                    alt="green iguana"
                    height={400}
                    width={800}
                  />
                </Box>
              </Box>
            </ProjectContainer>
          </StyledModal>

          <Layout>
            <Container>
              <CardComponent handelOnOpen={() => handelOnOpen()} />
              <CardComponent handelOnOpen={() => handelOnOpen()} />
              <CardComponent handelOnOpen={() => handelOnOpen()} />
            </Container>
          </Layout>
        </>
      </CommonBodyLayout>
    </Box>
  );
};

export default projects;

const CardComponent = ({ handelOnOpen }) => {
  return (
    <Card sx={{ maxWidth: 300, mb: "1rem" }}>
      <CardMedia
        sx={{ height: 160, width: "100%", objectFit: "contain" }}
        image={
          "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122519476/original/c13247425075296139fa2e8682f666c0da5e9501/do-better-programming-for-your-great-arduino-project.png"
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Arduino car
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet
          nostrum ad consequatur, ab eveniet, id fuga quis dolor maxime aut
          libero!
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: colors.primary,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button size="medium" sx={{ color: colors.white }}>
          Demo
        </Button>
        <Button
          size="medium"
          sx={{ color: colors.white }}
          onClick={handelOnOpen}
        >
          view more
        </Button>
      </CardActions>
    </Card>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  margin: auto;
  max-width: 1152px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;
const StyledModal = styled(Modal)`
  background: rgba(0, 0, 0, 0.6);
`;

const ProjectContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  min-width: 200;
  height: 90vh;
  overflow-y: scroll;
  background-color: #ffffff;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 2rem;
  h1,
  h2,
  h3 {
    text-align: center;
    text-transform: capitalize;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding: 0.5rem;
    h1,
    h2,
    h3 {
      text-align: start;
      padding-left: 1rem;
    }
    h1 {
      font-size: 1.6rem;
      margin-top: 10px;
      margin-bottom: 0;
    }
    h2 {
      font-size: 1.4rem;
      margin: 1rem 0;
    }
    h3 {
      font-size: 1rem;
      margin: 0;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    p {
      font-size: 14px;
      padding: 0 0.5rem;
    }
  }
`;
const ClosedBox = styled.div`
  position: absolute;
  right: 2rem;
  background-color: red;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  @media (max-width: 768px) {
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 12px;
    right: 0.5rem;
    top: 0.5rem;
  }
`;
