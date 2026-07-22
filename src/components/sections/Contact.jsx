import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

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
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-teal-500/[0.04] to-purple-500/[0.04] dark:from-teal-500/[0.06] dark:to-purple-500/[0.06]"
    >
      <div className="absolute top-40 -left-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl py-20">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-stretch">
          {/* Left: Contact Details */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                I&apos;m currently open to full-time opportunities and freelance projects. Let&apos;s build something amazing together!
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/30 text-teal-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-slate-900 dark:text-white hover:text-teal-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-teal-400/20 bg-teal-500/5 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
              </span>
              <span className="font-mono text-xs font-semibold text-teal-400 tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="rounded-2xl border border-slate-700/60 bg-[#0b0d10] p-5 sm:p-6 shadow-lg shadow-teal-500/5">
            {isSent ? (
              /* Success Card */
              <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-500/10 border border-teal-400/30">
                  <CheckCircle2 size={28} className="text-teal-400" />
                </div>
                <h3 className="text-base font-bold text-white">Message Received!</h3>
                <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                  Thank you, Argie has received your message and will get back to you soon at{" "}
                  <span className="text-teal-400 font-mono text-[11px]">
                    rggonzales.work@gmail.com
                  </span>
                  .
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-xs">
                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Name + Email */}
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

                {/* Row 2: Subject */}
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

                {/* Row 3: Message */}
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

                {/* Submit Button */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
