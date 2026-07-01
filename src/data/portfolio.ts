export interface Client {
  name: string;
  category: 'Go-To-Market' | 'AI & Automation';
  description?: string;
  logo?: string;
  url?: string;
  bgColor?: string;
}

export const clients: Client[] = [
  { name: 'Impact Roofing & Renovation', category: 'Go-To-Market', logo: '/impact-sq-black.png', url: 'https://impactrandr.com' },
  { name: 'EmpowerX3', category: 'Go-To-Market', logo: '/empower-logo-full.png', url: 'https://empowerx3.com' },
  { name: 'Campbell K9s', category: 'Go-To-Market', logo: '/ck9-logo.png', url: 'https://campbellk9s.com' },
  { name: 'Simply Clean', category: 'Go-To-Market', logo: '/Simply-Clean_CMYK.png', url: 'https://simplycleanlt.com' },
  { name: 'GLYNT.AI', category: 'Go-To-Market', logo: '/GLYNT_Logo_640x320.png', url: 'https://glynt.ai' },
  { name: 'Sinfonia', category: 'Go-To-Market', logo: '/sinfonia.svg', url: 'https://planorama.design', bgColor: '#0d0d1a' },
  { name: 'zblocks', category: 'Go-To-Market', logo: '/zblocks logo 1.svg' },
  { name: 'Breakroom', category: 'AI & Automation', logo: '/breakroom-full logo.png', url: 'https://breakroomapp.com', bgColor: '#16112e' },
  { name: 'Quiltt', category: 'AI & Automation', logo: '/quiltt-logo.png', url: 'https://quiltt.io' },
  { name: 'Blue Prism', category: 'AI & Automation', logo: '/ssc-blueprism-logo-rgb_stacked.jpg', url: 'https://blueprism.com' },
  { name: 'EBIT', category: 'AI & Automation', logo: '/ebit-logo-mod.png', url: 'https://ebitcommunity.com' },
  { name: 'Labflow by Catalyst', category: 'AI & Automation', logo: '/CatalystLogo_Blue.png', url: 'https://catalystedu.com' },
];
