import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { Link } from 'react-router';

import { Badge, Button, Card, Heading, Text } from '../../elements';

import styles from './SectorsShowcase.module.css';

interface CarouselSlide {
  image: string;
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

interface SectorData {
  id: 'residential' | 'commercial' | 'industrial';
  label: string;
  icon: React.ReactNode;
  slides: CarouselSlide[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    location: string;
    initials: string;
    rating: number;
    projectTag: string;
  };
}

const SECTOR_DATA: SectorData[] = [
  {
    id: 'residential',
    label: 'Residential',
    icon: <HomeWorkIcon sx={{ fontSize: '1.2rem', mr: 1 }} />,
    slides: [
      {
        image: '/residential-hvac.svg',
        badge: 'High-Efficiency Inverter AC',
        title: 'Variable-Speed Inverter Split Systems',
        description:
          'SEER2 ratings up to 24. Modulates cooling down to 25% capacity for whisper-quiet performance and maximum Florida humidity control.',
        specs: ['Up to 24 SEER2 Efficiency', 'Whisper-Quiet 52 dB', '10-Yr Parts Warranty']
      },
      {
        image: '/maintenance-service.svg',
        badge: 'Precision Heat Pumps',
        title: 'Multi-Zone Ductless Mini-Splits',
        description:
          'Independent zoned climate control for Florida sunrooms, home offices, and guest suites without expensive ductwork additions.',
        specs: ['Individual Room Thermostats', 'Zero Duct Energy Loss', 'Hyper-Heating Tech']
      },
      {
        image: '/hero-pattern.svg',
        badge: 'Indoor Air Quality',
        title: 'Hospital-Grade UV & HEPA Filtration',
        description:
          'Eliminates 99.9% of airborne mold spores, volatile organic compounds, and Florida pollen directly within your air handler.',
        specs: ['Airflow Sanitization', 'Continuous Mold Defense', 'Odor Neutralizing']
      }
    ],
    testimonial: {
      quote:
        'When our AC gave out on a Saturday afternoon with family visiting, Above All had a technician at our door in 40 minutes. They diagnosed the issue immediately, showed us the broken part, and had cold air blowing before dinner. Honest, polite, and top-tier workmanship.',
      author: 'Marcus & Sarah Henderson',
      role: 'Homeowners',
      location: 'Palm Beach Gardens, FL',
      initials: 'MH',
      rating: 5,
      projectTag: 'Residential Inverter Heat Pump'
    }
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: <BusinessIcon sx={{ fontSize: '1.2rem', mr: 1 }} />,
    slides: [
      {
        image: '/commercial-hvac.svg',
        badge: 'Rooftop Units (RTU)',
        title: 'Packaged Commercial Rooftop Units (5 – 100+ Tons)',
        description:
          'Engineered for retail plazas, medical offices, and restaurants. Features heavy-gauge galvanized cabinets, economizers, and dual-circuit scroll compressors.',
        specs: ['5 to 100+ Ton Footprints', 'BACnet & BAS Ready', 'Curb Adaptation Available']
      },
      {
        image: '/residential-hvac.svg',
        badge: 'Multi-Tenant VRF',
        title: 'Variable Refrigerant Flow (VRF) Systems',
        description:
          'Simultaneous heating and cooling across multiple zones with extraordinary energy recovery. Eliminates tenant temperature disputes.',
        specs: ['Decentralized Metering', 'Up to 300% Heat Recovery', 'Ultra Compact Footprint']
      },
      {
        image: '/maintenance-service.svg',
        badge: 'Controls & BAS',
        title: 'Building Automation & Remote Monitoring',
        description:
          'Cloud-integrated thermostats, airflow dampers, and predictive diagnostic sensors that notify our dispatch desk before tenants notice a temperature rise.',
        specs: ['24/7 Cloud Telemetry', 'Automated Fault Detection', 'Peak Energy Shaving']
      }
    ],
    testimonial: {
      quote:
        'Above All handles four 25-ton rooftop units across our retail facility. Their preventative maintenance contract eliminated the recurring summer compressor trips that plagued us for years. Whenever we need emergency service, they respond in record time.',
      author: 'David Vance',
      role: 'Director of Property Operations',
      location: 'Boca Raton Commercial Plaza',
      initials: 'DV',
      rating: 5,
      projectTag: 'Packaged Rooftop Units & BAS'
    }
  },
  {
    id: 'industrial',
    label: 'Industrial',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: '1.2rem', mr: 1 }} />,
    slides: [
      {
        image: '/industrial-mechanical.svg',
        badge: 'Heavy Chillers',
        title: 'Water-Cooled Centrifugal & Screw Chillers',
        description:
          'Complete overhaul, tube cleaning, eddy-current testing, and refrigerant recovery for manufacturing, cold storage, and mission-critical data facilities.',
        specs: ['300 to 1,500+ Ton Chillers', 'Vibration Analysis', 'Emergency Chiller Rentals']
      },
      {
        image: '/industrial-mechanical.svg',
        badge: 'Process Piping',
        title: 'ASME Certified Mechanical & Steam Piping',
        description:
          'High-pressure carbon and stainless steel welding for chilled water loops, boiler steam distribution, and chemical cooling processes.',
        specs: ['ASME B31.1 & B31.3 Compliant', 'Certified Pipe Welders', 'Hydronic Balancing']
      },
      {
        image: '/maintenance-service.svg',
        badge: 'Cooling Towers & Boilers',
        title: 'Industrial Cooling Tower Rebuilds & Heat Exchangers',
        description:
          'Fill pack replacement, fan drive overhauls, mechanical seal replacements, and condenser water treatment loops for manufacturing reliability.',
        specs: ['Tower Basin Refurbishment', 'Laser Shaft Alignment', 'Heat Exchanger Descaling']
      }
    ],
    testimonial: {
      quote:
        'Above All re-engineered our plant’s 600-ton hydronic chiller loop with zero unscheduled downtime to our production floor. The caliber of their mechanical pipe fitters and diagnostic crew is second to none in Florida.',
      author: 'Elena Rostova',
      role: 'Industrial Plant Operations Manager',
      location: 'Central Florida Manufacturing Hub',
      initials: 'ER',
      rating: 5,
      projectTag: '600-Ton Industrial Chiller Loop'
    }
  }
];

