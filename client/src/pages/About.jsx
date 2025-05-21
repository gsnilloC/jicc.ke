import { useState } from 'react';

const leadership = [
  {
    name: 'Pastor John Doe',
    role: 'Senior Pastor',
    image: '/leadership/pastor.jpg',
    bio: 'Pastor John has been serving as our senior pastor since 2010. He has a passion for teaching God\'s Word and making disciples.',
  },
  {
    name: 'Jane Smith',
    role: 'Associate Pastor',
    image: '/leadership/associate.jpg',
    bio: 'Jane oversees our youth and family ministries. She has a heart for mentoring young people in their faith journey.',
  },
  {
    name: 'Michael Johnson',
    role: 'Worship Director',
    image: '/leadership/worship.jpg',
    bio: 'Michael leads our worship ministry with over 15 years of experience in music and worship leadership.',
  },
  {
    name: 'Sarah Williams',
    role: 'Children\'s Ministry Director',
    image: '/leadership/children.jpg',
    bio: 'Sarah has been serving in children\'s ministry for over a decade, creating engaging programs for our youngest members.',
  },
];

const coreBeliefs = [
  {
    title: 'The Bible',
    description: 'We believe the Bible is the inspired, infallible Word of God and the final authority for faith and practice.',
  },
  {
    title: 'God',
    description: 'We believe in one God who exists in three persons: Father, Son, and Holy Spirit.',
  },
  {
    title: 'Jesus Christ',
    description: 'We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, death, resurrection, and ascension.',
  },
  {
    title: 'Salvation',
    description: 'We believe salvation comes through faith in Jesus Christ alone, by God\'s grace and not by works.',
  },
  {
    title: 'The Church',
    description: 'We believe the Church is the body of Christ, called to worship, fellowship, and make disciples.',
  },
  {
    title: 'Eternal Life',
    description: 'We believe in the resurrection of the dead and eternal life for believers in Christ.',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About JICC Church
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn about our history, meet our leadership team, and discover our core beliefs.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {['history', 'leadership', 'beliefs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                  ${activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {activeTab === 'history' && (
          <div className="prose prose-lg mx-auto">
            <h2>Our History</h2>
            <p>
              JICC Church was founded in 1995 with a vision to reach the community with the love of Christ.
              What started as a small gathering of believers has grown into a vibrant community of faith
              serving thousands of people in Nairobi and beyond.
            </p>
            <p>
              Over the years, we have seen God's faithfulness as we've expanded our ministries and
              facilities to better serve our growing congregation. Our commitment to biblical teaching,
              authentic worship, and community outreach has remained constant throughout our journey.
            </p>
            <h3>Our Mission</h3>
            <p>
              To make disciples of all nations by sharing the love of Christ and equipping believers
              for ministry through biblical teaching, authentic worship, and community service.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be a beacon of hope in our community, transforming lives through the gospel of Jesus
              Christ and raising up leaders who will impact the world for God's kingdom.
            </p>
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {leadership.map((person) => (
                <div key={person.name} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-primary-600">{person.role}</p>
                    <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'beliefs' && (
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {coreBeliefs.map((belief) => (
                <div key={belief.title} className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {belief.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 