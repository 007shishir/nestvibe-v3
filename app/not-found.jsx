import Link from "next/link";
import { Button } from "@heroui/react"; // Assuming HeroUI usage
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Visual Element */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-bold text-slate-100 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Home className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">
              This home isn't on the market.
            </h2>
          </div>
        </div>

        <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">
          The page you're looking for has been moved, deleted, or perhaps it 
          never existed. Let's get you back to finding your dream property.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            as={Link}
            href="/"
            color="primary"
            variant="shadow"
            size="lg"
            startContent={<Home className="w-4 h-4" />}
            className="font-semibold"
          >
            Back to Home
          </Button>

          <Button
            as={Link}
            href="/properties"
            variant="bordered"
            size="lg"
            startContent={<Search className="w-4 h-4" />}
            className="font-semibold border-slate-200"
          >
            Search Properties
          </Button>
        </div>

        {/* Quick Links for Real Estate */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest">
            Popular Areas
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
            <Link href="/search?location=Gulshan" className="hover:text-primary transition-colors">Gulshan</Link>
            <Link href="/search?location=Banani" className="hover:text-primary transition-colors">Banani</Link>
            <Link href="/search?location=Dhanmondi" className="hover:text-primary transition-colors">Dhanmondi</Link>
            <Link href="/search?location=Uttara" className="hover:text-primary transition-colors">Uttara</Link>
          </div>
        </div>
      </div>
    </main>
  );
}