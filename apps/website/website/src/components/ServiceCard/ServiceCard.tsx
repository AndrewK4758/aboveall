import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router';

import { Card, Heading, Text, Button, Badge } from '../../elements';

import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  features: string[];
  ctaLabel?: string;
  tone?: 'orange' | 'cyan' | 'certified' | 'emergency';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  category,
  description,
  imageSrc,
  features,
  ctaLabel = 'Schedule Service',
  tone = 'cyan',
}) => {
  return (
    <Card className={styles.cardContainer} accentBorderTop>
      <div className={styles.imgWrapper}>
        <img src={imageSrc} alt={title} className={styles.serviceImg} />
        <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
          <Badge label={category} customTone={tone} />
        </Box>
      </div>

      <div className={styles.contentWrapper}>
        <Heading variant='h5' gutterBottom>
          {title}
        </Heading>

        <Text variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          {description}
        </Text>

        <ul className={styles.featureList}>
          {features.map((feat, i) => (
            <li key={i} className={styles.featureItem}>
              <CheckCircleIcon sx={{ fontSize: '1rem', color: '#10B981' }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button
            component={Link}
            to='/contact'
            customVariant={tone === 'orange' ? 'primary-orange' : 'primary-navy'}
            fullWidth
            endIcon={<ArrowForwardIcon />}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
};
