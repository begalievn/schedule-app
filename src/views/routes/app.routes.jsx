import {Main} from "../content/main";
import { Outlet } from 'react-router-dom';
import {NotFound} from "../pages/not-found";
import {StartPage} from "../pages/start-page";
import {SchedulePage} from "../pages/schedule-page";
import {BrowserRoute} from "./browser.routes";

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
    }]
}];
