import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: sessionData, status } = useSession();
  const router = useRouter();
  const logOut = () => {
    signOut().then(() => router.push("/auth/login"));
  };

  return (
    <nav className="flex justify-between gap-4 py-4 px-8 text-white bg-[#040926]">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">CVRush</h1>
        {/* <img src="/assets/favicon.png" alt="Logo" className="w-12 h-12"/> */}
      </Link>
      <div>
        {status == "unauthenticated" ? (
          <>
            <Link href={"/auth/login"}>
              <button className="p-1 rounded-md mx-4 font-bold">Login</button>
            </Link>
            <Link href={"/auth/signup"}>
              <button className="p-1 rounded-md mx-4 font-bold">Sign up</button>
            </Link>
          </>
        ) : status == "authenticated" ? (
          <button className="py-4 px-8 font-bold" onClick={logOut}>
            Log out
          </button>
        ) : (
          <Loader />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
