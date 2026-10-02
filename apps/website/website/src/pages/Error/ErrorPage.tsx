import HomeIcon from '@mui/icons-material/Home';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router';

import { Heading, Text, Button } from '../../elements';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  let errorMessage = 'An unexpected error occurred.';
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Container maxWidth='md' sx={{ py: 12, textAlign: 'center' }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: '#FEE2E2',
          color: '#DC2626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 3,
          fontSize: '2.5rem',
        }}
      >
        <WarningAmberIcon fontSize='inherit' />
      </Box>

      <Heading variant='h2' gutterBottom>
        System Interruption ({statusCode})
      </Heading>

      <Text variant='body1' sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto', mb: 4 }}>
        {errorMessage}
      </Text>

      <Button component={Link} to='/' customVariant='primary-orange' startIcon={<HomeIcon />}>
        Back to Safety (Home)
      </Button>
    </Container>
  );
};
