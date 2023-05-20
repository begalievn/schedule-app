import { Outlet, Navigate } from 'react-router-dom';

import { Main } from '../content/main';
import { SignIn } from '../pages/sign-in';
import { SignUp } from '../pages/sign-up';
import { NotFound } from '../pages/not-found';
import { StartPage } from '../pages/start-page';
import { SubjectPage } from '../pages/admin/subject-page';
import { SchedulePage } from '../pages/admin/schedule-page';
import { GroupPage } from '../pages/admin/group-page/group-page.view';
import { ClassroomPage } from '../pages/admin/classroom-page';

import { BrowserRoute } from './browser.routes';
import { PrivateAuthRoute } from './PrivateAuthRoute';
import { AdminPage } from '../pages/admin/admin.view';
import { ScheduleListPage } from '../pages/admin/schedule-page/schedules-list';
import { ScheduleCreatePage } from '../pages/admin/schedule-page/schedule-create';
import { ScheduleSendPage } from '../pages/admin/schedule-page/schedule-send';
import { ScheduleTablePage } from '../pages/admin/schedule-page/schedule-table';
import { SubjectCreate } from '../pages/admin/subject-page';
import { SubjectList } from '../pages/admin/subject-page';
import { useSelector } from 'react-redux';
import { ClassroomList } from '../pages/admin/classroom-page/classroom-list/classroom-list.view';
import { ClassroomCreate } from '../pages/admin/classroom-page/classroom-create/classroom-create.view';
import {
	Teacher,
	TeacherCreate,
	TeacherList,
} from '../pages/admin/teacher-page';
import { SubjectUpdate } from '../pages/admin/subject-page/subject-update';
import {ScheduleTableSelectedPage} from '../pages/admin/schedule-page/schedule-table-selected';
import {TeacherUpdate} from '../pages/admin/teacher-page/teacher-update';
import {GroupList} from '../pages/admin/group-page/group-list/group-list.view';
import {GroupCreate} from '../pages/admin/group-page/group-create/group-create.view';
import {GroupUpdate} from '../pages/admin/group-page/group-update/group-update.view';
import {ClassroomUpdate} from '../pages/admin/classroom-page/classroom-update/classroom-update.view';

export const AppRoutesDefinition = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
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
						<StartPage />
					),
				},
				{
					path: BrowserRoute.ADMIN,
					element: (
						<PrivateAuthRoute
							Component={
								<AdminPage>
									<Outlet />
								</AdminPage>
							}
							fallbackPath={BrowserRoute.SIGN_IN}
							isAllowed={isLoggedIn}
						/>
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
								{
									path: BrowserRoute.ADMIN_SCHEDULE_PAGE_TABLE_SELECTED,
									element: <ScheduleTableSelectedPage />
								}
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
                {
                  path: BrowserRoute.ADMIN_TEACHER_UPDATE,
									element: <TeacherUpdate />
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
								{
									path: BrowserRoute.ADMIN_SUBJECT_UPDATE,
									element: <SubjectUpdate />,
								},
							],
						},
						{
							path: BrowserRoute.ADMIN_CLASSROOM,
							element: (
								<PrivateAuthRoute
									Component={
										<ClassroomPage>
											<Outlet />
										</ClassroomPage>
									}
									fallbackPath={BrowserRoute.startPage}
									isAllowed={isLoggedIn}
								/>
							),
							children: [
								{
									index: true,
									element: <ClassroomList />,
								},
								{
									path: BrowserRoute.ADMIN_CLASSROOM_CREATE,
									element: <ClassroomCreate />,
								},
								{
									path: BrowserRoute.ADMIN_CLASSROOM_UPDATE,
									element: <ClassroomUpdate />,
								}
							],
						},
						{
							path: BrowserRoute.ADMIN_GROUP,
							element: (
								<PrivateAuthRoute
									Component={
									<GroupPage>
										<Outlet />
									</GroupPage>}
									fallbackPath={BrowserRoute.startPage}
									isAllowed={isLoggedIn}
								/>
							),
							children: [
								{
									index: true,
									element: <GroupList />,
								},
								{
									path: BrowserRoute.ADMIN_GROUP_CRATE,
									element: <GroupCreate />
								},
								{
									path: BrowserRoute.ADMIN_GROUP_UPDATE,
									element: <GroupUpdate />
								}
							]
						},
					],
				},
			],
		},
		{
			path: BrowserRoute.SIGN_IN,
			element: (
				<SignIn />
			),
		},
		{
			path: BrowserRoute.SIGN_UP,
			element: <SignUp />,
		},
	];
};
