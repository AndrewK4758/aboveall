import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { Link } from 'react-router';

import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerRoot}>
      <Container maxWidth='xl'>
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link to='/' aria-label='Above All HVAC Home'>
              <img
                src='/logo.png'
                alt='Above All HVAC & Mechanical'
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.tagline}>
              Florida’s premier HVAC and mechanical contractor. Specializing in precision
              residential comfort, commercial rooftop/VRF installations, and industrial mechanical
              systems.
            </p>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#38BDF8', mt: 1 }}>
              <VerifiedIcon sx={{ fontSize: '1.1rem' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Licensed &amp; Insured Mechanical Contractor #CAC1820491
              </span>
            </Box>
          </div>

          {/* Core Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Residential AC &amp; Heating
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Commercial Rooftop Units (RTU)
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Industrial Chillers &amp; Boilers
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Mechanical Piping &amp; Hydronics
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  24/7 Emergency Repairs
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Air Quality &amp; Filtration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to='/' className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className={styles.footerLink}>
                  About Us &amp; Our Story
                </Link>
              </li>
              <li>
                <Link to='/services' className={styles.footerLink}>
                  Service Capabilities
                </Link>
              </li>
              <li>
                <Link to='/contact' className={styles.footerLink}>
                  Request Free Estimate
                </Link>
              </li>
              <li>
                <Link to='/contact' className={styles.footerLink}>
                  Emergency Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className={styles.colTitle}>Direct Contact</h4>
            <div className={styles.contactItem}>
              <EmailIcon sx={{ color: '#38BDF8', fontSize: '1.2rem', mt: '2px' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Inquiries &amp; Dispatch</div>
                <a href="mailto:info@aboveallfla.com" className={styles.contactEmailLink}>
                  info@aboveallfla.com
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <PhoneIcon sx={{ color: '#FF7A00', fontSize: '1.2rem', mt: '2px' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>24/7 Hotline</div>
                <a href="tel:14077734719" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  (407) 773-4719
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <LocationOnIcon sx={{ color: '#34D399', fontSize: '1.2rem', mt: '2px' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Florida Service Area</div>
                <span>
                  Serving South &amp; Central Florida Commercial, Industrial &amp; Residential
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>&copy; {CURRENT_YEAR} Above All HVAC &amp; Mechanical. All rights reserved.</div>
          <div>Because Your Family&apos;s Comfort Comes Above All.</div>
        </div>
      </Container>
    </footer>
  );
};
