import { Switch } from "@mui/material";
import React from "react";

function CSSwitch(props) {
  const { label, onChange, value } = props;
  return (
    <>
      <Switch label={label} onChange={onChange} value={value} />
    </>
  );
}

export default CSSwitch;
