import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"
import sky from '../../../image/sky.png'





export default function Footer() {
  return (
    <footer className="bg-slate-50 bg-opacity-90 relative bg-cover bg-no-repeat"   style={{backgroundImage: `url('${sky.src}')`}} >
      {/* Background pattern */}
      

      <div className="custom-container px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-slate-600">
                deal<span className="text-slate-400">news</span>.
              </h2>
            </div>
            <p className="text-slate-600 text-sm">
              For over 25 years, our staff has personally reviewed more than 6,000 online retailers and tens of
              thousands of sales, every day, to deliver the most thrilling deals available, from across the Internet.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-800">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Press Room", "Careers", "FAQs"].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="text-slate-400 mr-2">—</span>
                  <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-800">Helpful Links</h3>
            <ul className="space-y-2">
              {["Contact Us", "Advertise on DealNews", "Marketplace Expertise", "Sweepstakes Winners", "Blog"].map(
                (item) => (
                  <li key={item} className="flex items-center">
                    <span className="text-slate-400 mr-2">—</span>
                    <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-800">Never miss a deal.</h3>
            <p className="text-slate-600 text-sm">
              Sign up for our newsletter with up-to-the-minute offers, sales, and news.
            </p>
            <button className="bg-slate-800 hover:bg-slate-900 w-full sm:w-auto px-10 py-3.5 rounded-full mulish !text-white">
              Subscribe
            </button>
            <div className="pt-2">
              <p className="text-slate-600 text-sm mb-2">Follow Us:</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-600 hover:text-slate-900">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-slate-600 hover:text-slate-900">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 sm:mb-0">Copyright © DealNews all rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-600 hover:text-slate-900 text-sm">
              Disclaimer
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

