import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

import { Card, Heading, Text, Badge } from '../../elements';

import styles from './Testimonials.module.css';

export interface TestimonialItem {
  name: string;
  role: string;
  category: string;
  quote: string;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const reviews: TestimonialItem[] = [
    {
      name: 'Marcus Henderson',
      role: 'Homeowner, Palm Beach County',
      category: 'Residential AC',
      quote:
        'Our AC stopped cooling on a Sunday afternoon during a heat wave. Andrew and the Above All team were at our door within 45 minutes, diagnosed a blown capacitor, and had our home back to 71 degrees in no time. Unmatched professionalism!',
      initials: 'MH',
    },
    {
      name: 'David Vance',
      role: 'Facilities Director, Logistics Hub',
      category: 'Commercial Rooftop',
      quote:
        'Above All manages four 25-ton rooftop units for our distribution center. Their preventative maintenance and rapid response when we had a compressor fault saved us from losing thousands in climate-sensitive inventory.',
      initials: 'DV',
    },
    {
      name: 'Elena Rostova',
      role: 'Operations Lead, Beverage Processing Plant',
      category: 'Industrial Mechanical',
      quote:
        'Finding a contractor who genuinely understands industrial process piping and heavy chillers is rare. Above All redesigned our hydronic cooling loop with zero downtime to our production line. Outstanding technical caliber.',
      initials: 'ER',
    },
  ];

  return (
    <section className={styles.sectionRoot}>
      <Container maxWidth='xl'>
        <div className={styles.headerWrapper}>
          <Badge label='VERIFIED CLIENT FEEDBACK' customTone='certified' sx={{ mb: 1.5 }} />
          <Heading variant='h2' gradient='blue' gutterBottom>
            Delivering Comfort Above All Else
          </Heading>
          <Text variant='body1' sx={{ color: 'text.secondary' }}>
            Hear from Florida homeowners, facility directors, and industrial operations leaders.
          </Text>
        </div>

        <div className={styles.testimonialGrid}>
          {reviews.map((rev, i) => (
            <Card key={i} className={styles.cardRoot} accentBorderTop>
              <div className={styles.starRow}>
                {[...Array(5)].map((_, s) => (
                  <StarIcon key={s} fontSize='small' />
                ))}
              </div>

              <p className={styles.quoteText}>&ldquo;{rev.quote}&rdquo;</p>

              <div className={styles.clientMeta}>
                <div className={styles.clientAvatar}>{rev.initials}</div>
                <Box>
                  <Text variant='subtitle2' sx={{ fontWeight: 800 }}>
                    {rev.name}
                  </Text>
                  <Text variant='caption' sx={{ color: 'text.secondary', display: 'block' }}>
                    {rev.role}
                  </Text>
                </Box>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
