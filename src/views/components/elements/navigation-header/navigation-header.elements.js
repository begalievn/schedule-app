import classes from './style.module.scss';
import {NavLink} from "react-router-dom";

export const NavigationHeader = (props) => {
    const handleClick = () => {
        props.setState(false);
    }
    
    return (
        <div className={classes.navigation}>
            <ul className={`${classes.unordered_list} ${props.value ? classes.list_vertical : ''}`}>
                <li className={classes.list_item} onClick={handleClick}>
                    <NavLink className={classes.nav_link} to={"/schedule"}>
                        Schedule
                    </NavLink>
                </li>
                <li className={classes.list_item} onClick={handleClick}>
                    <NavLink className={classes.nav_link} to={"/news"}>
                        News
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
