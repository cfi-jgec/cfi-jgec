import {  Box, Modal } from "@mui/material";
import styled from "styled-components";
import "animate.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import data from "../data/events.json";
import {
  CodeOff,
  LightMode,
  LightbulbCircleRounded,
} from "@mui/icons-material";
import { bannerUrl } from "../data/mocks";
import Image from "next/image";
import Header from "../components/Header";
import CommonBodyLayout from "../components/CommonBodyLayout";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  minWidth: 300,
  maxHeight: "80vh",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Events() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [view, setView] = useState({});
  useEffect(() => {
    document.title = "EVENTS | CFI";
  }, []);
  return (
    <Box>
      <Header header={"Event"} />
      <CommonBodyLayout>
        <Layout>
          <Container>
            {data?.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <LightbulbCircleRounded />
                </CardHeader>
                <CardContent>
                  <h3>{event.eventHeroName}</h3>
                  <p>{event.eventDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button>
                    <LightMode />
                  </Button>
                  <FooterSessions>
                    <h4>Sessions</h4>
                    {event.sessions.map((session, index) => (
                      <h5
                        key={index}
                        onClick={() => {
                          setView({
                            session,
                            eventName: event.eventFullName,
                            eventDesc: event.eventDescription,
                          });
                          handleOpen();
                        }}
                      >
                        {session.year}
                      </h5>
                    ))}
                  </FooterSessions>
                </CardFooter>
              </Card>
            ))}
          </Container>
        </Layout>
      </CommonBodyLayout>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HeaderImage src={bannerUrl} />
          <ModalHeader>{view?.eventName}</ModalHeader>
          <ModalBody>
            <p>{view?.eventDesc}</p>
            {view.session?.champs && (
              <ModalHeroSection>
                {view.session.champs.map((champ, index) => (
                  <RankCardContainer key={index}>
                    <Hidden
                      className="Hidden"
                      style={{
                        background: {},
                      }}
                    >
                      <h3>{champ.teamName}</h3>
                      <div>
                        {champ.teamMembers.map((member, index) => (
                          <p key={index}>
                            {index + 1}.{"  "}
                            {member}
                          </p>
                        ))}
                      </div>
                    </Hidden>
                    <RankCard>
                      <h3>{champ.teamName}</h3>
                      <Image
                        className={`medal-${champ.positionId}`}
                        height={100}
                        width={100}
                        src={
                          champ.positionId === 1
                            ? "/assets/medals/first-rank.png"
                            : champ.positionId === 2
                            ? "/assets/medals/second-rank.png"
                            : "/assets/medals/third-rank.png"
                        }
                        alt="Medal"
                      />
                      <h5>{champ.projectName}</h5>
                      <Clamp>{champ.projectDesc}</Clamp>
                    </RankCard>
                  </RankCardContainer>
                ))}
              </ModalHeroSection>
            )}
          </ModalBody>
        </Box>
      </StyledModal>
    </Box>
  );
}

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
const Card = styled.div`
  width: 260px;
  height: 400px;
  background: #fff;
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.2s ease-in-out;
`;
const CardHeader = styled.div`
  height: 200px;
  width: 100%;
  background: #03205e;
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;
  svg {
    font-size: 100px;
    color: #fff;
  }
`;
const CardContent = styled.div`
  // height: 200px;
  width: 80%;
  margin: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #121289;
    margin: 0;
  }
  p {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const FooterSessions = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;
  h4 {
    font-weight: 600;
    color: #fff;
    text-decoration: underline;
    margin: 0;
  }
  h5 {
    font-weight: 600;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    margin: 3px;
    text-align: center;
    background: #03205e;
    cursor: pointer;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 40px;
  background: transparent;
  margin: auto;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  items-align: center;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: #white;
  }
`;

const CardFooter = styled.div`
  min-height: 50px;
  width: 100%;
  background: #03205e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  items-align: center;
  transition: all 0.2s ease-in-out;
  div {
    // visibility: hidden;
    opacity: 0;
  }
  &:hover {
    min-height: 50%;
    justify-content: space-evenly;
    Button {
      display: none;
    }
    div {
      // visibility: visible;
      opacity: 1;
    }
    transform: translateY(-50%);
    background: #121289dd;
  }
`;
const StyledModal = styled(Modal)`
  background: rgba(0, 0, 0, 0.6);
`;
const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  opacity: 0.7;
  z-index: 0;
  filter: blur(2px);
  -webkit-filter: brightness(0.5);
`;
const ModalHeader = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  z-index: 1;
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
const ModalHeroSection = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 10px;
  width: 100%;
  margin: 20px;
`;
const RankCard = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  h5 {
    margin-bottom: 0;
  }
  z-index: 0;
  transition: all 1s ease-in-out;
`;
const Clamp = styled.p`
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 250px;
  max-width: 65%;
  overflow: hidden;
`;
const Hidden = styled.div`
  display: flex;
  position: absolute;
  color: indigo;
  top: 0;
  left: 0;
  font-weight: 500;
  z-index: 100;
  height: 100%;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 1s ease-in-out;
  transform: translateY(100%);
  gap: 30px;
  h3,
  h5,
  h4,
  p {
    margin: 0;
  }
  div {
    text-align: left;
    width: 90%;
    font-weight: 300;
  }
`;
const RankCardContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 200px;
  position: relative;
  background: #f3f5f753;
  border-radius: 20px;
  margin: auto;
  transition: all 1s ease-in-out;
  &:hover {
    ${Hidden} {
      transform: translateY(0%) translateX(0%);
    }
    ${RankCard} {
      transform: translateY(-100%);
    }
  }
`;
