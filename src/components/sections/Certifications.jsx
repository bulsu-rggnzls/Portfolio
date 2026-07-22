import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Maximize2, ChevronLeft, ChevronRight, FileText } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const certificates = [
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

function IssuerLogo({ issuer }) {
  if (issuer === "Cisco") {
    return (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-teal-400" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" className="fill-teal-400">
          CIS
        </text>
      </svg>
    );
  }
  if (issuer === "Certiport") {
    return (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-teal-400" />
        <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" className="fill-teal-400">
          CERT
        </text>
      </svg>
    );
  }
  return (
    <div className="w-8 h-8 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 text-[10px] font-bold tracking-widest">
      {issuer.slice(0, 3).toUpperCase()}
    </div>
  );
}

function CertificateCard({ cert }) {
  return (
    <div className="group relative h-full rounded-2xl border border-teal-400/20 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-teal-500/5 hover:shadow-teal-500/20 hover:border-teal-400/50 transition-all duration-500 flex flex-col overflow-hidden">
      {/* Top Badge */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <IssuerLogo issuer={cert.issuerLogo} />
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-400/30 shadow-[0_0_12px_-2px_rgba(45,212,191,0.25)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
          </span>
          Verified Credential
        </span>
      </div>

      {/* Image / Preview Area */}
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-5 h-44 rounded-xl border border-teal-400/10 bg-slate-800/20 overflow-hidden relative block group/preview"
      >
        <object
          data={cert.image}
          type="application/pdf"
          className="w-full h-full transition-transform duration-500 group-hover/preview:scale-105 pointer-events-none"
          aria-label={cert.title}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-slate-900/40">
            <FileText size={36} className="text-teal-400/50" />
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500">Certificate Preview</span>
          </div>
        </object>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 group-hover/preview:bg-slate-900/50 transition-all duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/50 text-teal-400 opacity-0 group-hover/preview:opacity-100 transition-all duration-300 scale-75 group-hover/preview:scale-100">
            <Maximize2 size={16} />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-col gap-3 px-5 pt-4 pb-5 flex-1">
        <h3 className="font-bold text-base leading-snug text-slate-900 dark:text-white line-clamp-2">
          {cert.title}
        </h3>

        <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
          {cert.issuer} &bull; Issued {cert.date}
        </p>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-900/80 dark:bg-black/60 text-teal-400/90 border border-teal-400/15"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Certifications() {
  const swiperRef = useRef(null);

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-teal-500/[0.04] to-purple-500/[0.04] dark:from-teal-500/[0.06] dark:to-purple-500/[0.06]"
    >
      <div className="absolute top-40 -left-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl py-20 space-y-14">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications &amp; Credentials
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            Professional certifications and credentials from industry-recognized programs
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-teal-400/40 text-teal-400 bg-teal-500/5 hover:bg-teal-500/15 hover:border-teal-400/70 hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.3)] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-teal-400/40 text-teal-400 bg-teal-500/5 hover:bg-teal-500/15 hover:border-teal-400/70 hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.3)] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} custom-swiper-bullet"></span>`,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 !overflow-visible [&_.swiper-wrapper]:items-stretch"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} className="!h-auto">
              <CertificateCard cert={cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination & Swiper overrides */}
      <style>{`
        .custom-swiper-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 999px !important;
          background: rgba(45, 212, 191, 0.25) !important;
          border: 1px solid rgba(45, 212, 191, 0.3) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        .custom-swiper-bullet.swiper-pagination-bullet-active {
          background: rgba(45, 212, 191, 0.9) !important;
          border-color: rgba(45, 212, 191, 0.7) !important;
          box-shadow: 0 0 12px -2px rgba(45, 212, 191, 0.5) !important;
          width: 24px !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 6px !important;
        }
      `}</style>
    </section>
  );
}
