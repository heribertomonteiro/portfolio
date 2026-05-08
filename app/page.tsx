import { FiDownload } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between cl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl">Software Developer</span>
            <h1 className="title mb-6">Olá, eu sou <br/> <span className="text-accent">Heriberto Monteiro</span></h1>
            <p className="max-w-125 mb-9 text-white/80">Sou especialista em criar experiências digitais elegantes e tenho proficiência em diversas linguagens de programação e tecnologias.</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant={'outline'} size={'lg'} className="flex items-center gap-2 uppercase">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
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