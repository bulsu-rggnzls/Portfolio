export default function SectionHeading({ number, title, action }) {
  return (
    <div className="mb-10 flex items-end justify-between">
      <div>
        <p className="mb-1 text-sm text-[color:var(--color-cyan)]">{number}</p>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
