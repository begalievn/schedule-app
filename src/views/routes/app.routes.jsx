import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { Main } from "../content/main";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { NotFound } from "../pages/not-found";
import { StartPage } from "../pages/start-page";
import { Teacher } from "../pages/admin/sub-pages/teacher-page";
import { SubjectPage } from "../pages/admin/sub-pages/subject-page";
import { SchedulePage } from "../pages/admin/sub-pages/schedule-page";
import { GroupPage } from "../pages/admin/sub-pages/group-page/group-page.view";
import { ClassroomPage } from "../pages/admin/sub-pages/classroom-page";

import { BrowserRoute } from "./browser.routes";
import { PrivateAuthRoute } from "./PrivateAuthRoute";
import {AdminPage} from "../pages/admin/admin.view";
import {TeacherList} from "../pages/admin/sub-pages/teacher-page/sub-pages/teacher-list";
import {TeacherCreate} from "../pages/admin/sub-pages/teacher-page/sub-pages/teacher-create";

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
          path: BrowserRoute.ADMIN,
          element: (
              <AdminPage>
                <Outlet />
              </AdminPage>
          ),
          children: [
            {
              path: '',
              element: <Navigate to="schedule" />,
            },
            {
              path: BrowserRoute.ADMIN_SCHEDULE,
              element: (
                <PrivateAuthRoute
                  Component={<SchedulePage />}
                  fallbackPath={BrowserRoute.startPage}
                  isAllowed={isLoggedIn}
                />
              ),
            },
            {
              path: BrowserRoute.ADMIN_TEACHER,
              element: (
                <Teacher>
                  <Outlet />
                </Teacher>
              ),
              children: [
                {
                  index: true,
                  element: (
                    <TeacherList />
                  )
                },
                {
                  path: BrowserRoute.ADMIN_TEACHER_CREATE,
                  element: (
                    <TeacherCreate />
                  )
                }
              ]
            },
            {
              path: BrowserRoute.ADMIN_SUBJECT,
              element: (
                <PrivateAuthRoute
                  Component={<SubjectPage />}
                  fallbackPath={BrowserRoute.startPage}
                  isAllowed={isLoggedIn}
                />
              ),
            },
            {
              path: BrowserRoute.ADMIN_CLASSROOM,
              element: (
                <PrivateAuthRoute
                  Component={<ClassroomPage />}
                  fallbackPath={BrowserRoute.startPage}
                  isAllowed={isLoggedIn}
                />
              ),
            },
            {
              path: BrowserRoute.ADMIN_GROUP,
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
      ],
    },
    {
      path: BrowserRoute.SIGN_IN,
      element: (
        <PrivateAuthRoute
          Component={<SignIn />}
          fallbackPath={BrowserRoute.startPage}
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
