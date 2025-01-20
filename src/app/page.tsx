'use client';

import { Container } from '@/components/container'
import { AnalysisDisplay } from '@/components/analysis/AnalysisDisplay'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BentoCard } from '@/components/bento-card'
import { MarketCreation } from '@/components/market/MarketCreation'
import { useAccount } from '@starknet-react/core'
import { Github, Zap, Shield, Cpu } from 'lucide-react'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center flex-1">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-xl font-bold">Starknet AI</span>
        </Link>
        <div className="hidden ml-10 space-x-8 md:flex">
          <a href="#features" className="text-base text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#docs" className="text-base text-gray-600 hover:text-gray-900 transition-colors">Documentation</a>
          <a href="#about" className="text-base text-gray-600 hover:text-gray-900 transition-colors">About</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a 
          href="https://github.com/Juls95/starknet_intelligence" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/Juls95/starknet_contract.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  const { address } = useAccount();
  
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
      <div className="pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20">
      <h1 className="text-5xl font-bold tracking-tight text-gray-950 sm:text-7xl">
            AI Decision Markets on{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent">
                Starknet
              </span>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built to address the biases inherent in solo AI decision-making, this project seeks to introduce a collaborative 
            decision-making layer. With the implementation of Starknet blockchain technology, the platform promises 
            enhanced scalability and security, crucial for handling significant transaction volumes. 
          </p>
          <div className="mt-12 space-y-4">
            <AnalysisDisplay />
            {address && <MarketCreation />}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  return (
    <Container>
      <h2 className="text-2xl font-semibold text-gray-900">Platform Features</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
        <BentoCard
          eyebrow="Speed"
          title="Lightning Fast"
          description="Experience instant market updates and real-time AI decisions powered by Starknet's L2 technology."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <Zap className="h-24 w-24 text-emerald-500" />
            </div>
          }
        />
        <BentoCard
          eyebrow="Security"
          title="Enterprise Security"
          description="Built on Starknet with military-grade encryption and proven security protocols."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <Shield className="h-24 w-24 text-emerald-500" />
            </div>
          }
        />
        <BentoCard
          eyebrow="AI-Powered"
          title="Advanced Analytics"
          description="Leverage advanced machine learning models to make informed market decisions."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <Cpu className="h-24 w-24 text-emerald-500" />
            </div>
          }
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Header />
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
