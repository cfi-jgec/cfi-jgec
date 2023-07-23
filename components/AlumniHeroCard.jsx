import { colors } from "../styles/colors";
import styled from "styled-components";
import {
  Email,
  LocalPhone,
  LinkedIn,
  FacebookRounded,
} from "@mui/icons-material";
export default function AlumniHeroCard(props) {
  return (
    <Member data-aos="fade-in" data-aos-delay={200 + props.i * 100}>
      <Card>
        <HeroImage>
          <Image
            src={props.img || "https://i.imgur.com/VfzpNHY.png"}
            alt="headshot"
          />
        </HeroImage>
        <H>{props.name}</H>
        <D>{props.post}</D>
        <D>{props.batch}</D>
      </Card>
      <Social>
        <a href={"mailto:" + props.email}>
          <Email />
        </a>
        <a href={"tel:" + props.phone}>
          <LocalPhone />
        </a>
        <a href={props.linkedin} target="__blank" rel="noreferrer">
          <LinkedIn />
        </a>
        <a href={props.facebook} target="__blank" rel="noreferrer">
          <FacebookRounded />
        </a>
      </Social>
    </Member>
  );
}

const Social = styled.div`
  width: 0;
  transition: 0.5s;
  border-radius: 0px 2px 2px 0px;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  svg {
    color: transparent;
    height: 0px;
    width: 0px;
    transition: 0.5s;
  }
`;
const Card = styled.div`
  width: 220px;
  height: 250px;
  position: relative;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Member = styled.div`
  height: 250px;
  width: 220px;
  margin: 20px;
  display: flex;
  background-color: #fdfdfdaa;
  backdrop-filter: blur(5px);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 2px;
  &:hover {
    ${Card} {
      width: 170px;
      transition: 0.5s;
    }
    ${Social} {
      width: 50px;
      height: 100%;
      background-color: ${colors.primary};
      svg {
        color: #fdfdfd;
        height: 25px;
        width: 25px;
      }
    }
  }
`;
const HeroImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${colors.primary};
  border-radius: 50%;
`;
const H = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
  color: ${colors.primary};
`;
const D = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1px;
  color: #456789;
  text-align: center;
`;
const Image = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
