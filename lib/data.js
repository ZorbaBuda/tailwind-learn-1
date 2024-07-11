import Logo from "@/public/img/logo.png";
import Student1 from "@/public/img/home/student.jpg";
import Student2 from "@/public/img/home/student2.jpg";
import Student3 from "@/public/img/home/student3.jpg";
import pni from "@/public/img/logos/pnieurope.png"
import salamanca from "@/public/img/logos/salamanca.png"
import granada from "@/public/img/logos/granada.png"
import logo1 from "@/public/img/campuses/1.svg"
import logo2 from "@/public/img/campuses/2.svg"
import logo3 from "@/public/img/campuses/3.svg"
import logo4 from "@/public/img/campuses/4.svg"
import logo5 from "@/public/img/campuses/5.svg"
import logo6 from "@/public/img/campuses/6.svg"
import logo7 from "@/public/img/campuses/7.svg"
import logo8 from "@/public/img/campuses/8.svg"
import logo9 from "@/public/img/campuses/9.svg"
import logo10 from "@/public/img/campuses/10.svg"
import picGirl from "@/public/img/home/girl.jpg";
import picWoodBody from "@/public/img/home/wood-body.jpg";
import doctor from "@/public/img/home/doctor.jpg";


//header

export const headerData = {
  logo: Logo,
};

export const links = [
  {
    name: "About",
    hash: "/about",
  },
  {
    name: `What's KPNI`,
    hash: "/whats-kpni",
  },
  {
    name: "Education",
    hash: "/education",
  },
  {
    name: "Campuses",
    hash: "/campuses",
  },
  {
    name: "Pruimboom Institute Clinic",
    hash: "/pruimboom-institute-clinic",
  },
  {
    name: "Stay connected",
    hash: "/stay-connected",
  },
  {
    name: "Tailwind images",
    hash: "/tailwind-images",
  },
];

//home page

export const heroText = {
  title: "KPNI / Clinical PNI: The next step in clinical practice",
  subtitle: `Clinical Psychoneuroimmunology (KPNI / Clinical PNI / cPNI) is an advanced and complete medicine that provides an integrative overview of patients’ health.`,
  subtitle2:
    "It examines interconnected body systems and their relationship with psychological, social and ecological aspects of the patient’s life.",
  image: picGirl
};

export const homeParagraph = "As the founders of KPNI, the Pruimboom Institute's mission is to integrate this translational medical discipline into healthcare. Our final goal, to overcome disease and regain health."


export const howCanHelp = {
  heading : {
  p: "Are you a medical or paramedical professional?",
  h2: "What can KPNI bring to your patient care?"
  },
  items: [
    { num: "01", text: "It helps you to focus on people, not just symptoms." },
    {
      num: "02",
      text: "It transforms your practice from reactive to proactive by addressing the origin of disease.",
    },
    {
      num: "03",
      text: "It provides you with an in depth health model based on the interconnection between neurological, endocrinological, immune and metabolic systems from an evolutionary perspective.",
    },
    {
      num: "04",
      text: "It empowers your patients to take a leading role in their health and wellbeing.",
    },
  ],
  image : picWoodBody
};

export const disciplines = [
  "General medicine",
  "Endocrinology and nutrition",
  "Obstetrics and gynaecology",
  "Sports medicine",
  "Traumatology",
  "Dermatology",
  "Odontology",
  "Psychiatry",
  "Pediatrics",
  "Oncology",
  "Virology",
  "Physiotherapy",
  "Osteopathy",
  "Nursing",
  "Psychology",
  "Internal medicine",
  "Cardiology",
  "Neurology",
  "Immunology",
  "Sociology",
];

export const academicOfferings = {
  heading : {
    p: "Take your healthcare practice to the next level",
    h2: "Explore all our academic offerings"
    },
  items: [
    {
      img: Student1,
      name: "Courses",
      text: "Our courses are developed by recognized clinical psychoneuroimmunology researchers, all of whom also work as clinicians/therapists.",
    },
    {
      img: Student2,
      name: "Master's",
      text: "Become an accredited Clinical Psychoneuroimmunology therapist by completing our three-year master’s program.",
    },
    {
      img: Student3,
      name: "PhD",
      text: "Contribute to the growing body of knowledge in KPNI. More information on our PhD programs coming soon.",
    },
  ],
};

export const chiefPresentation = {
   image : doctor,
   info : {
    h3_1 : 'Dr. Leo Pruimboom, PhD',
    p_1: 'KPNI Founder',
    p_2 : 'Director of the Pruimboom Institute.',
    h3_2: 'A life dedicated to science and the study of KPNI in medicine',
    p_3: `Dr. Leo Pruimboom is a physiologist and medical biochemist who has
            dedicated over 3 decades to studying and developing KPNI, combining
            research with clinical practice and teaching. He is also responsible
            for the development of the Intermittent Living concept, based on
            biomarker analysis, that uses ancient stressful stimuli to improve
            health.`,
   btn : 'READ ABOUT THE FOUNDER'
   }
}

export const campuses = [
 logo1,
 logo2,
 logo3,
 logo4,
 logo5,
 logo6,
 logo7,
 logo8,
 logo9,
 logo10
]

//footer data
export const footerData = {
  quickLinks: {
    title: "Quick Links:",
    subitems: [
      "Whats KPNI",
      "Pluimboom Institute Clinic",
      "Intermitent Living",
      "The KPNI Journal of Medicine",
    ],
  },

  socialMedia: {
    title: "Social media:",
    subitems: ["Instagram"],
  },

  education: {
    title: "Education:",
    subitems: ["Introduction course", "Postgraduates", "Masters", "Phd"],
  },

  whereStudy: {
    title: "Where can you study?",
    subitems: [
      "International",
      "Argentina",
      "Belgium",
      "Brasil",
      "Germany",
      "Mexico y Centroamérica",
      "Spain",
      "The Netherlands",
      "Turkey",
      "Italy",
    ],
  },

  accreditedBy: {
    title: "Accredited by",
    subitems: [pni, salamanca],
  },

  collaborationWith: {
    title: "In collaboration with:",
    subitems: [granada]
  }
};
