// // ContactPage.tsx
// const Contact: React.FC = () => {
//   return (
//     <div className="flex flex-col justify-center items-center w-full mt-20">
//       <h2 className="text-center text-5xl">Contact Us</h2>
//       <p className="italic m-4">
//         Vi är här för att hjälpa dig! Har du frågor om våra produkter, din
//         beställning, eller behöver du hjälp med något annat? <br /> Tveka inte
//         att höra av dig – vi finns här för dig.
//       </p>
//       <form className="max-w-lg mx-auto mt-8 p-4 shadow-md rounded-lg">
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             E-mail:
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="message"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Message:
//           </label>
//           <textarea
//             name="message"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Send
//         </button>
//       </form>
//       <div className="mt-12">
//         {/* Video component for Santa eye blink */}
//         <video
//           src="/videos/Santa-Eye-Blink.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-64 h-64 rounded-lg shadow-lg"
//         />
//         <p className="mt-4 text-center text-gray-700">
//           Här är en blinkande tomte för att sprida julglädje! 🎅
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// Test 2

import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full mt-20 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-rose-600 mb-6">
        Kontakta Oss
      </h2>

      {/* Intro Text */}
      <p className="text-lg italic text-center text-gray-700 max-w-2xl">
        Vi är här för att hjälpa dig! Har du frågor om våra produkter, din
        beställning, eller behöver du hjälp med något annat? <br /> Tveka inte
        att höra av dig – vi finns här för dig.
      </p>

      {/* Contact Form */}
      <form
        className="max-w-lg w-full bg-white shadow-md rounded-lg mt-8 p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Namn:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
            placeholder="Ditt namn"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            E-post:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
            placeholder="Din e-postadress"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Meddelande:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
            placeholder="Skriv ditt meddelande här..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-rose-500 rounded-lg hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 focus:outline-none"
          >
            Skicka
          </button>
        </div>
      </form>

      {/* Video Section */}
      <div className="mt-12 text-center">
        <video
          src="/videos/Santa-Eye-Blink.mp4"
          autoPlay
          loop
          muted
          className="w-64 h-64 rounded-lg shadow-lg"
        />
        <p className="mt-4 text-gray-700">
          Här är en blinkande tomte för att sprida julglädje! 🎅
        </p>
      </div>
    </section>
  );
};

export default Contact;
