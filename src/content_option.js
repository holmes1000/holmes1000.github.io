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
import portImg3 from "./assets/images/tictactoe.PNG";
import portImg4 from "./assets/images/ultimaker.jpg";
import portImg5 from "./assets/images/fingertip.PNG";
import portImg6 from "./assets/images/camera.PNG";
import portImg7 from "./assets/images/dronepic.PNG";
import portImg8 from "./assets/images/roboticarm.PNG";
import portImg10 from "./assets/images/arcademachine.PNG";
import portImg11 from "./assets/images/trophy.PNG";
import portImg12 from "./assets/images/todolist.PNG";
import portImg13 from "./assets/images/rbe2001.PNG";
import portImg14 from "./assets/images/IMG_9786.jpg";
import portImg15 from "./assets/images/bosdff.PNG";
import portImg16 from "./assets/images/nhhssff.PNG";
import portImg17 from "./assets/images/aerotrades.PNG";
import portImg18 from "./assets/images/rbemapping.png";
import portImg19 from "./assets/images/bwh-logo.jpg";
import portImg20 from "./assets/images/IMG_E6048.png";
import portImg21 from "./assets/images/hyperdelta_render.png";
import portImg22 from "./assets/images/coverage_vs_num_robots.png";
import puffin from "./assets/images/puffin.png"
import whale from "./assets/images/orca.png"
import chamonix from "./assets/images/chamonix.png"
import waterfall from "./assets/images/waterfall.jpg"
import brevent from "./assets/images/brevent.jpg"
import acropolis from "./assets/images/acropolis.jpg"

import lunar from "./assets/images/lunar_path_planning.png"
import orbslam from "./assets/images/orbslam.png"
import cameracalib from "./assets/images/camera calib.png"
import objdetect from "./assets/images/objdetection.png"

import Report from "./files/FinalProject_Report_RBE3001A22_Team6_Holmes_Liu_Wang.docx.pdf";
import ScienceFair from "./files/ScienceFair.pdf";

const logotext = "SH";
const meta = {
    title: "Samara Holmes",
};

const introdata = {
    title: "Hey, I’m Samara.",
    animated: {
        first: "I fly drones",
        second: "I build robots",
        third: "I take photos",
    },
    description: "I’m a robotics engineer with a passion for creating innovative solutions to real-world problems. I’m currently working as a research engineer at the <a href='https://www.northeastern.edu/kostas/'>Kostas Research Institute</a> at Northeastern."
};

const dataabout = {
    title: "Get to know me",
    img: portImg20,
    aboutme: "When I'm not working, you can find me exploring the outdoors, watching sunrises, spending time with my friends, and flying my drone. All my videography work is posted on my <a href='https://www.youtube.com/@samara_holmes'>YouTube channel</a>.",
};
const worktimeline = [
    {
        jobtitle: "Research Engineer",
        where: "<a href='https://www.northeastern.edu/kostas/'>Kostas Research Institute</a>",
        date: "July 2024 - Present",
    },
    {
        jobtitle: "Engineering Intern",
        where: "<a href ='https://www.maglevaero.com'>MagLev Aero</a>",
        date: "May 2023 - May 2024",
    },
    {
        jobtitle: "Software Engineer Intern",
        where: "<a href='https://www.avinc.com/'>AeroVironment</a>",
        date: "May 2022 - Aug 2022",
    },
    {
        jobtitle: "HighTech Bound Intern",
        where: "<a href='https://www.iol.unh.edu/'>University of New Hampshire InterOperability Lab</a>",
        date: "July 2019 - Aug 2019",
    },
    {
        jobtitle: "Lead Server",
        where: "<a href='https://riverwoodsnh.org/exeter/'>RiverWoods at Exeter</a>",
        date: "Sept 2017 - July 2019",
    },
];

const skills = [{
        name: "C/C++",
    },
    {
        name: "Java",
    },
    {
        name: "Javascript / HTML / CSS",
    },
    {
        name: "React",
    },
    {
        name: "Python",
    },
];

