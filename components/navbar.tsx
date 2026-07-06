"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-emerald-600">
            Gunjal Tours
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#fleet"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            Our Fleet
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#fleet"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Fleet
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-neutral-600 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-full mt-2">
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
