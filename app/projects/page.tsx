"use client"

import React, {useState} from "react";
import {motion} from 'framer-motion'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

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
    desc: "Edukids é um sistema de gestão escolar voltado para escolas de educação infantil, desenvolvido com Django e React.",
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}, {name: 'Python'}, {name: 'Django'}],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/heribertomonteiro/edukids"
  },
  {
    num: "02",
    category: "Full Stack 2",
    title: "EduKids",
    desc: "Edukids é um sistema de gestão escolar voltado para escolas de educação infantil, desenvolvido com Django e React.",
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}, {name: 'Python'}, {name: 'Django'}],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/heribertomonteiro/edukids"
  },
  {
    num: "03",
    category: "Full Stack 3",
    title: "EduKids",
    desc: "Edukids é um sistema de gestão escolar voltado para escolas de educação infantil, desenvolvido com Django e React.",
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}, {name: 'Python'}, {name: 'Django'}],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/heribertomonteiro/edukids"
  },
]

const Projects = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    // Obter o índice do slide ativo
    const activeIndex = swiper.activeIndex;
    setProject(projects[activeIndex]);
  };

  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-7.5">
        <div className="w-full xl:w-[50%] xl:h-115 flex flex-col xl:justify-between order-2 xl:order-0">
          <div className="flex flex-col gap-7.5 h-[50%]">
            {/** Project Number */}
            <div className="text-8xl leading-none font-extrabold text-outline">{project.num}</div>
            {/** Project Category */}
            <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">Projeto {project.category}</h2>
            {/** Project Description */}
            <p className="text-white/60">{project.desc}</p>
            <ul className="flex flex-wrap gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent whitespace-nowrap">
                    {item.name}
                    {/** remover a última vírgula */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                )
              })}
            </ul>
            {/*Border*/}
            <div className="border border-white/20"></div>
            {/*Button*/}
            <div>
              <Link href={project.github} target="_blank">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-15 h-15 bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositório no GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%] xl:h-115">
          <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-130 mb-12">
            {projects.map((item, index) => {
              return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-115 relative group flex justify-center items-center bg-pink-50/20'>
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={item.image} alt={item.title} fill className="object-cover"/>
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