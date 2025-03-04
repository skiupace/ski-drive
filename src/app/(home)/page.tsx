import { auth } from "@clerk/nextjs/server";
import { Mountain } from "lucide-react";
import { redirect } from "next/navigation";
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
          {/* <Link className="text-sm font-medium hover:text-blue-400" href="#">
            Contact
          </Link> */}
        </nav>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                Introducing Ski Drive
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Storage, Simplified
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Store, share, and collaborate on files and folders from any mobile device, tablet, or computer
              </p>
            </div>
            <div className="space-x-4">
              <form 
                action={async () => {
                  "use server";

                  const session = await auth();
                  if (!session.userId)
                    return redirect("/sign-in");
                  
                  return redirect("/drive");
                }}
              >
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      // TODO: Move this chunk of code into "features" page.
      {/* <section className="w-full rounded-3xl py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FeatureCard
              icon={<Cloud className="h-8 w-8 text-blue-400" />}
              title="Seamless Cloud Storage"
              description="Access your files from anywhere, anytime. Your data is always at your fingertips."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-blue-400" />}
              title="Secure & Private"
              description="Your files are encrypted and protected. Only you control who can access your data."
            />
          </div>
        </div>
      </section> */}

      <footer className="flex flex-col fixed left-0 right-0 bottom-0 py-6 w-full shrink-0 items-center px-4 md:px-6 border-gray-800">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ski Drive. All rights reserved.</p>
      </footer>
    </>
  )
}

// *Will be used in features page, until creating that page, i'll just leave this here.
// function FeatureCard({ icon, title, description }: any) {
//   return (
//     <div className="flex flex-col items-center space-y-4 text-center">
//       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700">{icon}</div>
//       <div className="space-y-2">
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-gray-400">{description}</p>
//       </div>
//     </div>
//   )
// }
