import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1: Philosophy (Hero-style, dark) */}
      <section className="py-24 bg-plum-radial text-white border-b border-gold/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 glow-text"
          >
            We build systems, not tools.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-lavender font-light leading-relaxed max-w-2xl mx-auto tracking-wide"
          >
            NodeArc AI designs systems that manage your leads, follow up automatically, and help you convert more customers without increasing your workload.
          </motion.div>
        </div>
      </section>

      {/* Section 2: Core Focus (white) */}
      <section className="py-24 bg-violet-white text-plum">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-display font-bold tracking-tight mb-8">What you get:</h2>
              <ul className="space-y-4 text-base text-plum/60 font-light">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span>Instant replies to every customer message</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span>Automatic lead capture and tracking</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span>Follow-ups handled on autopilot</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span>More sales with less manual effort</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-10 border border-plum/5 shadow-sm"
            >
              <p className="text-lg text-plum/70 leading-relaxed font-light">
                We believe automation should feel <strong>invisible, dependable, and boring</strong> — because that’s how real infrastructure works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach (dark) */}
      <section className="py-24 bg-plum text-white border-y border-gold/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight glow-text">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Infrastructure First",
                desc: "Automation as infrastructure, not just features."
              },
              {
                title: "Reliability",
                desc: "Reliability over experimentation. Every system is built to work without supervision."
              },
              {
                title: "Long-term Value",
                desc: "Long-term operational thinking, not short-term hacks."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="text-center space-y-3 group"
              >
                <h3 className="text-lg font-display font-bold text-white group-hover:text-gold transition-colors duration-500">{item.title}</h3>
                <p className="text-lavender text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Details & Working Together (white) */}
      <section className="py-24 bg-violet-white text-plum">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-display font-bold tracking-tight">Company Details</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-plum/40 mb-1">Locations</h4>
                <p className="text-base font-light">Pune · Chhatrapati Sambhaji Nagar, India</p>
              </div>
              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-plum/40 mb-1">Email</h4>
                <a href="mailto:enquiry@nodearcai.com" className="text-base font-light hover:text-gold transition-colors border-b border-plum/10 pb-1">enquiry@nodearcai.com</a>
              </div>
              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-plum/40 mb-1">Phone</h4>
                <p className="text-base font-light">+91 7769004033</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-plum text-white p-10 md:p-12 flex flex-col justify-center border border-gold/10 shadow-[0_0_40px_rgba(110,42,111,0.15)]"
          >
            <h2 className="text-2xl font-display font-bold tracking-tight mb-6 text-gold">How to Work With Us</h2>
            <p className="text-lavender font-light leading-relaxed mb-8 text-base">
              If automation is becoming important for your business, the next step is a structured walkthrough of how these systems would apply to you.
            </p>
            <p className="text-lavender/40 text-[10px] font-mono uppercase tracking-widest">
              You can request a demo or discussion directly from the website.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;