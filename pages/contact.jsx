import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { colors } from "../styles/colors";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import {
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import "animate.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "white",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white",
  },
});

export default function Events() {
  const [state, handleSubmit] = useForm("xzbwdzwy");
  useEffect(() => {
    document.title = "CONTACT | CFI";
  }, []);
  return (
    <Box sx={{}}>
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
        Contact
      </Typography>
      <Box
        sx={{
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Box
            sx={{
              maxWidth: "1202px",
              width: "100vw",
              margin: "0 auto",
              minHeight: "100svh",
              justifyContent: "flex-start",
              gap: "20px",
              alignItems: "flex-start",
              display: "flex",
              flexDirection: { xs: "column-reverse", lg: "row" },
              // p: { xs: 2, md: 5 },
              paddingTop: "50px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                // height:"100%",
                p: { xs: 2, md: 5 },
                display: "flex",
                flexDirection: "column",
                // border:"2px solid blue",
                justifyContent: "center",
                alignItems:"center",
                m : "10px",
              }}
            >
              <div style={{
                marginBottom : "20px"
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: colors.white,
                  }}
                >
                  <LocationOn /> Address
                </Typography>
                <Typography
                  variant="p"
                  // sx={{ marginLeft: "20px" }}
                  color={colors.white}
                >
                  Jalpaiguri Government Engineering College,
                  <br /> P.O. Denguajhar,
                  <br /> Dist. - Jalpaiguri, 735102,
                  <br /> West Bengal, India
                </Typography>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.1553253187813!2d88.69891387620368!3d26.547277576866936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47ba31ab53699%3A0x7fc0a752ab7572c3!2sCentre%20For%20Innovation%2C%20JGEC!5e0!3m2!1sen!2sin!4v1689749559913!5m2!1sen!2sin"
                  width="360"
                  height="240"
                  style={{ border: 0, maxWidth: "90%", margin: "auto" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                p: { xs: 2, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",  
                alignItems: "center",
                backdropFilter: "blur(10px) ",
                WebkitBackdropFilter: "blur(10px) ",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {state.succeeded ? (
                <>
                  <Typography variant="body1">
                    Thanks for reaching out! Someone will soon get back to you!
                  </Typography>
                </>
              ) : (
                <>
                  <FormControl
                    sx={{ m: 1, minWidth: "100%" }}
                    component={"form"}
                    variant={"outlined"}
                    onSubmit={handleSubmit}
                  >
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Name"
                      id="name"
                      variant="outlined"
                      name="name"
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Email"
                      id="email"
                      type="email"
                      name="email"
                      variant="outlined"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Mobile No"
                      type="tel"
                      id="phno"
                      name="phno"
                      variant="outlined"
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Message"
                      type="text"
                      name="message"
                      id="message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <Button
                      variant="contained"
                      color="inherit"
                      type="submit"
                      disabled={state.submitting}
                      fullWidth
                      sx={{ color: "#9f0037" }}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </>
              )}
            </Box>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
