import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    title: '1. Introduction',
    body: 'At Traveloflyfares, operated by TraveloFlyFares LLC ("we," "our," or "us"), we use cookies and similar technologies to improve your browsing experience and enhance the functionality of our website.',
    subsections: [
      {
        heading: '',
        body: 'This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences while using our website.',
      },
      {
        heading: '',
        body: 'This policy should be read together with our Privacy Policy, which explains how we collect, use, and protect your information.',
      },
      {
        heading: '',
        body: 'By continuing to access or use our website, you agree to the use of cookies as described in this policy.',
      },
    ],
  },
  {
    title: '2. What Are Cookies?',
    body: 'Cookies are small text files stored on your device, such as a computer, smartphone, or tablet, when you visit a website.',
    subsections: [
      {
        heading: '',
        body: 'Cookies allow websites to recognize your device and remember certain information about your interaction with the website.',
      },
      {
        heading: 'Cookies may collect information such as:',
        bullets: [
          'User preferences and settings',
          'Website activity and browsing patterns',
          'Pages visited',
          'Session details',
          'Browser and device information',
        ],
      },
      {
        heading: '',
        body: 'Cookies help improve website performance, provide a smoother experience, and support personalized features.',
      },
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    subsections: [
      {
        heading: 'First-Party Cookies',
        body: 'These cookies are placed directly by Traveloflyfares and help ensure that our website functions properly.',
        bullets: [
          'Website navigation',
          'Booking-related processes',
          'User preferences',
          'Secure website functionality',
        ],
      },
      {
        heading: 'Third-Party Cookies',
        body: 'These cookies may be placed by trusted third-party providers, including analytics, advertising, and service partners. They help us:',
        bullets: [
          'Understand website usage',
          'Measure performance',
          'Improve our services',
          'Provide relevant travel-related content and offers',
        ],
      },
    ],
  },
  {
    title: '4. Session and Persistent Cookies',
    subsections: [
      {
        heading: 'Session Cookies',
        body: 'Session cookies are temporary cookies that are deleted when you close your browser. They help with:',
        bullets: [
          'Website navigation',
          'Maintaining secure sessions',
          'Supporting website functionality',
        ],
      },
      {
        heading: 'Persistent Cookies',
        body: 'Persistent cookies remain on your device for a specific period or until manually deleted. They help us:',
        bullets: [
          'Recognize returning visitors',
          'Save preferences',
          'Improve website performance',
          'Provide a more convenient browsing experience',
        ],
      },
    ],
  },
  {
    title: '5. Categories of Cookies',
    subsections: [
      {
        heading: 'Essential Cookies',
        body: 'These cookies are necessary for the basic operation of our website. They help support:',
        bullets: [
          'Secure browsing',
          'Website stability',
          'Forms and booking-related functions',
          'Essential website features',
        ],
      },
      {
        heading: '',
        body: 'Without these cookies, certain parts of the website may not function properly.',
      },
      {
        heading: 'Performance and Functional Cookies',
        body: 'These cookies help us understand how visitors interact with our website. They may collect information such as:',
        bullets: [
          'Website traffic patterns',
          'Time spent on pages',
          'Website errors',
          'User preferences',
        ],
      },
      {
        heading: 'Analytics and Personalization Cookies',
        body: 'These cookies allow us to analyze visitor behavior and improve our services. They help us:',
        bullets: [
          'Understand user interactions',
          'Improve website features',
          'Analyze travel preferences',
          'Provide a more personalized experience',
        ],
      },
      {
        heading: '',
        body: 'Information collected through these cookies is generally used in an aggregated manner.',
      },
      {
        heading: 'Advertising and Marketing Cookies',
        body: 'These cookies may be used to:',
        bullets: [
          'Display relevant advertisements',
          'Measure advertising effectiveness',
          'Understand user interests',
          'Provide relevant offers and promotions',
        ],
      },
      {
        heading: '',
        body: 'They may track browsing activity across websites through third-party advertising providers.',
      },
      {
        heading: 'Social Media Cookies',
        body: 'These cookies may enable social media features, such as sharing content or interacting with social platforms. These cookies are controlled by third-party platforms and are subject to their own privacy policies.',
      },
    ],
  },
  {
    title: '6. How We Use Cookies',
    body: 'Traveloflyfares may use cookies to:',
    bullets: [
      'Maintain website functionality',
      'Improve user experience',
      'Remember preferences',
      'Analyze website performance',
      'Support marketing activities',
      'Provide relevant travel information',
      'Improve website security and prevent fraudulent activities',
    ],
    subsections: [
      {
        heading: '',
        body: 'Our goal is to provide a smoother and more efficient experience for visitors.',
      },
    ],
  },
  {
    title: '7. Managing Your Cookie Preferences',
    subsections: [
      {
        heading: 'Browser Settings',
        body: 'You can control or manage cookies through your browser settings. Most browsers allow you to:',
        bullets: [
          'Delete existing cookies',
          'Block certain cookies',
          'Disable all cookies',
          'Receive alerts before cookies are stored',
        ],
      },
      {
        heading: '',
        body: 'Please note that disabling cookies may affect some website features, including certain booking or personalization functions.',
      },
      {
        heading: 'Advertising Preferences',
        body: 'You may manage personalized advertising preferences through available third-party tools or platform settings. Choosing to opt out of personalized advertising does not mean advertisements will stop appearing; it may only affect how relevant those advertisements are.',
      },
    ],
  },
  {
    title: '8. Sharing Cookie Information With Third Parties',
    body: 'We may share limited cookie-related information with trusted third parties for purposes such as:',
    bullets: [
      'Website analytics',
      'Performance monitoring',
      'Marketing measurement',
      'Fraud prevention',
      'Service improvement',
    ],
    subsections: [
      {
        heading: '',
        body: 'Third-party providers are expected to handle information responsibly and according to applicable privacy requirements.',
      },
    ],
  },
  {
    title: '9. Updates To This Cookie Policy',
    body: 'We may update this Cookie Policy from time to time to reflect changes in technology, services, or legal requirements.',
    subsections: [
      {
        heading: '',
        body: 'Any updates will be published on this page with the revised effective date.',
      },
      {
        heading: '',
        body: 'We encourage users to review this policy periodically to stay informed about how cookies are used.',
      },
    ],
  },
  {
    title: '10. Contact Us',
    body: 'If you have questions about this Cookie Policy or our use of cookies, please contact us using the details below.',
  },
];

export default function CookiePolicyPage() {
  return <LegalPage title="Cookie Policy" sections={sections} showContact />;
}
