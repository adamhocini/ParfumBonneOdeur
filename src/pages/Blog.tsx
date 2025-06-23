import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1541648709927-4040f43b4a26?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Notre Blog</h1>
          <p className="text-xl text-white/90">
            Découvrez l'univers des parfums naturels et nos conseils d'experts
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Article à la Une</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-stone-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-stone-800 leading-tight">
                {blogPosts[0].title}
              </h3>
              
              <p className="text-stone-600 text-lg leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              
              <button className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                <span>Lire l'article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Derniers Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-stone-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-stone-800 mb-3 hover:text-emerald-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-stone-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Catégories</h2>
            <p className="text-stone-600">
              Explorez nos articles par thème
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Conseils Parfum</h3>
              <p className="text-stone-600 text-sm">Comment choisir et porter votre parfum</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Matières Premières</h3>
              <p className="text-stone-600 text-sm">Découvrez nos ingrédients naturels</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Bien-être</h3>
              <p className="text-stone-600 text-sm">Parfums et rituels de bien-être</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Coulisses</h3>
              <p className="text-stone-600 text-sm">Dans les secrets de nos ateliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Restez informé de nos actualités
          </h2>
          <p className="text-stone-600 mb-8">
            Recevez nos derniers articles et conseils parfum directement dans votre boîte mail
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;