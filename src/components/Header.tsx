// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   return (
//     <header className="fixed top-0 w-full bg-[#172059] text-white z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//            <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://technogeninc.com/wp-content/uploads/2021/10/technogen-Logo.png"
//                 alt="Technogen Logo"
//                 className="h-10 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-8">
//             <Link to="/" className="hover:text-gray-300 transition-colors">
//               Home
//             </Link>
            
//             {/* Who We Are Dropdown */}
//             <div className="relative group">
//               <button
//                 className="flex items-center hover:text-gray-300 transition-colors"
//                 onClick={() => toggleDropdown('whoWeAre')}
//               >
//                 Who We Are <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
//                 <Link to="/leadership" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
//                 <Link to="/certifications" className="block px-4 py-2 hover:bg-gray-100">Certifications</Link>
//                 <Link to="/partners" className="block px-4 py-2 hover:bg-gray-100">Partners</Link>
//               </div>
//             </div>

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button
//                 className="flex items-center hover:text-gray-300 transition-colors"
//                 onClick={() => toggleDropdown('services')}
//               >
//                 Services <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Cloud</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Data & Analytics</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Hyper Automation</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Cyber Security</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Customer Experience Management</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Business Process Management</Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">People & Consulting</Link>
//               </div>
//             </div>

//             {/* Industries Dropdown */}
//             <div className="relative group">
//               <button
//                 className="flex items-center hover:text-gray-300 transition-colors"
//                 onClick={() => toggleDropdown('industries')}
//               >
//                 Industries <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <Link to="/industries/federal" className="block px-4 py-2 hover:bg-gray-100">Federal</Link>
//                 <Link to="/industries/state-local" className="block px-4 py-2 hover:bg-gray-100">State & Local</Link>
//                 <Link to="/industries/education" className="block px-4 py-2 hover:bg-gray-100">Education</Link>
//                 <Link to="/industries/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial</Link>
//               </div>
//             </div>

//             {/* Contract Vehicles Dropdown */}
//             <div className="relative group">
//               <button
//                 className="flex items-center hover:text-gray-300 transition-colors"
//                 onClick={() => toggleDropdown('contracts')}
//               >
//                 Contract Vehicles <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">GSA MAS</Link>
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">CIO-SP3 Small Business</Link>
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">GSA 8(a) Stars III GWAC</Link>
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">CMS SPARC</Link>
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">Maryland CATS</Link>
//                 <Link to="/contract-vehicles" className="block px-4 py-2 hover:bg-gray-100 text-sm">JETS 2.0</Link>
//               </div>
//             </div>

//             <Link to="/contact" className="hover:text-gray-300 transition-colors">
//               Contact Us
//             </Link>
//             <Link to="/careers" className="hover:text-gray-300 transition-colors">
//               Careers
//             </Link>
//             <Link to="/blog" className="hover:text-gray-300 transition-colors">
//               Blog
//             </Link>
//           </nav>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-gray-300"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-[#172059] border-t border-gray-600">
//           <div className="px-4 py-2 space-y-2">
//             <Link to="/" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//             <Link to="/about" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               About Us
//             </Link>
//             <Link to="/services" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Services
//             </Link>
//             <Link to="/industries" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Industries
//             </Link>
//             <Link to="/contract-vehicles" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Contract Vehicles
//             </Link>
//             <Link to="/contact" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Contact Us
//             </Link>
//             <Link to="/careers" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Careers
//             </Link>
//             <Link to="/blog" className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
//               Blog
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src=".//TechnoGen Logo. 1.png"
//                 alt="Technogen Logo"
//                 className="h-10 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Center Navigation */}
//           <nav className="hidden lg:flex space-x-8 font-medium text-sm uppercase tracking-wide">
//             <Link to="/solutions" className="hover:text-[#5a5a5a] transition-colors">
//               Solution
//             </Link>
//             <Link to="/sector" className="hover:text-[#5a5a5a] transition-colors">
//               Sector
//             </Link>
//             <Link to="/company" className="hover:text-[#5a5a5a] transition-colors">
//               Company
//             </Link>
//             <Link to="/capabilities" className="hover:text-[#5a5a5a] transition-colors">
//               Capabilities
//             </Link>
//           </nav>

