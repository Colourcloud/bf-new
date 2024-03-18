import React from 'react'
import AnimatedText from '../common/AnimateText'
import Button from '../common/Button'
import Image from 'next/image'

const Technology = () => {
  return (
    <div className="bg-[--background-light] p-10 md:p-20">
            <div className="site-wrapper">
                <div className="section-block">
                    <div className="section-text w-full flex flex-col gap-8">
                        <AnimatedText><h2 className='text-4xl text-[text-colour] md:text-6xl font-bold w-full md:w-2/3'>We cover a wide range of mobile development technologies</h2></AnimatedText>
                        <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
                            <p className='text-xl text-[--text-colour] font-light w-full md:w-2/3'>We are deeply committed to upholding our core values, ensuring they are intricately woven into every project we undertake and infused in every interaction we engage in.</p>
                            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/application" >Let&apos;s have a chat</Button>
                        </div>
                  </div>
                </div>


                <div className="mobile-technology-cards mt-20 flex flex-col gap-10 md:gap-14">
                    <div className="software-container w-full lg:w-4/5 rounded-2xl border border-gray-300 px-12 pt-12 flex flex-col lg:flex-row justify-between mx-auto">
                        <div className="container-left w-full lg:w-[70%] flex flex-col gap-12 pb-12">
                            <div className='flex flex-col gap-5'>
                                <h4 className='text-4xl md:text-5xl lg:text-5xl text-[--text-colour] font-bold'>iOS App Development</h4>
                                <p className='text-base text-[--text-colour] font-light'>We have all the expertise you need to produce fully-fledged, stable, and scalable mobile applications, including:</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ul className='text-lg text-[--text-colour] flex flex-col gap-5 list-disc marker:text-[--primary-color] ml-5'>
                                    <li>iPhone App Development</li>
                                    <li>iPad App Development</li>
                                    <li>Apple Watch App Development</li>
                                    <li>Apple TV App Development</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h6 className='text-base font-medium text-gray-400'>Developed with moderm technologies:</h6>
                                <div className="flex flex-row">
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/swift.png" alt='swift logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Swift</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/swiftui.png" alt='swiftui logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>SwiftUI</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/objective.png" alt='objectivec logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Objectice-C</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="container-right w-full lg:w-[50%] flex">
                            <div className='h-full flex flex-col justify-end'>
                                <Image src="/mobile-development/ios.png" width='1200' height='1200' alt="ios app design" className='w-full object-contain'></Image>
                            </div>
                        </div>
                    </div>

                    <div className="software-container w-full lg:w-4/5 rounded-2xl border border-gray-300 px-12 pt-12 flex flex-col lg:flex-row justify-between mx-auto">
                        <div className="container-left w-full lg:w-[70%] flex flex-col gap-12 pb-12">
                            <div className='flex flex-col gap-5'>
                                <h4 className='text-4xl md:text-5xl lg:text-5xl text-[--text-colour] font-bold'>Android App Development</h4>
                                <p className='text-base text-[--text-colour] font-light'>Using the latest technologies, we help businesses establish their presence on any modern device and platform, including:</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ul className='text-lg text-[--text-colour] flex flex-col gap-5 list-disc marker:text-[--primary-color] ml-5'>
                                    <li>Android Mobile App Development</li>
                                    <li>Android TV App Development</li>
                                    <li>Android Tablet App Development</li>
                                    <li>Android Wear App Development</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h6 className='text-base font-medium text-gray-400'>Developed with moderm technologies:</h6>
                                <div className="flex flex-row">
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/kotlin.png" alt='kotlin logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Kotlin</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/java.png" alt='java logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Java</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/jetpack.png" alt='jetpack logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Jetpack</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/gradle.png" alt='gradle logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Gradle</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="container-right w-full lg:w-[50%] flex">
                            <div className='h-full flex flex-col justify-end'>
                                <Image src="/mobile-development/android-graphic.png" width='1200' height='1200' alt="android grahpic ui" className='w-full object-contain'></Image>
                            </div>
                        </div>
                    </div>

                    <div className="software-container w-full lg:w-4/5 rounded-2xl border border-gray-300 px-12 pt-12 flex flex-col lg:flex-row justify-between mx-auto">
                        <div className="container-left w-full lg:w-[70%] flex flex-col gap-12 pb-12">
                            <div className='flex flex-col gap-5'>
                                <h4 className='text-4xl md:text-5xl lg:text-5xl text-[--text-colour] font-bold'>Cross-platform App Development</h4>
                                <p className='text-base text-[--text-colour] font-light'>Get top-notch mobile applications that run on multiple platforms, while providing your users with an app that fits their OS. Use this alternative to reduce costs and time-to-market and to reach more users  without loss of quality, including:</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ul className='text-lg text-[--text-colour] flex flex-col gap-5 list-disc marker:text-[--primary-color] ml-5'>
                                    <li>Hybrid Mobile App Development</li>
                                    <li>Hybrid Tablet App Development</li>
                                    <li>Hybrid TV App Developmentt</li>
                                    <li>Progressive Web Applications</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h6 className='text-base font-medium text-gray-400'>Developed with moderm technologies:</h6>
                                <div className="flex flex-row">
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/react.png" alt='react logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>React</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/flutter.png" alt='flutter logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Flutter</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/ionic.png" alt='ionic logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Ionic</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/javascript.png" alt='javascript logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Javascript</span>
                                    </div> 
                                    <div className='flex flex-col items-center'>
                                        <Image src="/mobile-development/software/typescript.png" alt='typescript logo' width='100' height='100' className='w-full' />
                                        <span className='text-sm text-gray-400 font-light'>Typescript</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="container-right w-full lg:w-[50%] flex">
                            <div className='h-full flex flex-col justify-end'>
                                <Image src="/mobile-development/custom-graphic.png" width='1200' height='1200' alt="cross-platform ui" className='w-full object-contain'></Image>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Technology