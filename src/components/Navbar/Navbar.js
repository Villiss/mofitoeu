import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
            <NavLink to='/' >
                <img src={logo} alt='logo'/>
            </NavLink>
            <NavLink to='/' >
                Home
            </NavLink>
            <NavLink to='/golfperformanceenergybar' activeStyle>
                Golf Performance Energy Bars
            </NavLink>
            <NavLink to='/nutritiontips' activeStyle>
                Nutrition Tips
            </NavLink>
            <NavLink to='/aboutus' activeStyle>
                About us
            </NavLink>
            <NavLink to='/trade' activeStyle>
                Trade
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact us
            </NavLink>
            <NavLink to='/order' activeStyle>
                Order now
            </NavLink>
        </NavMenu>
        {/* 
            //preklad
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;