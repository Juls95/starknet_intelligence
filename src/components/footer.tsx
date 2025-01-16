import { Container } from './container'

export function Footer() {
  return (
    <footer className="mt-24 w-full sm:mt-32">
      <Container className="border-t border-gray-200 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Analysis. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Starknet
          </p>
        </div>
      </Container>
    </footer>
  )
}
