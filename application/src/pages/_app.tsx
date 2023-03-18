import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotificationProvider from "@/context/notification";
import { SessionProvider } from "next-auth/react"
import RouteGuard from "@/components/RouteGuard";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <RouteGuard>
        <NotificationProvider>
          <main className="font-inter bg-hero">
            <Navbar/>
            <Component {...pageProps} />
          </main>
        </NotificationProvider>
      </RouteGuard>
    </SessionProvider>
  );
}
