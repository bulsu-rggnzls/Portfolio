export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
  issuerLogo: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "python",
    title: "Python Programming",
    issuer: "Certiport",
    date: "2025",
    credentialUrl: "/assets/certificates/Python.pdf",
    image: "/assets/certificates/Python.pdf",
    issuerLogo: "Certiport",
    skills: ["Python", "Data Structures", "Algorithms", "Automation"],
  },
  {
    id: "cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    credentialUrl: "/assets/certificates/Cisco%20Certificate.pdf",
    image: "/assets/certificates/Cisco%20Certificate.pdf",
    issuerLogo: "Cisco",
    skills: ["Cybersecurity", "Threats", "Vulnerabilities", "Defense"],
  },
  {
    id: "devices",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "/assets/certificates/Devices.pdf",
    image: "/assets/certificates/Devices.pdf",
    issuerLogo: "Cisco",
    skills: ["Routers", "Switches", "Configuration", "Initial Setup"],
  },
  {
    id: "hardware",
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "/assets/certificates/Hardware.pdf",
    image: "/assets/certificates/Hardware.pdf",
    issuerLogo: "Cisco",
    skills: ["PC Assembly", "Peripherals", "Storage", "Troubleshooting"],
  },
  {
    id: "basics",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "/assets/certificates/Basics.pdf",
    image: "/assets/certificates/Basics.pdf",
    issuerLogo: "Cisco",
    skills: ["OSI Model", "IP Addressing", "Ethernet", "Protocols"],
  },
  {
    id: "packet-tracer",
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialUrl: "/assets/certificates/Packet-Tracer.pdf",
    image: "/assets/certificates/Packet-Tracer.pdf",
    issuerLogo: "Cisco",
    skills: ["Simulation", "Topology Design", "IoT", "Troubleshooting"],
  },
];
