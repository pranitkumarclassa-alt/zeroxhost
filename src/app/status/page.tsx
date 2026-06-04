'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Activity, CheckCircle2, AlertCircle, Clock, Server, Globe, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { name: 'Website & API', status: 'operational', uptime: '100%' },
  { name: 'Client Portal', status: 'operational', uptime: '99.99%' },
  { name: 'Support System', status: 'operational', uptime: '100%' },
  { name: 'Payment Gateway', status: 'operational', uptime: '100%' },
];

const nodes = [
  { name: 'IN-MUM-01', location: 'Mumbai, India', type: 'AMD Ryzen 9', status: 'operational', load: '12%' },
  { name: 'IN-MUM-02', location: 'Mumbai, India', type: 'Intel e5 v4', status: 'operational', load: '45%' },
  { name: 'IN-DEL-01', location: 'Delhi, India', type: 'AMD Ryzen 9', status: 'operational', load: '28%' },
  { name: 'US-NYC-01', location: 'New York, USA', type: 'Intel Xeon', status: 'operational', load: '15%' },
  { name: 'EU-FRA-01', location: 'Frankfurt, Germany', type: 'AMD EPYC', status: 'maintenance', load: '0%' },
];

export default function StatusPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="System Status"
          title="Live Network"
          subtitle="Monitoring"
          description="Real-time status updates for our global infrastructure, nodes, and core services."
          icon={Activity}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-5xl mx-auto">
            {/* Overall Status Banner */}
            <div className="bg-green-600/10 border border-green-500/20 p-8 rounded-[2.5rem] flex items-center justify-between mb-16 backdrop-blur-3xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">All Systems Operational</h2>
                  <p className="text-green-500/80 font-bold text-sm">Last checked 2 minutes ago</p>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Global Uptime</div>
                <div className="text-2xl font-black text-white">99.99%</div>
              </div>
            </div>

            {/* Core Services */}
            <div className="mb-24">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                <Globe className="text-blue-500" />
                Core Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div key={service.name} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-all">
                    <div>
                      <h4 className="text-white font-bold mb-1">{service.name}</h4>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{service.uptime} Uptime</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Operational</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compute Nodes */}
            <div>
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                <Server className="text-blue-500" />
                Compute Nodes
              </h3>
              <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl">
                <div className="grid grid-cols-4 p-8 border-b border-white/5 bg-white/[0.01] text-[10px] font-black uppercase tracking-widest text-gray-500">
                  <div>Node Name</div>
                  <div>Location</div>
                  <div className="text-center">Current Load</div>
                  <div className="text-right">Status</div>
                </div>
                <div className="divide-y divide-white/5">
                  {nodes.map((node) => (
                    <div key={node.name} className="grid grid-cols-4 p-8 items-center hover:bg-white/[0.01] transition-colors">
                      <div>
                        <div className="text-white font-bold">{node.name}</div>
                        <div className="text-[10px] text-gray-500 font-medium">{node.type}</div>
                      </div>
                      <div className="text-gray-400 text-sm font-bold">{node.location}</div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${parseInt(node.load) > 80 ? 'bg-red-500' : 'bg-blue-500'}`} 
                            style={{ width: node.load }} 
                          />
                        </div>
                        <span className="text-[10px] font-black text-gray-500">{node.load}</span>
                      </div>
                      <div className="flex items-center justify-end gap-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${node.status === 'operational' ? 'text-green-500' : 'text-yellow-500'}`}>
                          {node.status}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${node.status === 'operational' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Maintenance Logs */}
            <div className="mt-24">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                <Clock className="text-blue-500" />
                Recent Maintenance
              </h3>
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 border-l-4 border-l-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-bold text-lg">Scheduled Network Optimization - EU-FRA-01</h4>
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[8px] font-black uppercase tracking-widest">In Progress</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    We are currently performing scheduled maintenance on our Frankfurt node to upgrade network switches and improve throughput.
                  </p>
                  <p className="text-gray-600 text-xs font-bold">June 3, 2026 - 10:00 UTC</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 border-l-4 border-l-green-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-bold text-lg">Database Patching - Mumbai Region</h4>
                    <span className="px-3 py-1 rounded-full bg-green-600/10 border border-green-500/20 text-green-500 text-[8px] font-black uppercase tracking-widest">Completed</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Security patches successfully applied to core database clusters. No downtime was experienced.
                  </p>
                  <p className="text-gray-600 text-xs font-bold">June 1, 2026 - 22:30 UTC</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
