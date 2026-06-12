import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    title: '1. General Information',
    body: 'The information available on Traveloflyfares, operated by TraveloFlyFares LLC, is provided for general travel information and booking assistance purposes only.',
    subsections: [
      {
        heading: '',
        body: 'While we make reasonable efforts to keep information such as flight options, pricing details, availability, and travel-related content accurate and updated, we do not guarantee that all information displayed on our website will always be complete, current, or error-free.',
      },
      {
        heading: '',
        body: 'Travel information, including fares, schedules, and airline policies, may change without prior notice due to updates from airlines, travel providers, or other external factors.',
      },
      {
        heading: '',
        body: 'Any use or reliance on the information provided through our website is at your own discretion and risk.',
      },
      {
        heading: '',
        body: 'TraveloFlyFares LLC reserves the right to update, modify, or remove website content at any time without prior notice.',
      },
    ],
  },
  {
    title: '2. Acceptance of Disclaimer',
    body: 'By accessing or using Traveloflyfares, you confirm that you have read, understood, and agreed to this Disclaimer along with our Terms & Conditions and Privacy Policy.',
    subsections: [
      {
        heading: '',
        body: 'If you do not agree with any part of this Disclaimer, please discontinue using our website and services.',
      },
      {
        heading: '',
        body: 'Continued use of our platform indicates acceptance of these terms.',
      },
    ],
  },
  {
    title: '3. Limitation of Liability',
    body: 'To the maximum extent permitted by applicable law, TraveloFlyFares LLC, its affiliates, employees, partners, and service providers shall not be responsible for:',
    bullets: [
      'Direct or indirect losses',
      'Incidental or consequential damages',
      'Loss of information, revenue, or profits',
      'Travel delays or disruptions',
      'Booking-related misunderstandings',
      'Airline cancellations or schedule changes',
    ],
    subsections: [
      {
        heading: '',
        body: 'Traveloflyfares acts as an intermediary between travelers and third-party travel providers. We do not operate airlines, control flight schedules, or manage airline operations.',
      },
    ],
  },
  {
    title: '4. Errors and Inaccuracies',
    body: 'Although we aim to provide reliable information, our website may occasionally contain:',
    bullets: [
      'Typographical errors',
      'Incorrect pricing information',
      'Outdated details',
      'Technical errors',
      'System-related inaccuracies',
    ],
    subsections: [
      {
        heading: '',
        body: 'We reserve the right to correct or update any information at any time, including after a booking request has been submitted.',
      },
      {
        heading: '',
        body: 'TraveloFlyFares LLC is not responsible for decisions made based on inaccurate, incomplete, or outdated information.',
      },
    ],
  },
  {
    title: '5. No Professional Advice',
    body: 'The information provided on Traveloflyfares is not intended to replace professional advice, including:',
    bullets: [
      'Legal advice',
      'Financial advice',
      'Immigration or visa guidance',
      'Medical or health-related advice',
      'Travel insurance recommendations',
    ],
    subsections: [
      {
        heading: '',
        body: 'Travelers should consult appropriate professionals or official sources for specific requirements related to their individual circumstances.',
      },
      {
        heading: '',
        body: 'Any communication through our website does not create a professional advisory relationship.',
      },
    ],
  },
  {
    title: '6. Travel Risks and User Responsibility',
    body: 'Travel involves certain risks and uncertainties that may be outside our control, including:',
    bullets: [
      'Flight delays or cancellations',
      'Weather conditions',
      'Natural disasters',
      'Government restrictions',
      'Political situations',
      'Health emergencies',
      'Changes in travel regulations',
    ],
    subsections: [
      {
        heading: '',
        body: 'By using our services, you acknowledge responsibility for understanding and managing these risks.',
      },
      {
        heading: '',
        body: 'We recommend reviewing travel requirements and considering appropriate travel insurance before your trip.',
      },
      {
        heading: '',
        body: 'If you make a booking for multiple travelers, you are responsible for ensuring that all passengers are aware of and agree to applicable terms and policies.',
      },
    ],
  },
  {
    title: '7. Third-Party Links and Services',
    body: 'Our website may contain links, references, or connections to third-party websites, including airlines, payment providers, and travel partners.',
    subsections: [
      {
        heading: 'Please note:',
        bullets: [
          'Third-party websites operate independently',
          'We do not control their content, services, or policies',
          'We are not responsible for third-party actions or practices',
        ],
      },
      {
        heading: '',
        body: 'Any interaction with external websites is done at your own discretion. We recommend reviewing their terms and privacy policies before using their services.',
      },
    ],
  },
  {
    title: '8. Website Availability and Technical Issues',
    body: 'We aim to provide reliable access to our website; however, we do not guarantee that the website will always:',
    bullets: [
      'Be available without interruption',
      'Be free from errors',
      'Operate without technical issues',
      'Remain completely secure at all times',
    ],
    subsections: [
      {
        heading: '',
        body: 'Temporary interruptions may occur due to maintenance, updates, technical problems, or circumstances beyond our control.',
      },
      {
        heading: '',
        body: 'TraveloFlyFares LLC is not liable for losses resulting from website downtime or technical interruptions.',
      },
    ],
  },
  {
    title: '9. Pricing and Availability Disclaimer',
    body: 'Flight fares and availability displayed on Traveloflyfares are dynamic and may change at any time.',
    subsections: [
      {
        heading: 'Please note:',
        bullets: [
          'Prices are not guaranteed until booking confirmation is completed',
          'Availability may change based on airline updates and demand',
          'Displayed fares may not remain available during the booking process',
        ],
      },
      {
        heading: '',
        body: 'TraveloFlyFares LLC does not guarantee that a displayed fare will remain unchanged until purchase completion.',
      },
    ],
  },
  {
    title: '10. Suspension or Termination of Access',
    body: 'We reserve the right to restrict, suspend, or terminate access to our website or services without prior notice if:',
    bullets: [
      'Users violate our policies',
      'Fraudulent or suspicious activity is detected',
      'The platform is misused',
      'Applicable laws or regulations are violated',
    ],
    subsections: [
      {
        heading: '',
        body: 'If you do not agree with our services or policies, your option is to discontinue using our website.',
      },
    ],
  },
  {
    title: '11. Indemnification',
    body: 'By using Traveloflyfares, you agree to indemnify and hold harmless TraveloFlyFares LLC, its affiliates, employees, and partners from claims, damages, or expenses arising from:',
    bullets: [
      'Misuse of our website',
      'Violation of these terms or policies',
      'Violation of applicable laws',
      'Disputes involving third-party travel providers',
    ],
  },
  {
    title: '12. Contact Us',
    body: 'If you have any questions or concerns regarding this Disclaimer, please contact us using the details below.',
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" sections={sections} showContact />;
}
