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

  const handleConnect = async (connector: any) => {
    try {
      setIsConnecting(true)
      await connect({ connector })
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
            <div className="flex gap-4">
              {connectors.map((connector) => (
                <Button
                  key={connector.id}
                  onClick={() => handleConnect(connector)}
                  disabled={isConnecting}
                  variant="secondary"
                >
                  {isConnecting ? 'Connecting...' : `Connect ${connector.id}`}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </header>
  )
} 