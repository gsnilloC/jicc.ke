import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample blog post data (in a real app, this would come from an API)
const blogPost = {
  id: 1,
  title: 'The Power of Faith in Challenging Times',
  content: `
    <p>In times of uncertainty and difficulty, our faith becomes our anchor. It's during these moments that we truly understand the depth of our relationship with God and the strength He provides.</p>

    <h2>Finding Strength in Faith</h2>
    <p>When faced with challenges, it's natural to feel overwhelmed. However, as believers, we have access to a source of strength that transcends our circumstances. The Bible reminds us in Philippians 4:13, "I can do all things through Christ who strengthens me."</p>

    <h2>Trusting in God's Plan</h2>
    <p>One of the most difficult aspects of faith is learning to trust in God's timing and plan. We often want immediate answers and solutions, but God's ways are higher than our ways. As we navigate through challenging times, we must remember that God is working all things together for our good.</p>

    <h2>Practical Steps to Strengthen Your Faith</h2>
    <ul>
      <li>Daily prayer and meditation on God's Word</li>
      <li>Regular fellowship with other believers</li>
      <li>Keeping a gratitude journal</li>
      <li>Serving others in need</li>
      <li>Sharing your testimony</li>
    </ul>

    <h2>Conclusion</h2>
    <p>While challenges are inevitable in life, our faith provides us with the tools to face them with courage and hope. By staying connected to God and His Word, we can navigate through difficult times with confidence, knowing that He is always with us.</p>
  `,
  author: {
    name: 'Pastor John Doe',
    role: 'Senior Pastor',
    image: '/team/pastor-john.jpg',
    bio: 'Pastor John has been serving at JICC Church for over 15 years, leading our congregation with wisdom and compassion.',
  },
  date: '2024-03-15',
  category: 'Sermons',
  image: '/blog/faith.jpg',
  readTime: '5 min read',
  tags: ['Faith', 'Spiritual Growth', 'Christian Living'],
};

const relatedPosts = [
  {
    id: 2,
    title: 'Daily Devotional: Walking in God\'s Love',
    excerpt: 'A daily reflection on how to experience and share God\'s love in our everyday lives.',
    author: 'Sarah Johnson',
    date: '2024-03-14',
    category: 'Devotionals',
    image: '/blog/love.jpg',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'How God Transformed My Life',
    excerpt: 'A powerful testimony of God\'s grace and transformation in the life of one of our church members.',
    author: 'Michael Brown',
    date: '2024-03-12',
    category: 'Testimonies',
    image: '/blog/testimony.jpg',
    readTime: '4 min read',
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    let shareUrl;

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-primary-600 px-3 py-1 text-sm font-semibold text-white">
              {blogPost.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {blogPost.title}
            </h1>
            <div className="mt-4 flex items-center gap-x-4 text-sm">
              <time dateTime={blogPost.date}>{formatDate(blogPost.date)}</time>
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Author Info */}
        <div className="mb-8 flex items-center gap-x-4">
          <img
            src={blogPost.author.image}
            alt={blogPost.author.name}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900">{blogPost.author.name}</p>
            <p className="text-sm text-gray-600">{blogPost.author.role}</p>
          </div>
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Sharing */}
        <div className="mt-8 flex items-center gap-x-4 border-t border-gray-200 pt-8">
          <span className="text-sm font-medium text-gray-900">Share this article:</span>
          <div className="flex gap-x-2">
            <button
              onClick={() => handleShare('facebook')}
              className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <span className="sr-only">Share on Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <span className="sr-only">Share on Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
              </svg>
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <span className="sr-only">Share on LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Like Button */}
        <div className="mt-4 flex items-center gap-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`rounded-full p-2 ${
              isLiked ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg
              className="h-5 w-5"
              fill={isLiked ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <span className="text-sm text-gray-600">
            {isLiked ? 'You liked this post' : 'Like this post'}
          </span>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">More Articles</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Posts
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {relatedPosts.map((post) => (
              <article key={post.id} className="flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-gray-500">{post.readTime}</span>
                  <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-x-4">
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{post.author}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 