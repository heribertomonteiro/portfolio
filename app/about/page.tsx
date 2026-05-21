"use client";

import { info } from 'console';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const about = {
    title: "Sobre mim",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    info: [
      {
        fieldName: "Nome",
        fieldValue: "Heriberto Monteiro"
      },
      {
        fieldName: "Email",
        fieldValue: "heribertoomonteiroo@gmail.com"
      },
      {
        fieldName: "Telefone",
        fieldValue: "(84) 98870-4218"
      },
      {
        fieldName: "Experiência",
        fieldValue: "+4 anos"
      },
      {
        fieldName: "Linguagens",
        fieldValue: "Português, Inglês"
      },
      {
        fieldName: "Localização",
        fieldValue: "Santa Cruz, RN - Brasil"
      }
    ]
}

const experiences = {
    icon: "/assets/resume/badge.svg",
    title: "Minha experiência",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    items: [
      {
        company: "Instituto Federal do Rio Grande do Norte",
        position: "Desenvolvedor Full-Stack",
        duration: "2022 - 2025"
      },
      {
        company: "Softex",
        position: "Desenvolvedor de Sistemas Embarcados (IoT e FPGA)",
        duration: "2025 - 2026"
      },
      {
        company: "Laboratório de Pesquisa Allyson Amilcar Angelus",
        position: "Desenvolvedor Front-end",
        duration: "2024 - 2025"
      },
      {
        company: "Freelancer",
        position: "Desenvolvedor Full-Stack",
        duration: "2025 - Atualmente"
      },
      {
        company: "Projetos pessoais",
        position: "Desenvolvedor Full-Stack",
        duration: "2022 - Atualmente"
      },
      {
        company: "Projetos Pessoais",
        position: "Desenvolvedor de Sistemas Embarcados (IoT e FPGA)",
        duration: "2024 - 2026"
      },
      {
        company: "Projetos Pessoais",
        position: "Desenvolvedor de automações e chatbot com N8N",
        duration: "2026"
      }
    ]
  }


const educations = {
  icon: "/assets/resume/education.svg",
  title: "Minha educação",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
  items: [
    {
      institution: "Instituto Federal do Rio Grande do Norte",
      course: "Graduação de Tecnologia em Sistemas para Internet",
      duration: "2410 Horas"
    },
    {
      institution: "Instituto Federal do Rio Grande do Norte",
      course: "Residência Tecnológica em Sistemas Embarcados",
      duration: "1040 Horas"
    },
    {
      institution: "Instituto Federal do Rio Grande do Norte",
      course: "Introdução ao Ethical Hacking",
      duration: "60 Horas"
    },
    {
      institution: "Tic em trilhas",
      course: "Dominando NodeJS",
      duration: "30 Horas"
    }
  ]
}

const skills = {
    title: "Minhas Habilidades",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    skillList: [
      {
        icon: <FaHtml5/>,
        name: "HTML5"
      },
            {
        icon: <FaCss3Alt/>,
        name: "CSS3"
      },
      {
        icon: <FaJs/>,
        name: "JavaScript"
      },
      {
        icon: <SiTypescript/>,
        name: "TypeScript"
      },
      {
        icon: <FaReact/>,
        name: "React"
      },
      {
        icon: <SiNextdotjs/>,
        name: "Next.js"
      },
      {
        icon: <SiTailwindcss/>,
        name: "Tailwind CSS"
      },
      {
        icon: <FaNodeJs/>,
        name: "Node.js"
      },
      {
        icon: <SiExpress/>,
        name: "Express.js"
      },
      {
        icon: <SiNestjs/>,
        name: "NestJS"
      },
      {
        icon: <FaPython/>,
        name: "Python"
      },
      {
        icon: <SiDjango/>,
        name: "Django"
      },
      {
        icon: <FaGitAlt/>,
        name: "Git"
      },
      {
        icon: <FaDocker/>,
        name: "Docker"
      },
      {
        icon: <SiPostgresql/>,
        name: "PostgreSQL"
      },
      {
        icon: <SiRedis/>,
        name: "Redis"
      }
    ]
  }


const About = () => {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10 ">
        <TabsList className='flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6'>
          <TabsTrigger value="experience">Experiência</TabsTrigger>
          <TabsTrigger value="education">Educação</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="about">Sobre-mim</TabsTrigger>
        </TabsList>
        <div className='min-h-[70vh] w-full'>
          <TabsContent value="experience">
            <div className="flex flex-col gap-7 5 text-center xl:text-left">
              <h3 className='text-4xl font-bold'>{experiences.title}</h3>
              <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>{experiences.desc}</p>
              <ScrollArea className='h-100'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7.5'>
                  {experiences.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-65 min-h-15 text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education">
             <div className="flex flex-col gap-7 5 text-center xl:text-left">
              <h3 className='text-4xl font-bold'>{educations.title}</h3>
              <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>{educations.desc}</p>
              <ScrollArea className='h-100'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7.5'>
                  {educations.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-lg max-w-65 min-h-15 text-center lg:text-left'>{item.course}</h3>
                        <div className='flex items-center pt-6 gap-3'>
                          <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className='w-full h-full'>
            <div className="flex flex-col gap-7.5">
              <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>{skills.desc}</p>
              </div>
              <div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7.5'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-30 bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-5xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="about" className='w-full text-center xl:text-left'>
            <div className='flex flex-col gap-7.5'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>{about.desc}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-full mx-auto xl:mx-0'>
                {about.info.map((item, index) => {
                  return(
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4 xl:gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-lg'>{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
}

export default About;