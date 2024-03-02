import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const HEROTABS = [
  {
    title: 'Innovation',
    description:
      "We believe in pushing the boundaries of what's possible. Innovation is at the heart of everything we do. We continuously explore emerging technologies, embrace new ideas, and challenge the status quo to deliver cutting-edge solutions that drive success for our clients.",
  },
  {
    title: 'Excellence',
    description:
      "We are committed to excellence in every aspect of our work. From development to consultation, we strive for perfection and take pride in delivering high-quality solutions that exceed expectations.",
  },
  {
    title: 'Collaboration',
    description:
      "We value the power of collaboration. By fostering a culture of open communication and teamwork, we combine individual strengths to create a synergistic force that delivers exceptional results for our clients.",
  },
  {
    title: 'Client-Centric Approach',
    description:
      "Our clients' success is our priority. We listen closely to their needs, understand their challenges, and tailor our solutions to meet their unique requirements. Our client-centric approach ensures a seamless experience and lasting partnerships."
  },
  {
    title: 'Integrity',
    description:
      'Trust and integrity are the foundation of our relationships with clients, partners, and team members. We uphold the highest ethical standards, transparency, and honesty in all our interactions.'
  },
  {
    title: 'Continous Learning',
    description:
      'Technology is ever-evolving, and so are we. We foster a culture of continuous learning and encourage our team to stay ahead of the curve, acquiring new skills and knowledge to deliver cutting-edge solutions.'
  },
];
export const PRODUCTSTABS = [
  {
      title: 'Aurally',
      description:
      "A decentralized Web3 ecosystem with fair monetization of creative work and rewards for fan engagement.",
      link:"/",
  },
  {
      title: 'Zaibatsu',
      description:
      "A decentralized lending platform enabling users to create token pools for investment, from which others can borrow and repay with interest.",
      link:"/",
  },
  {
      title: 'DAOWakanda',
      description:
      "A decentralized autonomous organization designed to create a vibrant Algorand ecosystem in Nigeria where contributors and developers are incentivized and rewarded for their contributions.",
      link:"/",
  },
]
export const EVENTTABS = [
  {
    title: 'Algorand Global Hackathon',
    description:
    "Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate. Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate. Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate.",
  },
  {
    title: 'Building Scalable Products',
    description:
    "Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate. Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate. Lorem ipsum dolor sit amet consectetur. Mauris egestas vulputate.",
  },
]

export const SERVICETABS = [
  {
    title: 'Business Consultation',
    description:
      "We provide a dedicated team of highly experienced consultants who are fully committed to facilitating the prosperity of your business. Leveraging their profound reservoir of knowledge and expertise, our consultants offer not only guidance but also enhance operational efficiency while fostering sustainable growth.",
  },
  {
    title: 'Experienced Consultants',
    description:
      "Our consultants bring years of industry-specific experience to the table. They have successfully navigated the complexities of various markets and industries, making them well-equipped to understand your unique challenges and opportunities. Their extensive knowledge is a valuable resource for your business.",
  },
  {
    title: 'IT Consultancy and talent Recruitment',
    description:
      "Our software development team is adept at crafting bespoke solutions tailored to your specific requirements, leveraging the latest technologies and best practices.",
  },
  {
    title: 'Liquidity as a service',
    description:
      "Harness the power of liquidity with our Liquidity as a Service (LaaS). We offer seamless access to a vast pool of digital assets, empowering businesses to thrive in the fast-paced crypto market. Whether you're a startup or an established exchange, our liquidity solutions are tailored to your needs.."
  },
  {
    title: 'Software Algorithm Development',
    description:
      'Unlock the full potential of your software applications with our cutting-edge algorithm development services. We specialize in crafting efficient algorithms that not only optimize your software but also deliver unmatched performance and exceptional user experiences.'
  },
  {
    title: 'Blockchain and Smart Contract Development',
    description:
      'In the fast-evolving digital landscape, blockchain technology and smart contracts have emerged as revolutionary solutions, and our team is at the forefront of harnessing their potential. We offer an array of software development services that encompass not only mobile apps and web apps but also cutting-edge expertise in blockchain development and smart contracts.'
  },
];

export const PROGRAMTABS = [
  {
    title: 'Beginner Course',
    description: 'Are you ready to embark on a journey into the fascinating world of blockchain technology? Our Beginners Course at Ashinity Synergy is your gateway to understanding the foundations of blockchain and cryptocurrencies. In just 8 weeks, you will gain a comprehensive understanding of blockchain concepts, cryptographic principles, and the essential building blocks of this transformative technology.',
    whatToExpect: [
      'Explore the history and evolution of blockchain.',
      'Discover diverse use cases beyond cryptocurrency.',
      'Dive deep into cryptography and digital signatures.',
      'Learn about distributed ledger technology and smart contracts.',
      'Get hands-on experience with cryptocurrencies, wallets, and exchanges.',
      'Apply your knowledge by developing a simple smart contract.',
      'Collaborate with peers and receive valuable feedback.',
      'Receive certification upon successful completion.'
    ]
  },
  {
    title: 'Intermediate Course',
    description: 'Are you ready to move beyond the basics and explore the intricacies of blockchain technology? Our Intermediate Course at Ashinity Synergy is designed to empower you with advanced knowledge and skills in blockchain architecture, enterprise solutions, and smart contract development. In just 6 weeks, you will deepen your understanding and gain practical experience in building blockchain applications.',
    whatToExpect: [
      'Explore advanced blockchain architecture, including sidechains and oracles.',
      'Dive into enterprise blockchains like Hyperledger and Corda.',
      'Master smart contract development with Solidity.',
      'Set up your development environment for real-world projects.',
      'Develop a decentralized application (DApp) and refine it with peer reviews.',
      'Receive certification upon successful completion.',
      'Elevate your blockchain expertise and open doors to exciting opportunities with our Intermediate Course.'
    ]
  },
  {
    title: 'Advanced Course',
    description: 'Are you prepared to become a blockchain innovator and tackle complex challenges in this evolving field? Our Advanced Course at Ashinity Synergy is your path to mastering blockchain scalability, industry-specific applications, and ethical considerations. In just 4 weeks, you will gain the expertise needed to develop enterprise blockchain solutions and navigate regulatory landscapes.',
    whatToExpect: [
      'Explore cutting-edge solutions for blockchain scalability.',
      'Dive deep into blockchain\'s impact on industries like supply chain, healthcare, and finance.',
      'Navigate regulatory compliance, including GDPR and CCPA.',
      'Examine and address ethical dilemmas in blockchain.',
      'Develop an enterprise blockchain solution and refine it through peer reviews.',
      'Receive certification upon successful completion.',
      'Join the league of blockchain innovators and position yourself at the forefront of this transformative technology with our Advanced Course.'
    ]
  }
];
