import logoCelares from "@/public/img/celares/svg/logo.svg";

export const logos = {
  logoCelares: logoCelares,
};

export const logo = logoCelares;
//home
export const homeHero = {
  title: "Accelerating Access to Life-Saving Cell Therapies",
  linkText: "PARTNER WITH US",
  linkHref: "/#",
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
      top: "top-[44.5%]",
      left: "left-[11%]"
    },
    {
      exists: true,
      factory: "SMART FACTORY BRIDGEWATER, NJ",
      description: "Preclinical, Clinical & Commercial Services",
      size: "118,000 Sq Ft",
       top: "top-[46%]",
      left: "left-[24.5%]"
    },
    {
      exists: false,
      factory: "SMART FACTORY - EUROPE COMING SOON",
      description: "Preclinical, Clinical & Commercial Services",
       top: "top-[34%]",
      left: "left-[48%]"
    },
    {
      exists: false,
      factory: "SMART FACTORY - ASIA COMING SOON",
      description: "Preclinical, Clinical & Commercial Services",
       top: "top-[42%]",
      left: "left-[87%]"
    },
  ],
};

export const homeTech = {
  headerPart : {
    title: "TECHNOLOGY",
      h1: "Powered by Advanced Cell Therapy Manufacturing Technologies",
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
