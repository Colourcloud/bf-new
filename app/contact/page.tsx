import Header from '../components/partnership/Header';
import { Metadata } from 'next'
import ContactForm from '../components/contact/ContactForm';
import Navbar from '../components/common/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Builtflat - Contact us',
    description: 'Start your digital journey today. Contact us for any questions or concerns',
  }
 
const Contact: React.FC = () => {
    return (
        <>
        <div className="header-notice p-4 text-center w-full bg-[--primary-color] text-sm text-white">Want a free website analysis valued at over $250? <Link href='/website-analysis/' className='font-bold'>Apply Here</Link></div>
            <div className='bg-[--dark-background-color]'>
                <Navbar></Navbar>
                <ContactForm />
            </div>
        
        </>
    );
};

export default Contact;

