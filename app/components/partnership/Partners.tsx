import Image from 'next/image';
import Button from '../common/Button';
import Navbar from '../common/Navbar';
import AnimatedText from '../common/AnimateText';


const Partners = () => {


    return (
       <section className='partners py-10 border-t border-b border-[--border-colour-dark]'>
        <div className="site-wrapper flex flex-col gap-6">
            <h4 className='text-[--text-on-dark] font-semibold text-large text-center'>Our Design Partners</h4>
            <div className="partner-logos flex flex-row flex-wrap gap-14 justify-center">
                <Image src="/partnership/brands/amazon.svg" alt="face avatar" width="100" height="125" className=''></Image>
                <Image src="/partnership/brands/shopify.svg" alt="face avatar" width="100" height="125" className=''></Image>
                <Image src="/partnership/brands/facebook.svg" alt="face avatar" width="100" height="125" className=''></Image>
                <Image src="/partnership/brands/adobe.svg" alt="face avatar" width="100" height="125" className=''></Image>
                <Image src="/partnership/brands/microsoft.svg" alt="face avatar" width="100" height="125" className=''></Image>
                <Image src="/partnership/brands/disney.svg" alt="face avatar" width="75" height="125" className=''></Image>
                <Image src="/partnership/brands/lyft.svg" alt="face avatar" width="40" height="125" className=''></Image>
            </div>
        </div>
       </section>
    );
};
export default Partners;