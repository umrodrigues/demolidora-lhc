export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  location?: string;
  year?: string;
  images: string[];
}

export const works: Record<string, Work> = {
  '1-ford': {
    id: 'ford',
    slug: '1-ford',
    title: 'Ford',
    description: 'Demolição e terraplenagem completa do projeto Ford. Trabalho realizado com equipamentos de última geração e máxima segurança.',
    category: 'Demolição e Terraplenagem',
    images: [
      '/obras/1 - Ford/inicio1.jpg',
      '/obras/1 - Ford/inicio2.jpg',
      '/obras/1 - Ford/inicio3.jpg',
      '/obras/1 - Ford/meio1.jpg',
      '/obras/1 - Ford/meio2.jpg',
      '/obras/1 - Ford/meio3.jpg',
      '/obras/1 - Ford/meio4.jpg',
      '/obras/1 - Ford/meio5.jpg',
      '/obras/1 - Ford/meio6.jpg',
      '/obras/1 - Ford/meio7.jpg',
      '/obras/1 - Ford/fim1.jpg',
      '/obras/1 - Ford/fim2.jpg',
      '/obras/1 - Ford/fim3.jpg'
    ]
  },
  '2-unimed': {
    id: 'unimed',
    slug: '2-unimed',
    title: 'Unimed',
    description: 'Projeto de escavação e preparação de terreno para Unimed. Trabalho realizado com precisão e dentro do prazo estabelecido.',
    category: 'Escavação',
    images: [
      '/obras/2 - Unimed/01.jpg',
      '/obras/2 - Unimed/02.jpg',
      '/obras/2 - Unimed/03.jpg',
      '/obras/2 - Unimed/04.jpg',
      '/obras/2 - Unimed/05.jpg',
      '/obras/2 - Unimed/06.jpg'
    ]
  },
  '3-ciee': {
    id: 'ciee',
    slug: '3-ciee',
    title: 'CIEE',
    description: 'Demolição controlada e remoção de estruturas do projeto CIEE. Execução com segurança e eficiência.',
    category: 'Demolição',
    images: [
      '/obras/3 - CIEE/01.jpg',
      '/obras/3 - CIEE/02.jpg',
      '/obras/3 - CIEE/03.jpg',
      '/obras/3 - CIEE/04.jpg',
      '/obras/3 - CIEE/05.jpg'
    ]
  },
  '4-marcelo-gama': {
    id: 'marcelo-gama',
    slug: '4-marcelo-gama',
    title: 'Marcelo Gama',
    description: 'Terraplenagem e preparação de terreno para construção. Nivelamento perfeito e compactação adequada do solo.',
    category: 'Terraplenagem',
    images: [
      '/obras/4 - Marcelo Gama/01.jpg',
      '/obras/4 - Marcelo Gama/02.jpg',
      '/obras/4 - Marcelo Gama/03.jpg',
      '/obras/4 - Marcelo Gama/04.jpg',
      '/obras/4 - Marcelo Gama/05.jpg',
      '/obras/4 - Marcelo Gama/06.jpg',
      '/obras/4 - Marcelo Gama/08.jpg',
      '/obras/4 - Marcelo Gama/09.jpg',
      '/obras/4 - Marcelo Gama/10.jpg',
      '/obras/4 - Marcelo Gama/11.jpg',
      '/obras/4 - Marcelo Gama/12.jpg',
      '/obras/4 - Marcelo Gama/13.jpg'
    ]
  },
  '5-arambare': {
    id: 'arambare',
    slug: '5-arambare',
    title: 'Arambaré',
    description: 'Projeto de escavação e movimentação de terra em Arambaré. Trabalho realizado com equipamentos modernos e equipe especializada.',
    category: 'Escavação',
    images: [
      '/obras/5 - Arambare/01.jpg',
      '/obras/5 - Arambare/02.jpg',
      '/obras/5 - Arambare/03.jpg',
      '/obras/5 - Arambare/04.jpg',
      '/obras/5 - Arambare/05.jpg',
      '/obras/5 - Arambare/06.jpg',
      '/obras/5 - Arambare/07.jpg',
      '/obras/5 - Arambare/08.jpg',
      '/obras/5 - Arambare/09.jpg'
    ]
  },
  '6-machopo': {
    id: 'machopo',
    slug: '6-machopo',
    title: 'Machopo',
    description: 'Demolição e preparação de área para novo empreendimento. Remoção segura de estruturas e limpeza completa do terreno.',
    category: 'Demolição',
    images: [
      '/obras/6 - Machopo/01.jpg',
      '/obras/6 - Machopo/02.jpg',
      '/obras/6 - Machopo/03.jpg',
      '/obras/6 - Machopo/04.jpg',
      '/obras/6 - Machopo/05.jpg'
    ]
  },
  '7-estrutura': {
    id: 'estrutura',
    slug: '7-estrutura',
    title: 'Estrutura',
    description: 'Demolição de estruturas complexas com segurança. Utilização de técnicas avançadas e equipamentos especializados.',
    category: 'Demolição',
    images: [
      '/obras/7 - Estrutura/01.jpg',
      '/obras/7 - Estrutura/02.jpg',
      '/obras/7 - Estrutura/03.jpg',
      '/obras/7 - Estrutura/04.jpg'
    ]
  }
};

export function getWorkBySlug(slug: string): Work | undefined {
  return works[slug];
}

export function getAllWorks(): Work[] {
  return Object.values(works);
}

