import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Maximize2, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import Section from "../../../components/layout/Section";
import SectionHeader from "../../../components/layout/SectionHeader";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Badge";

import "swiper/css";
import "swiper/css/pagination";

import { certificates } from "../data";

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
    <Card className="h-full rounded-2xl shadow-lg shadow-teal-500/5 hover:shadow-teal-500/20 hover:border-teal-400/50 transition-all duration-500 flex flex-col overflow-hidden">
      <div className="px-4 pt-4 pb-4">
        <IssuerLogo issuer={cert.issuerLogo} />
      </div>

      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4 h-44 mb-4 rounded-xl border border-teal-400/10 bg-slate-800/20 overflow-hidden relative block group/preview"
      >
        <object
          data={cert.image}
          type="application/pdf"
          className="w-full h-full transition-transform duration-500 group-hover/preview:scale-105 pointer-events-none"
          aria-label={cert.title}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-slate-900/40">
            <FileText size={36} className="text-teal-400/50" />
            <span className="text-xs text-slate-500 dark:text-slate-500">Certificate Preview</span>
          </div>
        </object>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 group-hover/preview:bg-slate-900/50 transition-all duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/50 text-teal-400 opacity-0 group-hover/preview:opacity-100 transition-all duration-300 scale-75 group-hover/preview:scale-100">
            <Maximize2 size={16} />
          </div>
        </div>
      </a>

      <div className="flex flex-col gap-3 px-4 pt-2 pb-4 flex-1">
        <Heading as="h3" size="h3" className="leading-snug line-clamp-2">
          {cert.title}
        </Heading>

        <Text variant="muted" size="xs" className="dark:text-slate-300">
          {cert.issuer} &bull; Issued {cert.date}
        </Text>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.skills.map((skill) => (
            <Badge key={skill} variant="skill" size="xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Certifications() {
  const swiperRef = useRef(null);

  return (
    <Section id="certifications" containerClass="py-12">
      <div className="space-y-10">
        <SectionHeader
          title="Certifications &amp; Credentials"
          description="Professional certifications and credentials from industry-recognized programs"
          className="space-y-3"
        />

        <div className="flex items-center justify-center gap-3 mb-6">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            variant="ghost"
            size="icon-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            variant="ghost"
            size="icon-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        <div className="relative">
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
            className="pb-14 [&_.swiper-wrapper]:items-stretch"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id} className="!h-auto">
                <CertificateCard cert={cert} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

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
    </Section>
  );
}
