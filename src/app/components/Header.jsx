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
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import React, { useState } from "react";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For desktop dropdown

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

  // Toggles the Home dropdown in mobile
  const handleHomeClick = (event) => {
    event.stopPropagation();
    setHomeOpen(!homeOpen);
  };

  // Opens Home dropdown menu in desktop
  const handleDesktopHomeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes the Home dropdown menu in desktop
  const handleDesktopMenuClose = () => {
    setAnchorEl(null);
  };

  return (
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
          <Button onClick={handleDesktopHomeClick} color="black">Home</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDesktopMenuClose}
          >
            <MenuItem onClick={handleDesktopMenuClose}>Home 1</MenuItem>
            <MenuItem onClick={handleDesktopMenuClose}>Home 2</MenuItem>
          </Menu>
          <Button color="black">Find a Job</Button>
          <Button color="black">Recruiters</Button>
          <Button color="black">Candidates</Button>
          <Button color="black">Pages</Button>
          <Button color="black">Blog</Button>
          <Button color="black">Contact</Button>
        </Box>

        {/* Register and Sign In Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#424242", marginRight: 1 }}
          >
            Register
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#0B2F9F" }}>
            Sign In
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {/* Home Dropdown in Drawer */}
            <ListItem button onClick={handleHomeClick}>
              <ListItemText primary="Home" />
              {homeOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={homeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <DropDownItem />
              </List>
            </Collapse>

            {[
              "Find a Job",
              "Recruiters",
              "Candidates",
              "Pages",
              "Blog",
              "Contact",
            ].map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Sign In" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

// DropDown items for Home
const DropDownItem = () => (
  <>
    <ListItem button sx={{ pl: 4 }}>
      <ListItemText primary="Home 1" />
    </ListItem>
    <ListItem button sx={{ pl: 4 }}>
      <ListItemText primary="Home 2" />
    </ListItem>
  </>
);
