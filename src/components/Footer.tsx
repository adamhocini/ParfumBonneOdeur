import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold">Essence Naturelle</span>
            </div>
            <p className="text-stone-300 text-sm">
              Révélez votre essence naturelle avec nos parfums artisanaux authentiques, 
              créés avec passion et respect de la nature.
            </p>
            <div className="flex space-x-4">
              <button className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-stone-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-stone-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Boutique</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Produits */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Parfums</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Parfums Floraux</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Parfums Boisés</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Parfums Terreux</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Parfums Aromatiques</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Nouveautés</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <p>123 Rue de la Nature<br />75001 Paris</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@essencenaturelle.fr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-400">
          <p>&copy; 2024 Essence Naturelle. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;