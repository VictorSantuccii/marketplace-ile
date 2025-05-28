'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  instagramLink: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Abebé de Oxum',
    description: 'Espelho sagrado com cabo ornamentado em dourado, utilizado em oferendas e rituais para Oxum. Produzido artesanalmente com materiais nobres e acabamento brilhante.',
    category: 'ferramentas',
    image: '/abebe.jpg',
    instagramLink: 'https://www.instagram.com/atelie_omi/'
  },
  {
    id: 2,
    name: 'Colar de Contas de Oxóssi',
    description: 'Colar de contas verdes e vermelhas, 7 metros para firmeza. Tradicionalmente usado em rituais dedicados ao orixá caçador.',
    category: 'vestimentas',
    image: '/oxossicolares.jpg',
    instagramLink: 'https://www.instagram.com/atelie_scheillasol/'
  },
  {
    id: 3,
    name: 'Pano de Costa Bordado',
    description: 'Pano de costa bordado à mão com fios dourados, tamanho único. Peça exclusiva com símbolos sagrados.',
    category: 'vestimentas',
    image: '/pano-costa.jpg',
    instagramLink: 'https://www.instagram.com/atelie.oparun/'
  },
  {
    id: 4,
    name: 'Atabaque Rum',
    description: 'Atabaque rum artesanal em madeira de lei, couro bovino. Instrumento sagrado para toques de candomblé.',
    category: 'instrumentos',
    image: '/atabaque.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 5,
    name: 'Conjunto de Quartinhas',
    description: 'Conjunto com 7 quartinhas em cerâmica para orixás. Cada peça pintada à mão com símbolos tradicionais.',
    category: 'utensilios',
    image: '/quartinha.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 6,
    name: 'Pemba Branca',
    description: 'Caixa com 12 pembas brancas para escritos sagrados. Material essencial para cerimônias de fundamento.',
    category: 'consumiveis',
    image: '/pembabranca.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 7,
    name: 'Cabaça Sagrada',
    description: 'Cabaça trabalhada para uso em rituais de fundamento. Naturalmente seca e preparada por sacerdotes.',
    category: 'utensilios',
    image: '/cabaca.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 8,
    name: 'Livro de Cantigas',
    description: 'Coletânea de cantigas de Candomblé com CD incluso. Mais de 200 cantigas tradicionais com partituras.',
    category: 'literatura',
    image: '/cantigas.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 9,
    name: 'Ervas Sagradas Kit',
    description: 'Seleção de 7 ervas fundamentais para banhos e defumações. Coletadas e preparadas ritualisticamente.',
    category: 'consumiveis',
    image: '/ervas.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 10,
    name: 'Pulseira de Fibra de Dendê',
    description: 'Pulseira artesanal feita com fibra natural de dendê. Proteção e conexão com os orixás.',
    category: 'vestimentas',
    image: '/pulseira.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 11,
    name: 'Estatueta de Exu',
    description: 'Representação artística de Exu em madeira entalhada. Peça decorativa consagrada.',
    category: 'ferramentas',
    image: '/estatueta.jpeg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 12,
    name: 'Jogo de Búzios',
    description: 'Conjunto completo de 16 búzios para jogo de adivinhação. Preparado por babalorixá.',
    category: 'ferramentas',
    image: '/buzios.jpg',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  },
  {
    id: 13,
    name: 'Adê de Xangô',
    description: 'Coroa sagrada para Xangô em miçangas vermelhas e brancas. Peça artesanal feita à mão.',
    category: 'vestimentas',
    image: '/adexango.jpg',
    instagramLink: 'https://www.instagram.com/atelie_omi/'
  },
  {
    id: 14,
    name: 'Sistema de Ibejis',
    description: 'Conjunto completo para Ibejis com 2 imagens, roupas e utensílios. Ideal para assentamento.',
    category: 'ferramentas',
    image: '/assentamento.jpg',
    instagramLink: 'https://www.instagram.com/atelie_scheillasol/'
  },
  {
    id: 15,
    name: 'Incensário de Bronze',
    description: 'Incensário ritualístico em bronze com detalhes gravados. Para defumações e cerimônias.',
    category: 'utensilios',
    image: '/incensario.jpg',
    instagramLink: 'https://www.instagram.com/atelie.oparun/'
  },
  {
    id: 16,
    name: 'Agogô Sagrado',
    description: 'Instrumento musical ritualístico em metal. Essencial para toques de candomblé.',
    category: 'instrumentos',
    image: '/agogo.png',
    instagramLink: 'https://www.instagram.com/casadaspembas1/'
  }
];

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'ferramentas', name: 'Ferramentas' },
  { id: 'vestimentas', name: 'Vestimentas' },
  { id: 'instrumentos', name: 'Instrumentos' },
  { id: 'utensilios', name: 'Utensílios' },
  { id: 'consumiveis', name: 'Consumíveis' },
  { id: 'literatura', name: 'Literatura' },
  { id: 'artesanato', name: 'Artesanato' },
  { id: 'acessorios', name: 'Acessórios' },
  { id: 'decoracao', name: 'Decoração' },
  { id: 'utilidades', name: 'Utilidades' }
];

