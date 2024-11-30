// const About = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="mt-20">
//         <h2 className="text-center text-5xl">
//           Din destination för julshopping 🎄
//         </h2>
//         <p className="text-center mt-4 sm:px-20 px-8">
//           På Christmas Shopping tror vi att julen är årets mest magiska tid – en
//           säsong fylld av glädje, värme och givmildhet. Vårt mål är att göra din
//           julshopping lika härlig som stressfri, med ett noggrant utvalt
//           sortiment av gåvor, dekorationer och julens nödvändigheter. <br></br>
//           Varför välja oss? 🎁 <br></br> Handplockade gåvor: Oavsett om du
//           handlar till nära och kära, vänner eller kollegor erbjuder vi ett
//           brett utbud av unika och meningsfulla presenter som passar alla smaker
//           och plånböcker. 🎄 Juldekorationer: Från glittrande ljus till eleganta
//           julgranskulor – vi har allt du behöver för att förvandla ditt hem till
//           ett vinterlandskap. 🛍️ Smidig shopping: Slipp julstressen! Vår
//           användarvänliga onlinebutik och snabba leveranser gör att du kan
//           fokusera på det som verkligen betyder något – att umgås med dina nära
//           och kära. 🌟 <br></br> Julstämning garanterad: Vi brinner för att
//           sprida julglädje och ser till att varje paket vi skickar är fyllt med
//           en liten touch av magi. <br></br>Vårt löfte Hos Christmas Shopping är
//           vi engagerade i kvalitet, service och julens anda. Varje produkt är
//           noggrant utvald, och vi tänker på varje detalj. Vi vill att din
//           julshopping ska vara lika glädjefylld som själva julafton. <br></br>
//           Tack för att du låter oss vara en del av dina jultraditioner.<br></br>{" "}
//           God Jul och ett Gott Nytt År! 🎅✨
//         </p>
//       </div>
//       <img src="/images/about.png" alt="about" className=" p-8 sm:p-20" />
//     </div>
//   );
// };

// export default About;

// // uppdatering

import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-12 bg-white text-gray-800">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Din destination för julshopping 🎄
        </h2>
        <p className="text-lg leading-relaxed">
          På{" "}
          <span className="font-semibold text-rose-600">
            Christmas Shopping
          </span>{" "}
          tror vi att julen är årets mest magiska tid – en säsong fylld av
          glädje, värme och givmildhet. Vårt mål är att göra din julshopping
          lika härlig som stressfri, med ett noggrant utvalt sortiment av gåvor,
          dekorationer och julens nödvändigheter.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-rose-600 mb-4">
            Varför välja oss? 🎁
          </h3>
          <ul className="list-disc list-inside space-y-4 text-left mx-auto sm:mx-12">
            <li>
              <span className="font-semibold">Handplockade gåvor:</span> Oavsett
              om du handlar till nära och kära, vänner eller kollegor erbjuder
              vi ett brett utbud av unika och meningsfulla presenter som passar
              alla smaker och plånböcker.
            </li>
            <li>
              <span className="font-semibold">Juldekorationer:</span> Från
              glittrande ljus till eleganta julgranskulor – vi har allt du
              behöver för att förvandla ditt hem till ett vinterlandskap.
            </li>
            <li>
              <span className="font-semibold">Smidig shopping:</span> Slipp
              julstressen! Vår användarvänliga onlinebutik och snabba leveranser
              gör att du kan fokusera på det som verkligen betyder något – att
              umgås med dina nära och kära.
            </li>
            <li>
              <span className="font-semibold">Julstämning garanterad:</span> Vi
              brinner för att sprida julglädje och ser till att varje paket vi
              skickar är fyllt med en liten touch av magi.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-lg leading-relaxed">
          Hos{" "}
          <span className="font-semibold text-rose-600">
            Christmas Shopping
          </span>{" "}
          är vi engagerade i kvalitet, service och julens anda. Varje produkt är
          noggrant utvald, och vi tänker på varje detalj. Vi vill att din
          julshopping ska vara lika glädjefylld som själva julafton.
        </p>
        <p className="mt-4 font-semibold text-rose-600">
          Tack för att du låter oss vara en del av dina jultraditioner. <br />
          God Jul och ett Gott Nytt År! 🎅✨
        </p>
      </div>
      <div className="mt-8">
        <img
          src="/images/about.png"
          alt="about"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default About;
