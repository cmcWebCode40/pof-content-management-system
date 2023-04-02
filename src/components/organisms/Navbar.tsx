import { getServerSession } from "next-auth";
import Link from "next/link";
import { Fragment } from "react";
import { buttonVariants } from "@/components/atoms";
import { LoginButton , LogOutButton } from "@/components/molecules";


export const Navbar = async  () => {
  const authSession = await getServerSession();
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container flex max-w-7xl mx-auto w-full justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          CMS Manager
        </Link>
        <div className="md:hidden">
          {/* <ThemeToggle /> */}
        </div>
        <div className="hidden md:flex gap-4">
          {/* <ThemeToggle /> */}
          <Link href="/docs" className={buttonVariants({ variant: "ghost" })}>
            Get started
          </Link>
          {authSession ? (
            <Fragment>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <LogOutButton />
            </Fragment>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
};
