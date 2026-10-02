import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityIcon from '@mui/icons-material/Security';
import Container from '@mui/material/Container';
import React from 'react';

import {
  Hero,
  EmergencyBanner,
  SectorsShowcase,
  FeatureHighlights,
  ContactForm,
} from '../../components';
import { Heading, Text, Badge } from '../../elements';

import styles from './HomePage.module.css';

export interface HomeLoaderData {
  company: {
    name: string;
    phone: string;
    email: string;
  };
}

export const homeLoader = async (): Promise<HomeLoaderData> => {
  return {
    company: {
      name: 'Above All HVAC & Mechanical',
      phone: '(407) 773-4719',
      email: 'info@aboveallfla.com',
    },
  };
};

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <EmergencyBanner />

      {/* Unified Sectors Showcase: Tab set of Residential, Commercial, Industrial with Carousels & Testimonials */}
      <SectorsShowcase />

      {/* Highlights Pillars */}
      <FeatureHighlights />

      {/* Reusable Contact Form Section */}
      <section className={styles.contactSection} id='contact-estimate'>
        <Container maxWidth='xl'>
          <div className={styles.contactGrid}>
            <div>
              <Badge label='DISPATCH &amp; CONSULTATION' customTone='orange' sx={{ mb: 1.5 }} />
              <Heading variant='h2' gutterBottom>
                Connect Directly With Our Master Mechanical Team
              </Heading>
              <Text variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                We do not use call centers or automated deflection. Every request is directly
                reviewed by our leadership and dispatch engineers. We provide rapid diagnosis,
                upfront pricing, and seamless execution.
              </Text>

              <div className={styles.contactBenefits}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIconBox}>
                    <ElectricBoltIcon fontSize='inherit' />
                  </div>
                  <div>
                    <Heading variant='h6' sx={{ fontSize: '1rem', mb: 0.5 }}>
                      Rapid Response Guarantee
                    </Heading>
                    <Text variant='body2' sx={{ color: 'text.secondary' }}>
                      Priority dispatch across Florida for emergency cooling outages and industrial
                      downtime.
                    </Text>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIconBox}>
                    <EngineeringIcon fontSize='inherit' />
                  </div>
                  <div>
                    <Heading variant='h6' sx={{ fontSize: '1rem', mb: 0.5 }}>
                      Master Technicians Only
                    </Heading>
                    <Text variant='body2' sx={{ color: 'text.secondary' }}>
                      NATE-certified, EPA universal licensed, and mechanical engineering
                      specialists.
                    </Text>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIconBox}>
                    <SecurityIcon fontSize='inherit' />
                  </div>
                  <div>
                    <Heading variant='h6' sx={{ fontSize: '1rem', mb: 0.5 }}>
                      100% Satisfaction Warranty
                    </Heading>
                    <Text variant='body2' sx={{ color: 'text.secondary' }}>
                      Backed by comprehensive parts and labor warranties on all mechanical work.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* The single reusable contact form */}
            <ContactForm
              title='Request Service or Free Quote'
              subtitle='All submissions route directly to info@aboveallfla.com.'
            />
          </div>
        </Container>
      </section>
    </div>
  );
};
