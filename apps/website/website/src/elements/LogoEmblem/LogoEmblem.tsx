import React from 'react';

import styles from './LogoEmblem.module.css';

export interface LogoEmblemProps {
  size?: number | string;
  animated?: boolean;
  className?: string;
}

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  size = 200,
  animated = true,
  className = '',
}) => {
  return (
    <div
      className={`${styles.emblemContainer} ${animated ? styles.animatedTurbine : ''} ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox='0 0 400 400'
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Above All HVAC Stylized A Emblem'
      >
        <title>Above All HVAC Stylized A Emblem</title>
        <defs>
          <linearGradient id='emblemTurbineRing' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#E2E8F0' />
            <stop offset='25%' stopColor='#94A3B8' />
            <stop offset='50%' stopColor='#F8FAFC' />
            <stop offset='75%' stopColor='#64748B' />
            <stop offset='100%' stopColor='#CBD5E1' />
          </linearGradient>

          <linearGradient id='emblemNavyLeg' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#1B457D' />
            <stop offset='50%' stopColor='#0E2D54' />
            <stop offset='100%' stopColor='#07182E' />
          </linearGradient>

          <linearGradient id='emblemArrow' x1='0%' y1='100%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#0E2D54' />
            <stop offset='35%' stopColor='#0066CC' />
            <stop offset='70%' stopColor='#00A3E0' />
            <stop offset='100%' stopColor='#38B6FF' />
          </linearGradient>

          <linearGradient id='emblemOrangePeak' x1='0%' y1='100%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#C2410C' />
            <stop offset='50%' stopColor='#EA580C' />
            <stop offset='100%' stopColor='#FF7A00' />
          </linearGradient>

          <linearGradient id='emblemCoolSwoosh' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#38B6FF' />
            <stop offset='60%' stopColor='#00A3E0' />
            <stop offset='100%' stopColor='#0E2D54' />
          </linearGradient>

          <linearGradient id='emblemWarmSwoosh' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#FFB03A' />
            <stop offset='50%' stopColor='#FF7A00' />
            <stop offset='100%' stopColor='#C2410C' />
          </linearGradient>

          <linearGradient id='emblemGearSteel' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#CBD5E1' />
            <stop offset='50%' stopColor='#94A3B8' />
            <stop offset='100%' stopColor='#475569' />
          </linearGradient>
        </defs>

        <g>
          {/* Outer Turbine Ring */}
          <circle
            cx='200'
            cy='200'
            r='170'
            fill='none'
            stroke='url(#emblemTurbineRing)'
            strokeWidth='26'
          />
          <circle cx='200' cy='200' r='183' fill='none' stroke='#64748B' strokeWidth='2' />
          <circle cx='200' cy='200' r='157' fill='none' stroke='#CBD5E1' strokeWidth='2.5' />

          {/* Turbine Blades */}
          <g
            className='turbine-blades'
            stroke='#94A3B8'
            strokeWidth='3'
            strokeLinecap='round'
            opacity='0.85'
          >
            <path d='M 200,43 C 215,70 215,110 200,140' />
            <path d='M 278,75 C 280,105 260,135 240,160' />
            <path d='M 335,132 C 325,160 295,180 265,190' />
            <path d='M 357,200 C 330,215 290,215 260,200' />
            <path d='M 335,268 C 305,270 275,250 250,230' />
            <path d='M 278,325 C 250,315 230,285 220,255' />
            <path d='M 200,357 C 185,330 185,290 200,260' />
            <path d='M 122,325 C 120,295 140,265 160,240' />
            <path d='M 65,268 C 75,240 105,220 135,210' />
            <path d='M 43,200 C 70,185 110,185 140,200' />
            <path d='M 65,132 C 95,130 125,150 150,170' />
            <path d='M 122,75 C 150,85 170,115 180,145' />
          </g>

          {/* Warm Airflow Swirl (Background Right) */}
          <path
            d='M 220,185 C 270,140 330,145 350,185 C 365,220 330,260 255,270'
            fill='none'
            stroke='url(#emblemWarmSwoosh)'
            strokeWidth='15'
            strokeLinecap='round'
          />

          {/* Left Leg of A */}
          <path d='M 152,244 L 180,118 L 202,118 L 182,244 Z' fill='url(#emblemNavyLeg)' />
          <path d='M 132,244 L 160,244 L 195,110 L 175,100 Z' fill='#0E2D54' />

          {/* Inner Peak Wedge (Orange) */}
          <polygon points='194,102 216,168 196,168' fill='url(#emblemOrangePeak)' />

          {/* Mechanical Wrench / Gear Teeth */}
          <g fill='url(#emblemGearSteel)' stroke='#475569' strokeWidth='1.5'>
            <path d='M 218,210 L 236,242 L 230,246 L 236,254 L 244,250 L 250,260 L 240,266 L 246,274 L 230,284 L 210,248 Z' />
            <circle cx='230' cy='254' r='4' fill='#1E293B' />
          </g>

          {/* Right Leg & Arrow */}
          <path d='M 194,98 L 242,190 L 222,198 L 182,108 Z' fill='#0077C8' />
          <path
            d='M 204,124 L 238,62 L 260,114 L 244,110 L 246,128 L 228,124 L 226,108 Z'
            fill='url(#emblemArrow)'
            stroke='#FFFFFF'
            strokeWidth='1.5'
          />

          {/* Cool Air Swoosh (Front Crescent) */}
          <path
            d='M 75,210 C 85,160 140,150 178,190 C 205,218 240,210 260,180'
            fill='none'
            stroke='url(#emblemCoolSwoosh)'
            strokeWidth='18'
            strokeLinecap='round'
          />
          <path
            d='M 85,206 C 98,168 142,160 175,192 C 198,214 232,208 252,182'
            fill='none'
            stroke='#FFFFFF'
            strokeWidth='3'
            strokeLinecap='round'
            opacity='0.65'
          />

          {/* Center Hub */}
          <circle cx='200' cy='200' r='14' fill='#0E2D54' stroke='#38B6FF' strokeWidth='2.5' />
          <circle cx='200' cy='200' r='6' fill='#F8FAFC' />
        </g>
      </svg>
    </div>
  );
};
