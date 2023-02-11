import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({
  children,
  width,
  onClick,
  hover,
  active,
  disabled,
  bgcolor,
  style,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      bgcolor={bgcolor}
      hover={hover}
      active={active}
      width={width}
      style={style}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(() => ({
  borderRadius: "10px",
  color: "#FFFFFF",
  background: "#0079BF",
  fontSize: "16px",
  textTransform: "none",
  padding: "8px 16px",
  fontWeight: "400",
  "&:hover": {
    background: "#005688",
  },
  "&:active": {
    background: "#57AEE0",
  },
  "&&&": {
    "&.Mui-disabled ": {
      color: "#e1dfdf",
      background: "#AFAFAFcd",
    },
  },
}));
