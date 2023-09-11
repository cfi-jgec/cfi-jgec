/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import "animate.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import ParticleImg from "../components/ParticleImage";
import Typewriter from "typewriter-effect";
import ReactFullpage from "@fullpage/react-fullpage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import collabs from "../data/collab.json";
import testimonials from "../data/testimonial.json";
import {
  StackedCarousel,
  ResponsiveContainer,
  StackedCarouselSlideProps,
} from "react-stacked-center-carousel";
import { useRef } from "react";
const sources = [
  "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xEx79sgVFMRD_gCD0sU8Ab-_BNt_mE3OkY1zAhM0aTEvw9nqcxssW9Ebsx2uDndgNJHJEOV_lpbeFSjgjUCLatKTNdow=w1920-h883",
  "https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/finale-1687365194651.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
  "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
  "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w9TtPy_05n4miOztfovo3Ydz-wr7KRBQmnFGvjBuzSGerZjCd5QOcLqMDZzmuK97LWRWCKEwVHNk5VNAKn2cT8jtQ8=w1920-h883",
];
function Testimonial({ data, dataIndex }) {
  let { content, author, designation } = data[dataIndex];
  return (
    <CardBody>
      <Image src="/assets/openquote.svg" width={50} height={50} alt="Quote" />
      <Typography
        sx={{
          fontSize: "0.85rem",
          padding: "0 4px",
          maxHeight: "80%",
          overflow: "hidden",
          "&:hover": {
            overflow: "auto",
          },
        }}
      >
        {content}
      </Typography>
      <hr />
      <div
        style={{
          fontSize: "0.7rem",
        }}
      >
        <div>{author}</div>
        <div>{designation}</div>
      </div>
    </CardBody>
  );
}
const CardBody = styled.div`
  width: 235px;
  margin: 0 auto;
  height: 350px;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 768px) {
    padding: 10px;
    scale: 0.8;
  }
`;
export default function Home() {
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "HOME | CFI";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const next = () => {
    if (currentSlide === sources.length - 1) setCurrentSlide(0);
    else setCurrentSlide((state) => state + 1);
  };

  const prev = () => {
    if (currentSlide === 0) setCurrentSlide(sources.length - 1);
    else setCurrentSlide((state) => state - 1);
  };
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
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
        <Screen className="section">
          <ImgContainer>
            <Image
              src="/logo_light.png"
              alt="Logo"
              title="CFI"
              placeholder="blur"
              height={300}
              width={300}
              blurDataURL="/blur_data.jpg"
            />
            {/* <ParticleImg src="/logo_light.png" /> */}
          </ImgContainer>
          {/* <Head>CENTRE FOR INNOVATION</Head> */}
          <HeroTitle>
            <HeroText>
              Centre For <br /> Innovation
            </HeroText>

            <Story>
              <Typewriter
                options={{
                  autoStart: true,
                  skipAddStyles: true,
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Innovation leads to evolution, so why not stand hand in hand with it!"
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </Story>
          </HeroTitle>
        </Screen>
        <Screen className="section">
          <ArrowBtn onClick={prev}>
            <ArrowBackIosNew />
          </ArrowBtn>
          <Carousel
            autoPlay
            infiniteLoop
            interval={2500}
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            showIndicators={true}
            transitionTime={750}
            emulateTouch={false}
            slidesToShow={2}
            showArrows={false}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            className="carousel"
          >
            {sources.map((source, index) => (
              <CarouselSlide id={`${index}`} key={index}>
                <StyledImage
                  src={source}
                  alt="@CFI"
                  title={`Gallery Image ${index + 1}`}
                  loading="eager"
                />
              </CarouselSlide>
            ))}
          </Carousel>
          <ArrowBtn onClick={next}>
            <ArrowForwardIos />
          </ArrowBtn>
        </Screen>
        <Screen className="section">
          <AltScr>
            <Head>Our Collaborators</Head>
            <AltContent>
              {collabs.map((collab, index) => (
                <Tooltip title={collab.title} key={index}>
                  <img
                    src={collab.src}
                    alt={`Collaborator ${index + 1}`}
                    loading="eager"
                  />
                </Tooltip>
              ))}
            </AltContent>
          </AltScr>
        </Screen>
        <Screen className="section">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              color: "white",
            }}
          >
            <Head
              style={{
                fontSize: "3rem",
              }}
            >
              Testimonials
            </Head>
            <p
              style={{
                fontSize: "1rem",
              }}
            >
              The Voice of Trust and Satisfaction
            </p>
          </div>
          <div id="testi">
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 3;
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="twitch-button left"
                      size="small"
                      onClick={() => ref.current?.goBack()}
                    >
                      <KeyboardArrowLeft style={{ fontSize: 30 }} />
                    </button>
                    <StackedCarousel
                      ref={carouselRef}
                      slideComponent={Testimonial}
                      slideWidth={parentWidth * 2.5}
                      carouselWidth={parentWidth}
                      data={testimonials}
                      currentVisibleSlide={currentVisibleSlide}
                      maxVisibleSlide={5}
                      useGrabCursor
                    />
                    <button
                      className="twitch-button right"
                      size="small"
                      onClick={() => ref.current?.goNext()}
                    >
                      <KeyboardArrowRight style={{ fontSize: 30 }} />
                    </button>
                  </div>
                );
              }}
            />
          </div>
        </Screen>
      </Layout>
    </Box>
  );
}
const ArrowBtn = styled.button`
  margin: 5px;
  padding: 2px;
  background: transparent;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const AltScr = styled.div`
  background-color: ${colors.white};
  max-width: 100vw;
  margin: 20px auto;
  padding: 50px 0;
  min-height: 20svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const AltContent = styled.div`
  max-width: 1152px;
  width: 100vw;
  margin: 0 auto;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  img {
    max-height: 120px;
    width: auto;
    margin: 20px auto;
    padding: 10px;
    background-color: #fff;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    @media (max-width: 768px) {
      max-height: 80px;
      max-width: 80%;
      height: auto;
      margin: 0 auto;
      padding: 10px;
    }
  }
`;
const Head = styled.div`
  color: ${colors.primary};
  font-size: 2rem;
  width: 100%;
  padding: 0 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;
const Screen = styled.div`
  min-height: 100svh;
  margin: 0 auto;
  margin-top: -76px;
  height: 100%;
  width: 100vw;
  max-width: 1152px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    max-height: 80svh;
    min-height: 100svh;
    margin: 30px auto;
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center;
    margin: 0 auto;
    .carousel {
      max-width: 150svh;
      margin: 0 auto;
      max-height: 75svh;
    }
    @media (max-width: 768px) {
      max-height: 50svh;
      min-height: 40svh;
      margin: 30px auto;
    }
  }
  &:nth-child(3) {
    background-color: ${colors.white};
    max-width: 100vw;
    margin: 20px auto;
    min-height: 50svh;
    height: fit-content;
    z-index: -1;
    color: indigo;
  }
  &:nth-child(4) {
    ${Head} {
      color: ${colors.white} !important;
      flex : 0.4;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      @media (max-width: 1024px) {
        flex : 1;
      }
    }
    #testi {
      flex : 0.6;
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media (max-width: 1024px) {
        flex : 1;
      }
      margin-top: 0px;
      .twitch-button {
        width: 50px;
        height: 50px;
        border: none;
        background-color: transparent;
        color: ${colors.white};
      }
    }
    display: flex;
    height: 100%;
    margin: 0 auto;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      max-height: 60svh;
    }
`;

const ImgContainer = styled.div`
  max-width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`;
const HeroTitle = styled.div`
  max-width: 50%;
  min-width: 340px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Story = styled.div`
  min-height: 200px;
  max-width: 80%;
  width: 500px;
  padding: 2rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 300;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  text-align: center;
  // background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${colors.white};
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 300px;
    font-size: 1.5rem;
  }
`;
const CarouselSlide = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 98vw;
    height: 75vw;
  }
`;
const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
const HeroText = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  font-family: "Big Shoulders Stencil Text", cursive !important;
  letter-spacing: 5px;
  color: ${colors.white};
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
