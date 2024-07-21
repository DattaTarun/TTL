import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MentorCard from '../Components/MentorCard/Mentorcard';
import SkillCard from '../Components/SkillCard/Skillcard';
import HackathonCard from '../Components/HackathonCard/Hackathoncard';
import ProjectCard from '../Components/ProjectCard/Projectcard';
import Footer from '../Components/Footer/Footer';
import profileLanding from '../Components/assets/profileLanding.png'
import profilecircle from '../Components/assets/profilecircle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import c from '../Components/assets/c++.png'
import dsa from '../Components/assets/dsa.png'
import python from '../Components/assets/python.png'
import ui from '../Components/assets/python.png'
import hacklipse from '../Components/assets/hacklipse.jpg'
import flamingo from '../Components/assets/flamingo.jpg'


const mentors = [
    {
      name: "Komal Dua",
      skill:"UX Design, DSA, Front-end Dev",
      description: "Interned at Barclays",
      image: profilecircle
    },
    {
      name: "Baani Singh",
      skill:"Cyber-Sec, Web Dev",
      description: "Interned at Expedia",
      image: profilecircle
    },
    {
      name: "Tarun Datta",
      skill:"ML/AI, Data preprocessing",
      description: "Interned at JPMC",
      image: profilecircle
    },
    {
      name: "Hityshi",
      skill:"Full-Stack, DevOps",
      description: "Interned at Oracle",
      image: profilecircle
    }
  ];
  
  const skills = [
    {
      name: "C++",
      description: "Tap to learn more!",
      image: c
    },
    {
      name: "Python",
      description: "Tap to learn more!",
      image: python
    },
    {
      name: "Data Structures",
      description: "Tap to learn more!",
      image: dsa
    },
    {
      name: "UI/UX Design",
      description: "Tap to learn more!",
      image: ui
    }
  ];
  
  const hackathons = [
    {
      name: "Hacklipse 5.0",
      org: "Organized by: ACM Thapar",
      description:"Unlock the excitement of innovation with every elusive brick. Builders, brace yourselves for Hacklipse: Code Crusade, a digital Odyssey! Dive into a world where creativity, problem-solving, and rapid construction reign supreme. Embark on an electrifying journey, where assembling intricate statements against the clock is the ultimate quest. Get the chance to learn new coding skills, network with professionals, and interact with other participants.",
      image: hacklipse
    },
    {
      name: "Flamingo 3.0",
      org:"Organized by: ACM Thapar",
      description: "Our annual designathon, Flamingo, is back, and this year, we're taking things to a whole new brick-tastic level! Get ready to unleash your inner engineer and let your imagination soar. Think outside the box and collaborate with your team to design, build, and showcase your most innovative creations. Whether you're a seasoned pro or a complete novice,",
      image: flamingo
    }
  ];
  
  const projects = [
    {
      name: "PhD Project Monitoring System",
      description: "A comprehensive platform where teachers can evaluate the thesis based on their topics and dicussions.",
    },
    {
      name: "SmartHome IoT System",
      description: "An Internet of Things (IoT) project that automates home appliances based on user preferences and environmental conditions.",

    },
    {
      name: "HealthCare Management System",
      description: "Web-based platform for managing patient records, appointments, and medical history securely and efficiently.",

    },
    {
      name: "Virtual Reality Game: Galactic Explorer",
      description: "A virtual reality game where players explore distant galaxies, discover new planets, and engage in space battles.",

    },
    {
      name: "E-commerce Platform: TechMart",
      description: "Online marketplace specializing in electronics and gadgets, featuring user reviews, secure payments, and real-time inventory updates."
    },
    {
      name: "Weather Forecasting Application",
      description: "Mobile app that provides accurate weather forecasts, alerts for severe weather conditions, and historical weather data analysis.",

    }
  ];

const LandingPage=() => {
    return(
        <div className='flex flex-col'>
            <Navbar />
            <header className="text-center mt-20">
                <span className='text-[rgba(128,128,128,1)] text-5xl font-montserrat font-regular italic leading-loose '>T.   T.   L.</span>
                <h1 className="text-[rgba(100,0,0,0.85)] text-7xl font-montserrat text-[#591C1C] tracking-wider">Talk, Teach, Learn</h1>
                <div className='flex flex-wrap justify-center items-center mt-20 mr-10'>
                    <div className='flex flex-col gap-10 ml-10'>
                        <FontAwesomeIcon icon={faInstagram} className="h-9 w-9 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
                        <FontAwesomeIcon icon={faLinkedin} className="h-9 w-9 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
                    </div>
                    <p className="text-gray-600  max-w-sm mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida ligula quis lorem faucibus, in scelerisque nibh sodales. Pellentesque cursus interdum lobortis. Phasellus congue viverra egestas.ksfhgdshjfghjsdgfhjdsgfhjsgfhjsfghdsjfghjsdf
                    </p>
                    <div className="flex flex-wrap justify-center mt-10 mb-16">
                        <div className='w-56 h-36 bg-[rgb(175,140,140)] text-white font-montserrat text-xl font-semibold relative'><span className=' absolute bottom-3 right-5'>Connect</span></div>
                        <div className='w-56 h-36 bg-[rgb(137,67,67)] text-white font-montserrat text-xl font-semibold relative'><span className=' absolute bottom-3 right-5'>Communicate</span></div>
                        <div className='w-56 h-36 bg-[rgba(100,0,0,0.85)] text-white font-montserrat text-xl font-semibold relative'><span className=' absolute bottom-3 right-5'>Cultivate</span></div>
                    </div>
                    
                </div>
            </header>

            <section className="my-12 px-4 md:px-20">
                <h2 className="text-3xl font-montserrat font-semibold  mb-8 text-gray-800">FEATURED MENTORS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} mentor={mentor} />
                ))}
                </div>
            </section>

            <section className="my-12 px-4 md:px-20">
                <h2 className="text-3xl font-montserrat font-semibold mb-8 text-gray-800">TRENDING SKILLS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
                </div>
            </section>

            <section className="my-12 px-4 md:px-20">
                <h2 className="text-3xl font-montserrat font-semibold mb-8 text-gray-800">ONGOING HACKATHONS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                {hackathons.map((hackathon, index) => (
                    <HackathonCard key={index} hackathon={hackathon} />
                ))}
                </div>
            </section>

            <section className="my-12 px-4 md:px-20">
                <h2 className="text-3xl font-montserrat font-semibold mb-8 text-gray-800">ONGOING PROJECTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                </div>
            </section>

            <Footer />
        </div>
    )
}
export default LandingPage;