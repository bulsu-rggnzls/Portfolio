import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rggonzales.work@gmail.com",
    href: "mailto:rggonzales.work@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bocaue, Bulacan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09466836962",
    href: "tel:09466836962",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const form = e.target;
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("from_name", "Argie Portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        form.reset();
        setIsSent(true);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact">
      <SectionHeader
        title="Get In Touch"
        description='Have a project in mind or just want to say hello? Let&apos;s connect.'
        className="mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-stretch">
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="space-y-6">
            <Text variant="default" size="base">
              I&apos;m currently open to full-time opportunities and freelance
              projects. Let&apos;s build something amazing together!
            </Text>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/30 text-teal-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <Text variant="muted" size="xs" className="font-mono uppercase tracking-wider">
                      {label}
                    </Text>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-slate-900 dark:text-white hover:text-teal-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <Text variant="default" size="sm" className="font-medium text-slate-900 dark:text-white">
                        {value}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Badge variant="status" dot>
            Available for new projects
          </Badge>
        </div>

        <Card className="rounded-2xl p-5 sm:p-6 shadow-lg shadow-teal-500/5">
          {isSent ? (
            <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-500/10 border border-teal-400/30">
                <CheckCircle2 size={28} className="text-teal-400" />
              </div>
              <Heading as="h3" size="h3" className="text-white">Message Received!</Heading>
              <Text variant="muted" size="xs" className="max-w-sm">
                Thank you, Argie has received your message and will get back to
                you soon at{" "}
                <span className="text-teal-400 font-mono text-[11px]">
                  rggonzales.work@gmail.com
                </span>
                .
              </Text>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {errorMessage && (
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-xs">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12151a] border border-slate-700/60 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400/60 focus:shadow-[0_0_16px_-4px_rgba(45,212,191,0.2)] transition-all duration-300 disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12151a] border border-slate-700/60 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400/60 focus:shadow-[0_0_16px_-4px_rgba(45,212,191,0.2)] transition-all duration-300 disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#12151a] border border-slate-700/60 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400/60 focus:shadow-[0_0_16px_-4px_rgba(45,212,191,0.2)] transition-all duration-300 disabled:opacity-50"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#12151a] border border-slate-700/60 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400/60 focus:shadow-[0_0_16px_-4px_rgba(45,212,191,0.2)] transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-white font-semibold text-sm hover:bg-teal-600 active:bg-teal-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}
