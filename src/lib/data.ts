export const portfolioData = {
  name: "Fadli Zaenal Aripin",
  title: "Senior Data Scientist & Analytics Engineer",
  hero: {
    title: "Transforming Data Into Intelligence",
    subtitle: "Specialized in ML, AI & Business Analytics",
    cta: "Explore My Work"
  },
  about: {
    bio: "Passionate data professional with 2+ years of experience in building data-driven solutions. Expertise in machine learning, data visualization, and cloud analytics platforms, combined with modern web development skills.",
    stats: [
      { label: "Projects Delivered", value: "20+" },
      { label: "Years Experience", value: "2+" },
      { label: "Technologies", value: "10+" },
    ]
  },
  skills: [
    { name: "Python", level: 95, category: "Programming" },
    { name: "SQL", level: 90, category: "Database" },
    { name: "TensorFlow", level: 80, category: "ML" },
    { name: "Tableau", level: 85, category: "Visualization" },
    { name: "Next.js", level: 85, category: "Web" },
    { name: "React", level: 80, category: "Web" },
    { name: "Power BI", level: 80, category: "Visualization" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Git", level: 90, category: "Tools" }
  ],
  projects: [
    {
      id: 1,
      title: "Golda Coffee 3D Experience",
      description: "Interactive 3D product showcase using Next.js and Three.js for immersive brand experience.",
      image: "/golda.png",
      tech: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      github: "https://github.com/fadlizaenalaripin/golda-coffee-web",
      link: "https://coffe-golda3d.netlify.app/",
      steps: [
        { title: "3D Scene Setup", desc: "Mengintegrasikan React Three Fiber untuk me-render model produk kopi." },
        { title: "Smooth Animations", desc: "Implementasi Framer Motion untuk transisi kamera 3D." }
      ]
    },
    {
      id: 2,
      title: "Eduspace E-Learning",
      description: "Modern learning management platform built with React for streamlined educational content delivery.",
      image: "/eduspace.png",
      tech: ["React.js", "JavaScript", "CSS3", "Netlify"],
      category: "Web Development",
      github: "https://github.com/fadlizaenalaripin/eduspace",
      link: "https://eduspace-learn.netlify.app/",
      steps: [
        { title: "UI/UX Architecture", desc: "Merancang struktur komponen React yang modular." },
        { title: "State Management", desc: "Mengelola progres belajar user secara efisien." }
      ]
    },
    {
      id: 6,
      title: "Smart AI Sales Dashboard",
      description: "High-performance, Cyberpunk-inspired smart dashboard featuring AI analyst insights, universal CSV mapping, and predictive market projections.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      tech: ["Python", "FastAPI", "Next.js", "Scikit-learn", "Tailwind CSS"],
      category: "AI & Data Science",
      github: "https://github.com/fadlizaenalaripin/Smart-AI-Sales-Dashboard",
      link: "https://dashboard-analitik-ai.netlify.app/",
      steps: [
        { title: "Backend Architecture", desc: "Membangun API high-velocity dengan FastAPI dan asinkronus data caching." },
        { title: "AI Analytics Engine", desc: "Implementasi Linear Regression dengan Scikit-learn untuk prediksi revenue masa depan." },
        { title: "Cyber UI Design", desc: "Merancang antarmuka Glassmorphism responsif yang mendukung pemetaan kolom CSV dinamis." }
      ]
    },
    {
      id: 3,
      title: "Analisis Bitcoin (BTC) 5 Tahun Terakhir",
      description: "Deep dive data analysis on BTC price movements, volatility, and historical trends using Python.",
      image: "/btc.jpg",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Science",
      github: "https://github.com/fadlizaenalaripin/analisis-btc-5-tahun-terakhir",
      link: "https://github.com/fadlizaenalaripin/analisis-btc-5-tahun-terakhir",
      steps: [
        { title: "Data Acquisition", desc: "Mengambil data historis BTC dari Yahoo Finance API." },
        { title: "Exploratory Data Analysis", desc: "Menganalisis Moving Average dan Volatilitas harga." }
      ]
    },
    {
      id: 4,
      title: "Superstore Business Intelligence Dashboard",
      description: "Built an interactive BI dashboard using Google Looker Studio to monitor sales performance and track KPIs.",
      image: "/superstore.png",
      tech: ["Looker Studio", "Google Sheets", "Data Analytics", "KPI Tracking"],
      category: "Data Visualization",
      link: "https://lookerstudio.google.com/s/icy-LqOh3hM",
      steps: [
        { title: "Data Integration", desc: "Menghubungkan sumber data Superstore ke Looker Studio secara real-time." },
        { title: "KPI Design", desc: "Merancang metrik utama seperti Sales, Profit Margin, dan Regional Performance." }
      ]
    },
    {
 id: 7,
  title: "JARVIS-V1: AI Automation Engine",
  description: "A high-performance asynchronous desktop assistant that automates workflows through intelligent voice and intent processing.",
  image: "/jarvis.png",
  tech: ["Python", "Asyncio", "OpenAI", "PyQt6", "Faster-Whisper"],
  category: "AI & Automation",
  github: "https://github.com/fadlizaenalaripin/jarvis-system-automation",
  steps: [
    { 
      title: "Concurrent Execution", 
      desc: "Architected a non-blocking system using Asyncio to handle multi-threaded tasks like voice recognition and GUI updates simultaneously." 
    },
    { 
      title: "Natural Interaction", 
      desc: "Implemented state-of-the-art STT/TTS pipelines to achieve low-latency human-machine communication." 
    },
    { 
      title: "Workflow Automation", 
      desc: "Developed custom intent-handling logic to automate third-party applications like Spotify and WhatsApp through system-level protocols." 
    }
  ]
    }
  ],
  contact: {
    email: "padlijaenal9@gmail.com",
    linkedin: "linkedin.com/in/fadli-zaenal-aripin/",
    github: "github.com/fadlizaenalaripin",
    location: "Cirebon, Indonesia"
  }
};