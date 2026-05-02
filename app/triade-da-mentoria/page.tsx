import type { Metadata } from "next";

const WA_URL =
  "https://wa.me/5585981825194?text=" +
  encodeURIComponent("pronto");

export const metadata: Metadata = {
  title: "Tríade da Mentoria Escalável | Netanias Ferreira",
  description:
    "Em 7 dias, implementamos oferta, estratégia de vendas imediata e funil de aquisição para você vender mentorias de R$3.000 a R$10.000 por cliente.",
};

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1a3a2a] text-white font-semibold px-8 py-4 rounded-full border border-[#2d5a3d] hover:bg-[#2d5a3d] transition text-base md:text-lg"
    >
      {children}
    </a>
  );
}

export default function TriadePage() {
  return (
    <main className="bg-[#fafaf7] text-[#1a1a1a] font-[family-name:var(--font-inter)] antialiased">

      {/* NAV */}
      <nav className="border-b border-[#e5e3dc] py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight">N</span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#4a4a4a]">Netanias Ferreira</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24a] mb-6">Convite Privado</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl leading-tight mb-6">
          Implementação Tríade da Mentoria Escalável
        </h1>
        <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-4">
          Contrate esse trabalho: você é inteligente demais para continuar perdendo tempo tentando montar funis complexos…
        </p>
        <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
          …enquanto seus concorrentes menos qualificados roubam seus clientes high-ticket.
        </p>
      </section>

      {/* ABERTURA */}
      <section className="max-w-3xl mx-auto px-6 py-10 border-t border-[#e5e3dc]">
        <p className="text-lg leading-relaxed mb-6">
          Você passou os últimos anos se tornando <strong>um dos melhores no que faz.</strong>
        </p>
        <ul className="list-none space-y-2 mb-8 text-[#4a4a4a]">
          {["Acumulou resultado na carreira.", "Transformou vidas.", "Tem clientes satisfeitos."].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#c9a24a] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          E mesmo assim, quando você olha para o faturamento do seu digital, o número <strong>não condiz com o nível</strong> do que você entrega.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Enquanto isso, você vê mentores com metade da sua experiência faturando o dobro.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Vendendo mentorias de <strong>R$5.000, R$8.000, R$10.000.</strong>
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Com funil rodando, leads chegando, agenda cheia.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          E você fica com aquela pergunta que dói mais do que deveria:
        </p>
        <blockquote className="border-l-4 border-[#c9a24a] pl-6 py-2 my-6 text-xl italic font-[family-name:var(--font-fraunces)]">
          "O que eles têm que eu não tenho?"
        </blockquote>
        <p className="text-lg leading-relaxed mb-4">A resposta não é o que você pensa.</p>
        <p className="text-lg leading-relaxed font-semibold">E é exatamente isso que eu vou te mostrar agora.</p>
      </section>

      {/* A PROPOSTA */}
      <section className="bg-[#0a0a0a] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24a] mb-4">A Proposta</p>
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] leading-snug mb-10">
            Em 7 dias, implementamos uma estrutura simples e completa para você vender mentorias de <strong className="text-[#c9a24a]">R$3.000 a R$10.000</strong> por cliente.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "SEM LANÇAMENTO", sub: "exaustivo" },
              { label: "SEM FUNIL", sub: "complexo" },
              { label: "SEM POSTAR", sub: "como louco todo dia" },
            ].map(({ label, sub }) => (
              <div key={label} className="border border-white/20 rounded-xl p-4 text-center">
                <p className="font-bold text-sm md:text-base text-white">{label}</p>
                <p className="text-white/50 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Tenho um cliente que faturou <strong className="text-white">R$950.000 em um ano</strong> com menos de 20 mil seguidores.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Eu vou te entregar tudo o que você precisa e nada do que você não precisa: oferta irrecusável, estratégia de vendas imediata e um funil de aquisição instalado. Tudo personalizado para o seu negócio, feito comigo — não por você sozinho.
          </p>
        </div>
      </section>

      {/* O QUE NÃO É / É */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-[#e5e3dc]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-8">Antes de continuar</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-[#c9a24a] mb-4 uppercase text-sm tracking-wider">Não é</p>
            <ul className="space-y-3 text-[#4a4a4a]">
              {[
                "Um treinamento gravado com centenas de aulas para você assistir nas horas vagas.",
                "Um pack de templates genéricos para você tentar adaptar sozinho.",
                "Uma mentoria onde eu falo o que fazer e você se vira para executar.",
                'Um agente de IA que responde a mesma coisa “inovadora” para todo mundo.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-red-400 mt-1 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f0ede6] rounded-2xl p-6">
            <p className="font-bold text-[#1a1a1a] mb-4 uppercase text-sm tracking-wider">É um serviço de implementação</p>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-3">
              <strong>Nós fazemos por você.</strong>
            </p>
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              Eu vou entender em que pé está o seu negócio digital, entendo seu contexto… e construímos juntos — em 7 dias — a estrutura que vai fazer sua mentoria vender.
            </p>
          </div>
        </div>
      </section>

      {/* REAL RAZÃO */}
      <section className="bg-[#f0ede6] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-6">A Real Razão</p>
          <p className="text-xl font-[family-name:var(--font-fraunces)] leading-relaxed mb-6">
            O especialista que não vende mentoria de alto ticket não tem problema de conhecimento.
          </p>
          <p className="text-lg font-semibold text-[#1a1a1a] mb-8">Ele tem problema na estrutura do negócio.</p>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
            <p>Pensa assim: você é excelente na sua área. Você domina o que levou anos para aprender.</p>
            <p>Mas transformar isso em uma mentoria de R$5.000 ou R$10.000 que vende com consistência exige um segundo conjunto de habilidades — oferta, funil, copy, aquisição.</p>
            <p>Algo completamente diferente da sua especialidade.</p>
            <p>É como pedir para um médico que opera há 20 anos operar ele mesmo. Ele tem o conhecimento técnico. Mas operar a si mesmo exige um ângulo que ele não tem.</p>
            <p>O player até te ajuda com a estrutura de funis, mas nenhum deles olhará linha por linha da copy dos seus anúncios, páginas ou vídeos. Você compra e se vira sozinho.</p>
          </div>
        </div>
      </section>

      {/* O MECANISMO — 3 FRENTES */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24a] mb-4">O Mecanismo</p>
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl mb-12">
          A Tríade da Mentoria Escalável resolve isso em 7 dias.
        </h2>
        <div className="space-y-8">
          {[
            {
              n: "01",
              title: "Oferta Irrecusável",
              body: "Antes de qualquer funil, antes de qualquer anúncio, sua oferta precisa estar certa. A maioria pula essa etapa, cria o funil primeiro, roda tráfego — e descobre que ninguém compra. Vamos definir seu cliente ideal com precisão, estruturar sua promessa e organizar seu método em algo que o cliente entende, quer e está disposto a pagar.",
              footer: "Sem oferta certa, nenhum funil resolve. Nenhuma copy salva. Nenhum tráfego converte.",
            },
            {
              n: "02",
              title: "Mapa da Conversão Imediata",
              body: "Com a oferta pronta, montamos a estratégia de caixa rápido. Como fazer as primeiras vendas sem tráfego pago, sem página de vendas, sem lançamento. Você seguirá um processo direto, executável nos primeiros dias. E, após gerar um caixa rápido, o Mapa da Conversão guiará você para continuar vendendo mentorias e consultorias de forma previsível.",
              footer: "Resultado antes mesmo do funil estar rodando.",
            },
            {
              n: "03",
              title: "Funil Express",
              body: "Com a oferta certa e as primeiras vendas confirmando que ela funciona, instalamos o funil de aquisição. Potenciais clientes qualificados chegando no seu direct todos os dias — sem perseguir ninguém, sem produzir conteúdo todo dia, sem depender de lançamento.",
              footer: "Mês bom deixa de ser exceção. Vira o padrão.",
            },
          ].map(({ n, title, body, footer }) => (
            <div key={n} className="border border-[#e5e3dc] rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-[family-name:var(--font-fraunces)] text-[#e5e3dc] shrink-0">{n}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9a24a] mb-1">Frente</p>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
              </div>
              <p className="text-[#4a4a4a] leading-relaxed mb-4">{body}</p>
              <p className="text-sm font-semibold text-[#1a1a1a] border-t border-[#e5e3dc] pt-4">{footer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIO */}
      <section className="bg-[#0a0a0a] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24a] mb-6">Quem está atrás dos resultados</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl mb-6">Meu nome é Netanias Ferreira.</h2>
          <p className="text-white/60 text-lg mb-6">Poucos seguidores visíveis, <strong className="text-white">MUITO trabalho invisível.</strong></p>
          <p className="text-white/70 leading-relaxed">
            Nos últimos cinco anos, fui o nome que ninguém via, mas que estava atrás dos resultados que você vai ver agora.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-10">Cases de Implementação</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Dr. Thiago Pereira",
              role: "Médico, especialista em finanças para médicos.",
              story: "Em 2024, faturou R$175.000 mesmo passando por 3 mentorias de players do mercado. Em 2025, aplicou a Tríade: reestruturamos a oferta de R$2.000 para R$4.000. Hoje o downsell é R$6.000 e a oferta principal é R$12.000.",
              metric: "R$175k → R$950k",
              label: "EM 1 ANO",
            },
            {
              name: "Renata Passos",
              role: "Mentora de líderes, 20 anos de experiência.",
              story: "Não cobrava mais de R$2.000 com medo de ninguém comprar. Estruturamos a oferta. Passou a fechar R$5.000 e R$8.000 com consistência. Hoje fecha vendas acima de R$10.000 sem medo.",
              metric: "R$2k → R$10k+",
              label: "TICKET MULTIPLICADO",
            },
            {
              name: "Elvio Santos",
              role: "Especialista, primeira mentoria.",
              story: "Ativou a estrutura de caixa rápido em cinco dias. Fechou 8 vendas da primeira mentoria.",
              metric: "R$16.000",
              label: "EM 5 DIAS",
            },
            {
              name: "Thiago Siqueira",
              role: "Assessoria financeira.",
              story: "Investiu R$131 em tráfego e um funil simples gerou uma assessoria financeira de R$4.000 fechada. R$16 por conversa qualificada. Esse mesmo funil sustentou o negócio por mais de um ano.",
              metric: "R$16/lead",
              label: "QUALIFICADO",
            },
          ].map(({ name, role, story, metric, label }) => (
            <div key={name} className="border border-[#e5e3dc] rounded-2xl p-6">
              <p className="font-semibold text-lg mb-1">{name}</p>
              <p className="text-xs text-[#4a4a4a] mb-4">{role}</p>
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">{story}</p>
              <div className="bg-[#f0ede6] rounded-xl p-4 text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-2xl font-bold">{metric}</p>
                <p className="text-xs uppercase tracking-wider text-[#4a4a4a] mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mais implementações */}
        <div className="mt-12 border-t border-[#e5e3dc] pt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-6">Mais Implementações</p>
          <p className="text-[#4a4a4a] mb-6">Aqui estão mais alguns mentores e consultores com os quais trabalhei nos últimos anos.</p>
          <div className="flex flex-wrap gap-3">
            {["A Escola de Exatas","A Escola de Português","A Escola do Inglês","Charles Cezar","Diego Rufino","Fabiane Silvério","Tobias Kfoury","Eduardo Lopes"].map((c) => (
              <span key={c} className="border border-[#e5e3dc] rounded-full px-4 py-2 text-sm text-[#4a4a4a]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="bg-[#0a0a0a] text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a24a] mb-6">O Próximo Passo</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl mb-8">
            Me manda um "pronto" no WhatsApp agora.
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Você me chama. Eu entendo o seu momento, te explico como funciona a implementação e verifico se faz sentido para o seu caso específico.
          </p>
          <p className="text-white/60 mb-8">Sem pitch. Sem pressão. Se não fizer sentido para você, eu mesmo te digo.</p>
          <CTAButton>Falar no WhatsApp</CTAButton>
        </div>
      </section>

      {/* HONESTIDADE */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-[#e5e3dc]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-6">Honestidade</p>
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl mb-6">Uma última coisa — preciso ser honesto.</h2>
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
          <p>Isso é uma implementação personalizada.</p>
          <p>Eu trabalho em cima do seu negócio, da sua oferta, do seu contexto.</p>
          <p>O número de clientes que consigo atender ao mesmo tempo é limitado pela minha capacidade de entrega — não por um gatilho de escassez.</p>
          <p>Quando as vagas fecham, é lista de espera para a próxima rodada.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f0ede6] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed mb-2">Você já sabe o que está travando.</p>
          <p className="text-lg leading-relaxed mb-2">A única diferença entre quem vai ter essa estrutura rodando em 7 dias…</p>
          <p className="text-lg leading-relaxed mb-2">…e quem vai continuar tentando montar sozinho por mais alguns meses…</p>
          <p className="text-xl font-semibold mb-10">…é o "pronto" que você manda agora no WhatsApp.</p>
          <CTAButton>Mandar "pronto" agora</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-[#e5e3dc]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#4a4a4a] mb-4">Perguntas Importantes</p>
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl mb-10">O que costumam me perguntar antes da conversa.</h2>
        <div className="space-y-4">
          {[
            "Preciso ter produto criado para entrar?",
            "Isso é mais uma mentoria?",
            "Funciona para qualquer nicho?",
            "E se eu não tiver muitos seguidores?",
            "A tríade é para quem quer ultrapassar a barreira dos R$50 mil para os R$100 mil por mês?",
            "Qual é o investimento?",
          ].map((q) => (
            <details key={q} className="border border-[#e5e3dc] rounded-xl">
              <summary className="px-6 py-4 cursor-pointer font-medium list-none flex items-center justify-between">
                {q}
                <span className="text-[#c9a24a] ml-4 shrink-0">+</span>
              </summary>
              <div className="px-6 pb-4 text-[#4a4a4a] text-sm leading-relaxed">
                Me manda um "pronto" no WhatsApp e respondo pessoalmente essa e qualquer outra dúvida que você tiver.
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e3dc] py-12 px-6 text-center">
        <p className="font-bold tracking-widest text-sm mb-1">NETANIAS FERREIRA</p>
        <p className="text-xs text-[#4a4a4a] mb-6">VENDA MAIS COM A COPY CERTA</p>
        <p className="text-xs text-[#4a4a4a]">© 2026 Netanias Ferreira · Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
