
import React from 'react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Pet Kuaför",
      description: "Profesyonel traş, banyo ve tırnak bakımı ile dostlarınız hep şık görünsün.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Premium Mama",
      description: "Dünyaca ünlü markaların en taze ve besleyici mamaları raflarımızda.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Veteriner Danışmanlık",
      description: "Uzmanlarımızdan beslenme ve temel sağlık konularında ücretsiz tavsiyeler.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
  ];

  return (
    <div id="services" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Hizmetlerimiz</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sadece En İyisi
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Berkay Petshop olarak sadece ürün satmıyoruz, dostlarınızın yaşam kalitesini artırıyoruz.
          </p>
        </div>

        <div className="mt-12">
          {/* 
             Grid Layout System:
             - Default: Stacked (space-y-10)
             - md (Tablet+): 3 columns (grid-cols-3)
          */}
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.id} className="relative group p-6 rounded-xl hover:bg-brand-50 transition-colors duration-300">
                {/* Icon Container with absolute positioning relative to the card */}
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white group-hover:bg-brand-600 transition-colors">
                  {service.icon ? service.icon : (
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                  )}
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{service.title}</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {service.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;