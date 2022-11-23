import classes from './style.module.scss';
import {NavLink} from "react-router-dom";

export const NavigationHeader = () => {
    return (
        <div className={classes.navigation}>
            <ul className={classes.unordered_list}>
                <li className={classes.list_item}>
                    <NavLink className={classes.nav_link} to={"/schedule"}>
                        Schedule
                    </NavLink>
                </li>
                <li className={classes.list_item}>
                    <NavLink className={classes.nav_link} to={"/news"}>
                        News
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
