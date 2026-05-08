"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Photo() {
    return (
        <div className="w-75 xl:w-126.5 h-75 xl:h-126.5 relative flex items-center justify-center">
            
            {/* SVG fica absolute, cobrindo todo o container */}
            <motion.svg
                className="absolute inset-0 w-full h-full"
                fill='transparent'
                viewBox='0 0 506 506'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 1.85, ease: "easeIn" } }}
            >
                <motion.circle
                    cx='253'
                    cy='253'
                    r='250'
                    stroke='#00ff99'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    initial={{ strokeDasharray: ["24 10 0 0"] }}
                    animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                />
            </motion.svg>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 2, ease: "easeIn" } }}
                className="w-72.5 h-72.5 xl:w-122.5 xl:h-122.5 rounded-full overflow-hidden relative z-10"
            >
                <Image
                    src="/assets/minha_foto_sem_fundo1.png"
                    alt="Minha Foto"
                    priority
                    quality={100}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1280px) 320px, 400px"
                    className="object-contain"
                />
                <div className="absolute left-0 right-0 bottom-0 h-1/16 pointer-events-none bg-linear-to-t from-primary to-transparent backdrop-blur-sm" />
            </motion.div>

        </div>
    )
}