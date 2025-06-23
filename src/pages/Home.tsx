import React from 'react';
import { ArrowRight, Leaf, Award, Heart, ShoppingBag } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onPageChange }) => {
  const { products } = useProducts();
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Révélez votre<br />
            <span className="text-emerald-400">Essence Naturelle</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos parfums artisanaux authentiques, créés avec passion 
            à partir d'ingrédients naturels d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('shop')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Découvrir la boutique</span>
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-medium border border-white/20"
            >
              Notre histoire
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Chaque parfum raconte une histoire, celle de la nature 
              et de l'artisanat français d'exception.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">100% Naturel</h3>
              <p className="text-stone-600">
                Nos parfums sont élaborés exclusivement à partir d'ingrédients 
                naturels soigneusement sélectionnés.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Artisanat Français</h3>
              <p className="text-stone-600">
                Chaque fragrance est créée à la main dans nos ateliers 
                français selon des méthodes traditionnelles.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Éco-responsable</h3>
              <p className="text-stone-600">
                Nous nous engageons pour un parfum respectueux de l'environnement 
                et des générations futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-4">Nos Best-sellers</h2>
              <p className="text-xl text-stone-600">
                Les fragrances plébiscitées par notre communauté
              </p>
            </div>
            <button 
              onClick={() => onPageChange('shop')}
              className="hidden md:flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              <span>Voir tous les produits</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-stone-600">
              Les témoignages de nos clients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="text-stone-800 font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1513001900722-370f803f4986?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à découvrir votre signature olfactive ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laissez-vous guider par nos experts pour trouver le parfum qui vous ressemble.
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;