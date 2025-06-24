import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

const EmailService = {
  init: () => {
    try {
      emailjs.init(emailConfig.HSU9pLEF7KwdhfRSy);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      throw error;
    }
  },

  sendFuneralParlorMemberEmail: async (formData) => {
    try {
      if (!formData || typeof formData !== 'object') {
        throw new Error('Invalid form data provided');
      }

      // Validate required fields
      const requiredFields = ['businessName', 'contactEmail', 'termsAccepted'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      const templateParams = {
        // Business Details (from BusinessDetails.js)
        business_name: formData.businessName || 'Not provided',
        trading_name: formData.tradingName || 'Not provided',
        registration_number: formData.registrationNumber || 'Not provided',
        
        // Contact Details (from ContactDetails.js)
        contact_person: formData.contactPerson || 'Not provided',
        contact_email: formData.contactEmail || 'Not provided',
        contact_phone: formData.contactPhone || 'Not provided',
        
        // Physical Address (from PhysicalAddress.js)
        street_address: formData.streetAddress || 'Not provided',
        suburb: formData.suburb || 'Not provided',
        city: formData.city || 'Not provided',
        province: formData.province || 'Not provided',
        postal_code: formData.postalCode || 'Not provided',
        
        // Operational Information (from OperationalInformation.js)
        operating_hours: formData.operatingHours || 'Not provided',
        services_offered: formData.servicesOffered || 'Not provided',
        
        // References (from Reference.js)
        reference_name: formData.referenceName || 'Not provided',
        reference_company: formData.referenceCompany || 'Not provided',
        reference_email: formData.referenceEmail || 'Not provided',
        reference_phone: formData.referencePhone || 'Not provided',
        
        // Declaration (from Declaration.js)
        terms_accepted: formData.termsAccepted || false,
        
        // Extras (from Extras.js)
        additional_notes: formData.additionalNotes || '',
        
        // System Information
        submission_date: new Date().toISOString(),
        form_version: '1.0'
      };

      console.log('Sending email with template parameters:', templateParams);

      const result = await emailjs.send(
        emailConfig.service_id_i7ypwkr,
        emailConfig.template_id_gzqy8vm,
        templateParams,
        emailConfig.HSU9pLEF7KwdhfRSy
      );

      console.log('Email sent successfully:', result);
      return {
        success: true,
        status: result.status,
        text: result.text
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        error: error.message || 'Failed to send email'
      };
    }
  }
};

export default EmailService;

// Initialize EmailJS when the app starts
EmailService.init();
