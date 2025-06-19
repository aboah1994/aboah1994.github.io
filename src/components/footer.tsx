import {
  Facebook,
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
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div>
                  <h1 className="text-lg font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                    Prof. Aboah Armstrong
                  </h1>
                  <p className="text-xs text-slate-400 -mt-1">
                    Professor & Researcher
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Follow me on the various social media platforms for updates and
              tips on how to care for your loved ones.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Github, label: "GitHub" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-white font-semibold text-base mb-4">
              Quick links
            </h3>
            <ul className="space-y-3">
              {navLinks
                .filter((link) => link.name !== "Home")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-base mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "3081 Namib dr, Colorado Springs, CO, 80939",
                },
                { icon: PhoneCall, text: "(719) 291-0835" },
                { icon: Mail, text: "aboah.armstrong@ndsu.edu" },
              ].map((contact, index) => (
                <li key={index}>
                  <div className="flex items-start space-x-3 text-slate-400">
                    <contact.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Professor Aboah Armstrong. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
