import { Link } from 'react-router-dom';

const serviceTimes = [
  {
    day: 'Sunday',
    services: [
      { time: '8:00 AM', name: 'First Service' },
      { time: '10:30 AM', name: 'Second Service' },
      { time: '1:00 PM', name: 'Youth Service' },
    ],
  },
  {
    day: 'Wednesday',
    services: [
      { time: '6:00 PM', name: 'Bible Study' },
    ],
  },
  {
    day: 'Friday',
    services: [
      { time: '6:00 PM', name: 'Prayer Meeting' },
    ],
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Youth Conference 2024',
    date: 'June 15-17, 2024',
    description: 'Join us for an exciting weekend of worship, teaching, and fellowship.',
    image: '/events/youth-conference.jpg',
  },
  {
    id: 2,
    title: 'Community Outreach',
    date: 'June 22, 2024',
    description: 'Serving our local community through various activities and programs.',
    image: '/events/outreach.jpg',
  },
  {
    id: 3,
    title: 'Worship Night',
    date: 'June 29, 2024',
    description: 'An evening of praise and worship led by our music ministry.',
    image: '/events/worship.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to JICC Church
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Making disciples of all nations through the love of Christ. Join us as we worship, learn, and grow together in faith.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/about"
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-primary-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-primary-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            Welcome
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <img
                          src="/hero-image.jpg"
                          alt="Church service"
                          className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Times */}
      <div className="bg-white py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Join Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Service Times
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We welcome you to join us for worship and fellowship at any of our services.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {serviceTimes.map((schedule) => (
                <div key={schedule.day} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {schedule.day}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    {schedule.services.map((service) => (
                      <div key={service.name} className="mt-2">
                        <p className="font-semibold">{service.time}</p>
                        <p>{service.name}</p>
                      </div>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Stay Connected</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us for these upcoming events and be part of our community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="flex flex-col items-start">
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
                      {event.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`/events/${event.id}`}>
                        <span className="absolute inset-0" />
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{event.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/events"
              className="btn btn-primary"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 