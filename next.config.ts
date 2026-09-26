import type { NextConfig } from "next";

// Sistemas internos publicados em /nome-do-sistema: cada um é um projeto Vercel próprio,
// repassado por rewrite (o endereço continua sendo o deste site).
const SQUAD = "https://squad-copy-netaniasdeusefiel-5381s-projects.vercel.app";
const CRM = "https://copycon-crm-netaniasdeusefiel-5381s-projects.vercel.app";
// o app financeiro já roda com basePath /financas, então o caminho passa inteiro
const FINANCAS = "https://gestao-financeira-netaniasdeusefiel-5381s-projects.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/squad", destination: "/squad/organograma-squad.html", permanent: false }];
  },
  async rewrites() {
    return [
      { source: "/squad/:path+", destination: `${SQUAD}/:path+` },
      { source: "/crm", destination: `${CRM}/` },
      { source: "/crm/:path+", destination: `${CRM}/:path+` },
      { source: "/financas", destination: `${FINANCAS}/financas` },
      { source: "/financas/:path+", destination: `${FINANCAS}/financas/:path+` },
    ];
  },
};

export default nextConfig;
