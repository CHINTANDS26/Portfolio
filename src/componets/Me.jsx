import {
    RiGithubFill,
    RiLinkedinFill,
    RiTwitterFill,
    RiInstagramFill,
    RiPhoneFill,
  } from "@remixicon/react";
  import { motion } from "framer-motion";
  
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };
  
  const iconVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    }),
  };
  
  // CONTACT_CONTENT object
  const CONTACT_CONTENT = {
    headline: "Get in Touch",
    description:
      "Feel free to reach out to me for collaborations, opportunities, or just to say hi. I'm always open to exciting projects and conversations.",
    email: "chintands14@gmail.com",
    socialLinks: [
      {
        platform: "GitHub",
        icon: "RiGithubFill",
        url: "https://github.com/CHINTANDS26",
        ariaLabel: "GitHub",
      },
      {
        platform: "LinkedIn",
        icon: "RiLinkedinFill",
        url: "https://www.linkedin.com/in/chintan-d-s-598650258",
        ariaLabel: "LinkedIn",
      },
      {
        platform: "Twitter",
        icon: "RiTwitterFill",
        url: "https://twitter.com/your-username",
        ariaLabel: "Twitter",
      },
      {
        platform: "Instagram",
        icon: "RiInstagramFill",
        url: "https://www.instagram.com/chintan.d.s",
        ariaLabel: "Instagram",
      },
      {
        platform: "Phone",
        icon: "RiPhoneFill",
        url: "tel:+91 8088579954", // Replace with your phone number
        ariaLabel: "Phone",
      },
    ],
    footerText: "Built with passion and creativity by Chintan D S.",
  };
  
  const Me = () => {
    return (
      <section
        className="min-h-screen flex flex-col justify-center px-4 md:px-10"
        id="contact"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Contact
        </h2>
        <div className="h-1 w-20 bg-white mb-8"></div>
  
        {/* Headline */}
        <motion.h3
          className="text-6xl md:text-8xl leading-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={textVariants}
        >
          {CONTACT_CONTENT.headline}
        </motion.h3>
  
        {/* Description */}
        <motion.p
          className="text-lg md:text-2xl mt-6 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          variants={textVariants}
        >
          {CONTACT_CONTENT.description}
        </motion.p>
  
        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT_CONTENT.email}`}
          className="text-2xl md:text-3xl font-medium mt-8"
          initial="hidden"
          whileInView="visible"
          custom={0.8}
          variants={textVariants}
        >
          {CONTACT_CONTENT.email}
        </motion.a>
  
        {/* Social Icons */}
        <div className="flex space-x-6 mt-8">
          {CONTACT_CONTENT.socialLinks.map((link, index) => {
            const Icon =
              link.icon === "RiGithubFill"
                ? RiGithubFill
                : link.icon === "RiLinkedinFill"
                ? RiLinkedinFill
                : link.icon === "RiTwitterFill"
                ? RiTwitterFill
                : link.icon === "RiInstagramFill"
                ? RiInstagramFill
                : RiPhoneFill;
  
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.2} // Staggered animation
                variants={iconVariant}
              >
                <Icon size={36} />
              </motion.a>
            );
          })}
        </div>
        <motion.p
          className="text-sm text-stone-400 mt-36"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          {CONTACT_CONTENT.footerText}
        </motion.p>
      </section>
    );
  };
  
  export default Me;
  