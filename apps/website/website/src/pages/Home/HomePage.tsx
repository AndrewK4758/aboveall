import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityIcon from '@mui/icons-material/Security';
import Container from '@mui/material/Container';
import React from 'react';
import { useLoaderData } from 'react-router';

import {
  Hero,
  EmergencyBanner,
  ServiceCard,
  FeatureHighlights,
  ContactForm,
  Testimonials,
} from '../../components';
import { Heading, Text, Badge } from '../../elements';

import styles from './HomePage.module.css';

export interface HomeLoaderData {
  featuredServices: Array<{
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    features: string[];
    tone: 'orange' | 'cyan' | 'certified';
  }>;
}

export const homeLoader = async (): Promise<HomeLoaderData> => {
  return {
    featuredServices: [
      {
        title: 'Residential HVAC & Heat Pumps',
        category: 'Residential',
        description:
          'High-efficiency SEER2 inverter air conditioners, variable-speed heat pumps, and precision indoor air filtration tailored for Florida humidity.',
        imageSrc: '/residential-hvac.svg',
        features: [
          'Emergency Same-Day AC Repair',
          'Carrier, Trane & Daikin Inverters',
          'Duct Sanitization & Dehumidification',
          'Quiet Whisper-Cool Technology',
        ],
        tone: 'cyan',
      },
      {
        title: 'Commercial Rooftop & VRF Units',
        category: 'Commercial',
        description:
          'Engineered rooftop package units, split systems, and Variable Refrigerant Flow (VRF) systems for offices, retail centers, and hospitality.',
        imageSrc: '/commercial-hvac.svg',
        features: [
          '5 to 100+ Ton Packaged Systems',
          'Energy-Optimized VRF Zoning',
          'Planned Preventative Maintenance (PPM)',
          'Custom Automated Controls & BAS',
        ],
        tone: 'orange',
      },
      {
        title: 'Industrial Chillers & Piping',
        category: 'Industrial Mechanical',
        description:
          'Heavy industrial cooling towers, centrifugal chillers, steam boilers, and process hydronic piping for manufacturing and manufacturing facilities.',
        imageSrc: '/industrial-mechanical.svg',
        features: [
          'Centrifugal & Screw Chiller Overhauls',
          'Certified Welded Process Piping',
          'Boiler & Cooling Tower Rebuilds',
          'Vibration & Ultrasonic Analysis',
        ],
        tone: 'certified',
      },
    ],
  };
};

export const HomePage: React.FC = () => {
  const data = useLoaderData() as HomeLoaderData;

  return (
    <div>
      <Hero />
      <EmergencyBanner />

      {/* Core Services Section */}
      <section className={styles.servicesSection}>
        <Container maxWidth='xl'>
          <div className={styles.sectionHeader}>
            <Badge label='FULL SPECTRUM HVAC &amp; MECHANICAL' customTone='cyan' sx={{ mb: 1.5 }} />
            <Heading variant='h2' gradient='blue' gutterBottom>
              Precision Solutions For Every Scale
            </Heading>
            <Text variant='body1' sx={{ color: 'text.secondary' }}>
              Whether safeguarding your family&apos;s home comfort or maintaining mission-critical
              industrial chiller loops, our certified engineers deliver absolute reliability.
            </Text>
          </div>

          <div className={styles.servicesGrid}>
            {data.featuredServices.map((svc, i) => (
              <ServiceCard
                key={i}
                title={svc.title}
                category={svc.category}
                description={svc.description}
                imageSrc={svc.imageSrc}
                features={svc.features}
                tone={svc.tone}
              />
            ))}
          </div>
        </Container>
      </section>

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
                      Priority dispatch for emergency cooling outages and industrial downtime.
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
              subtitle='All submissions route directly to our dispatch operations desk.'
            />
          </div>
        </Container>
      </section>

      {/* Client Testimonials */}
      <Testimonials />
    </div>
  );
};
