import { Box} from "@mui/material";
import Layout from "../components/Layout";
import styled from "styled-components";
import "animate.css";
import { useEffect, useState } from "react";
import certificatesList from "../data/certificates.json";
import { LightMode, LightbulbCircleRounded } from "@mui/icons-material";
import CertificatesTable from "../components/CertificatesTable";
import Header from "../components/Header";
import CommonBodyLayout from "../components/CommonBodyLayout";

export default function Certificates() {
  const [viewCertificates, SetViewCertificates] = useState(false);
  const [certificates, setCertificates] = useState("");
  const [eventName, setEventName] = useState("");
  useEffect(() => {
    document.title = "CERTIFICATE | CFI";
  }, []);

  return (
    <Box>
      <Header header={"Certificate"} />
      {viewCertificates ? (
        <CertificatesTable certificates={certificates} eventName={eventName} />
      ) : (
        <CommonBodyLayout>
          <Layout>
            <Container>
              {certificatesList?.map((event, index) => (
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
                      <h4>Certificates</h4>
                      <h5
                        onClick={() => {
                          SetViewCertificates(true);
                          setCertificates(event.certificates);
                          setEventName(event.eventHeroName);
                        }}
                      >
                        view certificates
                      </h5>
                    </FooterSessions>
                  </CardFooter>
                </Card>
              ))}
            </Container>
          </Layout>
        </CommonBodyLayout>
      )}
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
    padding: 2rem 0
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
