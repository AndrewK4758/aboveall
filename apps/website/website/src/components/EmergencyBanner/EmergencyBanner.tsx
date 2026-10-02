import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Container from '@mui/material/Container';
import React from 'react';

import styles from './EmergencyBanner.module.css';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className={styles.bannerRoot}>
      <Container maxWidth='xl'>
        <div className={styles.bannerContent}>
          <div className={styles.messageGroup}>
            <WarningAmberIcon sx={{ fontSize: '1.25rem' }} />
            <span>AC Down in Florida Heat? 24/7 Rapid Emergency Response Available Now!</span>
          </div>

          <a
            href='tel:14077734719'
            className={styles.phoneCta}
            aria-label='Call 24/7 Dispatch at (407) 773-4719'
          >
            <PhoneInTalkIcon sx={{ fontSize: '1.05rem' }} />
            <span>Call 24/7 Dispatch: (407) 773-4719</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
