import { Link } from "react-router-dom";
import { HeroProps } from "../models/productModels";

const Hero = ({ title, subtitle, text, buttons }: HeroProps) => {
  return (
    <section className="relative bg-[url('/images/framsidajulgran.png')] bg-cover bg-center bg-no-repeat max-h-[509px] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-24 text-white">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-dancing leading-tight">
            {title}
            <strong className="block sm:text-6xl lg:text-7xl font-extrabold text-rose-400 mt-2">
              {subtitle}
            </strong>
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-lg mx-auto sm:mx-0">
            {text}
          </p>

          {buttons && (
            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <Link
                to="/products"
                className="btn-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                Visit Shop
              </Link>
              <Link
                to="/about"
                className="btn-secondary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

export function getHeroPropsForPage(page: string): HeroProps {
  const heroData: Record<string, HeroProps> = {
    Home: {
      title: "Skapa en magisk",
      subtitle: "Julstämning",
      text: "med hjälp av vår breda sortiment av julpynt och dekorationer!",
      buttons: true,
    },
    Products: {
      title: "Vi erbjuder allt från",
      subtitle: "Klassiska julgranar",
      text: "till moderna klassiska julgranar, ljusslingor och små, dekorativa detaljer",
      buttons: false,
    },
  };

  if (heroData[page]) {
    return heroData[page];
  }

  throw new Error(`Invalid page: ${page}`);
}
