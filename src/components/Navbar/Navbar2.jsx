import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import MailIcon from "@mui/icons-material/Mail";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./Navbar.css";
import { Input, Paper } from "@mui/material";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <img
            className="logo"
            src="https://www.istore.kg/static/_image/istore_logo.png"
            alt=""
          />
          <Typography
            color="black"
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: 4 }}
          >
            Магазин техники <br /> Apple в Бишкеке
          </Typography>
          <Typography
            color="black"
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: 4 }}
          >
            пр. Манаса, 40 (пер. ул. Киевская)
            <br />
            Пн - Вс 10:00 - 20:00
          </Typography>
          <Typography
            color="black"
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: 5, mr: 6 }}
          >
            +996 (555) 802 000
            <br />
            +996 (505) 802 000
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 530,
              height: 50,
              ml: 5,
              borderRadius: 20,
              padding: "4px -4px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Поиск по всем категориям"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <img src="https://www.istore.kg/static/img/union.svg" alt="" />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
