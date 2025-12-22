import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1: Philosophy (Hero-style, dark) */}
      <section className="py-48 bg-dark text-white border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-12"
          >
            We build systems, not tools.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto tracking-wide"
          >
            NodeArc AI is a premium AI automation company focused on building <strong>reliable, production-grade automation systems</strong> for businesses. We don’t experiment on live operations. We design systems that replace manual work, reduce errors, and scale reliably.
          </motion.div>
        </div>
      </section>

      {/* Section 2: Core Focus (white) */}
      <section className="py-48 bg-white text-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-10">Our work focuses on:</h2>
              <ul className="space-y-6 text-lg text-neutral-500 font-light">
                <li className="flex gap-4">
                  <span className="text-neutral-900 font-bold">•</span>
                  <span>Automating customer conversations</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-neutral-900 font-bold">•</span>
                  <span>Capturing and managing leads automatically</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-neutral-900 font-bold">•</span>
                  <span>Reducing repetitive internal work</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-neutral-900 font-bold">•</span>
                  <span>Helping businesses move from manual processes to autonomous systems</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-neutral-50 p-12 border border-neutral-100"
            >
              <p className="text-xl text-neutral-600 leading-relaxed font-light">
                We believe automation should feel <strong>invisible, dependable, and boring</strong> — because that’s how real infrastructure works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach (dark) */}
      <section className="py-48 bg-dark text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold tracking-tight">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="text-center space-y-4"
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Details & Working Together (white) */}
      <section className="py-48 bg-white text-dark">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-32">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-bold tracking-tight">Company Details</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-2">Locations</h4>
                <p className="text-lg font-light">Pune · Chhatrapati Sambhaji Nagar, India</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-2">Email</h4>
                <a href="mailto:enquiry@nodearcai.com" className="text-lg font-light hover:text-neutral-600 transition-colors border-b border-neutral-200 pb-1">enquiry@nodearcai.com</a>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-2">Phone</h4>
                <p className="text-lg font-light">+91 7769004033</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-neutral-900 text-white p-12 md:p-16 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">How to Work With Us</h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
              If automation is becoming important for your business, the next step is a structured walkthrough of how these systems would apply to you.
            </p>
            <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest">
              You can request a demo or discussion directly from the website.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;