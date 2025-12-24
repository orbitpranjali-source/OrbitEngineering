import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LogoLoader from './components/LogoLoader';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProductInfoPage from './pages/ProductInfoPage';
import FAQPage from './pages/FAQPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ClientsPage from './pages/ClientsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { buildProductsData, flattenProducts, type ProductItem } from './data/products';
import { RAW_SUB_PRODUCTS } from './data/rawProducts';

type PageType =
  | 'home'
  | 'projects'
  | 'projects:all'
  | 'projects:completed'
  | 'projects:ongoing'
  | 'about'
  | 'services'
  | 'products'
  | 'clients'
  | 'faq'
  | 'team'
  | 'contact'
  | 'product-info'
  | `product-info:${string}`
  | `product:${string}`;

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  // Build a product index (slug -> product) based on raw products data
  const productIndex = useMemo(() => {
    const groups = buildProductsData(RAW_SUB_PRODUCTS as unknown as Array<{
      category: string;
      items: Array<{ name: string; image: string; paragraphs?: string[]; bullets?: string[] }>;
    }>);
    const flat = flattenProducts(groups);
    return flat.reduce<Record<string, ProductItem>>((acc, p) => {
      acc[p.slug] = p;
      return acc;
    }, {});
  }, []);

  const handleNavigate = (page: string) => {
    let target = page as PageType;
    // Support anchors like "contact#contact-form"
    if (page.includes('#')) {
      const [base, anchor] = page.split('#');
      target = base as PageType;
      setPendingAnchor(anchor || null);
    } else {
      setPendingAnchor(null);
    }
    if (target === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // total 1.5s sequence (includes 0.3s fade-in + drop + short fade-out)
    setTimeout(() => {
      setCurrentPage(target);
      setIsTransitioning(false);
      if (pendingAnchor) {
        // Give React a tick to render the new page before scrolling
        setTimeout(() => {
          const el = document.getElementById(pendingAnchor!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          setPendingAnchor(null);
        }, 50);
      }
    }, 2200);
  };

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  const renderPage = () => {
    const isProjects = currentPage.startsWith('projects');
    const projectFilter = isProjects
      ? (currentPage.split(':')[1] as 'all' | 'completed' | 'ongoing' | undefined)
      : undefined;
    const isProductInfo = currentPage.startsWith('product-info:');
    if (isProductInfo) {
      const variant = currentPage.split(':')[1];
      return <ProductInfoPage variant={variant} onNavigate={handleNavigate} />;
    }
    const isProduct = currentPage.startsWith('product:');
    if (isProduct) {
      const slug = currentPage.split(':')[1];
      const p = productIndex[slug];
      if (!p) return <ProductsPage />;
      return (
        <ProductDetailPage
          productName={p.name}
          productImage={p.image}
          productDescription={p.paragraphs}
          bullets={p.bullets}
          onBack={() => handleNavigate('products')}
        />
      );
    }
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'projects':
      case 'projects:all':
      case 'projects:completed':
      case 'projects:ongoing':
        return <ProjectsPage initialFilter={projectFilter ?? 'all'} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'clients':
        return <ClientsPage />;
      case 'product-info':
        return <ProductInfoPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<ClientsPage />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header onNavigate={handleNavigate} currentPage={currentPage} />
              <div className="relative flex-grow">
                <LogoLoader isVisible={isTransitioning} />
                <main className={`flex-grow ${isTransitioning ? 'pointer-events-none select-none' : ''}`}>
                  <div className="animate-fade-in animate-slide-up">
                    {renderPage()}
                  </div>
                </main>
              </div>
              <Footer onNavigate={handleNavigate} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
