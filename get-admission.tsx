"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Logo from "@/app/logo-college.png"
import Image from "next/image"

export default function GetAdmission() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreeToContact, setAgreeToContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, email, agreeToContact });
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-xl font-bold text-purple-800">
              <Image src={Logo} alt="Logo" height={50}></Image>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="https://www.collegele.com" className="text-gray-700 hover:text-purple-700">Colleges</Link>
            <Link href="https://www.collegele.com/about-us" className="text-gray-700 hover:text-purple-700">About Us</Link>
            <Link href="https://www.collegele.com/blogs" className="text-gray-700 hover:text-purple-700">Blogs</Link>

          </nav>
          <Link href="#contact-us">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
            Contact Us
          </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Admission to Your Dream College</h1>
              <p className="text-lg mb-6">
                Take the first step towards your academic success. Fill out the form and our experts will guide you through the admission process.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Expert Guidance</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Personalized Support</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Simplified Process</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-xl p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Our Experts</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="top-name" className="text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="top-name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="top-phone" className="text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                  <Input
                    id="top-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="top-email" className="text-gray-700">Email ID <span className="text-red-500">*</span></Label>
                  <Input
                    id="top-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox 
                    id="top-agree" 
                    checked={agreeToContact}
                    onCheckedChange={(checked) => setAgreeToContact(checked as boolean)}
                    required
                  />
                  <Label htmlFor="top-agree" className="text-sm text-gray-600">
                    I authorize CollegeLe and its associates to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call.
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
                  SUBMIT
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose <span className="text-orange-500">CollegeLe</span>?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From choosing the right college to navigating applications, we're dedicated to supporting you at each step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-md"
            >
              <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600">
                Get personalized career recommendations based on your skills, interests, and academic performance.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md"
            >
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
              <p className="text-gray-600">
                Track all your college applications in one place and never miss important deadlines.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Counseling</h3>
              <p className="text-gray-600">
                Get guidance from our expert counselors who have helped thousands of students achieve their dreams.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-800 mb-2">1000+</h3>
              <p className="text-gray-600">Partner Colleges</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-800 mb-2">50,000+</h3>
              <p className="text-gray-600">Students Guided</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-800 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-800 mb-2">100+</h3>
              <p className="text-gray-600">Expert Counselors</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How It <span className="text-orange-500">Works</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process to help you get admission to your dream college
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-800">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-gray-600">
                Fill out the form with your details and preferences
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-800">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Our expert counselor will connect with you
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-800">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">
                We'll help you apply to your chosen colleges
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-800">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Succeed</h3>
              <p className="text-gray-600">
                Get admitted to your dream college
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Bottom Form */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700" id="contact-us">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-lg mb-6">
                Don't wait any longer. Take the first step towards your academic success by connecting with our experts today.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personalized college recommendations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Application assistance and guidance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Scholarship information and support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Career counseling and guidance
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-xl p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Started Today</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bottom-name" className="text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="bottom-name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bottom-phone" className="text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                  <Input
                    id="bottom-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bottom-email" className="text-gray-700">Email ID <span className="text-red-500">*</span></Label>
                  <Input
                    id="bottom-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox 
                    id="bottom-agree" 
                    checked={agreeToContact}
                    onCheckedChange={(checked) => setAgreeToContact(checked as boolean)}
                    required
                  />
                  <Label htmlFor="bottom-agree" className="text-sm text-gray-600">
                    I authorize CollegeLe and its associates to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call.
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
                  GET ADMISSION HELP
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
</div>
)}