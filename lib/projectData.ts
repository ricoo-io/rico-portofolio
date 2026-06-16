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
  }
};
