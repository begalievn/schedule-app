import {NavLink} from "react-router-dom";

// assets
import { alaTooLogo } from '../../../../assets/logos'

// styles
import classes from './style.module.scss';

export const LogoElement = (props) => {
    return (
        <div className={classes.logo}>
            <NavLink className={classes.h3_nav_link} to={'/'}>
                <div className={classes.logo_image}>
                    <img src={alaTooLogo} alt={"Ala-Too logo"} />
                </div>
            </NavLink>
        </div>
    )
}
