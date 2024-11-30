import Hero from "../components/Hero";
import { getHeroPropsForPage } from "../components/Hero";
import { HeroProps } from "../models/productModels";
import Countdown from "../components/Countdown";
import { Link } from "react-router-dom";

const Home = () => {
  const heroInfo = getHeroPropsForPage("Home") as HeroProps;

  return (
    <main>
      {/* Hero Section */}
      <Hero {...heroInfo} />

      {/* Countdown Section */}
      <section className="w-full bg-rose-400 text-white text-center flex flex-col sm:flex-row items-center justify-center py-8">
        <div className="flex flex-col items-center sm:items-start mx-8">
          <div className="relative">
            <h1 className="font-dancing font-bold text-4xl">Nedräkning till</h1>
            <img
              src="/images/santaclausremovebg.png"
              alt="Christmas Santa Claus"
              className="hidden md:block absolute -top-11 -left-12 w-20 transform scale-x-[-1] rotate-[-25deg]"
            />
          </div>
          <h2 className="font-dancing font-bold text-3xl">Juldagen</h2>
        </div>
        <div className="mt-6 sm:mt-0 mx-4 flex justify-center items-center">
          <Countdown />
        </div>
      </section>

      {/* Highlighted Products Section */}
      <section className="my-16 w-full px-6 sm:px-12 lg:px-20 flex flex-wrap gap-8 justify-evenly">
        {[
          {
            image: "/images/julgranframsida.png",
            alt: "Julgran framsida",
            title: "Klassiska Julgranar",
            link: "/products",
          },
          {
            image: "/images/belysning.png",
            alt: "Belysning",
            title: "Belysning",
            link: "/products",
          },
        ].map((item, index) => (
          <article key={index} className="relative group">
            <Link to={item.link}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-72 xs:w-96 h-80 xs:h-[450px] rounded-lg border-4 border-black cursor-pointer transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </Link>
            <h3 className="text-4xl text-black absolute bottom-4 left-3 transition-colors duration-300 group-hover:text-rose-600">
              {item.title}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home;
