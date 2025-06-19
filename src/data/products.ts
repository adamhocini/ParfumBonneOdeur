import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Essence de Forêt',
    price: 89,
    description: 'Un voyage olfactif au cœur de la forêt primordiale, où les notes de cèdre et de mousse se mêlent harmonieusement.',
    image: 'https://images.pexels.com/photos/6621374/pexels-photo-6621374.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6621045/pexels-photo-6621045.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6621092/pexels-photo-6621092.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6621448/pexels-photo-6621448.jpeg?auto=compress&cs=tinysrgb&w=800',
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