const services = [
    {
        title: "Unmanned Aircraft System (UAS) flying",
        description: "I've been flying drones since I was in high school, mainly for photo/video purposes, landing me a finalist position in a couple film festivals. However, I've also built my own drone and worked with them at AeroVironment and KRI.",
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

const dataportfolio = [
    {
        img: lunar,
        desctiption: "Using real Lunar terrain data, generate maps to conduct coverage path planning for lunar shaped terrains.",
        link: "https://github.com/holmes1000/Lunar-Path-Planning/blob/main/Implementation_of_An_Efficient_Coverage_Method_for_Irregularly_Shaped_Terrains.pdf",
    },
    {
        img: orbslam,
        desctiption: "Using Unreal Engine imagery to run ORB-SLAM",
        link: "https://www.youtube.com/watch?v=BHuobXRGfN0",
    },
    {
        img: portImg22,
        desctiption: "Multi-Robot Persistent Coverage under Fuel and Failure Constraints. A research project I worked on at WPI.",
        link: "https://nestlab-bae-mqp-2024.github.io/",
    },
    {
        img: portImg2,
        desctiption: "GoataShop. A WPI acessible shop for students to place listings and buy/sell items.",
        link: "https://github.com/holmes1000/GoataShop",
    },
    {
        img: portImg17,
        desctiption: "AeroTrades. An app designed using Figma, in hopes of implementing with AviationStack API and React for a live tracking web application.",
        link: "https://youtu.be/ekmXNfD3VEg",
    },
    {
        img: portImg19,
        desctiption: "An application designed for Brigham and Women's hospital to help hospital employees submit service requests, wayfind between rooms in the hospital, and edit the overall layout of the hospital with a map editing feature.",
        link: "https://github.com/holmes1000/Hospital-Application/tree/main",
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
        img: portImg21,
        desctiption: "A full stack application designed for MagLev Aero",
        link: "https://www.maglevaero.com",
    },
    {
        img: objdetect,
        desctiption: "An application to conduct object detection on custom feature sets",
        link: "https://youtu.be/9QNfdDDxkmE?feature=shared",
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
        desctiption: "Trophy design created in AutoDesk Inventor for the ACTE Trophy Design competition. Awarded top 40 nationally.",
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
        img: cameracalib,
        desctiption: "An application to conduct camera calibration, feature recognition, and 3D object manipulation",
        link: "https://youtu.be/vdHldAdyAUI?feature=shared",
    },
    {
        img: portImg18,
        desctiption: "Turtlebot3 for mapping, path planning, and localization. Implement the A* algorithm to allow the robot to follow an optimized trajectory, and the robot needs to find its pose using AMCL.",
        link: "https://youtu.be/N8xszwzz0uY",
    },
    {
        img: portImg8,
        desctiption: "Built the 3D printed robotic arm designed by Gael Langevin. Collaborated with local schools to print the components.",
        link: "https://inmoov.fr/hand-and-forarm/",
    },
    {
        img: portImg10,
        desctiption: "A replica of a childhood game I used to play. Created using an Arduino with lots of LEDs and wires. Rapidly prototyped using AutoDesk Inventor. Submitted for high school credit.",
        link: "",
    },
    {
        img: portImg7,
        desctiption: "I've been working with flight components and the Pixhawk 4 in attempt to create a drone with deployable wings, in hopes of maximizing flight times.",
        link: "",
    },
    {
        img: portImg14,
        desctiption: "Using an ESP32, ultrasonic sensor, OpenMV camera, line tracker, and infrared sensor, the robot was able to navigate and map the shape of an object.",
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
    img: brevent,
    desctiption: "The Brevent cable car on film",
    link: "#",
},
{
    img: puffin,
    desctiption: "A puffin on the Icelandic coast.",
    link: "#",
},
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
    img: waterfall,
    desctiption: "A waterfall in Iceland with basalt columns.",
    link: "#",
},
{
    img: whale,
    desctiption: "An orca off the Icelandic coast.",
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
    img: acropolis,
    desctiption: "The Acropolis in Athens.",
    link: "#",
},
{
    img: chamonix,
    desctiption: "Chamonix.",
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
