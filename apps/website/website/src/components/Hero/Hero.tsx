import React from 'react';
import { Link } from 'react-router';
import Container from '@mui/material/Container';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Button, Heading, Badge } from '../../elements';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <Container maxWidth="xl">
        <div className={styles.heroGrid}>
          {/* Text Content */}
          <div>
            <div className={styles.badgeRow}>
              <Badge label="24/7 RAPID DISPATCH" customTone="emergency" />
              <Badge label="LICENSED &amp; INSURED" customTone="certified" />
              <Badge label="RESIDENTIAL TO INDUSTRIAL" customTone="orange" />
            </div>

            <Heading variant="h1" className={styles.title}>
              Engineering Total Climate &amp;{' '}
              <span className={styles.accentOrange}>Mechanical</span> Precision.
            </Heading>

            <p className={styles.description}>
              From residential high-efficiency heat pumps to commercial rooftop VRF and complex
              industrial mechanical systems. Florida’s trusted mechanical contractor for home,
              business, and industrial facilities.
            </p>

            <div className={styles.ctaGroup}>
              <Button
                component={Link}
                to="/contact"
                customVariant="primary-orange"
                size="large"
                glow
                startIcon={<CalendarMonthIcon />}
              >
                Request Free Estimate
              </Button>

              <Button
                component="a"
                href="tel:14077734719"
                customVariant="primary-navy"
                size="large"
                startIcon={<PhoneInTalkIcon />}
                aria-label="Call 24/7 Dispatch at (407) 773-4719"
              >
                (407) 773-4719
              </Button>
            </div>

            {/* Stats Row */}
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7/365</span>
                <span className={styles.statLabel}>Emergency Response</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Family &amp; Client First</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15+ Yrs</span>
                <span className={styles.statLabel}>Mechanical Expertise</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase with Larger Logo */}
          <div className={styles.heroVisual}>
            <div className={styles.heroLogoShowcase}>
              <img
                src="/logo.png"
                alt="Above All HVAC & Mechanical Logo"
                className={styles.largeLogoImg}
              />
              <div className={styles.heroTaglinePill}>
                Because Your Family&apos;s Comfort Comes Above All
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
