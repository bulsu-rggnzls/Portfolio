import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Field from "@/components/ui/Field";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { WEB3FORMS_KEY } from "@/config/env";
import { contactInfo } from "@/features/contact/data";

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "An unexpected error occurred.";
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("from_name", "Argie Portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as Web3FormsResponse;

      if (data.success) {
        form.reset();
        setIsSent(true);
      } else {
        setErrorMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(toErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact">
      <SectionHeader
        title="Get In Touch"
        description="Have a project in mind or just want to say hello? Let's connect."
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
                <div key={label} className="flex items-start sm:items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand-ink shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text variant="muted" size="xs" className="font-mono uppercase tracking-wider">
                      {label}
                    </Text>
                    {href ? (
                      <a
                        href={href}
                        className="block text-sm font-medium text-ink-body hover:text-brand-ink transition-colors duration-200 break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <Text variant="default" size="sm" className="font-medium break-words">
                        {value}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Badge variant="status" dot className="whitespace-normal text-center sm:whitespace-nowrap">
            Available for new projects
          </Badge>
        </div>

        <Card className="rounded-2xl p-5 sm:p-6 shadow-lg shadow-brand/5">
          {isSent ? (
            <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 border border-brand/20">
                <CheckCircle2 size={28} className="text-brand-ink" />
              </div>
              <Heading as="h3" size="h3">
                Message Received!
              </Heading>
              <Text variant="muted" size="xs" className="max-w-sm">
                Thank you, Argie has received your message and will get back to
                you soon at{" "}
                <span className="text-brand-ink font-mono text-[11px]">
                  rggonzales.work@gmail.com
                </span>
                .
              </Text>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {errorMessage && (
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-xs">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field
                  label="Your Name"
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  placeholder="John Doe"
                />
                <Field
                  label="Your Email"
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  placeholder="john@example.com"
                />
              </div>

              <Field
                label="Subject"
                type="text"
                name="subject"
                required
                disabled={isSubmitting}
                placeholder="Project Collaboration"
              />

              <Field
                label="Your Message"
                as="textarea"
                name="message"
                required
                rows={4}
                disabled={isSubmitting}
                placeholder="Tell me about your project..."
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
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
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}
