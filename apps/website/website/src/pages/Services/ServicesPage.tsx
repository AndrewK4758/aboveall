import HvacIcon from '@mui/icons-material/AcUnit';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FactoryIcon from '@mui/icons-material/Factory';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

import { ContactForm, EmergencyBanner } from '../../components';
import { Heading, Text, Badge, Button } from '../../elements';

import styles from './ServicesPage.module.css';

export interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  specs: string[];
  tone: 'cyan' | 'orange' | 'certified';
}

export interface ServicesLoaderData {
  services: ServiceDetail[];
}

export const servicesLoader = async (): Promise<ServicesLoaderData> => {
  return {
    services: [
      {
        id: 'residential',
        category: 'Residential HVAC',
        title: 'Residential Cooling, Heating & Air Purification',
        subtitle: 'High-SEER2 Split Systems, Inverter Heat Pumps & Multi-Zone Mini Splits',
        description:
          'Florida’s coastal heat and year-round humidity require advanced climate engineering. We specialize in variable-speed heat pumps, complete duct redesigns, and whole-home dehumidification systems that cut power bills while preserving total indoor comfort.',
        imageSrc: '/residential-hvac.svg',
        specs: [
          'High SEER2 Inverter Air Conditioners',
          'Ductless Multi-Zone Mini-Splits',
          'Whole-Home UV & HEPA Air Filtration',
          'Smart Thermostat & Zoning Integration',
          'Emergency Freon Leak Detection',
          'Precision Evaporator Coil Replacement',
        ],
        tone: 'cyan',
      },
      {
        id: 'commercial',
        category: 'Commercial Mechanical',
        title: 'Commercial Packaged Rooftops (RTU) & VRF Systems',
        subtitle: 'Engineered For Retail, Medical, Corporate, & Multi-Family Facilities',
        description:
          'Commercial spaces cannot afford downtime. Above All engineers, installs, and services rooftop packaged systems, chilled water air handlers, and Variable Refrigerant Flow (VRF) networks with full Building Automation System (BAS) integration.',
        imageSrc: '/commercial-hvac.svg',
        specs: [
          'Packaged Rooftops (3 to 100+ Tons)',
          'Variable Refrigerant Flow (VRF)',
          'Automated BAS / BACnet Controls',
          'Planned Maintenance Service Agreements',
          'Commercial Kitchen Makeup Air (MUA)',
          'VAV Terminal Boxes & Dampers',
        ],
        tone: 'orange',
      },
      {
        id: 'industrial',
        category: 'Industrial Systems',
        title: 'Industrial Chillers, Boilers & Process Piping',
        subtitle: 'Heavy Mechanical Systems For Manufacturing, Cold Storage, & Processing Plants',
        description:
          'Our mechanical contractors deliver certified industrial solutions: from water-cooled centrifugal chillers and open cooling towers to steam boilers and welded stainless/carbon steel process hydronics.',
        imageSrc: '/industrial-mechanical.svg',
        specs: [
          'Centrifugal, Screw & Scroll Chillers',
          'Cooling Tower Rebuilds & Water Treatment',
          'High/Low Pressure Steam Boilers',
          'Certified Welded Mechanical Piping',
          'Pump Alignment & Hydronic Balancing',
          '24/7 Mission-Critical Plant Support',
        ],
        tone: 'certified',
      },
      {
        id: 'maintenance',
        category: 'Preventative Maintenance',
        title: 'Precision 21-Point Tune-Ups & Asset Protection',
        subtitle: 'Prolong Equipment Lifespan, Reduce Energy Draw & Prevent Breakdowns',
        description:
          'Routine maintenance is the key to preventing catastrophic summer compressor failure in Florida. Our multi-point comprehensive inspection includes electrical diagnostics, refrigerant charge analysis, airflow balancing, and antimicrobial coil treatment.',
        imageSrc: '/maintenance-service.svg',
        specs: [
          'Compressor Amperage Diagnostics',
          'Subcooling & Superheat Calibration',
          'Condensate Drain Clear & Safety Switches',
          'Electrical Contactor & Capacitor Testing',
          'Blower Wheel & Evaporator Sanitizing',
          'Comprehensive Asset Condition Reports',
        ],
        tone: 'cyan',
      },
    ],
  };
};

