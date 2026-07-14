import Image from "next/image";
import heroDesktop from "../assets/legacy-hero.webp";
import heroMobile from "../assets/legacy-mb-hero.webp";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Mobile & Tablet — portrait banner */}
      <div className="block md:hidden">
        <Image
          src={heroMobile}
          alt="Legacy by Gaurs – uber-luxury golf-view condominiums at Jaypee Greens, Greater Noida"
          priority
          sizes="100vw"
          quality={80}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Desktop — wide banner */}
      <div className="hidden md:flex w-full md:h-[70vh] items-center relative overflow-hidden">
        <Image
          src={heroDesktop}
          alt="Legacy by Gaurs – uber-luxury golf-view condominiums at Jaypee Greens, Greater Noida"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </div>
    </section>
  );
};

export default Hero;
