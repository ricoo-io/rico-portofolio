export interface ProjectDoc {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

export const projectDocs: Record<string, ProjectDoc> = {
  "sim-sekolah": {
    id: "sim-sekolah",
    title: "SIM-Sekolah",
    category: "Full-stack Web Development",
    description: "SIM-Sekolah is an end-to-end educational management platform designed to digitize and automate core academic administrative workflows, from student records to grading systems.",
    techStack: ["React", "TypeScript", "Express.js", "MySQL"],
    images: [
      { 
        src: "/project-documentation/sim-sekolah/login.png", 
        title: "Secure Authentication", 
        description: "A robust and secure login system that utilizes Role-Based Access Control (RBAC). It intelligently authenticates users and routes them directly to their respective dashboards based on their roles (Teacher vs. Administrator)." 
      },
      { 
        src: "/project-documentation/sim-sekolah/dashboardAdmin.png", 
        title: "Administrator Dashboard", 
        description: "A centralized command center designed for school administrators. It provides an at-a-glance overview of school statistics, allows management of user roles, and enables comprehensive monitoring of all system activities." 
      },
      { 
        src: "/project-documentation/sim-sekolah/dataSiswa.png", 
        title: "Student Data Management", 
        description: "A powerful CRUD interface for managing student records. Administrators can easily add, update, and search through detailed student information, ensuring academic records are always accurate and up-to-date." 
      },
      { 
        src: "/project-documentation/sim-sekolah/dashboardGuru.png", 
        title: "Teacher Dashboard", 
        description: "A specialized, clutter-free view tailored specifically for teachers. It allows educators to quickly access their teaching schedules, manage their assigned classes, and review upcoming academic tasks." 
      },
      { 
        src: "/project-documentation/sim-sekolah/inputNilai.png", 
        title: "Automated Grading System", 
        description: "An intuitive interface that streamlines the grading process. Teachers can efficiently input scores while the system automatically calculates final grades and performance metrics, significantly reducing administrative overhead." 
      },
      { 
        src: "/project-documentation/sim-sekolah/walikelas.png", 
        title: "Homeroom Teacher View", 
        description: "Specific tools and reports designed for homeroom teachers (Wali Kelas) to track their class's overall academic performance, attendance, and manage student evaluations." 
      }
    ]
  },
  "vz-id": {
    id: "vz-id",
    title: "VZ.ID",
    category: "E-Commerce Web",
    description: "VZ.ID is a premium, high-performance e-commerce storefront crafted to deliver a frictionless online shopping experience, featuring a dynamic product catalog and robust cart system.",
    techStack: ["HTML", "CSS", "PHP", "JavaScript"],
    images: [
      { 
        src: "/project-documentation/vz-id/home_1.png", 
        title: "Dynamic Landing Page", 
        description: "A visually engaging storefront designed to capture user interest immediately. It features promotional banners, highlighted categories, and a seamless navigation system that guides customers to trending products." 
      },
      { 
        src: "/project-documentation/vz-id/pencarian.png", 
        title: "Advanced Search & Filtering", 
        description: "Powerful search functionality that allows users to quickly find exactly what they are looking for. Built with efficient backend queries to deliver instant results even with a large product catalog." 
      },
      { 
        src: "/project-documentation/vz-id/detailProduk_3.png", 
        title: "Comprehensive Product Details", 
        description: "A conversion-optimized product page showcasing high-quality image galleries, detailed specifications, and dynamic pricing, helping buyers make informed purchasing decisions effortlessly." 
      },
      { 
        src: "/project-documentation/vz-id/keranjang.png", 
        title: "Frictionless Shopping Cart", 
        description: "A real-time cart system that updates dynamically. Users can easily modify quantities, review their selections, and see instant price calculations without needing to refresh the page." 
      },
      { 
        src: "/project-documentation/vz-id/wishlist.png", 
        title: "Personalized Wishlist", 
        description: "Enables users to save their favorite items for future purchases. This feature improves user engagement and encourages return visits, directly impacting overall conversion rates." 
      },
      { 
        src: "/project-documentation/vz-id/checkout.png", 
        title: "Streamlined Checkout Process", 
        description: "A highly optimized, multi-step checkout flow designed for speed and clarity. It minimizes distractions to reduce cart abandonment and ensures a secure transaction process." 
      },
      { 
        src: "/project-documentation/vz-id/daftarOrder.png", 
        title: "Order Tracking & History", 
        description: "Gives customers full transparency by allowing them to track the status of their active orders and review their complete purchase history in a clean, organized table." 
      },
      { 
        src: "/project-documentation/vz-id/dashboardAdmin.png", 
        title: "Powerful Admin Analytics", 
        description: "A comprehensive backend dashboard for store owners. It provides crucial business metrics, tracks revenue, and monitors overall store performance in real-time." 
      },
      { 
        src: "/project-documentation/vz-id/kelolaProduk.png", 
        title: "Inventory & Catalog Management", 
        description: "Complete CMS tools allowing administrators to easily add new products, manage stock levels, organize categories, and configure promotional discounts all from a secure backend interface." 
      }
    ]
  },
  "simple-billiard-game": {
    id: "simple-billiard-game",
    title: "Simple Billiard Game",
    category: "Desktop Application",
    description: "Simple Billiard Game is a 2D physics-based billiard simulation application designed to deliver realistic gameplay mechanics, ball-to-ball elastic collisions, and clean graphical rendering in a desktop environment.",
    techStack: ["C++", "SFML"],
    images: [
      {
        src: "/project-documentation/billiard/home.png",
        title: "Main Menu Screen",
        description: "The initial home screen of the game, presenting a clean layout where users can start a new match or configure options."
      },
      {
        src: "/project-documentation/billiard/gameStart.png",
        title: "Match Initialization",
        description: "The setup phase of a game session, rendering the green felt table, pockets, and the initial triangular rack arrangement of billiard balls."
      },
      {
        src: "/project-documentation/billiard/gameStart_2.png",
        title: "Target Line & Aiming",
        description: "Interactive preview lines displaying cue ball aiming vectors and force indicators, helping the player make precise shots."
      },
      {
        src: "/project-documentation/billiard/gameplay.png",
        title: "Active Gameplay Simulation",
        description: "Real-time execution of physics calculations as the balls scatter across the table. Custom drag and collision logic keep the simulation smooth and responsive."
      },
      {
        src: "/project-documentation/billiard/win.png",
        title: "Victory Screen",
        description: "The final success screen displayed when a player wins, highlighting score results and victory achievements."
      },
      {
        src: "/project-documentation/billiard/gameOver.png",
        title: "Game Over Screen",
        description: "The end-of-game screen displayed when all attempts are exhausted, prompting the player to restart or return to the main menu."
      }
    ]
  },
  "pandana": {
    id: "pandana",
    title: "PanDana",
    category: "Mobile Application",
    description: "PanDana is a premium personal finance companion mobile application that helps users monitor their balance, record income and expenses, analyze transaction history, and visualize budget distribution.",
    techStack: ["Kotlin", "Jetpack Compose", "Android Studio"],
    images: [
      {
        src: "/project-documentation/pandana/profile.png",
        title: "Application Overview & Branding",
        description: "The official PanDana branding featuring a clean logo alongside previews of both the light and dark mode dashboards."
      },
      {
        src: "/project-documentation/pandana/home.png",
        title: "Interactive Financial Dashboard",
        description: "A comprehensive overview page displaying total balance, recent statistics, quick expense/income aggregates, and the latest transaction history."
      },
      {
        src: "/project-documentation/pandana/input.png",
        title: "Add Transaction Flow",
        description: "A form-driven screen allowing users to easily record new expenses or income with amount inputs, category selection tags, date pickers, and custom notes."
      },
      {
        src: "/project-documentation/pandana/edit.png",
        title: "Edit Transaction Details",
        description: "A pre-filled form that lets users update details or delete existing records, instantly recalculating and updating the offline database."
      },
      {
        src: "/project-documentation/pandana/history.png",
        title: "Complete Transaction History",
        description: "An advanced list view with full search capabilities and category/time filters to help users review and track their spending history."
      },
      {
        src: "/project-documentation/pandana/laporan.png",
        title: "Visual Analytics & Reports",
        description: "A detailed report screen providing monthly financial stats, category-wise progress bars, and a dynamic doughnut chart visualizing expense distributions."
      }
    ]
  }
};
