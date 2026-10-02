import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header, Footer } from '../../components';
import styles from './RootLayout.module.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.pageWrapper}>
      <ScrollToTop />
      <Header />
      <main key={pathname} className={`${styles.mainContent} pageTransition`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
