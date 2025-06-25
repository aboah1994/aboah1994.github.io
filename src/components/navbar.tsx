"use client";

import * as React from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    function handleScroll(latest: number) {
      setHasScrolled(latest > 10);
    }
    scrollY.on("change", handleScroll);
    return () => scrollY.clearListeners();
  }, [scrollY]);

  return (
    <header
      className={`bg-teal-800 px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "shadow-lg shadow-slate-900/5" : ""
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="min-h-16 flex items-center justify-between relative">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div>
                <h1 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                  The SMART Lab
                </h1>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((navLink) => {
              const isActive =
                navLink.name === "Home"
                  ? pathname === "/home" || pathname === navLink.href
                  : pathname === navLink.href;

              return (
                <Link
                  key={navLink.name}
                  href={navLink.href}
                  className={`relative group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-white hover:text-orange-300`}
                  passHref
                >
                  {navLink.name}
                  <motion.span
                    className="absolute left-4 right-4 -bottom-0 h-0.5 bg-orange-400 origin-left"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ pointerEvents: "none" }}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 text-white hover:text-white/80 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden bg-white border-t border-slate-200"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((navLink) => {
                const isActive =
                  navLink.name === "Home"
                    ? pathname === "/home" || pathname === navLink.href
                    : pathname === navLink.href;

                return (
                  <Link
                    key={navLink.name}
                    href={navLink.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {navLink.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
