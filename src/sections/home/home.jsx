import { useTypewriter } from 'react-simple-typewriter';
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Lottie from "lottie-react";

import './homeStyles.css';
import '../../globalStyles.css'
import LandingIllustration from '../../assets/animations/landingDocument.json';
import DownArrow from '../../assets/animations/downArrow.json';
import AboutImgOne from '../../assets/images/illustration/AboutImgOne.png'
import AboutImgTwo from '../../assets/images/illustration/AboutImgTwo.png'

import linkedInIcon from '../../assets/icons/linkedinLogoSVG.svg'
import instagramIcon from '../../assets/icons/instagramLogoSVG.svg'

import teamMembers from '../../data/teamMembers.json'

function Home() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [typeEffect] = useTypewriter({
        words: ['Reliability', 'Security'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
    });
    
    return (
        <>
            <div className="">
                <div id="home" className="h-screen xl:h-screen w-screen flex flex-row justify-between items-center relative p-[128px] xl:p-[160px] z-10 px-24 xl:px-36 2xl:px-52 gradient-background">
                    <div className="w-[900px] h-full flex flex-col justify-center items-start">
                        <div className="font-gilroyEB text-white w-[500px] xl:w-[650px] 2xl:w-[900px] break-words leading-[80px]">
                            <div className="tc txc-1 -ml-4 xl:-ml-2 sm:scale-75 md:scale-80 xl:scale-100" style={{ opacity: 1, visibility: 'inherit', transform: 'rotate(-180deg)' }}>
                                <svg viewBox="0 0 100 100">
                                    <defs>
                                        <path id="c-1" d="M 50, 50m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1-50,0"></path>
                                    </defs>
                                    
                                    <text fontSize="8">
                                        <textPath xlinkHref="#c-1" className='font-albulaExtraLight text-[6px]'>
                                            Documents Made Easy by CheckMate
                                        </textPath>
                                    </text>
                                </svg>
                            </div>


                            <div className="font-albulaExtraLight text-xs md:text-sm lg:text-[10px] xl:text-[12px] 2xl:text-[15px] lg:mt-[20px] xl:mt-[40px] uppercase tracking-[2px] lg:tracking-[2px]">
                                Streamlining Document Verification Process with Unmatched Efficiency
                            </div>
                            
                            <p className="mt-[15px] md:mt-[20px] lg:mt-[25px] lg:text-4xl xl:text-5xl 2xl:text-7xl tracking-[2px] md:tracking-[3px]">
                                Empowering You to Verify Your Documents with <span className="text-[#6536ff]">{typeEffect}</span>|
                            </p>
                        </div>

                        <div className='mt-[40px] xl:mt-[60px] 2xl:mt-[80px]'>
                            {isAuthenticated ? (
                                <div className="flex flex-row justify-center items-center gap-x-4">
                                    <NavLink to="/dashboard/analysis" className="styled-button w-[236px]">Jump To Dashboard</NavLink>
                                    <NavLink className="logoutButton h-[30px] w-[100px] ml-[50px]" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</NavLink>
                                </div>
                            ) : (
                                <NavLink className="styled-button w-[150px] mt-[70px]" onClick={() => loginWithRedirect()}> Get Started </NavLink>
                            )}
                        </div>
                    </div>

                    <Lottie animationData={LandingIllustration} loop={true} className="transform scale-150 w-fit h-fit"/>
                </div>

                <section id="about" className="w-full h-screen flex flex-row justify-between items-center px-24 xl:px-56">
                    <div className="w-[700px] h-full flex flex-col justify-center">
                        <h1 className="text-lg xl:text-xl 2xl:text-xl font-albulaExtraLight tracking-widest">About checkMate</h1>
                        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-gilroyEB mt-3 underFlow text-black">Revolutionizing Document Verification</h1>
                        <p className="text-slate-500 text-sm xl:text-base 2xl:text-md  font-albulaRegular mt-12">checkMate is an advanced platform that automates the verification process, making it faster, more reliable, and easily accessible to users. By combining AI/ML technologies, blockchain, and decentralized storage solutions</p>
                    </div>
                    <img src={AboutImgOne} alt="Illustration One" className="lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] 2xl:w-[625px] 2xl:h-[625px]"/>
                </section>
                
                <section className="w-full h-full flex flex-row justify-between items-center px-24 xl:px-56">
                    <img src={AboutImgTwo} alt="Illustration One" className="lg:w-[380px] lg:h-[380px] -ml-10 xl:w-[450px] xl:h-[450px] 2xl:w-[625px] 2xl:h-[625px]"/>
                    <div className="w-[700px] h-full flex flex-col justify-center ml-5">
                        <h1 className="text-lg xl:text-xl 2xl:text-xl font-albulaExtraLight tracking-widest">Secure Document Verification Solution</h1>
                        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-gilroyEB mt-3 underFlow text-black">Why Choose checkMate?</h1>
                        <p className="text-slate-500 text-sm xl:text-base 2xl:text-md font-albulaRegular mt-12"> Our platform employs advanced AI and machine learning for precise document analysis, coupled with blockchain technology for tamper-proof security, guaranteeing the integrity of your sensitive information.</p>
                        <p className="text-slate-500 text-sm xl:text-base 2xl:text-md font-albulaRegular mt-4"> With decentralized storage via IPFS, your documents are always accessible and protected from data loss. Our user-friendly dashboard offers clear insights into your verification status, and robust authentication ensures that only authorized users can access their data.</p>
                    </div>
                </section>

                <section id="team" className="w-full h-auto flex flex-col justify-center items-center px-24 lg:py-64 2xl:py-96">
                    <h1 className="font-albulaLight tracking-widest uppercase text-gray-500 text-sm">
                        Website Developed by <span className="text-[#6536ff] font-albulaBold">Team Binary Bots</span> for CodeUtsava 8.0, Crafted with Love ❤️
                    </h1>

                    <h1 className="font-gilroyEB text-5xl mt-6 text-gray-800">Meet the team</h1>
                    <div className="flex flex-col items-center mt-6">
                        <Lottie animationData={DownArrow} loop={true} className="w-[100px] h-[100px] hover:cursor-pointer"/>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-64 px-5 w-full xl:max-w-4xl 2xl:max-w-5xl">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg relative group">

                                <div className="relative w-full h-[0px] xl:h-[300px] 2xl:h-[400px] overflow-hidden">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl" />
                                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex space-x-10">
                                            <a href={member.socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                                                <img src={linkedInIcon} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-all duration-200"/>
                                            </a>

                                            <a href={member.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                                                <img src={instagramIcon} alt="Instagram" className="w-10 h-10 hover:scale-110 transition-all duration-200"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-10 py-14 text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 uppercase font-albulaBold tracking-widest">{member.name}</h2>
                                    <h3 className="text-lg text-gray-600 mt-1 font-albulaLight">- {member.role}</h3>
                                    <p className="text-gray-400 mt-4 font-albulaRegular text-sm">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            </div>
        </>
    );
}

export default Home;
