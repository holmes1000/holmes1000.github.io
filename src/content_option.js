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

const logotext = "SH";
const meta = {
    title: "Samara Holmes",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Hey! I’m Samara",
    animated: {
        first: "I build robots",
        second: "I code",
        third: "I fly drones",
    },
    description: "I am a student at the Worcester Polytechnic Institute pursuing a Bachelors of Science in both computer science and robotics engineering.",
};

const dataabout = {
    title: "Get to know me",
    aboutme: "In my free time, I like to explore the outdoors, watch sunrises, hang out with my friends, and fly my drone. My hobbies include, travelling, programming, 3D designing, video editing, and almost anything that involves using a computer. I have also had a huge interest in drones and cinematography. All my work is posted on my youtube channel.",
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
        img: portImg1,
        desctiption: "GoatAShop. A WPI acessible shop for students to place listings and buy/sell items.",
        link: "https://github.com/holmes1000/GoataShop",
    },
    {
        img: portImg1,
        desctiption: "Audio Visualizer. Uses Canvas, CORS, WebAudio API, and Tweakpane to create a visualizer for music.",
        link: "https://github.com/holmes1000/Audio-Visualizer",
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
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/holmes1000",
    linkedin: "https://www.linkedin.com/in/samaraholmes/",
    youtube: "https://www.youtube.com/channel/UCxYbzgpIIxl_f8kbmRtZnPA",
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