export const ServicesPage: React.FC = () => {
  const { services } = useLoaderData() as ServicesLoaderData;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices =
    activeFilter === 'all' ? services : services.filter(s => s.id === activeFilter);

  return (
    <div>
      <section className={styles.headerSection}>
        <Container maxWidth='xl'>
          <Badge label='FULL SCOPE CONTRACTOR' customTone='orange' sx={{ mb: 1.5 }} />
          <Heading variant='h1' gradient='blue' gutterBottom>
            Mechanical &amp; HVAC Service Portfolio
          </Heading>
          <Text variant='body1' sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            From single-family home cooling to multi-megawatt industrial chiller plants, our
            certified contractors have the heavy machinery and technical expertise to handle any
            challenge.
          </Text>

          <div className={styles.categoryNav}>
            <Button
              customVariant={activeFilter === 'all' ? 'primary-orange' : 'outline'}
              className={styles.categoryBtn}
              onClick={() => setActiveFilter('all')}
            >
              All Capabilities
            </Button>
            <Button
              customVariant={activeFilter === 'residential' ? 'primary-orange' : 'outline'}
              className={styles.categoryBtn}
              onClick={() => setActiveFilter('residential')}
              startIcon={<HvacIcon />}
            >
              Residential HVAC
            </Button>
            <Button
              customVariant={activeFilter === 'commercial' ? 'primary-orange' : 'outline'}
              className={styles.categoryBtn}
              onClick={() => setActiveFilter('commercial')}
              startIcon={<ApartmentIcon />}
            >
              Commercial Rooftops
            </Button>
            <Button
              customVariant={activeFilter === 'industrial' ? 'primary-orange' : 'outline'}
              className={styles.categoryBtn}
              onClick={() => setActiveFilter('industrial')}
              startIcon={<FactoryIcon />}
            >
              Industrial &amp; Chillers
            </Button>
            <Button
              customVariant={activeFilter === 'maintenance' ? 'primary-orange' : 'outline'}
              className={styles.categoryBtn}
              onClick={() => setActiveFilter('maintenance')}
              startIcon={<BuildIcon />}
            >
              Maintenance Plans
            </Button>
          </div>
        </Container>
      </section>

      <EmergencyBanner />

      {/* Services List */}
      <Container maxWidth='xl'>
        {filteredServices.map((svc, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={svc.id} className={styles.serviceSection} id={svc.id}>
              <div className={styles.serviceGrid}>
                {/* Content */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <Badge label={svc.category} customTone={svc.tone} sx={{ mb: 1.5 }} />
                  <Heading variant='h2' gutterBottom>
                    {svc.title}
                  </Heading>
                  <Text variant='h6' sx={{ color: '#00A3E0', fontWeight: 600, mb: 2 }}>
                    {svc.subtitle}
                  </Text>
                  <Text variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                    {svc.description}
                  </Text>

                  <div className={styles.specList}>
                    {svc.specs.map((sp, idx) => (
                      <div key={idx} className={styles.specItem}>
                        <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#10B981', mt: '2px' }} />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    component='a'
                    href='#service-inquiry'
                    customVariant={svc.tone === 'orange' ? 'primary-orange' : 'primary-navy'}
                  >
                    Request Quote for {svc.category}
                  </Button>
                </div>

                {/* Visual */}
                <div style={{ order: isEven ? 2 : 1 }} className={styles.serviceVisual}>
                  <img
                    src={svc.imageSrc}
                    alt={svc.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Container>

      {/* In-Page Reusable Contact Form */}
      <section className={styles.formWrapperSection} id='service-inquiry'>
        <Container maxWidth='md'>
          <ContactForm
            title='Book Your Service or Consultation'
            subtitle='Tell us about your facility or home requirements. Dispatched directly to andrew.bove@aboveallfla.com.'
            defaultService='Installation/Replacement'
          />
        </Container>
      </section>
    </div>
  );
};
