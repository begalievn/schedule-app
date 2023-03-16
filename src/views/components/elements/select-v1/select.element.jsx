import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";

export const SelectV1 = ({ children, selecTitle }) => {
  const [selectValue, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{ minWidth: "300px" }}
      size='small'
    >
      <InputLabel>{selecTitle}</InputLabel>
      <MuiSelect
        value={selectValue}
        label={selecTitle}
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {children}
      </MuiSelect>
    </FormControl>
  );
};
