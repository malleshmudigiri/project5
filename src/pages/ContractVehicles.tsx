import React from 'react';
import { Download, ExternalLink, FileText, Calendar } from 'lucide-react';

const ContractVehicles: React.FC = () => {
  const contractVehicles = [
    {
      name: "GSA Multiple Award Schedule (MAS)",
      contractNumber: "47QRAA20D006P",
      description: "Comprehensive IT services and solutions for federal agencies",
      scope: "IT Professional Services, Cloud Computing, Software Development",
      expirationDate: "March 2029",
      pdfLink: "/contracts/GSA-MAS-Contract.pdf"
    },
    {
      name: "CIO-SP3 Small Business",
      contractNumber: "CIO-SP3-SB-0015",
      description: "IT services contract vehicle for small business solutions",
      scope: "Enterprise Infrastructure Solutions, Emerging Technology",
      expirationDate: "August 2028",
      pdfLink: "/contracts/CIO-SP3-SB-Contract.pdf"
    },
    {
      name: "GSA 8(a) Stars III GWAC",
      contractNumber: "GS-00F-0001Y",
      description: "Small disadvantaged business IT solutions contract",
      scope: "IT Services, Cloud Solutions, Digital Transformation",
      expirationDate: "December 2027",
      pdfLink: "/contracts/8a-Stars-III-Contract.pdf"
    },
    {
      name: "CMS SPARC",
      contractNumber: "CMS-SPARC-2021-0008",
      description: "Strategic Partners Acquisition Readiness Contract for healthcare IT",
      scope: "Healthcare IT Modernization, Data Analytics, Cloud Migration",
      expirationDate: "June 2028",
      pdfLink: "/contracts/CMS-SPARC-Contract.pdf"
    },
    {
      name: "Maryland CATS",
      contractNumber: "MD-CATS-IT-2022-05",
      description: "Maryland Cooperative Purchasing contract for IT services",
      scope: "State and Local Government IT Solutions",
      expirationDate: "February 2027",
      pdfLink: "/contracts/Maryland-CATS-Contract.pdf"
    },
    {
      name: "Maryland Health Benefit Exchange",
      contractNumber: "MHBE-IT-2023-12",
      description: "Technology services for Maryland's health insurance marketplace",
      scope: "Healthcare Exchange Technology, System Integration",
      expirationDate: "January 2029",
      pdfLink: "/contracts/MHBE-Contract.pdf"
    },
    {
      name: "Prince George's County CATS II IDIQ",
      contractNumber: "PGC-CATS-II-2022-18",
      description: "Prince George's County technology services contract",
      scope: "County IT Services, Infrastructure Modernization",
      expirationDate: "September 2027",
      pdfLink: "/contracts/PGC-CATS-II-Contract.pdf"
    },
    {
      name: "JETS 2.0",
      contractNumber: "JETS-2.0-SB-0042",
      description: "Joint Enterprise Technology Services contract",
      scope: "Enterprise IT Services, Cloud Solutions, Cybersecurity",
      expirationDate: "May 2028",
      pdfLink: "/contracts/JETS-2.0-Contract.pdf"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contract Vehicles</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Streamlined procurement through our comprehensive portfolio of government and commercial contract vehicles
            </p>
          </div>
        </div>
      </section>

      {/* Contract Vehicles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Contract Vehicles</h2>
            <p className="text-xl text-gray-600">
              Choose the contract vehicle that best fits your procurement requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contractVehicles.map((contract, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{contract.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 ml-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {contract.expirationDate}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-[#172059] font-semibold mb-2">
                    Contract #: {contract.contractNumber}
                  </p>
                  <p className="text-gray-600 mb-4">{contract.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Scope of Work:</h4>
                  <p className="text-gray-600 text-sm">{contract.scope}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={contract.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors flex-1"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Contract
                  </a>
                  <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#172059] text-[#172059] rounded-lg hover:bg-[#172059] hover:text-white transition-colors flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Contract Vehicles</h2>
            <p className="text-xl text-gray-600">
              Streamlined procurement with competitive pricing and proven performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Streamlined Procurement</h3>
              <p className="text-gray-600">
                Pre-negotiated terms and conditions reduce procurement time and administrative burden, 
                allowing faster project initiation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <ExternalLink className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">
                Our contract vehicles provide competitive pricing with transparent fee structures, 
                ensuring maximum value for your technology investments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Performance</h3>
              <p className="text-gray-600">
                Our track record of successful project delivery and client satisfaction provides 
                confidence in our ability to meet your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Statement CTA */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Our Capability Statement?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Download our comprehensive capability statement for detailed information about our services, 
            past performance, and contract vehicles.
          </p>
          <a
            href="/capability-statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Capability Statement
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContractVehicles;