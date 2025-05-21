import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Youth Conference 2024',
    date: '2024-06-15',
    endDate: '2024-06-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Sanctuary',
    description: 'Join us for an exciting weekend of worship, teaching, and fellowship. This year\'s theme is "Walking in Faith".',
    image: '/events/youth-conference.jpg',
    registration: 'https://forms.google.com/youth-conference',
  },
  {
    id: 2,
    title: 'Community Outreach',
    date: '2024-06-22',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Center',
    description: 'Serving our local community through various activities and programs. All are welcome to participate.',
    image: '/events/outreach.jpg',
    registration: 'https://forms.google.com/outreach',
  },
  {
    id: 3,
    title: 'Worship Night',
    date: '2024-06-29',
    time: '7:00 PM - 9:00 PM',
    location: 'Main Sanctuary',
    description: 'An evening of praise and worship led by our music ministry. Come and experience the presence of God.',
    image: '/events/worship.jpg',
    registration: null,
  },
  {
    id: 4,
    title: 'Bible Study Workshop',
    date: '2024-07-06',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Room',
    description: 'Learn effective methods for studying and understanding the Bible. Bring your Bible and notebook.',
    image: '/events/bible-study.jpg',
    registration: 'https://forms.google.com/bible-study',
  },
  {
    id: 5,
    title: 'Family Fun Day',
    date: '2024-07-13',
    time: '11:00 AM - 4:00 PM',
    location: 'Church Grounds',
    description: 'A day of fun activities for the whole family. Games, food, and fellowship for all ages.',
    image: '/events/family-day.jpg',
    registration: 'https://forms.google.com/family-day',
  },
  {
    id: 6,
    title: 'Prayer and Fasting',
    date: '2024-07-20',
    endDate: '2024-07-21',
    time: '6:00 AM - 6:00 PM',
    location: 'Main Sanctuary',
    description: 'A time of corporate prayer and fasting for our church and community.',
    image: '/events/prayer.jpg',
    registration: null,
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState('list'); // 'list' or 'calendar'

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Upcoming Events
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us for these upcoming events and be part of our community.
            </p>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'list'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'calendar'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Calendar View
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={event.date} className="text-gray-500">
                    {formatDate(event.date)}
                    {event.endDate && ` - ${formatDate(event.endDate)}`}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {event.time} • {event.location}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {event.description}
                  </p>
                </div>
                {event.registration && (
                  <div className="mt-6">
                    <a
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Register Now
                    </a>
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
              Have an Event Idea?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We're always looking for new ways to serve our community. Share your ideas with us.
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