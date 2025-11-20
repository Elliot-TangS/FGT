import Image from 'next/image';
import { Globe, Award, Users, Zap, GraduationCap, Briefcase } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';
import StaticGlobe from '@/components/StaticGlobe';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-12 overflow-hidden">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 relative">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight text-black">
                Global Vision. <br/>
                <span className="text-gray-500">Localized Service.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-6 font-light">
                Founded and led by a team of professionals with experience in Fortune Global 500 companies, Shenzhen Huamao Technology Co., Ltd. provides comprehensive, end-to-end distribution services for cutting-edge ICT components.
            </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="container mx-auto px-6 mb-32">
          <div className="max-w-6xl mx-auto">
              <InteractiveMap>
                  <StaticGlobe />
              </InteractiveMap>
          </div>
      </section>

      {/* International Elite Team */}
      <section className="py-32 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-semibold mb-6 text-black">International Elite Team</h2>
                      <p className="text-gray-500 mb-8 leading-relaxed text-lg font-light">
                          Huamao Technology has a core team of 20+ members and global partners. Most members graduated from well-known universities and hold MBA or EMBA degrees, possessing a broad international outlook and strong cross-cultural management capabilities.
                      </p>
                      <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                              <div className="p-3 bg-white rounded-full shadow-sm">
                                <GraduationCap className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-black text-lg">Top Universities</h4>
                                  <p className="text-gray-500">Huazhong University of Science and Technology, Sichuan University, USTB, Arizona State University, The University of Sydney.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-4">
                              <div className="p-3 bg-white rounded-full shadow-sm">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-black text-lg">Fortune Global 500 Experience</h4>
                                  <p className="text-gray-500">Extensive experience in business operations with international enterprises such as Shell, IBM, and Hyundai Group.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="relative h-[500px] bg-white rounded-3xl shadow-sm p-12 flex flex-col items-center justify-center text-center">
                      <Users className="w-24 h-24 text-blue-600 mb-8 opacity-80" />
                      <h3 className="text-8xl font-bold text-black mb-4 tracking-tighter">20+</h3>
                      <p className="text-gray-500 uppercase tracking-widest font-medium">Core Team Members</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Technical Leadership - AIDC */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-semibold mb-6 text-black">Technical Leadership</h2>
                  <p className="text-gray-500 text-xl max-w-3xl mx-auto font-light">
                      Pioneering AIDC Optical Transceivers with ultra-low power consumption, latency, and bit error rates.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="p-10 bg-blue-50 rounded-3xl">
                      <h3 className="text-5xl font-bold text-blue-600 mb-4">30-70%</h3>
                      <p className="font-semibold text-black mb-2 text-lg">Lower Power Consumption</p>
                      <p className="text-gray-500">Compared to competing solutions, significantly reducing operational costs for data centers.</p>
                  </div>
                  <div className="p-10 bg-blue-50 rounded-3xl">
                      <h3 className="text-5xl font-bold text-blue-600 mb-4">&gt; 2 Orders</h3>
                      <p className="font-semibold text-black mb-2 text-lg">BER Improvement</p>
                      <p className="text-gray-500">Ultra-low Bit Error Rate improved by 2–4 orders of magnitude vs competitors.</p>
                  </div>
                  <div className="p-10 bg-blue-50 rounded-3xl">
                      <h3 className="text-5xl font-bold text-blue-600 mb-4">30%</h3>
                      <p className="font-semibold text-black mb-2 text-lg">Lower Latency</p>
                      <p className="text-gray-500">Industry-leading performance for latency-sensitive AI and supercomputing workloads.</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gray-50 rounded-3xl p-10">
                       <h3 className="text-2xl font-semibold mb-8 text-black">Performance Benchmark</h3>
                       <div className="space-y-8">
                           <div>
                               <div className="flex justify-between text-sm mb-2 font-medium text-gray-600">
                                   <span>Power Consumption (200G SR4)</span>
                                   <span className="text-green-600 font-bold">-47%</span>
                               </div>
                               <div className="relative w-full h-12 bg-gray-200 rounded-full overflow-hidden">
                                   <div className="absolute top-0 left-0 h-full bg-blue-600 flex items-center pl-4 text-white text-xs font-bold" style={{ width: '53%' }}>
                                       Ours: 2.4W
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-4 text-gray-500 text-xs font-bold">
                                       Competitor: 4.5W
                                   </div>
                               </div>
                           </div>
                           <div>
                               <div className="flex justify-between text-sm mb-2 font-medium text-gray-600">
                                   <span>Pre-FEC BER (Lower is better)</span>
                                   <span className="text-green-600 font-bold">100x Better</span>
                               </div>
                               <div className="relative w-full h-12 bg-gray-200 rounded-full overflow-hidden">
                                   <div className="absolute top-0 left-0 h-full bg-blue-600 flex items-center pl-4 text-white text-xs font-bold" style={{ width: '10%' }}>
                                       E-14
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-4 text-gray-500 text-xs font-bold">
                                       Competitor: E-12
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>
                  <div className="bg-gray-900 text-white rounded-3xl p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-8">Why Our Modules Stand Out</h3>
                      <ul className="space-y-6">
                          <li className="flex gap-4">
                              <div className="bg-blue-500/20 p-2 rounded-lg h-fit">
                                  <Award className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                  <strong className="block text-lg mb-1">National Supercomputing Standard</strong>
                                  <p className="text-gray-400">The only 200G optical transceiver in China meeting National Supercomputing Center requirements.</p>
                              </div>
                          </li>
                          <li className="flex gap-4">
                              <div className="bg-blue-500/20 p-2 rounded-lg h-fit">
                                  <Award className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                  <strong className="block text-lg mb-1">Outperforming Giants</strong>
                                  <p className="text-gray-400">In CAS tests, our 400G/800G modules surpassed NVIDIA in pre-FEC BER and write bandwidth.</p>
                              </div>
                          </li>
                          <li className="flex gap-4">
                              <div className="bg-blue-500/20 p-2 rounded-lg h-fit">
                                  <Award className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                  <strong className="block text-lg mb-1">Global Compatibility</strong>
                                  <p className="text-gray-400">Compatible with mainstream brands like NVIDIA, Huawei, and Cisco.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Strategic Partner */}
      <section className="container mx-auto px-6 py-32">
          <div className="bg-white border border-gray-100 shadow-sm p-12 md:p-16 rounded-3xl">
              <h2 className="text-3xl font-semibold mb-12 text-center text-black">Strategic Partner Profile</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                      <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                          Our strategic partner, founded in December 2017 and headquartered in Guangzhou, is a leading photonic technology company specializing in advanced opto-chips and optical transceivers for hyperscale AI computing clusters.
                      </p>
                      <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                          Guided by a team of Silicon Valley optoelectronics pioneers and award-winning scientists, the company operates a Silicon Valley Branch and an R&D Center in Idaho. They have achieved multiple world-first innovations in 200G–1.6T ultra-low-power modules.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Guangzhou HQ</span>
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Silicon Valley Branch</span>
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Idaho R&D Center</span>
                      </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold mb-6 text-black">Technology Leadership & Awards</h3>
                      <ul className="space-y-4">
                          {[
                              "Leading Optical Transceiver Enterprise (Guangdong Provincial Gov)",
                              "Founding Architect of Opto-Chip Innovation Initiative",
                              "National First Prize: 10th MOST China Innovation Competition",
                              "Top 10 Pre-IPO Leading High-tech Enterprises",
                              "Hidden Champion Enterprise in Guangzhou",
                              "Guangzhou's AI Enterprise with Highest Growth Potential"
                          ].map((award, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600">
                                  <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                  {award}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
