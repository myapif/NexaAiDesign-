/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Layout, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  BarChart3,
  Mail,
  ExternalLink
} from "lucide-react";

const services = [
  {
    title: "Custom WP Architecture",
    description: "Beyond templates. We build scalable, secure, and lightweight WordPress ecosystems tailored to your enterprise needs.",
    icon: <Cpu className="w-6 h-6 text-electric-blue" />,
  },
  {
    title: "Conversion-Optimized UI",
    description: "Design that drives action. We blend high-end aesthetics with psychological triggers to turn visitors into loyal clients.",
    icon: <Layout className="w-6 h-6 text-electric-blue" />,
  },
  {
    title: "Technical SEO",
    description: "Dominating SERPs through semantic code, schema markup, and flawless site structure. We make Google love your site.",
    icon: <Search className="w-6 h-6 text-electric-blue" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-electric-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-t-0 border-x-0 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center electric-glow">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter">NexaAiDesign</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#speed" className="hover:text-electric-blue transition-colors">Speed</a>
            <a href="#services" className="hover:text-electric-blue transition-colors">Services</a>
            <a href="#contact" className="hover:text-electric-blue transition-colors">Contact</a>
          </div>
          <button className="bg-electric-blue hover:bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold transition-all electric-glow active:scale-95">
            Audit My Site
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-electric-blue/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-electric-blue/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-electric-blue mb-6">
              Premium WordPress Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Engineering <span className="text-gradient">Digital Dominance</span> <br className="hidden md:block" /> for High-Ticket Brands.
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              NexaAiDesign transforms standard WordPress sites into high-performance revenue engines. We specialize in speed, SEO, and custom WooCommerce architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-electric-blue hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all electric-glow flex items-center justify-center gap-2 group">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Speed Factor */}
      <section id="speed" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-electric-blue font-bold tracking-wide uppercase text-sm">
              <Zap className="w-4 h-4" /> The Speed Factor
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why a 90+ PageSpeed Score is Non-Negotiable.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              In the high-ticket landscape, milliseconds equal millions. A sub-par loading speed doesn't just frustrate users; it signals a lack of premium quality. Our custom optimization stack ensures your site hits 90+ on Core Web Vitals, slashing bounce rates and forcing Google to prioritize your brand in search results. Speed isn't a feature—it's your competitive edge.
            </p>
            <ul className="space-y-4">
              {[
                "Instant First Contentful Paint",
                "Optimized LCP for Mobile Dominance",
                "Zero Cumulative Layout Shift",
                "Advanced Server-Side Caching"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <div className="aspect-square glass-card rounded-3xl flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-transparent opacity-50" />
              <div className="text-center space-y-4 relative z-10">
                <div className="text-8xl md:text-9xl font-black text-electric-blue drop-shadow-[0_0_30px_rgba(0,112,243,0.5)]">
                  99
                </div>
                <div className="text-xl font-bold tracking-widest uppercase text-gray-400">
                  Performance Score
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-10 w-32 h-32 border border-electric-blue/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Precision Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We don't just build websites. We architect digital assets that scale your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:border-electric-blue/50 transition-all group"
              >
                <div className="w-12 h-12 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric-blue transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-electric-blue/5 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
            Ready to Outpace the <br /> Competition?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
            Stop losing leads to slow load times and poor SEO. Let's build your custom WordPress powerhouse today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-electric-blue hover:bg-blue-600 px-10 py-5 rounded-full text-xl font-bold transition-all electric-glow">
              Start Your Transformation
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full text-xl font-bold transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-6 h-6 text-electric-blue" />
              <span className="text-2xl font-bold tracking-tighter">NexaAiDesign</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Premium WordPress Engineering & SEO Strategy. <br />
              Built for high-ticket results.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://nexaaidesign.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm">
              nexaaidesign.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NexaAiDesign. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
