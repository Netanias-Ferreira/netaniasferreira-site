import Link from "next/link";

const pages = [
  {
    href: "/serviço-de-copy/",
    label: "Serviço de Copy Direto",
    desc: "Para mentores e infoprodutores que perdem leads por copy genérica.",
  },
  {
    href: "/triade-da-mentoria/",
    label: "Tríade da Mentoria Escalável",
    desc: "Implementação em 7 dias: oferta, vendas imediatas e funil de aquisição.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-white px-6">
      <div className="max-w-xl w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 text-center">
          Netanias Ferreira
        </p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl leading-tight mb-12 text-center">
          Copywriter estrategista para mentores e infoprodutores de alto ticket.
        </h1>
        <div className="space-y-4">
          {pages.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent)] hover:bg-white/5 transition group"
            >
              <p className="font-semibold text-lg group-hover:text-[var(--color-accent)] transition mb-1">
                {label} →
              </p>
              <p className="text-white/50 text-sm">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
