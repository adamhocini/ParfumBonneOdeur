import React from 'react';
import { Leaf, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1516280440614-bb2265816434?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Notre Histoire</h1>
          <p className="text-xl text-white/90">
            L'aventure d'une passion pour les parfums naturels authentiques
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                Une Passion Transmise de Génération en Génération
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Essence Naturelle est née d'une passion familiale pour les parfums authentiques. 
                  Tout a commencé en 1987 quand Marie Delacroix, parfumeuse de formation, 
                  décida de créer ses propres fragrances dans un petit atelier de Grasse.
                </p>
                <p>
                  Animée par l'amour de la nature et le respect des traditions artisanales, 
                  elle développa une approche unique : utiliser exclusivement des ingrédients 
                  naturels sourcés directement auprès de producteurs locaux.
                </p>
                <p>
                  Aujourd'hui, sa fille Amélie perpétue cette tradition d'excellence, 
                  alliant savoir-faire ancestral et innovations durables pour créer 
                  des parfums qui racontent l'histoire de la nature.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531648722891-07f1f8faad0d?auto=format&fit=crop&w=800&q=80"
                alt="Atelier de parfumerie"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Nos Engagements</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Chaque décision que nous prenons est guidée par nos valeurs fondamentales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Naturel</h3>
              <p className="text-stone-600">
                100% d'ingrédients naturels, sans produits chimiques de synthèse
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Artisanal</h3>
              <p className="text-stone-600">
                Création manuelle dans nos ateliers français selon des méthodes traditionnelles
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Éthique</h3>
              <p className="text-stone-600">
                Commerce équitable et respect des producteurs locaux
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Durable</h3>
              <p className="text-stone-600">
                Emballages recyclables et processus de production éco-responsables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Notre Processus de Création</h2>
            <p className="text-xl text-stone-600">
              De la sélection des matières premières au flacon final
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Sélection</h3>
              <p className="text-stone-600">
                Choix minutieux des meilleures matières premières naturelles 
                auprès de producteurs de confiance
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Création</h3>
              <p className="text-stone-600">
                Élaboration artisanale de chaque fragrance par nos maîtres parfumeurs 
                dans nos ateliers de Grasse
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Finition</h3>
              <p className="text-stone-600">
                Conditionnement soigneux dans des flacons en verre recyclé 
                avec des étiquettes en papier ensemencé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Notre Équipe</h2>
            <p className="text-xl text-stone-600">
              Les artisans passionnés qui donnent vie à nos parfums
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556228724-4fe969e2423d?auto=format&fit=crop&w=400&q=80"
                alt="Amélie Delacroix"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Amélie Delacroix</h3>
              <p className="text-emerald-600 mb-3">Maître Parfumeur</p>
              <p className="text-stone-600 text-sm">
                Héritière de la tradition familiale, Amélie crée des fragrances 
                uniques depuis plus de 15 ans.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1567415126090-eae7a38652ae?auto=format&fit=crop&w=400&q=80"
                alt="Thomas Moreau"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Thomas Moreau</h3>
              <p className="text-emerald-600 mb-3">Responsable Qualité</p>
              <p className="text-stone-600 text-sm">
                Garant de l'excellence de nos produits, Thomas supervise 
                chaque étape de la production.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=400&q=80"
                alt="Sophie Dubois"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Sophie Dubois</h3>
              <p className="text-emerald-600 mb-3">Responsable Sourcing</p>
              <p className="text-stone-600 text-sm">
                Sophie parcourt le monde pour dénicher les plus belles 
                matières premières naturelles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;