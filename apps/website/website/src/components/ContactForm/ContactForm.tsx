import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SendIcon from '@mui/icons-material/Send';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';

import { Button, TextField, Select, Heading, Text, Card } from '../../elements';

import styles from './ContactForm.module.css';

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  defaultPropertyType?: string;
  compact?: boolean;
  className?: string;
}

const PROPERTY_OPTIONS = [
  { label: 'Residential Home / Condo', value: 'Residential' },
  { label: 'Commercial Office / Retail', value: 'Commercial' },
  { label: 'Industrial Plant / Warehouse', value: 'Industrial' },
  { label: 'Multi-Family / HOA Complex', value: 'Multi-Family' },
  { label: 'Mechanical Piping / Specialized', value: 'Specialized Mechanical' },
];

const SERVICE_OPTIONS = [
  { label: 'AC Installation / System Replacement', value: 'Installation/Replacement' },
  { label: '24/7 Emergency AC or Heating Repair', value: 'Emergency Repair' },
  { label: 'Commercial Rooftop (RTU) / VRF Service', value: 'Commercial Rooftop/VRF' },
  { label: 'Industrial Chiller, Boiler or Cooling Tower', value: 'Industrial Chillers/Boilers' },
  { label: 'Hydronic & Mechanical Process Piping', value: 'Mechanical Piping' },
  { label: 'Seasonal Maintenance & Efficiency Tune-Up', value: 'Maintenance Tune-Up' },
  { label: 'Ductwork Inspection & Air Quality', value: 'Air Quality/Ductwork' },
];

export const ContactForm: React.FC<ContactFormProps> = ({
  title = 'Request Service or Free Estimate',
  subtitle = 'Residential, commercial, and industrial HVAC specialists. Direct dispatch to our engineering team.',
  defaultService = 'Installation/Replacement',
  defaultPropertyType = 'Residential',
  compact = false,
  className = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyType, setPropertyType] = useState(defaultPropertyType);
  const [serviceType, setServiceType] = useState(defaultService);
  const [isEmergency, setIsEmergency] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in all required fields (Name, Email, Phone, and Details).');
      return;
    }

    // Target email address mandated by user
    const recipient = 'info@aboveallfla.com';

    const subject = encodeURIComponent(
      `[Above All HVAC Service Request] ${isEmergency ? 'URGENT - ' : ''}${propertyType} | ${fullName}`,
    );

    const bodyContent = `Above All HVAC & Mechanical - Web Service Request
==================================================
Contact Name: ${fullName}
Phone Number: ${phone}
Email Address: ${email}
Property Type: ${propertyType}
Service Category: ${serviceType}
Emergency / Urgent Dispatch: ${isEmergency ? 'YES (Immediate Attention Required)' : 'No (Standard Scheduling)'}

Project Description & Notes:
--------------------------------------------------
${message}
--------------------------------------------------
Submitted via Above All Web Portal: ${new Date().toLocaleString()}
`;

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;

    // Display rich in-page confirmation
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setError(null);
  };

  if (submitted) {
    return (
      <Card className={`${styles.formWrapper} ${styles.successCard} ${className}`}>
        <div className={styles.successIcon}>
          <CheckCircleOutlineIcon fontSize='inherit' />
        </div>
        <Heading variant='h4' gutterBottom>
          Thank You, {fullName}!
        </Heading>
        <Text variant='body1' sx={{ color: 'text.secondary', maxWidth: 540, mx: 'auto', mb: 2 }}>
          Your request has been prepared and routed directly to our operations team at:
        </Text>

        <div className={styles.emailDestinationPill}>
          <EmailIcon sx={{ fontSize: '1rem', mr: 1, verticalAlign: 'middle' }} />
          info@aboveallfla.com
        </div>

        <Text variant='body2' sx={{ color: 'text.secondary', mb: 3 }}>
          If your email application did not open automatically, click the button below to send your
          pre-filled dispatch ticket, or call our 24/7 hotline directly.
        </Text>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component='a'
            href={`mailto:info@aboveallfla.com?subject=Service%20Request%20for%20${encodeURIComponent(
              fullName,
            )}&body=${encodeURIComponent(`Phone: ${phone}\nProperty: ${propertyType}\n${message}`)}`}
            customVariant='primary-orange'
            startIcon={<SendIcon />}
          >
            Open Email App
          </Button>

          <Button
            component='a'
            href='tel:14077734719'
            customVariant='primary-navy'
            startIcon={<PhoneInTalkIcon />}
          >
            Call Dispatch: (407) 773-4719
          </Button>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Button customVariant='ghost' onClick={handleReset} size='small'>
            Submit Another Request
          </Button>
        </Box>
      </Card>
    );
  }

  return (
    <Card className={`${styles.formWrapper} ${className}`}>
      <div className={styles.formHeader}>
        <Heading variant='h3' gradient='blue' gutterBottom>
          {title}
        </Heading>
        <Text variant='body1' sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          {subtitle}
        </Text>
      </div>

      {isEmergency && (
        <div className={styles.emergencyBanner}>
          <WarningAmberIcon sx={{ color: '#DC2626' }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
            Emergency Priority Active: This request will be flagged for immediate response. For
            instant dispatch, you can also call (407) 773-4719.
          </div>
        </div>
      )}

      {error && (
        <Alert severity='error' sx={{ mb: 2, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.grid2Col}>
          <TextField
            label='Full Name / Company Name'
            name='fullName'
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder='John Doe or Acme Industrial'
          />

          <TextField
            label='Phone Number'
            name='phone'
            type='tel'
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder='(561) 555-0199'
          />
        </div>

        <div className={styles.grid2Col}>
          <TextField
            label='Email Address'
            name='email'
            type='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='yourname@domain.com'
            helperText='Confirmation copy will be sent to your email'
          />

          <Select
            label='Property / Facility Type'
            name='propertyType'
            value={propertyType}
            options={PROPERTY_OPTIONS}
            onChange={val => setPropertyType(val)}
          />
        </div>

        <Select
          label='Service Needed'
          name='serviceType'
          value={serviceType}
          options={SERVICE_OPTIONS}
          onChange={val => setServiceType(val)}
        />

        <TextField
          label='Project Details & System Symptoms'
          name='message'
          required
          multiline
          rows={compact ? 3 : 4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Please describe your system, tonnage if known, issues (e.g. not cooling, strange noise, leak), or installation requirements.'
        />

        {/* Emergency Flag Checkbox */}
        <div className={styles.checkboxRow}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isEmergency}
                onChange={e => setIsEmergency(e.target.checked)}
                sx={{
                  color: '#EA580C',
                  '&.Mui-checked': {
                    color: '#EA580C',
                  },
                }}
              />
            }
            label={
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: isEmergency ? '#EA580C' : 'inherit',
                }}
              >
                🚨 This is an Urgent / 24-7 Emergency Service Need (Rapid Dispatch)
              </span>
            }
          />
        </div>

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Button
            type='submit'
            customVariant='primary-orange'
            size='large'
            fullWidth
            glow={isEmergency}
            endIcon={<SendIcon />}
          >
            {isEmergency ? 'Dispatch Urgent Request' : 'Send Service Request'}
          </Button>
        </Box>

        <Text
          variant='caption'
          sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}
        >
          🔒 Your information is confidential and transmitted directly to{' '}
          <strong style={{ color: '#0284C7' }}>info@aboveallfla.com</strong>.
        </Text>
      </form>
    </Card>
  );
};
