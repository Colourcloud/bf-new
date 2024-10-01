import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimatedText from '../common/AnimateText';
import AnimateOnScroll from '../common/AnimateOnScroll';
import TeamMembers from '../../data/TeamMembers.json';


const Team = () => {


    return (
        <div className='py-20 md:py-40 bg-[--background-light]'>
            <div className="site-wrapper">
                <div className="section-text w-full md:w-2/3 flex flex-col gap-8 items-start">
                    <span className='highlighted-purple-text rounded-full text-sm font-medium'>Meet the Team</span>
                    <h4 className='text-4xl md:text-5xl font-bold'>Meet our team of creators, designers, developers &amp; world class problem solvers</h4>
                    <p className='text-2xl font-light text-[#7d7d7d]'>It takes a team of passionate people to overcome tough challenges, meet your business needs, and achieve your goals. Meet the team &#40;And the animals that back them&#41; who can make that happen.</p>
                </div>

                <section className="team-members mt-16">
                    {TeamMembers.map(member => (
                        <div key={member.id} className="team-member-card bg-black rounded-lg object-cover overflow-hidden relative">
                            <Image src={member.imageSrc} alt={member.altText} className='relative z-20' width='600' height='450' priority />
                            <div className="team-member-info flex flex-col gap-4 absolute bottom-0 z-50 w-full p-8">
                                <h4 className='text-white text-xl font-bold'>{member.name}</h4>
                                <div className="roles flex flex-row gap-2">
                                    {member.roles.map((role, index) => (
                                        <span key={index} className='border border-white rounded-full px-3 py-1 text-sm text-white'>{role}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};
export default Team;