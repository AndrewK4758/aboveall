import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router';

import { createAppRouter } from '../router/router';
import { AppThemeProvider } from '../theme/ThemeContext';

export function App() {
  const router = useMemo(() => createAppRouter(), []);

  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
