const stars = [
  {
    size: 743,
    iconSize: 36,
    rotate: 108,
  },
  {
    size: 982,
    iconSize: 57,
    rotate: 144,
  },
  {
    size: 621,
    iconSize: 42,
    rotate: 280,
  },
  {
    size: 815,
    iconSize: 57,
    rotate: 216,
  },
  {
    size: 786,
    iconSize: 42,
    rotate: 180,
  },
  {
    size: 924,
    iconSize: 45,
    rotate: 70,
  },
  {
    size: 669,
    iconSize: 48,
    rotate: 370,
  },
  {
    size: 991,
    iconSize: 60,
    rotate: 288,
  },
  {
    size: 708,
    iconSize: 60,
    rotate: 324,
  },
  {
    size: 967,
    iconSize: 57,
    rotate: 360,
  },
];

const circles = [
  {
    size: 873,
    iconSize: 36,
    rotate: 108,
  },
  {
    size: 629,
    iconSize: 57,
    rotate: 144,
  },
  {
    size: 941,
    iconSize: 42,
    rotate: 324,
  },
  {
    size: 756,
    iconSize: 57,
    rotate: 216,
  },
  {
    size: 682,
    iconSize: 42,
    rotate: 180,
  },
  {
    size: 995,
    iconSize: 45,
    rotate: 288,
  },
  {
    size: 718,
    iconSize: 48,
    rotate: 50,
  },
  {
    size: 804,
    iconSize: 60,
    rotate: 288,
  },
  {
    size: 863,
    iconSize: 40,
    rotate: 74,
  },
  {
    size: 651,
    iconSize: 57,
    rotate: 360,
  },
];

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2023",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "http://heh.hn/jacabzan",
    image: "https://placehold.co/600x400",
  },
  {
    company: "Tech Solutions Inc.",
    year: "2022",
    title: "E-commerce Website Redesign",
    results: [
      { title: "Boosted conversion rate by 25%" },
      { title: "Increased average order value by 15%" },
      { title: "Reduced bounce rate by 10%" },
    ],
    link: "http://example.com/ecommerce",
    image: "https://placehold.co/600x400",
  },
  {
    company: "Global Marketing Agency",
    year: "2021",
    title: "Social Media Marketing Campaign",
    results: [
      { title: "Gained 10,000 new followers on Instagram" },
      { title: "Increased brand awareness by 20%" },
      { title: "Generated 500 leads through social media" },
    ],
    link: "http://example.com/social-media",
    image: "https://placehold.co/600x400",
  },
  {
    company: "Creative Studio",
    year: "2020",
    title: "Brand Identity Design",
    results: [
      { title: "Developed a unique and memorable brand identity" },
      { title: "Improved brand recognition by 15%" },
      { title: "Increased customer loyalty by 10%" },
    ],
    link: "http://example.com/brand-identity",
    image: "https://placehold.co/600x400",
  },
  {
    company: "Software Development Company",
    year: "2019",
    title: "Mobile App Development",
    results: [
      { title: "Launched a successful mobile app with 5-star ratings" },
      { title: "Increased customer engagement by 30%" },
      { title: "Generated $100,000 in revenue from app downloads" },
    ],
    link: "http://example.com/mobile-app",
    image: "https://placehold.co/600x400",
  },
];
type PortfolioProject = (typeof portfolioProjects)[number];

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "John Doe",
    position: "Software Engineer @ InnovateTech",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",

    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Jane Smith",
    position: "Product Manager @ Creativa",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",

    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Emily Clarke",
    position: "HR Specialist @ PeopleSolutions",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",

    avatar: "https://i.pravatar.cc/150?img=34",
  },
  {
    name: "Michael Brown",
    position: "Finance Analyst @ CapitalGrowth",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",

    avatar: "https://i.pravatar.cc/150?img=35",
  },
];
type Testimonial = (typeof testimonials)[number];

const tools = [
  {
    title: "Nuxt",
    icon: "logos:nuxt-icon",
  },
  {
    title: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    title: "JavaScript",
    icon: "logos:javascript",
  },
  {
    title: "Visual Studio Code",
    icon: "logos-visual-studio-code",
  },
  {
    title: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    title: "Edge",
    icon: "logos:microsoft-edge",
  },
];

export { stars, circles, portfolioProjects, words, testimonials, tools };
export { type PortfolioProject, type Testimonial };
