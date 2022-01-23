import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, createTheme, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Typography } from "@mui/material";
import logo from '../assets/logo.png'
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
const pages = ['', 'Nutrition Tips', 'About Us', 'Trade', 'Contact', 'Order'];
const links = ['/golfperformanceenergybar', '/nutritiontips', '/aboutus', '/trade', '/contact', '/order'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" elevation={8}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Link to='/golfperformanceenergybar'>
                  <MenuItem key='golfperformanceenergybar' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Golf Performance Energy Bars</Typography>
                  </MenuItem>
                </Link>
                <Link to='/nutritiontips'>
                  <MenuItem key='nutritiontips' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Nutrition Tips</Typography>
                  </MenuItem>
                </Link>
                <Link to='/aboutus'>
                  <MenuItem key='aboutus' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">About Us</Typography>
                  </MenuItem>
                </Link>
                <Link to='/trade'>
                  <MenuItem key='trade' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Trade</Typography>
                  </MenuItem>
                </Link>
                <Link to='/contact'>
                  <MenuItem key='contact' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Contact</Typography>
                  </MenuItem>
                </Link>
                <Link to='/order'>
                  <MenuItem key='order' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Order</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/golfperformanceenergybar'>
                  <Button
                    key='golfperformanceenergybar'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Golf Performance Energy Bars</Typography>
                  </Button>
                </Link>
                <Link to='/nutritiontips'>
                  <Button
                    key='nutritiontips'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Nutrition Tips</Typography>
                  </Button>
                </Link>
                <Link to='/aboutus'>
                  <Button
                    key='aboutus'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">About Us</Typography>
                  </Button>
                </Link>
                <Link to='/trade'>
                  <Button
                    key='trade'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Trade</Typography>
                  </Button>
                </Link>
                <Link to='/contact'>
                  <Button
                    key='contact'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Contact</Typography>
                  </Button>
                </Link>
                <Link to='/order'>
                  <Button
                    key='order'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Order</Typography>
                  </Button>
                </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;