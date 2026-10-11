// ✏️ Add real GitHub / live links and screenshots (put images in public/ and set `image`).
export const projects = [
  {
    name: "Billing & Inventory SaaS",
    description: "A billing and inventory management web application with a dashboard and product management.",
    problem: "Small businesses need one place to manage products, stock and invoices.",
    architecture: "Next.js frontend → Express REST API → MongoDB, orchestrated with Docker Compose.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Docker", "Docker Compose", "REST API"],
    features: ["Billing", "Inventory", "Dashboard", "Authentication", "Product management", "API integration", "Database management", "Containerized deployment"],
    deploy: "Docker Compose", github: "#", demo: "#", image: "",
  },
  {
    name: "E-Commerce Platform",
    description: "A full online store with customer flow and an admin dashboard.",
    problem: "Selling products online needs secure accounts, a cart and order handling.",
    architecture: "React SPA → Express REST API (JWT auth) → MongoDB, packaged in Docker.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    features: ["Authentication", "Products", "Cart", "Orders", "Admin dashboard", "REST APIs", "Database integration"],
    deploy: "Docker", github: "#", demo: "#", image: "",
  },
  {
    name: "Disaster Management Platform",
    description: "A data dashboard that shows state-wise disaster data on an interactive India map.",
    problem: "Disaster data is hard to understand when it is not visual.",
    architecture: "Next.js UI with interactive map → REST APIs → MongoDB.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Interactive Maps", "REST APIs"],
    features: ["Interactive India map", "State-wise data", "Dashboard", "Data visualization", "API integration"],
    deploy: "[Add deployment]", github: "#", demo: "#", image: "",
  },
  {
    name: "School / UDISE Data Platform",
    description: "A platform to browse school data by UDISE code, with maps and a dashboard.",
    problem: "School records arrive as large CSV files that are difficult to search and compare.",
    architecture: "CSV import and processing → backend APIs → dashboard and map UI.",
    stack: ["Next.js", "Node.js", "MongoDB", "CSV", "Maps"], // ✏️ confirm stack
    features: ["School data", "UDISE codes", "Data processing", "CSV integration", "Maps", "Dashboard", "Backend APIs"],
    deploy: "[Add deployment]", github: "#", demo: "#", image: "",
  },
];
