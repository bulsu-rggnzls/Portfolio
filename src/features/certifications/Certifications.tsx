import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, FileText, Maximize2 } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { certificates, type Certificate } from "@/features/certifications/data";

import "swiper/css";
import "swiper/css/pagination";

function IssuerLogo({ issuer }: { issuer: string }) {
  if (issuer === "Cisco") {
    return (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" className="fill-accent">
          CIS
        </text>
      </svg>
    );
  }
  if (issuer === "Certiport") {
    return (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
        <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" className="fill-accent">
          CERT
        </text>
      </svg>
    );
  }
  return (
    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold tracking-widest">
      {issuer.slice(0, 3).toUpperCase()}
    </div>
  );
}

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <Card className="h-full rounded-2xl shadow-lg shadow-accent/5 hover:shadow-accent/20 hover:border-accent/50 transition-all duration-500 flex flex-col overflow-hidden">
      <div className="px-4 pt-4 pb-4">
        <IssuerLogo issuer={cert.issuerLogo} />
      </div>

      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4 h-44 mb-4 rounded-xl border border-accent/10 bg-panel-raised/20 overflow-hidden relative block group/preview"
      >
        <object
          data={cert.image}
          type="application/pdf"
          className="w-full h-full transition-transform duration-500 group-hover/preview:scale-105 pointer-events-none"
          aria-label={cert.title}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-3 bg-panel/40">
            <FileText size={36} className="text-accent/50" />
            <span className="text-xs text-muted">Certificate Preview</span>
          </div>
        </object>
        <div className="absolute inset-0 bg-gradient-to-t from-panel/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-panel/0 group-hover/preview:bg-panel/50 transition-all duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 border border-accent/50 text-accent opacity-0 group-hover/preview:opacity-100 transition-all duration-300 scale-75 group-hover/preview:scale-100">
            <Maximize2 size={16} />
          </div>
        </div>
      </a>

      <div className="flex flex-col gap-3 px-4 pt-2 pb-4 flex-1">
        <Heading as="h3" size="h3" className="leading-snug line-clamp-2">
          {cert.title}
        </Heading>

        <Text variant="muted" size="xs" className="text-ink-quiet">
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
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <Section id="certifications" containerClass="py-12">
      <div className="space-y-10">
        <SectionHeader
          title="Certifications & Credentials"
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
    </Section>
  );
}
