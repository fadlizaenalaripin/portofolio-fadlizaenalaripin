export const portfolioData = {
  name: "Fadli Zaenal Aripin",
  title: "Senior Data Scientist & Analytics Engineer",
  hero: {
    title: "Transforming Data Into Intelligence",
    subtitle: "Specialized in ML, AI & Business Analytics",
    cta: "Explore My Work"
  },
  about: {
    bio: "Passionate data professional with 5+ years of experience in building data-driven solutions. Expertise in machine learning, data visualization, and cloud analytics platforms.",
    stats: [
      { label: "Projects Delivered", value: "20+" },
      { label: "Years Experience", value: "2+" },
      { label: "Technologies", value: "10+" },
      { label: "Clients", value: "13+" }
    ]
  },
  skills: [
    { name: "Python", level: 95, category: "Programming" },
    { name: "R", level: 85, category: "Programming" },
    { name: "SQL", level: 90, category: "Database" },
    { name: "TensorFlow", level: 80, category: "ML" },
    { name: "PyTorch", level: 75, category: "ML" },
    { name: "Tableau", level: 85, category: "Visualization" },
    { name: "Power BI", level: 80, category: "Visualization" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "Git", level: 90, category: "Tools" }
  ],
  projects: [
    {
      id: 1,
      title: "Predictive Maintenance System",
      description: "ML model that predicts equipment failure 72 hours in advance, reducing downtime by 40%",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070",
      tech: ["Python", "TensorFlow", "AWS", "Docker"],
      category: "Machine Learning",
      steps: [
        {
          title: "Exploratory Data Analysis",
          desc: "Menganalisis korelasi antara sensor suhu dan getaran menggunakan distribusi probabilitas untuk mendeteksi anomali awal.",
          img: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=1000"
        },
        {
          title: "Model Architecture",
          desc: "Membangun LSTM (Long Short-Term Memory) network untuk memproses data time-series dari sensor mesin kargo.",
          img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000"
        },
        {
          title: "Cloud Deployment",
          desc: "Containerisasi model menggunakan Docker dan deploy ke AWS SageMaker untuk monitoring inferensi secara real-time.",
          img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
        }
      ]
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard processing 1M+ records daily for executive decision making",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=2070",
      tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
      category: "Data Visualization",
      steps: [
        {
          title: "Data Pipeline Design",
          desc: "Merancang skema database PostgreSQL yang dioptimalkan untuk query agregasi cepat pada jutaan baris data.",
          img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000"
        },
        {
          title: "Frontend Engineering",
          desc: "Menggunakan D3.js untuk membuat visualisasi kustom yang interaktif dan responsif terhadap filter user.",
          img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000"
        },
        {
          title: "Performance Tuning",
          desc: "Implementasi Redis caching untuk mempercepat loading data dashboard hingga di bawah 1 detik.",
          img: "https://images.unsplash.com/photo-1558494949-ef010ccdcc51?q=80&w=1000"
        }
      ]
    },
    {
      id: 3,
      title: "Customer Segmentation Engine",
      description: "Unsupervised learning algorithm that identified 5 key customer segments, increasing ROI by 25%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
      tech: ["Python", "Scikit-learn", "Pandas", "Tableau"],
      category: "Data Science",
      steps: [
        {
          title: "Feature Engineering",
          desc: "Transformasi data mentah transaksi menjadi fitur RFM (Recency, Frequency, Monetary) menggunakan Pandas.",
          img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000"
        },
        {
          title: "Clustering Logic",
          desc: "Menerapkan algoritma K-Means dan menentukan jumlah cluster optimal menggunakan metode Elbow.",
          img: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=1000"
        },
        {
          title: "Business Insights",
          desc: "Visualisasi hasil segmentasi ke Tableau untuk digunakan oleh tim marketing dalam kampanye tertarget.",
          img: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=1000"
        }
      ]
    },
    {
      id: 4,
      title: "Fraud Detection Pipeline",
      description: "Real-time fraud detection system with 98.5% accuracy for financial transactions",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      tech: ["PySpark", "Kafka", "XGBoost", "PostgreSQL"],
      category: "Data Engineering",
      steps: [
        {
          title: "Stream Processing",
          desc: "Membangun pipeline data real-time menggunakan Apache Kafka untuk menangkap transaksi masuk.",
          img: "https://images.unsplash.com/photo-1558494949-ef010ccdcc51?q=80&w=1000"
        },
        {
          title: "Classifier Training",
          desc: "Melatih model XGBoost pada dataset imbalance dengan teknik SMOTE untuk mendeteksi pola fraud.",
          img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000"
        },
        {
          title: "API Integration",
          desc: "Menyediakan endpoint REST API untuk verifikasi transaksi instan dengan latensi rendah.",
          img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1000"
        }
      ]
    }
  ],
  contact: {
    email: "padlijaenal9@gmail.com",
    linkedin: "www.linkedin.com/in/fadli-zaenal-aripin/",
    github: "github.com/fadlizaenalaripin",
    location: "Cirebon, Indonesia"
  }
};