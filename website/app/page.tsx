"use client";

import { motion } from "framer-motion";
import { Play, Shield, Headphones, Brain, Sparkles, Smartphone, Code } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="daricos-badge">
              <Code size={14} /> Built by Daricos Tech Development
            </motion.div>
            <motion.h1 variants={itemVariants} className="hero-title">
              Find Your <span className="text-gradient">Inner Peace</span> with Armemo.
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              The premier Amharic guided meditation and mindfulness app. Elevate your daily routine with curated audio sessions designed to calm your mind and empower your spirit.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#download" className="btn-primary">
                <Play size={18} fill="currentColor" /> Download App
              </a>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-container"
            style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Abstract visual representation instead of a literal app mockup to look more premium */}
            <div style={{ position: 'relative', width: '300px', height: '600px', background: 'linear-gradient(180deg, rgba(20, 20, 30, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)', borderRadius: '40px', border: '8px solid rgba(255,255,255,0.05)', boxShadow: '0 0 50px rgba(40, 157, 225, 0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '30px' }}>
              <div style={{ alignSelf: 'center', width: '40%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '40px' }} />
              <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Outfit', color: 'white', marginBottom: '20px' }}>አርምሞ (Armemo)</div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    className="glass-panel" 
                    style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #289DE1, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={16} color="white" fill="white" />
                    </div>
                    <div>
                      <div style={{ height: '8px', width: '80px', background: 'rgba(255,255,255,0.8)', borderRadius: '4px', marginBottom: '8px' }}></div>
                      <div style={{ height: '6px', width: '120px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px' }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Glowing orbs behind the phone abstract */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '20%', left: '10%', width: '150px', height: '150px', background: '#289DE1', borderRadius: '50%', filter: 'blur(60px)', zIndex: -1 }} 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              style={{ position: 'absolute', bottom: '20%', right: '10%', width: '200px', height: '200px', background: '#a78bfa', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1 }} 
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Elevate Your Mind</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Discover the tools you need to build a consistent, powerful meditation practice, completely localized in Amharic.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="features-grid"
        >
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <div className="feature-icon"><Headphones size={24} /></div>
            <h3>High-Quality Audio</h3>
            <p>Immerse yourself in crystal-clear, professionally recorded and enhanced guided meditations for sleep, focus, and relaxation.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <div className="feature-icon"><Brain size={24} /></div>
            <h3>Mindful Curations</h3>
            <p>From deep sleep sessions to daily empowerment practices. Carefully crafted courses designed for mental clarity.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <div className="feature-icon"><Sparkles size={24} /></div>
            <h3>Beautiful Interface</h3>
            <p>A serene, modern, and distraction-free design that helps you focus on what matters most: your peace of mind.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Daricos Tech Highlight */}
      <section className="section">
        <div className="container glass-panel" style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(to right, rgba(20,20,30,0.8), rgba(30,30,45,0.8))' }}>
          <Code size={40} color="#6366f1" style={{ marginBottom: '20px' }} />
          <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Powered by Daricos Tech Development</h2>
          <p style={{ color: '#94a3b8', maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
            Armemo was meticulously crafted by Daricos Tech Development. We specialize in creating high-performance, aesthetically stunning, and deeply engaging digital experiences for modern users.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '30px' }}>
              <Smartphone size={16} color="#289DE1" /> Mobile Innovation
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '30px' }}>
              <Sparkles size={16} color="#a78bfa" /> Premium UI/UX
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '30px' }}>
              <Shield size={16} color="#10b981" /> Secure & Scalable
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
