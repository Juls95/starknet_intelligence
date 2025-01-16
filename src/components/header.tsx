import { Container } from './container'
import { Button } from './button'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Button href="#" variant="secondary">
            Connect Wallet
          </Button>
        </div>
      </Container>
    </header>
  )
} 