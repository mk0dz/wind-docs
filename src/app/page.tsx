'use client'
// app/page.tsx (or pages/index.tsx)
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import animationData from '../../public/home.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen font-mono">

      <div className="relative w-4/5 bg-[#5edaff] bg-opacity-80 p-12 lg:p-20 flex flex-col justify-end text-gray-800 overflow-hidden">
      
      <div className="absolute top-0 left-0 flex items-center">
    <Image
      src="/logo.png"
      alt="Company Logo"
      width={200}
      height={200}
      className="object-contain"
    />

  </div>
<header className="absolute top-0 right-0 max-w-8xl px-8 py-4 flex items-center justify-between backdrop-blur-md z-20">

  <nav>
    <ul className="flex space-x-8 text-gray-800">
      <li>
        <Link href="/docs" className="hover:underline">
          Docs
        </Link>
      </li>
      <li>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/people" className="hover:underline">
          People
        </Link>
      </li>
      <li>
        <Link href="/qna" className="hover:underline">
          Q&A
        </Link>
      </li>
    </ul>
  </nav>
</header>

          <div>
            <div className="w-64 h-64 mx-auto mb-8">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <h1 className='text-4xl font-bold'> <span className="underline"> wIndexer:</span> A Decentralized Autonomous Incentivized Indexing Layer for Solana</h1>
          <p className='text-xl'>wIndexer is a new decentralized indexing system built for the high-speed Solana blockchain. It shifts data indexing away from a central point to a network of incentivized participants. By using the Interplanetary Data Machine (IPDM) and the libp2p gossipsub network, wIndexer aims to create a robust and open-source infrastructure capable of handling Solana's demanding data flow. The system combines peer-to-peer networking, efficient data processing, and economic rewards to provide reliable, scalable, and decentralized data indexing with high performance, low latency, and strong data consistency and availability.</p>
          </div>
      </div>


      <div className="w-1/5 bg-black text-white p-12 lg:p-16 flex flex-col justify-center space-y-8"> {/* Adjust background color, padding, width, and spacing */}

        <div className="space-y-2">
          <p>Join our community, have prodcuctive conversations, meet great people, engage with us talk about solana. we are waiting for you. join us on </p>
          <Link href="https://t.me/+MznFxMPcIhM3ZDI1" className="underline hover:text-gray-300">
            telegram 
          </Link>
          
        </div>

        <div className="space-y-2">
          <p>Our project is completly Opens Source project, So If you you dev wants to contribute to the project, you can find the repository on </p>
          <Link href="https://github.com/wind-network" className="underline hover:text-gray-300">
            Github 
          </Link>
        </div>

        <div className="space-y-2">
          <p>and find contributing guidlines</p>
          <Link href="https://github.com/wind-network/windexer/blob/main/README.md" className="underline hover:text-gray-300">
            here
          </Link>
        </div>

        <div className="space-y-2">
          <p>Follow updates on</p>
          <Link href="https://x.com/windnetwork_" className="underline hover:text-gray-300">
            twitter 
          </Link>
        </div>

        <div className="pt-8 space-y-4">
          <Link href="/docs/api-reference" className="block w-full">
            <button className="w-full bg-black text-white border border-white py-3 px-6 text-center hover:bg-gray-800 transition duration-200">
              API Reference
            </button>
          </Link>
          <Link href="/docs" className="block w-full">
            <button className="w-full bg-black text-white border border-white py-3 px-6 text-center hover:bg-gray-800 transition duration-200">
              Get Started
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;