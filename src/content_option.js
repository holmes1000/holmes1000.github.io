import img1 from "./assets/images/DJI_0207-min.jpg";
import img2 from "./assets/images/DJI_0245-min.jpg";
import img3 from "./assets/images/DJI_0287-min.jpg";
import img4 from "./assets/images/DSC03502-min.jpg";
import img5 from "./assets/images/DSC03538-min.jpg";
import img6 from "./assets/images/DSC03648-min.jpg";
import img7 from "./assets/images/DSC03787-min.jpg";
import img8 from "./assets/images/DJI_0183-min.jpg";
import img9 from "./assets/images/DSC02851-min.jpg";

import portImg1 from "./assets/images/audio-visualizer.PNG";
import portImg2 from "./assets/images/goatashop.PNG";
import portImg3 from "./assets/images/rbe3001.PNG";
import portImg4 from "./assets/images/sciencefair.PNG";
import portImg5 from "./assets/images/fingertip.PNG";
import portImg6 from "./assets/images/camera.PNG";
import portImg7 from "./assets/images/dronepic.PNG";
import portImg8 from "./assets/images/roboticarm.PNG";
import portImg9 from "./assets/images/starship.PNG";
import portImg10 from "./assets/images/arcademachine.PNG";
import portImg11 from "./assets/images/trophy.PNG";
import portImg12 from "./assets/images/todolist.PNG";
import portImg13 from "./assets/images/rbe2001.PNG";
import portImg14 from "./assets/images/IMG_9786.jpg";
import portImg15 from "./assets/images/bosdff.PNG";
import portImg16 from "./assets/images/nhhssff.PNG";

import Report from "./files/FinalProject_Report_RBE3001A22_Team6_Holmes_Liu_Wang.docx.pdf";
import ScienceFair from "./files/ScienceFair.pdf";

const logotext = "SH";
const meta = {
    title: "Samara Holmes",
    description: "I’m an aspiring software engineer and robotics engineer with a passion for creating innovative solutions to real-world problems. I’m currently a Junior at the Worcester Polytechnic Institute studying Computer Science and Robotics Engineering.",
};

const introdata = {
    title: "Hey! I’m Samara",
    animated: {
        first: "I build robots",
        second: "I code",
        third: "I fly drones",
    },
    description: " I am a passionate, aspiring engineer with the intention of developing some really cool technology in the near future. I’m currently a Junior at the Worcester Polytechnic Institute studying Computer Science and Robotics Engineering.",
};

const dataabout = {
    title: "Get to know me",
    aboutme: "When I'm not working, you can find me exploring the outdoors, watching sunrises, spending time with my friends, and flying my drone. All my videography work is posted on my youtube channel.",
};
const worktimeline = [{
        jobtitle: "Software Engineer Intern",
        where: "AeroVironment",
        date: "May 2022 - Aug 2022",
    },
    {
        jobtitle: "HighTech Bound Intern",
        where: "University of New Hampshire InterOperability Lab",
        date: "July 2019 - Aug 2019",
    },
    {
        jobtitle: "Lead Server",
        where: "RiverWoods at Exeter",
        date: "Sept 2017 - July 2019",
    },
];

const skills = [{
        name: "C/C++",
        value: 90,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "Javascript / HTML / CSS",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Python",
        value: 85,
    },
];

const services = [
    {
        title: "Drone Flying",
        description: "I've been flying drones since I was in high school, mainly for photo/video purposes, landing me a finalist position in a couple film festivals. However, I've also built my own drone and worked with them at AeroVironment.",
    },
    {
        title: "Computer Aided Design",
        description: "CAD has always been an interest of mine. I became a certified user in AutoDesk Inventor in 2019 and have been using CAD ever since. More recently, I've been using SolidWorks for my own designs.",
    },
    {
        title: "Scrum / Agile Methodology",
        description: "Scrum / Agile methodology was introduced to me early in my career, starting with my internship at UNH. I've used it more recently at AeroVironment, but have also tried to apply it to my group projects in college. I've found it to be a very effective way to manage projects and stay productive.",
    },
    {
        title: "Web Development",
        description: "Though my coding experience is mainly focused in C/C++ and Java, I do enjoy web development a lot and have experience using HTML, CSS, and JavaScript. I've also used MongoDB, Node.js, React, and Express to create some simple full stack web applications.",
    },
    {
        title: "Video / Photo Editing",
        description: "I've been editing videos and photos for years as photography / videography has been a huge passion of mine. The software I have experience using include DaVinci Resolve and Luminar Neo, however, I believe I could easily adjust to Adobe Premiere Pro and Lightroom if applicable.",
    },
];

