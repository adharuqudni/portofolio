import { FC } from 'react';
import Image from 'next/image';

interface CertificationCardProps {
  logo: string;
  title: string;
  issuer: string;
  issueDate: string;
}

export const CertificationCard: FC<CertificationCardProps> = ({
  logo,
  title,
  issuer,
  issueDate,
}) => {
  return (
    <div className="group relative bg-[#2A3B33]/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-[#2A3B33]">
      <div className="bg-white rounded-xl w-20 h-20 mb-6 overflow-hidden">
        <Image
          src={logo}
          alt={`${issuer} logo`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <h3 className="text-[#E8DFD0] text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-[#E8DFD0]/60 text-lg mb-2">{issuer}</p>
      <p className="text-[#E8DFD0]/40">Issued {issueDate}</p>
      
      <div className="absolute top-8 right-8 text-[#4CA785]">
        <svg
          className="w-6 h-6 transform transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  );
};