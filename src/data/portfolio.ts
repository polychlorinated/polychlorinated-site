export interface Client {
  name: string;
  category: 'Go-To-Market' | 'AI & Automation';
  description?: string;
}

export const clients: Client[] = [
  { name: 'Impact Roofing & Renovation', category: 'Go-To-Market' },
  { name: 'EmpowerX3', category: 'Go-To-Market' },
  { name: 'Campbell K9s', category: 'Go-To-Market' },
  { name: 'Simply Clean', category: 'Go-To-Market' },
  { name: 'GLYNT.AI', category: 'Go-To-Market' },
  { name: 'Sinfonia', category: 'Go-To-Market' },
  { name: 'zblocks', category: 'Go-To-Market' },
  { name: 'Breakroom', category: 'AI & Automation' },
  { name: 'Quiltt', category: 'AI & Automation' },
  { name: 'Blue Prism', category: 'AI & Automation' },
  { name: 'EBIT', category: 'AI & Automation' },
  { name: 'Labflow by Catalyst', category: 'AI & Automation' },
];
