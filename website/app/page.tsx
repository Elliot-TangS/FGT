'use client';

import Hero from '@/components/Hero';
import InteractiveMap from '@/components/InteractiveMap';
import GlobeScene from '@/components/GlobeScene';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, DollarSign, Clock, Wrench, Truck } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* 3D Globe Scene - Fixed Background that transitions */}
      <GlobeScene targetRef={mapContainerRef} />

      <Hero />

      {/* Global Vision, Localized Service (Interactive Map Section) */}
      <section className="py-20 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">Global Operations</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
              Headquartered in Hong Kong, we operate regional centers in Shenzhen and Chengdu, with overseas offices in Malaysia, Poland, Russia, the USA, and Australia to serve you better.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
             {/* Pass the ref to the placeholder inside InteractiveMap */}
             <InteractiveMap ref={mapContainerRef} />
          </div>
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section className="py-20 bg-[#f5f5f7] relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">Strategic Innovation Partner</h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
                 Collaborating with a leading photonic technology company specializing in advanced opto-chips and optical transceivers for hyperscale AI computing.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-semibold mb-4 text-blue-600">R&D Leadership</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Guided by Silicon Valley optoelectronics pioneers and award-winning scientists. The company holds a strong track record in cutting-edge optical chips, including multiple world-first innovations.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-semibold mb-4 text-blue-600">Advanced Portfolio</h3>
                 <p className="text-gray-500 leading-relaxed">
                    A full portfolio of 200G–1.6T ultra-low-power modules for AI data centers, national supercomputing centers, and cloud data centers.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-semibold mb-4 text-blue-600">Industry Recognition</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Ranked 1st among 15,500+ enterprises in the China Innovation & Entrepreneurship Competition and recognized as a Hidden Champion Enterprise in Guangzhou.
                 </p>
              </div>
           </div>
           
           {/* Tech Partners Logos or Text List */}
           <div className="text-center">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-6">Joint Technical Cooperation With</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-500 font-medium">
                 <span>Hamamatsu</span>
                 <span>Samsung Semiconductor</span>
                 <span>Semtech</span>
                 <span>China Unicom Research Institute</span>
                 <span>National Supercomputing Center (NSCC)</span>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us - Apple Style Cards */}
      <section className="py-20 bg-[#f5f5f7] relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">Why Choose Us</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                  Excellence in every connection.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {[
                   { icon: <ShieldCheck />, title: 'Reliable Certified Products', desc: 'Sourced from authorized original manufacturers. ISO, RoHS, UL, FCC compliant.' },
                   { icon: <DollarSign />, title: 'Competitive Pricing', desc: 'Optimized costs through global supply chain economies of scale.' },
                   { icon: <Clock />, title: 'Fast-Responsive Service', desc: 'Localized support from our five global regional offices.' },
                   { icon: <Wrench />, title: 'Professional Support', desc: 'Comprehensive technical guidance for compliance and integration.' },
                   { icon: <Truck />, title: 'Stable Supply Chain', desc: 'Long-term strategic cooperation ensuring business continuity.' }
               ].map((item, i) => (
                   <div key={i} className="apple-card p-6 flex flex-col items-center text-center bg-white hover:bg-white/80 transition-colors">
                       <div className="w-10 h-10 text-blue-600 mb-4">
                           {item.icon}
                       </div>
                       <h3 className="text-base font-semibold mb-2 text-black">{item.title}</h3>
                       <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                   </div>
               ))}
           </div>
        </div>
      </section>

      {/* Core Products & Solutions */}
      <section className="py-20 bg-white relative z-10">
          <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-black">Core Products & Solutions</h2>
                      <p className="text-gray-500 text-lg">Comprehensive ICT infrastructure components.</p>
                  </div>
                  <Link href="/products" className="hidden md:flex items-center gap-2 text-blue-600 hover:underline font-medium">
                      View All Products <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { 
                          title: 'Optical Modules', 
                          subtitle: '1G–1.6T Series',
                          desc: 'Compatible with NVIDIA, Huawei, Cisco. For AI/DC & 5G.', 
                          image: '/images/optical module-1.png' 
                      },
                      { 
                          title: 'Network System', 
                          subtitle: 'Switches & Routers',
                          desc: 'Flexible network architecture solutions.', 
                          image: '/images/optical module-4.png' 
                      },
                      { 
                          title: 'Storage & Computing', 
                          subtitle: 'SSD & GPU',
                          desc: 'High-performance accelerators for AI & Big Data.', 
                          image: '/images/optical module-2.png' 
                      },
                      { 
                          title: 'Other Components', 
                          subtitle: 'CPUs & ICs',
                          desc: 'Intel processors, RAID controllers, and core chips.', 
                          image: '/images/optical module-5.png' 
                      }
                  ].map((item, i) => (
                       <Link href="/products" key={i} className="group apple-card p-6 flex flex-col bg-gray-50 border border-gray-100 hover:border-blue-100 transition-all h-full">
                          <div className="mb-6 relative h-48 w-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                              <Image 
                                src={item.image} 
                                alt={item.title}
                                fill
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                              />
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold text-black mb-1">{item.title}</h3>
                              <p className="text-blue-600 text-sm font-medium mb-2">{item.subtitle}</p>
                              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                          </div>
                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-blue-600 text-sm font-medium opacity-80 group-hover:opacity-100">
                              Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                      </Link>
                  ))}
              </div>
              
              <div className="mt-12 text-center md:hidden">
                  <Link href="/products" className="inline-flex items-center gap-2 text-blue-600 font-medium">
                      View All Products <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Partners - Minimalist */}
      <section className="py-20 bg-[#f5f5f7] relative z-10">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-xl font-semibold mb-12 text-gray-400">Trusted by Industry Leaders</h2>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                  {['Partner-huawei.png', 'Partner-intel.png', 'Broadcom.png', 'NVIDIA.png', 'Mellanox.png'].map((logo) => (
                      <div key={logo} className="relative h-10 w-28 grayscale hover:grayscale-0 transition-all duration-300">
                          <Image src={`/images/${logo}`} alt="Partner" fill className="object-contain" />
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA - Simple & Direct */}
      <section className="py-32 bg-white text-center relative z-10">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight text-black">Ready to upgrade?</h2>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
                  Contact our global team today for premium optical solutions tailored to your needs.
              </p>
              <Link href="/contact" className="apple-button px-10 py-4 text-lg shadow-lg shadow-blue-600/20">
                  Get in Touch
              </Link>
          </div>
      </section>
    </main>
  );
}
