import { routeUrls } from "@/utils/constants";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface HeaderProps {
  userSession: Session | null;
}

const Header = ({ userSession }: HeaderProps) => {
  const isUserLoggedIn = userSession && userSession.user;
  const router = useRouter();

  console.log({ userSession });

  return (
    <header>
      <div className="container">
        <div className="pages">
          <Link href={routeUrls.productListing} className="header-link">
            View Products
          </Link>
        </div>

        <div className="user">
          {isUserLoggedIn ? (
            <div>
              Welcome {userSession.user?.name}{" "}
              <button
                onClick={() => {
                  router.push("/api/auth/signout");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login"
              onClick={() => {
                router.push(routeUrls.auth);
              }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
