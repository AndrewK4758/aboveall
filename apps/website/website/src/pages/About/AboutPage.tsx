import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

import { ContactForm, EmergencyBanner } from '../../components';
import { Heading, Text, Badge, Card, Button } from '../../elements';

import styles from './AboutPage.module.css';

export const aboutLoader = async () => {
  return {
    milestones: [
      {
        num: '01',
        title: 'Family & Integrity First',
        desc: 'Built on the creed that our reputation is in every weld, brazed joint, and thermostat setpoint. We treat every home and business as our own.',
      },
      {
        num: '02',
        title: 'Cross-Disciplinary Rigor',
        desc: 'Uniquely qualified across residential AC split systems, commercial VRF, and multi-ton industrial chiller loops and steam systems.',
      },
      {
        num: '03',
        title: 'Rapid Florida Dispatch',
        desc: 'Equipped with heavy tooling, nitrogen test kits, and replacement compressors to solve urgent outages around the clock.',
      },
    ],
  };
};

export const AboutPage: React.FC = () => {
  return (
    <div>
      <section className={styles.aboutHero}>
        <Container maxWidth='xl'>
          <Badge label='ABOUT ABOVE ALL HVAC &amp; MECHANICAL' customTone='cyan' sx={{ mb: 1.5 }} />
          <Heading variant='h1' gradient='blue' gutterBottom>
            Because Your Family&apos;s Comfort Comes Above All
          </Heading>
          <Text
            variant='body1'
            sx={{ color: 'text.secondary', maxWidth: 740, mx: 'auto', fontSize: '1.15rem' }}
          >
            We bridge the gap between friendly residential service and heavy industrial mechanical
            engineering. From Palm Beach to statewide Florida facilities.
          </Text>
        </Container>
      </section>

      <EmergencyBanner />

      {/* Story & Philosophy Section */}
      <Container maxWidth='xl'>
        <div className={styles.storyGrid}>
          <div>
            <Badge label='OUR MISSION' customTone='orange' sx={{ mb: 1.5 }} />
            <Heading variant='h2' gutterBottom>
              Setting the High-Water Mark in Mechanical Contracting
            </Heading>
            <Text variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}>
              Founded with a singular commitment to craftsmanship and honesty, Above All HVAC &amp;
              Mechanical was built to solve the most difficult cooling, heating, and piping
              challenges in Florida’s punishing climate.
            </Text>
            <Text variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              Led by Andrew Bove and our master mechanical technicians, our team handles everything
              from single-family smart inverter heat pumps to high-tonnage centrifugal chiller
              plants, process hydronics, and emergency cooling restoration for commercial plazas.
            </Text>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ color: '#00A3E0' }} />
                <Text variant='subtitle2' sx={{ fontWeight: 700 }}>
                  Florida Certified Mechanical Contractor #CAC1820491
                </Text>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ color: '#00A3E0' }} />
                <Text variant='subtitle2' sx={{ fontWeight: 700 }}>
                  EPA Universal 608 Certified Refrigerant Handlers
                </Text>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ color: '#00A3E0' }} />
                <Text variant='subtitle2' sx={{ fontWeight: 700 }}>
                  ASME &amp; AWS Certified Pipe Welding &amp; Fabrication
                </Text>
              </Box>
            </Box>

            <Button component='a' href='#contact-andrew' customVariant='primary-orange'>
              Speak With Leadership
            </Button>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.logoDisplayCard}>
              <img
                src='/logo.png'
                alt='Above All HVAC & Mechanical'
                style={{ width: '100%', height: 'auto', marginBottom: '1.5rem' }}
              />
              <Heading variant='h5' sx={{ color: '#0E2D54', fontWeight: 800 }}>
                Above All Standards
              </Heading>
              <Text variant='body2' sx={{ color: 'text.secondary', mt: 1 }}>
                Serving Florida homeowners, business owners, and plant managers with unmatched
                workmanship.
              </Text>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className={styles.pillarsGrid}>
          <Card className={styles.pillarCard} accentBorderTop>
            <div className={styles.pillarNumber}>01</div>
            <Heading variant='h5' gutterBottom>
              Family &amp; Integrity First
            </Heading>
            <Text variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Our name is our promise: &ldquo;Because Your Family&apos;s Comfort Comes Above
              All.&rdquo; We believe in honest diagnoses, clean work areas, and clear communication
              without high-pressure sales tactics.
            </Text>
          </Card>

          <Card className={styles.pillarCard} accentBorderTop>
            <div className={styles.pillarNumber}>02</div>
            <Heading variant='h5' gutterBottom>
              Engineered Precision
            </Heading>
            <Text variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              We don&apos;t just swap parts; we understand mechanical thermodynamics. Every duct
              calculation, refrigerant weight measurement, and pump curve is calibrated to exact
              manufacturer tolerances.
            </Text>
          </Card>

          <Card className={styles.pillarCard} accentBorderTop>
            <div className={styles.pillarNumber}>03</div>
            <Heading variant='h5' gutterBottom>
              Industrial Grade Capacity
            </Heading>
            <Text variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              From heavy pipe bending to cooling tower refurbishing and rooftop crane lifts, we have
              the tools, bonding, and safety records to perform on any commercial and industrial
              jobsite.
            </Text>
          </Card>
        </div>
      </Container>

      {/* Reusable Contact Form */}
      <section className={styles.formSection} id='contact-andrew'>
        <Container maxWidth='md'>
          <ContactForm
            title='Start A Conversation With Our Team'
            subtitle='Directly received by Andrew Bove and our operational directors.'
          />
        </Container>
      </section>
    </div>
  );
};
