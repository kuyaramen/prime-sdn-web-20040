'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Startup } from '@/lib/startup-data';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle,
  Award as AwardIcon,
  Play,
  ExternalLink,
  ArrowRight,
  FileText,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StartupProfileClientProps {
  startup: Startup;
}

const SDG_COLORS: Record<number, string> = {
  1: '#E5243B',
  2: '#DDA63A',
  3: '#4C9F38',
  4: '#C5192D',
  5: '#FF3A21',
  6: '#26BDE2',
  7: '#FCC30B',
  8: '#A21942',
  9: '#DD6925',
  10: '#DD1367',
  11: '#FD9D24',
  12: '#BF8B2E',
  13: '#3F7E44',
  14: '#0A97D9',
  15: '#56C02B',
  16: '#00689D',
  17: '#183C62',
};

const SDG_NAMES: Record<number, string> = {
  1: 'No Poverty',
  2: 'Zero Hunger',
  3: 'Good Health',
  4: 'Quality Education',
  5: 'Gender Equality',
  6: 'Clean Water',
  7: 'Clean Energy',
  8: 'Decent Work',
  9: 'Innovation',
  10: 'Reduced Inequalities',
  11: 'Sustainable Cities',
  12: 'Responsible Consumption',
  13: 'Climate Action',
  14: 'Life Below Water',
  15: 'Life on Land',
  16: 'Peace & Justice',
  17: 'Partnerships',
};

