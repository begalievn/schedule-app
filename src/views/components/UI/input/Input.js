import React, { useCallback } from "react";
import { InputAdornment, TextField, styled } from "@mui/material";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({
    value,
    onChange,
    label,
    iconVariant,
    type,
    InputProps,
    error,
    placeholder,
    name,
    ref,
    ...props
  }) => {
    const iconChangeHandlerVariant = useCallback(() => {
      const positionAdornment =
        iconVariant === "end" ? "endAdornment" : "startAdornment";

      return {
        [positionAdornment]: <InputAdornment position={iconVariant} />,
      };
    }, [iconVariant]);

    return (
      <StyledInput
        label={label}
        ref={ref}
        placeholder={placeholder}
        size='small'
        fullWidth
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        error={error}
        InputProps={{
          ...InputProps,
          ...iconChangeHandlerVariant(),
          classes: { root: "input" },
        }}
        {...props}
      />
    );
  },
);

const StyledInput = styled(TextField)(() => ({
  "& .input": {
    border: "1px solid #AFAFAF",
    borderRadius: "8px",
    background: "#FFFFFF",
    color: "black",
  },

  "& .input.Mui-error": {
    border: "1px solid red",
  },

  "& .input:not(.Mui-error):hover": {
    border: "1px solid #0079BF",
  },

  "&:focus": {
    border: "1px solid #919191",
    color: "#919191",
    "& .MuiInputLabel-root": {
      color: "#919191",
    },
  },

  "& .MuiInputLabel-root": {
    color: "black",
    fontSize: "16px",
    background: "initial",
    padding: "0px 4px 0px 8px",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    left: "6px",
    fontSize: "14px",
    color: "#AFAFAF",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

//
