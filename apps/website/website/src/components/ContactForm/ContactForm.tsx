import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SendIcon from '@mui/icons-material/Send';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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

export interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  serviceType?: string;
  message?: string;
}

export interface FormTouched {
  fullName?: boolean;
  phone?: boolean;
  email?: boolean;
  propertyType?: boolean;
  serviceType?: boolean;
  message?: boolean;
}

export const validateFullName = (val: string): string | undefined => {
  const trimmed = val.trim();
  if (!trimmed) {
    return 'Full name or company name is required (at least 2 characters).';
  }
  if (trimmed.length < 2) {
    return 'Full name or company name must be at least 2 characters.';
  }
  return undefined;
};

export const validatePhone = (val: string): string | undefined => {
  const trimmed = val.trim();
  if (!trimmed) {
    return 'Please enter a valid phone number (at least 10 digits).';
  }
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 10) {
    return 'Please enter a valid phone number (at least 10 digits).';
  }
  return undefined;
};

export const validateEmail = (val: string): string | undefined => {
  const trimmed = val.trim();
  if (!trimmed) {
    return 'Please enter a valid email address (e.g. name@domain.com).';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g. name@domain.com).';
  }
  return undefined;
};

export const validateMessage = (val: string): string | undefined => {
  const trimmed = val.trim();
  if (!trimmed) {
    return 'Please provide project details (at least 10 characters).';
  }
  if (trimmed.length < 10) {
    return 'Please provide project details (at least 10 characters).';
  }
  return undefined;
};

export const validatePropertyType = (val: string): string | undefined => {
  if (!val || !val.trim()) {
    return 'Please select a property or facility type.';
  }
  return undefined;
};

export const validateServiceType = (val: string): string | undefined => {
  if (!val || !val.trim()) {
    return 'Please select the service required.';
  }
  return undefined;
};

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
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const handleBlur = (field: keyof FormTouched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    let err: string | undefined;
    if (field === 'fullName') err = validateFullName(fullName);
    else if (field === 'phone') err = validatePhone(phone);
    else if (field === 'email') err = validateEmail(email);
    else if (field === 'message') err = validateMessage(message);
    else if (field === 'propertyType') err = validatePropertyType(propertyType);
    else if (field === 'serviceType') err = validateServiceType(serviceType);

    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handleFieldChange = (field: keyof FormTouched, value: string) => {
    if (field === 'fullName') setFullName(value);
    else if (field === 'phone') setPhone(value);
    else if (field === 'email') setEmail(value);
    else if (field === 'message') setMessage(value);
    else if (field === 'propertyType') setPropertyType(value);
    else if (field === 'serviceType') setServiceType(value);

    // If field was already touched, revalidate dynamically
    if (touched[field]) {
      let err: string | undefined;
      if (field === 'fullName') err = validateFullName(value);
      else if (field === 'phone') err = validatePhone(value);
      else if (field === 'email') err = validateEmail(value);
      else if (field === 'message') err = validateMessage(value);
      else if (field === 'propertyType') err = validatePropertyType(value);
      else if (field === 'serviceType') err = validateServiceType(value);

      setErrors(prev => ({ ...prev, [field]: err }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const nameErr = validateFullName(fullName);
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);
    const messageErr = validateMessage(message);
    const propErr = validatePropertyType(propertyType);
    const svcErr = validateServiceType(serviceType);

    const newErrors: FormErrors = {
      fullName: nameErr,
      phone: phoneErr,
      email: emailErr,
      message: messageErr,
      propertyType: propErr,
      serviceType: svcErr,
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
      propertyType: true,
      serviceType: true,
    });

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setStatusMessage('Please correct the highlighted fields with required information.');
      // Focus first invalid element for immediate keyboard/screen-reader accessibility
      if (nameErr) {
        (document.querySelector('input[name="fullName"]') as HTMLElement)?.focus();
      } else if (phoneErr) {
        (document.querySelector('input[name="phone"]') as HTMLElement)?.focus();
      } else if (emailErr) {
        (document.querySelector('input[name="email"]') as HTMLElement)?.focus();
      } else if (messageErr) {
        (document.querySelector('textarea[name="message"]') as HTMLElement)?.focus();
      }
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
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsEmergency(false);
    setPropertyType(defaultPropertyType);
    setServiceType(defaultService);
    setErrors({});
    setTouched({});
    setStatusMessage(null);
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

      {statusMessage && (
        <output aria-live='polite' className={styles.srOnly}>
          {statusMessage}
        </output>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.grid2Col}>
          <TextField
            label='Full Name / Company Name'
            name='fullName'
            required
            value={fullName}
            error={Boolean(touched.fullName && errors.fullName)}
            helperText={touched.fullName ? errors.fullName : undefined}
            onBlur={() => handleBlur('fullName')}
            onChange={e => handleFieldChange('fullName', e.target.value)}
            placeholder='John Doe or Acme Industrial'
          />

          <TextField
            label='Phone Number'
            name='phone'
            type='tel'
            required
            value={phone}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone ? errors.phone : undefined}
            onBlur={() => handleBlur('phone')}
            onChange={e => handleFieldChange('phone', e.target.value)}
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
            error={Boolean(touched.email && errors.email)}
            helperText={
              touched.email && errors.email
                ? errors.email
                : 'Confirmation copy will be sent to your email'
            }
            onBlur={() => handleBlur('email')}
            onChange={e => handleFieldChange('email', e.target.value)}
            placeholder='yourname@domain.com'
          />

          <Select
            label='Property / Facility Type'
            name='propertyType'
            value={propertyType}
            options={PROPERTY_OPTIONS}
            error={Boolean(touched.propertyType && errors.propertyType)}
            helperText={touched.propertyType ? errors.propertyType : undefined}
            onBlur={() => handleBlur('propertyType')}
            onChange={val => handleFieldChange('propertyType', val)}
          />
        </div>

        <Select
          label='Service Needed'
          name='serviceType'
          value={serviceType}
          options={SERVICE_OPTIONS}
          error={Boolean(touched.serviceType && errors.serviceType)}
          helperText={touched.serviceType ? errors.serviceType : undefined}
          onBlur={() => handleBlur('serviceType')}
          onChange={val => handleFieldChange('serviceType', val)}
        />

        <TextField
          label='Project Details & System Symptoms'
          name='message'
          required
          multiline
          rows={compact ? 3 : 4}
          value={message}
          error={Boolean(touched.message && errors.message)}
          helperText={
            touched.message && errors.message
              ? errors.message
              : `${message.trim().length}/10 characters minimum`
          }
          onBlur={() => handleBlur('message')}
          onChange={e => handleFieldChange('message', e.target.value)}
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
