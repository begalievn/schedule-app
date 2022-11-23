import classes from './style.module.scss';

export const BlockContainer = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}
