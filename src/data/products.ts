import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Essence de Forêt',
    price: 89,
    description: 'Un voyage olfactif au cœur de la forêt primordiale, où les notes de cèdre et de mousse se mêlent harmonieusement.',
    image: 'https://images.unsplash.com/photo-1555617117-08a3b1dc3e9d?auto=format&fit=crop&w=800&q=80',
    category: 'Boisé',
    notes: {
      top: ['Bergamote', 'Eucalyptus'],
      heart: ['Cèdre', 'Pin'],
      base: ['Mousse', 'Ambre']
    },
    ingredients: ['Huile essentielle de cèdre', 'Extrait de mousse', 'Bergamote bio'],
    volume: '50ml',
    bestseller: true
  },
  {
    id: '2',
    name: 'Jardin Secret',
    price: 95,
    description: 'Une composition florale délicate qui évoque les jardins secrets au petit matin, fraîche et envoûtante.',
    image: 'https://images.unsplash.com/photo-1507247937707-2be2e0e1c87f?auto=format&fit=crop&w=800&q=80',
    category: 'Floral',
    notes: {
      top: ['Citron vert', 'Cassis'],
      heart: ['Rose', 'Jasmin'],
      base: ['Musc blanc', 'Santal']
    },
    ingredients: ['Essence de rose de Damas', 'Jasmin sambac', 'Musc végétal'],
    volume: '50ml',
    bestseller: true
  },
  {
    id: '3',
    name: 'Terre Sacrée',
    price: 78,
    description: 'Un parfum puissant et terreux qui célèbre la beauté brute de la nature sauvage.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    category: 'Terreux',
    notes: {
      top: ['Galbanum', 'Poivre noir'],
      heart: ['Vétiver', 'Patchouli'],
      base: ['Cuir', 'Encens']
    },
    ingredients: ['Vétiver de Haïti', 'Patchouli de Singapour', 'Encens d\'Oman'],
    volume: '50ml'
  },
  {
    id: '4',
    name: 'Aube Dorée',
    price: 92,
    description: 'Une fragrance lumineuse qui capture la magie des premiers rayons du soleil sur les champs de lavande.',
    image: 'https://images.unsplash.com/photo-1535732750068-b2115e5e445a?auto=format&fit=crop&w=800&q=80',
    category: 'Aromatique',
    notes: {
      top: ['Lavande', 'Romarin'],
      heart: ['Thym', 'Sauge'],
      base: ['Vanille', 'Cèdre']
    },
    ingredients: ['Lavande de Provence', 'Romarin sauvage', 'Vanille bourbon'],
    volume: '50ml',
    bestseller: true
  }
];