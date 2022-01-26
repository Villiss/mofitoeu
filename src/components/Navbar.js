import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, createTheme, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Typography } from "@mui/material";
import logo from '../assets/logo.png'
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from "i18next";
import cookies from 'js-cookie'

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: 'sk',
    name: 'Slovenský',
    country_code: 'sk'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'en'
  },
  {
    code: 'cz',
    name: 'Český',
    country_code: 'cz'
  },
  // {
  //   code: 'de',
  //   name: 'Deutsch',
  //   country_code: 'de'
  // },
  // {
  //   code: 'hu',
  //   name: 'Magyar',
  //   country_code: 'hu'
  // },
]

const Navbar = () => {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUserSmall, setAnchorElUserSmall] = useState(null);
  const currentLanguageCode = cookies.get('i18next') || 'sk'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)

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

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                    <Typography textAlign="center" variant="button">{t('navbar_home')}</Typography>
                  </MenuItem>
                </Link>
                <Link to='/golfperformanceenergybar' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='golfperformanceenergybar' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">{t('navbar_golf_performance')}</Typography>
                  </MenuItem>
                </Link>
                <Link to='/nutritiontips' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='nutritiontips' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">{t('navbar_nutrition_tips')}</Typography>
                  </MenuItem>
                </Link>
                <Link to='/aboutus' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='aboutus' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">{t('navbar_about_us')}</Typography>
                  </MenuItem>
                </Link>
                <Link to='/trade' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='trade' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">{t('navbar_trade')}</Typography>
                  </MenuItem>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem key='contact' onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">{t('navbar_contact')}</Typography>
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
                  {languages.map(({code, name, country_code}) => (
                    <MenuItem key={country_code} onClick={handleCloseUserMenuSmall}>
                      <Button onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                      {name}
                      </Button>
                    </MenuItem>
                    ))}
                  </Menu>
                </MenuItem>
              </Menu>
            </Box>


            
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button
                    key='home'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_home')}</Typography>
                  </Button>
                </Link>
                <Link to='/golfperformanceenergybar' style={{ textDecoration: 'none' }}>
                  <Button
                    key='golfperformanceenergybar'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_golf_performance')}</Typography>
                  </Button>
                </Link>
                <Link to='/nutritiontips' style={{ textDecoration: 'none' }}>
                  <Button
                    key='nutritiontips'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_nutrition_tips')}</Typography>
                  </Button>
                </Link>
                <Link to='/aboutus' style={{ textDecoration: 'none' }}>
                  <Button
                    key='aboutus'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_about_us')}</Typography>
                  </Button>
                </Link>
                <Link to='/trade' style={{ textDecoration: 'none' }}>
                  <Button
                    key='trade'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_trade')}</Typography>
                  </Button>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                  <Button
                    key='contact'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography variant="button">{t('navbar_contact')}</Typography>
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
                {languages.map(({code, name, country_code}) => (
                  <MenuItem key={country_code} onClick={handleCloseUserMenu}>
                    <Button onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                      {name}
                    </Button>
                  </MenuItem>
                ))}
                </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;