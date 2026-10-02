import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Container from '@mui/material/Container';
import React from 'react';

import { Heading, Text, Badge } from '../../elements';

import styles from './FeatureHighlights.module.css';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: <SpeedIcon fontSize='inherit' />,
      color: '#EA580C',
      bg: '#FFF7ED',
      title: 'Rapid 24/7 Dispatch',
      desc: 'Florida temperatures can spike in minutes. Our emergency response team arrives fast with fully-stocked trucks.',
    },
    {
      icon: <PrecisionManufacturingIcon fontSize='inherit' />,
      color: '#00A3E0',
      bg: '#F0F9FF',
      title: 'Mechanical Mastery',
      desc: 'From ductless mini-splits to massive 500-ton industrial chillers and precision process piping.',
    },
    {
      icon: <VerifiedUserIcon fontSize='inherit' />,
      color: '#10B981',
      bg: '#F0FDF4',
      title: 'State Certified & Insured',
      desc: 'Fully licensed Florida Mechanical Contractor adhering strictly to ASHRAE, OSHA, and Florida building codes.',
    },
    {
      icon: <PriceCheckIcon fontSize='inherit' />,
      color: '#0E2D54',
      bg: '#F1F5F9',
      title: 'Upfront, Transparent Rates',
      desc: 'No hidden emergency surcharges or surprises. Comprehensive estimates before any wrench turns.',
    },
  ];

  return (
    <section className={styles.sectionRoot}>
      <Container maxWidth='xl'>
        <div className={styles.headerWrapper}>
          <Badge label='THE ABOVE ALL DIFFERENCE' customTone='cyan' sx={{ mb: 1.5 }} />
          <Heading variant='h2' gradient='blue' gutterBottom>
            Why Florida Homes &amp; Enterprises Trust Above All
          </Heading>
          <Text variant='body1' sx={{ color: 'text.secondary' }}>
            Rooted in family values, backed by industrial mechanical precision. We treat every
            cooling and mechanical system as critical infrastructure.
          </Text>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feat, i) => (
            <div key={i} className={styles.featureCard}>
              <div
                className={styles.iconCircle}
                style={{ color: feat.color, backgroundColor: feat.bg }}
              >
                {feat.icon}
              </div>
              <Heading variant='h6' gutterBottom>
                {feat.title}
              </Heading>
              <Text variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                {feat.desc}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
