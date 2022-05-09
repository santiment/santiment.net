import Alex from './images/Alex.png'
import Anastasiya from './images/Anastasiya.png'
import Anatoliy from './images/Anatoliy.png'
import Ante from './images/Ante.png'
import Brian from './images/Brian.png'
import Dima from './images/Dima.png'
import Ehrlan from './images/Ehrlan.png'
import Garry from './images/Garry.png'
import GabbyN from './images/GabbyN.png'
import IgorK from './images/IgorK.png'
import IlyaL from './images/IlyaL.png'
import Ivan from './images/Ivan.png'
import IvanG from './images/IvanG.png'
import Kate from './images/Kate.png'
import Kelvin from './images/Kelvin.png'
import Kim from './images/Kim.png'
import Ksenia from './images/Ksenia.png'
import Lyudmil from './images/Lyudmil.png'
import LarryC from './images/LarryC.png'
import Maksim from './images/Maksim.png'
import Max from './images/Max.png'
import Nail from './images/Nail.png'
import Nikolay from './images/Nikolay.png'
import Petra from './images/Petra.png'
import SaeidR from './images/SaeidR.png'
import Serena from './images/Serena.png'
import Tsetso from './images/Tsetso.png'
import Tzanko from './images/Tzanko.png'
import Vassil from './images/Vassil.png'
import Vlad from './images/Vlad.png'
import VladV from './images/VladV.png'
import Yordan from './images/Yordan.png'
import Yura from './images/Yura.png'

export const GROUPS = {
  CORE: 'Core team',
  RESEARCH: 'Research Group',
  DEVS: 'Development team',
  COMMUNICATIONS: 'Communications',
  MARKETING: 'Marketing',
  BISUNESS: 'Business Development',
  DESIGN: 'Design',
  ADVISORS: 'Advisors'
}

