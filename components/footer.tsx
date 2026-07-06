import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tighter text-emerald-500">
              Gunjal Tours
            </h3>
            <p className="text-neutral-400 max-w-sm">
              Your trusted partner for premium car rentals. We provide safe, comfortable, and reliable transportation services for all your journey needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link href="#fleet" className="text-neutral-400 hover:text-emerald-400 transition-colors">
                Our Fleet
              </Link>
              <Link href="#contact" className="text-neutral-400 hover:text-emerald-400 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p>123 Main Street, City Center<br />Maharashtra, India 400001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <p>bookings@gunjaltours.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Gunjal Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
