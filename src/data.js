export const cvLink = "https://raudel25.github.io/my-cv/document.pdf";

export const email = "raudel.gmolina@gmail.com";

export const phone = "+53 59253662";

export const socials = [
  {
    name: "GitHub",
    handle: "raudel25",
    url: "https://github.com/raudel25",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "raudel25",
    url: "https://www.linkedin.com/in/raudel25/",
    icon: "linkedin",
  },
  {
    name: "Codeforces",
    handle: "raudel25",
    url: "https://codeforces.com/profile/raudel25",
    icon: "codeforces",
  },
];

export const projects = [
  {
    title: "Travel Agency",
    stack: ["React", "Antd", ".NET", "MySQL", "OData"],
    description:
      "Web platform connecting tourists with travel agencies, with a React client and an ASP.NET Core API over MySQL.",
    image: "projects/TravelAgency.webp",
    sourceUrl: "https://github.com/ARJ-Code/Travel-Agency",
    liveUrl: "https://travel-agency-client.onrender.com/",
  },
  {
    title: "Cinemapedia",
    stack: ["Flutter", "Dart"],
    description:
      "Mobile client for The Movie Database that shows what's playing in theaters.",
    image: "projects/Cinemapedia.webp",
    sourceUrl: "https://github.com/raudel25/cinemapedia_app",
    liveUrl: "https://github.com/raudel25/cinemapedia_app/releases",
    liveLabel: "Releases",
  },
  {
    title: "Chess",
    stack: ["Python", "pygame"],
    description:
      "Chess engine with MiniMax (alpha-beta pruning) and Monte Carlo tree search players, playable through a pygame interface.",
    image: "projects/chess.webp",
    sourceUrl: "https://github.com/raudel25/Chess",
  },
  {
    title: "Matcom Social",
    stack: ["React", "Material UI", "Go", "PostgreSQL"],
    description:
      "Social network with profiles, posts and followers, backed by a Go API.",
    image: "projects/social-network.webp",
    sourceUrl: "https://github.com/raudel25/social-network-api",
    liveUrl: "https://social-network-client-6f8h.onrender.com",
  },
  {
    title: "Teslo Shop",
    stack: ["React", "Next", "Tailwind CSS", "PostgreSQL"],
    description: "Clothing e-commerce store built with Next.js.",
    image: "projects/teslo-shop.webp",
    sourceUrl: "https://github.com/raudel25/teslo-shop",
    liveUrl: "https://teslo-shop-phi.vercel.app/",
  },
  {
    title: "Expression",
    stack: ["C#", "Blazor", "Bootstrap"],
    description:
      "Parses math expressions from text, computes their derivatives and evaluates them with BigNum, my own arbitrary-precision number library.",
    image: "projects/Expression.webp",
    sourceUrl: "https://github.com/raudel25/Expression",
    liveUrl: "https://expression-dxtu.onrender.com",
  },
  {
    title: "Journal App",
    stack: ["React", "Redux", "Supabase"],
    description: "Web app where users write and store their notes.",
    image: "projects/JournalApp.webp",
    sourceUrl: "https://github.com/raudel25/Journal-App",
    liveUrl: "https://raudel25.github.io/Journal-App/",
  },
  {
    title: "Calendar App",
    stack: ["React", "Redux", ".NET", "PostgreSQL"],
    description: "Calendar where users create and manage their events.",
    image: "projects/CalendarApp.webp",
    sourceUrl: "https://github.com/raudel25/Calendar-App",
    liveUrl: "https://calendar-app-44rm.onrender.com/",
  },
];