//           {/* Right Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <Link to="/careers" className="hover:text-[#5a5a5a] transition-colors">
//               Careers
//             </Link>
//             <Link to="/blog" className="hover:text-[#5a5a5a] transition-colors">
//               Blog
//             </Link>
//             <button className="hover:text-[#5a5a5a] transition-colors">
//               <Search className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-[#1a1a1a] hover:text-gray-600"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200">
//           <div className="px-4 py-4 space-y-4 text-[#1a1a1a]">
//             <Link to="/solutions" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Solution
//             </Link>
//             <Link to="/sector" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Sector
//             </Link>
//             <Link to="/company" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Company
//             </Link>
//             <Link to="/capabilities" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Capabilities
//             </Link>
//             <Link to="/careers" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Careers
//             </Link>
//             <Link to="/blog" className="block hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
//               Blog
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// #####
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, Menu, Newspaper, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg"
                alt="Technogen Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex space-x-10 font-bold text-sm uppercase tracking-wide">
            {/* Solutions with dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors">
                <span>SOLUTIONS</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg border border-gray-200"
                  >
                    <div className="py-2 text-sm text-gray-700">
                      <Link
                        to="/solutions/servicenow"
                        className="block px-4 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]"
                      >
                        ServiceNow
                      </Link>
                      <Link
                        to="/solutions/aws"
                        className="block px-4 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]"
                      >
                        AWS
                      </Link>
                      <Link
                        to="/solutions/salesforce"
                        className="block px-4 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]"
                      >
                        Salesforce
                      </Link>
                      <Link
                        to="/solutions/devsecops"
                        className="block px-4 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]"
                      >
                        DevSecOps Transformation
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
            <Link to="/sector" className="hover:text-[#ff6b00] transition-colors">
              Sector
            </Link>
            <Link to="/company" className="hover:text-[#ff6b00] transition-colors">
              Company
            </Link>
            <Link to="/capabilities" className="hover:text-[#ff6b00] transition-colors">
              Capabilities
            </Link>
          </nav>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/careers"
              className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors font-bold"
            >
              <Briefcase className="h-5 w-5" />
              {/* <span>Careers</span> */}
            </Link>
            <Link
              to="/blog"
              className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors font-bold"
            >
              <Newspaper className="h-5 w-5" />
              {/* <span>Blog</span> */}
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1a1a1a] hover:text-[#ff6b00]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#fff8f3] shadow-md px-6 py-4 z-50"
          >
            {/* <div className="max-w-3xl mx-auto flex items-center space-x-3">
              <Search className="h-5 w-5 text-[#ff6b00]" />
              <input
                type="text"
                placeholder="Search pages like Solutions, ServiceNow..."
                className="w-full px-4 py-2 border border-[#ff6b00] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] text-[#1a1a1a] font-medium"
              />
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4 text-[#1a1a1a] font-bold">
            {/* Solutions dropdown (mobile simplified) */}
            <details>
              <summary className="cursor-pointer hover:text-[#ff6b00]">Solutions</summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/solutions/servicenow" className="block hover:text-[#ff6b00]">
                  ServiceNow
                </Link>
                <Link to="/solutions/aws" className="block hover:text-[#ff6b00]">
                  AWS
                </Link>
                <Link to="/solutions/salesforce" className="block hover:text-[#ff6b00]">
                  Salesforce
                </Link>
                <Link to="/solutions/devsecops" className="block hover:text-[#ff6b00]">
                  DevSecOps Transformation
                </Link>
              </div>
            </details>

            <Link to="/sector" className="block hover:text-[#ff6b00]" onClick={() => setIsMenuOpen(false)}>
              Sector
            </Link>
            <Link to="/company" className="block hover:text-[#ff6b00]" onClick={() => setIsMenuOpen(false)}>
              Company
            </Link>
            <Link to="/capabilities" className="block hover:text-[#ff6b00]" onClick={() => setIsMenuOpen(false)}>
              Capabilities
            </Link>
            <Link to="/careers" className="flex items-center space-x-1 hover:text-[#ff6b00]" onClick={() => setIsMenuOpen(false)}>
              <Briefcase className="h-5 w-5" />
              <span>Careers</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-1 hover:text-[#ff6b00]" onClick={() => setIsMenuOpen(false)}>
              <Newspaper className="h-5 w-5" />
              <span>Blog</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Industries', path: '/industries' },
//     { name: 'Contract Vehicles', path: '/contract-vehicles' },
//     { name: 'Contact Us', path: '/contact' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Blog', path: '/blog' },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#172059] shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
          // <div className="flex-shrink-0">
          //   <Link to="/">
          //     <img
          //       src="https://technogeninc.com/wp-content/uploads/2021/10/technogen-Logo.png"
          //       alt="Technogen Logo"
          //       className="h-10 w-auto"
          //     />
          //   </Link>
          // </div>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex space-x-6 text-white font-medium">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="hover:text-gray-300 transition"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-[#172059] px-4 py-4 border-t border-gray-600 space-y-2 text-white">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsMenuOpen(false)}
//               className="block py-2 hover:text-gray-300 transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
