"use client";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Backdrop,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { Suspense, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openLogin = () => setIsLogin((prev) => !prev);
  const openSignUp = () => setIsSignUp((prev) => !prev);

  // Toggles the Drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Custom styling for the desktop menu links
  const linkStyles = {
    textDecoration: "none",
    color: "#000",
    fontWeight: 500,
    margin: "0 10px",
    "&:hover": {
      color: "#0B2F9F",
    },
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo/Brand Name */}
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 600, color: "#16325B" }}
          >
            Studie2Jobb
          </Typography>

          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Centered Menu for Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Button href="/" sx={linkStyles}>
              Home
            </Button>
            <Button href="/job" sx={linkStyles}>
              Find a Job
            </Button>
            <Button href="/recruiter" sx={linkStyles}>
              Recruiters
            </Button>
            <Button href="/candidate" sx={linkStyles}>
              Candidates
            </Button>
            <Button href="/blog" sx={linkStyles}>
              Blog
            </Button>
            <Button href="/contact" sx={linkStyles}>
              Contact
            </Button>
          </Box>

          {/* Register and Sign In Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#424242", marginRight: 1 }}
              onClick={openSignUp}
            >
              SignUp
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0B2F9F", marginRight: 1 }}
              onClick={openLogin}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {[
              { text: "Home", href: "/" },
              { text: "Find a Job", href: "/job" },
              { text: "Recruiters", href: "/recruiter" },
              { text: "Candidates", href: "/candidate" },
              { text: "Blog", href: "/blog" },
              { text: "Contact", href: "/contact" },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => {
                toggleDrawer(false);
                openSignUp();
              }}
            >
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                toggleDrawer(false);
                openLogin();
              }}
            >
              <ListItemText primary="Sign In" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {isLogin && (
        <Suspense fallback={<Backdrop open />}>
          <Login isLogin={isLogin} />
        </Suspense>
      )}
      {isSignUp && (
        <Suspense fallback={<Backdrop open />}>
          <SignUp isSignUp={isSignUp} />
        </Suspense>
      )}
    </>
  );
};

export default Home;
