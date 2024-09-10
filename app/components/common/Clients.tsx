import Link from 'next/link';
import Image from 'next/image';

const Clients = () => {
    return (
        <>
        <div className="site-wrapper spaced-p spaced-m">
            <div className="client-list w-full lg:w-4/5 mx-auto text-center">
                <h4 className='text-2xl md:text-3xl font-medium'>Some of the awesome clients we&apos;ve worked with</h4>
                <div className="brand-container spaced-p flex flex-wrap justify-center items-center gap-6 lg:gap-2 md:justify-between ">
                   <Image src="/clients/johnstons.svg" alt="johnstons logo" width='100' height='44'></Image>
                   <Image src="/clients/cvcompton.svg" alt="cvcompton logo" width='100' height='44'></Image>
                   <Image src="/clients/wrks.svg" alt="wrks logo" width='100' height='44'></Image>
                   <Image src="/clients/blankcanvas.png" alt="blankcanvas logo" width='100' height='44'></Image>
                   <Image src="/clients/chasnz.svg" alt="chasnz logo" width='80' height='44'></Image>
                   <Image src="/clients/doofy.svg" alt="kpmg logo" width='100' height='44'></Image>
                </div>
            </div>
        </div>
        </>
    );
};

export default Clients;