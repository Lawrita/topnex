"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./navlink.jsx";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(225, 225, 225)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(225, 225, 225)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Navlinks link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Thato</span>
          <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
            UI/UX
          </span>
        </Link>
      </div>
      <div className=" h-8 flex gap-8 ml-15 w-8 rounded text-black items-center justify-center">
        <a href="mailto:belovedtheophilus15@gmail.com" className="block">
          <img
            src="/gmail.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        <a href="https://www.behance.net/femitheophilus" className="block">
          <img
            src="/behance.jpeg"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/femi-theophilus-42822b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="block"
        >
          <img
            src="/linkedin.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61554737093693"
          className="block"
        >
          <img
            src="/facebook.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        <a
          href="https://www.instagram.com/thato.uiux?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          className="block"
        >
          <img
            src="/instagram.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        <a
          href="https://www.figma.com/proto/rKSRYau9F4XVZArAz9A2nq/Portfolio-template-(1)?page-id=11%3A2809&type=design&node-id=701-1063&viewport=-32%2C175%2C0.13&t=wgcMnfIQcOCFN9ca-1&scaling=scale-down&starting-point-node-id=701%3A1063&mode=design"
          className="block"
        >
          <img
            src="/figma.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            className="block fixed"
          />
        </a>
        {/* <a href="mailto:belovedtheophilus15@gmail.com" className="block">
          <Image src="/gmail.png" alt="Gmail" width={24} height={24} />
        </a> */}
        {/* <Link href="https://www.behance.net/femitheophilus">
          <Image src="/behance.jpeg" alt="Behance" width={24} height={24} />
        </Link> */}
        {/* <Link href="https://www.linkedin.com/in/femi-theophilus-42822b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link> */}
        {/* <Link href="https://www.facebook.com/profile.php?id=61554737093693">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link> */}
        {/* <Link href="https://www.instagram.com/thato.uiux?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link> */}
        {/* <Link href="https://www.figma.com/proto/rKSRYau9F4XVZArAz9A2nq/Portfolio-template-(1)?page-id=11%3A2809&type=design&node-id=701-1063&viewport=-32%2C175%2C0.13&t=wgcMnfIQcOCFN9ca-1&scaling=scale-down&starting-point-node-id=701%3A1063&mode=design">
          <Image src="/figma.png" alt="figma" width={24} height={24} />
        </Link> */}
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((open) => !open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute text-4xl top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-10"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
