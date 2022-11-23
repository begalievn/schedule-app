import classes from './style.module.scss';
import {LogoElement} from "../../components/elements/logo";
import {NavigationHeader} from "../../components/elements/navigation-header";
import {MakeAuth} from "../../components/elements/make-auth";

export const Header = () => {
    return (
        <header className={classes.header}>
            <LogoElement />
            <NavigationHeader />
            <MakeAuth />
        </header>
    )
}
