import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CategoryProps {
  title: string;
  products: string[];
}

export default function ProductsPage() {
  const categories: CategoryProps[] = [
    {
      title: '1.6T / 800G High-Speed',
      products: ['1.6T OSFP DR8', '1.6T CPO', '800G OSFP SR8', '800G OSFP DR8', 'Ultra-Low Power 800G Transceiver'],
    },
    {
      title: '400G / 200G Data Center',
      products: ['400G QSFP-DD SR8', '400G QSFP-DD DR4', '400G QSFP-DD FR4', '400G OSFP DR4', '400G OSFP FR4', 'Ultra-Low Power 400G Transceiver', '200G QSFP56 SR4', '200G QSFP56 FR4', '200G QSFP56 AOC'],
    },
    {
      title: '100G Transceiver (QSFP28)',
      products: ['100G QSFP28 SR4', '100G QSFP28 LR4 (10KM)', '100G QSFP28 CWDM4 (2KM)', '100G QSFP28 ZR4 (80KM)', '100G QSFP28 AOC (<100M)'],
    },
    {
      title: '40G Transceiver (QSFP+)',
      products: ['40G QSFP+ SR4', '40G QSFP+ LR4 (10KM)', '40G QSFP+ CWDM4 (40KM)', '40G QSFP+ AOC (<100M)'],
    },
    {
      title: '25G Transceiver (SFP28)',
      products: ['25G SFP28 SR (100M)', '25G SFP28 LR (10KM)', '25G SFP28 ER (40KM)', '25G SFP28 AOC (<100M)'],
    },
    {
      title: '10G Transceiver (SFP+)',
      products: ['10G SFP+ SR (300M)', '10G SFP+ LR (10KM)', '10G SFP+ ER (40KM)', '10G SFP+ ZR (80KM)'],
    },
    {
      title: 'PON Optical Transceiver',
      products: ['10G EPON OLT/ONU', '10G Combo PON OLT C++', '10G Combo PON OLT C+\'/D1/D2/E1/E2', 'GPON OLT', 'XGS PON OLT'],
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-black">Product Portfolio</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">
            Comprehensive range of high-speed optical transceivers from 1.6T to 10G, compatible with mainstream brands like NVIDIA, Huawei, and Cisco.
          </p>
        </div>

        <div className="space-y-32 mb-32">
          {categories.map((category, idx) => (
            <div key={category.title} className="group">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Category Header & Image */}
                <div className="lg:w-1/3 sticky top-32">
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-50 mb-6 border border-gray-100 shadow-sm">
                     <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                        <Image
                          src="/images/optical module-1.png"
                          alt={category.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                     </div>
                  </div>
                  <h2 className="text-3xl font-semibold text-black mb-4">{category.title}</h2>
                  <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    View Specifications <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Grid */}
                <div className="lg:w-2/3 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.products.map((product) => (
                      <div key={product} className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all duration-300 flex items-center justify-between group/item cursor-pointer hover:border-blue-100">
                        <span className="font-medium text-gray-700 group-hover/item:text-black transition-colors">{product}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {idx !== categories.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
