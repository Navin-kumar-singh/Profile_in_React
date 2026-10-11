export const topics = [
  { id: "docker", title: "Docker", level: "Skill",
    items: ["Docker Images", "Containers", "Dockerfile", "Docker Compose", "Networks", "Volumes", "Multi-stage builds", "Docker Hub", "Containerized Node.js", "Containerized Next.js", "Production builds", "Image optimization"],
    text: "Build images, run containers, expose ports, set environment variables, persist data with volumes and connect frontend, backend and database containers.",
    flowTitle: "Container setup", flow: ["Frontend container", "Backend container", "MongoDB container + volume"] },
  { id: "k8s", title: "Kubernetes", level: "Learning",
    items: ["Pods", "Deployments", "Services", "ConfigMaps", "Secrets", "Namespaces", "ReplicaSets", "Ingress", "HPA", "PV / PVC", "Networking", "Rolling updates", "Rollbacks", "Liveness probes", "Readiness probes"],
    text: "Core Kubernetes concepts I am learning and practising. Not presented as production experience.",
    flowTitle: "Cluster traffic", flow: ["Internet", "Load Balancer", "Kubernetes Ingress", "Frontend Pods", "Backend Pods", "Database"] },
  { id: "cicd", title: "CI/CD", level: "Skill",
    items: ["Git", "GitHub", "GitHub Actions", "Automated tests", "Automated builds", "Docker image build & push", "Deployment automation", "Environment variables", "Secrets management", "Rollback strategy"],
    text: "Automate test, build and deploy steps so every push can reach production the same way." },
  { id: "security", title: "Security", level: "Skill",
    items: ["IAM", "SSH keys", "Security Groups", "Firewall", "HTTPS", "SSL/TLS", "Secrets management", "Docker security", "Kubernetes Secrets", "Least privilege", "JWT", "Dependency security", "Secure CI/CD"],
    text: "Keep secrets in environment variables or secret stores — never in code or images." },
  { id: "network", title: "Networking", level: "Skill",
    items: ["HTTP / HTTPS", "DNS", "TCP/IP basics", "Ports", "SSH", "Reverse proxy", "Nginx", "Load balancing", "SSL certificates", "CDN", "VPC", "Subnets", "NAT", "Ingress"],
    text: "How a request travels from a domain to the database.",
    flowTitle: "Request path", flow: ["Domain", "DNS", "Load Balancer / Nginx", "Frontend", "Backend API", "Database"] },
  { id: "linux", title: "Linux", level: "Skill",
    items: ["Ubuntu", "Bash", "SSH", "File system", "Process management", "systemctl", "journalctl", "Package management", "Permissions", "Disk, memory & CPU checks"],
    text: "Server setup and deployment work on Ubuntu from the command line." },
  { id: "nginx", title: "Nginx", level: "Skill",
    items: ["Reverse proxy", "SSL/TLS", "Domain routing", "Load balancing", "Static files", "API proxying", "Configuration"],
    text: "One entry point that routes the frontend and the API.",
    flowTitle: "Routing", flow: ["Internet", "Nginx", "/ → Next.js", "/api → Node.js / Express"] },
  { id: "registry", title: "Registries", level: "Skill",
    items: ["Docker Hub", "AWS ECR", "Google Artifact Registry"],
    text: "Where built images are stored before they run on a server or cluster.",
    flowTitle: "Image workflow", flow: ["Code", "Docker Build", "Docker Image", "Container Registry", "Server / Kubernetes", "Production"] },
  { id: "db", title: "Databases", level: "Skill",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "Database backups", "Database security", "Connection management", "Environment-based config", "Database monitoring"],
    text: "Backup knowledge only — no automated backups are claimed." },
  { id: "testing", title: "Testing", level: "Skill",
    items: ["API testing", "Postman", "Unit testing", "Integration testing", "Automated testing", "Error handling", "ESLint", "Production build testing"],
    text: "Check APIs, lint the code and test the production build before release." },
];
export const monitoringTopics = {
  Monitoring: ["Prometheus", "Grafana", "CloudWatch", "GCP Cloud Monitoring", "Kubernetes metrics", "Node.js monitoring", "CPU / Memory / Disk", "Container monitoring"],
  Logging: ["Application logs", "Docker logs", "Kubernetes logs", "CloudWatch Logs", "Cloud Logging", "Error tracking", "Centralized logging"],
  Observability: ["Metrics", "Logs", "Traces", "Health checks", "Alerts", "Uptime monitoring", "Performance monitoring"],
};
export const aws = ["EC2", "IAM", "Security Groups", "VPC", "Subnets", "Load Balancer", "Elastic IP", "Route 53", "S3", "CloudWatch", "ECR", "RDS", "AWS CLI"];
export const gcp = ["Compute Engine", "Cloud Run", "GKE", "Cloud Storage", "Cloud SQL", "Artifact Registry", "IAM", "VPC", "Cloud Load Balancing", "Cloud Monitoring", "Cloud Logging", "gcloud CLI"];
export const awsUses = ["Frontend", "Backend", "Docker containers", "Node.js apps", "Next.js apps"];
export const gcpFlow = ["User", "Cloud Load Balancer", "Application", "Docker Container", "Backend API", "Database"];
export const pipeline = [
  ["Developer", "Writes code locally and commits changes."],
  ["Git Push", "Changes are pushed to a feature or main branch."],
  ["GitHub", "The repository stores code and triggers the workflow."],
  ["GitHub Actions", "A workflow file defines every automated job."],
  ["Run Tests", "Lint and tests must pass before anything is built."],
  ["Build Application", "The app is built for production."],
  ["Build Docker Image", "A multi-stage Dockerfile creates a small image."],
  ["Push Image", "The image is pushed to a registry. Credentials come from secrets."],
  ["Deploy", "The server or cluster pulls the new image and rolls it out."],
  ["Production", "Health checks pass; if not, roll back to the previous image."],
];
export const arch = [
  "Developer", "GitHub", "GitHub Actions", "Testing", "Docker Build", "Docker Image",
  "Docker Hub / ECR / Artifact Registry", "AWS EC2 / GCP / Kubernetes", "Nginx / Load Balancer", "Application", "MongoDB / MySQL",
];