export const SectorsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'industrial'>(
    'residential'
  );
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({
    residential: 0,
    commercial: 0,
    industrial: 0
  });

  const activeSector = SECTOR_DATA.find(s => s.id === activeTab)!;
  const currentSlideIdx = slideIndices[activeTab] || 0;
  const currentSlide = activeSector.slides[currentSlideIdx];

  const handlePrev = () => {
    setSlideIndices(prev => {
      const cur = prev[activeTab] || 0;
      const total = activeSector.slides.length;
      return { ...prev, [activeTab]: (cur - 1 + total) % total };
    });
  };

  const handleNext = () => {
    setSlideIndices(prev => {
      const cur = prev[activeTab] || 0;
      const total = activeSector.slides.length;
      return { ...prev, [activeTab]: (cur + 1) % total };
    });
  };

  const setSlide = (idx: number) => {
    setSlideIndices(prev => ({ ...prev, [activeTab]: idx }));
  };

  return (
    <section className={styles.sectionRoot} id="sectors-showcase">
      <Container maxWidth="xl">
        <div className={styles.headerWrapper}>
          <Badge label="COMPLETE SECTOR CAPABILITIES" customTone="orange" sx={{ mb: 1.5 }} />
          <Heading variant="h2" gradient="blue" gutterBottom>
            Engineered For Every Environment
          </Heading>
          <Text variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            Explore our specialized solutions, project galleries, and verified client testimonials
            across residential homes, commercial properties, and heavy industrial facilities.
          </Text>
        </div>

        {/* Tab Selection */}
        <div className={styles.tabsContainer} role="tablist" aria-label="HVAC Sectors">
          <div className={styles.tabList}>
            {SECTOR_DATA.map(sector => {
              const isActive = activeTab === sector.id;
              return (
                <button
                  key={sector.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${sector.id}`}
                  id={`tab-${sector.id}`}
                  className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ''}`}
                  onClick={() => setActiveTab(sector.id)}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', height: '100%' }}>
                    {sector.icon}
                    {sector.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Sector Panel */}
        <div
          role="tabpanel"
          id={`panel-${activeSector.id}`}
          aria-labelledby={`tab-${activeSector.id}`}
          className={styles.tabPanel}
          key={activeSector.id}
        >
          <div className={styles.showcaseGrid}>
            {/* Left: Image & Specs Carousel */}
            <Card className={styles.carouselCard} accentBorderTop>
              <div className={styles.carouselMediaWrapper}>
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className={styles.carouselImg}
                />

                {/* Next/Prev Navigation Buttons */}
                <div className={styles.carouselNavOverlay}>
                  <IconButton
                    aria-label="Previous slide"
                    onClick={handlePrev}
                    className={styles.navArrowBtn}
                    size="small"
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Next slide"
                    onClick={handleNext}
                    className={styles.navArrowBtn}
                    size="small"
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </div>
              </div>

              <div className={styles.carouselCaption}>
                <Box sx={{ mb: 1 }}>
                  <Badge label={currentSlide.badge} customTone="cyan" />
                </Box>

                <Heading variant="h5" gutterBottom>
                  {currentSlide.title}
                </Heading>

                <Text variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                  {currentSlide.description}
                </Text>

                <div className={styles.highlightPills}>
                  {currentSlide.specs.map((spec, i) => (
                    <Badge key={i} label={spec} customTone="certified" />
                  ))}
                </div>

                {/* Dot Indicators */}
                <div className={styles.dotsRow} role="tablist" aria-label="Slide indicators">
                  {activeSector.slides.map((_, idx) => (
                    <button
                      key={idx}
                      role="tab"
                      className={`${styles.dot} ${idx === currentSlideIdx ? styles.dotActive : ''}`}
                      onClick={() => setSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-selected={idx === currentSlideIdx}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Right: Sector Specific Testimonial */}
            <Card className={styles.testimonialSideCard} accentBorderTop>
              <Box sx={{ mb: 2 }}>
                <Badge label={activeSector.testimonial.projectTag} customTone="orange" />
              </Box>

              <div className={styles.starGroup} aria-label="5 out of 5 stars rating">
                {[...Array(activeSector.testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
              </div>

              <p className={styles.quoteBlock}>&ldquo;{activeSector.testimonial.quote}&rdquo;</p>

              <div className={styles.clientDetails}>
                <div className={styles.avatarCircle}>{activeSector.testimonial.initials}</div>
                <Box>
                  <Text variant="subtitle2" sx={{ fontWeight: 800 }}>
                    {activeSector.testimonial.author}
                  </Text>
                  <Text variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    {activeSector.testimonial.role} &bull; {activeSector.testimonial.location}
                  </Text>
                </Box>
              </div>

              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(14, 45, 84, 0.08)' }}>
                <Button
                  component={Link}
                  to="/contact"
                  customVariant="primary-orange"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                >
                  Schedule {activeSector.label} Estimate
                </Button>
              </Box>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
