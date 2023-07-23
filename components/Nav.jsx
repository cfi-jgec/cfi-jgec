/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useSession, signOut } from "next-auth/react";
import {
  Drawer,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
  Box,
  Container,
  Avatar,
  Button,
  Tooltip,
  IconButton,
  List,
  CssBaseline,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collections,
  ConnectWithoutContact,
  Diversity1,
  Diversity2,
  Event,
  Home,
  Info,
} from "@mui/icons-material";
import { colors } from "../styles/colors";
const pages = [
  {
    name: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info />,
  },
  {
    name: "Events",
    link: "/events",
    icon: <Event />,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: <Collections />,
  },
  {
    name: "Team",
    link: "/team",
    icon: <Diversity1 />,
  },
  {
    name: "Our Alumni",
    link: "/alumni",
    icon: <Diversity2 />,
  },
  {
    name: "Contact Us",
    link: "/contact",
    icon: <ConnectWithoutContact />,
  },
];
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? colors.primary : null,
    },
  });
}
const Appbar = (props) => {
  const router = useRouter();
  // const { data: session, status } = useSession();
  // console.log(session);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleOpenDrawerMenu = () => {
    setDrawerOpen(true);
  };
  const handleCloseDrawerMenu = () => {
    setDrawerOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  if (status === "loading") return <></>;
  return (
    <React.Fragment>
      <CssBaseline />

      <ElevationScroll {...props}>
        <AppBar
          id="navbar"
          position="fixed"
          color="transparent"
          sx={{ padding: "0px !important" }}
          className="animate__animated animate__fadeInDown"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <Link href="/">
                  <img
                    src="/logo_light.png"
                    width="60"
                    height="60"
                    alt="logo"
                  />
                </Link>
              </IconButton>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenDrawerMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: colors.white }} />
                </IconButton>
                <Drawer
                  open={drawerOpen}
                  onClose={handleCloseDrawerMenu}
                  PaperProps={{
                    sx: {
                      backdropFilter: "blur(15px)",
                      WebkitBackdropFilter: "blur(10px) ",
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <List sx={{ width: "250px" }}>
                    {pages.map((page) => (
                      <Link href={page.link} key={page.name}>
                        <ListItem
                          disablePadding
                          onClick={handleCloseDrawerMenu}
                          sx={{
                            backgroundColor:
                              router.pathname === page.link
                                ? colors.white
                                : null,
                          }}
                        >
                          <ListItemButton>
                            <ListItemIcon
                              sx={{
                                color:
                                  router.pathname === page.link
                                    ? colors.primary
                                    : colors.white,
                              }}
                            >
                              {page.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={page.name}
                              primaryTypographyProps={{
                                fontWeight:
                                  router.pathname === page.link
                                    ? "bold"
                                    : "normal",
                              }}
                              sx={{
                                color:
                                  router.pathname === page.link
                                    ? colors.primary
                                    : colors.white,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Drawer>
              </Box>
              <IconButton
                sx={{ display: { xs: "block", md: "none" } }}
                href="/"
              >
                <Link href="/">
                  <img
                    src="/logo_light.png"
                    width="60"
                    height="60"
                    alt="logo"
                  />
                </Link>
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  margin: "auto",
                  width: "fit-content",
                }}
              >
                {pages.map((page, index) => (
                  <Link href={page.link} key={index}>
                    <Button
                      key={page.name}
                      sx={{
                        mx: 2,
                        color:
                          router.pathname === page.link
                            ? colors.primary
                            : colors.white,
                        display: "block",
                        fontWeight: "bold",
                        backgroundColor:
                          router.pathname === page.link ? colors.white : null,
                        "&:hover": {
                          backgroundColor:
                            router.pathname === page.link ? colors.white : "",
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
export default Appbar;
