import Link from 'next/link';
import Image from 'next/image';

const Clients = () => {
    return (
        <>
        <div className="site-wrapper">
            <div className="client-list w-full lg:w-4/5 mx-auto text-center">
                <h4 className='text-xl md:text-2xl font-medium text-white'>Some of the awesome clients we&apos;ve worked with</h4>
                <div className="brand-container spaced-p flex flex-wrap justify-center items-center gap-6 lg:gap-2 md:justify-between ">
                   <Image src="/locations/clients/kwt.svg" alt="Kiwi wonder tours logo" width='100' height='44'></Image>
                   <Image src="/locations/clients/cvcompton.svg" alt="cvcompton logo" width='100' height='44'></Image>
                   <Image src="/locations/clients/wrks.svg" alt="wrks logo" width='100' height='44'></Image>
                   <Image src="/locations/clients/blankcanvas.png" alt="blankcanvas logo" width='100' height='44'></Image>
                   <Image src="/locations/clients/chasnz.svg" alt="chasnz logo" width='150' height='44'></Image>
                   <Image src="/locations/clients/doofy.svg" alt="kpmg logo" width='125' height='44'></Image>
                </div>
            </div>
        </div>
        </>
    );
};

export default Clients;