import classes from './style.module.scss';
import {NavLink} from "react-router-dom";

export const LogoElement = (props) => {
    return (
        <div className={classes.logo}>
            <NavLink className={classes.h3_nav_link} to={'/'}>
                <h3>Logo</h3>
            </NavLink>
        </div>
    )
}
