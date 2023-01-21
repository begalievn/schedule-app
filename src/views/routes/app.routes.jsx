import {Main} from "../content/main";
import { Outlet } from 'react-router-dom';
import {NotFound} from "../pages/not-found";
import {StartPage} from "../pages/start-page";
import {SchedulePage} from "../pages/schedule-page";
import {BrowserRoute} from "./browser.routes";
import {News} from "../pages/news";
import {AdminPage} from "../pages/admin/admin.view";

export const appRoutesDefinition = [{
    path: '/',
    element: (
        <Main>
            <Outlet />
        </Main>
    ),
    children: [{
        path: BrowserRoute.notFound,
        element: <NotFound />
    }, {
        path: BrowserRoute.startPage,
        element: <StartPage />
    }, {
        path: BrowserRoute.schedulePage,
        element: <SchedulePage />
    }, {
        path: BrowserRoute.newsPage,
        element: <News />
    }, {
        path: BrowserRoute.adminPage,
        element: <AdminPage />
    }]
}];
