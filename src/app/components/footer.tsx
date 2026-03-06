import { Link } from "react-router-dom";
import { Zap, Facebook, X, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-green-600 to-green-700">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold">AfixHustlers</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              One Hustle. One App. Sell, Book, Promote, Earn – All in One Tap.
            </p>
            <div className="mt-4 flex gap-4">
              <a 
                href="https://facebook.com/afixhustlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/afixhustlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/afixhustlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/afixhustlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">Marketplace</Link></li>
              <li><Link to="/hustleforge" className="text-gray-600 hover:text-green-600 transition-colors">HustleForge AI</Link></li>
              <li><Link to="/social-media" className="text-gray-600 hover:text-green-600 transition-colors">Social Media</Link></li>
              <li><Link to="/dashboard/hustler" className="text-gray-600 hover:text-green-600 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Become an Agent</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">NDPR Compliance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-3 border-t pt-2 text-center text-sm text-gray-600">
          <p>© 2026 AfixHustlers built by GTG_Ltd. All rights reserved. Made in Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}