export default function StartupProfileClient({ startup }: StartupProfileClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh] overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5"
            style={{ 
              backgroundImage: `url(${startup.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-6xl md:text-7xl shrink-0">
              {startup.logo}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: '#EAF2FF', color: '#3565D9' }}
                >
                  {startup.industry}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: '#F8FAFF', color: '#1A2F6B' }}
                >
                  {startup.stage}
                </motion.span>
                {startup.verified && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#3565D9' }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Verified
                  </motion.div>
                )}
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4"
                style={{ 
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  color: '#1A2F6B',
                  lineHeight: 1.1,
                }}
              >
                {startup.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl mb-6"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}
              >
                {startup.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 text-sm mb-8"
                style={{ color: '#6B7280' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: '#3565D9' }} />
                  {startup.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: '#3565D9' }} />
                  Founded {startup.yearFounded}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: '#3565D9' }} />
                  {startup.employees} Employees
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="primary"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E4FBF]"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#3565D9] text-[#3565D9]"
                >
                  <Mail className="w-4 h-4" />
                  Contact Startup
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT STARTUP ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-extrabold text-3xl md:text-4xl mb-8"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}
              >
                About {startup.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg leading-relaxed mb-6"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}
              >
                {startup.description}
              </motion.p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Mission</h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{startup.mission}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Vision</h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{startup.vision}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Problem We Solve</h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{startup.problem}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Technology</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{startup.technology}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Community Impact</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{startup.communityImpact}</p>
              </div>

              {/* Company Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Business Model</p>
                  <p className="font-bold" style={{ color: '#1A2F6B' }}>{startup.businessModel}</p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Status</p>
                  <p className="font-bold" style={{ color: '#1A2F6B' }}>{startup.status}</p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Headquarters</p>
                  <p className="font-bold" style={{ color: '#1A2F6B' }}>{startup.headquarters}</p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Industry</p>
                  <p className="font-bold" style={{ color: '#1A2F6B' }}>{startup.industry}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCTS & SERVICES ===== */}
      {startup.products.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Products & Services
              </h2>
              <p style={{ color: '#5F6E89' }}>Innovative solutions designed to make an impact</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startup.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl p-8 border transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderColor: '#E5E7EB',
                    boxShadow: '0 20px 50px rgba(17,24,39,0.08)',
                  }}
                >
                  <div className="w-full h-48 rounded-xl mb-6 bg-gradient-to-br from-[#1E4FBF]/10 to-[#1E4FBF]/5 flex items-center justify-center">
                    <span className="text-6xl">{product.image.includes('http') ? '📦' : '🎯'}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: '#1A2F6B' }}>{product.name}</h3>
                  <p className="text-base mb-4" style={{ color: '#6B7280', lineHeight: 1.7 }}>{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#5E7CE2' }}>Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#6B7280' }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#3565D9' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#5E7CE2' }}>Technology</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technology.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#EAF2FF', color: '#3565D9' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== GALLERY ===== */}
      {startup.gallery.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Gallery
              </h2>
              <p style={{ color: '#5F6E89' }}>A glimpse into our journey</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {startup.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2"
                  style={{ borderColor: '#EAF2FF' }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TIMELINE ===== */}
      {startup.timeline.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Our Journey
              </h2>
              <p style={{ color: '#5F6E89' }}>Key milestones in our startup journey</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" style={{ backgroundColor: '#EAF2FF' }} />
                
                {startup.timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 pr-8">
                      <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}>
                        <div className="text-sm font-semibold mb-2" style={{ color: '#5E7CE2' }}>{milestone.date}</div>
                        <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>{milestone.title}</h3>
                        <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4" style={{ backgroundColor: '#3565D9', borderColor: '#EAF2FF' }} />
                    <div className="w-1/2 pl-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== IMPACT METRICS ===== */}
      {startup.metrics.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-[#1E4FBF] to-[#1E4FBF]/80">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Our Impact
              </h2>
              <p className="text-white/80">Measurable results that matter</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {startup.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-extrabold text-4xl md:text-5xl mb-2 text-white" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    {metric.prefix}{metric.value.toLocaleString()}{metric.suffix}
                  </div>
                  <div className="text-white/80 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SDG ALIGNMENT ===== */}
      {startup.sdgs.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                SDG Alignment
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                Contributing to the Sustainable Development Goals
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {startup.sdgs.map((sdg, index) => (
                <motion.div
                  key={sdg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl p-6 text-center transition-all duration-300"
                  style={{ backgroundColor: SDG_COLORS[sdg] }}
                >
                  <div className="font-extrabold text-3xl mb-2 text-white">{sdg}</div>
                  <div className="text-white text-xs font-semibold">{SDG_NAMES[sdg]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PARTNERS ===== */}
      {startup.partners.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Our Partners
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                Collaborating for greater impact
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {startup.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl p-6 flex items-center justify-center h-24 border transition-all duration-300"
                  style={{ backgroundColor: '#F8FAFF', borderColor: '#EAF2FF' }}
                >
                  <span className="font-bold text-lg" style={{ color: '#1A2F6B' }}>{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TEAM ===== */}
      {startup.team.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Our Team
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                The people behind the innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startup.team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl p-6 text-center border transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderColor: '#E5E7EB',
                    boxShadow: '0 20px 50px rgba(17,24,39,0.08)',
                  }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center text-4xl">
                    👤
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#1A2F6B' }}>{member.name}</h3>
                  <p className="text-sm mb-3" style={{ color: '#5E7CE2' }}>{member.role}</p>
                  <p className="text-sm" style={{ color: '#6B7280', lineHeight: 1.6 }}>{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                      style={{ color: '#3565D9' }}
                    >
                      LinkedIn
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== AWARDS ===== */}
      {startup.awards.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Awards & Recognition
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                Celebrating our achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startup.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl p-8 border transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderColor: '#E5E7EB',
                    boxShadow: '0 20px 50px rgba(17,24,39,0.08)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EAF2FF' }}>
                      <AwardIcon className="w-6 h-6" style={{ color: '#3565D9' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: '#1A2F6B' }}>{award.title}</h3>
                      <p className="text-sm" style={{ color: '#5E7CE2' }}>{award.organization}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#6B7280' }}>{award.date}</p>
                  {award.description && (
                    <p className="text-sm" style={{ color: '#6B7280', lineHeight: 1.7 }}>{award.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== VIDEOS ===== */}
      {startup.videos.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                Videos
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                Watch our story unfold
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startup.videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: '#EAF2FF' }}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4" style={{ color: '#3565D9' }} />
                      <p className="font-semibold" style={{ color: '#1A2F6B' }}>{video.title}</p>
                    </div>
                  </div>
                  {video.description && (
                    <div className="p-6">
                      <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{video.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== NEWS ===== */}
      {startup.news.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
                News & Media
              </h2>
              <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
                Latest coverage and updates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startup.news.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl p-6 border transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderColor: '#E5E7EB',
                    boxShadow: '0 20px 50px rgba(17,24,39,0.08)',
                  }}
                >
                  <div className="text-sm mb-2" style={{ color: '#5E7CE2' }}>{article.publisher}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>{article.title}</h3>
                  <p className="text-sm mb-4" style={{ color: '#6B7280' }}>{article.date}</p>
                  {article.excerpt && (
                    <p className="text-sm mb-4" style={{ color: '#6B7280', lineHeight: 1.7 }}>{article.excerpt}</p>
                  )}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#3565D9' }}
                  >
                    Read More <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CONTACT CTA ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, #1E4FBF 0%, #1E4FBF)/80 100%)',
            }}
          >
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Interested in {startup.name}?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Connect with the team to learn more about their products, services, or investment opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1E4FBF] hover:bg-white/90 transition-all"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Inquiry
              </Button>
              {startup.phone && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== RELATED STARTUPS ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#F8FAFF]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#1A2F6B' }}>
              Related Startups
            </h2>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', color: '#5F6E89' }}>
              Discover more innovative startups in the ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl p-6 border transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                  borderColor: '#E5E7EB',
                  boxShadow: '0 20px 50px rgba(17,24,39,0.08)',
                }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1A2F6B' }}>Related Startup {i}</h3>
                <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Innovative solution in {startup.industry}</p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#3565D9' }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#1E4FBF]/20 to-[#1E4FBF]/5 flex items-center justify-center rounded-xl">
              <span className="text-8xl">📷</span>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
