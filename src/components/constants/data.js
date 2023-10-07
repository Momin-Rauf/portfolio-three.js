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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    movie,
    threejs,
  } from "../../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front end React Developer",
      icon: web,
    },
    {
      title: "Solidity Developer",
      icon: mobile,
    },
    {
      title: "Laravel Developer",
      icon: backend,
    },
    {
      title: "UI/UX",
      icon: backend,
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
      name: "Laravel",
      icon: docker,
    },
    {
      name: "mySql",
      icon: docker,
    },
    {
      name: "php",
      icon: docker,
    },
    {
      name:"ether.js",
      icon:docker,
    }
  ];
  
  const experiences = [
    {
      title: "Web3 Developer",
      company_name: "Encode Club Hackathon",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Declared Winner of the competition",
        "Making decentralized web application for fans to bet on their favorite premier league team on their desired fixtures",
        "Making User friendly Front-end",
        "React.js for data rendering on UI",
        "Ether.js for smart contract interaction",
        "using solidity for smart contract development",
        "Using coding principle for better production",
        "Tailwindcss for styling"
        
      ],
    },
    {
      title: "Software Design and Software Requirements",
      company_name: "EDWIZ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2022 - December 2022",
      points: [
        "User Research",
        "Documentation of user requirements",
        "Documentation of Design",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Oasis Infobytes",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Development of Todo list using react and tailwindvss as part of task",
        "Development of Calculator and Tribute Page as part of task using react and tailwindcss"
      ],
    },
    {
      title: "Front end Developer Volunteer",
      company_name: "ChickTech",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Volunteering for production of website","Using wordpress"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "D-bet",
      description:
        "Web3 based application focused on decentralized bet system on premier league teams",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "ether.js",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },{
          name: "tailwindcss",
          color: "green-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/Momin-Rauf/pl-bet-dapp",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie Site",
      description:
        "A React Application made from OMDB Api and Redux-toolkit",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link:"https://movie-site-opal.vercel.app/",
    },
  ];

  const testemonials = [];
  
  export { services, technologies,testemonials, experiences, projects };