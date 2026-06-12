import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    body: 'At Traveloflyfares, operated by TraveloFlyFares LLC, we believe in maintaining transparency with our users. This Advertisement Disclosure explains how advertisements, promotional content, and third-party partnerships may appear on our website.',
    subsections: [
      {
        heading: '',
        body: 'By using our website, you acknowledge and agree to the practices described in this disclosure.',
      },
    ],
  },
  {
    title: '1. Advertising and Promotional Content',
    body: 'Traveloflyfares may display advertisements, promotional offers, or travel-related content from third-party companies, service providers, or partners.',
    subsections: [
      {
        heading: 'These advertisements may include:',
        bullets: [
          'Flight-related offers',
          'Travel services',
          'Partner promotions',
          'Special deals or offers',
          'Other relevant travel information',
        ],
      },
      {
        heading: '',
        body: 'The appearance of advertisements on our website does not necessarily indicate endorsement, recommendation, or guarantee of the products or services advertised.',
      },
    ],
  },
  {
    title: '2. Third-Party Advertisers and Partners',
    body: 'We may work with third-party advertising partners, affiliate networks, or travel service providers that help display relevant advertisements or promotional content.',
    subsections: [
      {
        heading: 'These third parties may use technologies such as cookies, pixels, or similar tracking tools to:',
        bullets: [
          'Display relevant advertisements',
          'Measure advertising performance',
          'Understand user interactions',
          'Improve advertising experiences',
        ],
      },
      {
        heading: '',
        body: 'These third parties may have their own privacy policies and practices, which we encourage users to review.',
      },
    ],
  },
  {
    title: '3. Affiliate Relationships',
    body: 'Some links or promotional content on Traveloflyfares may be associated with affiliate partnerships.',
    subsections: [
      {
        heading: '',
        body: 'This means we may receive compensation if users interact with certain links, offers, or services.',
      },
      {
        heading: '',
        body: 'Any affiliate relationship does not affect the information, services, or options presented to users.',
      },
    ],
  },
  {
    title: '4. Accuracy of Advertised Information',
    body: 'While we aim to provide helpful and accurate information, advertisements and third-party offers may be provided by external companies.',
    subsections: [
      {
        heading: 'Traveloflyfares does not guarantee:',
        bullets: [
          'Availability of advertised services',
          'Accuracy of third-party offers',
          'Pricing changes made by external providers',
          'Terms or conditions applied by advertisers',
        ],
      },
      {
        heading: '',
        body: 'Users should verify details, restrictions, and applicable policies directly with the relevant provider before making decisions.',
      },
    ],
  },
  {
    title: '5. Third-Party Websites',
    body: 'Our website may include advertisements or links that direct users to external websites.',
    subsections: [
      {
        heading: 'Traveloflyfares is not responsible for:',
        bullets: [
          'The content of third-party websites',
          'Their privacy practices',
          'Their services, products, or offers',
          'Transactions completed outside our platform',
        ],
      },
      {
        heading: '',
        body: 'Users should review the terms and policies of third-party websites before engaging with them.',
      },
    ],
  },
  {
    title: '6. No Guarantee or Endorsement',
    body: 'Advertisements displayed on Traveloflyfares are provided for informational and convenience purposes.',
    subsections: [
      {
        heading: 'The presence of an advertisement does not mean that TraveloFlyFares LLC:',
        bullets: [
          'Endorses the advertiser',
          'Guarantees the quality of the service',
          'Confirms availability or pricing',
          'Takes responsibility for third-party products or services',
        ],
      },
    ],
  },
  {
    title: '7. Changes To This Advertisement Disclosure',
    body: 'We may update this Advertisement Disclosure from time to time to reflect changes in our advertising practices, partnerships, or applicable requirements.',
    subsections: [
      {
        heading: '',
        body: 'Any updates will be posted on this page with the revised effective date.',
      },
    ],
  },
  {
    title: '8. Contact Us',
    body: 'If you have questions regarding this Advertisement Disclosure, please contact us using the details below.',
  },
];

export default function AdvertisementDisclosurePage() {
  return <LegalPage title="Advertisement Disclosure" sections={sections} showContact />;
}