const sortOptions = [
  { id: 'name-asc', name: 'Nome (A-Z)' },
  { id: 'name-desc', name: 'Nome (Z-A)' },
];

export default function Marketplace() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('name-asc');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }

    switch (sortOption) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOption, searchTerm]);

  const handleAddToCart = (link: string) => {
    window.open(link, '_blank');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
          className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="w-12 h-12 bg-emerald-100 rounded-full"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-24 px-4 shadow-lg"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-emerald-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-serif"
          >
            Ilê Conecta
          </motion.h1>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Conectando tradição e espiritualidade através de itens sagrados
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-400 text-emerald-900 font-poppins font-light rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Explorar Itens Sagrados
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center"
        >
          <motion.svg 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-16 h-16 text-amber-300" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-300 rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-400 rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-white rounded-xl shadow-lg p-6 border border-emerald-100"
        >
          <h2 className="text-2xl font-semibold text-center mb-2 text-emerald-900 mb-6 font-serif">Encontre o que precisa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-900 mb-1">
                Buscar
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  id="search"
                  placeholder="O que você procura?"
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-1">
                Categoria
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <select
                  id="category"
                  className="w-full px-4 py-3 border font-poppins font-light border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>
            
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-900 mb-1">
                Ordenar por
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <select
                  id="sort"
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg font-poppins focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-800"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-md p-8"
          >
            <div className="w-24 h-24 mx-auto mb-6">
              <svg className="w-full h-full text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-emerald-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-emerald-700 mb-6">Tente ajustar seus filtros de busca</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setSortOption('name-asc');
              }}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Limpar filtros
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-50"
              >
                <div className="relative h-60 bg-emerald-100 group">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent flex items-end p-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2 bg-amber-400 font-poppins text-emerald-900 font-light rounded-lg"
                    >
                      Ver detalhes
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-emerald-900">{product.name}</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product.instagramLink)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      Comprar no Instagram
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedProduct && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="relative h-80 md:h-full rounded-lg overflow-hidden bg-emerald-100">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-emerald-900">{selectedProduct.name}</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {categories.find(c => c.id === selectedProduct.category)?.name}
                    </span>
                  </div>
                  <p className="text-emerald-700 mb-6">{selectedProduct.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-2">Detalhes</h3>
                    <ul className="space-y-2 text-emerald-700">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Produto artesanal feito à mão
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Consagrado ritualisticamente
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Envio seguro e discreto
                      </li>
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(selectedProduct.instagramLink)}
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Comprar no Instagram
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Você está sendo redirecionado para nosso Instagram!</span>
          </div>
        </motion.div>
      )}

      <footer className="bg-emerald-900 text-emerald-50 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-emerald-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </span>
              Ilê Conecta
            </h3>
            <p className="text-emerald-200 font-poppins mb-4">
              Conectando tradições e fortalecendo a comunidade de Candomblé.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'whatsapp'].map((social) => (
                <motion.a 
                  key={social}
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {categories.slice(1).map((category) => (
                <motion.li 
                  key={category.id}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-emerald-200 hover:text-amber-300 transition-colors">{category.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {['Sobre nós', 'Termos de serviço', 'Política de privacidade', 'FAQ'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-emerald-200 hover:text-amber-300 transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
           <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {categories.slice(1).map((category) => (
                <motion.li 
                  key={category.id}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-emerald-200 hover:text-amber-300 transition-colors">{category.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
         
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="not-italic text-emerald-200 space-y-2">
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contato@ileconecta.com" className="hover:text-amber-300 transition-colors">contato@ileconecta.com</a>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+5571987654321" className="hover:text-amber-300 transition-colors">(71) 98765-4321</a>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Itabuna - BA</span>
              </motion.div>
            </address>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-800 text-center text-emerald-300">
          <p>&copy; {new Date().getFullYear()} Ilê Conecta. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Respeitamos e valorizamos as tradições do Candomblé.</p>
        </div>
      </footer>
    </div>
  );
}