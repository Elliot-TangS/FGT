import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-200 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="relative h-12 w-48 mb-6">
              <Image src="/logo/logo.png" alt="Huamao Technology" fill className="object-contain" />
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Your Trustworthy Global ICT Infrastructure Supply Partner. Connecting the world with cutting-edge optical technology.
            </p>
            <div className="flex flex-col gap-2 text-gray-500">
               <a href="mailto:info@flygtl-ict.com" className="flex items-center gap-2 hover:text-black transition-colors">
                 <Mail className="w-4 h-4" /> info@flygtl-ict.com
               </a>
               <div className="flex items-center gap-2">
                 <Phone className="w-4 h-4" /> HK: +852 609 0287
               </div>
               <div className="flex items-center gap-2">
                 <Phone className="w-4 h-4" /> USA: +1 (223) 267-7777
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-gray-500 hover:text-black transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="text-gray-500 hover:text-black transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Global Hubs</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Hong Kong (HQ)</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Shenzhen • Chengdu</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Phoenix, USA</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Brisbane, Australia</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Selangor, Malaysia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Shenzhen Huamao Technology Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
