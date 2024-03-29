import React from "react";
//import PresaleContext  from '/src/context/PresaleContext';

import bgImg from "../../assets/cyber-bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-slate-900 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2  m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-white"></p>
          <h1 className="py-8 text-5xl md:text-7xl font-bold text-white">
            {/* Your #1 decentralized web3 protocol in defi for secure crypto payments */}
           Pay with Crypto, fast, securely with <span className="text-orange-600">Ajira</span> <span className="text-yellow-600">Pay</span>
           {/* Secure onchain crypto payments protocol for Web3 */}
          </h1>
          <p className="text-2xl text-white">
            {/* We leverage on the power of blockchain technology and decentralization to power crypto payments  */}
            {/* A decentralized web3 protocol for secure and seamless crypto payments. */}
            A decentralized Web3.0 protocol for secure and seamless crypto payments.
            </p>
            <p>
            {/* <a href="https://linktr.ee/ajira_pay_finance" target="_blank" rel="noreferrer">
            <button className="py-3 px-6 my-4 bg-transparent">Explore and Find Out More About Us</button>
            </a> */}
            <a href="https://ajirapay.finance" target="_blank" rel="noreferrer">
            <button className="py-3 px-6 my-4 bg-transparent">Visit Main Website</button>
            </a>
            {/* <a href="https://www.pinksale.finance/launchpad/0xda45eD1958a6cEBAc3a07d715aCeC13CbE6fC762?chain=BSC" target="_blank" rel="noreferrer">
            <button className="py-3 px-6 my-4 bg-transparent">Buy $AJP on Pinksale</button>
            </a> */}
            </p>
            <p>
           
            </p>
            {/* <a href="https://github.com/SECURI-Cybersecurity-Audit-KYC/Audit-Report/blob/main/Full%20Audit%20Report%20For%20Ajira%20Pay%20Finance.pdf" target="_blank" rel="noreferrer">
            <button className="py-3 px-6 my-4 bg-transparent">Audit</button>
            </a>
            <a href="https://github.com/SECURI-Cybersecurity-Audit-KYC/KYC-Report/tree/main/Aijira-Pay-Finance" target="_blank" rel="noreferrer">
            <button className="py-3 px-6 my-4 bg-transparent">KYC</button>
            </a> */}
           
          {/* <Link to="/tokenomics" smooth={true} offset={-200} duration={500}>
          <button className="py-3 px-6 my-4 bg-transparent">Tokenomics</button>
                
            </Link> */}
        </div>
        <div>
          <img className="w-full object-fill" src={bgImg} alt="/" />
        </div>
        {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Hero;
