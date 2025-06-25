import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white pt-12 pb-6  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info Section */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-3 group mb-2">
              <div>
                <h1 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                  The SMART Lab
                </h1>
              </div>
            </Link>
            <p className="text-sm text-teal-100 mb-2 leading-relaxed">
              Dedicated to advancing transportation engineering, computer
              vision, and data science through research, teaching, and
              collaboration.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                {
                  icon: Twitter,
                  label: "Twitter",
                  href: "https://twitter.com/armweak9",
                  color: "bg-orange-400",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/",
                  color: "bg-white text-teal-800",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/aboah1994",
                  color: "bg-teal-900",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-full ${social.color} hover:scale-110 transition-transform`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-orange-400 font-semibold text-base mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks
                .filter((link) => link.name !== "Home")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-teal-100 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4">
            <h3 className="text-orange-400 font-semibold text-base mb-4 uppercase tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "CIE 201K, 1410 North 14th Avenue, Fargo, ND 58102",
                },
                { icon: PhoneCall, text: "(701) 231-7564" },
                { icon: Mail, text: "aboah.armstrong@ndsu.edu" },
              ].map((contact, index) => (
                <li key={index}>
                  <div className="flex items-start space-x-3 text-teal-100">
                    <contact.icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-400" />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-teal-700">
          <p className="text-center text-xs text-teal-100">
            &copy; {new Date().getFullYear()} Professor Aboah Armstrong. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
