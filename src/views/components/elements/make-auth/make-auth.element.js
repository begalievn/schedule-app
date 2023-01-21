import classes from './style.module.scss';
import {NavLink} from "react-router-dom";

export const MakeAuth = (props) => {
    return (
        <div className={classes.make_auth}>
            <div>
                <NavLink to={'/admin'}>
                    Admin
                </NavLink>
            </div>
        </div>
    )
}
