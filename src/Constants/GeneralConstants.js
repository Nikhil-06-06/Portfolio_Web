import { Images } from "../assets/Images";

export const navItems = ["home", "about", "skills", "work", "projects", "education"];

export const themeValues = {
  DARK: "dark",
  LIGHT: "light",
};

export const IntroDetails = {
  NAME: "nikhil rawat",
  DESIGNATION: "full-stack web developer",
  TRAITS: ["DEV", "FULL-STACK"],
  RESUME: 'https://drive.google.com/file/d/1Qs7FaBQf6LhUJYYlfX5qvjSFbx5z7vRg/view?usp=sharing',
  LINKEDIN: "https://www.linkedin.com/in/nikhilrawat06/",
  GITHUB: "https://github.com/Nikhil-06-06"
};

export const EditorDetails = [
  "1  class Person",
  "2    constructor() {",
  `3      this.name = "${IntroDetails.NAME.toLocaleUpperCase()}";`,
  `4      this.traits = ["${IntroDetails.TRAITS[0]}", "${IntroDetails.TRAITS[1]}"];`,
  "5      this.age = new Date().getFullYear() - 2001;",
  "6    }",
  "7  }",
];

export const Interests = [
  {
    header: "Frontend Development",
    content: "I love crafting visually appealing and interactive user interfaces using React.JS, HTML and CSS.",
  },
  {
    header: "Innovative Problem Solving",
    content: "I enjoy tackling complex challenges, especially through creative coding and competitive programming.",
  },
  {
    header: "Javascript",
    content: "My passion for JavaScript is unparalleled- I’ve implemented state management solutions like Redux and Context API, and have a solid understanding of component lifecycle, hooks, and RESTful API integration.(change)",
  },
];

export const AboutMeContent = {image: Images.self, content: "Hi, I'm Nikhil Rawat, an experienced Full Stack Developer with expertise in React, JavaScript, Java, Spring Boot, SQL, and AWS. Proficient in crafting responsive front-end interfaces and utilizing AWS for cloud deployment and scalability. A creative problem solver with a proven history of boosting user engagement and improving operational efficiency, having led major projects that successfully reduced page load times. Dedicated to ongoing learning and delivering state-of-the-art software solutions."};

export const Skills = [Images.js, Images.ts, Images.react, Images.redux, Images.html, Images.css, Images.sass, Images.aws, Images.docker, Images.java, Images.springBoot];

export const Experience = [
  {
    logo: Images.byjus,
    position: "Member of Technical Staff - 1",
    company: "Byjus",
    duration: "(Jan-2023 - Present)",
    content: [
      "Engineered responsive web applications using React, Redux and Sagas catering 30,000+ users.",
      "Integrated Redux to efficiently manage data and Sagas to handle asynchronous actions, improving performance.",
      "Undertook the development of HomePage and TestSpace Revamps optimizing user experience and interface, reduced page load times by 50% and increased user engagement by 40% through intuitive design enhancements.",
      "Gained experience in optimizing application performance for better efficiency, furthermore, successfully troubleshoot technical issues that arose during the development process.",
      "Partnered with cross-functional teams to understand project requirements and deliver high-quality solutions.",
    ],
  },
];

export const ProjectsData = [
  {
    image: Images.reelify,
    name: "Reelify",
    description: "Developed a highly interactive Instagram Reels Clone using React, Redux, and Firebase, complete with user authentication features such as sign-up, login, and logout. Enhanced user engagement by implementing functionalities for liking, commenting, and video uploads, with seamless auto-scrolling powered by the Intersection Observer API. The project currently handles video uploads and is in the process of integrating a robust Java back-end with Spring Security to fortify authentication and improve scalability.",
    link: 'https://github.com/Nikhil-06-06/Insta-Reels'
  },
  {
    image: Images.resumeBuilder,
    name: "Resume Builder",
    description: "Built an interactive Resume Builder web application leveraging React and the Context API, enabling users to effortlessly create professional resumes through a dynamic and intuitive form interface. Integrated advanced features such as real-time preview, customizable templates, and PDF export functionality to enhance user experience and usability. The application has been successfully utilized by over 50 individuals during college placement seasons, aiding in streamlined and effective presentation of qualifications and skills.",
    link: 'https://github.com/Nikhil-06-06/Resume-Builer'
  },
  {
    image: Images.moviesFinder,
    name: 'Movie Finder',
    description: 'Created an intuitive and user-friendly website for exploring trending movies using web APIs, offering a seamless browsing experience that allows users to easily navigate the latest and most popular films. The platform includes powerful filtering options based on genres like action, comedy, and drama, as well as sorting functionality by IMDb ratings and popularity, enabling users to find and prioritize movies that match their interests. With these features, the website provides a personalized and efficient way for movie enthusiasts to stay updated on current film trends and discover new favorites.',
    link: 'https://github.com/Nikhil-06-06/Movies-App'
  },
  {
    image: Images.stickyNotes,
    name: 'Sticky Notes',
    description: 'Developed a sticky notes app using React that allows users to create and manage notes for their daily tasks. Similar to physical sticky notes, the notes created will stay "stuck" to the dashboard until manually removed using a "Remove Note" button. The app also ensures that notes are saved persistently, so they remain available even after closing the site, allowing users to find their notes intact when they revisit the app.',
    link: 'https://github.com/Nikhil-06-06/Sticky-Notes'
  }
];

export const EducationData = [
  {
    logo: Images.tiet,
    position: "Thapar Institute of Engineering and Technology",
    company: "CGPA: 8.85",
    duration: "(2019 - 2023)",
    content: [
      "Courses: Data-Structures and Algorithms, Operating Systems, Database Management System, Object-oriented Programming",
    ],
  },
];
