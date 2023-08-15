import Image from 'next/image';
import Link from 'next/link';

const CmsSoftware = () => {
    return (
        <>
        <section className="builtflat-section">
            <div className="container w-11/12 lg:w-2/3 mx-auto rounded-lg shadow-md bg-white border-gray-200 border p-8 md:p-10">
                <div className="section-text flex flex-col gap-4 w-full md:w-3/5">
                    <h4 className='text-3xl md:text-4xl font-bold'>Comfortable with an existing content management software?</h4>
                    <p className='font-light text-lg'>If you or your team already has experience with a popular CMS software, Builflat can develop on top of majority of the popular systems, allowing your team to continue using what they&apos;re comfortable with.</p>
                </div>
                <div className="grid-layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/wordpress.png" alt="wordpress logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Wordpress</p>
                    </div>
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/joomla.png" alt="Joomla logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Joomla</p>
                    </div>
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/droopal.png" alt="Droopal logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Droopal</p>
                    </div>
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/magento.png" alt="Magento logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Magento</p>
                    </div>
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/wix.png" alt="Wix logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Wix</p>
                    </div>
                    <div className='h-[70px] bg-[--dark-background-color] rounded-md flex flex-row gap-3 items-center px-6'>
                        <Image src="/application/software/webflow.png" alt="Webflow logo icon" className='w-9' width="100" height="100"></Image>
                        <p className='font-medium text-lg text-white'>Webflow</p>
                    </div>
                </div>
                <span className='text-center w-full block font-medium mt-10'>Don&apos;t see the software your team uses? <Link href="/contact" className='text-purple'>Contact us</Link> to see if we can still help.</span>
            </div>
        </section>
        </>
    );
};
export default CmsSoftware;