import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import type { ResumeData } from "@/data/types";

export const DATA: ResumeData = {
  name: "Mahek Bhatia",
  initials: "MB",
  url: "https://avatars.githubusercontent.com/u/192207322?s=400&u=8b4838bfcdd9aaa9860c6450e35a0bf7266a7f14&v=4",
  location: "delhi, india",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "B.Tech IT Student | An Aspiring AI Engineer | AWS Certified",
  avatarUrl: "https://avatars.githubusercontent.com/u/192207322?s=400&u=8b4838bfcdd9aaa9860c6450e35a0bf7266a7f14&v=4",
  summary:
    
  "I am a B.Tech Information Technology student at KIET Group of Institutions (2024–2028) passionate about Artificial Intelligence, Machine Learning,GenAI and building real-world intelligent systems."
  ,
  skills: [
    { name: "React", icon: ReactLight },
    { name: "JavaScript", icon: Typescript },
    { name: "Typescript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: "https://files.svgcdn.io/logos/fastapi-icon.png" },
    { name: "Flask", icon: "https://nordicapis.com/wp-content/uploads/How-to-Create-an-API-Using-The-Flask-Framework-1024x576.png" },
    { name: "TensorFlow", icon: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b94fc64172675.5ac9b337280f9.png" },
    { name: "Keras", icon: "https://w7.pngwing.com/pngs/571/118/png-transparent-keras-logo.png" },
    { name: "Scikit-learn", icon: "https://vectorseek.com/wp-content/uploads/2023/02/Scikit-learn-Logo-Vector.jpg" },
    { name: "Pandas", icon: "https://image.pngaaa.com/296/1947296-middle.png" },
    { name: "NumPy", icon: "https://tse4.mm.bing.net/th/id/OIP.okZJAk8LqZ7z-21TejvuTwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Matplotlib", icon: "https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png" },
    { name: "Seaborn", icon: "https://tse3.mm.bing.net/th/id/OIP.ckzi6TrdGgbbYBgrx23BMQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
    { name: "Postgresql", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Icons.github },
    { name: "Hugging Face", icon: "https://seeklogo.com/images/H/hugging-face-icon-logo-48117F3DCE-seeklogo.com.png" },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/1PhvUUikb44AVRnk0vserid1sXURssKm0/view?usp=sharing", icon: NotebookIcon, label: "Resume" },
    { href: "https://codolio.com/profile/MahekBhatia", icon: "https://images.sftcdn.net/images/t_app-icon-m/p/6b211da4-a749-455a-bff4-af07dfb22b1c/161517429/codolio-logo", label: "Codolio" },
  ],
  contact: {
    email: "mehakbhatia015@gmail.com",
    tel: "+918630406464",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mahek-builds",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/contactmahekbhatia/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email", 
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Kiet Group of Institution",
      href: "https://www.kiet.edu/",
      degree: "B.Tech Information Technology",
      logoUrl: "https://www.kiet.edu/assets/images/logo/KIET-Logo.jpg",
      start: "2024",
      end: "2028",
    },
  ],
  certificates: [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      href: "#",
      logoUrl: "https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      href: "#",
      logoUrl: "https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg",
    },
  ],
  projects: [
    {
      title: "PaperSense",
      href: "https://github.com/mahek-builds/PaperSense",
      backgroundImage:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "OPENAI API",
        "FastAPI",
        
        "Langchain",
        "firebase",
        'Pytorch',
        "Python",
        "Uvicorn",
        "hugging face embeddings",
        "docker",
        "react",
        

      ],
    },
    {
      title: "ESG-Intelligence-Platform ",
      href: "https://github.com/mahek-builds/ESG-Intelligence-Platform",
      backgroundImage:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      active: true,
      description:
        "Enterprises today face major challenges with manual ESG reporting, delayed insights, and rapidly changing regulations. This project introduces a real-time, explainable, and scalable ESG scoring system powered by AI-driven multi-agent architecture.",
      technologies: [
        "Python",
        "SpaCy",
        "BERT",
        "FastAPI",
        "n8n",
        "Uvicorn",
        "Hugging Face",
        "React.js",
        "Streamlit",
        
      ],
    },
    {
      title: "AI-4-Alzheimers",
      href: "https://github.com/mahek-builds/AI-4-Alzheimers",
      backgroundImage:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1600&auto=format&fit=crop",
      active: true,
      description:
      "Medical image classification using TensorFlow, CNN, FastAPI, SQLite.AI-based system for early detection and assistance for Alzheimer’s patients using Machine Learning and a backend API.",
      technologies: [
        "Tensorflow",
        "CNN",
        "FastAPI",
        "SQLite",
        "CNN",
        "Uvicorn",
        "Python"
      ],
      // links: [
      //   {
         
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
    },
    {
      title: "Customer Churn Prediction",
      href: "https://github.com/mahek-builds/Customer-churn-prediction-",
      backgroundImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      active: true,
      description:
        "A Machine Learning–powered Streamlit web application that predicts whether a customer is likely to churn using a Random Forest Classifier. The app is fully Dockerized and deployed on Hugging Face Spaces gives 84.8 percent accuracy.",
      technologies: [
        "Scikit-learn",
        "EDA",
        "ML comparison",
        "Hugging Face Spaces ",
        "Joblib",
        "Pandas ",
        "Docker",
        "Streamlit","Random Forest Classifier","Python 3.11"

      ],
    },
  ],
  hackathons: [
    {
      title: "HackAvenis",
      dates: "February 12th - 13th, 2026",
      location: "MSIT DELHI, India",
      description:
        "We built an AI-powered ESG Intelligence Platform designed to shift organizations from reactive reporting to proactive, data-driven risk management. The platform leverages a multi-agent architecture to provide real-time ESG scoring, explainable insights, and scalable solutions for enterprises navigating the complex landscape   of sustainability  regulatory compliance.  (Finalist) Secured 5th position "
        ,
    
      image:
        "data:image/webp;base64,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",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Nasa Space Apps Challenge",
      dates: "September 4th - 5th, 2025",
      location: "Houston, Texas"

,
      description:
        " We built a (ExoLumin) ,an AI-driven platform designed to identify potential exoplanets from NASA’s Kepler mission data. The project leverages machine learning models—such as Random Forest and Neural Networks—to analyze key astrophysical parameters (e.g., orbital period, transit depth, planet radius) and classify celestial objects as confirmed planets or false positives",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/23/e9/3e/23e93e01-00a8-f422-8dc6-891d7e4686fd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.jpeg/1200x630wa.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

  ],
};
