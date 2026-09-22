import { PILLARS } from "@/lib/recruitment";

export function Pillars() {
  return (
    <section className="mx-auto mt-12 grid max-w-3xl gap-3 px-5 sm:grid-cols-2">
      {PILLARS.map((pillar) => (
        <article key={pillar.title} className="pillar-card">
          <h2 className="font-display text-xl tracking-wide text-silver">{pillar.title}</h2>
          <p className="mt-1 text-sm leading-normal text-muted-foreground">{pillar.body}</p>
        </article>
      ))}
    </section>
  );
}
