import { LegalPage } from '../layouts/LegalLayout';

const sections = [
  {
    body: 'At Traveloflyfares, we understand that travel plans may change due to unexpected situations, personal commitments, or schedule adjustments. Our goal is to provide clear information about the cancellation and refund process so travelers can understand their available options.',
    subsections: [
      {
        heading: '',
        body: 'This Cancellation & Refund Policy explains the terms related to booking cancellations, refund eligibility, applicable charges, and processing timelines. By using our services, you agree to the guidelines mentioned below.',
      },
    ],
  },
  {
    title: '1. General Cancellation Guidelines',
    body: 'Traveloflyfares operates as a travel service provider and works with third-party airlines and travel partners. Therefore, cancellation and refund conditions may vary depending on:',
    bullets: [
      'Airline policies',
      'Selected fare type',
      'Travel route and destination',
      'Ticket rules and booking conditions',
    ],
    subsections: [
      {
        heading: 'Service Fees and Charges',
        body: 'Any service fees, processing charges, or convenience fees charged by Traveloflyfares may be non-refundable. Certain promotional, discounted, or restricted fares may not qualify for refunds based on airline rules.',
      },
      {
        heading: 'Airline Policies Apply',
        body: 'All cancellation requests are subject to the airline\'s terms and fare conditions.',
        bullets: [
          'Airlines determine refund eligibility',
          'Applicable penalties are decided according to fare rules',
          'Airline decisions regarding refunds are final',
        ],
      },
      {
        heading: 'Cancellation Charges',
        body: 'Cancellation charges may include:',
        bullets: [
          'Airline cancellation penalties',
          'Applicable service fees',
          'Fare differences or other charges based on ticket conditions',
        ],
      },
      {
        heading: '',
        body: 'Charges may vary depending on how close the cancellation request is made to the departure date.',
      },
    ],
  },
  {
    title: '2. How To Request A Cancellation',
    body: 'To request a cancellation, customers must contact the Traveloflyfares support team.',
    subsections: [
      {
        heading: 'For a smoother process:',
        bullets: [
          'Submit cancellation requests as early as possible',
          'Keep your booking details available',
          'Wait for confirmation from our support team regarding the cancellation request',
        ],
      },
      {
        heading: '',
        body: 'A cancellation is considered processed only after confirmation from our team.',
      },
    ],
  },
  {
    title: '3. 24-Hour Cancellation Policy',
    body: 'Some airlines may provide a 24-hour cancellation option after booking, depending on their policies.',
    subsections: [
      {
        heading: 'Please note:',
        bullets: [
          'Eligibility depends on the airline and fare conditions',
          'Not all bookings qualify for free cancellation',
          'Refund approval is subject to airline rules',
        ],
      },
      {
        heading: '',
        body: 'Traveloflyfares does not control airline-specific cancellation policies.',
      },
    ],
  },
  {
    title: '4. Flexible Fare Options',
    body: 'Some airlines may offer flexible booking options or additional protection plans that may provide:',
    bullets: [
      'Reduced cancellation penalties',
      'Extended cancellation flexibility',
      'Additional benefits based on selected terms',
    ],
    subsections: [
      {
        heading: '',
        body: 'These options are controlled by the airline or travel provider, and customers should review the applicable conditions before selecting them.',
      },
    ],
  },
  {
    title: '5. Important Cancellation Conditions',
    body: 'Customers should consider the following:',
    bullets: [
      'Cancellation fees may increase closer to the departure date',
      'Removing a passenger from a booking may result in fare recalculation',
      'Refund eligibility may differ for round-trip or multi-city bookings',
      'Partially used tickets may only qualify for refunds on unused portions, if permitted by airline rules',
    ],
  },
  {
    title: '6. Refund Policy',
    body: 'Traveloflyfares assists customers with the refund process; however, refund approval and amounts are determined by airline policies.',
    subsections: [
      {
        heading: 'Refund Approval',
        body: 'Refund eligibility depends on:',
        bullets: [
          'Airline fare rules',
          'Ticket conditions',
          'Cancellation timing',
          'Applicable deductions or penalties',
        ],
      },
      {
        heading: '',
        body: 'Traveloflyfares cannot modify airline refund decisions.',
      },
      {
        heading: 'Non-Refundable Bookings',
        body: 'Some tickets may:',
        bullets: [
          'Become non-refundable after purchase',
          'Qualify only for partial refunds',
          'Include deductions based on airline conditions',
        ],
      },
      {
        heading: 'No-Show Policy',
        body: 'If a traveler does not board the flight and does not cancel before departure, the booking may be considered a "no-show." No-show bookings are generally non-refundable unless the airline provides an exception.',
      },
    ],
  },
  {
    title: '7. Refund Processing Method',
    body: 'Approved refunds are generally returned through the original payment method used during booking.',
    subsections: [
      {
        heading: 'Examples:',
        bullets: [
          'Credit/Debit Card payments: Refunded to the original card',
          'Online payment methods: Returned through the applicable payment channel',
        ],
      },
      {
        heading: '',
        body: 'Refunds are usually processed in the name of the original booking customer.',
      },
    ],
  },
  {
    title: '8. Refund Timeline',
    body: 'Refund processing times may vary depending on airlines, payment providers, and financial institutions.',
    subsections: [
      {
        heading: 'Generally:',
        bullets: [
          'Airlines may take several business days to process refunds',
          'Some refunds may require additional processing time',
          'Banks or payment providers may take additional time to reflect the amount',
        ],
      },
      {
        heading: '',
        body: 'Traveloflyfares is not responsible for delays caused by airlines, banks, or payment systems but will assist customers with refund status updates when requested.',
      },
    ],
  },
  {
    title: '9. Our Role and Responsibility',
    body: 'Traveloflyfares acts as an intermediary between travelers and third-party travel providers.',
    subsections: [
      {
        heading: 'We assist customers by:',
        bullets: [
          'Helping submit cancellation requests',
          'Providing information about applicable policies',
          'Supporting communication regarding refund status',
        ],
      },
      {
        heading: 'However:',
        bullets: [
          'We cannot guarantee refund approval',
          'We do not control airline policies',
          'We do not determine airline processing timelines',
        ],
      },
      {
        heading: '',
        body: 'Our team aims to provide guidance and support throughout the cancellation and refund process.',
      },
    ],
  },
  {
    title: '10. Contact Us',
    body: 'If you have questions regarding cancellations or refunds, please contact our support team. We recommend contacting us as soon as possible when your travel plans change so we can assist you with the available options.',
  },
];

export default function CancellationPolicyPage() {
  return <LegalPage title="Cancellation & Refund Policy" sections={sections} showContact />;
}
