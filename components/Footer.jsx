import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import { Facebook, LinkedIn, Instagram, Twitter } from "@mui/icons-material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";

const footerTopItem = [
  {
    title: "students",
    link: "/students",
  },
  {
    title: "alumni",
    link: "/alumni",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "certificates",
    link: "/certificates",
  },
  {
    title: "events",
    link: "/events",
  },
];

const departments = [
  {
    title: "arduino",
    link: "/arduino",
  },
  {
    title: "IOT",
    link: "/iot",
  },
  {
    title: "3d printing",
    link: "/3dPrinting",
  },
  {
    title: "arduino",
    link: "/arduino",
  },
  {
    title: "IOT",
    link: "/iot",
  },
  {
    title: "3d printing",
    link: "/3dPrinting",
  },
];

const midFooterItems = [
  {
    title: "annual reports",
    link: "/annualReports",
  },
  {
    title: "annual reports",
    link: "/annualReports",
  },
  {
    title: "annual reports",
    link: "/annualReports",
  },
  {
    title: "annual reports",
    link: "/annualReports",
  },
  {
    title: "annual reports",
    link: "/annualReports",
  },
  {
    title: "annual reports",
    link: "/annualReports",
  },
];

const socialIcons = [
  {
    Icon: <Facebook />,
    color: "blue",
    link: "https://facebook.com",
  },
  {
    Icon: <Instagram />,
    color: "pink",
    link: "https://facebook.com",
  },
  {
    Icon: <LinkedIn />,
    color: "blue",
    link: "https://facebook.com",
  },
  {
    Icon: <Twitter />,
    color: "blue",
    link: "https://facebook.com",
  },
];

const lastFooterItems = [
  {
    title: "Accessibility",
    link: "/accessibility",
  },
  {
    title: "Privacy Policy",
    link: "/privacyPolicy",
  },
  {
    title: "Term of Use",
    link: "/termOfUse",
  },
  {
    title: "Sitemap",
    link: "/sitemap",
  },
];
export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "20rem",
        backgroundColor: colors.primary,
      }}
    >
      <FooterContainer>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {footerTopItem.map((item, index) => {
            return (
              <ListItem
                sx={{
                  width: "auto",
                  cursor: "pointer",
                  paddingLeft: 0,
                  paddingBottom: 0,
                }}
                key={index}
              >
                {item.title}
              </ListItem>
            );
          })}
        </Box>
        <hr style={{ color: "#d4d4d4", height: "1px", opacity: 0.4 }} />
        <h3 style={{ fontWeight: "500", marginBottom: "0" }}>departments</h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {departments.map((department, index) => {
            return (
              <ListItem
                sx={{
                  width: "auto",
                  cursor: "pointer",
                  opacity: 0.8,
                  paddingLeft: 0,
                  paddingBottom: 0,
                }}
                key={index}
              >
                {department.title}
              </ListItem>
            );
          })}
        </Box>
        <hr style={{ color: "#d4d4d4", height: "1px", opacity: 0.4 }} />
        <LogoContainer>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="logo_light.png" alt="logo" height={80} width={80} />
            <Box
              sx={{
                margin: "0 1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: 0,
                }}
              >
                CFI JGEC
              </Typography>{" "}
              <Typography> Centre for Innovation</Typography>
            </Box>
          </Box>
          <FollowContainer>
            <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
              Follow us on
            </Typography>
            <List sx={{ display: "flex" }}>
              {socialIcons.map((icon, index) => {
                return (
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      opacity: 0.8,
                      color: "white",
                      fontSize: "2rem",
                      padding: "6px .5rem",
                    }}
                    key={index}
                  >
                    {icon.Icon}
                  </ListItem>
                );
              })}
            </List>
          </FollowContainer>
        </LogoContainer>
        <hr style={{ color: "#d4d4d4", height: "1px", opacity: 0.4 }} />
        <LogoContainer>
          <Box>
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                fontSize: "14px",
                padding: 0,
              }}
            >
              {lastFooterItems.map((department, index) => {
                return (
                  <ListItem
                    sx={{
                      width: "auto",
                      opacity: 0.8,
                      padding: 0,
                    }}
                    key={index}
                  >
                    <Typography sx={{ cursor: "pointer" }}>
                      {department.title}
                    </Typography>
                    {index < lastFooterItems.length - 1 ? (
                      <span style={{ padding: "0 10px" }}>|</span>
                    ) : (
                      <></>
                    )}
                  </ListItem>
                );
              })}
            </List>
            <Typography sx={{ fontSize: "16px", opacity: 0.7 }}>
              © 2023 CFI JGEC - All rights reserved
            </Typography>
          </Box>
          <FooterLastContainer>
            <h5>Powered by</h5>
            <h5>CFI web team</h5>
            <h6>
              website last updated on:{" "}
              <span>{new Date().toLocaleString()}</span>
            </h6>
          </FooterLastContainer>
        </LogoContainer>
      </FooterContainer>
    </Box>
  );
}

const Anchor = styled.a`
  color: white;
  margin: 5px;
  svg {
    width: 30px;
    height: 30px;
  }
`;
const FooterContainer = styled.div`
  width: 80%;
  min-height: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #d4d4d4;
  text-transform: capitalize;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;
const FollowContainer = styled.div`
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  width: 12rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-right: 0;
    margin: "0 auto";
  }
`;
const FooterLastContainer = styled.div`
  h5 {
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
    text-align: end;
    margin: 0;
  }
  h6 {
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    margin: .5rem 0;
    width: 100%;
    h5 {
      text-align: start;
    }
    span{
      display: block;
    }
  }
`;
