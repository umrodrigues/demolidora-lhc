export interface Work {
  id: string;
  slug: string;
  title: string;
  category: string;
  location?: string;
  year?: string;
  images: string[];
}

export const works: Record<string, Work> = {
  '1-ford': {
    id: 'ford',
    slug: '1-ford',
    title: 'Demolição Predial',
    category: 'Demolição e Terraplenagem',
    images: [
      '/obras/1 - Demolição Predial/01 - Imagem Início .jpg',
      '/obras/1 - Demolição Predial/02 - Imagem Fim .jpg',
      '/obras/1 - Demolição Predial/03 Portfólio .jpg',
      '/obras/1 - Demolição Predial/04 Portfólio .jpg',
      '/obras/1 - Demolição Predial/05 Portfólio .jpg',
      '/obras/1 - Demolição Predial/06 Portfólio .jpg'
    ]
  },
  '2-unimed': {
    id: 'unimed',
    slug: '2-unimed',
    title: 'UNIMED',
    category: 'Escavação',
    images: [
      '/obras/2 - UNIMED/01 Foto de Inicio .jpg',
      '/obras/2 - UNIMED/02 Foto de Fim .jpg',
      '/obras/2 - UNIMED/03 Foto .jpg',
      '/obras/2 - UNIMED/04 Foto .jpg',
      '/obras/2 - UNIMED/05 Foto .jpg',
      '/obras/2 - UNIMED/06 Foto .jpg',
      '/obras/2 - UNIMED/Imagem do WhatsApp de 2025-10-27 à(s) 11.46.36_43c8c3db.jpg'
    ]
  },
  '3-ciee': {
    id: 'ciee',
    slug: '3-ciee',
    title: 'Demolição Cieee',
    category: 'Demolição',
    images: [
      '/obras/3 - Demolição Cieee/01 Foto de Inicio .jpg',
      '/obras/3 - Demolição Cieee/02 Foto de Fim .jpg',
      '/obras/3 - Demolição Cieee/03 foto .jpg',
      '/obras/3 - Demolição Cieee/04 foto .jpg',
      '/obras/3 - Demolição Cieee/05 foto .jpg'
    ]
  },
  '4-marcelo-gama': {
    id: 'marcelo-gama',
    slug: '4-marcelo-gama',
    title: 'Escavação Marcelo Gama',
    category: 'Terraplenagem',
    images: [
      '/obras/4 - Escavação Marcelo Gama/01 Foto de Inicio .jpg',
      '/obras/4 - Escavação Marcelo Gama/02 Foto de Fim .jpg',
      '/obras/4 - Escavação Marcelo Gama/03 foto .jpg',
      '/obras/4 - Escavação Marcelo Gama/04 foto .jpg',
      '/obras/4 - Escavação Marcelo Gama/05 foto .jpg',
      '/obras/4 - Escavação Marcelo Gama/06 foto .jpg'
    ]
  },
  '5-arambare': {
    id: 'arambare',
    slug: '5-arambare',
    title: 'Demolição caixa d’água Arambare',
    category: 'Escavação',
    images: [
      '/obras/5 - Demolição caixa d’água Arambare/01 Foto de Inicio .jpg',
      '/obras/5 - Demolição caixa d’água Arambare/02 Foto de Fim .jpg',
      '/obras/5 - Demolição caixa d’água Arambare/03 Foto .jpg',
      '/obras/5 - Demolição caixa d’água Arambare/04 Foto .jpg',
      '/obras/5 - Demolição caixa d’água Arambare/05 Foto .jpg',
      '/obras/5 - Demolição caixa d’água Arambare/06 Foto .jpg'
    ]
  },
  '6-machopo': {
    id: 'machopo',
    slug: '6-machopo',
    title: 'Demolição Chaminés Mapocho',
    category: 'Demolição',
    images: [
      '/obras/6 - Demolição Chaminés Mapocho/01 Foto de Inicio .jpg',
      '/obras/6 - Demolição Chaminés Mapocho/02 Foto de Fim .jpg',
      '/obras/6 - Demolição Chaminés Mapocho/03 Foto .jpg',
      '/obras/6 - Demolição Chaminés Mapocho/04 Foto_.jpg',
      '/obras/6 - Demolição Chaminés Mapocho/05 Foto .jpg',
      '/obras/6 - Demolição Chaminés Mapocho/06 Foto .jpg'
    ]
  },
  '7-estrutura': {
    id: 'estrutura',
    slug: '7-estrutura',
    title: 'Desmontagem de Estrutura Metálica',
    category: 'Demolição',
    images: [
      '/obras/7 - Desmontagem de Estrutura Metálica/01 Foto de Inicio .jpg',
      '/obras/7 - Desmontagem de Estrutura Metálica/02 Foto de Fim .jpg',
      '/obras/7 - Desmontagem de Estrutura Metálica/03 Foto .jpg',
      '/obras/7 - Desmontagem de Estrutura Metálica/04 Foto .jpg',
      '/obras/7 - Desmontagem de Estrutura Metálica/05 Foto .jpg',
      '/obras/7 - Desmontagem de Estrutura Metálica/06 Foto .jpg'
    ]
  },
  '8-parker': {
    id: 'parker',
    slug: '8-parker',
    title: 'Demolição Parker',
    category: 'Demolição',
    images: [
      '/obras/08 - Demolição Parker/01 foto .jpg',
      '/obras/08 - Demolição Parker/02 foto .jpg',
      '/obras/08 - Demolição Parker/03 foto .jpg',
      '/obras/08 - Demolição Parker/IMG-20251028-WA0005.jpg'
    ]
  }
};

export function getWorkBySlug(slug: string): Work | undefined {
  return works[slug];
}

export function getAllWorks(): Work[] {
  return Object.values(works);
}

