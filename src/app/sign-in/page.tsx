import { Mountain } from "lucide-react"
import Link from "next/link"
import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Mountain className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold">Ski Drive</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-blue-400" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 text-center">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <SignInButton forceRedirectUrl={"/drive"} />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2025 Ski Drive. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        </nav>
      </footer>
    </div>
  )
}
