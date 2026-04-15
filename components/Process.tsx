import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar
} from 'recharts';
import { TrendingUp, Users, Zap, CheckCircle } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 75000 },
  { month: 'Jun', revenue: 98000 },
];

const liveLeads = [
  { id: 1, name: "Sarah J.", source: "WhatsApp", status: "Hot Lead", time: "Just now" },
  { id: 2, name: "Michael R.", source: "Website", status: "Converted", time: "2m ago" },
  { id: 3, name: "David K.", source: "Instagram", status: "Hot Lead", time: "5m ago" },
  { id: 4, name: "Elena W.", source: "WhatsApp", status: "Follow-up Sent", time: "12m ago" },
];

const Process: React.FC = () => {
  const [activeLead, setActiveLead] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLead((prev) => (prev + 1) % liveLeads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-plum text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gold/60 mb-4 block">The End Experience</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight glow-text mb-6">Your Business Command Center</h2>
          <p className="text-lg text-lavender font-light max-w-2xl mx-auto">This is what happens when NodeArc AI takes over. You stop chasing leads and start managing growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Growth Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/[0.02] border border-gold/10 p-8 rounded-sm glass-card"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1">Revenue Growth</h3>
                <p className="text-xs text-lavender/40 font-mono uppercase tracking-widest">Post-Automation Performance</p>
              </div>
              <div className="flex items-center gap-2 text-gold bg-gold/5 px-4 py-2 rounded-full border border-gold/10">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">+118%</span>
              </div>
            </div>
            
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#ffffff20" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#ffffff20" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A0F1F', border: '1px solid #D4AF3720', borderRadius: '2px' }}
                    itemStyle={{ color: '#FFFFFF', fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#D4AF37" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRev)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Live Activity Feed */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-gold/10 p-8 rounded-sm glass-card h-full"
            >
              <h3 className="text-xl font-display font-bold text-white mb-8">Live Activity</h3>
              
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {liveLeads.map((lead, i) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: i === activeLead ? 1 : 0.3,
                        scale: i === activeLead ? 1.02 : 1,
                        x: i === activeLead ? 5 : 0
                      }}
                      className={`p-4 border-l-2 transition-all duration-500 ${i === activeLead ? 'border-gold bg-gold/5' : 'border-white/5'}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-bold text-white">{lead.name}</span>
                        <span className="text-[9px] font-mono text-lavender/40 uppercase tracking-widest">{lead.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${lead.status === 'Converted' ? 'bg-green-500/10 text-green-400' : 'bg-gold/10 text-gold'}`}>
                          {lead.status}
                        </span>
                        <span className="text-[10px] text-lavender/60">via {lead.source}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-gold">42</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-lavender/40">Hot Leads Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-white">89%</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-lavender/40">Response Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, label: "Leads Captured", value: "1,284", sub: "+24% this week" },
            { icon: Zap, label: "AI Interactions", value: "8,402", sub: "Instant responses" },
            { icon: CheckCircle, label: "Conversions", value: "312", sub: "High intent leads" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 bg-white/[0.01] border border-white/5 rounded-sm"
            >
              <div className="w-12 h-12 bg-gold/5 rounded-full flex items-center justify-center border border-gold/10">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-gold/60">{stat.label}</div>
                <div className="text-[9px] text-lavender/30 mt-1">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;