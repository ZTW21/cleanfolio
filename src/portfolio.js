const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://zackwilson.me',
  title: 'ZW.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zack Wilson',
  role: 'Cloud Data Engineer and Mobile Developer',
  description:
    'Passionate about technology, I specialize in Cloud Computing and Mobile Development, showcasing my skills in full-stack projects. My GitHub features innovative work like the my version of the Modified Median Cut Color Quantization algorithm for Apple\'s "Swift Student Challenge." Committed to using tech for real-world solutions, my career is dedicated to making a positive impact.',
  resume: 'https://drive.google.com/file/d/11uf1f7eI9TWH0bf9SF4609xYQYrkQwYe/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zachary-t-wilson/',
    github: 'https://github.com/ZTW21',
  },
}


const projects = [
  
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Color Palette Generator',
    description:
      '2024 Swift Student Challenge Submission. The app allows users to select images from their device and determine the dominant colors using the Median Cut Quantization (MMCQ) algorithm. The app then displays these colors as a palette, enabling users to copy the hexadecimal values of these colors to the clipboard. Designed with an intuitive SwiftUI interface, the app emphasizes user-friendly interactions and a straightforward process for analyzing and sharing color palettes derived from chosen images.',
    stack: ['SwiftUI', 'Swift', 'iOS'],
    sourceCode: 'https://github.com/ZTW21/StudentSwiftChallenge',
    // livePreview: 'https://github.com',
  },
  
  {
    name: 'Public Transportation Optimization through Clustering',
    description:
      'The project aims to enhance the efficiency and reliability of the French public transportation system by identifying patterns and inefficiencies. It utilizes a data-driven approach, focusing on train delays, travel times, and punctuality. The project employs k-means clustering to segment transportation services and identify areas for improvement. The dataset used is sourced from Kaggle\'s "Public Transport Traffic Data in France", encompassing metrics like the number of late trains, average delay of late departing trains, and average travel time.',
    stack: ['Python', 'Jupyter Notebook', 'React', 'Pandas', 'NumPy', 'Matplotlib', 'seaborn', 'Scikit-learn'],
    sourceCode: 'https://github.com/ZTW21/France-Public-Transport-Clustering',
    // livePreview: 'https://github.com',
  },
  
  {
    name: 'WatchOS Swimming Pace Clock',
    description:
      '"AquaPacer" is a watchOS app designed for swimmers to help track their swimming workouts efficiently. It leverages SwiftUI for its interface, integrates with HealthKit for workout management, and offers functionality like a customizable timer, workout session tracking, and idle timer management to enhance the user\'s training experience. This app aims to provide swimmers with a convenient and effective way to monitor their pace and overall workout performance directly from their wrist.',
    stack: ['SwiftUI', 'Swift', 'Combine', 'HealthKit', 'WatchOS'],
    sourceCode: 'https://github.com/ZTW21/Pace-Clock-Swift',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Water Tracker',
    description:
      'A React and AWS Amplify-based web app that enables users to track daily water intake. Utilizing GraphQL for efficient data handling and Tailwind CSS for responsive design, the app offers a seamless experience for setting intake goals, logging water consumption, and visualizing progress. Features include user authentication, real-time updates, and a minimalist UI, focusing on ease of use and personal health tracking.',
    stack: ['React', 'Tailwind CSS', 'AWS Amplify', 'GraphQL', 'Amazon Cognito', 'Node.js'],
    sourceCode: 'https://github.com/ZTW21/itis-4340-water-tracker',
    livePreview: 'https://water-tracker.zackwilson.me/',
  },
  
]


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Swift',
  'Java',
  'JavaScript',
  'HTML/CSS',
  'React',
  'Tailwind CSS',
  'REST API',
  'Amazon Web Services',
  'Git',
  'GitLab',
  'Flutter',
  'Pandas',
  'Numpy',
  'Jupyter Notebook',
  'Seaborn',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'clt@zackwilson.me',
}

export { header, about, projects, skills, contact }
