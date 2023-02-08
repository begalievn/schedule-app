import React, { useCallback } from "react";
import { InputAdornment, TextField, styled } from "@mui/material";

export const Input = ({
  value,
  onChange,
  label,
  iconVariant,
  type,
  InputProps,
  error,
  placeholder,
  name,
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
};

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