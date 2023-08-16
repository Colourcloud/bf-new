import Image from 'next/image';
import Link from 'next/link';

const Ecommerce = () => {
    return (
        <>
        <section className="builtflat-section dark-bg mt-28 overflow-hidden" id="ecommerce">
            <div className="site-wrapper">
                <div className="section-text flex flex-col gap-8">
                    <div className="section-text flex flex-col gap-8 w-full md:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center spaced-m spaced-p">
                        <span className='highlighted-purple-text rounded-full text-sm font-medium'>E-Commerce Services</span>
                        <h4 className='text-4xl md:text-5xl font-bold purple-gradient'>Ready to start selling your products or services online?</h4>
                        <p className='text-xl font-light text-white'>Whether you want to grow brand awareness, showcase your services, increase sales, or increase user engagement, Builtflat can help. We understand it can be difficult to get your brand online, so let us do the hard work for you.</p>
                    </div>
                </div>
                <div className="section-graphic flex flex-col lg:flex-row gap-8 items-center">
                    <div className="section-image w-full lg:w-3/5">
                        <Image src="/application/ecommerce-graphic.jpg" alt="dashboard ui for suit shop" className='rounded-lg max-w-none w-[120%] lg:-ml-44' width="1800" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/5 text-white flex flex-col gap-6">
                        <h4 className='text-4xl font-bold'>Your products direct to your customers.</h4>
                        <p className='font-light'>Online shopping has become incredibly convenient. E-commerce sites offer a wide range of products, giving people worldwide the ability to buy what they want, anytime and anywhere with internet access.</p>
                        <p className='font-light'>E-commerce is booming, especially since the pandemic forced traditional stores to close. Builtflat understands the value of digitalizing businesses and creating customized e-commerce sites with various features and designs for different industries. Whether you need a template-based or fully custom website, Builtflat has solutions to help you reach your customers effectively.</p>
                        <p className='font-light'>Builtflat knows that every business is unique. We&apos;re proactive in designing and testing new features for different industries. Whether you want a pre-built template or a custom website, we have solutions to connect your products directly with buyers.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Ecommerce;