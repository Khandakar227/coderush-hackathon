import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='font-inter'>
      <nav className='flex justify-between gap-4 py-4 px-8 text-white bg-[#040926]'>
        <Link href={'/'}>
          <h1 className='text-3xl font-bold'>CVRush</h1>
        </Link>
        <div>
          <button className='p-1 rounded-md mx-4 font-bold'>Login</button>
          <button className='p-1 rounded-md mx-4 font-bold'>Sign up</button>
        </div>
      </nav>
      
      <Component {...pageProps} />
    </main>
  );
}
