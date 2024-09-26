import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footer py-16 md:py-24 bg-[#01010c] border-t border-[#222]">
                <div className="site-wrapper">
                    <div className="footer-container flex gap-14 flex-col lg:flex-row">
                        <div className="company-statement flex flex-col gap-6 max-w-xs">
                            <Link href="/" className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="125" height="37.029" viewBox="0 0 125 37.029"><defs><clipPath id="a"><path d="M8.385,6.838h0L7.665,8.8l19.62,7.243L28,14.08A10.455,10.455,0,0,0,21.818.651h0A10.445,10.445,0,0,0,8.385,6.838" transform="translate(-7.665 0)" fill="none"/></clipPath><linearGradient id="b" x1="0.131" y1="1.588" x2="0.138" y2="1.588" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#7a4aff"/><stop offset="1" stop-color="#5232c6"/></linearGradient><clipPath id="c"><path d="M2.628,23.976l-.156.423L1.9,25.934l-.737,2A18.748,18.748,0,0,0,0,34.4v.067A18.8,18.8,0,0,0,12.285,52.06l3.961,1.461a10.437,10.437,0,0,0,3.595.648h.042a10.459,10.459,0,0,0,9.789-6.842q.086-.234.161-.471l0,0A10.647,10.647,0,0,0,23.212,33.8L5.831,27.387a4.183,4.183,0,0,1-2.686-4.581,10.4,10.4,0,0,0-.517,1.17" transform="translate(0 -22.806)" fill="none"/></clipPath><linearGradient id="d" x1="0.221" y1="0.77" x2="0.225" y2="0.77" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#8c62ff"/><stop offset="0.585" stop-color="#7a4aff"/><stop offset="1" stop-color="#6f4aff"/></linearGradient></defs><g transform="translate(-146 68.438)"><g transform="translate(-8178 -6779.06)"><g transform="translate(8358.853 6715.636)"><path d="M1.46,0V-16.352H7.188a7.521,7.521,0,0,1,4.515,1.14,3.9,3.9,0,0,1,1.539,3.341,3.694,3.694,0,0,1-.618,2.117A3.568,3.568,0,0,1,10.9-8.412a3.452,3.452,0,0,1,1.982,1.269,3.752,3.752,0,0,1,.724,2.336,4.315,4.315,0,0,1-1.5,3.571A6.775,6.775,0,0,1,7.816,0ZM4.829-7.12v4.414H7.715a2.785,2.785,0,0,0,1.859-.567,1.945,1.945,0,0,0,.668-1.567A2.053,2.053,0,0,0,7.917-7.12Zm0-2.381H7.322q2.549-.045,2.549-2.033a1.878,1.878,0,0,0-.646-1.6,3.4,3.4,0,0,0-2.038-.489H4.829ZM22.972-1.235A4.07,4.07,0,0,1,19.648.225,3.839,3.839,0,0,1,16.666-.9a4.794,4.794,0,0,1-1.05-3.291v-7.962h3.246V-4.3q0,1.9,1.729,1.9A2.344,2.344,0,0,0,22.86-3.549v-8.6h3.257V0H23.062ZM31.76,0H28.5V-12.151H31.76ZM28.312-15.3a1.6,1.6,0,0,1,.489-1.2,1.835,1.835,0,0,1,1.331-.472,1.839,1.839,0,0,1,1.325.472,1.589,1.589,0,0,1,.494,1.2,1.593,1.593,0,0,1-.5,1.213,1.844,1.844,0,0,1-1.32.472,1.844,1.844,0,0,1-1.32-.472A1.593,1.593,0,0,1,28.312-15.3ZM37.628,0H34.372V-17.25h3.257Zm6.329-15.139v2.987h2.078v2.381H43.957v6.064a1.448,1.448,0,0,0,.258.966,1.3,1.3,0,0,0,.988.292,5.176,5.176,0,0,0,.955-.079V-.067a6.682,6.682,0,0,1-1.965.292q-3.414,0-3.481-3.448V-9.771H38.937v-2.381h1.774v-2.987ZM48.5,0V-9.771H46.692v-2.381H48.5v-1.033a4.2,4.2,0,0,1,1.174-3.173,4.545,4.545,0,0,1,3.285-1.129,7.587,7.587,0,0,1,1.651.225l-.034,2.516a4.138,4.138,0,0,0-.988-.1q-1.831,0-1.831,1.718v.977h2.415v2.381H51.757V0ZM59.3,0H56.047V-17.25H59.3Zm9.737,0a3.6,3.6,0,0,1-.326-1.089A3.927,3.927,0,0,1,65.65.225,4.314,4.314,0,0,1,62.691-.809a3.323,3.323,0,0,1-1.174-2.605,3.434,3.434,0,0,1,1.432-2.965,7.065,7.065,0,0,1,4.138-1.044h1.494v-.7a2,2,0,0,0-.432-1.348,1.7,1.7,0,0,0-1.365-.505A1.934,1.934,0,0,0,65.5-9.58,1.335,1.335,0,0,0,65.032-8.5H61.787a3.26,3.26,0,0,1,.651-1.954,4.306,4.306,0,0,1,1.842-1.409,6.712,6.712,0,0,1,2.673-.511,5.3,5.3,0,0,1,3.566,1.129,3.948,3.948,0,0,1,1.32,3.173v5.267a5.809,5.809,0,0,0,.483,2.617V0ZM66.357-2.257a2.8,2.8,0,0,0,1.325-.32,2.1,2.1,0,0,0,.9-.859V-5.525H67.368q-2.437,0-2.594,1.685l-.011.191a1.3,1.3,0,0,0,.427,1A1.658,1.658,0,0,0,66.357-2.257ZM77.987-15.139v2.987h2.078v2.381H77.987v6.064a1.448,1.448,0,0,0,.258.966,1.3,1.3,0,0,0,.988.292,5.176,5.176,0,0,0,.955-.079V-.067a6.682,6.682,0,0,1-1.965.292q-3.414,0-3.481-3.448V-9.771H72.967v-2.381h1.774v-2.987Z" transform="translate(0 21)" fill="#fff"/></g></g><g transform="translate(146 -68.438)"><g transform="translate(1.904 0)"><g clip-path="url(#a)"><path d="M-9.67-21.392-18.631-1.779,7.813,5.279l8.961-19.613Z" transform="translate(12.098 16.077)" fill="url(#b)"/></g></g><g transform="translate(0 5.666)"><g clip-path="url(#c)"><path d="M6.247-10.937-30.875-31.072l-19.21,38,37.122,20.134Z" transform="translate(37.642 17.686)" fill="url(#d)"/></g></g></g></g></svg></Link>
                            <p className='text-white font-light text-lg'>We make getting online easy for everyone. It shouldn&apos;t be a scary endeavour. We save that for <br/> &#127875; Halloween &#127875;</p>
                            <div className="socials flex flex-col gap-6">
                                <h4 className='text-[#b0b0b0] font-bold text-lg'>Connect with us:</h4>
                                <div className="social-icons flex flex-row gap-4">
                                    <a href="https://www.facebook.com/builtflat" target="_blank"><FaFacebook className="text-white text-2xl" /></a>
                                    <a href="https://www.instagram.com/builtflat/" target="_blank"><FaInstagram className="text-white text-2xl" /></a>
                                    <a href="https://nz.linkedin.com/company/builtflat" target="_blank"><FaLinkedin className="text-white text-2xl" /></a>
                                    {/* <a href="https://nz.linkedin.com/company/builtflat" target="_blank"><BsTwitterX className="text-white text-2xl" /></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="footer-col flex flex-col gap-6">
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>Solutions</span>
                                <li className='text-[#898989] text-base'><Link href="/application">Website Development</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/uiux">UI/UX Design</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/mobile-development">Mobile Development</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/template-design">Template Driven Design</Link></li>
                            </ul>
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>Our Work</span>
                                <li className='text-[#898989] text-base'><Link href="/portfolio">Case Studies</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col flex flex-col gap-6">
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>Partnership</span>
                                <li className='text-[#898989] text-base'><Link href="/partnership">Colaboration</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/partnership">How we work</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/partnership">Contracting</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/partnership">Partner with us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col flex flex-col gap-6">
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>About us</span>
                                <li className='text-[#898989] text-base'><Link href="/about">Meet The Team</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/about">Our Story</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/about">Our Design Mission</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col flex flex-col gap-6">
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>News &amp; Updates</span>
                                <li className='text-[#898989] text-base'><Link href="/blog">Blog</Link></li>
                                <li className='text-[#898989] text-base'><Link href="/blog">Business News</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col flex flex-col gap-6">
                            <ul className='flex flex-col gap-4'>
                                <span className='text-white font-medium text-lg'>Builtflat</span>
                                <a href="mailto:hello@builtflat.co.nz" className='text-[--primary-color] text-base'>hello@builtflat.co.nz</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;