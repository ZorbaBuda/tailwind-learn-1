import clinique from "@/public/img/clinique/parolanaudiere-clinique-header.jpg"
import dentist from "@/public/img/clinique/parolanau-oliviercote.jpg"
import logo from "@/public/img/clinique/parolanaudiere-logoblanc.svg"
import cliniqueHome from '@/public/img/clinique/parolanaudiere-accueil-clinique.jpg'
import cliniqueFooter from '@/public/img/clinique/parolanaudiere-accueil-footer.jpg'

//home page
export const homeHero = {
  image: clinique,
  title1: "La clinique de parodontie et d’implantologie Lanaudière",
  title2: "Votre santé est notre priorité",
  btnText: "PRENDRE RENDEZ-VOUS"
}

export const homeBanner = 'Un service de proximité où votre santé parodontale est notre priorité'

export const homeClinique = {
  title: 'La clinique',
  label: 'UNE ÉQUIPE PROFESSIONNELLE',
  text: 'Dans un environnement convivial, nos professionnels vous proposent un plan de traitement personnalisé et adapté à vos besoins.',
  linkText: 'EN SAVOIR PLUS',
 link: '/la_clinique',
 image: cliniqueHome
}

export const homeExpertises = {
  title: 'Nos expertises',
  p1:'Notre équipe est disponible pour vous conseiller et vous accompagner tout au long de votre plan de traitement. Nous portons une grande attention à votre bien-être et à votre santé.',
  p2:'Nous offons une vaste gamme de traitements en parodontie et en implantologie, nous permettant de vous offrir des services de qualité, quelle que soit votre affection.',
  link: '/la_clinique',
  linkText: 'EN SAVOIR PLUS',
}

export const homeFooter = {
  image : cliniqueFooter,
  label: 'VOTRE SANTÉ',
  text: 'Retrouvez votre santé bucco-dentaire grâce à nos traitements durables, sécuritaires et de grande qualité.',
  linkText: 'NOUS JOINDRE',
  link: '/la_clinique'

}



//clinique page
export const cliHero = {
  h1: "La clinique",
  p1: "La clinique de parodontie et d’implantologie Lanaudière se spécialise dans les soins parodontaux.",
  p2: "Quelle que soit votre affection, notre équipe vous accueillera pour vous proposer un traitement qui répond à vos besoins.",
  image: clinique,
};

export const cliMission = {
  title:
    "Dans un cadre professionnel et chaleureux, nous nous assurons de vous offrir les meilleurs soins qui soit, selon vos besoins.",
  legend: "Mission",
  p1: "Offrir à notre clientèle des soins de parodontie de haute qualité et un service de proximité par notre approche humaine et bienveillante.",
  p2: "Agir auprès des professionnels dentaires à titre de partenaire dans leurs plans de traitement, afin de compléter leur offre de services.",
};

export const cliActions = {
  title: "Au coeur de nos actions",
  items: [
    {
      title: "CONFIANCE",
      text: "Nous nous assurons de maintenir la relation de confiance en vous offrant des conseils personnalisés et en vous administrant des soins de qualité impeccable. Nous vous promettons une approche humaine et transparente.",
    },
    {
      title: "HUMAIN",
      text: "Nous prenons en compte la réalité de nos patients en nous assurant que leur bien-être soit au cœur de nos interventions. Ainsi, chacun reçoit un traitement humain et personnalisé.",
    },
    {
      title: "QUALITÉ DES SERVICES",
      text: "Votre entière satisfaction est primordiale à nos yeux. Les traitements prodigués sont exécutés avec professionnalisme afin que les résultats soient durables. Nous œuvrons dans une ambiance chaleureuse et bienveillante.",
    },
  ],
};

export const cliAbout = {
  title: "Votre parodontiste de confiance",
  image: dentist,
  name: "Olivier Côté",
  profession: "Parodontiste",
  text: `<p>Originaire de Terrebonne, Dr Côté a complété son doctorat en médecine dentaire à l’Université de Montréal en 2017. Lors de son parcours, il a reçu le prix de l’« American association of Periodontology ».</p>

    <p>De 2017 à 2018, Dr Côté s’est perfectionné dans l’ensemble des sphères de la dentisterie dans le cadre d’une résidence multidisciplinaire au 2e cycle à l’Université de Montréal et au CHUM.</p>
    
    <p>Suite à ce programme de perfectionnement, Dr Côté a débuté sa formation de dentiste spécialiste en parodontie à l’Université Laval à Québec, où il a complété sa spécialisation ainsi qu’une maîtrise en science dentaire de 2018 à 2021.</p>
    
    <p>Étant originaire de la région des moulins, Dr Côté a décidé de revenir dans son patelin afin d’y fonder sa propre clinique de parodontie et d’implantologie dans le but d’offrir des traitements parodontaux de qualité à la population de la région.</p>`,
};

export const headerData = {
  logo: logo,
};


export const links = [
  {
    name: "Home",
    hash: "/site2",
  },
  {
    name: `La Clinique`,
    hash: "/site2/la_clinique",
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
    name: "La clinique",
    hash: "/la_clinique",
  },
  {
    name: "Tailwind images",
    hash: "/tailwind-images",
  },
];

//footer 

export const fAddresse = {
  title: "Consultez nos experts en santé parodontale",
  adresse: {
    title: "ADRESSE",
    addresse: ["551 Rue Louis-Blériot , suite 300,","Mascouche, QC, J7K 3C1"]
  },
  mapsLegend : "VOIR SUR LA CARTE",
  mapsAddress: "https://www.google.com/maps?q=551+Rue+Louis-Bl%C3%A9riot,+Mascouche,+QC+J7K+3C1&rlz=1C5CHFA_enCA840CA840&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjZpLa_oJL6AhVNFmIAHWQxCtYQ_AUoAXoECAEQAw"
}

export const fPourNousJoindre = {
  title: "POUR NOUS JOINDRE",
  phone : "450 966-2717",
  email: "info@parodontielanaudiere.com"
}

export const fHeures = {
 title: "HEURES D'OUVERTURE",
 items: [
    "Samedi-Dimanche-Lundi: fermé",
    "Mardi: 8h30 à 16h00",
    "Mercredi: 8h30 à 16h00",
    "Jeudi: 8h30 à 16h00",
    "Vendredi: 8h00 à 15h"
  ]
}

export const fReferer = {
  title: "PROFESSIONNELS DENTAIRES",
  text : "Votre patient a besoin de traitements spécialisés? Référez-le à notre clinique!",
  btn : "RÉFÉRER UN PATIENT"
}




