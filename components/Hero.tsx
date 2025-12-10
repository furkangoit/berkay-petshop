
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /* 
      Hero Section Wrapper
      - scroll-mt-24: Ensures sticky header doesn't cover content when scrolled to.
      - relative: Allows absolute positioning of background elements.
    */
    <div id="home" className="relative bg-brand-50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          {/* Decorative Polygon SVG (Visible only on Large screens) */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-brand-50 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* Text Content */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Küçük Dostlarınız İçin</span>{' '}
                <span className="block text-brand-600 xl:inline">En İyisi Burada</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Premium mamalar, şık aksesuarlar ve profesyonel bakım hizmetleri. Evcil hayvanınızın mutluluğu bizim önceliğimiz.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#products"
                    onClick={(e) => handleScroll(e, '#products')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg transition-all"
                  >
                    Alışverişe Başla
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-700 bg-brand-100 hover:bg-brand-200 md:py-4 md:text-lg transition-all"
                  >
                    Bize Ulaşın
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Right Side Image (Absolute positioned on desktop) */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80"
          alt="Happy dog"
          loading="lazy"
          onError={(e) => {
            // Fallback görsel
            (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1600";
          }}
        />
        {/* Gradient overlay for mobile text readability if needed (currently transparent to brand-50) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent lg:hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
