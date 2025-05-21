import { useState } from 'react';

const ministries = [
  {
    id: 1,
    name: 'Youth Ministry',
    description: 'Empowering young people to grow in their faith and make a difference in their community.',
    image: '/ministries/youth.jpg',
    contact: {
      name: 'Jane Smith',
      email: 'youth@jicc.ke',
      phone: '+254 123 456 789',
    },
    schedule: 'Every Sunday at 1:00 PM',
  },
  {
    id: 2,
    name: 'Music Ministry',
    description: 'Leading the congregation in worship through music and praise.',
    image: '/ministries/music.jpg',
    contact: {
      name: 'Michael Johnson',
      email: 'music@jicc.ke',
      phone: '+254 123 456 790',
    },
    schedule: 'Practice every Saturday at 2:00 PM',
  },
  {
    id: 3,
    name: 'Children\'s Ministry',
    description: 'Nurturing young hearts and minds in the love of Christ.',
    image: '/ministries/children.jpg',
    contact: {
      name: 'Sarah Williams',
      email: 'children@jicc.ke',
      phone: '+254 123 456 791',
    },
    schedule: 'Every Sunday at 10:30 AM',
  },
  {
    id: 4,
    name: 'Outreach Ministry',
    description: 'Serving our community and sharing the love of Christ through practical acts of service.',
    image: '/ministries/outreach.jpg',
    contact: {
      name: 'David Brown',
      email: 'outreach@jicc.ke',
      phone: '+254 123 456 792',
    },
    schedule: 'Monthly community service projects',
  },
  {
    id: 5,
    name: 'Prayer Ministry',
    description: 'Dedicated to lifting up the needs of our church and community in prayer.',
    image: '/ministries/prayer.jpg',
    contact: {
      name: 'Mary Johnson',
      email: 'prayer@jicc.ke',
      phone: '+254 123 456 793',
    },
    schedule: 'Every Friday at 6:00 PM',
  },
  {
    id: 6,
    name: 'Bible Study',
    description: 'Deepening our understanding of God\'s Word through systematic study and discussion.',
    image: '/ministries/bible-study.jpg',
    contact: {
      name: 'Pastor John Doe',
      email: 'biblestudy@jicc.ke',
      phone: '+254 123 456 794',
    },
    schedule: 'Every Wednesday at 6:00 PM',
  },
];

export default function Ministries() {
  const [expandedMinistry, setExpandedMinistry] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Ministries
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the various ways you can get involved and serve in our church community.
            </p>
          </div>
        </div>
      </div>

      {/* Ministries Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={ministry.image}
                  alt={ministry.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {ministry.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {ministry.description}
                </p>
                <button
                  onClick={() => setExpandedMinistry(expandedMinistry === ministry.id ? null : ministry.id)}
                  className="mt-4 text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                >
                  {expandedMinistry === ministry.id ? 'Show Less' : 'Show More'}
                </button>
                {expandedMinistry === ministry.id && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Schedule</h4>
                      <p className="mt-1 text-sm text-gray-600">{ministry.schedule}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {ministry.contact.name}<br />
                        {ministry.contact.email}<br />
                        {ministry.contact.phone}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Want to Get Involved?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We'd love to have you join one of our ministries. Contact us to learn more about how you can serve.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="btn btn-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 