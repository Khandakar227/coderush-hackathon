import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import NotificationProvider from "@/context/notification";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <main className="font-inter bg-hero">
        <nav className="flex justify-between gap-4 py-4 px-8 text-white bg-[#040926]">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">CVRush</h1>
            {/* <img src="/assets/favicon.png" alt="Logo" className="w-12 h-12"/> */}
          </Link>
          <div>
            <Link href={"/auth/login"}>
              <button className="p-1 rounded-md mx-4 font-bold">Login</button>
            </Link>
            <Link href={"/auth/signup"}>
              <button className="p-1 rounded-md mx-4 font-bold">Sign up</button>
            </Link>
          </div>
        </nav>

        <Component {...pageProps} />
      </main>
    </NotificationProvider>
  );
}
