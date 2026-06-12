import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    body: 'Welcome to Traveloflyfares, operated by TraveloFlyFares LLC ("we," "our," or "us").',
    subsections: [
      {
        heading: '',
        body: 'These Terms & Conditions explain the rules and guidelines for using our website, services, and customer support channels. By accessing our website, requesting travel assistance, or making a booking through our platform, you agree to comply with these Terms.',
      },
      {
        heading: '',
        body: 'If you do not agree with any part of these Terms & Conditions, please do not use our services.',
      },
    ],
  },
  {
    title: '1. Eligibility to Use Our Services',
    body: 'To use our services, you confirm that:',
    bullets: [
      'You are at least 18 years old',
      'You have the legal authority to enter into agreements',
      'You are using our services for lawful travel purposes',
    ],
    subsections: [
      {
        heading: '',
        body: 'By making a reservation, you confirm that the information provided is accurate and that you have authorization to act on behalf of all travelers included in the booking.',
      },
    ],
  },
  {
    title: '2. Nature of Our Services',
    body: 'Traveloflyfares operates as an independent travel service provider that helps customers explore, compare, and request travel-related services, including airline ticket options.',
    subsections: [
      {
        heading: '',
        body: 'We act as an intermediary between customers and third-party travel providers, including airlines and other travel suppliers. We do not own, operate, or control these third-party services.',
      },
      {
        heading: '',
        body: 'All airline tickets, travel products, and services are subject to the terms, conditions, policies, and rules of the respective travel providers.',
      },
    ],
  },
  {
    title: '3. Accuracy of Information',
    body: 'Customers are responsible for providing accurate and complete information during the booking process, including:',
    bullets: [
      'Full legal name as shown on travel documents',
      'Correct travel dates and destinations',
      'Contact information',
      'Passenger details',
      'Payment information',
    ],
    subsections: [
      {
        heading: '',
        body: 'Incorrect or incomplete information may result in additional charges, booking complications, or travel issues. TraveloFlyFares LLC is not responsible for problems caused by incorrect information provided by customers.',
      },
    ],
  },
  {
    title: '4. Booking and Payment',
    body: 'All fares, availability, and travel options are subject to change until the booking is confirmed.',
    subsections: [
      {
        heading: 'By completing a booking:',
        bullets: [
          'Payment must be successfully processed before confirmation',
          'Prices may change due to airline updates, availability, or system changes',
          'Booking confirmation will be provided after successful completion',
        ],
      },
      {
        heading: 'TraveloFlyFares LLC reserves the right to:',
        bullets: [
          'Cancel bookings affected by pricing errors or technical issues',
          'Request additional verification for security purposes',
          'Decline transactions suspected of fraud or unauthorized activity',
        ],
      },
      {
        heading: '',
        body: 'Failure to complete required verification may result in cancellation of the booking.',
      },
    ],
  },
  {
    title: '5. Airline Policies and Fare Conditions',
    body: 'Each airline or travel provider has its own rules regarding:',
    bullets: [
      'Cancellations and changes',
      'Refund eligibility',
      'Baggage allowances',
      'Seat selection',
      'Flight schedule changes',
    ],
    subsections: [
      {
        heading: '',
        body: 'Fare conditions may vary depending on the selected ticket type. Some fares may include restrictions or may not be refundable.',
      },
      {
        heading: '',
        body: 'Customers are responsible for reviewing applicable fare rules before completing their booking.',
      },
    ],
  },
  {
    title: '6. Travel Documents and Requirements',
    body: 'Travel requirements may vary depending on destination, nationality, and government regulations.',
    subsections: [
      {
        heading: 'Customers are responsible for ensuring they have:',
        bullets: [
          'Valid identification documents',
          'Required passports',
          'Necessary visas',
          'Health or travel-related documents when applicable',
        ],
      },
      {
        heading: '',
        body: 'TraveloFlyFares LLC is not responsible for denied boarding, entry restrictions, or delays caused by missing or invalid travel documents.',
      },
    ],
  },
  {
    title: '7. Changes, Cancellations, and Refunds',
    body: 'For booking changes, cancellations, or refund requests, customers should contact our support team.',
    subsections: [
      {
        heading: 'Please note:',
        bullets: [
          'Airline penalties or restrictions may apply',
          'Additional service charges may apply',
          'Refund processing times depend on airlines and payment providers',
          'Some tickets may be non-refundable',
        ],
      },
      {
        heading: '',
        body: 'Refunds are processed according to the applicable airline or travel provider policies.',
      },
    ],
  },
  {
    title: '8. Third-Party Services and Links',
    body: 'Our website may include references or links to third-party websites, services, or providers.',
    subsections: [
      {
        heading: 'TraveloFlyFares LLC does not control or take responsibility for:',
        bullets: [
          'Third-party website content',
          'External policies',
          'Services provided by external companies',
          'Transactions completed through third-party platforms',
        ],
      },
      {
        heading: '',
        body: 'Customers should review the terms and policies of third-party providers before using their services.',
      },
    ],
  },
  {
    title: '9. Account Responsibility',
    body: 'If you create an account or provide account information through our platform, you are responsible for maintaining the confidentiality of your details.',
    subsections: [
      {
        heading: '',
        body: 'You are responsible for activities performed through your account. If you notice unauthorized access or suspicious activity, you should contact us immediately.',
      },
    ],
  },
  {
    title: '10. Prohibited Activities',
    body: 'Users must not:',
    bullets: [
      'Use our services for illegal purposes',
      'Provide false or misleading information',
      'Attempt unauthorized access to our systems',
      'Introduce harmful software or malicious code',
      'Copy or misuse website content without permission',
      'Impersonate TraveloFlyFares LLC representatives',
      'Interfere with website operations',
      'Send spam or unauthorized communications',
    ],
    subsections: [
      {
        heading: '',
        body: 'Violation of these Terms may result in restricted access, booking cancellation, or further action where applicable.',
      },
    ],
  },
  {
    title: '11. Intellectual Property',
    body: 'All content available on Traveloflyfares, including text, graphics, logos, website design, and other materials, belongs to or is licensed to TraveloFlyFares LLC.',
    subsections: [
      {
        heading: '',
        body: 'Unauthorized copying, reproduction, modification, or distribution of website content is prohibited.',
      },
    ],
  },
  {
    title: '12. Limitation of Liability',
    body: 'TraveloFlyFares LLC is not responsible for circumstances outside our reasonable control, including:',
    bullets: [
      'Flight delays or cancellations',
      'Airline schedule changes',
      'Missed connections',
      'Weather conditions',
      'Natural disasters',
      'Government restrictions',
      'Other force majeure events',
    ],
    subsections: [
      {
        heading: '',
        body: 'Our responsibility is limited to the services provided directly by us, where applicable. We are not responsible for indirect, incidental, or consequential losses.',
      },
    ],
  },
  {
    title: '13. Indemnification',
    body: 'You agree to protect and hold harmless TraveloFlyFares LLC, its affiliates, and representatives from claims, damages, or expenses arising from:',
    bullets: [
      'Your violation of these Terms',
      'Misuse of our services',
      'Violation of applicable laws or regulations',
    ],
  },
  {
    title: '14. Updates To These Terms',
    body: 'We may update these Terms & Conditions from time to time to reflect changes in our services, policies, or legal requirements.',
    subsections: [
      {
        heading: '',
        body: 'Updated Terms will be posted on this page, and continued use of our services indicates acceptance of the revised Terms.',
      },
    ],
  },
  {
    title: '15. Governing Law',
    body: 'These Terms & Conditions shall be governed by applicable laws. Any disputes related to the use of our services shall be handled according to the applicable jurisdiction and legal processes.',
  },
  {
    title: '16. Contact Us',
    body: 'For questions, concerns, or assistance regarding these Terms & Conditions, contact us using the details below.',
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={sections} showContact />;
}
