import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next gen CV</title>
        <meta name="description" content="An automated CV generator web app+" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-inter'>
        <nav className='flex justify-between gap-4 py-4 px-8 text-white bg-[#040926]'>
          <h1 className='text-3xl font-bold'>CVRush</h1>

          <div>
            <button className='p-1 rounded-md mx-4 font-bold'>Login</button>
            <button className='p-1 rounded-md mx-4 font-bold'>Sign up</button>
          </div>
        </nav>
        
        <div className='flex justify-center items-center gap-4 custom-h max-w-7xl mx-auto'>
          <div className='grid justify-center items-center gap-4 p-4'>
            <h1 className='font-semibold text-6xl font-lora py-4'>Take the Hassle Out of CV Writing</h1>
            <p className='py-4 text-lg'>
              No time to rush? Rush with our CVRush
            </p>
            <p className='py-8'>
            Effortlessly create a tailored CV with our automated generator web app, designed to save you time and help you land your dream job. Choose from a variety of professional templates and easily input your personal details, work experience, education, and skills to generate a polished CV in just minutes.
            </p>
            <div>
              <Link href={"/cv-generator"}>
                <button className='bg-black text-white rounded-md py-4 px-8'> Generate CV </button>
              </Link>
            </div>
          </div>
          <Image className='w-full max-w-lg shadow-md rounded-md' src="/assets/CV_intro.png" width={600} height={800} alt="CV intro" />
        </div>
      </main>
    </>
  )
}
