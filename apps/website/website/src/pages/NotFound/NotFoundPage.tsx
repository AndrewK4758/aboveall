import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import React from 'react';
import { Link } from 'react-router';

import { Heading, Text, Button } from '../../elements';

import styles from './NotFoundPage.module.css';

export const NotFoundPage: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <div className={styles.notFoundRoot}>
        <div className={styles.errorCode}>404</div>
        <Heading variant='h3' gutterBottom>
          Page Not Found
        </Heading>
        <Text variant='body1' sx={{ color: 'text.secondary', maxWidth: 460, mb: 4 }}>
          The page you are looking for doesn&apos;t exist or may have been relocated. Our cooling
          and heating systems are running smoothly, though!
        </Text>
        <Button
          component={Link}
          to='/'
          customVariant='primary-orange'
          startIcon={<HomeIcon />}
          size='large'
        >
          Return to Homepage
        </Button>
      </div>
    </Container>
  );
};
