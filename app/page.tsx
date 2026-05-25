import { FiDownload } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypingName from "@/components/TypingName";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-0 max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/70 xl:mb-0">
              Software Developer
            </span>
            <h1 className="title mb-6">
              Olá, eu sou <br /> <TypingName text="Heriberto" className="text-accent" startDelayMs={1200} />
            </h1>
            <p className="mb-9 max-w-160 text-white/80">
              Desenvolvedor Full Stack júnior, formado em Tecnologia em Sistemas para Internet e com residência tecnológica concluída. Foco em React, Next.js, Tailwind e TypeScript no front-end e em APIs/microserviços no back-end com Node.js (NestJS/Express) e Django (Django REST Framework), usando PostgreSQL, Redis, Docker além de integrações REST, webhooks e automações. Tenho atenção à organização, testes (unitários/integração) e documentação.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/assets/resume/curriculo.pdf" download className="inline-flex">
                <Button variant={'outline'} size={'lg'} className="flex items-center gap-2 uppercase">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary" />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-0 mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home; 