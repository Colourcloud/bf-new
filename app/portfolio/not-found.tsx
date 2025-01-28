import Link from 'next/link'
import Button from '../components/common/Button'
import NavbarWhite from '../components/common/NavbarWhite'
import LottieAnimation from '../components/common/LottieAnimation'

export default function NotFound() {
  return (
    <>
    <NavbarWhite />
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className='w-full md:w-2/4 lg:w-2/5'><LottieAnimation animationUrl="https://lottie.host/612023d1-de4c-49e5-8e06-fa3e8b496651/lTJHYSPLzM.json" /></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-xl mb-8">The blog post you&apos;re looking for doesn&apos;t exist</p>
        <Link href="/blog" passHref className='flex justify-center'>
            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/blog">Return to Blog</Button>
        </Link>
      </div>
    </div>
    </>
  )
} 