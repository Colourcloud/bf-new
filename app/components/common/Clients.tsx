import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Clients = () => {
    return (
        <>
        <div className="site-wrapper spaced-p spaced-m">
            <div className="client-list w-full md:w-3/5 mx-auto text-center">
                <h4 className='text-3xl font-medium'>Solving tough challenges for some leading brands</h4>
                <div className="brand-container spaced-p flex flex-wrap justify-center items-center gap-6 lg:gap-0 md:justify-between ">
                   <Image src="/clients/kpmg.svg" alt="kpmg logo" width='100' height='44'></Image>
                   <Image src="/clients/mercedes.svg" alt="kpmg logo" width='100' height='44'></Image>
                   <Image src="/clients/pg.svg" alt="kpmg logo" width='100' height='44'></Image>
                   <Image src="/clients/pinterest.svg" alt="kpmg logo" width='100' height='44'></Image>
                   <Image src="/clients/stripe.svg" alt="kpmg logo" width='100' height='44'></Image>
                   <Image src="/clients/telus.svg" alt="kpmg logo" width='100' height='44'></Image>
                </div>
            </div>
        </div>
        </>
    );
};

export default Clients;