export const PEOPLE = [
  {
    name: 'Maksim Balashevich',
    img: Maksim,
    position: 'Founder',
    group: GROUPS.CORE,
    description:
      'Veteran product creator and entrepreneur with more than 15 years experience leading international teams, and more than 10 years in financial markets analysis. A distinguished sentiment analyst and crowd psychology expert, he’s a regular media commentator who has been featured in Forbes and other financial publications. He also draws on his unique background in a yogic way of life to foster a human-focused, balanced approach to building communities and decentralized platforms.',
    links: {
      sanbase: 'https://app.santiment.net/profile/836',
      twitter: 'https://twitter.com/balance_ra',
      linkedin: 'https://www.linkedin.com/in/maksim-balashevich-640a8948/'
    }
  },
  {
    name: 'Yura Zatsepin',
    img: Yura,
    position: 'CPO',
    group: GROUPS.CORE,
    description:
      'He’s developed a guitar education service, online payment services for banks, and MMO mobile/flash games and extensions for purchase. He also won first place in 2 hackathons (Gazprom, QIWI) and got special prizes from Evernote. He now wants to turn his passion for building great applications toward the crypto world.',
    links: {
      sanbase: 'https://app.santiment.net/profile/120',
      github: 'https://github.com/Partysun'
    }
  },
  {
    name: 'Tzanko Matev',
    position: 'PhD Developer / Mathematician',
    img: Tzanko,
    group: GROUPS.CORE,
    description:
      'Number theorist, software developer and devops leader keeping Santiment systems in shape. Brings experience with backend logic and data structures as well. Data scientist. New crypto explorer. Meditator.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tzanko-matev-2328425/'
    }
  },
  {
    name: 'Alexander Grablevski',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: Alex,
    description:
      'He has a Major in Economics, enjoys DS and ML, and has deep experience in econometrics, including awards in several Econometric competitions. He also has a passion for discovering crypto space and used to work as analyst of crypto projects. He currently is a teacher for Cryptocurrencies and Derivatives course in Belarusian National Technical University. Likes learning and discovering new things.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alexander-grablevski-4544a7149/'
    }
  },
  {
    name: 'Petra Ujvari',
    position: 'Sr. Relationship Manager',
    img: Petra,
    group: GROUPS.BISUNESS,
    description:
      'Petra is like the company’s human hand. Her natural talent to network, her open mind & heart make it easy to take care of most subtle tasks. She can spot things before others do and sense the sentiment. Petra, who considers herself a global citizen, has a strong background in international education and in promoting visionary blockchain projects for common good.',
    links: {
      email: 'mailto:petra.u@santiment.net',
      telegram: 'https://t.me/ujvaripe'
    }
  },
  {
    name: 'Serena Tan',
    position: 'Partnerships',
    img: Serena,
    group: GROUPS.BISUNESS,
    description:
      'Builds partnerships at the project level, and brings users, developers and traders in the Santiment community together. She’s committed to diversity, inclusion and representation for the industry, facilitating meetups and learning opportunities for the wider Santiment community. She graduated from Sydney University with a Bachelor of Liberal Arts & Science and previously worked in non-profit and social enterprise before joining Santiment.',
    links: {
      twitter: 'https://twitter.com/tserenam',
      linkedin: 'https://www.linkedin.com/in/tanserena/'
    }
  },
  {
    name: 'Brian Quinlivan',
    position: 'Director of Marketing',
    img: Brian,
    group: GROUPS.MARKETING,
    description:
      'With a freshly-minted MBA in finance from Chapman University, Brian has 10+ years of marketing, financial, and data analytics experience. He enjoys creating financial models to improve modern-day investing strategies and to study the intricacies of market variations. He’s also fascinated by cryptocurrency and loves being part of a growing community that represents a change from the status quo of traditional banking and transactions. When away from work, he’s an avid music producer and writer, and enjoys playing tennis, basketball, and cards.',
    links: {
      twitter: 'https://twitter.com/brianquinlivan',
      linkedin: 'https://www.linkedin.com/in/brian-quinlivan-mba-3a95b18b/',
      medium: 'https://medium.com/@bquinliv3',
      facebook: 'https://www.facebook.com/brian.quinlivan.7'
    }
  },
  {
    name: 'Anastasia Gelemeeva',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Anastasiya,
    description:
      'Anastasia is a passionate product-marketing designer who believes in simple and balanced design. She helps Santiment look pretty and structured. She has worked mostly with B2B and e-commerce companies but has always was looked forward to creating something unique and high-valued in a new industry.',
    links: {
      linkedin: 'https://www.linkedin.com/in/anastasia-gelemeeva-663ab110a'
    }
  },
  {
    name: 'Kim Carson',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Kim,
    description:
      'User-focused visual/interactive designer specializing in partnership integrations, and enterprise apps for web and mobile. Dreams in html/css and data visualizations. Wordsmither. Aspiring crypto trader.',
    links: {
      linkedin: 'https://linkedin.com/in/kimcarson'
    }
  },
  {
    name: 'Ehrlan Zholdosh',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Ehrlan,
    description:
      'Ehrlan does product design over six years. Feels a sincere devotion to translating complex products into functional user-centered interfaces visually balanced across any device. Born with a blue heart and devoted to FC Chelsea.',
    links: {
      twitter: 'https://twitter.com/ehrlan8',
      medium: 'https://ehrlan.medium.com/'
    }
  },
  {
    name: 'Gabriela Nikolova',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: GabbyN,
    description:
      'Gabby has a passion for new tech solutions and innovation through research and empathy. Her other passion is entrepreneurship and she’s had a few technological startups in the past, learning first hand about the pitfalls, when designing a solution. She holds a degree in philology and MBA but has worked as a web designer through most of her life. Her interests vary from arts and music to marketing, psychology, and human behavior.',
    links: {
      website: 'https://www.gabbynik.com/',
      linkedin: 'https://www.linkedin.com/in/gabbynikolova/',
      dribble: 'https://dribbble.com/Gabbynik'
    }
  },
  {
    name: 'Ksenia Parfinovich',
    position: 'Illustrator',
    group: GROUPS.DESIGN,
    img: Ksenia,
    description:
      'Ksenia has been illustrating for many years, making comics and books. She has been actively engage in graphic design and has given drawing lessons to adults and children. Likes to watch beautifully animated cartoons and read good literature.',
    links: {
      instagram: 'https://instagram.com/arget.m'
    }
  },
  {
    name: 'Kelvin “Wilhelm” Lee',
    position: 'Community Manager',
    group: GROUPS.COMMUNICATIONS,
    img: Kelvin,
    description:
      'Known as “Wilhelm” in the crypto space, he’s your gateway to all things Santiment. He ensures that communication between the team and community is in sync, and info you need is at your fingertips. No stranger to building great communities, he’s also a core member of crypto’s largest slack, Cryptocopia. There have been rumors he might be an AI, have a chat with him to find out more.',
    links: {
      twitter: 'https://twitter.com/claptrapxl',
      linkedin: 'https://www.linkedin.com/in/whoiskelvinlee/'
    }
  },
  {
    name: 'Garry Kabankin',
    position: 'Project Coordinator',
    img: Garry,
    group: GROUPS.BISUNESS,
    description:
      'Organizer, structurizer, and master in wrangling complex data into manageable forms. Keeps Santiment projects running smoothly and never stops learning. Aviator.',
    links: {
      sanbase: 'https://app.santiment.net/profile/6',
      linkedin: 'https://www.linkedin.com/in/kabankin/'
    }
  },
  {
    name: 'Dino Ibisbegovic',
    position: 'Advisor',
    group: GROUPS.ADVISORS,
    description:
      'Resident wordsmith and SEO nerd, Dino oversees all things content. He’s worked in a medley of startups big and small before joining Santiment, specializing in content creation, search engine optimization and many other -ations. He has since caught the crypto bug and is currently a refreshingly average swing trader. Get in touch with him to talk content collabs and/or favorite html tags.',
    links: {
      sanbase: 'https://app.santiment.net/profile/1269',
      linkedin: 'https://www.linkedin.com/in/dino-ibisbegovic-5911b711/',
      email: 'mailto:dino.i@santiment.net'
    }
  },
  {
    name: 'Max “balresch” Bartel',
    position: 'Tech Support',
    img: Max,
    group: GROUPS.COMMUNICATIONS,
    description:
      'Max got hooked on crypto in 2018, after the last bull run. While his portfolio is still in the red, he’s learned a lot during this bear market, including that “bear market conferences” can be great for making connections (Santiment was lucky to meet him at Devcon IV!) With more than 7 years of experience in small teams providing high-quality tech support, he can help answer all of your Santiment questions.',
    links: {
      twitter: 'https://twitter.com/balresch'
    }
  },
  {
    name: 'Ivan Aleksandrov',
    position: 'Backend developer',
    group: GROUPS.DEVS,
    img: Ivan,
    description:
      "Ivan is a developer with C++ telecom industry background, BA in Computer Science and is nowadays pursuing Master's Degree in the field of AI. He believes in open source software and loves music, books, travelling, and occasionally teaching and advocating functional programming with Elixir at the university.",
    links: {
      linkedin: 'https://www.linkedin.com/in/ivan-aleksandrov-63b8668a/',
      github: 'https://github.com/IvanIvanoff'
    }
  },
  {
    name: 'Tsvetozar Penov',
    position: 'Backend developer',
    group: GROUPS.DEVS,
    img: Tsetso,
    description:
      'Tsvetozar is an experienced full stack developer who has worked for several startups. He enjoys building robust and scalable systems that have impact. He also holds a purple belt in Brazilian Jiu Jitsu and is a certified trainer who loves rolling, hiking and doing all kinds of sports.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tsvetozar-penov-545267115/'
    }
  },
  {
    name: 'Dmitri Marov',
    position: 'Frontend developer',
    group: GROUPS.DEVS,
    img: Dima,
    description:
      'Curious. Disciplined. Passionate. Dmitri Is not afraid to wonder and learn more about how things work. He always tries to find ways to make life better…. and never stops doing these things because he loves it.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dmitrijs-marovs-ab073a16a',
      github: 'https://github.com/DmitriVanGuard'
    }
  },
  {
    name: 'Yordan Pavlov',
    position: 'Big Data Engineer',
    img: Yordan,
    group: GROUPS.RESEARCH,
    description:
      'Yordan has 10+ years of experience as a software developer, mainly as a C++ developer. He has worked on projects in the telecom and travel industries, and likes devising optimized and lean software especially related to fast networking, optimized algorithms and high performance data structures. He was instantly drawn to cryptocurrencies because they intersect cryptography, finance and social behavior. Outside of work, he enjoys hiking, snowboarding or just going for a walk.',
    links: {
      linkedin: 'https://www.linkedin.com/in/yordan-pavlov/',
      github: 'https://github.com/YordanPavlov'
    }
  },
  {
    name: 'Vassil Kalkov',
    position: 'Big Data Engineer',
    img: Vassil,
    group: GROUPS.RESEARCH,
    description:
      'Vassil brings a pragmatic approach plus experience in startups and mid-size companies, using a diverse set of technologies. He’s a long-time crypto believer and is committed to building applications that foster its adoption. He’s also passionate about hardware, mining, connected devices, and shooting pictures with old analog cameras.',
    links: {
      linkedin: 'https://www.linkedin.com/in/vassilkalkov/',
      github: 'https://github.com/kalkov'
    }
  },
  {
    name: 'Lyudmil Danailov',
    position: 'Developer',
    group: GROUPS.RESEARCH,
    img: Lyudmil,
    description:
      'Lyudmil is starting his career in development while studying Informatics at Sofia University. In his free time, he loves spending time playing guitar, learning languages and playing with his dog in his hometown of Varna.',
    links: {
      github: 'https://github.com/spiderjako'
    }
  },
  {
    name: 'Dorjee Sun',
    position: 'Advisor',
    group: GROUPS.ADVISORS,
    description:
      'Social entrepreneur who has co-founded 17 companies in the areas of biotech, education, conservation, agriculture, philanthropy, technology and financial innovation. Named one of TIME Magazine’s Heroes of the Environment, he also is a hero of Santiment business development and leading new initiatives.',
    links: {
      linkedin: 'https://sg.linkedin.com/in/dorjee'
    }
  },
  {
    name: 'Nikolay Kalev',
    position: 'DevSecOps',
    group: GROUPS.DEVS,
    img: Nikolay,
    description:
      'He has a Master degree in industrial automation with more than 15 years of IT/infrastructure expertise. Throughout his career, he grew few large scale projects to more than 4000 hosts and devices. He is passionate with cloud technologies, automation, security, Linux, BSD and embedded systems. He is interested about scifi , technology and always enjoy learning new things on his spare time',
    links: {
      linkedin: 'https://www.linkedin.com/in/nkalev'
    }
  },
  {
    name: 'Ante Sosa',
    position: 'Big Data Contractor',
    img: Ante,
    group: GROUPS.RESEARCH,
    description:
      'Ante has a background in mathematics with experience in analyzing large amounts of malicious files. He is passionate about data science and exploring innovations in crypto space. He enjoys playing football, traveling and meeting new people.',
    links: {
      github: 'https://github.com/antisaa'
    }
  },
  {
    name: 'Vladimir Donskoi',
    position: 'Managing Director',
    img: Vlad,
    group: GROUPS.BISUNESS,
    description:
      'Dr. Vladimir Donskoi - expert in the development of new growth models and entrepreneurial ecosystems; studies at Harvard and Oxford universities; experience in founding, managing and strategic consulting for a number of companies.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dr-vladimir-donskoi-022257109/'
    }
  },
  {
    name: 'Anatoliy Pozdeyev',
    position: 'Big Data Engineer',
    img: Anatoliy,
    group: GROUPS.RESEARCH,
    description:
      'Master degree in computer security and cryptography, software engineer with entrepreneur background, 15+ years experience. Made a lot of projects in different fields (security, IPTV, mobile, games). Now his main passion is Big Data and Crypto. He likes challenges, when it is necessary to think, rather than just knocking on a keyboard. He desires to compete in Iron Man triathlon, 4km swim, 200 bike ride, and 40 runs!',
    links: {
      linkedin: 'https://www.linkedin.com/in/anatoly-pozdeev-4b086011/',
      github: 'https://github.com/apozdeyev'
    }
  },
  {
    name: 'Katsiaryna Dzibuk',
    position: 'Data Scientist',
    img: Kate,
    group: GROUPS.RESEARCH,
    description:
      'Katsiaryna holds a BSc in field of AI. A person of numbers being in love with mathematics and statistics. Likes to learn Japanese and spend time with her cats.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alresha/'
    }
  },
  {
    name: 'Vladislav Volynets',
    position: 'Data Scientist',
    img: VladV,
    group: GROUPS.RESEARCH,
    description:
      'Vlad joined our team while studying at the Belarusian State University. Enjoys learning math, implementing various kinds of classical algorithms, and understanding ml algorithms under the hood. Likes to play basketball, table tennis and spend time with his friends.',
    links: {
      linkedin: 'https://www.linkedin.com/in/vladislav-volynets-131b0b194',
      github: 'https://github.com/volynvlad'
    }
  },
  {
    name: 'Ilya Lysko',
    position: 'Data Scientist',
    img: IlyaL,
    group: GROUPS.RESEARCH,
    description:
      'Master degree in computer science. Passionate about data science, programming, crypto and finance areas. Outside of work, Ilya enjoy hiking, reading and playing table tennis.',
    links: {
      linkedin: 'https://linkedin.com/in/ilyalysko/',
      github: 'https://github.com/ilya-lysko'
    }
  },
  {
    name: 'Larry CAO',
    position: 'DeFi Analyst',
    img: LarryC,
    group: GROUPS.RESEARCH,
    description:
      'Master degree in data science. Larry is always ready to learn new things, and he is good at listening to different voices and make the best usage from them. Cooking makes Larry concentrated and investing makes Larry poor and brave. He might become degen for some time but after all he found that building is more interesting and meaningful. Larry tends to embrace new changes and adventures in life, from where he is also finding himself.',
    links: {
      linkedin: 'https://www.linkedin.com/in/larry-cao-78887012b/',
      github: 'https://github.com/createMonster'
    }
  },
  {
    name: 'Nail Khafizov',
    position: 'Blockchain developer',
    img: Nail,
    group: GROUPS.DEVS,
    description:
      'He likes to develop extraordinary and complex apps. He is sure: blockchain will lead us to the bright future. Programming is his passion.',
    links: {
      github: 'https://github.com/nailkhaf/'
    }
  },
  {
    name: 'Ivan Genev',
    position: 'DevOps',
    img: IvanG,
    group: GROUPS.DEVS,
    description:
      'Ivan has more than 15 years of IT/infrastructure expertise. Throughout his career, he was working in large telecoms, on-line gaming companies and e-commerce platforms. Enjoys to learn new things and play with linux, networks and automation.',
    links: {
      linkedin: 'https://www.linkedin.com/in/couting/'
    }
  },
  {
    name: 'Igor Ko',
    position: 'Frontend developer',
    img: IgorK,
    group: GROUPS.DEVS,
    description:
      'Software developer, BE in Computer Science. Enjoys learning something new everyday, passionate about coding. He also loves tourism, reading science fiction literature and meeting new people.',
    links: {
      github: 'https://github.com/Woafflation'
    }
  },
  {
    name: 'Saeid M.Rezaei',
    position: 'Frontend developer',
    img: SaeidR,
    group: GROUPS.DEVS,
    description:
      'A self taught programmer with more than 15 years experience. Saeid has worked with many companies and many job positions such as backend, full stack, mobile and game developer. Currently Saeid is in love with frontend development. He likes to learn new thing everyday. His slang is building great things and not waiting for great things to build. He believes he was born to write code.',
    links: {
      linkedin:
        'https://www.linkedin.com/in/saeid-aka-hojjat-mohammad-rezaei-3a227725/',
      github: 'https://github.com/peratik',
      telegram: 'https://t.me/peratik'
    }
  }
]
