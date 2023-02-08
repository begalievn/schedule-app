import { useState } from "react";

import { Main } from "../content/main";
import { Outlet } from "react-router-dom";

import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { NotFound } from "../pages/not-found";
import { StartPage } from "../pages/start-page";
import { Teacher } from "../pages/teacher-page";
import { SubjectPage } from "../pages/subject-page";
import { SchedulePage } from "../pages/schedule-page";
import { GroupPage } from "../pages/group-page/group-page.view";
import { ClassroomPage } from "../pages/classroom-page/classroom-page.view";

import { BrowserRoute } from "./browser.routes";
import { PrivateAuthRoute } from "./PrivateAuthRoute";

export const AppRoutesDefinition = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
              fallbackPath={BrowserRoute.SIGN_IN}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.SCHEDULE_PAGE,
          element: (
            <PrivateAuthRoute
              Component={<SchedulePage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.TEACHER,
          element: (
            <PrivateAuthRoute
              Component={<Teacher />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.SUBJECT,
          element: (
            <PrivateAuthRoute
              Component={<SubjectPage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.CLASSROOM,
          element: (
            <PrivateAuthRoute
              Component={<ClassroomPage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
        {
          path: BrowserRoute.GROUP,
          element: (
            <PrivateAuthRoute
              Component={<GroupPage />}
              fallbackPath={BrowserRoute.startPage}
              isAllowed={isLoggedIn}
            />
          ),
        },
      ],
    },
    {
      path: BrowserRoute.SIGN_IN,
      element: (
        <PrivateAuthRoute
          Component={<SignIn />}
          fallbackPath={BrowserRoute.SIGN_IN}
          isAllowed={!isLoggedIn}
        />
      ),
    },
    {
      path: BrowserRoute.SIGN_UP,
      element: <SignUp />,
    },
  ];
};
