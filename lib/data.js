import Logo from "@/public/img/logo.png"
import Student1 from "@/public/img/home/student.jpg"
import Student2 from "@/public/img/home/student2.jpg"
import Student3 from "@/public/img/home/student3.jpg"

export const heroText = {
  title: "KPNI / Clinical PNI: The next step in clinical practice",
  subtitle1 : `Clinical Psychoneuroimmunology (KPNI / Clinical PNI / cPNI) is an advanced and complete medicine that provides an integrative overview of patients’ health.`,
  subtitle2: "It examines interconnected body systems and their relationship with psychological, social and ecological aspects of the patient’s life."
}

export const headerData = {
  logo: Logo,
};

export const links = [
  {
    name: 'About',
    hash: '/about',
  },
  {
    name: 'Sobre mi',
    hash: '/sobre',
  },
  {
    name: 'Serveis',
    hash: '/serveis',
  },
  {
    name: 'Contacte',
    hash: '/contacte',
  }
];



export const howCanHelp = {
    line1: "Are you a medical or paramedical professional?",
    line2: "What can KPNI bring to your patient care?",
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
    title: "Take your healthcare practice to the next level",
    subtitle: "Explore all our academic offerings",
    items : [
      { img: Student1, name: "Courses", text: "Our courses are developed by recognized clinical psychoneuroimmunology researchers, all of whom also work as clinicians/therapists."},
      { img: Student2,  name: "Master's", text: "Become an accredited Clinical Psychoneuroimmunology therapist by completing our three-year master’s program."},
      { img: Student3,  name: "PhD", text: "Contribute to the growing body of knowledge in KPNI. More information on our PhD programs coming soon."}
    ]
  }
  