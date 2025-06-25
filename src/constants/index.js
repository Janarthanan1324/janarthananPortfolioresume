const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Education", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "About me", link: "#testimonials" },
];

const words = [
  { text: "Data", imgPath: "/images/ideas.svg" },
  { text: "Intelligence", imgPath: "/images/concepts.svg" },
  { text: "Insights", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Predictions", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Complexity ", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "", label: "Fresher" },
  { value: 10, suffix: "+", label: "Certificate completion" },
  { value: 3, suffix: "", label: "Completed Project" },
  { value: 7.0, suffix: "%", label: "CGPA" },
];

const logoIconsList = [
  { imgPath: "/images/logos/Tableau.png" },
  { imgPath: "/images/logos/Rprogram.png" },
  { imgPath: "/images/logos/pngegg.png" },
  { imgPath: "/images/logos/jupyter-seeklogo.png" },
  { imgPath: "/images/logos/seaborn-seeklogo.png" },
  { imgPath: "/images/logos/microsoft-excel-seeklogo.png" },
  { imgPath: "/images/logos/ibm-cognos-seeklogo.png" },
  { imgPath: "/images/logos/watson.png" },
  { imgPath: "/images/logos/pngwing.png" },
  { imgPath: "/images/logos/matlab.png" },
  { imgPath: "/images/logos/info.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: " Data Scientist", imgPath: "/images/logos/powerbi.png" },
  { name: "Machine Learning Engineer", imgPath: "/images/logos/python.svg" },
  { name: " AI/ML Research Engineer", imgPath: "/images/logos/tensor.png" },
  { name: "Data Analyst (Advanced)", imgPath: "/images/logos/microsoft-excel-seeklogo.png" },
  { name: " Data Engineer", imgPath: "/images/logos/mongo.png" },
];

const techStackIcons = [
  { name: "Data Scientist", modelPath: "/models/PowerBi.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Machine Learning Engineer", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "AI/ML Research Engineer", modelPath: "/models/git.glb", scale: 5, rotation: [0, 0, 0] },
  { name: "Data Analyst", modelPath: "/models/MSExel.glb", scale: 5, rotation: [0, 0, 0] },
  { name: "Data Engineer", modelPath: "/models/aws_logo.glb", scale: 0.2, rotation: [0, 0, 0] },
];

const expCards = [
  {
    imgPath: "/images/gauge.png",
    logoPath: "/images/ssvm.jpg",
    title: "12th",
    date: "June 2021 - May 2023",
    responsibilities: [
      "Completed 12th grade with a focus on Computer Science and Mathematics.",
      "Gained a strong foundation in programming, algorithms, and problem-solving.",
      "Applied logical thinking to solve complex mathematical and coding challenges.",
      "Developed a passion for technology through hands-on projects and learning.",
    ],
  },
  {
    imgPath: "/images/histogram.png",
    logoPath: "/images/srkv.png",
    title: "UG",
    date: "August 2022 - May 2025",
    responsibilities: [
      "Pursued a Bachelor's degree in Computer Science, focusing on core computing principles.",
      "Gained hands-on experience in programming, data structures, and software development.",
      "Worked on real-time projects involving web development and data analysis.",
      "Strengthened problem-solving, teamwork, and technical communication skills.",
    ],
  },
  {
    imgPath: "/images/ongoing.png",
    logoPath: "/images/rathinam.png",
    title: "PG",
    date: "July 2025 - Present",
    responsibilities: [
      "Will complete a Postgraduate degree in Data Science and Business Intelligence.",
      "Aiming to master data analytics, machine learning, and strategic decision-making.",
      "Planning to work on real-world projects involving big data and AI-driven insights.",
      "Preparing to drive business value through data storytelling and predictive modeling.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/ssvm.jpg" },
  { name: "logo2", imgPath: "/images/srkv.png" },
  { name: "logo3", imgPath: "/images/rathinam.png" },
];

const testimonials = [
  {
    name: "In Life",
    review: "I'm Janarthanan, a passionate learner, a resilient soul...",
  },
  {
    name: "As a Data Scientist",
    review: "I am someone who believes that data, when used wisely, has the power to transform decisions...",
  },
  {
    name: "As a Learner",
    review: "I am someone who finds joy in learning, no matter how big or small the lesson...",
  },
  {
    name: "As a Dreamer",
    review: "I see the world not just for what it is, but for what it could be...",
  },
  {
    name: "My Philosophy",
    review: "தெய்வத்தான் ஆகாதெனினும் முயற்சிதன், மெய்வருத்தக் கூலி தரும்.",
  },
  {
    name: "As a Leader",
    review: "I lead with purpose, empathy, and a relentless drive for excellence...",
  },
];

const socialImgs = [
  { name: "Instagram", url: "https://www.instagram.com/__mr.pikachu.___/", imgPath: "/images/insta.png" },
  { name: "X", url: "https://x.com/Janarth52752783?t=cArWATO6aOr1XIS-1ak6cQ&s=08", imgPath: "/images/x.png" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/janarthanan-s-130058304/", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
