export default function HomePage(props: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex items-center justify-center text-center min-h-[100dvh] flex-col bg-gray-900 text-gray-100">
      {props.children}
    </div>
  )
}
