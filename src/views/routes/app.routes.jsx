import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { Main } from '../content/main';
import { SignIn } from '../pages/sign-in';
import { SignUp } from '../pages/sign-up';
import { NotFound } from '../pages/not-found';
import { StartPage } from '../pages/start-page';
import { Teacher } from '../pages/admin/sub-pages/teacher-page';
import { SubjectPage } from '../pages/admin/sub-pages/subject-page';
import { SchedulePage } from '../pages/admin/sub-pages/schedule-page';
import { GroupPage } from '../pages/admin/sub-pages/group-page/group-page.view';
import { ClassroomPage } from '../pages/admin/sub-pages/classroom-page';

import { BrowserRoute } from './browser.routes';
import { PrivateAuthRoute } from './PrivateAuthRoute';
import { AdminPage } from '../pages/admin/admin.view';
import { TeacherList } from '../pages/admin/sub-pages/teacher-page/sub-pages/teacher-list';
import { TeacherCreate } from '../pages/admin/sub-pages/teacher-page/sub-pages/teacher-create';
import { ScheduleListPage } from '../pages/admin/sub-pages/schedule-page/schedule-sub-pages/schedules-list';
import { ScheduleCreatePage } from '../pages/admin/sub-pages/schedule-page/schedule-sub-pages/schedule-create/schedule-create-page.view';
import { ScheduleSendPage } from '../pages/admin/sub-pages/schedule-page/schedule-sub-pages/schedule-send/schedule-send-page.view';
import { ScheduleTablePage } from '../pages/admin/sub-pages/schedule-page/schedule-sub-pages/schedule-table/schedule-table-page.view';
import { SubjectCreate } from '../pages/admin/sub-pages/subject-page/subject-sub-page/subject-create';
import { SubjectList } from '../pages/admin/sub-pages/subject-page/subject-sub-page/subject-list';
import { useSelector } from 'react-redux';

export const AppRoutesDefinition = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  // const [isLoggedIn] = useState(true);
  return [
    {
      path: '/',
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
              element: <Navigate to='schedule' />,
            },
            {
              path: BrowserRoute.ADMIN_SCHEDULE,
              element: (
                <SchedulePage>
                  <Outlet />
                </SchedulePage>
              ),
              children: [
                {
                  index: true,
                  element: <ScheduleListPage />,
                },
                {
                  path: BrowserRoute.ADMIN_SCHEDULE_PAGE_CREATE,
                  element: <ScheduleCreatePage />,
                },
                {
                  path: BrowserRoute.ADMIN_SCHEDULE_PAGE_SEND,
                  element: <ScheduleSendPage />,
                },
                {
                  path: BrowserRoute.ADMIN_SCHEDULE_PAGE_TABLE,
                  element: <ScheduleTablePage />,
                },
              ],
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
                  element: <TeacherList />,
                },
                {
                  path: BrowserRoute.ADMIN_TEACHER_CREATE,
                  element: <TeacherCreate />,
                },
              ],
            },
            {
              path: BrowserRoute.ADMIN_SUBJECT,
              element: (
                <PrivateAuthRoute
                  Component={
                    <SubjectPage>
                      <Outlet />
                    </SubjectPage>
                  }
                  fallbackPath={BrowserRoute.startPage}
                  isAllowed={isLoggedIn}
                />
              ),
              children: [
                {
                  index: true,
                  element: <SubjectList />,
                },
                {
                  path: BrowserRoute.ADMIN_SUBJECT_CREATE,
                  element: <SubjectCreate />,
                },
              ],
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
