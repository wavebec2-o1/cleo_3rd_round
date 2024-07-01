import React from "react";

import annaSevaImage from "../../Images/Section-4.svg";
import missionImage from "../../Images/Section-4.svg";
import visionImage from "../../Images/Section-4.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="aboutus  bg-black text-white mt-2 min-h-screen text-center">
          <h1 className="py-12 text-2xl">About Us</h1>
          <div class="container grid grid-cols-6 gap-4">
            <div class="col-start-1 col-span-4 lg:col-span-3 ">
              AnnaSeva aims to eliminate food waste and fight hunger by
              connecting surplus food from restaurants to NGOs. Our mission is
              to create a sustainable food system where no meal goes to waste
              and every individual has access to nutritious food.We envision a
              world where every meal is shared and no one goes hungry. By
              fostering collaboration between restaurants and NGOs, AnnaSeva
              strives to build a community that values sustainability and
              compassion.
            </div>

            <div class=" col-start-3 col-end-7 lg:ml-44">
              Our platform is designed to be user-friendly and efficient.
              Restaurants can quickly list their surplus food items, providing
              details about the type and quantity available. This information is
              immediately accessible to registered NGOs, who can browse the
              listings and request the food they need. Our system uses smart
              algorithms to ensure fair distribution, prioritizing requests
              based on urgency and proximity to maximize impact.
            </div>

            <div class="col-start-1 col-span-4 lg:col-span-3">
              AnnaSeva is more than just a technological solution; it's about
              fostering a community of sustainability and generosity. We
              collaborate with local businesses, community organizations, and
              volunteers to promote our mission. Real-time notifications keep
              everyone informed, and integrated mapping features help NGOs
              locate the nearest participating restaurants, making the logistics
              of food redistribution seamless and efficient.
            </div>
          </div>
        </div>
        <div className="container mt-8">
          <div className=" min-h-screen grid grid-cols-5">
            <div class="col-start-1 col-span-3">
              <h1 className="my-4">Our Mission</h1>
              AnnaSeva aims to eliminate food waste and fight hunger by
              connecting surplus food from restaurants to NGOs. Our mission is
              to create a sustainable food system where no meal goes to waste
              and every individual has access to nutritious food.We envision a
              world where every meal is shared and no one goes hungry. By
              fostering collaboration between restaurants and NGOs, AnnaSeva
              strives to build a community that values sustainability and
              compassion.
            </div>
            <div class="col-start-4 col-span-3">
              <img src="../../Images/aboutimg1.png" alt="" />
            </div>
            <div class="col-start-1 col-span-2">
              <img src="../../Images/aboutimg1.png" alt="" />
            </div>
            <div class="col-start-3 col-span-4">
              <h1 className="my-4">Our Mission</h1>
              AnnaSeva aims to eliminate food waste and fight hunger by
              connecting surplus food from restaurants to NGOs. Our mission is
              to create a sustainable food system where no meal goes to waste
              and every individual has access to nutritious food.We envision a
              world where every meal is shared and no one goes hungry. By
              fostering collaboration between restaurants and NGOs, AnnaSeva
              strives to build a community that values sustainability and
              compassion.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    // <div className="bg-gray-100 min-h-screen">
    //   <Navbar />

    //   <main className="container mx-auto py-8">
    //     <section id="about" className="mb-16">
    //       <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
    //       <div className="grid md:grid-cols-2 gap-8">
    //         <div className="text-lg">
    //           <p>
    //             AnnaSeva aims to eliminate food waste and fight hunger by
    //             connecting surplus food from restaurants to NGOs. Our mission is
    //             to create a sustainable food system where no meal goes to waste
    //             and every individual has access to nutritious food. We envision
    //             a world where every meal is shared and no one goes hungry.
    //           </p>
    //           <p className="mt-4">
    //             Our platform is designed to be user-friendly and efficient.
    //             Restaurants can quickly list their surplus food items, providing
    //             details about the type and quantity available. This information
    //             is immediately accessible to registered NGOs, who can browse the
    //             listings and request the food they need.
    //           </p>
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <img
    //             src={annaSevaImage}
    //             alt="AnnaSeva"
    //             className="rounded-lg shadow-lg"
    //           />
    //         </div>
    //       </div>
    //     </section>

    //     <section id="mission" className="mb-16">
    //       <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
    //       <div className="flex flex-col md:flex-row items-center">
    //         <div className="md:w-1/2 text-lg">
    //           <p>
    //             AnnaSeva aims to eliminate food waste and fight hunger by
    //             connecting surplus food from restaurants to NGOs. Our mission is
    //             to create a sustainable food system where no meal goes to waste
    //             and every individual has access to nutritious food. We envision
    //             a world where every meal is shared and no one goes hungry.
    //           </p>
    //         </div>
    //         <div className="md:w-1/2 flex justify-center">
    //           <img
    //             src={missionImage}
    //             alt="Mission"
    //             className="rounded-full w-1/2 shadow-lg mt-8 md:mt-0"
    //           />
    //         </div>
    //       </div>
    //     </section>

    //     <section id="vision">
    //       <h2 className="text-4xl font-bold text-center mb-8">Our Vision</h2>
    //       <div className="flex flex-col md:flex-row items-center">
    //         <div className="md:w-1/2 flex justify-center">
    //           <img
    //             src={visionImage}
    //             alt="Vision"
    //             className="rounded-full w-1/2 shadow-lg mt-8 md:mt-0"
    //           />
    //         </div>
    //         <div className="md:w-1/2 text-lg">
    //           <p>
    //             We envision a world where every meal is shared and no one goes
    //             hungry. By fostering collaboration between restaurants and NGOs,
    //             AnnaSeva strives to build a community that values sustainability
    //             and compassion. AnnaSeva aims to eliminate food waste and fight
    //             hunger by connecting surplus food from restaurants to NGOs. Our
    //             mission is to create a sustainable food system where no meal
    //             goes to waste and every individual has access to nutritious
    //             food.
    //           </p>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
};

export default About;
