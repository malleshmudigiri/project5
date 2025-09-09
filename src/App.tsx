// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';
// import Services from './pages/Services';
// import ServiceNow from './pages/ServiceNow';
// import Industries from './pages/Industries';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import './index.css';
// import Sector from './pages/sector';
// import Solutions from './pages/Solutions';
// import ServiceNow from './pages/ServiceNow';
// import salesforce from './pages/salesforce';
// import solution from './pages/Solutions';
// import company from './pages/company';
// import capabilities from './pages/Capabilities';
// import aws from './pages/Aws';
// import devsecops from './pages/devsecops';
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/servicenow" element={<ServiceNow />} />
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/industries/federal" element={<Federal />} />
//             <Route path="/industries/state-local" element={<StateLocal />} />
//             <Route path="/industries/education" element={<Education />} />
//             <Route path="/industries/commercial" element={<Commercial />} />
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// ##########################################################
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Certifications from './pages/Certifications';
import Partners from './pages/Partners';
import Services from './pages/Services';
import ServiceNow from './pages/ServiceNow';
import Industries from './pages/Industries';
import Federal from './pages/Federal';
import StateLocal from './pages/StateLocal';
import Education from './pages/Education';
import Commercial from './pages/Commercial';
import ContractVehicles from './pages/ContractVehicles';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sector from './pages/sector';
import Solutions from './pages/Solutions';
import Capabilities from './pages/Capabilities';
import Aws from './pages/Aws';
import DevSecOps from './pages/devsecops';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* ✅ Header always visible */}
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/servicenow" element={<ServiceNow />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/federal" element={<Federal />} />
            <Route path="/industries/state-local" element={<StateLocal />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/commercial" element={<Commercial />} />
            <Route path="/contract-vehicles" element={<ContractVehicles />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sector" element={<Sector />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/aws" element={<Aws />} />
            <Route path="/devsecops" element={<DevSecOps />} />
          </Routes>
        </main>

        {/* ✅ Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';
// import Services from './pages/Services';
// import ServiceNow from './pages/ServiceNow';
// import AWS from './pages/AWS';
// import Salesforce from './pages/Salesforce';
// import DevSecOps from './pages/DevSecOps';
// import Industries from './pages/Industries';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             {/* Home */}
//             <Route path="/" element={<Home />} />

//             {/* Company */}
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />

//             {/* Solutions */}
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/servicenow" element={<ServiceNow />} />
//             <Route path="/services/aws" element={<AWS />} />
//             <Route path="/services/salesforce" element={<Salesforce />} />
//             <Route path="/services/devsecops" element={<DevSecOps />} />

//             {/* Industries */}
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/industries/federal" element={<Federal />} />
//             <Route path="/industries/state-local" element={<StateLocal />} />
//             <Route path="/industries/education" element={<Education />} />
//             <Route path="/industries/commercial" element={<Commercial />} />

//             {/* Others */}
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
