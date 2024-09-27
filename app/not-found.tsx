import Link from 'next/link'
import Button from './components/common/Button'
import NavbarWhite from './components/common/NavbarWhite'
import LottieAnimation from './components/common/LottieAnimation'

export default function NotFound() {
  return (
    <>
    <NavbarWhite />
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className='w-full md:w-2/4 lg:w-2/5'><LottieAnimation animationUrl="https://lottie.host/6abe6c69-076c-4674-824d-708e52a6461d/TH6Ai8gqCy.json" /></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">We couldn't find what you were looking for</h1>
        <p className="text-xl mb-8">The page you're looking for doesn't exist</p>
        <Link href="/" passHref className='flex justify-center'>
            <Button backgroundColor="--primary-color" textColor="white" className="background-purple" href="/contact">Return Home</Button>
        </Link>
      </div>
    </div>
    </>
  )
}