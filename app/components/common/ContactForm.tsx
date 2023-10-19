import Link from 'next/link';
import Image from 'next/image';

const ContactForm = () => {
    return (
        <>
        <div className="contact-container fixed top-0 left-0 right-0 bottom-0 bg-black w-full z-[999]">
            <div className="contact-wrapper flex flex-row">
                <div className="contact-container-image w-1/3 bg-white h-screen"></div>
                <div className="contact-form max-w-xl ml-24 flex flex-col gap-6 justify-center">
                    <div>
                        <h2 className="text-4xl text-white leading-tight font-bold md:text-6xl pb-4">Your digital journey begins here</h2>
                    </div>
                    <form action="">
                        <div className="form-fields flex flex-col gap-6">
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Name:</label>
                                <input type="text" name="name" className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' id="login" placeholder='John Doe'/>
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Email:</label>
                                <input type="email" name="email" className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' id="email" placeholder='johndoe@email.co.nz'/>
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Website Link:</label>
                                <input type="text" name="link" className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' id="link" placeholder='www.yourwebsite.co.nz'/>
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Tell us about your project:</label>
                                <textarea name="message" className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' id="message" rows={6} placeholder="Tell us about your project and we'll get right back to you!"/>
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <input type="submit" value="Let's get to work" className='bg-[--primary-color] p-3 text-sm mt-6 text-white rounded-md' />
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactForm;