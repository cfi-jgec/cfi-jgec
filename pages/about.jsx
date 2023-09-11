import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect } from "react";
import "animate.css";
import { CheckCircle, AdjustRounded } from "@mui/icons-material";
const objectives = [
  "Contribute to society and industry using technology",
  "Promote technical hobby hands-on activities in the institute",
  "Launch a knowledge sharing platform on college, national, and international platforms",
  "Encourage bringing out products, not just working models, from projects and club events",
  "Cultivate a community of critical thinkers equipped to tackle real-world challenges",
  "Develop students' critical thinking skills and confidence for success in today's fast-paced world",
];
const initiatives = [
  {
    title: "Technical development",
    desc: "We mentor students and enhance their technical skills by providing them with the necessary resources and guidance to work on projects and participate in competitions.",
  },
  {
    title: "Social Responsibility",
    desc: "We encourage students to use their technical skills to solve real-world problems and contribute to society.",
  },
  {
    title: "Knowledge Sharing",
    desc: "The Centre for Innovation is open at all times for anyone with the hunger for knowledge.",
  },
  {
    title: "Industry Interaction",
    desc: "Our rich alumni network and industry connections allow us to provide students with opportunities to interact with industry experts and gain valuable insights into the industry.",
  },
];
export default function About() {
  useEffect(() => {
    document.title = "ABOUT | CFI";
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
        About Us
      </Typography>
      <Box
        sx={{
          minHeight: "100svh",
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
          }}
        >
          <Layout>
            <Row>
              <GlassCard>
                <Typography variant="h4" component={"h4"}>
                  Our Mission
                </Typography>
                <Typography variant="body1" component={"p"}>
                  Our mission is to create a transformative learning experience
                  for students, bridging the gap between theory and practice. By
                  providing a dynamic platform for innovation and
                  problem-solving, we empower students to apply their academic
                  knowledge to real-world scenarios, making a positive impact on
                  society. Nurturing their visionary projects from conception to
                  reality, we offer comprehensive support, including mentoring,
                  team formation, funding, and publicity.
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
                  essential for success in today&apos;s fast-paced world. As a
                  community of driven individuals united by creativity and a
                  passion for making a difference, we cultivate critical
                  thinking skills and confidence, preparing our students to
                  succeed in a fast-paced world and become responsible and
                  impactful leaders of the future.
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
                        //style first letter
                        sx={{
                          ":first-letter": {
                            color: colors.success,
                          },
                        }}
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
                        <Typography
                          variant="body1"
                          align="right"
                          component={"p"}
                        >
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
    scale: 0.8;
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
