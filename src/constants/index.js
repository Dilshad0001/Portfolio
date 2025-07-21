
import {
  backend,
  mobile,
  web,
  css,
  git,
  html,
  javascript,
  reactjs,
  tailwind,
  redis,
  
} from '../assets'
import { SiDocker, SiPostgresql, SiDjango } from "react-icons/si";
import { FaPython, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import python from "../assets/tech/python.png"
import django from "../assets/tech/django.png"
import sql from "../assets/tech/Sql Server.png"
import Docker from "../assets/tech/docker.png"
import microservice from "../assets/tech/Microservice.png"
import Aws from "../assets/tech/aws.svg"
import eduflow from "../assets/tech/eduflow.png"
import fitmyjob from "../assets/tech/fitmyjob.png"
import velvora from "../assets/tech/velvora.png"
import jobjourney from "../assets/tech/jobjourney.png"


import BridgeonLogo from "../assets/company/bridgeonLogo.jpg";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redis", icon: redis },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },

{ name: "Python", icon: python },
{ name: "Django", icon: django },
// { name: "Django REST Framework", icon: TbApi },
{ name: "SQL", icon: sql },
{ name: "Docker", icon: Docker },
{ name: "AWS EC2", icon:Aws },
{ name: "Microservices", icon: microservice }, // Placeholder - no direct icon exists

];



const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Bridgeon Solutions",
    icon: BridgeonLogo,
    iconBg: "#383E56",
    date: "Augest 2024 ",
    points: [
      "Developed robust full-stack web applications using Django, Django REST Framework, and React.js.",
      "Designed and implemented RESTful APIs and integrated them with dynamic frontend interfaces.",
      "Participated in the development of FitMyJob, a real-world AI-integrated job application platform with role-based access.",
      "Implemented asynchronous task queues using Celery and Redis for handling time-intensive operations.",
      "Leveraged AWS EC2 and S3 for hosting and storage, ensuring high availability and performance.",
    ],
  },
];




const projects = [
  {
    name: "Eduflow (LMS)",
    description:
      "Eduflow is a role-based Learning Management System (LMS) for efficient course management and student engagement. Admins can create courses, upload videos, and assign tasks, while students can enroll, view content, and submit assignments. Eduflow features secure JWT authentication and a scalable architecture.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Django restframework",
        color: "white-text-gradient",
      },
      {
        name: "react vite",
        color: "pink-text-gradient",
      },
      {
        name: "Aws",
        color: "blue-text-gradient",
      },

    ],
    image: eduflow,
    source_code_links: {
  frontend: "https://github.com/Dilshad0001/frontend-eduflow-react",
  backend: "https://github.com/Dilshad0001/backend-eduflow-django",
},
live_link: "https://main.dlqfsrk4ru0i8.amplifyapp.com/"

  },
  {
    name: "Job Journey",
    description:
      "Job Journey is a personal job tracking platform using microservices architecture. It allows users to log applications, track statuses, and manage their job search. The auth service supports OTP login, Google/GitHub OAuth, and the project is fully Dockerized for easy deployment. Real-time chat and more features are in development.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Microservice",
        color: "green-text-gradient",
      },
      {
        name: "Oauth",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "green-text-gradient",
      },
    ],
    image: jobjourney,
    source_code_links: {
  frontend: "https://github.com/Dilshad0001/jobtrack_project_frontend",
  backend: "https://github.com/Dilshad0001/jobtrack_project_backend",
},


  },
  {
    name: "Fitmyjob",
    description:
      "FitMyJob is a live, full-featured job portal platform that effectively connects job seekers with employers through a seamless and efficient interface. As part of the development team, I actively contribute to the running product by fixing bugs, adding new features, and continuously improving overall performance to enhance user experience.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Psql",
        color: "white-text-gradient",
      },
      {
        name: "DRF",
        color: "green-text-gradient",
      },

    ],
    image: fitmyjob,
    source_code_links: {
  frontend: "#",
  backend: "#",
},



  },
    {
    name: "Velvora",
    description:
      "Velvora is an e-commerce platform focused on simplifying the online purchase of clothing items. It features secure JWT-based authentication, Razorpay integration for payments, cart and order system. An admin panel allows efficient product and category management used React.js, Tailwind CSS, Django, DRF, SQL, Razorpay, Postman, GitHub.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "DRF",
        color: "green-text-gradient",
      },
    ],
    image: velvora,
  source_code_links: {
  frontend: "https://github.com/Dilshad0001/vilvora_react",
  backend: "https://github.com/Dilshad0001/mykart",
}

  },
];

export { services, technologies, experiences, projects };
