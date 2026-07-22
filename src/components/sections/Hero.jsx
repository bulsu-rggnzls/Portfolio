import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  SendIcon,
} from "../icons";

export default function Hero() {
  const socials = [
    { href: "https://github.com/bulsu-rggnzls", label: "GitHub", Icon: GitHubIcon },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
    { href: "https://twitter.com", label: "Twitter", Icon: TwitterIcon },
    { href: "mailto:argiegonzales.dev@gmail.com", label: "Email", Icon: MailIcon },
  ];

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 pt-28 pb-16 md:flex-row md:gap-8"
    >
      <div className="flex-1 animate-fade-in-up">
        <p className="mb-6 text-sm text-[color:var(--color-cyan)]">
          &gt; Building digital experiences
          <br />
          with clean code &amp; modern design.
        </p>
        <h1 className="text-5xl leading-tight font-bold md:text-6xl">
          Hi, I&apos;m
          <br />
          <span className="text-[color:var(--color-cyan)]">
            Argie Gonzales
          </span>
        </h1>
        <p className="mt-6 text-lg font-bold">
          Front-End Developer specializing in
          <br />
          <span className="text-[color:var(--color-cyan)]">
            React, Next.js, and Tailwind CSS.
          </span>
        </p>
        <p className="mt-6 max-w-md text-sm text-[color:var(--text-muted)]">
          I build fast, responsive, and user-centric web applications with a
          focus on performance, accessibility, and exceptional user
          experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded bg-[color:var(--color-cyan)] px-6 py-3 text-xs font-bold tracking-widest text-slate-950 uppercase transition-opacity hover:opacity-85"
          >
            View My Work <SendIcon />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded px-6 py-3 text-xs font-bold tracking-widest text-[color:var(--color-cyan)] uppercase transition-colors hover:bg-[color:var(--color-cyan-dim)]"
            style={{ border: "1px solid var(--color-cyan)" }}
          >
            Contact Me <SendIcon />
          </a>
        </div>
        <div className="mt-10 flex gap-5 text-[color:var(--text-muted)]">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[color:var(--color-cyan)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center animate-fade-in delay-2">
        <div
          className="animate-glow-pulse relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-lg md:h-96 md:w-80"
          style={{
            border: "1px solid var(--color-cyan-glow)",
            background:
              "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(10,10,26,0.9))",
          }}
        >
          <img
            src="/assets/images/argie.jpg"
            alt="Argie Gonzales"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <span
            className="absolute inset-0 hidden items-center justify-center text-7xl font-bold text-[color:var(--color-cyan)]"
            aria-hidden="true"
          >
            AG
          </span>
        </div>
      </div>
    </section>
  );
}
