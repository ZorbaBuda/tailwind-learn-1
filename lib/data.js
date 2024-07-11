import Logo from "@/public/img/logo.png";
import Student1 from "@/public/img/home/student.jpg";
import Student2 from "@/public/img/home/student2.jpg";
import Student3 from "@/public/img/home/student3.jpg";
import pni from "@/public/img/logos/pnieurope.png";
import salamanca from "@/public/img/logos/salamanca.png";
import granada from "@/public/img/logos/granada.png";
import logo1 from "@/public/img/campuses/1.svg";
import logo2 from "@/public/img/campuses/2.svg";
import logo3 from "@/public/img/campuses/3.svg";
import logo4 from "@/public/img/campuses/4.svg";
import logo5 from "@/public/img/campuses/5.svg";
import logo6 from "@/public/img/campuses/6.svg";
import logo7 from "@/public/img/campuses/7.svg";
import logo8 from "@/public/img/campuses/8.svg";
import logo9 from "@/public/img/campuses/9.svg";
import logo10 from "@/public/img/campuses/10.svg";
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
  image: picGirl,
};

export const homeParagraph =
  "As the founders of KPNI, the Pruimboom Institute's mission is to integrate this translational medical discipline into healthcare. Our final goal, to overcome disease and regain health.";

export const howCanHelp = {
  heading: {
    p: "Are you a medical or paramedical professional?",
    h2: "What can KPNI bring to your patient care?",
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
  image: picWoodBody,
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
  heading: {
    p: "Take your healthcare practice to the next level",
    h2: "Explore all our academic offerings",
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
  image: doctor,
  info: {
    h3_1: "Dr. Leo Pruimboom, PhD",
    p_1: "KPNI Founder",
    p_2: "Director of the Pruimboom Institute.",
    h3_2: "A life dedicated to science and the study of KPNI in medicine",
    p_3: `Dr. Leo Pruimboom is a physiologist and medical biochemist who has
            dedicated over 3 decades to studying and developing KPNI, combining
            research with clinical practice and teaching. He is also responsible
            for the development of the Intermittent Living concept, based on
            biomarker analysis, that uses ancient stressful stimuli to improve
            health.`,
    btn: "READ ABOUT THE FOUNDER",
  },
};

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
  logo10,
];

//about page

export const history = {
  title: "History",
  summary:
    "The Pruimboom Institute, founded in 2023 by Dr. Leo Pruimboom, provides world-class training to medical and paramedical professionals in the field of clinical psychoneuroimmunology (KPNI).",
  p: `This translational medical discipline examines interconnected body systems and their relationship with psychological, social and ecological aspects of the patient’s life. The aim of the Pruimboom Institute is to incorporate this approach into healthcare to provide a more integrative overview of patients’ health.
       <br>
  Dr. Leo Pruimboom has over three decades experience developing and directing educational programs in KPNI. His master’s courses have been hosted by four different universities. In addition, he regularly runs external KPNI courses and webinars for medical professionals.
       <br>
  He founded the Pruimboom Institute to bring together all of these academic offerings and facilitate the professional development of healthcare practitioners.`,
};

export const founder = {
  title: "About the Founder",
  summary:
    "Dr. Leo Pruimboom is a pioneer in clinical psychoneuroimmunology (KPNI), a translational medical discipline that studies the interaction between the neurological, endocrine, immune and metabolic systems, and their role in our health and wellbeing.",
  p: `<p>A biochemist by training, he has dedicated his career to developing medical protocols that not only treat the symptoms of diseases, but also address their underlying physiological, social and ecological causes. Recognizing a need to incorporate this integrative approach into medical practice, he founded the Pruimboom Institute in 2023 to provide training to medical and paramedical professionals</p>.
  
<p>Dr. Pruimboom is the creator of Intermittent Living: a series of practical strategies that rebalance health and promote wellness in the general population. He runs week-long immersive programs in natural surroundings that apply the principles of KPNI.</p>
  
<p>He also founded the European Academy of Psychoneuroimmunology in 1996, and PNI Europe in 2014. He has combined his scientific research in the field with consultancy on its implementation in medical practice. He has treated thousands of patients from all over the world, integrating psychology, neurology and sociology among other disciplines.</p>
 
<p>Dr. Pruimboom is the author of three books, and has published several scientific papers in the field of clinical psychoneuroimmunology.</p>`,
  image: doctor,
};

export const manifesto = {
  title: "Our manifesto",
  summary:
    "To the entire medical community and health professionals who strive every day to offer quality, people-centered care based on scientific evidence:",
  items: [
    `The current health system dehumanizes clinical practice by making the optimal doctor-patient relationship impossible.`,

    `Current medical care focuses on alleviating symptoms, regardless of the disease or the causes of the disease.`,

    `The health model overly favors drug prescription and surgical intervention, instead of promoting prevention and healthy habits.`,

    `Diagnostic processes are increasingly based on technological tests. With this, the disease and, in general, the concept of health is dissociated from the person and their history.`,

    `Society, disappointed and eager to receive a differential service, is losing faith in medicine and many are seeking answers in pseudoscientific practices, thus generating increasingly sick populations.`,

    `The health community demands rescuing scenarios where they can once again humanize their work, recover their vocation and return excellence to their profession.`,
  ],
};

export const model = {
  heading: "Clinical Psychoneuroimmunology (KPNI)",
  title: "THE NEXT STEP IN MEDICAL PRACTICE",
  abstract1:
    "Medicine requires a paradigm shift that places the individual at the centre of healthcare practice and incorporates new scientific evidence that demonstrates the links established between the different body systems.",
  abstract2:
    "This new model is offered to us by Clinical Psychoneuroimmunology (KPNI), a new field of translational medicine that studies people’s health from the interconnection between the different body systems during their response to past, present and future stimuli and environments. The human body systems that play a key role in KPNI are neurological, endocrine, immune, and metabolic.",
  items: [
    { num: "01.", text: "Focuses on the people and not the symptoms." },
    {
      num: "02.",
      text: "Recovers the etiological conception of medicine: it looks for the origin of the disease and the pathophysiology of the disease.",
    },
    {
      num: "03.",
      text: "Examines the patient from a more humanistic perspective. Technological tests for diagnosis are accompanied by the emotional, social and evolutionary analysis of the patient, as well as their ability to adapt to changes.",
    },
    {
      num: "04.",
      text: "Incorporates into clinical practice the scientific knowledge that describes the close biochemical relationship between the neurological, endocrinological, immune and metabolic systems.",
    },
    {
      num: "05.",
      text: "Compared to the disease-prescription formula, it promotes changes in habits derived from an exhaustive analysis of the patient and their context.",
    },
    {
      num: "06.",
      text: "Gives the patient a leading role in the future of their well-being, allowing them to share the knowledge that concerns their state of health and to increase the drucebo effects of most interventions.",
    },
    {
      num: "07.",
      text: "Conceives health as the correct distribution of resources between cells, tissues, organs, systems and societies.",
    },
    {
      num: "08.",
      text: "Protects the body from the harmful habits of modern life through innovative mechanisms based on science.",
    },
    {
      num: "09.",
      text: "Addresses chronic diseases caused by low-grade inflammatory processes that significantly affect our health.",
    },
    {
      num: "10.",
      text: "Therefore, it provides a comprehensive patient-centered health model and an accurate description of the disease.",
    },
  ],
};

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
    subitems: [granada],
  },
};
