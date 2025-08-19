import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  BarChart3,
  Calendar,
  BookOpen,
  Smile,
  ArrowRight,
  Menu,
  X,
  CheckCheck,
  LineChart,
  BookHeart,
  Sparkles
} from 'lucide-react';
import img from '../assets/images/img.jpg'

import { Link } from 'react-router-dom';


function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: "Task Management",
      description: "Organize your tasks with ease. Create, prioritize, and track your progress all in one place."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Journaling",
      description: "Document your thoughts and reflections. Build a habit of daily journaling to improve mindfulness."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics",
      description: "Gain insights into your productivity patterns and track your progress over time."
    },
    {
      icon: <CheckCheck className="w-6 h-6 text-white" />,
      title: "Consistency Tracker",
      description: "Monitor how consistent you are with your habits and tasks to build better routines."
    },
    {
      icon: <Smile className="w-6 h-6 text-white" />,
      title: "Mood Tracker",
      description: "Track your emotional well-being and identify patterns that affect your productivity."
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section with Vibrant Blue Background */}
      <div
        className="relative min-h-screen flex flex-col"
        style={{
          // background: "linear-gradient(135deg, #2563eb, #3b82f6, #0284c7)",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Navigation */}
        <nav className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Sparkles className="h-8 w-8 text-white" />
                  <span className="ml-2 text-2xl font-bold text-white">align</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="block px-3 py-2 text-white text-lg rounded-md transition-transform duration-200 hover:-translate-y-1">Features</a>
                <a href="#testimonials" className="block px-3 py-2 text-white text-lg rounded-md transition-transform duration-200 hover:-translate-y-1">Testimonials</a>
                <a href="#pricing" className="block px-3 py-2 text-white text-lg rounded-md transition-transform duration-200 hover:-translate-y-1">Pricing</a>
                <Link
                  to="/signup"
                  className="cursor-pointer bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-blue-600 transition-all duration-200"
                >
                  Sign-Up
                </Link>

                <Link
                  to="/login"
                  className="cursor-pointer bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-blue-600 transition-all duration-200"
                >
                  Sign-In
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-blue-200 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-900/70 backdrop-blur-lg border border-white/10 shadow-lg rounded-b-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#features" className="block px-3 py-2 text-white font-medium rounded-md transition-transform duration-200 hover:-translate-y-1">Features</a>
                <a href="#testimonials" className="block px-3 py-2 text-white font-medium rounded-md transition-transform duration-200 hover:-translate-y-1">Testimonials</a>
                <a href="#pricing" className="block px-3 py-2 text-white font-medium rounded-md transition-transform duration-200 hover:-translate-y-1">Pricing</a>

                <a href="#" className="w-full text-left px-3 py-2 bg-white/10 backdrop-blur-lg text-white rounded-md border border-white/20 hover:bg-white/20">
                  Signup for free
                </a>
                <a href="#" className="w-full text-left px-3 py-2 bg-white/10 backdrop-blur-lg text-white rounded-md border border-white/20 hover:bg-white/20">
                  Signin
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Centered Hero Content */}
        <div className="flex-grow flex items-center justify-center -mt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="py-4">
              <div className="relative bg-white/10 backdrop-blur-lg text-white inline-flex items-center px-6 py-3 rounded-full shadow-lg border border-white/20">
                <Sparkles className="h-4 w-4 mr-2 text-white animate-pulse" />
                <span className="text-sm font-medium">Welcome to Align!</span>
              </div>
            </div>
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Your All-in-One Solution for</span>
                <span>Productivity!</span>
              </h1>
              <div className="mt-10">
                <Link
                  to="/signup"
                  className="relative inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-full text-white bg-white/10 backdrop-blur-lg hover:bg-blue-600 transition-all duration-200 shadow-lg -translate-y-2"
                >
                  Start for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* App Screenshot (Optional) - Only visible on larger screens */}
        <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          </div>
        </div>
      </div>

      {/* Features Section - Darker, richer blue */}
      <div id="features" className="py-16 overflow-hidden" style={{
        background: "linear-gradient(135deg, #1e40af, #1d4ed8, #0369a1)",
        backgroundSize: "cover"
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
              Everything you need to stay aligned
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-blue-100">
              Discover how Align can transform your productivity and well-being.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <div className="relative lg:mt-0">
                  <div className="relative lg:mx-0 rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-80 bg-blue-900/30 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
                        >
                          <div className="p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-sm border border-white/20 max-w-md mx-auto">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/30 backdrop-blur-sm text-white mx-auto border border-blue-300/30">
                              {feature.icon}
                            </div>
                            <h3 className="mt-6 text-xl font-medium text-white text-center">{feature.title}</h3>
                            <p className="mt-2 text-base text-blue-100 text-center">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 space-y-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 transform ${activeFeature === index ? 'scale-105' : 'scale-100'}`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className={`flex items-center space-x-4 p-4 rounded-lg ${activeFeature === index ? 'bg-white/10 backdrop-blur-lg border border-white/20' : ''}`}>
                      <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md ${activeFeature === index ? 'bg-blue-500 text-white' : 'bg-blue-900/50 backdrop-blur-lg text-white border border-blue-300/30'}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{feature.title}</h4>
                        <p className="mt-1 text-sm text-blue-100">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Purple-blue gradient for contrast */}
      <div id="testimonials" className="py-16 sm:py-24" style={{
        background: "linear-gradient(135deg, #4f46e5, #4338ca, #3730a3)",
        backgroundSize: "cover"
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-300 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
              Hear from our users
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                quote: "Align has completely transformed how I manage my workload. The consistency tracker has been a game-changer for my productivity."
              },
              {
                name: "Michael Chen",
                role: "Software Developer",
                quote: "The journaling feature combined with mood tracking has helped me identify patterns in my work that I never noticed before."
              },
              {
                name: "Emily Rodriguez",
                role: "Freelance Designer",
                quote: "As someone who juggles multiple projects, Align's analytics have given me insights that help me allocate my time more effectively."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img src="/api/placeholder/48/48" className="h-12 w-12 rounded-full object-cover border border-white/20" alt={testimonial.name} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-indigo-200">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-indigo-100 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing - Teal-blue gradient for fresh contrast */}
      <div id="pricing" className="py-16 sm:py-24" style={{
        background: "linear-gradient(to bottom, #0d47a1, #01579b)",
        backgroundSize: "cover"
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">Pricing</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
              Simple, transparent pricing
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-blue-100">
              Choose the plan that works best for you
            </p>
          </div>
          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {[
              {
                name: "Basic",
                price: "$0",
                description: "Perfect for getting started",
                features: [
                  "Task Management",
                  "Basic Journaling",
                  "7-day History",
                  "Email Support"
                ]
              },
              {
                name: "Pro",
                price: "$9",
                description: "For individuals seeking more insights",
                features: [
                  "Everything in Basic",
                  "Advanced Analytics",
                  "Mood Tracking",
                  "Unlimited History",
                  "Priority Support"
                ],
                featured: true
              },
              {
                name: "Team",
                price: "$19",
                description: "For teams that work together",
                features: [
                  "Everything in Pro",
                  "Team Collaboration",
                  "Shared Projects",
                  "Admin Controls",
                  "API Access",
                  "Dedicated Support"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-lg shadow-lg divide-y divide-white/10 ${plan.featured ? 'border-2 border-blue-300 transform scale-105' : 'border border-white/20'}`}
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                  <p className="mt-4 flex items-baseline text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </p>
                  <p className="mt-1 text-sm text-blue-200">{plan.description}</p>
                  <a
                    href="#"
                    className={`mt-8 block w-full py-3 px-6 border border-white/20 rounded-full text-center font-medium ${plan.featured
                      ? 'bg-white/20 backdrop-blur-lg text-white hover:bg-white/30'
                      : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
                      }`}
                  >
                    {plan.featured ? 'Start your trial' : 'Start for free'}
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h4 className="text-sm font-medium text-white tracking-wide uppercase">What's included</h4>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex">
                        <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-blue-300" />
                        <span className="ml-3 text-sm text-blue-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Dark blue gradient */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a8a, #172554, #0c4a6e)",
        backgroundSize: "cover"
      }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-sky-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-white/20 text-base font-medium rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-white/20 text-base font-medium rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold text-white">align</span>
              </div>
              <p className="text-blue-100 text-base">
                Align your tasks, thoughts, and habits for a more productive and mindful life.
              </p>
              <div className="flex space-x-6">
                {/* Social links would go here */}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase">Product</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Features</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Pricing</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Testimonials</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Guides</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Community</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Status</a></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">About</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Blog</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Careers</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Press</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Privacy</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Terms</a></li>
                    <li><a href="#" className="text-base text-blue-100 hover:text-white">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-blue-100 xl:text-center">
              &copy; 2025 Align, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;