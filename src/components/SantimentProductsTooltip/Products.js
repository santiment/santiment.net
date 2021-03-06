import sanr from './icons/sanr.svg'
import sanapi from './icons/sanapi.svg'
import sanbase from './icons/sanbase.svg'
import insights from './icons/insights.svg'
import sansheets from './icons/sansheets.svg'
import sanhunters from './icons/sanhunters.svg'
import datascience from './icons/datascience.svg'

export const BUSINESS_PRODUCTS = [
  {
    img: sanbase,
    title: 'Sanbase',
    description:
      'Behavior analysis & monitoring platform for 1500+ crypto assets',
    to: 'https://app.santiment.net'
  },
  {
    img: sansheets,
    title: 'Sansheets',
    description: 'Google Spreadsheets plugin for importing Santiment data',
    to: 'https://sheets.santiment.net'
  },
  {
    img: sanapi,
    title: 'SanAPI',
    description: 'The most comprehensive crypto API on the market',
    to: 'https://neuro.santiment.net'
  },
  {
    img: datascience,
    title: 'Data Science as a Service',
    description: 'Bespoke market intelligence for digital assets',
    to: '/',
    onClick: () => window.Intercom && window.Intercom('showNewMessage', 'Talk with expert about Data Science as a Service.')
  }
]

export const CHAIN_PRODUCTS = [
  {
    img: sanr,
    title: 'SanR',
    description: 'Decentralized marketplace for crypto price signals',
    to: 'https://sanr.santiment.net'
  },
  {
    img: sanhunters,
    title: 'Sanhunters',
    description: 'Get rewarded for market research and your crypto know-how',
    to: 'https://hunters.santiment.net'
  },
  {
    img: insights,
    title: 'Insights',
    description: 'Market analysis from the San team and community members',
    label: 'SAN chain support soon',
    to: 'https://insights.santiment.net'
  }
]
