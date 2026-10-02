import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Container from '@mui/material/Container';
import React from 'react';

import { ContactForm, EmergencyBanner } from '../../components';
import { Heading, Text, Badge, Card } from '../../elements';

import styles from './ContactPage.module.css';

export const contactLoader = async () => {
  return {
    dispatchEmail: 'info@aboveallfla.com',
    hotline: '(407) 773-4719',
    hours: '24/7/365 Emergency Dispatch | Office Hours: Mon-Sat 7:00 AM - 7:00 PM',
    coverage: 'Palm Beach, Broward, Martin, St. Lucie & Greater South/Central Florida',
  };
};

export const ContactPage: React.FC = () => {
  return (
    <div>
      <section className={styles.contactHero}>
        <Container maxWidth='xl'>
          <Badge label='24/7 SERVICE &amp; ESTIMATES' customTone='orange' sx={{ mb: 1.5 }} />
          <Heading variant='h1' gradient='blue' gutterBottom>
            Contact Above All HVAC &amp; Mechanical
          </Heading>
          <Text
            variant='body1'
            sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto', fontSize: '1.15rem' }}
          >
            Immediate dispatch for urgent cooling failure, or schedule a free comprehensive estimate
            for residential, commercial, and industrial installations.
          </Text>
        </Container>
      </section>

      <EmergencyBanner />

      <Container maxWidth='xl'>
        <div className={styles.contactLayout}>
          {/* Direct Details Column */}
          <div className={styles.infoColumn}>
            <div>
              <Heading variant='h3' gutterBottom>
                Direct Operational Lines
              </Heading>
              <Text variant='body1' sx={{ color: 'text.secondary', mb: 3 }}>
                All digital service tickets and inquiries are monitored continuously by leadership.
              </Text>
            </div>

            {/* Email Card */}
            <Card className={styles.infoCard} accentBorderTop>
              <div className={styles.iconBox} style={{ background: '#F0F9FF', color: '#0284C7' }}>
                <EmailIcon fontSize='inherit' />
              </div>
              <div>
                <Heading
                  variant='h6'
                  sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 0.5 }}
                >
                  Direct Operational Email
                </Heading>
                <a href='mailto:info@aboveallfla.com' className={styles.emailLink}>
                  info@aboveallfla.com
                </a>
                <Text variant='caption' sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
                  Monitored for residential quotes, commercial RFP/bids &amp; emergency tickets.
                </Text>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className={styles.infoCard}>
              <div className={styles.iconBox} style={{ background: '#FFF7ED', color: '#C2410C' }}>
                <PhoneInTalkIcon fontSize='inherit' />
              </div>
              <div>
                <Heading
                  variant='h6'
                  sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 0.5 }}
                >
                  24/7 Emergency Dispatch
                </Heading>
                <a href='tel:14077734719' className={styles.phoneLink}>
                  (407) 773-4719
                </a>
                <Text variant='caption' sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
                  Immediate phone triage and service truck rollouts.
                </Text>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className={styles.infoCard}>
              <div className={styles.iconBox} style={{ background: '#F0FDF4', color: '#16A34A' }}>
                <AccessTimeIcon fontSize='inherit' />
              </div>
              <div>
                <Heading
                  variant='h6'
                  sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 0.5 }}
                >
                  Operational Schedule
                </Heading>
                <Text variant='body2' sx={{ fontWeight: 700 }}>
                  Emergency Repair: 24 Hours / 7 Days / 365 Days
                </Text>
                <Text variant='body2' sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Standard Installations &amp; Maintenance: Mon – Sat: 7:00 AM – 7:00 PM
                </Text>
              </div>
            </Card>

            {/* Location Card */}
            <Card className={styles.infoCard}>
              <div className={styles.iconBox} style={{ background: '#F1F5F9', color: '#0E2D54' }}>
                <LocationOnIcon fontSize='inherit' />
              </div>
              <div>
                <Heading
                  variant='h6'
                  sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 0.5 }}
                >
                  Regional Headquarters &amp; Coverage
                </Heading>
                <Text variant='body2' sx={{ fontWeight: 700 }}>
                  Florida Mechanical Contractor
                </Text>
                <Text variant='body2' sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Serving Palm Beach, Broward, Martin, St. Lucie, and commercial/industrial sites
                  statewide.
                </Text>
              </div>
            </Card>
          </div>

          {/* Reusable Contact Form */}
          <div>
            <ContactForm
              title='Send Us Your Service Details'
              subtitle='All details will be sent directly to andrew.bove@aboveallfla.com.'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