const dataportfolio = [{
        img: portImg2,
        desctiption: "GoatAShop. A WPI acessible shop for students to place listings and buy/sell items.",
        link: "https://github.com/holmes1000/GoataShop",
    },
    {
        img: portImg1,
        desctiption: "Audio Visualizer. Uses Canvas, CORS, WebAudio API, and Tweakpane to create a visualizer for music.",
        link: "https://github.com/holmes1000/Audio-Visualizer",
    },
    {
        img: portImg3,
        desctiption: "A pick and place robotic manipulator. Programmed to sort objects of assorted colors and play tic-tac-toe.",
        link: Report,
    },
    {
        img: portImg13,
        desctiption: "Two robots designed to pick and place panels on rooves at different angles.",
        link: "https://youtu.be/DlBvDDm49zI",
    },
    {
        img: portImg12,
        desctiption: "A to-do list application using express, node.js, and MongoDB.",
        link: "https://github.com/holmes1000/To-Do-List-V2",
    },
    {
        img: portImg11,
        desctiption: "ACTE Trophy Design Competition.",
        link: "https://youtu.be/EMnUUF1aJZc?t=120",
    },
    {
        img: portImg5,
        desctiption: "3D printed modular fingertip. Featuring a sliding mechanism along with a swappable fingernail and bottle opener design.",
        link: "",
    },
    {
        img: portImg6,
        desctiption: "3D replica of a Fujifilm camera designed in AutoDesk Inventor.",
        link: "",
    },
    {
        img: portImg4,
        desctiption: "Research on 4D printed structures.",
        link: ScienceFair,
    },
    {
        img: portImg8,
        desctiption: "Built the 3D printed robotic arm designed by Gael Langevin.",
        link: "",
    },
    {
        img: portImg10,
        desctiption: "Arcade machine",
        link: "",
    },
    {
        img: portImg7,
        desctiption: "Winged drone",
        link: "",
    },
    {
        img: portImg9,
        desctiption: "Starship Design",
        link: "",
    },
    {
        img: portImg14,
        desctiption: "Robotic navigation",
        link: "https://youtu.be/hKVp2z9qX4Q",
    },
    {
        img: portImg15,
        desctiption: "Boston Drone Film Festival Finalist. A short film about the contrasting landscapes between my home in New Hampshire and my new home in Costa Rica.",
        link: "https://youtu.be/Nuw1YYiFnmU",
    },
    {
        img: portImg16,
        desctiption: "New Hampshire High School Film Festival Finalist. A short film showing the drone perspectives of New England in Winter.",
        link: "https://youtu.be/Py4G-gj3QvA",
    },
];

const photoportfolio = [
{
    img: img1,
    desctiption: "A drone shot of the Balsams Grand Resort in Dixville Notch, NH.",
    link: "#",
},
{
    img: img2,
    desctiption: "A drone shot of Lake Willoughby in VT.",
    link: "#",
},
{
    img: img3,
    desctiption: "A drone shot of the French King Bridge in Western, MA.",
    link: "#",
},
{
    img: img4,
    desctiption: "Me on the Frankenstein Trestle in Crawford Notch, NH.",
    link: "#",
},
{
    img: img5,
    desctiption: "Me on the Frankenstein Trestle (but further away) in Crawford Notch, NH.",
    link: "#",
},
{
    img: img6,
    desctiption: "The Conway Scenic Railroad train",
    link: "#",
},
{
    img: img7,
    desctiption: "Me in front of Bash Bish Falls in NY.",
    link: "#",
},
{
    img: img8,
    desctiption: "A drone shot of a small town in VT.",
    link: "#",
},
{
    img: img9,
    desctiption: "A house in Stowe, VT.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "sdholmes@wpi.edu",
    YOUR_FONE: "(603) 793-4060",
    description: "Contact me with career opportunities or questions. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_xqm0sco",
    YOUR_TEMPLATE_ID: "template_urg5pz1",
    YOUR_USER_ID: "ORGK_CdfLqiYfIzYj",
};

const socialprofils = {
    github: "https://github.com/holmes1000",
    linkedin: "https://www.linkedin.com/in/samaraholmes/",
    youtube: "https://www.youtube.com/channel/UCxYbzgpIIxl_f8kbmRtZnPA",
    instagram: "https://www.instagram.com/holmes1000/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    photoportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
