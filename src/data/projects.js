// Add new projects by appending to this array — Projects.jsx renders entirely from this data.
// `category` values populate the filter bar automatically (no filter code changes needed).
// Leave `liveUrl` / `githubUrl` as null when a link genuinely doesn't exist yet.
export const projects = [
  {
    id: 'kids-colours',
    title: 'Kids Colours',
    tagline: 'Full-stack e-commerce platform for kids’ colouring books & e-books',
    description:
      'A production full-stack platform for browsing, purchasing and delivering kids’ colouring books and e-books. The catalogue separates free and premium content, checkout runs through an integrated Razorpay payment flow, and an admin console handles product, pricing and order management end to end. Once a payment succeeds, the purchased book is delivered automatically over email and WhatsApp — no manual follow-up needed on either side.',
    // Real product logo/branding. It's a square badge, not a UI screenshot,
    // so the card renders it with object-contain (imageFit) instead of
    // cropping it to fill a wide rectangle.
    image: '/images/kids-colours-logo.jpg',
    imageFit: 'contain',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Nginx', 'Razorpay API', 'Git'],
    category: ['Full Stack', 'React', 'Java'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    caseStudy: {
      overview:
        'Kids Colours is a full-stack e-commerce platform for kids’ colouring books and e-books, covering the full flow from browsing the catalogue to payment and digital delivery.',
      problem:
        'Selling downloadable colouring books and e-books needs more than a static storefront: it needs a catalogue that distinguishes free and premium content, a reliable checkout, and a way to get the purchased file to the customer without manual follow-up.',
      solution:
        'I built a React single-page storefront backed by a Spring Boot REST API and MySQL database, with an admin area for managing products, pricing and access tiers. Razorpay handles checkout, and successful payments trigger an automated email/WhatsApp delivery workflow so customers receive their books without manual intervention.',
      myRole:
        'Designed and built the full stack solo: the React frontend, the Spring Boot backend and REST API, the MySQL schema, the Razorpay integration, and the Nginx-based deployment setup.',
      technology: ['React.js', 'Spring Boot', 'MySQL', 'Nginx', 'Razorpay API'],
      keyFeatures: [
        'Public catalogue with free and premium colouring books & e-books',
        'Admin dashboard for product, pricing and inventory management',
        'Razorpay-based checkout for premium content',
        'Automated post-purchase delivery via email / WhatsApp',
        'Role-separated access between customers and admin',
      ],
      architecture:
        'React frontend communicates with a Spring Boot REST API over HTTP. Spring Boot handles business logic, authentication for the admin area, and persistence to MySQL, with Nginx used as a reverse proxy / static file server in front of the services.',
      challenges:
        'Coordinating a payment webhook with a downstream delivery step (email/WhatsApp) reliably, and structuring the product model so free and premium content share the same catalogue and admin workflow instead of two separate systems.',
      outcome:
        'A working end-to-end platform — catalogue, payment and delivery — running behind an Nginx-fronted deployment.',
    },
  },
  {
    id: 'book-management-system',
    title: 'Book Management System',
    tagline: 'Java/Spring Boot book inventory CRUD system',
    description:
      'A book inventory management system for adding, editing, searching and organizing book records, with a Spring Boot backend and SQL-backed persistence behind a responsive UI.',
    // Real screenshot pulled from the project's own GitHub README.
    image: '/images/project-book-management.jpg',
    technologies: ['Java', 'Spring Boot', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
    category: ['Full Stack', 'Java'],
    liveUrl: null,
    githubUrl: 'https://github.com/DeveloperAravinth0027/Book-Management-System',
    featured: false,
  },
  {
    id: 'wifi-finder',
    title: 'Wi-Fi Finder',
    tagline: 'Map-based free public Wi-Fi hotspot locator',
    description:
      'A location-aware web app that helps users discover free public Wi-Fi hotspots nearby on an interactive map, with search and filtering, built with React and Leaflet on top of live OpenStreetMap data.',
    // Real screenshot of the live app's own loading screen — its map view
    // wouldn't render in a headless browser (likely a CORS block on its
    // hotspot-data API call), so this is the cleanest honest capture available.
    image: '/images/wifi-finder-cover.jpg',
    technologies: ['React.js', 'Leaflet', 'JavaScript'],
    category: ['React', 'Frontend'],
    liveUrl: 'https://best-wifi-finder.vercel.app/',
    githubUrl: 'https://github.com/DeveloperAravinth0027/wifi-finder',
    featured: false,
  },
  {
    id: 'corporate-landing-page',
    title: 'Corporate Landing Page',
    tagline: 'Conversion-focused business landing page',
    description:
      'A professional business landing page built with a component-driven layout, clear visual hierarchy and mobile-first responsive design to support lead conversion.',
    image: '/images/project-landing.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['Frontend'],
    liveUrl: 'https://developeraravinth0027.github.io/Axolotron-Corporate-Landing-Website/',
    githubUrl: 'https://github.com/DeveloperAravinth0027/Axolotron-Corporate-Landing-Website',
    featured: false,
  },
]
