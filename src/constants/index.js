import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like HTML,CSS and JavaScript, as well as back-end technologies like SpringBoot, MySQl and PHP. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React,MySQL,SpringBoot,PHP. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full Stack Intern",
    company: "Swastik Information",
    description: `In a team  developing and maintaining web applications using JavaScript, React.js, and SpringBoot. Implemented RESTful APIs and integrated with MongoDB databases`,
    technologies: ["Javascript", "React.js", "SpringBoot", "mongoDB"],
  },
  
];

export const PROJECTS = [
  
  {
    title: "E-Vote",
    image: project1,
    description:
      "An desktop  application for conducting online voting ",
    technologies: ["JavaFX", "CSS", "MySQL"],
    Project_Link:"https://github.com/sachinseengh/EVote",
  },
  {
    title: "ToDoList",
    image: project2,
    description:
      "A Desktop Application for recording the the activity to be done .",
    technologies: ["JavaFx", "CSS", "MySQL"],
    Project_Link:"https://github.com/sachinseengh/ToDo-List",
  },
  {
    title: "Quote: A Chrome Extension",
    image: project3,
    description:
      "Qoute is a chrome extension that show the shows quote and one can also make it like whenever a new blank tab is opened the qoute is shown.",
    technologies: ["HTML", "CSS", "JavaScript"],
    Project_Link:"https://github.com/sachinseengh/Quote",
  },
  {
    title: "TextToolKit",
    image: project4,
    description:
      "Text Toolkit provides a number of tools for your text like Capitalizing,Removing Extra Spaces and more.",
    technologies: ["React", "Tailwind CSS"],

  project_Link:"https://sachinseengh.github.io/TextToolBox/"

  },
];

export const CONTACT = {
  address: "Bafal,Kathmandu",
  phoneNo: "+977 981845731 ",
  email: "sachinseengh@gmail.com",
};
