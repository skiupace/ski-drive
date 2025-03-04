import { SignInButton } from "@clerk/nextjs";
import { Mountain } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-16 flex w-full items-center border-gray-800">
        <Link className="flex items-center justify-center" href="/">
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

      <section className="w-full py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Welcome onboard!
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
          Start your journey with us today
        </p>

        <div className="flex-1 flex w-full h-full py-12 items-center justify-center text-center">
          <div className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md">
            <SignInButton forceRedirectUrl={"/drive"} />
          </div>
        </div>
      </section>
      
      <footer className="flex flex-col fixed left-0 right-0 bottom-0 py-6 w-full shrink-0 items-center px-4 md:px-6 border-gray-800">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ski Drive. All rights reserved.</p>
      </footer>
    </>
  )
}
