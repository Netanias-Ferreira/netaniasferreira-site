import type { Metadata } from "next";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5585981825194?text=" +
  encodeURIComponent(
    "Olá Netanias, vim da página de Serviço de Copy e gostaria de agendar a sessão de diagnóstico."
  );

export const metadata: Metadata = {
  title: "Serviço de Copy Direto",
  description:
    "Reescrevo a copy do seu funil para você parar de perder leads qualificados por causa de uma mensagem genérica. Implementação em 7 dias.",
  alternates: { canonical: "/serviço-de-copy/" },
  openGraph: {
    title: "Serviço de Copy Direto | Netanias Ferreira",
    description:
      "Para mentores e consultores que faturam R$ 20k–R$ 40k/mês e querem chegar nos R$ 100k. O problema não é sua estrutura. É a sua copy.",
    url: "/serviço-de-copy/",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

function CTAButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 md:px-9 md:py-5 font-semibold text-sm md:text-base transition-all";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] shadow-lg shadow-amber-900/20"
      : "border border-white/20 text-white hover:bg-white/10";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4 md:mb-6">
      {children}
    </p>
  );
}

export default function ServicoDeCopyPage() {
  return (
    <main className="overflow-hidden">
      {/* ============== BLOCO 1 — HERO ============== */}
      <section className="relative bg-[var(--color-bg)] text-white px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,74,0.15),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel>Netanias Ferreira · Copywriter Estrategista</SectionLabel>
          <h1 className="font-[family-name:var(--font-fraunces)] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 md:mb-8">
            Você é inteligente demais para continuar perdendo dinheiro com um
            funil que atrai curiosos e afasta quem pode pagar.
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12">
            Se você é mentor ou consultor, fatura entre{" "}
            <span className="text-white font-semibold">R$ 20 mil e R$ 40 mil por mês</span>{" "}
            e já tentou de tudo para chegar nos R$ 100k por mês — o problema
            não é a sua estrutura.{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              É A SUA COPY.
            </span>
          </p>
          <CTAButton>Agendar minha sessão de diagnóstico no WhatsApp</CTAButton>
          <p className="mt-6 text-xs text-white/40">
            Resposta em até 24h · Sem compromisso
          </p>
        </div>
      </section>

      {/* ============== BLOCO 2 — ABERTURA ============== */}
      <section className="bg-[var(--color-bg-soft)] px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Por que estou escrevendo isso para você</SectionLabel>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight mb-8 text-[var(--color-ink)]">
            Eu reescrevo a copy do seu funil para você parar de perder leads
            qualificados por causa de uma mensagem genérica.
          </h2>
          <p className="text-lg md:text-xl font-medium text-[var(--color-ink)] mb-10">
            Eu implemento, você colhe os resultados.
          </p>

          <div className="space-y-5 text-[var(--color-ink-soft)] text-base md:text-lg leading-relaxed">
            <p>Sua família não merece ver você frustrado…</p>
            <p>
              Lead quebrado não é só um número. É estressante ver gente
              chorando por desconto enquanto você entrega ouro na sua oferta.
            </p>
            <p>Você já comprou várias mentorias de marketing.</p>
            <p>Já contratou gestor de tráfego.</p>
            <p>Já montou equipe.</p>
            <p>Já fez mentoria com algum guru do marketing digital…</p>
            <p>E mesmo assim, o mês fecha com faturamento instável.</p>
            <p>As conversas de alto valor somem.</p>
            <p>
              Você sente que alguma coisa está errada, mas não sabe exatamente
              o quê.
            </p>
            <p className="text-[var(--color-ink)] font-semibold text-xl">
              Eu vou te dizer o que é.
            </p>
            <p>
              A estrutura de funis pode ser a melhor do mundo, mas a mensagem
              pode travar o sistema.
            </p>
            <p>
              Funil é um caminho lógico para você ter o{" "}
              <strong>controle</strong> de onde vem e para onde vão as pessoas.
            </p>
            <p>
              O que leva as pessoas para a jornada de compra é a{" "}
              <strong>copy</strong>. E quando a copy está genérica, ela não
              fala com ninguém.
            </p>
            <p>
              Especialmente não fala com quem tem R$ 3.000 a R$ 10 mil no
              bolso e experiência suficiente para identificar uma promessa
              vazia de longe.
            </p>
            <p className="pt-4 border-l-2 border-[var(--color-accent)] pl-5 italic">
              Esse lead vê seu anúncio. Sente que a mensagem não falava com
              ele. E foi embora em silêncio. E você nunca soube que ele esteve
              lá.
            </p>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 3 — PROVA SOCIAL ============== */}
      <section className="bg-white px-6 py-20 md:py-28 border-y border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <SectionLabel>Cases com números reais</SectionLabel>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
              Pessoas que confiaram em mim para reconquistar a confiança dos
              leads qualificados.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* Renata */}
            <article className="bg-[var(--color-bg-soft)] rounded-2xl p-8 border border-[var(--color-line)]">
              <div className="aspect-square relative bg-[#f0ede6] rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/cases/renata.jpg"
                  alt="Renata Passos"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[var(--color-accent)] mb-3">
                30 vendas de R$ 5 mil
              </p>
              <p className="text-[var(--color-ink-soft)] mb-5">
                Renata Passos não conseguia vender mentoria acima de R$ 2 mil
                online, mesmo depois de passar pelos maiores mentores de
                marketing do Brasil. Depois que reestruturei a narrativa da
                oferta, ela fez 5 vendas de R$ 5 mil em 24 horas. Total: 30
                vendas de R$ 5 mil na primeira oferta. Hoje vende a oferta
                premium por mais de R$ 12 mil.
              </p>
              <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-ink)]">
                &ldquo;Trabalhei metade do que trabalhava e ganhei mais do que
                ganhava. Netanias chegou pra me ajudar a enxergar o grande
                valor que eu tinha.&rdquo;
                <footer className="not-italic text-sm text-[var(--color-ink-soft)] mt-2">
                  — Renata Passos
                </footer>
              </blockquote>
            </article>

            {/* Dr. Thiago */}
            <article className="bg-[var(--color-bg-soft)] rounded-2xl p-8 border border-[var(--color-line)]">
              <div className="aspect-square relative bg-[#f0ede6] rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/cases/dr-thiago.jpg"
                  alt="Dr. Thiago Pereira"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[var(--color-accent)] mb-3">
                R$ 175 mil → quase R$ 1 mi
              </p>
              <p className="text-[var(--color-ink-soft)]">
                Dr. Thiago Pereira (@drthiagoinvest), médico e expert em
                finanças, já havia comprado várias mentorias antes de
                trabalharmos juntos. Em 2024, faturou R$ 175 mil — bom, mas
                irregular. Em 2025, com copy de anúncios, VSL e e-mails
                ajustados, ele faturou quase R$ 1 milhão no ano. R$ 100 mil em
                2 meses. Um único post gerou uma venda de R$ 10 mil com R$
                761,72 de tráfego. Teve dia em que ele fez R$ 18 mil em 24h.
              </p>
            </article>

            {/* Tobias */}
            <article className="bg-[var(--color-bg-soft)] rounded-2xl p-8 border border-[var(--color-line)]">
              <div className="aspect-square relative bg-[#f0ede6] rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/cases/tobias.jpg"
                  alt="Tobias Kfoury"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[var(--color-accent)] mb-3">
                21 MQLs em 1 campanha
              </p>
              <p className="text-[var(--color-ink-soft)]">
                Tobias Kfoury, o maior consultor de gestão do setor de saúde
                da América Latina, fez um pedido: &ldquo;preciso gerar mais
                leads para meu comercial&rdquo;. Na primeira campanha de
                e-mail, teve 21 formulários preenchidos. Em maio de 2024,
                bateu recorde de faturamento com MQLs para consultorias de até
                R$ 60 mil.
              </p>
            </article>

            {/* Thiago Siqueira */}
            <article className="bg-[var(--color-bg-soft)] rounded-2xl p-8 border border-[var(--color-line)]">
              <div className="aspect-square relative bg-[#f0ede6] rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/cases/thiago-siqueira.jpg"
                  alt="Thiago Siqueira"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[var(--color-accent)] mb-3">
                R$ 131 → R$ 4 mil fechados
              </p>
              <p className="text-[var(--color-ink-soft)] mb-5">
                Thiago Siqueira, expert em mercado financeiro, investiu R$ 131
                em tráfego e fechou uma assessoria de R$ 4 mil. A copy gerou
                MQLs por mais de 5 meses consecutivos. Nenhuma copizinha de
                IA meia boca faz isso.
              </p>
              <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-ink)]">
                &ldquo;Nenhum lead era totalmente desqualificado como
                acontecia antes.&rdquo;
                <footer className="not-italic text-sm text-[var(--color-ink-soft)] mt-2">
                  — Thiago Siqueira
                </footer>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 4 — AGITAÇÃO ============== */}
      <section className="bg-[var(--color-bg)] text-white px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>O custo invisível da copy fraca</SectionLabel>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight mb-10">
            Toda semana com copy medíocre no ar é uma semana de lead
            qualificado sendo perdido.
          </h2>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/80">
            <p>
              Não o lead curioso. Esses aparecem de qualquer jeito.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white py-4 border-y border-white/10">
              O LEAD QUE JÁ TEM DINHEIRO, JÁ TEM PROBLEMA E JÁ ESTÁ PRONTO
              PARA COMPRAR.
            </p>
            <p>
              Esse lead viu seu anúncio, sentiu que a mensagem não falava com
              ele e foi embora em silêncio.
            </p>
            <p>Você não vê esse vazamento.</p>
            <p>Ele acontece antes da conversa começar.</p>
            <p>
              E quanto mais você testa criativos novos, quanto mais tráfego
              você compra sem ajustar a copy, mais você paga para amplificar
              uma mensagem que já está afastando quem você quer atrair.
            </p>
            <p>
              Não se resolve isso com novos funis, com lançamentos pagos, com
              webinários semanais… ou seja, com mais trabalho.
            </p>
            <p className="text-[var(--color-accent)] font-semibold text-lg md:text-xl pt-4">
              Resolve-se com uma copy que conquista a confiança do lead
              qualificado.
            </p>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 5 — CREDIBILIDADE ============== */}
      <section className="bg-[var(--color-bg-soft)] px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Quem já passou por aqui</SectionLabel>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight mb-10 text-[var(--color-ink)]">
            Nos últimos 4 anos, trabalhei exclusivamente com mentores,
            consultores e infoprodutores.
          </h2>

          <ul className="space-y-5 mb-10">
            {[
              {
                name: "Tobias Kfoury",
                desc: "Maior consultor de gestão em saúde da América Latina",
              },
              {
                name: "Dr. Thiago Pereira",
                desc: "Médico e expert em finanças e investimentos",
              },
              {
                name: "Renata Passos",
                desc: "Mentora com meta de R$ 1 milhão batida (plaquinha Eduzz)",
              },
              {
                name: "Thiago Siqueira",
                desc: "Gestor patrimonial de profissionais de alta renda",
              },
              {
                name: "Elvio",
                desc: "R$ 1.500 investidos geraram R$ 16 mil faturados com 117 pessoas no grupo de WhatsApp",
              },
              {
                name: "Escola de Exatas",
                desc: "Projetos que fizeram mais de R$ 10 milhões na Hotmart de 2020 a 2025. Em 2026, fui chamado para ajudá-los na jornada de R$ 10 mi/ano",
              },
            ].map((c) => (
              <li
                key={c.name}
                className="flex gap-4 pb-5 border-b border-[var(--color-line)]"
              >
                <span className="text-[var(--color-accent)] font-bold text-xl shrink-0">
                  ◆
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">
                    {c.name}
                  </p>
                  <p className="text-[var(--color-ink-soft)] text-sm md:text-base">
                    {c.desc}
                  </p>
                </div>
              </li>
            ))}
            <li className="flex gap-4 pb-5">
              <span className="text-[var(--color-accent)] font-bold text-xl shrink-0">
                ◆
              </span>
              <p className="text-[var(--color-ink-soft)] italic">
                Outros que, por contrato, prefiro não citar publicamente.
              </p>
            </li>
          </ul>

          <div className="bg-[var(--color-bg)] text-white rounded-2xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
              Em 100% dos casos
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Eles já tinham tudo. Faltava um braço estratégico para
              auxiliá-los na publicidade e na copy — o coração das vendas de
              todo negócio de sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 6 — OFERTA / 3 PILARES ============== */}
      <section className="bg-white px-6 py-20 md:py-28 border-y border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <SectionLabel>O processo</SectionLabel>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl lg:text-5xl leading-tight text-[var(--color-ink)] mb-4">
              Por que negócios que faturam de R$ 100 mil a R$ 2 milhões por
              ano me contratam para escrever a copy deles?
            </h2>
            <p className="text-lg text-[var(--color-ink-soft)]">
              Você vai entrar no mesmo processo que eles. Veja:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Diagnóstico Cirúrgico",
                body: "Analiso tudo: VSL, página de vendas, anúncios, sequência de e-mails. Identifico exatamente qual palavra, qual promessa e qual posicionamento está espantando o lead qualificado. Não é opinião — é diagnóstico com base no comportamento do seu avatar e no nível de sofisticação do seu mercado.",
              },
              {
                num: "02",
                title: "Implementação Completa",
                body: "Eu reescrevo, você se concentra em vender e entregar. Após conhecer os bastidores do seu negócio, ajusto a narrativa e reescrevo cada peça do funil para falar diretamente com quem tem dinheiro e está pronto para comprar o que você vende.",
              },
              {
                num: "03",
                title: "Os Funis Voltam a Funcionar",
                body: "Alguns dos meus clientes mantiveram funis gerando leads qualificados por 3, 5, até 8 meses com uma única peça de copy ajustada. O objetivo é entregar uma mensagem tão precisa que qualquer funil funcione, sem depender de truques ou modismos.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-[var(--color-bg-soft)] rounded-2xl p-7 md:p-8 border border-[var(--color-line)] flex flex-col"
              >
                <p className="text-5xl font-[family-name:var(--font-fraunces)] text-[var(--color-accent)] mb-4 leading-none">
                  {p.num}
                </p>
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl md:text-2xl text-[var(--color-ink)] mb-4">
                  {p.title}
                </h3>
                <p className="text-[var(--color-ink-soft)] text-sm md:text-base leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[var(--color-ink)] leading-relaxed">
              Isso significa que você vai{" "}
              <strong>fechar vendas de mentorias mais rápido</strong>, terá
              mais tempo livre durante a semana, e finalmente terá{" "}
              <strong>paz financeira</strong> — mesmo cobrando o dobro dos
              seus concorrentes.
            </p>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 7 — BIO ============== */}
      <section className="bg-[var(--color-bg-soft)] px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-start">
          <div className="w-64 mx-auto md:w-full aspect-[3/4] relative bg-neutral-200 rounded-2xl overflow-hidden">
            <Image
              src="/cases/netanias.jpg"
              alt="Netanias Ferreira"
              fill
              className="object-contain object-top"
              sizes="(max-width: 768px) 256px, 40vw"
            />
          </div>
          <div>
            <SectionLabel>Sobre mim</SectionLabel>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight mb-6 text-[var(--color-ink)]">
              Sou Netanias Ferreira, copywriter estrategista especializado em
              mentores e infoprodutores de alto ticket.
            </h2>
            <div className="space-y-4 text-[var(--color-ink-soft)] text-base md:text-lg leading-relaxed">
              <p>Quatro anos trabalhando exclusivamente neste mercado.</p>
              <p>
                Se for um iniciante, eu só trabalho com especialistas de
                verdade, que podem transformar vidas.
              </p>
              <p>
                Sendo sincero: 90% dos meus clientes têm esse perfil — produto
                validado, funil montado, perdendo vendas por uma mensagem que
                não está na altura do que entregam.
              </p>
              <p>
                Minha especialidade é uma: analisar o funil de quem já tentou
                de tudo, identificar onde a copy está falhando e reescrever
                com precisão cirúrgica.
              </p>
              <p>
                O funil volta a converter, os leads qualificados voltam a
                encher o CRM — e sem depender de promessas mentirosas.
              </p>
              <p className="text-[var(--color-ink)] font-medium">
                Os resultados que você viu aqui não foram sorte. É um processo
                repetido, testado e documentado em mais de 10 nichos com
                resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== BLOCO 8 — CTA FINAL ============== */}
      <section className="bg-[var(--color-bg)] text-white px-6 py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,74,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionLabel>O próximo passo</SectionLabel>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-5xl leading-tight mb-8">
            Se você está faturando entre R$ 20 mil e R$ 50 mil por mês de
            forma inconsistente…
          </h2>
          <div className="space-y-4 text-base md:text-lg text-white/80 mb-10 leading-relaxed">
            <p>
              … já investiu pesado em mentorias e funis, e ainda sente que seu
              lead qualificado some antes de comprar…
            </p>
            <p className="text-white text-lg md:text-xl">
              O problema tem nome:{" "}
              <strong className="text-[var(--color-accent)]">
                copy desalinhada com o público
              </strong>
              . Isso tem solução. E ela começa com um diagnóstico.
            </p>
            <p className="italic text-white/70 pt-2">
              Quando vamos para um médico, não esperamos que ele adivinhe como
              vai solucionar nossa dor. Respondemos ao que ele perguntar e
              aguardamos o resultado do diagnóstico do especialista.
            </p>
          </div>
          <CTAButton>Agendar minha sessão de diagnóstico no WhatsApp</CTAButton>
        </div>
      </section>

      {/* ============== BLOCO 9 — FAQ ============== */}
      <section className="bg-[var(--color-bg-soft)] px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl leading-tight mb-3 text-[var(--color-ink)]">
            Perguntas importantes
          </h2>
          <p className="text-[var(--color-ink-soft)] mb-10">
            O que costumam me perguntar antes da conversa.
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Preciso ter produto criado para entrar?",
                a: "Não. A primeira frente da Tríade é exatamente a criação da sua oferta. Você sai com produto estruturado, promessa definida e preço certo.",
              },
              {
                q: "Isso é mais uma mentoria?",
                a: "Não. É implementação. Você não aprende para executar depois — a gente executa junto, agora, em 7 dias. Eu coloco a mão na massa no seu negócio.",
              },
              {
                q: "Funciona para qualquer nicho?",
                a: "Se você é especialista que consegue de fato ajudar as pessoas, funciona. Já implementei para médico, consultor financeiro, mentor de carreira, engenheiro, professor, terapeuta, infoprodutor. (Observação: não trabalho com nicho de espiritualidades alternativas como Tarô, Reiki etc. — sou cristão. Você é livre para crer no que quiser, eu para escolher com quem trabalho.)",
              },
              {
                q: "E se eu não tiver muitos seguidores?",
                a: "O Dr. Thiago faturou R$ 950.000 com menos de 20 mil seguidores. Audiência não é nada sem a oferta certa e funil calibrado com uma copy que atrai leads qualificados todos os dias.",
              },
              {
                q: "Qual é o investimento?",
                a: "A gente conversa sobre isso no WhatsApp, depois de eu entender o seu momento. Não faz sentido falar de número antes de eu saber se consigo entregar resultado para você.",
              },
              {
                q: "O investimento será muito caro?",
                a: "Pense o seguinte: se as minhas copys nos próximos 12 meses te ajudarem a ter 50x mais resultados — me diga: importa mesmo o preço que você vai pagar?",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-xl border border-[var(--color-line)] overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 flex justify-between items-start gap-4 font-medium text-[var(--color-ink)] hover:bg-[var(--color-bg-soft)] transition">
                  <span className="text-base md:text-lg">{item.q}</span>
                  <span className="text-[var(--color-accent)] text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-6 text-[var(--color-ink-soft)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-14 text-center">
            <CTAButton variant="primary">
              Falar com Netanias no WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-[var(--color-bg)] text-white/50 px-6 py-10 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Netanias Ferreira · Copywriter
          Estrategista
        </p>
      </footer>

      {/* ============== STICKY CTA (mobile) ============== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[var(--color-accent)] text-black font-semibold px-5 py-3 rounded-full shadow-2xl hover:bg-[var(--color-accent-hover)] transition flex items-center gap-2 text-sm md:hidden"
      >
        <span>💬</span>
        <span>Agendar diagnóstico</span>
      </a>
    </main>
  );
}
