import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  PseatAIfy,
  starbucks,
  tesla,
  shopify,
  Pgobble,
  
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Awards",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SUTD x Singtel Information Systems & Programming Award",
    award: "2nd Place in Computer Science Cohort in SUTD",
    company_name: "by Singtel, SUTD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "Developed a native Android app that centralizes reviews from other platforms, and utilizes Generative AI, ChatGPT’s LLM to give restaurant recommendations based on user preferences and the restaurants’ profiles.",
      "Role in team: LLM lead engineer and Android app developer."
    ],
    github: "https://github.com/ilenhanako/t4app"
  },
  {
    title: "Hack4Cities Hackathon",
    award: "Top 10 Finalists",
    company_name: "by SMU Smart City Society, IBM Singapore",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2023",
    points: [
      "Addressed smart city transportation complexities using quantum-centric supercomputing",
      "Implemented Grover’s, QAOA and Quantum Walk algorithms"
    ],
    github: "https://github.com/ilenhanako/HackForCities-Hackathon"
  },
  {
    title: "Tech4Women Hackathon",
    award: "1st Runner Up & Special Award by STACK Infrastructure",
    company_name: "by Women-Forum for Economy and Society, STACK Infrastructure, Agorize",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2022",
    points: [
      "An online learning blockchain platform addressing the STEM gender gap", 
      "Competed in the finals at the Women’s Forum Global Meeting in Paris"
    ],
  },
  {
    title: "SCSE Computing Challenge",
    award: "3rd place, Young Technopreneurs Award",
    company_name: "by NTU School of Computer Science and Engineering",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2021",
    points: [
      "Developed a machine learning CRNN model for predicting answers for handwritten mathematical equations",
      "Achieved 96% accuracy with over 500 000 datasets",
      "Developed a web app using ReactJS and integrating the CRNN model."
    ],
    github:"https://github.com/ilenhanako/NTU-SCSE-Challenge-2021"
  },
  {
    title: "Prudential Young Trailblazers Challenge",
    award: "2nd Place, Best Business Plan",
    company_name: "by Prudential, Acorn Training",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2018",
    points: [
      "Built a smart seating system for hawker centres using Arduino",
      "Pitched business plan to the CEO and CIO of Prudential Singapore"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gobble",
    competition: "SUTD x Singtel Information Systems & Programming Award",
    description:
      "Gobble is a review app that consolidates feedback from various platforms and offers personalized restaurant recommendations using generative AI, along with comparative insights between eateries.",
    tags: [
      {
        name: "GenAI LLM",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: Pgobble,
    source_code_link: "https://github.com/ilenhanako/t4app",
    id:"gobbleproject",
    bgColor:"bg-orange-300"
  },
  {
    name: "SeatAIfy",
    competition: "Temasek X SUTD GenAI Hackathon",
    description:
      "Built a web app in Python with Streamlit and the Azure OpenAI API, all to assist Temasek Holdings' HR Department in throwing the best events ever. Using prompt engineering and Retrieval-Augmented Generation (RAG).",
    tags: [
      {
        name: "GenAI LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Azure OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "StreamLit",
        color: "pink-text-gradient",
      },
    ],
    image: PseatAIfy,
    source_code_link: "https://github.com/ilenhanako/genai_hackathon_24",
    bgColor:"bg-green-200"
  },
  {
    name: "Qubit Force",
    competition:"Hack for Cities Hackathon",
    description:
    "Addressed the challenges of smart city transportation using advanced quantum computing techniques. Implemented a diverse range of quantum algorithms, including Grover's, QAOA, and Quantum Walk, within the framework of our solution.",
    tags: [
      {
        name: "quantum computing",
        color: "purple-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/ilenhanako/HackForCities-Hackathon",
    bgColor:"bg-violet-300"
  },
  {
    name: "EnovateSG",
    competition:"Tech for Cities Hackathon",
    description:
    "Conceptualized a web app to assist urban planners in enhancing solar panel technology. Utilized Digital Twin and IoT Devices to optimize solar panel deployment, while minimizing urban heating island effects ",
    tags: [
      {
        name: "digital twin",
        color: "purple-text-gradient",
      }
    ],
    image: tripguide,
    bgColor:"bg-amber-200"
  },
  {
    name: "Trifract",
    competition:"Design Thinking and Innovation Module",
    description:
    "Built a life-sized product of a light installation that promotes social interaction at Changi City Point. Created a 3D simulation of our product with Unreal Engine 5. Used Arduino and Hall Effect Sensor for the electronics",
    tags: [
      {
        name: "Unreal Engine",
        color: "purple-text-gradient",
      },
      {name: "Arduino Programming",
      color: "orange-text-gradient",
    }
    ],
    image: tripguide,
    source_code_link: "https://github.com/ilenhanako/NTU-SCSE-Challenge-2021",
    bgColor:"bg-rose-200"
  },
  {
    name: "STEMFEMily",
    competition:"Tech for Women Hackathon",
    description:
    "Conceptualized an online learning blockchain platform addressing the STEM gender gap. Invited to speak at the Women’s Forum Global Meeting in Paris",
    tags: [
      {
        name: "blockchain",
        color: "purple-text-gradient",
      }
    ],
    image: tripguide,
    bgColor:"bg-fuchsia-200"
  },
  {
    name: "ML model for solving handwritten equations",
    competition:"SCSE Computing Challenge",
    description:
    "Developed a machine learning CRNN model for predicting answers for handwritten mathematical equations. Developed a web app using ReactJS and integrating the CRNN model.",
    tags: [
      {
        name: "Machine Learning model",
        color: "blue-text-gradient",
      },
      {name: "CRNN",
      color: "blue-text-gradient",
    },
    {name: "Kaggel",
    color: "blue-text-gradient",}
    ],
    image: tripguide,
    source_code_link: "https://github.com/ilenhanako/NTU-SCSE-Challenge-2021",
    bgColor:"bg-sky-200"
  },
  {
    name: "PLights",
    competition:"Prudential Young Trailblazers Challenge",
    description:
    "Built a smart seating system to tackle seat hogging for hawker centres using Arduino. Pitched a business plan to Prudential, highlighting the potential benefits such as increased efficiency, customer satisfaction, and revenue for hawker center operators. ",
    tags: [
      {
        name: "Business Challenge",
        color: "purple-text-gradient",
      },
      {name: "Arduino Programming",
      color: "orange-text-gradient",
    }
    ],
    image: tripguide,
    bgColor:"bg-slate-200"
  },
  {
    name: "SpongeBot - Table Cleaning Robot",
    competition:"IDE Maker Challenge",
    description:
    "Built an automated table cleaning robot resembling a car with Arduino in C. This robot utilizes motors for navigation and is equipped with various sensors for obstacle avoidance and efficiency in cleaning.",
    tags: [
      {
        name: "Robotics",
        color: "orange-text-gradient",
      },
      {name: "Arduino Programming",
      color: "orange-text-gradient",
    }
    ],
    image: tripguide,
    source_code_link: "https://github.com/ilenhanako/IDE-Maker-2017",
    bgColor:"bg-orange-50"
  },
];

export { services, technologies, experiences, testimonials, projects };
