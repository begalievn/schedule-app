import { styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import classes from "./style.module.scss";

export const Teacher = (props) => {
  return (
    <div className={classes.container}>
      <h1>Teacher</h1>
      <button>
        <NavLink to={"create"}>Create</NavLink>
      </button>
      {props.children}
    </div>
  );
};
