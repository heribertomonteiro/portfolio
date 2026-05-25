"use client";

import { BsArrowDownRight } from "react-icons/bs"; 
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    desc: "Desenvolvimento web full stack com Next.js + TypeScript no front-end e APIs no back-end (Node.js/NestJS/Express ou Django/DRF), com foco em performance, SEO, acessibilidade e componentes reutilizáveis.",
    href: "#"
  },
  {
    num: "02",
    title: "Desenvolvimento de Sistemas Embarcados",
    desc: "Experiência em projetos de sistemas embarcados (IoT/FPGA), integrando software e hardware e construindo soluções orientadas a requisitos, testes e documentação.",
    href: "#"
  },
  {
    num: "03",
    title: "Desenvolvimento de automações",
    desc: "Automações e integrações com n8n, webhooks e APIs REST para reduzir trabalho manual, padronizar fluxos e conectar ferramentas (com monitoramento e confiabilidade).",
    href: "#"
  },
  {
    num: "04",
    title: "Desenvolvimento de chatbots",
    desc: "Chatbots e integrações com plataformas de mensagens (WhatsApp), conectando back-end (Node.js/NestJS/Express ou Django/DRF) a serviços externos e automações.",
    href: "#"
  }
]

const Services = () => {
  return (  
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:bg-white/10">
              <div className="w-full flex justify-between items-center">
                <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">{service.num}</div>
                <Link
                  href={service.href}
                  aria-label={`Ver mais sobre: ${service.title}`}
                  className="w-12 h-12 rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <BsArrowDownRight className="text-primary text-2xl"/>
                </Link>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white group-hover:text-accent transition-colors duration-300">{service.title}</h2>
              <p className="text-white/70 leading-relaxed">{service.desc}</p>
              <div className="border-b border-white/10 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;