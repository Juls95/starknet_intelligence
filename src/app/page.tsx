'use client';

import { Container } from '@/components/container'
import { AnalysisDisplay } from '@/components/analysis/AnalysisDisplay'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BentoCard } from '@/components/bento-card'
import { MarketCreation } from '@/components/market/MarketCreation'
import { useAccount } from '@starknet-react/core'

function Hero() {
  const { address } = useAccount();
  
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Starknet AI Analysis.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Analyze AI agent decisions on Starknet using advanced machine learning.
          </p>
          <div className="mt-12">
            <AnalysisDisplay />
            {address && <MarketCreation />}
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <h2 className="text-2xl font-semibold text-gray-900">Starknet Features</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
        <BentoCard
          eyebrow="Analysis"
          title="AI Decision Analysis"
          description="Analyze AI agent decisions on Starknet using advanced machine learning algorithms."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <svg className="h-24 w-24 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          }
        />
        <BentoCard
          eyebrow="Smart Contracts"
          title="Secure Interactions"
          description="Interact with Starknet smart contracts securely and efficiently."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <svg className="h-24 w-24 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          }
        />
        <BentoCard
          eyebrow="Real-time"
          title="Live Updates"
          description="Get real-time updates from the Starknet blockchain as decisions are made."
          graphic={
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-400/20 to-emerald-400/5">
              <svg className="h-24 w-24 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
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
      <Header />
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
