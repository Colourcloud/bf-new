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
                        <p className='text-xl font-light text-white'>Builtflat&apos;s e-commerce websites are the perfect way to get your offers directly in front of your existing and potential clients so they can start spending it up!</p>
                    </div>
                </div>
                <div className="section-graphic flex flex-col lg:flex-row gap-8 items-center">
                    <div className="section-image w-full lg:w-3/5">
                        <Image src="/application/ecommerce-graphic.jpg" alt="dashboard ui for suit shop" className='rounded-lg max-w-none w-[120%] lg:-ml-44' width="1800" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/5 text-white flex flex-col gap-6">
                        <h4 className='text-4xl font-bold'>Your products direct to your customers.</h4>
                        <p className='font-light text-lg'>Online shopping has become incredibly convenient. E-commerce sites offer a wide range of products, giving people worldwide the ability to buy what they want, anytime and anywhere with internet access.</p>
                        <p className='font-light text-lg'>E-commerce is booming, especially since the pandemic forced traditional stores to close. Builtflat understands the value of digitalizing businesses and creating customized e-commerce sites with various features and designs for different industries. Whether you need a template-based or fully custom website, Builtflat has solutions to help you reach your customers effectively.</p>
                        <p className='font-light text-lg'>Builtflat knows that every business is unique. We&apos;re proactive in designing and testing new features for different industries. Whether you want a pre-built template or a custom website, we have solutions to connect your products directly with buyers.</p>
                    </div>
                </div>

                <div className="payments spaced-m spaced-p flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center">
                    <div className="section-text w-full lg:w-2/6 text-white flex flex-col gap-6">
                        <h4 className='text-4xl font-bold'>Accept payments from anywhere, anytime.</h4>
                        <p className='font-light text-lg'>E-commerce websites are one of the easiest ways for your customers to purchase from you. With the rise of Apple & Google pay, purchasing can be done with the click of a button.</p>
                    </div>
                    <div className="section-image flex flex-row justify-center">
                        <Image src="/application/payment-graphic.jpg" alt="dashboard ui for suit shop" className='rounded-lg max-w-none w-[75%]' width="1200" height="800"></Image>
                    </div>
                </div>

                <div className="products spaced-m spaced-p flex flex-col flex-col-reverse lg:flex-row gap-12 lg:gap-36 items-center justify-center">
                    <div className="section-image flex flex-row justify-center">
                        <Image src="/application/products-graphic.png" alt="dashboard ui for suit shop" className='rounded-lg max-w-none w-[85%]' width="1200" height="800"></Image>
                    </div>
                    <div className="section-text w-full lg:w-2/6 text-white flex flex-col gap-6">
                        <h4 className='text-4xl font-bold'>Add products, track orders, all in one place.</h4>
                        <p className='font-light text-lg'>E-commerce websites have not only given the consumer more power and purchasing options but the ability to track orders, talk to online support, check stock availability and more! You don&apos;t want to be missing out on this sales opportunity.</p>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    );
};
export default Ecommerce;