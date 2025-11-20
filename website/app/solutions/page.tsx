import { Network, Cpu, Server, Wifi, Zap, Activity, BarChart3, ShieldCheck } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI & Intelligent Computing',
      desc: 'High-bandwidth, low-latency interconnects for massive AI clusters and GPU farms. Supporting 800G/1.6T speeds for next-gen model training.',
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'F5.5G / F6G Fixed Network',
      desc: 'Advanced PON access network solutions ensuring ultra-broadband connectivity for homes and enterprises.',
      icon: <Network className="w-10 h-10 text-blue-600" />,
    },
    {
      title: '5G-A / 6G Mobile',
      desc: 'Future-proof optical infrastructure for next-generation mobile networks, ensuring ultra-reliable low-latency communication (URLLC).',
      icon: <Wifi className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Supercomputing Connectivity',
      desc: 'Specialized solutions for national supercomputing centers requiring extreme throughput and synchronization.',
      icon: <Server className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-black">
            Future-Ready Solutions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">
            Empowering the digital era with cutting-edge optical infrastructure for AI, Cloud, and Telecom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="apple-card p-10 flex flex-col items-start text-left group hover:bg-blue-50/30 transition-colors"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                {sol.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-black">
                {sol.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg font-light">
                {sol.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Advantages */}
        <div className="border-t border-gray-100 pt-24">
            <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-black">AIDC Optical Transceiver Advantages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 text-center">
                    <Zap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-2 text-black">Ultra-Low Power</h3>
                    <p className="text-5xl font-bold text-black mb-2 tracking-tighter">30-70%</p>
                    <p className="text-sm text-gray-500">Lower consumption than competitors</p>
                </div>
                <div className="p-8 text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-2 text-black">Ultra-Low BER</h3>
                    <p className="text-5xl font-bold text-black mb-2 tracking-tighter">2-4 Orders</p>
                    <p className="text-sm text-gray-500">Magnitude improvement in Bit Error Rate</p>
                </div>
                <div className="p-8 text-center">
                    <Activity className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-2 text-black">Ultra-Low Latency</h3>
                    <p className="text-5xl font-bold text-black mb-2 tracking-tighter">30%</p>
                    <p className="text-sm text-gray-500">Lower latency for sensitive workloads</p>
                </div>
            </div>

            <div className="bg-[#f5f5f7] p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-black">
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                            Proven Performance
                        </h3>
                        <ul className="space-y-6 text-gray-600">
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                                <span><strong className="text-black">Sole Supplier:</strong> Designated as a single-source supplier for China's highest-level National Supercomputing Center.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                                <span><strong className="text-black">Superior to NVIDIA:</strong> Surpassed NVIDIA modules in Pre-FEC BER (&gt;2 orders magnitude) and write bandwidth (&gt;10 Gbps) in head-to-head tests.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                                <span><strong className="text-black">High Reliability:</strong> Factory yield &gt;98% and field failure rate &lt;0.5%.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">Power Consumption Comparison (200G SR4)</h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium text-gray-500">
                                        <span>Competitor (A/I/H)</span>
                                        <span>4.5W</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-400 w-[100%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium text-blue-600">
                                        <span>Huamao Technology</span>
                                        <span>2.4W</span>
                                    </div>
                                    <div className="h-3 bg-blue-50 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-[53%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
