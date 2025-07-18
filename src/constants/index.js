
import {
  backend,
  mobile,
  web,
  css,
  project2,
  project3,
  git,
  html,
  javascript,
  reactjs,
  tailwind,
  redis,
  project1,
  
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

import anasPng from "../assets/anas.jpg";
import sahadPng from "../assets/sahad.jpg";
import nishajPng from "../assets/nishaj.jpg";

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


// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },

//   {
//     name: "Redis",
//     icon: redis,
//   },
  
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//     { name: "Python", icon: <FaPython /> },
//   { name: "Django", icon: <SiDjango /> },
//   { name: "Django REST Framework", icon: <TbApi /> },
//   { name: "PostgreSQL", icon: <SiPostgresql /> },

//     { name: "Docker", icon: <FaDocker /> },
//   { name: "AWS EC2", icon: <SiAmazonaws /> },
//   { name: "Microservices", icon: <SiMicrodotblog /> }, 


// ];

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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Navaf proved me wrong.",
    name: "Anas",
    designation: "Team Lead",
    company: "Libay",
    image: anasPng,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Navaf does.",
    name: "Nishaj",
    designation: "Full stack Developer",
    company: "Ontoborn Technologies LLC",
    image: nishajPng,
  },
  {
    testimonial:
      "Navaf is a highly skilled developer with a strong understanding of both frontend and backend technologies. His ability to solve complex challenges is impressive.",
    name: "Sahad",
    designation: "Team Lead",
    company: "VorreiX",
    image: sahadPng,
  },
];


const projects = [
  {
    name: "Eduflow (LMS)",
    description:
      "Eduflow is a role-based Learning Management System (LMS) designed for efficient course management and student engagement. The platform features two roles: Admin (who manages content and acts as instructor) and Student. Admins can create courses, upload educational videos, and assign tasks, while students can enroll, view content, and submit assignments. Built with a Django + Django REST Framework backend and a React.js frontend, Eduflow includes secure JWT authentication and a scalable architecture.",
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

    ],
    image: project1,
    source_code_link: "https://github.com/Dilshad0001/backend-eduflow-django",
    source_code_link: "https://github.com/Dilshad0001/backend-eduflow-django",
  },
  {
    name: "TikTok Clone",
    description:
      "TikTok Clone is a social media platform designed for seamless video sharing and discovery. Users can upload, view, and interact with short videos. Featuring real-time interactions, personalized feeds, and a smooth user experience, it's the go-to space for entertainment and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket io",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Navaf-U/tiktok-clone",
  },
  {
    name: "StepPrime-Ecommerce",
    description:
      "Step Prime is your go-to online store for premium shoes across various styles and brands. Whether you're looking for casual wear, formal shoes, or sports footwear, Step Prime offers a seamless shopping experience, ensuring quality, comfort, and style—all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Navaf-U/e-commerce-webapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
