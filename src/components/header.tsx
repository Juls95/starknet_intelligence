'use client';

import { Container } from './container'
import { Button } from './button'
import { useConnect, useAccount, useDisconnect } from '@starknet-react/core'
import { useState } from 'react'

export function Header() {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address } = useAccount()
  const [isConnecting, setIsConnecting] = useState(false)
  const [showWalletList, setShowWalletList] = useState(false)

  const handleConnect = async (connector: any) => {
    try {
      setIsConnecting(true)
      await connect({ connector })
      setShowWalletList(false)
    } catch (error) {
      console.error('Connection error:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error('Disconnect error:', error)
    }
  }

  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          {address ? (
            <div className="flex gap-4">
              <Button variant="secondary">
                {`${address.slice(0, 6)}...${address.slice(-4)}`}
              </Button>
              <Button onClick={handleDisconnect} variant="primary">
                Disconnect
              </Button>
            </div>
          ) : (
            <div className="relative">
              <Button 
                onClick={() => setShowWalletList(!showWalletList)} 
                variant="secondary"
              >
                Connect Wallet
              </Button>
              
              {showWalletList && (
                <div className="absolute mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {connectors.map((connector) => (
                      <button
                        key={connector.id}
                        onClick={() => handleConnect(connector)}
                        disabled={isConnecting}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {isConnecting ? 'Connecting...' : `Connect ${connector.id}`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  )
} 