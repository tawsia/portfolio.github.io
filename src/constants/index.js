import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    hicounselor,
    meta,
    c,
    dsa,
    django,
    mysql,
    python,
    book,
    food,
    vehicle,
    covid,
    college,
  } from "../assets";
  
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
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
     name : "C++",
     icon :  c,
    },
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySql",
      icon : mysql,
    },
    {
      name : "DataStructures",
      icon : dsa,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,

    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "HiCounselor",
      icon: hicounselor,
      iconBg: "#383E56",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Collaborated in creating an innovative book recommendation web application, that delivers personalized suggestions to users, resulting in a 20% increase in user engagement and a 95% customer retention rate.",
        "Implemented a custom MySQL database schema, reducing query response time by 50%.",
        "Tech Stack: JavaScript, Node.js, Express.js, MySQL, OpenLibraryAPI",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "HiCounselor",
      icon: hicounselor,
      iconBg: "#383E56",
      date: "Feb 2023 - April 2023",
      points: [
        "Developed a high-performance system processing data 60% faster than traditional methods.",
        "Optimized user and admin panels for over 40% efficiency improvement.",
        "Integrated Stripe payment gateway for a seamless user experience.",
        "Tech Stack: Python, Django, MySQL, Stripe.",
      ],
    },
    {
      title: "Home Tutor",
      company_name: "Tawsia's Academy",
      icon: meta,
      iconBg: "#383E56",
      date: "Dec 2022 - Present",
      points: [
        "Deliver individualized religious education, cultivating critical thinking via interactive discourse.",
        "Tailor curriculum to accommodate diverse learning styles, promoting inclusivity and understanding.",
        "Collaborate with parents to monitor progress, ensuring student growth and development.",
      ],
    }, 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as suggested during open source collaboration, but Tawsia proved me wrong.",
      name: "Henry Giva",
      designation: " Web3 Developer",
      company: " DeCellar",
    },
    {
      testimonial:
        "Tawsia possesses a unique ability to approach complex problems with a logical and analytical mindset, consistently coming up with innovative solutions that exceed expectations.",
      name: "Raseena Anwar",
      designation: "Python Django Developer",
      company: "Brototype",
    },
    {
      testimonial:
        "Tawsia is an excellent team player, always willing to ask questions and offer valuable insights to help the team achieve its goals!",
      name: "Kunal Saini",
      designation: "Software Engineer",
      company: "PROLOGIC FIRST",
    },
  ];
  
  const projects = [
    {
      name: "Vehicle Parking Management System",
      description:
        "Collaborated in creating an innovative Vehicle Parking Management System, optimizing parking operations and security, resulting in improved efficiency and enhanced customer satisfaction.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "orange-text-gradient",
        },
      ],
      image: vehicle,
      source_code_link: "https://github.com/CODAHOLICSS/Vehicle_Parking_Management_System",
    },
    {
      name: "Book Recommendation System",
      description:
        " A book recommendation web application, that delivers personalized suggestions to users, resulting in a 20% increase in user engagement and a 95% customer retention rate.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://github.com/CIPHER-000/BOOK_REVIEW_APP",
    },
    
    {
      name: "College Website",
      description:
        "A web portal designed exclusively for a specific college, offering students the ability to explore available academic programs, access estimated tuition costs, and discover resources and facilities on campus based on their current location or preferences..",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: college,
      source_code_link: "https://tawsia.github.io/tawsia.github.io-University-website/",
    },
    {
      name: "Corona Virus Tracker",
      description:
        "Developed a robust Covid-19 Tracker featuring a country-filtering capability, exhibiting a 99.9% uptime, and an average response time of 100 milliseconds.",
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
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "material UI",
          color: "pink-text-gradient",
        },
      ],
      image: covid,
      source_code_link: "https://github.com/tawsia/react-covid-tracker",
    },
    {
      name: "Food Website",
      description:
        "A feature-rich food website allowing users to explore, order, and indulge in a wide variety of culinary delights.",
        tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://tawsia.github.io/tawsia.github.io-Online-food-website/",
    },
  ];
  
  export {services, technologies, experiences, testimonials, projects };