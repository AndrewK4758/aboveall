import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router';

import { Button, ThemeToggle, Badge } from '../../elements';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position='sticky' elevation={0} className={styles.appBar}>
      <Container maxWidth='xl' disableGutters>
        <Toolbar className={styles.toolbar}>
          {/* Brand Logo */}
          <Link to='/' className={styles.logoWrapper} aria-label='Above All HVAC Home'>
            <img
              src='/logo.png'
              alt='Above All HVAC & Mechanical Logo'
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles.navLinks}>
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          {/* Action Group: Phone, CTA, Theme Toggle */}
          <Box className={styles.actionsGroup}>
            {/* 24/7 Phone Dispatch */}
            <a
              href='tel:14077734719'
              className={styles.emergencyPhone}
              aria-label='Call 24/7 HVAC Dispatch at (407) 773-4719'
            >
              <PhoneInTalkIcon sx={{ fontSize: '1.1rem' }} />
              <Box sx={{ display: { xs: 'none', lg: 'inline' } }}>(407) 773-4719</Box>
            </a>

            {/* Quick Quote Button */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                component={Link}
                to='/contact'
                customVariant='primary-orange'
                size='small'
                startIcon={<CalendarMonthIcon />}
              >
                Request Service
              </Button>
            </Box>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label='open navigation drawer'
                onClick={() => setMobileOpen(true)}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { className: styles.drawerPaper } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src='/logo.png' alt='Above All HVAC' style={{ height: 40 }} />
          <IconButton onClick={() => setMobileOpen(false)} aria-label='close drawer'>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Badge label='24/7 EMERGENCY DISPATCH' customTone='emergency' />
        </Box>

        <Box className={styles.drawerList}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.navLinkActive : ''}`.trim()
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}

          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              component={Link}
              to='/contact'
              onClick={() => setMobileOpen(false)}
              customVariant='primary-orange'
              fullWidth
            >
              Request Free Estimate
            </Button>
            <Button
              component='a'
              href='tel:14077734719'
              customVariant='primary-navy'
              fullWidth
              startIcon={<PhoneInTalkIcon />}
            >
              Call (407) 773-4719
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
