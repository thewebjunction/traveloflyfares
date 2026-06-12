import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    title: '1. Introduction',
    body: 'At TraveloFlyFares LLC ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us.',
    subsections: [
      {
        heading: '',
        body: 'This Privacy Policy explains how we collect, use, protect, and manage your information when you visit Traveloflyfares, use our website, submit travel inquiries, make bookings, or interact with our customer support team.',
      },
      {
        heading: '',
        body: 'By accessing or using our website, you acknowledge and agree to the practices described in this Privacy Policy and our Terms & Conditions.',
      },
    ],
  },
  {
    title: '2. Information We Collect',
    subsections: [
      {
        heading: 'A. Personal Information',
        body: 'We may collect personal information that helps us provide travel-related services, including:',
        bullets: [
          'Full name',
          'Email address',
          'Phone number',
          'Billing and mailing address',
          'Payment-related details (processed securely through authorized payment providers)',
          'Travel details such as destinations, travel dates, and preferences',
          'Passport or identification details when required for travel services',
          'Date of birth',
          'Special travel requests, including accessibility requirements or other preferences',
        ],
      },
      {
        heading: '',
        body: 'If you provide information on behalf of another traveler, you confirm that you have permission to share that information with us.',
      },
      {
        heading: 'B. Automatically Collected Information',
        body: 'When you browse or interact with our website, we may automatically collect certain technical information, including:',
        bullets: [
          'IP address',
          'Browser type and version',
          'Device information',
          'Operating system details',
          'Pages visited and time spent on the website',
          'Website usage patterns and navigation details',
        ],
      },
      {
        heading: '',
        body: 'This information helps us improve website performance, security, and user experience.',
      },
    ],
  },
  {
    title: '3. How We Collect Information',
    body: 'We may collect your information through different interactions, including:',
    bullets: [
      'When you search for or request travel services',
      'When you submit booking inquiries',
      'When you contact our customer support team',
      'When you complete forms on our website',
      'When you subscribe to updates or promotional communications',
      'Through cookies and similar technologies',
      'Through trusted travel partners and service providers involved in completing your requests',
    ],
  },
  {
    title: '4. Cookies and Tracking Technologies',
    body: 'Traveloflyfares may use cookies and similar tracking technologies to improve your browsing experience.',
    subsections: [
      {
        heading: 'Cookies help us:',
        bullets: [
          'Remember user preferences',
          'Improve website functionality',
          'Understand website traffic and usage trends',
          'Provide relevant travel information and offers',
        ],
      },
      {
        heading: '',
        body: 'You may manage or disable cookies through your browser settings. However, disabling cookies may affect certain website features.',
      },
    ],
  },
  {
    title: '5. How We Use Your Information',
    body: 'We may use your information for purposes such as:',
    bullets: [
      'Processing travel inquiries and reservations',
      'Providing booking confirmations and updates',
      'Responding to customer requests',
      'Improving our website and services',
      'Personalizing your travel experience',
      'Sending promotional communications (where permitted)',
      'Detecting and preventing fraud or unauthorized activities',
      'Meeting legal and regulatory obligations',
    ],
    subsections: [
      {
        heading: '',
        body: 'TraveloFlyFares LLC does not sell or trade your personal information to third parties.',
      },
    ],
  },
  {
    title: '6. Sharing of Information',
    body: 'We may share your information with trusted parties when necessary to provide our services.',
    subsections: [
      {
        heading: 'Travel Service Providers',
        body: 'Your information may be shared with airlines, hotels, transportation providers, and other travel partners required to complete your booking or request.',
      },
      {
        heading: 'Service Providers',
        body: 'We may work with third-party providers that support our operations, including:',
        bullets: [
          'Payment processing services',
          'Website hosting providers',
          'Analytics providers',
          'Communication platforms',
          'Customer support services',
        ],
      },
      {
        heading: 'Legal Requirements',
        body: 'We may disclose information when required by law, legal processes, or government authorities.',
      },
      {
        heading: 'Business Changes',
        body: 'In case of a merger, acquisition, restructuring, or transfer of business assets, your information may be transferred as part of that process while maintaining appropriate privacy protections.',
      },
    ],
  },
  {
    title: '7. Data Security',
    body: 'We use reasonable technical and organizational measures to help protect your personal information from unauthorized access, misuse, alteration, or disclosure.',
    subsections: [
      {
        heading: '',
        body: 'Although we take appropriate steps to protect your information, no online platform can guarantee complete security. If you believe your information has been compromised, please contact us promptly.',
      },
    ],
  },
  {
    title: '8. Your Privacy Rights',
    body: 'Depending on applicable laws, you may have rights regarding your personal information, including:',
    bullets: [
      'Requesting access to your personal data',
      'Requesting corrections to inaccurate information',
      'Requesting deletion of information where applicable',
      'Choosing not to receive marketing communications',
    ],
    subsections: [
      {
        heading: '',
        body: 'To exercise these rights, you may contact us using the information provided below.',
      },
    ],
  },
  {
    title: '9. Marketing Communications',
    body: 'From time to time, TraveloFlyFares LLC may send updates, offers, or travel-related information.',
    subsections: [
      {
        heading: 'You may unsubscribe from marketing emails by:',
        bullets: [
          'Using the unsubscribe option provided in the email',
          'Contacting our support team directly',
        ],
      },
      {
        heading: '',
        body: 'Please note that essential service communications, such as booking confirmations or important updates, may still be sent.',
      },
    ],
  },
  {
    title: '10. Data Retention',
    body: 'We retain personal information only for as long as necessary to:',
    bullets: [
      'Provide requested travel services',
      'Maintain business records',
      'Meet legal and regulatory requirements',
      'Resolve disputes',
      'Enforce agreements',
    ],
  },
  {
    title: '11. Children\'s Privacy',
    body: 'Traveloflyfares does not knowingly collect personal information from individuals under the age of 18.',
    subsections: [
      {
        heading: '',
        body: 'Our services are intended for users who can legally provide personal information and make travel arrangements.',
      },
    ],
  },
  {
    title: '12. International Data Processing',
    body: 'As a travel service provider, your information may be processed or stored in locations where our service providers operate.',
    subsections: [
      {
        heading: '',
        body: 'By using our website and services, you consent to the processing of information according to applicable privacy regulations.',
      },
    ],
  },
  {
    title: '13. Updates To This Privacy Policy',
    body: 'We may update this Privacy Policy periodically to reflect changes in our services, business practices, or legal requirements.',
    subsections: [
      {
        heading: '',
        body: 'Any updates will be posted on this page along with the revised effective date.',
      },
    ],
  },
  {
    title: '14. Contact Us',
    body: 'If you have questions, concerns, or requests regarding this Privacy Policy, please contact us using the details below.',
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} showContact />;
}
