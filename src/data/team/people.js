import Alex from './images/Alex.png'
import Alexey from './images/Alexey.png'
import Anastasiya from './images/Anastasiya.png'
import Anatoliy from './images/Anatoliy.png'
import Brian from './images/Brian.png'
import DenisG from './images/DenisG.png'
import Dima from './images/Dima.png'
import Garry from './images/Garry.png'
import GabbyN from './images/GabbyN.png'
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
import Nikolay from './images/Nikolay.png'
import Petra from './images/Petra.png'
import Tsetso from './images/Tsetso.png'
import Tzanko from './images/Tzanko.png'
import Vassil from './images/Vassil.png'
import Vlad from './images/Vlad.png'
import VladV from './images/VladV.png'
import VladimirT from './images/VladimirT.png'
import Yordan from './images/Yordan.png'
import Alena from './images/Alena.png'
import MaksimT from './images/MaksimT.png'
import Iryna from './images/Iryna.png'
import Sofia from './images/Sofia.png'
import Plamena from './images/Plamena.png'
import AlexanderS from './images/AlexanderS.png'
import Bulat from './images/Bulat.png'
import DmitryK from './images/DmitryK.png'

export const GROUPS = {
  CORE: 'Core team',
  RESEARCH: 'Research Group',
  DEVS: 'Development team',
  COMMUNICATIONS: 'Communications',
  MARKETING: 'Marketing',
  BISUNESS: 'Business Development',
  DESIGN: 'Design',
  ADVISORS: 'Advisors',
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
      linkedin: 'https://www.linkedin.com/in/maksim-balashevich-640a8948/',
    },
  },
  {
    name: 'Tzanko Matev',
    position: 'PhD Developer / Mathematician',
    img: Tzanko,
    group: GROUPS.CORE,
    description:
      'Number theorist, software developer and devops leader keeping Santiment systems in shape. Brings experience with backend logic and data structures as well. Data scientist. New crypto explorer. Meditator.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tzanko-matev-2328425/',
    },
  },
  {
    name: 'Alexander Grablevski',
    position: 'Data Scientist',
    group: GROUPS.RESEARCH,
    img: Alex,
    description:
      'He has a Major in Economics, enjoys DS and ML, and has deep experience in econometrics, including awards in several Econometric competitions. He also has a passion for discovering crypto space and used to work as analyst of crypto projects. He currently is a teacher for Cryptocurrencies and Derivatives course in Belarusian National Technical University. Likes learning and discovering new things.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alexander-grablevski-4544a7149/',
    },
  },
  {
    name: 'Petra Ujvari',
    position: 'HR Manager',
    img: Petra,
    group: GROUPS.BISUNESS,
    description: `From Senior Relationship Manager to Santiment's HR Manager, Petra is the ultimate people person. With a keen eye for talent and a passion for blockchain technology, Petra connects visionaries with opportunities to drive the future of decentralized finance. Drawing on a background in international education Petra brings a unique perspective to the world of HR. When not building top-performing teams, you can find her exploring the latest developments and networking with industry leaders`,
    links: {
      email: 'mailto:petra.u@santiment.net',
      telegram: 'https://t.me/ujvaripe',
    },
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
      facebook: 'https://www.facebook.com/brian.quinlivan.7',
    },
  },
  {
    name: 'Alexey Komkov',
    position: 'Product Marketing Manager',
    img: Alexey,
    group: GROUPS.MARKETING,
    description:
      'Alexey has an MBA in marketing communications and 7+ years of experience. Throughout his career, he did marketing for: crypto startups, custom software development services, IT equipment, and complex B2B products. He believes in continuous education, that’s why he is always on the lookout for a new book, marketing course, or webinar.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alexey-komkov/',
    },
  },
  {
    name: 'Anastasia Gelemeeva',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Anastasiya,
    description:
      'Anastasia is a passionate product-marketing designer who believes in simple and balanced design. She helps Santiment look pretty and structured. She has worked mostly with B2B and e-commerce companies but has always was looked forward to creating something unique and high-valued in a new industry.',
    links: {
      linkedin: 'https://www.linkedin.com/in/anastasia-gelemeeva-663ab110a',
    },
  },
  {
    name: 'Kim Carson',
    position: 'Designer',
    group: GROUPS.DESIGN,
    img: Kim,
    description:
      'User-focused visual/interactive designer specializing in partnership integrations, and enterprise apps for web and mobile. Dreams in html/css and data visualizations. Wordsmither. Aspiring crypto trader.',
    links: {
      linkedin: 'https://linkedin.com/in/kimcarson',
    },
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
      dribble: 'https://dribbble.com/Gabbynik',
    },
  },
  {
    name: 'Ksenia Parfinovich',
    position: 'Illustrator',
    group: GROUPS.DESIGN,
    img: Ksenia,
    description:
      'Ksenia has been illustrating for many years, making comics and books. She has been actively engage in graphic design and has given drawing lessons to adults and children. Likes to watch beautifully animated cartoons and read good literature.',
    links: {
      instagram: 'https://instagram.com/arget.m',
    },
  },
  {
    name: 'Kelvin “Wilhelm” Lee',
    position: 'Community Manager',
    group: GROUPS.COMMUNICATIONS,
    img: Kelvin,
    description:
      'Known as “Wilhelm” in the crypto space, he’s your gateway to all things Santiment. He ensures that communication between the team and community is in sync, and info you need is at your fingertips. There have been rumors he might be an AI, have a chat with him to find out more.',
    links: {
      twitter: 'https://twitter.com/claptrapxl',
      linkedin: 'https://www.linkedin.com/in/whoiskelvinlee/',
    },
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
      linkedin: 'https://www.linkedin.com/in/kabankin/',
    },
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
      email: 'mailto:dino.i@santiment.net',
    },
  },
  {
    name: 'Max “balresch” Bartel',
    position: 'Tech Support',
    img: Max,
    group: GROUPS.COMMUNICATIONS,
    description:
      "Meet Max, Santiment's tech support wizard. With a combined 10+ years of experience supporting small teams, Max has a talent for solving problems and a passion for all things crypto. After getting hooked on blockchain in 2018, Max has immersed himself in the world of decentralized finance, learning valuable lessons during the bear market and making connections at industry events like Devcon IV (where Santiment was lucky enough to meet him!). While his portfolio took a while to turn around, Max's enthusiasm and knowledge are always bullish - making him the perfect person to answer all your Santiment questions and help you navigate the exciting world of decentralized finance.",
    links: {
      twitter: 'https://twitter.com/balresch',
    },
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
      github: 'https://github.com/IvanIvanoff',
    },
  },
  {
    name: 'Tsvetozar Penov',
    position: 'Backend developer',
    group: GROUPS.DEVS,
    img: Tsetso,
    description:
      'Tsvetozar is an experienced full stack developer who has worked for several startups. He enjoys building robust and scalable systems that have impact. He also holds a purple belt in Brazilian Jiu Jitsu and is a certified trainer who loves rolling, hiking and doing all kinds of sports.',
    links: {
      linkedin: 'https://www.linkedin.com/in/tsvetozar-penov-545267115/',
    },
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
      github: 'https://github.com/DmitriVanGuard',
    },
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
      github: 'https://github.com/YordanPavlov',
    },
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
      github: 'https://github.com/kalkov',
    },
  },
  {
    name: 'Lyudmil Danailov',
    position: 'Developer',
    group: GROUPS.RESEARCH,
    img: Lyudmil,
    description:
      'Lyudmil is starting his career in development while studying Informatics at Sofia University. In his free time, he loves spending time playing guitar, learning languages and playing with his dog in his hometown of Varna.',
    links: {
      github: 'https://github.com/spiderjako',
    },
  },
  {
    name: 'Nikolay Kalev',
    position: 'DevSecOps',
    group: GROUPS.DEVS,
    img: Nikolay,
    description:
      'He has a Master degree in industrial automation with more than 15 years of IT/infrastructure expertise. Throughout his career, he grew few large scale projects to more than 4000 hosts and devices. He is passionate with cloud technologies, automation, security, Linux, BSD and embedded systems. He is interested about scifi , technology and always enjoy learning new things on his spare time',
    links: {
      linkedin: 'https://www.linkedin.com/in/nkalev',
    },
  },
  {
    name: 'Vladimir Donskoi',
    position: 'Managing Director',
    img: Vlad,
    group: GROUPS.BISUNESS,
    description:
      'Dr. Vladimir Donskoi - expert in the development of new growth models and entrepreneurial ecosystems; studies at Harvard and Oxford universities; experience in founding, managing and strategic consulting for a number of companies.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dr-vladimir-donskoi-022257109/',
    },
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
      github: 'https://github.com/apozdeyev',
    },
  },
  {
    name: 'Katsiaryna Dzibuk',
    position: 'Data Scientist',
    img: Kate,
    group: GROUPS.RESEARCH,
    description:
      'Katsiaryna holds a BSc in field of AI. A person of numbers being in love with mathematics and statistics. Likes to learn Japanese and spend time with her cats.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alresha/',
    },
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
      github: 'https://github.com/volynvlad',
    },
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
      github: 'https://github.com/ilya-lysko',
    },
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
      github: 'https://github.com/createMonster',
    },
  },
  {
    name: 'Vladimir Terentev',
    position: 'DeFi Analyst',
    img: VladimirT,
    group: GROUPS.RESEARCH,
    description:
      'Vladimir has an innate passion for researching and mastering any objective falls into his hands. Both BS and MS degrees in Computer Forensic gave him an extraordinary groundwork for his natural desire of dissecting digital world. His last professional mission was developing tools for cyber investigators and making their routine easy and smooth leveraging terabytes of unstructured data. Passionate about OSINT, stocks and crypto markets. Enjoys inventing ideas and implementing them.',
    links: {},
  },
  {
    name: 'Denis Golovachev',
    position: 'Platform Engineer',
    img: DenisG,
    group: GROUPS.RESEARCH,
    description: `Cryptography specialist with more than 10 years of Big Data AdTech architectural experience. Temple OS advocate and Plan9 follower. Editors War honored veteran (Stallman's squad) and JVM skeptic. 'Changing Stuff and Seeing What Happens' researcher with a long list of the curious stories that happened this way. Data scientists lifesaver.`,
    links: {
      github: 'https://github.com/WonderBeat',
      linkedin: 'https://www.linkedin.com/in/wonderbeat/',
    },
  },
  {
    name: 'Iryna Pranovich',
    position: 'Product Analyst',
    img: Iryna,
    group: GROUPS.RESEARCH,
    description: `Meet Iryna, our product analyst with a master's degree in DeepTech entrepreneurship. With a passion for market analysis and a focus on innovation, Iryna uses her expertise to conduct research, analyze data to improve products in close collaboration with product and development teams. Outside of work, Iryna enjoys listening to audiobooks during long runs and playing padel tennis.`,
    links: {},
  },
  {
    name: 'Sofia Volkova',
    position: 'Python Developer',
    img: Sofia,
    group: GROUPS.RESEARCH,
    description: `Sofia holds a Master's degree in computer science and possess a solid background in the banking industry as an ETL developer and data engineer. She takes pleasure in tackling engineering challenges and take pride in crafting clean and efficient Python code. When Sofia is not immersed in technology, you can find her engaging in various sports activities, dancing, skateboarding, and staying up-to-date with the latest fashion trends.`,
    links: {},
  },
  {
    name: 'Ivan Genev',
    position: 'DevOps',
    img: IvanG,
    group: GROUPS.DEVS,
    description:
      'Ivan has more than 15 years of IT/infrastructure expertise. Throughout his career, he was working in large telecoms, on-line gaming companies and e-commerce platforms. Enjoys to learn new things and play with linux, networks and automation.',
    links: {
      linkedin: 'https://www.linkedin.com/in/couting/',
    },
  },
  {
    name: 'Alena Busorgina',
    position: 'Marketing Designer',
    img: Alena,
    group: GROUPS.DESIGN,
    description:
      'Alena has more than 4 years of experience as a marketing designer, working with various companies ranging from small startups to large corporations. Whilst explored different areas of design she has chosen to focus on digital design. In addition to her love for motion graphics, she is also passionate about VR games, 3D design, and constantly learning new things.',
    links: {},
  },
  {
    name: 'Maksim Tkachuk',
    position: 'Product Owner',
    img: MaksimT,
    group: GROUPS.DEVS,
    description:
      "Meet Maksim, our Python dev who turned into a finance enthusiast. With a passion for market analysis and a talent for numbers, he brings a unique perspective to our product team. Whether he's crunching data or fine-tuning our strategy, Maksim's expertise and insights are always on point.",
    links: {},
  },
  {
    name: 'Plamena Deliyska',
    position: 'Lawyer and Administration',
    img: Plamena,
    group: GROUPS.BISUNESS,
    description:
      "I am a fond lover of law, an admirer of analytical thinking and a passionate keeper of order. I have 14 + years of experience helping companies with their corporate governance, compliance, contract relations, establishment of investments and financing, structuring the intergroup relations, including establishment of foreign subsidiaries, etc. Recently, I added focus on the technology and crypto markets for their legal and compliance challenges. In my free time, I enjoy exploring new destinations, savoring culinary delights, and immersing myself in nature. I live dynamically, but I love balance, that's how I feel the moment and the present, which are the only ones that belong to us.",
    links: {},
  },
  {
    name: 'Alexander Semenov',
    position: 'Data Research Lead',
    img: AlexanderS,
    group: GROUPS.RESEARCH,
    description:
      'Alexander has 15 years of experience of work in consulting, research, teaching and Academy (h-index = 7). His area of expertise is computational social science with a focus on social network analysis and graph mining. Before joining Santiment he was head of analytics for the largest ISP and head of R&D for the gaming department of largest bank in Russia. In Santiment he supervises product analytics and social data.',
    links: {},
  },
  {
    name: 'Bulat Lutfullin',
    position: 'Senior Platform Engineer',
    img: Bulat,
    group: GROUPS.RESEARCH,
    description:
      "Bulat brings a wealth of experience in developing backend and MLOps products. With his passion for experimentation and a penchant for knowledge sharing, he's not only a seasoned speaker at meetups but also sees opportunities for more engagements. Armed with his BSc in Applied Mathematics, he adeptly navigates code, blending insights from Stack Overflow. His coding proficiency extends to his enjoyment of types of Types and Scala, all savored with a cup of meticulously brewed hot black coffee.",
    links: {},
  },
  {
    name: 'Dmitry Korzhik',
    position: 'Business Development',
    img: DmitryK,
    group: GROUPS.BISUNESS,
    description:
      "Dmitry is a tech industry veteran with 10+ years of experience, specializing in building businesses from inception. An active crypto trader, he holds dual Master's degrees in computer science and e-government. Dmitry's expertise and strategic mindset contribute significantly to our team's success.",
    links: {},
  },
]
