import classes from './style.module.scss';

export const ContentContainer = (props) => {
    return (
        <div className={classes.container} style={props.style}>
            {props.children}
        </div>
    )
}