// Grouped by company like LinkedIn, most recent first.
// Dates are "MM/YYYY" or "Present".
export const experience = [
  {
    company: "biZne",
    image: "bizne.jpg",
    roles: [
      {
        title: "Senior Software Engineer, Mobile & Web",
        dates: ["09/2025", "Present"],
        location: "Mexico City, Mexico",
        description:
          "I build scalable mobile and web interfaces with Flutter, Dart and modern web frameworks, delivering core features end to end, from UI implementation to state management and performance. I use AI agents and AI-driven workflows to speed up development and refactoring while keeping code quality and testability high.",
        skills: ["Dart", "Flutter", "GetX", "AI-assisted development"],
      },
    ],
  },
  {
    company: "University of Havana",
    image: "uh_logo.jpg",
    roles: [
      {
        title: "Professor of Data Structures and Algorithms",
        dates: ["03/2025", "Present"],
        location: "Havana, Cuba",
        description: "I teach the Data Structures and Algorithms course.",
        skills: ["Data Structures and Algorithms", "Competitive Programming"],
      },
      {
        title: "Student Assistant",
        dates: ["04/2022", "03/2025"],
        location: "Havana, Cuba",
        description:
          "Teaching assistant for the Algebra and Data Structures and Algorithms courses during my degree.",
        skills: ["Algebra", "Data Structures and Algorithms"],
      },
    ],
  },
  {
    company: "jobs2live",
    image: "./jobs2live_logo.jpg",
    roles: [
      {
        title: "Full Stack Developer",
        dates: ["09/2023", "09/2025"],
        location: "Madrid, Spain",
        description:
          "Full stack development with React and Next on the client, .NET and PostgreSQL on the server, and web scraping with Playwright and Nodriver.",
        skills: [
          "TypeScript",
          "React",
          "Antd",
          "Next",
          "C#",
          ".Net",
          "PostgreSQL",
          "Odata",
          "Playwright",
          "Nodriver",
          "Web Scraping",
        ],
      },
    ],
  },
  {
    company: "Business Seed",
    image: "business_seed_logo.jpg",
    roles: [
      {
        title: "Mobile Developer",
        dates: ["02/2024", "12/2024"],
        location: "Mexico City, Mexico",
        description: "Mobile app development with Flutter.",
        skills: ["Dart", "Flutter", "GetX"],
      },
    ],
  },
];

export const education = [
  {
    company: "University of Havana",
    image: "uh_logo.jpg",
    roles: [
      {
        title: "Bachelor's degree in Computer Science",
        dates: ["11/2021", "03/2025"],
        location: "Havana, Cuba",
        description:
          "Graduated Summa Cum Laude, with a focus on programming, algorithms and mathematics.",
        skills: [
          "Programming",
          "Algebra",
          "Data Structures",
          "Algorithms",
          "Databases",
          "Distributed systems",
        ],
      },
    ],
  },
];

const icon = (id) => `https://skillicons.dev/icons?i=${id}`;

export const skillGroups = [
  {
    name: "Languages",
    skills: [
      { text: "C#", icon: icon("cs") },
      { text: "TypeScript", icon: icon("ts") },
      { text: "JavaScript", icon: icon("js") },
      { text: "Dart", icon: icon("dart") },
      { text: "Python", icon: icon("python") },
      { text: "Go", icon: icon("go") },
      { text: "C++", icon: icon("cpp") },
      { text: "C", icon: icon("c") },
      { text: "Rust", icon: icon("rust") },
    ],
  },
  {
    name: "Frontend and mobile",
    skills: [
      { text: "React", icon: icon("react") },
      { text: "Next", icon: icon("next") },
      { text: "Redux", icon: icon("redux") },
      { text: "Flutter", icon: icon("flutter") },
      { text: "Tailwind CSS", icon: icon("tailwind") },
      { text: "SASS", icon: icon("sass") },
      { text: "HTML", icon: icon("html") },
      { text: "CSS", icon: icon("css") },
    ],
  },
  {
    name: "Backend and data",
    skills: [
      { text: ".NET", icon: icon("dotnet") },
      { text: "PostgreSQL", icon: icon("postgresql") },
      { text: "MySQL", icon: icon("mysql") },
      { text: "Supabase", icon: icon("supabase") },
    ],
  },
  {
    name: "AI-assisted development",
    skills: [
      { text: "Claude Code", icon: "skills/claude-code.svg" },
      { text: "AI agent orchestration", icon: "skills/ai-agents.svg" },
      { text: "Spec-driven development", icon: "skills/spec-driven.svg" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { text: "Git", icon: icon("git") },
      { text: "GitHub", icon: icon("github") },
      { text: "Docker", icon: icon("docker") },
      { text: "Linux", icon: icon("linux") },
      { text: "LaTeX", icon: icon("latex") },
    ],
  },
];

// Most recent first; year is null when unknown.
export const achievements = [
  {
    year: "2025",
    title: "Summa Cum Laude",
    event: "Bachelor's degree, also awarded the Scientific Merit Award",
  },
  {
    year: "2023",
    title: "Silver medal",
    event: "ICPC Caribbean Finals",
  },
  {
    year: "2022",
    title: "12th place",
    event: "ICPC Caribbean Finals",
  },
  {
    year: "2021",
    title: "10th place",
    event: "ICPC Caribbean Finals",
  },
  {
    year: null,
    title: "National preselection, twice",
    event: "Mathematics competitions",
  },
];
