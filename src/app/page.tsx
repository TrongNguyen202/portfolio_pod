"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaZhihu } from "react-icons/fa";
import ImageSlider from "./components/Slider";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Sun Design?",
      answer:
        "We are your trusted partner, ready to turn any idea into reality with our team of experienced and dedicated designers.",
    },
    {
      question: "How do I make payments?",
      answer:
        "Simply create a top-up request and you’ll instantly get a secure QR code. Just scan it — your payment will be processed automatically. Plus, enjoy an extra 3% bonus added to every top-up amount!",
    },
    {
      question: "What custom design services do you offer?",
      answer:
        "We offer comprehensive custom design services including POD design, print on demand graphics, logo design, brand identity, social media graphics, and digital marketing materials. Our expert designers work with you to create unique designs tailored to your specific needs.",
    },
    {
      question: "How does your POD design service work?",
      answer:
        "Our POD design service is streamlined for e-commerce sellers. Simply submit your design brief, and our professional designers will create custom graphics for your print on demand products. We specialize in designs for TikTok Shop, Amazon, Shopify, Etsy, and other major platforms.",
    },
    {
      question: "What's the turnaround time for custom designs?",
      answer:
        "Most custom design projects are completed within 24-48 hours. For complex projects like complete brand identity or large POD collections, we provide detailed timelines upfront. Rush orders are available for urgent needs.",
    },
    {
      question: "Do you provide design revisions?",
      answer:
        "Yes! We include unlimited revisions with every custom design project. Our goal is to ensure you're completely satisfied with your design before final delivery.",
    },
    {
      question: "Can you help with design for multiple platforms?",
      answer:
        "Absolutely! We create custom designs optimized for various platforms including TikTok Shop, Amazon, Shopify, Etsy, Facebook, Instagram, and more. Each design is tailored to meet platform-specific requirements.",
    },
    {
      question: "What file formats do you deliver?",
      answer:
        "We deliver designs in all major formats including PNG, JPEG, PDF, SVG, and AI. For POD designs, we provide high-resolution files optimized for printing and digital use.",
    },
    {
      question: "Why do I need to connect Google Drive?",
      answer:
        "Sun Design uses Google OAuth to help designers securely upload designs to their own Google Drive and share files directly with customers.",
    },
  ];

  const testimonials = [
    {
      name: "Pham Thanh An",
      role: "TikTok Shop Seller",
      avatar: "/image1.jpg?height=48&width=48",

      text: "Sun Design's custom POD designs have transformed my online store. Their print on demand graphics are professional, trendy, and convert incredibly well. Sales have increased by 300% since working with them!",
    },
    {
      name: "Do Duc Tuan",
      role: "Sales Executive",
      avatar: "/image2.jpg?height=48&width=48",
      text: "The quality of custom designs from Sun Design is outstanding. They understand e-commerce and create graphics that actually sell products. Highly recommended!",
    },
    {
      name: "Le Khac Duy",
      role: "E-commerce Entrepreneur",
      avatar: "/image3.jpg?height=48&width=48",
      text: "Finding reliable designers for my TikTok Shop was challenging until I discovered Sun Design. Their POD designs are exactly what I need to stand out in the marketplace.",
    },
    {
      name: "Phan Van Anh",
      role: "Independent Seller",
      avatar: "/image4.jpg?height=48&width=48",
      text: "Sun Design's custom design service has been a game-changer for my Amazon business. Professional graphics, fast delivery, and excellent customer service.",
    },
    {
      name: "Le Tan Phat",
      role: "Sales Manager",
      avatar: "/image5.jpg?height=48&width=48",
      text: "As a marketing manager, I need high-quality designs fast. Sun Design delivers exceptional custom graphics for all our campaigns. Their turnaround time and quality are unmatched.",
    },
  ];

  // Dữ liệu ảnh mẫu (bạn có thể thay thế bằng ảnh thực của mình)
  const imagesAfterBefore = [
    {
      src: "./ab1.jpg",
      title: "",
      description: "",
    },
    {
      src: "./ab2.jpg",
      title: "",
      description: "",
    },
    {
      src: "./ab3.jpg",
      title: "",
      description: "",
    },
    {
      src: "./ab4.jpg",
      title: "",
      description: "",
    },
  ];

  // Dữ liệu ảnh mẫu (bạn có thể thay thế bằng ảnh thực của mình)
  const imagesBanner = [
    {
      src: "./banner2.jpg",
      title: "",
      description: "",
    },
    {
      src: "./preview.png",
      title: "",
      description: "",
    },
  ];

  const imagesIcon = [
    "./logos/tiktok.png",
    "./logos/amazone.jpeg",
    "./logos/ebay.png",
    "./logos/shopify.png",
    "./logos/etsy.png",
    "./logos/walmart.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Sun Design - Save time for all design</title>

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Design Services",
            "description": "Professional custom design services for POD, print on demand, logo design, and digital marketing materials",
            "provider": {
              "@type": "Organization",
              "name": "Sun Design",
              "url": "https://sundesign.io"
            },
            "serviceType": "Graphic Design",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "POD Design",
                    "description": "Custom print on demand designs for e-commerce"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logo Design",
                    "description": "Professional logo design and brand identity"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing Design",
                    "description": "Social media graphics and marketing materials"
                  }
                }
              ]
            }
          }`}
        </script>

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What custom design services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive custom design services including POD design, print on demand graphics, logo design, brand identity, social media graphics, and digital marketing materials."
                }
              },
              {
                "@type": "Question",
                "name": "How does your POD design service work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply submit your design brief, and our professional designers will create custom graphics for your print on demand products. We specialize in designs for TikTok Shop, Amazon, Shopify, Etsy, and other major platforms."
                }
              }
            ]
          }`}
        </script>

        {/* Basic meta tags */}
        <meta
          name="description"
          content="Professional custom design services for POD, print on demand, graphic design, logo design, and digital marketing materials. Fast delivery & expert designers."
        />
        <meta
          name="keywords"
          content="custom design, POD design, print on demand design, graphic design services, logo design, banner design, design on demand, freelance designer"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Sun Design - Custom Design & POD Services"
        />
        <meta
          property="og:description"
          content="Expert custom design services for POD, e-commerce, and digital marketing. Professional designers, fast turnaround."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sundesign.io" />
        <meta property="og:site_name" content="Sun Design" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sun Design - Custom Design & POD Services"
        />
        <meta
          name="twitter:description"
          content="Expert custom design services..."
        />

        {/* Canonical and robots */}
        <link rel="canonical" href="https://sundesign.io" />
        <meta name="robots" content="index, follow" />

        {/* hreflang tags */}
        <link rel="alternate" hrefLang="en" href="https://sundesign.io/" />
        <link rel="alternate" hrefLang="vi" href="https://sundesign.io/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://sundesign.io"
        />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section with Header */}
      <section className="relative min-h-screen px-8 py-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-4">
                <img
                  src="./logo.png"
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center"
                  alt="Custom POD design example for print on demand products"
                />
              </div>
              <span className="text-2xl font-bold">Sun Design</span>
            </div>
            <div className="bg-blue-500 text-black px-6 py-3 rounded-full text-sm font-medium">
              <a
                href="https://sundesign.io/"
                target="_blank"
                className="text-white font-bold"
              >
                Create Design Now
              </a>
            </div>
          </header>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* <div className="inline-block bg-gray-700/50 text-gray-300 px-6 py-3 rounded-full text-sm font-medium">
                JOIN THE FUTURE
              </div> */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Custom Design,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  POD & Print on Demand
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Professional custom design services for POD, e-commerce, and
                digital marketing. From concept to completion - we bring your
                ideas to life.
              </p>

              <div className="space-y-4">
                <a
                  href="https://zalo.me/0968083967"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300"
                >
                  Get started today
                </a>

                <p className="text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="https://sundesign.io/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Login now
                  </a>
                </p>
              </div>
            </div>

            {/* Right Content - 6 Images So Le */}
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
              {/* 4 Ảnh chính */}
              <img
                src="./person1.jpg"
                alt="Custom POD design example for print on demand products"
                className="w-full rounded-2xl object-cover shadow-xl transform rotate-[-6deg]"
              />
              <img
                src="./person4.jpg"
                alt="Custom POD design example for print on demand products"
                className="w-full rounded-2xl object-cover shadow-xl transform rotate-[6deg] translate-y-6"
              />
              <img
                src="./person3.jpg"
                alt="Custom POD design example for print on demand products"
                className="w-full rounded-2xl object-cover shadow-xl transform rotate-[4deg] -translate-y-6"
              />
              <img
                src="./person6.jpg"
                alt="Custom POD design example for print on demand products"
                className="w-full rounded-2xl object-cover shadow-xl transform rotate-[-4deg]"
              />

              {/* Ảnh nhỏ bay top-left */}
              <img
                src="./person5.jpg"
                alt="Custom POD design example for print on demand products"
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
              />

              {/* Ảnh nhỏ bay bottom-right */}
              <img
                src="./person2.jpg"
                alt="Custom POD design example for print on demand products"
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <ImageSlider images={imagesBanner} />
              {/* <h3 className="text-center mb-2 font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Preview website
              </h3>
              <img className="rounded-3xl" src="./preview.png"></img> */}
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered TikTok Shop Section */}
      <section className="relative px-8 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Sun Design logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-sm text-gray-400">Sun Design</span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium">
              Design Better
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              INTRODUCING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turn every idea into a
              <br />
              Professional Design
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
              You have the vision, you have the idea and we have the creative
              team dedicated to making it happen. Every custom design we create
              is unique, tailored specifically for your print on demand
              business.
            </p>
          </div>

          {/* Feature Cards */}
          <ImageSlider images={imagesAfterBefore} />
          {/* <p className="text-sm text-gray-300 leading-relaxed text-center mt-4">
            All-in-one for design, order management, transaction management.
            Designers securely connect their Google Drive via OAuth to upload
            and share files directly with customers.
          </p> */}
        </div>
      </section>
      <section className="px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Design Services
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive design solutions for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">POD Design</h3>
              <p className="text-gray-300">
                Custom print on demand designs for TikTok Shop, Amazon, Shopify,
                and Etsy. High-quality graphics that convert and sell.
              </p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-400">
                <li>• T-shirt designs</li>
                <li>• Mug & merchandise graphics</li>
                <li>• Product mockups</li>
                <li>• Seasonal collections</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Digital Marketing Design
              </h3>
              <p className="text-gray-300">
                Eye-catching banners, social media graphics, and advertising
                materials. Designed to boost engagement and conversions.
              </p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-400">
                <li>• Social media posts</li>
                <li>• Ad banners</li>
                <li>• YouTube thumbnails</li>
                <li>• Email templates</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Identity Design</h3>
              <p className="text-gray-300">
                Complete branding solutions including logo design, brand
                guidelines, and visual identity systems for your business.
              </p>
              <ul className="text-left mt-4 space-y-2 text-sm text-gray-400">
                <li>• Logo design</li>
                <li>• Brand guidelines</li>
                <li>• Business cards</li>
                <li>• Letterheads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are You Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-semibold">Sun Design</span>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61578000097887"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
            >
              by <span className="text-red-500">Sun Design</span> media
            </a>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Who are you,
              <br />
              And what value will you receive?
            </h2>
            <p className="text-gray-300 text-lg">
              Discover the unique benefits we bring to you!
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Merchandise Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              {/* 3D Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-12"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl transform -rotate-6"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg"></div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-8">
                Business Owner
              </h3>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <span className="text-gray-300">Create Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🎯</span>
                  </div>
                  <span className="text-gray-300">
                    Professional POD design services
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <span className="text-gray-300">
                    Fast turnaround & revisions
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <span className="text-gray-300">
                    Balance Top-Up & Payment Control
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💼</span>
                  </div>
                  <span className="text-gray-300">
                    Complete project management
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <span className="text-gray-300">
                    In & Out Financial Tracking
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://zalo.me/0968083967"
                target="_blank"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                Join as Customer
                <span>→</span>
              </a>
            </div>

            {/* Partner Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              {/* 3D Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform -rotate-12"></div>
                  <div className="absolute inset-3 bg-gradient-to-br from-purple-300 to-blue-500 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-200 to-purple-400 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-8">
                Freelance Designer
              </h3>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📥</span>
                  </div>
                  <span className="text-gray-300">
                    Order Receiving & Tracking
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🔗</span>
                  </div>
                  <span className="text-gray-300">
                    Direct client connections
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🗂️</span>
                  </div>
                  <span className="text-gray-300">
                    Task & Workflow Management
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <span className="text-gray-300">
                    Steady design projects & income
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🗣️</span>
                  </div>
                  <span className="text-gray-300">Realtime Feedback Loop</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🖼️</span>
                  </div>
                  <span className="text-gray-300">
                    Personal Portfolio Showcase
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://zalo.me/0968083967"
                target="_blank"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                Join as Designer
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              WE'VE GOT YOU COVERED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-gray-300">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Custom Design Process
            </h2>
            <p className="text-white text-lg">
              Simple, efficient, and results-driven design workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Submit Brief
              </h3>
              <p className="text-white">
                Tell us about your custom design needs, target audience, and
                preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Design Creation
              </h3>
              <p className="text-white">
                Our expert designers create your custom graphics with attention
                to detail
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Review & Revise
              </h3>
              <p className="text-white">
                Review your design and request any revisions until it's perfect
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Final Delivery
              </h3>
              <p className="text-white">
                Receive your custom design in all required formats, ready to use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              WE'VE GOT YOU COVERED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Feedback From Big Customer
            </h2>
          </div>
          <div className="text-center mb-16">
            {/* 3D Diamond */}
            <div className="flex justify-center mb-16">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transform rotate-45 rounded-lg"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-blue-300 via-purple-400 to-pink-400 transform -rotate-12 rounded-lg"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 transform rotate-6 rounded-lg"></div>
              </div>
            </div>
            {/* <p className="text-xl md:text-2xl mb-12">
              More than{" "}
              <span className="text-blue-400 font-bold">152.78k+</span> users
              love their TikTok Shop journey
            </p> */}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        {/* Brand Partner Slider Section */}
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto mb-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Brands Worldwide
            </h2>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex gap-16"
              style={{
                width: "max-content",
                animation: "slide 20s linear infinite",
              }}
            >
              {/* Duplicate icons for seamless loop */}
              {[...imagesIcon, ...imagesIcon].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Custom POD design example for print on demand products"
                  className="h-12 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>

            {/* Inline Keyframes */}
            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-4">
              <img
                src="./logo.png"
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"
                alt="Custom POD design example for print on demand products"
              />
              <div>
                <h3 className="text-2xl font-bold">Sun Design</h3>
                <p className="text-gray-400">Unlock growth for your shop!</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-6">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61578000097887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <FaFacebookF size={24} />
                </a>

                {/* Zalo */}
                <a
                  href="https://zalo.me/0968083967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center justify-center text-[30px] w-6 h-6 rounded-full hover:text-[#008FE5] transition-colors text-white font-bold">
                    Z
                  </span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@yourtiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <section className="px-8 py-20 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Get Started with Custom Design?
                </h2>
                <p className="text-xl mb-8">
                  Join thousands of businesses who trust Sun Design for their
                  custom design needs. Professional POD designs, fast
                  turnaround, unlimited revisions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://sundesign.io/ideas"
                    className="bg-white text-black font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Order Custom Design Now
                  </a>
                  <a
                    href="https://hub.sundesign.io/"
                    className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-black  transition-colors"
                  >
                    View Design Portfolio
                  </a>
                </div>
              </div>
            </section>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-700 w-full">
              <p className="text-gray-500">
                © 2025 Sun Design. All rights reserved.
              </p>
              <div className="mt-4 flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
                <a
                  href="https://sundesign.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300"
                >
                  Privacy Policy
                </a>
                <span>|</span>
                <a
                  href="https://sundesign.io/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
