import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import GridMotion from './ui/grid-motion';
import { CertificationCard } from './Certificate';

const licenses = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'ABC123XYZ',
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-123456',
  },
];

const certifications = [
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },

  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },

  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },
  {
    logo: "/static/sanbercode-logo.jpeg",
    title: "Python - Data Science",
    issuer: "SanberCode",
    issueDate: "September 2021"
  },
  {
    logo: "/static/qwiklabs-logo.jpeg",
    title: "Python - Data Science",
    issuer: "Qwiklabs",
    issueDate: "March 2021"
  },



  // Add more certifications as needed
];

const items = certifications.map((cert, i) => (
  <CertificationCard key={i} {...cert} />
))




export default function License() {
  return (
    <div className="w-full max-w-8xl mx-auto py-16 grid grid-cols-2">
      <div className="flex flex-col md:flex-col items-start gap-8 self-center">
        <div>
          <span className="text-[#FF9776] uppercase tracking-wider font-medium">
            LICENSE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E8DFD0] mt-4 mb-6">
            Professional Certifications & Licenses
          </h2>
          <p className="text-[#E8DFD0]/80 text-lg leading-relaxed">
            A curated list of certifications showcasing expertise in data
            engineering, cloud computing, and software development. Demonstrates
            proficiency in modern technologies, best practices, and industry
            standards.
          </p>
        </div>
        <div className="text-[#E8DFD0]">
          <span className="text-7xl md:text-8xl font-bold">15+</span>
          <p className="text-xl mt-2">Licenses & certifications</p>
        </div>
      </div>

    

      {/* Certification Cards Grid */}
      <div className=" mt-16">
        <GridMotion items={items} />
      </div>
    </div>
  );
}
