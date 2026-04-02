const header = {
  homepage: 'https://zackwilson.me',
  title: 'ZW.',
}

const about = {
  name: 'Zack Wilson',
  role: 'iOS & Backend Engineer',
  description:
    'Software Engineer at Ally Invest with 4 years of experience building data infrastructure and shipped iOS apps. 2024 Apple Swift Student Challenge winner. Currently pursuing an MS in Computer Science at Georgia Tech.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/zachary-t-wilson/',
    github: 'https://github.com/ZTW21',
  },
}

const projects = [
  {
    name: 'ClearBAC',
    description:
      'Shipped iOS app for real-time blood alcohol content tracking. Calculates BAC trajectories using the Widmark equation, projects time to sober, and visualizes consumption patterns with Swift Charts. Features a low-friction drink logging engine, session history with detailed BAC graphs, and a GitHub-style activity chart showing 14 weeks of drinking patterns.',
    stack: ['SwiftUI', 'Swift Charts', 'Core Data', 'Widmark Equation'],
    sourceCode: 'https://github.com/ZTW21/BetterBAC',
    screenshots: ['/images/projects/clearbac-1.svg'],
  },
  {
    name: 'Paletter',
    description:
      '2024 Apple Swift Student Challenge winning submission. Extracts dominant colors from any image using a modified Median Cut Quantization (MMCQ) algorithm built from scratch. Generates copyable hex color palettes with an intuitive SwiftUI interface designed around a single-gesture workflow.',
    stack: ['SwiftUI', 'MMCQ Algorithm', 'Color Science', 'Apple SSC Winner'],
    sourceCode: 'https://github.com/ZTW21/StudentSwiftChallenge',
    screenshots: ['/images/projects/paletter-1.svg'],
    badge: 'Apple SSC 2024 Winner',
  },
  {
    name: 'Photo Booking Platform',
    description:
      'Production-grade action photography booking platform. Full-stack application with authenticated booking flows, photographer portfolio galleries, and a client management dashboard. Built with server-side rendering for performance and Framer Motion for fluid page transitions.',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Framer Motion'],
    sourceCode: 'https://github.com/ZTW21/PhotoBookingApp',
    screenshots: ['/images/projects/photobooking-1.svg'],
  },
  {
    name: 'FSI Language Courses',
    description:
      'Interactive language learning companion for the FSI (Foreign Service Institute) course catalog. Features audio playback for pronunciation practice, flashcard-based vocabulary drills with spaced repetition scheduling, and progress tracking across course modules. Supports multiple languages including Chinese and Spanish.',
    stack: ['HTML', 'JavaScript', 'Web Audio API', 'Spaced Repetition'],
    sourceCode: 'https://github.com/ZTW21/fsi',
    livePreview: 'https://fsi.zackwilson.me/',
    screenshots: ['/images/projects/fsi-1.svg'],
  },
  {
    name: 'Charlotte Club Swim',
    description:
      'Deployed website for the UNC Charlotte club swimming team. JSON-driven content management for officer info, competition schedules, team records, and photo galleries. Built so non-technical team officers can update content by editing data files.',
    stack: ['React', 'CSS', 'Vercel', 'JSON CMS'],
    sourceCode: 'https://github.com/ZTW21/CharlotteClubSwim-Website',
    livePreview: 'https://charlotte-club-swim-website.vercel.app/',
    screenshots: ['/images/projects/clubswim-1.svg'],
  },
]

const skills = [
  'Python',
  'Swift',
  'SwiftUI',
  'SQL',
  'Java',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'AWS',
  'Terraform',
  'Docker',
  'Apache Airflow',
  'PostgreSQL',
  'FastAPI',
  'Git',
]

const contact = {
  email: 'clt@zackwilson.me',
}

export { header, about, projects, skills, contact }
