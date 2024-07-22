import logoCelares from "@/public/img/celares/svg/logo.svg";
import imgSlider1 from "@/public/img/celares/tech/Home_Technology_Cell_Shuttle_Front@2x-1.png"
import imgSlider2 from "@/public/img/celares/tech/Home_Technology_Cartridge@2x-1.png"
import imgSlider3 from "@/public/img/celares/tech/PROOF_Cellares_3-29-24_TWC-8471-1.jpg"



export const logos = {
  logoCelares: logoCelares,
};

export const logo = logoCelares;
//home
export const homeHero = {
  title: "Accelerating Access to Life-Saving Cell Therapies",
  btnText: "PARTNER WITH US",
  btnHref: "/#",
};

export const homeRegs = {
  headerPart : {
    title: "SERVICES",
      h1: "The First Integrated Development and Manufacturing Organization (IDMO)",
      link: { linkText: "WHAT IS AN IDMO?",linkHref: "#"}
  },
 
  itemsPromo: [
    {
      title: "UNPARALLELED SCALABILITY",
      text: "10x increase in productivity compared with conventional CDMOs",
    },
    {
      title: "COST SAVINGS",
      text: "Up to 50% lower price per batch compared with conventional CDMOs",
    },
    {
      title: "QUALITY",
      text: "75% lower process failure rates compared with conventional CDMOs",
    },
  ],
  factories: [
    {
      exists : true,
      factory: "SMART FACTORY SOUTH SAN FRANCISCO, CA",
      description: "Preclinical & Clinical Services / Technology Development",
      size: "57,000 Sq Ft",
      top: "44.5%",
      left: "11%",
      video: `https://player.vimeo.com/video/852746757?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0`
    },
    {
      exists: true,
      factory: "SMART FACTORY BRIDGEWATER, NJ",
      description: "Preclinical, Clinical & Commercial Services",
      size: "118,000 Sq Ft",
      //    top: "top-[44.5%]",
      // left: "left-[11%]"
       top: "46.0%",   
      left: "24.5%",
      video: `https://player.vimeo.com/video/852749044?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0`,
    },
    {
      exists: false,
      factory: "SMART FACTORY - EUROPE COMING SOON",
      description: "Preclinical, Clinical & Commercial Services",
       top: "34%",
      left: "48%"
    },
    {
      exists: false,
      factory: "SMART FACTORY - ASIA COMING SOON",
      description: "Preclinical, Clinical & Commercial Services",
       top: "42%",
      left: "87%"
    },
  ],
};

export const homeTech = {
  headerPart : {
    title: "TECHNOLOGY",
      h1: "Powered by Advanced Cell Therapy Manufacturing Technologies",
  },
  sliderItems : [
    { title: "Cell Shuttleᵀᴹ", 
      description : "A modular, cGMP platform for industrial scale cell therapy manufacturing",
      linkText : "DISCOVER",
      linkHash : "/site3/technology/#high-throughput",
      image : imgSlider1,
      item:"1"
    },
    { title: "Consumable Cartridge", 
      description : "True end-to-end automation in a closed and automated single-use cartridges",
      linkText : "DISCOVER",
      linkHash : "/site3/technology/#integrated-automation",
      image : imgSlider2,
      item:"2"
    },
    { title: "Cell Qᵀᴹ", 
      description : "Automated, high-throughput QC platform for cell therapies",
      linkText : "DISCOVER",
      linkHash : "/site3/technology/#cell-q",
      image : imgSlider3,
      item:"3"
    },
    { title: "Software", 
      description : "Flexible and fully integrated cell therapy manufacturing software suite",
      linkText : "DISCOVER",
      linkHash : "/site3/technology/#flexible-software",
      image : `https://player.vimeo.com/video/854823106?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0`,
      item: "4"

    }
  ]
}

export const homeOvercome = {
  headerPart : {
    title: "IDMO ADVANTAGE",
      h1: "IDMOs Overcome the Limitations of Conventional CDMOs",
      link: { linkText: "DISCOVER THE IDMO ADVANTAGE",linkHref: "/site3/services"}
  },
  items : [
    { title: "SCALABILITY", text : "10x increase in productivity"},
    { title: "COST SAVINGS", text : "Up to 50% reduction in cost per batch"},
    { title: "QUALITY", text : "Reduction in process failure rates"},
    { title: "FLEXIBILITY", text : "Majority of cell therapy modalities supported"}
  ]
}

export const homeCareers = {
  headerPart : {
    title: "CAREERS",
      h1: "Do What’s Never Been Done Before",
      p: "Cellares is always looking for passionate and world-class professionals to join our interdisciplinary team",
      link: { linkText: "VIEW OPPORTUNITIES",linkHref: "/site3/careers/#positions"}
  },
}

export const homeNews = {
  headerPart : {
    title: "NEWS",
      h1: "Recent News",
      link: { linkText: "VIEW OUR NEWSROOM",linkHref: "/site3/news"}
  },
}

export const links = [
  {
    name: "Technology",
    hash: "/site3/technology",
    innerLinks: [
      { name: "Cell Shuttle™", hash: "/site3/technology/#high-throughput" },
      { name: "Cartridge", hash: "/site3/technology/#integrated-automation" },
      { name: "Cell Q™", hash: "/site3/technology/#cell-q" },
      { name: "Software", hash: "/site3/technology/#flexible-software" },
    ],
  },
  {
    name: `Services`,
    hash: "/site3/services",
    innerLinks: [
      { name: "2Cell Shuttle™", hash: "/site3/technology/#high-throughput" },
      { name: "2Cartridge", hash: "/site3/technology/#integrated-automation" },
      { name: "2Cell Q™", hash: "/site3/technology/#cell-q" },
      { name: "2Software", hash: "/site3/technology/#flexible-software" },
    ],
  },
  {
    name: "Partnering",
    hash: "/site3/partnering",
  },
  {
    name: "Company",
    hash: "/site3/company",
    innerLinks: [
      { name: "3Cell Shuttle™", hash: "/site3/technology/#high-throughput" },
      { name: "3Cartridge", hash: "/site3/technology/#integrated-automation" },
      { name: "3Software", hash: "/site3/technology/#flexible-software" },
    ],
  },
  {
    name: "Careers",
    hash: "/site3/careers",
  },
  {
    name: "News",
    hash: "/site3/news",
    innerLinks: [
      { name: "4Cell Shuttle™", hash: "/site3/technology/#high-throughput" },
      { name: "4Cartridge", hash: "/site3/technology/#integrated-automation" },
      { name: "4Cell Q™", hash: "/site3/technology/#cell-q" },
      { name: "4Software", hash: "/site3/technology/#flexible-software" },
      { name: "4Cell Q™", hash: "/site3/technology/#cell-q" },
      { name: "4Software", hash: "/site3/technology/#flexible-software" },
    ],
  },
];


//tech
export const techHero = {
  title: "Fully Integrated, Scalable, cGMP Cell Therapy Manufacturing Platform",
  btnText: "VIEW CELL SHUTTLE DATA",
  btnHref: "/site3/"
}


// <iframe data-
// src="https://player.vimeo.com/video/854823106?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" 
// frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" title="Software" src="https://player.vimeo.com/video/854823106?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" class=" lazyloaded" data-load-mode="1" data-ready="true"></iframe>