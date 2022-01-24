import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, createTheme, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Typography } from "@mui/material";
import logo from '../assets/logo.png'
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Flags from 'country-flag-icons/react/3x2'
import LanguageIcon from '@mui/icons-material/Language';

import { Link } from "react-router-dom";
const pages = ['', 'Nutrition Tips', 'About Us', 'Trade', 'Contact'];
const links = ['/golfperformanceenergybar', '/nutritiontips', '/aboutus', '/trade', '/contact'];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUserSmall, setAnchorElUserSmall] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenuSmall = (event) => {
    setAnchorElUserSmall(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenuSmall = () => {
    setAnchorElUserSmall(null);
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
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='home' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Home</Typography>
                  </MenuItem>
                </Link>
                <Link to='/golfperformanceenergybar' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='golfperformanceenergybar' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Golf Performance Energy Bars</Typography>
                  </MenuItem>
                </Link>
                <Link to='/nutritiontips' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='nutritiontips' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Nutrition Tips</Typography>
                  </MenuItem>
                </Link>
                <Link to='/aboutus' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='aboutus' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">About Us</Typography>
                  </MenuItem>
                </Link>
                <Link to='/trade' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='trade' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Trade</Typography>
                  </MenuItem>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='contact' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">Contact</Typography>
                  </MenuItem>
                </Link>
                <MenuItem>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenuSmall}
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
                  <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUserSmall}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElUserSmall)}
                  onClose={handleCloseUserMenuSmall}
                >
                    <MenuItem onClick={handleCloseUserMenuSmall}>
                      <IconButton>
                      SK
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenuSmall}>
                      <IconButton>
                      EN
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenuSmall}>
                      <IconButton>
                      DE
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenuSmall}>
                      <IconButton>
                      CZ
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenuSmall}>
                      <IconButton>
                      HU
                      </IconButton>
                    </MenuItem>
                  </Menu>
                </MenuItem>
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
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button
                    key='home'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Home</Typography>
                  </Button>
                </Link>
                <Link to='/golfperformanceenergybar' style={{ textDecoration: 'none' }}>
                  <Button
                    key='golfperformanceenergybar'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Golf Performance Energy Bars</Typography>
                  </Button>
                </Link>
                <Link to='/nutritiontips' style={{ textDecoration: 'none' }}>
                  <Button
                    key='nutritiontips'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Nutrition Tips</Typography>
                  </Button>
                </Link>
                <Link to='/aboutus' style={{ textDecoration: 'none' }}>
                  <Button
                    key='aboutus'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">About Us</Typography>
                  </Button>
                </Link>
                <Link to='/trade' style={{ textDecoration: 'none' }}>
                  <Button
                    key='trade'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Trade</Typography>
                  </Button>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                  <Button
                    key='contact'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">Contact</Typography>
                  </Button>
                </Link>
                
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
                  <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                
                  <MenuItem onClick={handleCloseUserMenu}>SK</MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>EN</MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>DE</MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>CZ</MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>HU</MenuItem>
                </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;