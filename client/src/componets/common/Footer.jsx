import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="text-xl font-bold">ShopSphere</Link>
          <p className="mt-3 text-gray-400 text-sm">Quality products delivered with care. ShopSphere helps you find the best deals.</p>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/" className="hover:text-white">Careers</Link></li>
            <li><Link to="/" className="hover:text-white">Press</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/" className="hover:text-white">Shipping</Link></li>
            <li><Link to="/" className="hover:text-white">Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-gray-400 text-sm">support@shopsphere.com</p>
          <div className="mt-4 flex space-x-3">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.897 4.897 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.941 4.816 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.514 14.01-14.02 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692V11.07h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.128 4.602.4 3.635 1.366 2.669 2.333 2.397 3.505 2.34 4.783 2.282 6.064 2.27 6.473 2.27 10.73s.012 4.666.07 5.947c.058 1.278.33 2.45 1.296 3.416.966.966 2.138 1.238 3.416 1.296 1.281.058 1.69.07 5.947.07s4.666-.012 5.947-.07c1.278-.058 2.45-.33 3.416-1.296.966-.966 1.238-2.138 1.296-3.416.058-1.281.07-1.69.07-5.947s-.012-4.666-.07-5.947c-.058-1.278-.33-2.45-1.296-3.416C20.45.4 19.278.128 18 .07 16.719.012 16.31 0 12 0z"/>
                <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a3.999 3.999 0 0 1-4 4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
