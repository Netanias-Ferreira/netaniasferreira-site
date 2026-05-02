import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-white px-6">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
          Netanias Ferreira
        </p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl leading-tight mb-6">
          Copywriter estrategista para mentores e infoprodutores de alto ticket.
        </h1>
        <p className="text-white/70 mb-10">
          Reescrevo a copy do seu funil para você parar de perder leads
          qualificados por causa de uma mensagem genérica.
        </p>
        <Link
          href="/serviço-de-copy/"
          className="inline-block bg-[var(--color-accent)] text-black font-semibold px-8 py-4 rounded-full hover:bg-[var(--color-accent-hover)] transition"
        >
          Conheça o serviço de copy direto →
        </Link>
      </div>
    </main>
  );
}
