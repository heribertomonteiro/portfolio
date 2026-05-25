"use client"

import React, {useState} from "react";
import {motion} from 'framer-motion'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import type { Swiper as SwiperClass } from "swiper";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

//Componentes
import NavigationButton from "@/components/NavigationButton";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "EduKids",
    desc: "Edukids é um sistema de gestão escolar feito sob medida para a escola Flores de Maria envolvendo persistência de dados e autenticação, com o objetivo de otimizar a gestão escolar e melhorar a experiência de comunicação da escola com os pais.",
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}, {name: 'Python'}, {name: 'Django'}, {name: 'PostgreSQL'}, {name: 'JWT'}],
    image: "/assets/work/portifolio2.png",
    github: "https://github.com/heribertomonteiro/edukids"
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Classificação de Leads",
    desc: "Sistema de classificação de leads para empresas de marketing digital. O sistema foi construido para classificar os leads com base em seu comportamento e características. Só pessoas AUTENTICADAS podem acessar a página de leads!",
    stack: [{name: 'React'}, {name: 'TailWind'}, {name: 'TypeScript'}, {name: 'NestJS'}, {name: 'MySQL'}, {name: 'JWT'}],
    image: "/assets/work/leads_portifolio.png",
    github: "https://github.com/heribertomonteiro/lead-classifier"
  },
  {
    num: "03",
    category: "Front-End",
    title: "F3 Rastreamentos",
    desc: "Landing page para empresa de rastreamento veicular de acordo com as necessidades de UI/UX do cliente.",
    stack: [{name: 'NextJS'}, {name: 'TypeScript'}, {name: 'TailWind'}, {name: 'ShadCN'}],
    image: "/assets/work/f3_portifolio.png",
    github: "https://github.com/heribertomonteiro/f3-rastreamentos-landig-page"
  },
  {
    num: "04",
    category: "Full Stack",
    title: "FSW-Barber",
    desc: "Sistema de gestão para barbearias que possibilita gerenciar os clientes com agendamentos e serviços de barbearia.",
    stack: [{name: 'NextJS'}, {name: 'TypeScript'}, {name: 'TailWind'}, {name: 'ShadCN'}, {name: 'Prisma'}, {name: 'PostgreSQL'}],
    image: "/assets/work/fsw3_portifolio.png",
    github: "https://github.com/heribertomonteiro/FSW-Barber"
  },
  {
    num: "05",
    category: "Back-End",
    title: "CineReserve",
    desc: "Sistema de vendas de ingressos para cinemas, onde foi trabalhado concorreência impedindo que mais de um usuário compre o mesmo ingresso, além de testes e sistema plug-and-play.",
    stack: [{name: 'Python'}, {name: 'Django Rest Framework'}, {name: 'PostgreSQL'}, {name: 'Redis'}, {name: 'Docker'}, {name: 'Pytest'}, {name: 'JWT'}],
    image: "/assets/work/cinereserve_portifolio.png",
    github: "https://github.com/heribertomonteiro/CineReserve"
  },
  {
    num: "06",
    category: "Back-End",
    title: "Sistema de Métricas",
    desc: "Sistema de métricas para monitoramento de aplicações através de middlewares, onde foi trabalhado com coleta e armazenamento de métricas e visualização de dados.",
    stack: [{name: 'TypeScript'}, {name: 'NestJS'}, {name: 'PostgreSQL'}],
    image: "/assets/work/metrics_portifolio.png",
    github: "https://github.com/heribertomonteiro/observability-api"
  },
  {
    num: "07",
    category: "Back-End",
    title: "Blog API",
    desc: "API para gerenciamento de um blog, com endpoints para criação, leitura, atualização e exclusão de posts e usuários. Além diss, foi implementado um sistema RBAC para controle de acesso baseado em funções, onde os usuários têm diferentes níveis de permissão para acessar e manipular os recursos do blog.",
    stack: [{name: 'TypeScript'}, {name: 'NestJS'}, {name: 'PostgreSQL'}],
    image: "/assets/work/rbac_portifolio.png",
    github: "https://github.com/heribertomonteiro/Sistema-RBAC"
  },  
  {
    num: "08",
    category: "Sistemas Embarcados",
    title: "Transmissão de dados via LoRa",
    desc: "Sistema de transmissão de dados de temperatura e umidade via tecnologia LoRa entre um FPGA e um Microcontrolador.",
    stack: [{name: 'IoT'}, {name: 'FPGA'}, {name: 'LoRa'}, {name: 'AHT10'}],
    image: "/assets/work/lora_portifolio.png",
    github: "https://github.com/heribertomonteiro/transmissao-de-dados-via-LoRa"
  },  
  {
    num: "09",
    category: "Sistemas Embarcados",
    title: "Minerador de Bitcoin",
    desc: "Neste projeto, foi desenvolvido um minerador de Bitcoin utilizando um FPGA para realizar os cálculos de hash necessários para a mineração. O sistema é capaz de processar grandes volumes de dados e realizar a mineração de forma eficiente, contribuindo para a rede Bitcoin.",
    stack: [{name: 'FPGA'}, {name: 'Python'}],
    image: "/assets/work/minerador_bitcoin.png",
    github: "https://github.com/heribertomonteiro/Minerador-Bitcoin-em-FPGA"
  },
  {
    num: "10",
    category: "Obrigado",
    title: "Projetos principais",
    desc: "Aqui estão listados alguns dos meus projetos mais recentes e relevantes que trabalhei com tecnologias variadas, mas sinta-se à vontade para explorar meu GitHub para ver mais trabalhos e contribuições que fiz ao longo do tempo.",
    stack: [{name: 'GitHub'}, {name: 'Portfólio'}],
    image: "/assets/work/legal6.png",
    github: "https://github.com/heribertomonteiro/"
  },


]

const Projects = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // Obter o índice do slide ativo
    const activeIndex = swiper.activeIndex;
    setProject(projects[activeIndex]);
  };

  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-8">
        <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-0">
          <div className="min-h-115 flex flex-col gap-6 rounded-xl border border-white/10 bg-white/5 p-6 xl:p-8">
            {/** Project Number */}
            <div className="text-6xl leading-none font-extrabold text-outline text-transparent opacity-70">{project.num}</div>
            {/** Project Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="h2 text-4xl text-white leading-[1.05]">{project.title}</h2>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm capitalize">
                {project.category}
              </span>
            </div>
            {/** Project Description */}
            <p className="text-white/60 leading-relaxed">{project.desc}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-base xl:text-lg text-accent whitespace-nowrap">
                    {item.name}
                    {/** remover a última vírgula */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                )
              })}
            </ul>
            {/*Button*/}
          </div>
            <div className="mt-5">
              <Link href={project.github} target="_blank">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="group w-15 h-15 rounded-full border border-white/10 bg-white/5 flex justify-center items-center transition-colors duration-300 hover:border-white/20">
                      <BsGithub className="text-white text-3xl transition-colors duration-300 group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositório no GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
        </div>
        <div className="w-full xl:w-[50%] xl:h-115">
          <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-130 mb-12">
            {projects.map((item, index) => {
              return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-115 relative group flex justify-center items-center'>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1279px) 100vw, 640px"
                        quality={100}
                        priority={index === 0}
                        unoptimized
                        className="object-contain xl:object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* Navigation Buttons */}
            <NavigationButton containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-5.5 w-11 h-11 flex justify-center items-center transition-all duration-300 rounded-full" iconStyles="" />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.div>;
}

export default Projects;