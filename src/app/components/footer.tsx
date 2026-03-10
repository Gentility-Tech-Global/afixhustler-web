import { Link } from "react-router-dom";
import { Zap, Facebook, X, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-green-600 to-green-700">
                <Zap className="h-6 w-6 text-white" />
              </div>

              <span className="text-lg font-bold text-gray-900">
                AfixHustlers
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-600">
              One Hustle. One App. Sell, Book, Promote, Earn – All in One Tap.
            </p>

            <div className="flex items-center gap-4">
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
                aria-label="X"
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

          {/* PLATFORM */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Platform
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-green-600">
                  Marketplace
                </Link>
              </li>

              <li>
                <Link to="/hustleforge" className="text-gray-600 hover:text-green-600">
                  HustleForge AI
                </Link>
              </li>

              <li>
                <Link to="/social-media" className="text-gray-600 hover:text-green-600">
                  Social Media
                </Link>
              </li>

              <li>
                <Link to="/dashboard/hustler" className="text-gray-600 hover:text-green-600">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Become an Agent
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  NDPR Compliance
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          © 2026 AfixHustlers built by GTG Ltd. All rights reserved. Made in Nigeria 🇳🇬
        </div>

      </div>
    </footer>
  );
}