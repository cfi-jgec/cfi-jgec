import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect } from "react";
import "animate.css";
import { CheckCircle, AdjustRounded } from "@mui/icons-material";
const objectives = [
  "To inculcate the entrepreneurial culture into their minds",
  "To organize Entrepreneurship Motivation Programs",
  "Competitions to unleash the entrepreneurial potential among students",
  "To aid them in initiation of industries and Business",
  "Collaborate with entrepreneurship promotion agencies and organizations ",
  "Leverage good student projects ",
  "Product Identification ",
  "Provide escort service for obtaining loan and other approvals.",
];
const initiatives = [
  {
    title: "Personality development",
    desc: "We mentor students and enhance skills such as public speaking, event management,  teamwork,  leadership etc which would help them in making their career.",
  },
  {
    title: "Group discussion",
    desc: "Group discussions are often held in between the core team to filtrate the  ongoing issues and maintain the smooth flow of work and sync up meets are held to check on the progress of the events.",
  },
  {
    title: "Business terms",
    desc: "We also keep updating students about new and upcoming business terms and strategies which help in gaining knowledge as well as help them in extending their horizon of knowledge in the world of business and entrepreneurship.",
  },
  {
    title: "Session for marketing and business",
    desc: "Several classes are held for the students to aspire their young minds and bring out the exceptional entrepreneur in them which would help them in launching their product.",
  },
  {
    title: "Know Yourself",
    desc: "Guiding sessions are held to dig out the innovation from the students and giving them a platform to pitch their ideas in front of the investors",
  },
];
export default function About() {
  useEffect(() => {
    document.title = "ABOUT | EDC";
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
            color: colors.success,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.success}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        About Us
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          // backgroundColor: "#fdfdfd",
          backgroundImage: `url(/assets/backgrounds/corporate.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          justifyContent: "center", 
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Layout>
          <Row>
            <GlassCard>
              <Typography variant="h4" component={"h4"}>
                Our Mission
              </Typography>
              <Typography variant="body1" component={"p"}>
                The mission is to empower students to apply their theoretical
                knowledge to real-world scenarios by providing a dynamic
                platform for innovation and problem-solving. We believe that
                theoretical knowledge can only be valuable when it is
                practically applied, and our goal is to enable students to do
                just that.
              </Typography>
            </GlassCard>
            <GlassCard>
              <Typography variant="h4" component={"h4"}>
                Our Vision
              </Typography>

              <Typography variant="body1" component={"p"}>
                We aim to cultivate a community of critical thinkers who are
                equipped with the skills and confidence to tackle real-world
                challenges. We believe that the ability to think critically is
                essential for success in today&apos;s fast-paced world, and we want
                to help our students develop this ability.
              </Typography>
            </GlassCard>
          </Row>
          <Row>
            <GlassRowCard>
              <Typography gutterBottom variant="h4" component={"h4"}>
                Objectives
              </Typography>
              {objectives.map((objective, index) => {
                return (
                  <StepCard key={index}>
                    <AdjustRounded
                      fontSize="large"
                      sx={{
                        position: "relative",
                        top: "25%",
                        backgroundColor: colors.success,
                        borderRadius: "50%",
                        left: "-20px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component={"h6"}
                      color={colors.white}
                    >
                      {objective}
                    </Typography>
                  </StepCard>
                );
              })}
            </GlassRowCard>
          </Row>
          <Row>
            <GlassRowCard>
              <Typography gutterBottom variant="h4" component={"h4"}>
                Initiatives
              </Typography>
              {initiatives.map((val, index) => {
                return (
                  <StepCard2 key={index}>
                    <Typography
                      variant="h6"
                      align="right"
                      component={"h6"}
                      color={colors.success}
                    >
                      {val.title}
                      <br />
                      <Typography variant="body1" align="right" component={"p"}>
                        {val.desc}
                      </Typography>
                    </Typography>

                    <CheckCircle
                      fontSize="large"
                      sx={{
                        position: "relative",
                        top: "25%",
                        backgroundColor: colors.success,
                        borderRadius: "50%",
                        right: "-20px",
                      }}
                    />
                  </StepCard2>
                );
              })}
            </GlassRowCard>
          </Row>
        </Layout>
      </Box>
    </Box>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    h4 {
      font-size: 25px;
    }
    h6 {
      font-size: 15px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const GlassCard = styled.div`
  width: 40%;
  min-height: 400px;
  margin: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(10, 10, 10, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: ${colors.info};
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
  p {
    text-align: justify;
    width: 100%;
    color: ${colors.white};
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    margin: 0;
    scale  : 0.8;
  }
`;
const GlassRowCard = styled(GlassCard)`
  width: 88%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StepCard = styled.div`
  width: 90%;
  border-left: 5px solid ${colors.info};
  min-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h6 {
    margin-left: 20px;
    line-height: normal;
    width: 100%;
    // margin: auto;
  }
  :last-of-type {
    border-left: 5px solid transparent;
  }
`;
const StepCard2 = styled.div`
  width: 90%;
  border-right: 5px solid ${colors.info};
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h6 {
    margin-right: 20px;
    line-height: normal;
    width: 100%;
    // margin: auto;
  }
  p {
    margin-right: 30px;
    line-height: normal;
    width: 100%;
    text-align: right;
    color: ${colors.white};
  }
  :last-of-type {
    border-right: 5px solid transparent;
  }
`;
