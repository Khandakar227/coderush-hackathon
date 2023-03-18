import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Loader from "./Loader";

const routesToGuardifUnAuth = ["/auth/login", "/auth/signup"];
const routesToGuardifAuth = ["/cv-generator"];

function RouteGuard({ children }: { children: ReactNode | ReactNode[] }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const currentRoute = router.pathname;

  if (status == "loading") return <Loader />;
  else if (
    status == "authenticated" &&
    routesToGuardifUnAuth.includes(currentRoute)
  ) {
    router.push("/");
    return <></>;
  } else if (
    status == "unauthenticated" &&
    routesToGuardifAuth.includes(currentRoute)
  ) {
    router.push("/");
    return <></>;
  } else return <>{children}</>;
}

export default RouteGuard;
