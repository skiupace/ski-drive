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
      <div className="flex-1 flex w-full h-full items-center justify-center text-center">
        <SignInButton forceRedirectUrl={"/drive"} />
      </div>
      <footer className="flex flex-col fixed left-0 right-0 bottom-0 py-6 w-full shrink-0 items-center px-4 md:px-6 border-gray-800">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ski Drive. All rights reserved.</p>
      </footer>
    </>
  )
}
