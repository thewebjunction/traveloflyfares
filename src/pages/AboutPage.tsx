import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    body: 'At Traveloflyfares, we believe planning a journey should be simple, convenient, and enjoyable from the very beginning. Finding the right flight often involves comparing multiple options, understanding fares, and managing different travel details — and we aim to make that process easier for travelers.',
  },
  {
    title: 'That\'s Where We Come In',
    body: 'Traveloflyfares was created with the goal of making flight search and booking a smoother experience for travelers worldwide. Whether you are planning a holiday, visiting family, traveling for work, or arranging a quick trip, we help you explore flight options with greater ease and confidence.',
  },
  {
    title: 'Making Travel Simple & Convenient',
    body: 'Every journey has a purpose — a new adventure, an important meeting, a family moment, or a dream destination waiting to be explored. We understand that every booking matters, which is why we focus on providing a clear and user-friendly travel experience.',
    subsections: [
      {
        heading: '',
        body: 'With Traveloflyfares, travelers can explore different flight options in one place, compare available choices, and make decisions based on their preferences. Our platform is designed to reduce complexity and help you move forward with your travel plans more comfortably.',
      },
      {
        heading: 'Our Goal Is Simple',
        body: 'To provide a convenient booking experience with clear options, reliable information, and support whenever you need it.',
      },
    ],
  },
  {
    title: 'Built Around Travelers',
    body: 'Traveloflyfares is built with an understanding of the challenges travelers experience while planning trips. From searching for suitable fares to managing reservation-related questions, we aim to provide assistance throughout your travel journey.',
    subsections: [
      {
        heading: '',
        body: 'We focus on creating a dependable experience where travelers can find helpful information, explore flight possibilities, and receive support when required.',
      },
      {
        heading: '',
        body: 'For us, travel is not only about booking a ticket — it is about helping you begin your journey with confidence.',
      },
    ],
  },
  {
    title: 'What We Do',
    body: 'Traveloflyfares helps travelers:',
    bullets: [
      'Explore various flight options based on their travel needs',
      'Find suitable fares for domestic and international journeys',
      'Compare available choices before making travel decisions',
      'Get assistance with booking-related queries',
      'Enjoy a simple and convenient travel planning experience',
    ],
    subsections: [
      {
        heading: '',
        body: 'Our platform is designed to make the flight booking process easier, allowing you to focus more on your upcoming journey and less on complicated planning.',
      },
    ],
  },
  {
    title: 'Our Vision',
    body: 'Our vision is to become a trusted travel partner for travelers looking for convenience, accessibility, and a smooth booking experience.',
    subsections: [
      {
        heading: '',
        body: 'We aim to support modern travelers by offering a platform that values transparency, simplicity, and customer-focused service. Every trip has a reason behind it, and we want to make the first step of that journey easier.',
      },
    ],
  },
  {
    title: 'Why Choose Traveloflyfares',
    subsections: [
      {
        heading: 'Wide Range of Flight Choices',
        body: 'Explore multiple flight options to find what best matches your schedule and travel preferences.',
      },
      {
        heading: 'Simple & Convenient Booking Experience',
        body: 'Our platform is designed to make searching and planning your journey easier.',
      },
      {
        heading: 'Reliable Travel Assistance',
        body: 'Get support for your travel-related questions and booking concerns.',
      },
      {
        heading: 'Clear Travel Information',
        body: 'We focus on providing easy-to-understand details to help you make informed choices.',
      },
      {
        heading: 'Traveler-Focused Approach',
        body: 'Your travel needs remain at the center of everything we do.',
      },
    ],
  },
  {
    title: 'Our Promise',
    body: 'At Traveloflyfares, we are committed to providing a smooth, reliable, and traveler-friendly experience. As the travel industry continues to evolve, we continue to improve our services to meet changing traveler expectations.',
    subsections: [
      {
        heading: '',
        body: 'Every journey begins with a single step, and we are here to help make that beginning simple and convenient.',
      },
    ],
  },
];

export default function AboutPage() {
  return <LegalPage title="About Us" sections={sections} />;
}
