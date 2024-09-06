"use client";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const [isSkillRefInView] = useInView(skillRef);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*container*/}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*text-container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/*Biography-container*/}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <Image
                src="/timothy.png" // Use correct path relative to the public folder
                alt=""
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full ring-blue-300"
              />
            </div>
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY description */}
            <p className="text-lg">
              I am a skilled web designer with over 2years of experience in the
              industry, my passion lies in creating captivating website designs
              and implementing them through frontend development, i take pride
              in staying up-to-date with current design trends and leveraging my
              creativity to produce visually appealing and user-friendly
              websites. Throughout my career, i have developed a deep
              understanding of user experience (UX) and user interface
              (UI)principles. by putting myself in the shoes of the end-users,
            </p>
            {/* BIOGRAPHY statistics*/}
            <span className="text-lg">
              Hello, it's me Femi Theophilus And i'm a Designer UI/UX designer
              with extensive experience for over 2years. <br />
              expertise is to create a mobile friendly website design, frontend
              design, and many more.......
            </span>
            {/*bio SVG scroll-container*/}
            <FaArrowDown className="h-10 w-10 rounded-full ring-4" />
          </div>

          {/*Skills-container*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/*Skill title-container*/}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/*Skills List-container*/}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe XD
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                User Research
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Information Architecture
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                User Experience
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Wireframing and prototype
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Communication
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Collaboration
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Empathy
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Interaction Design
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Slack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Coding
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MERN Stack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Motion Workspace
              </div>
            </div>
            {/*Skills Scroll-container*/}
            <FaArrowDown className="h-10 w-10 rounded-full ring-4" />
          </div>
          {/*Experience-container*/}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/*Experience-TITLE*/}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/*Experience-LIST*/}
            <div>
              {/*Experience-LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*Job Title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    UI/UX Designer
                  </div>
                  {/* Job desc*/}
                  <div className="p-3 text-sm italic">
                    Develop and maintain websites using HTML, CSS, JavaScript,
                    and other relevant web technologies. Ensure the technical
                    feasibility of UI/UX designs. Optimize applications for
                    maximum speed and scalability.
                  </div>
                  {/* Job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-2024
                  </div>
                  {/* Job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Framer
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/* Line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>

              {/*Experience-LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3"></div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/* Line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3">
                  {/*Job Title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Figma and Framer Motion
                  </div>
                  {/* Job desc*/}
                  <div className="p-3 text-sm italic">
                    Design, develop, and maintain scalable web applications
                    using figma, Framer,Adobe XD ,Wireframing and prototype.
                    Write maintainable, and efficient code. Ensure the technical
                    feasibility of UI/UX designs ,Optimize performance and
                    scalability.
                  </div>
                  {/* Job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-2024
                  </div>
                  {/* Job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    UI/UX Design
                  </div>
                </div>
              </div>

              {/*Experience-LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*Job Title*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Interaction Design
                  </div>
                  {/* Job desc*/}
                  <div className="p-3 text-sm italic">
                    Develop and manage web applications and integrate front-end
                    and back-end systems. Implement responsive design for mobile
                    and desktop users. Work closely with developers, and project
                    managers to deliver high-quality products. Participate in
                    code reviews and contribute to team knowledge sharing.
                    Perform testing and debugging of web applications.
                    Troubleshoot and resolve any issues or bugs.
                  </div>
                  {/* Job date*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* Job company*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Wood Tech
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/* Line*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/*SVGcontainer*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Image
            src="/young.png"
            alt="Profile picture"
            width={500}
            height={500}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
