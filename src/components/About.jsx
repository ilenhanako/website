import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/*<p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>*/}
      </motion.div>
    <div className="flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]'
      >
        I am a budding software developer at the Singapore University of Technology and Design.
        <br/><br/>My interest in technology was sparked by robotics from an early age during my primary school years, motivating me to further explore and innovate in new technologies. 
        <br/><br/>I also have a passion for gardening, reading, and enjoying matcha lattes.
    </motion.p>

    <img src="https://media.licdn.com/dms/image/D5603AQHvU6YmTfEOsA/profile-displayphoto-shrink_800_800/0/1698433543961?e=1721260800&v=beta&t=vv87FbecdOvKHnK0edjOP5BptaMEkukfNc88hiQD89U" 
    alt="Description of the image" 
    className="rounded-full mt-[-150px] ml-20"/>
    </div>
{/*
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

/*export default SectionWrapper(About, "about");*/

export default About;
