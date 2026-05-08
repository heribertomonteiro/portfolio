"use client";

import { BsArrowDownRight } from "react-icons/bs"; 
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    href: ""
  },
  {
    num: "02",
    title: "Desenvolvimento de Sistemas Embarcados",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    href: ""
  },
  {
    num: "03",
    title: "Desenvolvimento de automações",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    href: ""
  },
  {
    num: "04",
    title: "Desenvolvimento de chatbots",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.",
    href: ""
  }
]

const Services = () => {
  return (  
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-15"
        >
          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-400">{service.num}</div>
                <Link href={service.href} className="w-10 h-10 rounded-full bg-white group-hover:bg-accent transition-all duration-400 flex justify-center items-center hover:-rotate-45"><BsArrowDownRight className="text-primary text-2xl"/></Link>
              </div>
              <h2 className="text-10.5 font-bold leading-none text-white group-hover:text-accent transition-all duration-400">{service.title}</h2>
              <p>{service.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;