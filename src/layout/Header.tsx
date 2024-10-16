import { routeUrls } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const isUserLoggedIn = false;
  const router = useRouter();

  const user = {
    name: "John Doe",
  };

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
            <div>Welcome {user.name}</div>
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
