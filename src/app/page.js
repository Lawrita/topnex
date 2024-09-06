"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: "1" }}
    >
      <section className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image container */}
        <div className="h-1/3 lg:min-h-full lg:w-1/2 relative">
          <Image
            src="/timothy.png"
            alt="Description of the image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 items-center justify-center ml-1">
          <h1 className="text-xl ms-5 md:text-4xl font-bold">
            Creating Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="md:text-xl text-start">
            Transforming ideas into digital reality.Welcome to my portfolio! Im
            a skilled designer with over 2years of experience,my passion lies in
            creating captivating website designs and implementing them through
            frontend development,i take pride in staying up-to-date with current
            design trends and leveraging my creativity to produce visually
            appealing and user-friendly websites.Throughout my career, i have
            developed a deep understanding of user experience(UX)and user
            interface(UI)principles.by putting myself in the shoes of the
            end-users,
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                View My Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
