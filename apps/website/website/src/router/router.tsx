import { createBrowserRouter, type RouteObject, type ActionFunctionArgs } from 'react-router';

import {
  RootLayout,
  HomePage,
  homeLoader,
  ServicesPage,
  servicesLoader,
  AboutPage,
  aboutLoader,
  ContactPage,
  contactLoader,
  NotFoundPage,
  ErrorPage,
} from '../pages';

export async function contactAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const fullName = String(formData.get('fullName') || '');
  const email = String(formData.get('email') || '');
  const phone = String(formData.get('phone') || '');
  const propertyType = String(formData.get('propertyType') || 'Residential');
  const serviceType = String(formData.get('serviceType') || 'General Service');
  const isEmergency =
    formData.get('isEmergency') === 'true' || formData.get('isEmergency') === 'on';
  const message = String(formData.get('message') || '');

  const mailto = `mailto:info@aboveallfla.com?subject=${encodeURIComponent(
    `[Service Request] ${isEmergency ? 'URGENT - ' : ''}${propertyType} | ${fullName}`,
  )}&body=${encodeURIComponent(
    `Contact: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nProperty: ${propertyType}\nService: ${serviceType}\nEmergency: ${isEmergency ? 'YES' : 'NO'}\n\nDetails:\n${message}`,
  )}`;

  return {
    success: true,
    recipient: 'info@aboveallfla.com',
    mailto,
    submittedAt: new Date().toISOString(),
  };
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homeLoader,
        action: contactAction,
        element: <HomePage />,
      },
      {
        path: 'services',
        loader: servicesLoader,
        action: contactAction,
        element: <ServicesPage />,
      },
      {
        path: 'about',
        loader: aboutLoader,
        action: contactAction,
        element: <AboutPage />,
      },
      {
        path: 'contact',
        loader: contactLoader,
        action: contactAction,
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export function createAppRouter() {
  return createBrowserRouter(routes);
}
