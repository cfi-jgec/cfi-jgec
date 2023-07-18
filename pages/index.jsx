import { useEffect, useState } from "react";
import "animate.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import ParticleImg from "../components/ParticleImage";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "HOME | EDC";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <Layout>
      <Screen>
        {/* <ImgContainer>
          <Image
            src="/logo_light.png"
            alt="Logo"
            title="CFI"
            placeholder="blur"
            height={300}
            width={300}
            blurDataURL="/blur_data.jpg"
          />
          <ParticleImg src="/logo_light.png" />
        </ImgContainer> */}
        <Head>CENTRE FOR INNOVATION</Head>
        <Story>
          We are delighted to introduce you to a vibrant community of technology
          enthusiasts and problem solvers. The Centre for Innovation serves as a
          technical club, dedicated to fostering innovation, creativity, and
          technical excellence among our students.
        </Story>
      </Screen>
    </Layout>
  );
}

const Screen = styled.div`
  margin-top: -76px;
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: calc(93vh);
    justify-content: space-evenly;
  }
`;
const Head = styled.div`
  color: ${colors.white};
  font-size: 2rem;
  margin: 50px 0px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;
const ImgContainer = styled.div`
  max-width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    display: none;
    width: 80%;
  }
`;
const Story = styled.div`
  max-width: 50%;
  height: 50%;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${colors.white};
  @media (max-width: 768px) {
    width: 100%;
    min-width: 300px;
    height: 100%;
    font-size: 0.8rem;
  }
`;
