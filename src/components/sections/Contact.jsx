import SectionHeading from "../SectionHeading";
import { MailIcon, MapPinIcon, SendIcon } from "../icons";

const inputStyle = {
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="04" title="Get In Touch" />
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm text-[color:var(--text-muted)]">
            I&apos;m currently open to full-time opportunities and freelance
            projects. Let&apos;s build something amazing together!
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-[color:var(--color-cyan)]">
                <MailIcon />
              </span>
              <a
                href="mailto:argiegonzales.dev@gmail.com"
                className="hover:text-[color:var(--color-cyan)]"
              >
                argiegonzales.dev@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[color:var(--color-cyan)]">
                <MapPinIcon />
              </span>
              Manila, Philippines
            </li>
            <li className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-[color:var(--color-cyan)] opacity-40" />
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-cyan)]" />
              </span>
              Available for new projects
            </li>
          </ul>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:argiegonzales.dev@gmail.com";
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded px-4 py-3 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--color-cyan)]"
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded px-4 py-3 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--color-cyan)]"
              style={inputStyle}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded px-4 py-3 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--color-cyan)]"
            style={inputStyle}
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            required
            className="w-full resize-none rounded px-4 py-3 text-sm outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--color-cyan)]"
            style={inputStyle}
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded px-6 py-3 text-xs font-bold tracking-widest text-[color:var(--color-cyan)] uppercase transition-colors hover:bg-[color:var(--color-cyan-dim)]"
            style={{ border: "1px solid var(--color-cyan)" }}
          >
            Send Message <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
}
