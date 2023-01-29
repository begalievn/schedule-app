import { Main } from "../content/main";
import { Outlet } from "react-router-dom";
import { NotFound } from "../pages/not-found";
import { StartPage } from "../pages/start-page";
import { SchedulePage } from "../pages/schedule-page";
import { BrowserRoute } from "./browser.routes";
import { News } from "../pages/news";
import { AdminPage } from "../pages/admin/admin.view";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { useState } from "react";
import { PrivateAuthRoute } from "./PrivateAuthRoute";

export const AppRoutesDefinition = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return [
    {
      path: "/",
      element: (
        <Main>
          <Outlet />
        </Main>
      ),
      children: [
        {
          path: BrowserRoute.notFound,
          element: <NotFound />,
        },
        {
          path: BrowserRoute.startPage,
          element: (
            <PrivateAuthRoute
              Component={<StartPage />}
              fallbackPath={BrowserRoute.signIn}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.schedulePage,
          element: (
            <PrivateAuthRoute
              Component={<SchedulePage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.newsPage,
          element: (
            <PrivateAuthRoute
              Component={<News />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.adminPage,
          element: (
            <PrivateAuthRoute
              Component={<AdminPage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
      ],
    },
    {
      path: BrowserRoute.signIn,
      element: (
        <PrivateAuthRoute
          Component={<SignIn />}
          fallbackPath={BrowserRoute.signIn}
          isAllowed={!isLoggedIn}
        />
      ),
    },
    {
      path: BrowserRoute.signUp,
      element: <SignUp />,
    },
  ];
};
