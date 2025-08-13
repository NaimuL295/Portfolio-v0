import Link from "next/link";



export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3  rounded-lg shadow-md  bg-gradient-to-r from-purple-500 to-cyan-500  hover:shadow-lg hover:shadow-purple-500/50 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
