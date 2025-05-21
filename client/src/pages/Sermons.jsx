import { useState } from 'react';

const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Pastor John Doe',
    date: '2024-06-02',
    series: 'Faith Journey',
    videoUrl: 'https://www.youtube.com/embed/example1',
    thumbnail: '/sermons/walking-in-faith.jpg',
    description: 'Exploring what it means to walk by faith and not by sight in our daily lives.',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    speaker: 'Pastor John Doe',
    date: '2024-05-26',
    series: 'Spiritual Disciplines',
    videoUrl: 'https://www.youtube.com/embed/example2',
    thumbnail: '/sermons/power-of-prayer.jpg',
    description: 'Understanding the transformative power of prayer in our relationship with God.',
  },
  {
    id: 3,
    title: 'Living with Purpose',
    speaker: 'Jane Smith',
    date: '2024-05-19',
    series: 'Life Purpose',
    videoUrl: 'https://www.youtube.com/embed/example3',
    thumbnail: '/sermons/living-with-purpose.jpg',
    description: 'Discovering and living out God\'s purpose for your life.',
  },
  {
    id: 4,
    title: 'The Heart of Worship',
    speaker: 'Michael Johnson',
    date: '2024-05-12',
    series: 'Worship',
    videoUrl: 'https://www.youtube.com/embed/example4',
    thumbnail: '/sermons/heart-of-worship.jpg',
    description: 'Understanding true worship and its impact on our spiritual lives.',
  },
  {
    id: 5,
    title: 'Building Strong Families',
    speaker: 'Pastor John Doe',
    date: '2024-05-05',
    series: 'Family Life',
    videoUrl: 'https://www.youtube.com/embed/example5',
    thumbnail: '/sermons/building-families.jpg',
    description: 'Biblical principles for building and maintaining strong family relationships.',
  },
  {
    id: 6,
    title: 'The Gift of Grace',
    speaker: 'Jane Smith',
    date: '2024-04-28',
    series: 'Grace',
    videoUrl: 'https://www.youtube.com/embed/example6',
    thumbnail: '/sermons/gift-of-grace.jpg',
    description: 'Understanding and receiving God\'s amazing grace in our lives.',
  },
];

const speakers = [...new Set(sermons.map(sermon => sermon.speaker))];
const series = [...new Set(sermons.map(sermon => sermon.series))];

export default function Sermons() {
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredSermons = sermons.filter(sermon => {
    if (selectedSpeaker !== 'all' && sermon.speaker !== selectedSpeaker) return false;
    if (selectedSeries !== 'all' && sermon.series !== selectedSeries) return false;
    return true;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sermons
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Watch and listen to our latest sermons and teachings.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="speaker" className="block text-sm font-medium text-gray-700">
              Speaker
            </label>
            <select
              id="speaker"
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
            >
              <option value="all">All Speakers</option>
              {speakers.map((speaker) => (
                <option key={speaker} value={speaker}>
                  {speaker}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="series" className="block text-sm font-medium text-gray-700">
              Series
            </label>
            <select
              id="series"
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
            >
              <option value="all">All Series</option>
              {series.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Sermons Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <button
                  onClick={() => setSelectedSermon(sermon)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
                >
                  <svg
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={sermon.date} className="text-gray-500">
                    {formatDate(sermon.date)}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {sermon.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {sermon.speaker} • {sermon.series}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {sermon.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedSermon && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setSelectedSermon(null)}
            />
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 sm:align-middle">
              <div className="relative aspect-video">
                <iframe
                  src={selectedSermon.videoUrl}
                  title={selectedSermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedSermon.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {selectedSermon.speaker} • {formatDate(selectedSermon.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 