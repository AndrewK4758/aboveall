import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Badge, Button, Card, Heading, Text } from '../../elements';

import styles from './SectorsShowcase.module.css';

export interface SectorTestimonialSlide {
  id: string;
  image: string;
  imageAlt: string;
  projectBadge: string;
  projectSpecs: string[];
  quote: string;
  clientName: string;
  clientRole: string;
  companyOrLocation: string;
  rating: number;
  verifiedBadge: string;
  avatarInitials: string;
}

export interface SectorData {
  id: 'residential' | 'commercial' | 'industrial';
  label: string;
  headline: string;
  icon: React.ReactNode;
  slides: SectorTestimonialSlide[];
}

export const SECTOR_DATA: SectorData[] = [
  {
    id: 'residential',
    label: 'Residential',
    headline: 'Homeowners Trust Above All For Florida Comfort & Speed',
    icon: <HomeWorkIcon sx={{ fontSize: '1.25rem', mr: 1 }} />,
    slides: [
      {
        id: 'res-1',
        image: '/residential-hvac.svg',
        imageAlt: 'High-Efficiency Inverter Heat Pump in Palm Beach Gardens',
        projectBadge: 'Variable-Speed Inverter Replacement | Palm Beach Gardens, FL',
        projectSpecs: [
          '22 SEER2 Inverter Split System',
          'Whisper-Quiet 52 dB',
          '10-Yr Parts & Labor',
        ],
        quote:
          'When our AC gave out on a Saturday afternoon with family visiting, Above All had a technician at our door in 40 minutes. They diagnosed the issue immediately, showed us the broken part, and had cold air blowing before dinner. Honest, polite, and top-tier workmanship.',
        clientName: 'Marcus & Sarah Henderson',
        clientRole: 'Homeowners',
        companyOrLocation: 'Palm Beach Gardens, FL',
        rating: 5,
        verifiedBadge: 'Verified Florida Homeowner',
        avatarInitials: 'MH',
      },
      {
        id: 'res-2',
        image: '/maintenance-service.svg',
        imageAlt: 'Multi-Zone Climate Architecture in Jupiter Waterfront Home',
        projectBadge: 'Multi-Zone Ductless Mini-Splits | Jupiter Waterfront',
        projectSpecs: [
          'Multi-Room Independent Zones',
          'Zero Duct Energy Loss',
          'Hyper-Heat Florida Humidity Defense',
        ],
        quote:
          'Our master wing was consistently 4 degrees hotter than the rest of the house despite multiple quotes from other companies. Above All engineered a dedicated multi-zone mini-split system that finally balanced our humidity and eliminated the hot spots. Outstanding engineering.',
        clientName: 'Dr. Aris Thorne',
        clientRole: 'Private Residence Owner',
        companyOrLocation: 'Jupiter, FL',
        rating: 5,
        verifiedBadge: 'Verified Florida Homeowner',
        avatarInitials: 'AT',
      },
      {
        id: 'res-3',
        image: '/hero-pattern.svg',
        imageAlt: 'Whole-Home Hospital Grade UV Filtration in Windermere',
        projectBadge: 'Indoor Air Quality & UV Sanitization | Windermere Estate',
        projectSpecs: [
          'Hospital-Grade UV-C Sterilization',
          'Continuous Mold Defense',
          'MERV 16 Electrostatic Media',
        ],
        quote:
          'With severe allergies and Florida humidity, indoor air quality was non-negotiable for our family. Above All redesigned our return filtration and integrated whole-home UV sanitization. The air freshness was noticeable within 24 hours of installation.',
        clientName: 'Elena & David Martinez',
        clientRole: 'Homeowners',
        companyOrLocation: 'Windermere, FL',
        rating: 5,
        verifiedBadge: 'Verified Florida Homeowner',
        avatarInitials: 'DM',
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    headline: 'Engineered Rooftops & VRF Zoned Comfort For Florida Business',
    icon: <BusinessIcon sx={{ fontSize: '1.25rem', mr: 1 }} />,
    slides: [
      {
        id: 'com-1',
        image: '/commercial-hvac.svg',
        imageAlt: 'Packaged Commercial Rooftop Units in Boca Raton Retail Plaza',
        projectBadge: 'Four 25-Ton Packaged RTU Deployment | Boca Raton Plaza',
        projectSpecs: [
          '100-Ton Total Zoned Footprint',
          'BACnet Cloud Automation',
          'Custom Curb Adaptations',
        ],
        quote:
          'Above All handles four 25-ton rooftop units across our retail facility. Their preventative maintenance contract eliminated the recurring summer compressor trips that plagued us for years. Whenever we need emergency service, they respond in record time.',
        clientName: 'David Vance',
        clientRole: 'Director of Property Operations',
        companyOrLocation: 'Boca Raton Commercial Plaza',
        rating: 5,
        verifiedBadge: 'Verified Commercial Contract',
        avatarInitials: 'DV',
      },
      {
        id: 'com-2',
        image: '/residential-hvac.svg',
        imageAlt: 'Multi-Story VRF Heat Recovery System in Fort Lauderdale Medical Pavilion',
        projectBadge: 'Healthcare VRF Simultaneous Cooling & Heating | Fort Lauderdale',
        projectSpecs: [
          'Multi-Tenant Energy Metering',
          'Simultaneous Heat Recovery',
          'Ultra-Low Sound Decibel Footprint',
        ],
        quote:
          'In a medical clinic, climate control is critical to patient comfort and sensitive diagnostic equipment calibration. Above All installed our Variable Refrigerant Flow system on time and under budget. Their ongoing mechanical monitoring gives us complete peace of mind.',
        clientName: 'Patricia Sterling, RN',
        clientRole: 'Facility Director',
        companyOrLocation: 'Coastal Specialty Medical Pavilion',
        rating: 5,
        verifiedBadge: 'Verified Commercial Contract',
        avatarInitials: 'PS',
      },
      {
        id: 'com-3',
        image: '/maintenance-service.svg',
        imageAlt: 'Automated Building Controls & Telemetry in Orlando Tech Center',
        projectBadge: 'Predictive BAS Climate Telemetry | Orlando Tech Center',
        projectSpecs: [
          '24/7 Cloud Fault Diagnostics',
          'Demand-Controlled Ventilation',
          'Peak Energy Load Optimization',
        ],
        quote:
          'Their automated controls integration allows us to monitor zone performance across 85,000 square feet from a single dashboard. When a chilled water valve seized last August, their dispatch desk had a tech en route before our building temp spiked.',
        clientName: 'Gregory Chen',
        clientRole: 'Chief Building Engineer',
        companyOrLocation: 'Apex Corporate Center',
        rating: 5,
        verifiedBadge: 'Verified Commercial Contract',
        avatarInitials: 'GC',
      },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial',
    headline: 'Mission-Critical Chillers, Process Piping & Industrial Loops',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: '1.25rem', mr: 1 }} />,
    slides: [
      {
        id: 'ind-1',
        image: '/industrial-mechanical.svg',
        imageAlt: '600-Ton Centrifugal Industrial Chiller Overhaul in Central Florida',
        projectBadge: '600-Ton Chiller Loop Rebuild | Manufacturing Hub',
        projectSpecs: [
          'Eddy-Current Tube Testing',
          'Vibration Spectral Analysis',
          'Zero Factory Downtime Executed',
        ],
        quote:
          'Above All re-engineered our plant’s 600-ton hydronic chiller loop with zero unscheduled downtime to our production floor. The caliber of their mechanical pipe fitters and diagnostic crew is second to none in Florida.',
        clientName: 'Elena Rostova',
        clientRole: 'Industrial Plant Operations Manager',
        companyOrLocation: 'Central Florida Manufacturing Hub',
        rating: 5,
        verifiedBadge: 'Verified Industrial Facility',
        avatarInitials: 'ER',
      },
      {
        id: 'ind-2',
        image: '/industrial-mechanical.svg',
        imageAlt: 'Certified High-Pressure Welded Process Steam Piping in Tampa Facility',
        projectBadge: 'ASME B31.1 High-Pressure Steam Piping | Tampa Bay',
        projectSpecs: [
          'Certified ASME Pipe Welders',
          'X-Ray Inspected Welds',
          'Hydronic Loop Balancing',
        ],
        quote:
          'We required certified high-pressure mechanical piping for our process steam lines. Above All delivered flawless welded joints, passed third-party radiographic testing on the first pass, and complied strictly with all OSHA and ASME codes.',
        clientName: 'Thomas Miller, PE',
        clientRole: 'Lead Mechanical Systems Engineer',
        companyOrLocation: 'Tampa Bay Chemical Processing',
        rating: 5,
        verifiedBadge: 'Verified Industrial Facility',
        avatarInitials: 'TM',
      },
      {
        id: 'ind-3',
        image: '/maintenance-service.svg',
        imageAlt: 'Industrial Cooling Tower Basin & Heat Exchanger Rebuild in Lakeland',
        projectBadge: 'Cross-Flow Cooling Tower Rebuild | Cold Logistics Hub',
        projectSpecs: [
          'Cellular PVC Fill Pack Overhaul',
          'Laser Shaft Dynamometer Alignment',
          'Anti-Corrosion Basin Epoxy Lining',
        ],
        quote:
          'During our critical winter shutdown, Above All rebuilt two 1,200-ton induced draft cooling towers in under 72 hours. Their crew operated around the clock with precision safety and professionalism. Highly recommended for heavy industry.',
        clientName: 'Robert Vance',
        clientRole: 'Vice President of Industrial Operations',
        companyOrLocation: 'Lakeland Cold Logistics Facility',
        rating: 5,
        verifiedBadge: 'Verified Industrial Facility',
        avatarInitials: 'RV',
      },
    ],
  },
];

export const SectorsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'industrial'>(
    'residential',
  );
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({
    residential: 0,
    commercial: 0,
    industrial: 0,
  });
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const activeSector = SECTOR_DATA.find(s => s.id === activeTab)!;
  const currentSlideIdx = slideIndices[activeTab] || 0;

  // Automatic right-to-left scroll interval: advances until user manually interacts
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setSlideIndices(prev => {
        const cur = prev[activeTab] || 0;
        const total = activeSector.slides.length;
        return { ...prev, [activeTab]: (cur + 1) % total };
      });
    }, 5500);

    return () => clearInterval(interval);
  }, [isAutoScrolling, activeTab, activeSector.slides.length]);

  const handleManualPrev = () => {
    setIsAutoScrolling(false);
    setSlideIndices(prev => {
      const cur = prev[activeTab] || 0;
      const total = activeSector.slides.length;
      return { ...prev, [activeTab]: (cur - 1 + total) % total };
    });
  };

  const handleManualNext = () => {
    setIsAutoScrolling(false);
    setSlideIndices(prev => {
      const cur = prev[activeTab] || 0;
      const total = activeSector.slides.length;
      return { ...prev, [activeTab]: (cur + 1) % total };
    });
  };

  const handleDotClick = (idx: number) => {
    setIsAutoScrolling(false);
    setSlideIndices(prev => ({ ...prev, [activeTab]: idx }));
  };

  const handleTabChange = (tabId: 'residential' | 'commercial' | 'industrial') => {
    setActiveTab(tabId);
    // Maintain or resume smooth auto-scroll when user chooses a new sector
    setIsAutoScrolling(true);
  };

  return (
    <section className={styles.sectionRoot} id='sectors-showcase'>
      <Container maxWidth='xl'>
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <Badge
            label='VERIFIED SECTOR CASE STUDIES &amp; REVIEWS'
            customTone='orange'
            sx={{ mb: 1.5 }}
          />
          <Heading variant='h2' gradient='blue' gutterBottom>
            Proven Reliability Across Florida
          </Heading>
          <Text variant='body1' sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
            Explore verified customer testimonials and installation showcases across residential
            homes, commercial business complexes, and heavy industrial facilities.
          </Text>
        </div>

        {/* 3 Sector Tabs at top */}
        <div className={styles.tabsContainer} role='tablist' aria-label='HVAC Sectors'>
          <div className={styles.tabList}>
            {SECTOR_DATA.map(sector => {
              const isActive = activeTab === sector.id;
              return (
                <button
                  key={sector.id}
                  role='tab'
                  aria-selected={isActive}
                  aria-controls={`panel-${sector.id}`}
                  id={`tab-${sector.id}`}
                  className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ''}`}
                  onClick={() => handleTabChange(sector.id)}
                >
                  <span className={styles.tabButtonContent}>
                    {sector.icon}
                    {sector.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Showcase for Selected Tab */}
        <div
          role='tabpanel'
          id={`panel-${activeSector.id}`}
          aria-labelledby={`tab-${activeSector.id}`}
          className={styles.tabPanel}
          key={activeSector.id}
        >
          <Card className={styles.testimonialCard} accentBorderTop>
            {/* Carousel Viewport with Smooth Horizontal Translation */}
            <div className={styles.carouselViewport}>
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${currentSlideIdx * 100}%)` }}
              >
                {activeSector.slides.map((slide, idx) => {
                  const isCurrent = idx === currentSlideIdx;
                  return (
                    <div key={slide.id} className={styles.slideItem} aria-hidden={!isCurrent}>
                      {/* TOP SECTION: Project Installation Image */}
                      <div className={styles.slideImageWrapper}>
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className={styles.slideImage}
                          loading='lazy'
                        />
                        <div className={styles.imageOverlay} />

                        {/* Top Badges Overlay */}
                        <div className={styles.topBadgesRow}>
                          <Badge label={slide.projectBadge} customTone='orange' />
                          <div className={styles.verifiedChip}>
                            <VerifiedUserIcon
                              sx={{ fontSize: '1rem', mr: 0.75, color: '#38BDF8' }}
                            />
                            <span>{slide.verifiedBadge}</span>
                          </div>
                        </div>

                        {/* Floating Hardware Specs along bottom of Image */}
                        <div className={styles.specsRow}>
                          {slide.projectSpecs.map((spec, sIdx) => (
                            <div key={sIdx} className={styles.specGlassPill}>
                              {spec}
                            </div>
                          ))}
                        </div>

                        {/* Manual Navigation Controls (Chevron Icon Buttons) */}
                        <div className={styles.navOverlay}>
                          <IconButton
                            aria-label='Previous testimonial'
                            onClick={handleManualPrev}
                            className={styles.navIconBtn}
                            size='medium'
                          >
                            <ChevronLeftIcon fontSize='inherit' />
                          </IconButton>
                          <IconButton
                            aria-label='Next testimonial'
                            onClick={handleManualNext}
                            className={styles.navIconBtn}
                            size='medium'
                          >
                            <ChevronRightIcon fontSize='inherit' />
                          </IconButton>
                        </div>
                      </div>

                      {/* BOTTOM SECTION: Customer Testimonial Content */}
                      <div className={styles.slideTestimonialContent}>
                        {/* Rating and Quote Accent */}
                        <div className={styles.ratingAndQuoteRow}>
                          <div
                            className={styles.starRow}
                            aria-label='5 out of 5 stars verified rating'
                          >
                            {[...Array(slide.rating)].map((_, starIdx) => (
                              <StarIcon
                                key={starIdx}
                                sx={{ color: '#F59E0B', fontSize: '1.35rem' }}
                              />
                            ))}
                            <span className={styles.ratingLabel}>5.0 Verified Review</span>
                          </div>
                          <FormatQuoteIcon className={styles.quoteWatermark} aria-hidden='true' />
                        </div>

                        {/* Testimonial Quote */}
                        <p className={styles.quoteText}>&ldquo;{slide.quote}&rdquo;</p>

                        {/* Client Identity & Scope Bar */}
                        <div className={styles.clientProfileBar}>
                          <div className={styles.avatarMonogram}>{slide.avatarInitials}</div>
                          <Box sx={{ flexGrow: 1 }}>
                            <Text variant='subtitle1' sx={{ fontWeight: 800, lineHeight: 1.3 }}>
                              {slide.clientName}
                            </Text>
                            <Text
                              variant='body2'
                              sx={{ color: 'text.secondary', fontSize: '0.88rem' }}
                            >
                              {slide.clientRole} &bull; {slide.companyOrLocation}
                            </Text>
                          </Box>

                          <Button
                            component={Link}
                            to='/contact'
                            customVariant='primary-orange'
                            size='medium'
                            endIcon={<ArrowForwardIcon />}
                          >
                            Schedule {activeSector.label} Estimate
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Carousel Controller: Auto-Scroll Indicator & Pagination Dots */}
            <div className={styles.carouselControllerBar}>
              <div className={styles.scrollStatusIndicator}>
                <span
                  className={`${styles.statusDot} ${isAutoScrolling ? styles.statusDotActive : styles.statusDotPaused}`}
                />
                <span className={styles.statusText}>
                  {isAutoScrolling ? 'Auto-Scrolling (Right to Left)' : 'Manual Navigation Active'}
                </span>
              </div>

              {/* Dot Indicators */}
              <div
                className={styles.dotsRow}
                role='tablist'
                aria-label='Testimonial slide navigation'
              >
                {activeSector.slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    role='tab'
                    className={`${styles.dot} ${dotIdx === currentSlideIdx ? styles.dotActive : ''}`}
                    onClick={() => handleDotClick(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    aria-selected={dotIdx === currentSlideIdx}
                  />
                ))}
              </div>

              <div className={styles.slideCounter}>
                <span>0{currentSlideIdx + 1}</span>
                <span className={styles.counterDivider}>/</span>
                <span>0{activeSector.slides.length}</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
